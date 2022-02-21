import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";
import bcrypt from "bcrypt";
import { signUser } from "../../lib/jwt";
import verifyInputs from "../../middlewares/verifyInputs";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    verifyInputs(req.body, res, {
      name: { type: "string", RegExp: /^[a-zA-Z]{1,100}$/ },
      lastname: { type: "string", RegExp: /^[a-zA-Z]{1,100}$/ },
      username: { type: "string", RegExp: /^[a-zA-Z0-9_]{6,60}$/ },
      email: {
        type: "string",
        RegExp:
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      },
      password: { type: "string", RegExp: /^[\w\W]{6,60}$/ },
      birthday: { type: "date", RegExp: /^\d{4}-\d{2}-\d{2}$/ },
    });

    // verify if the user age is greater than 13
    const age =
      new Date().getFullYear() - new Date(req.body.birthday).getFullYear();
    if (age < 13) {
      res.status(400).json({
        success: false,
      });
      throw new Error("Age must be greater than 13");
    }

    try {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);

      const user = await User.create(req.body);

      const token = await signUser(user);

      res.status(201).json({ success: true, data: token });
    } catch (error) {
      res.status(400).json({ success: false });
      console.error(error);
    }
  } else {
    res.status(405).json({ success: false });
  }
}
