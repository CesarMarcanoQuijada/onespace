import dbConnect from "../../lib/dbConnect";
import User from "../../models/user";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  if (method === "POST") {
    try {
      const user = await User.findOne({ email: req.body.email });

      if (!user) {
        res.status(401).json({ success: false, message: "User not found" });
      }

      const isMatch = await bcrypt.compare(req.body.password, user.password);

      if (!isMatch) {
        res
          .status(401)
          .json({ success: false, message: "Password is incorrect" });
      }

      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false, message: "Something went wrong" });
      console.error(error);
    }
  } else {
    res.status(405).json({ success: false });
  }
}
