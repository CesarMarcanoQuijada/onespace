export default function verifyInputs(data, res, inputs) {
  for (let key in inputs) {
    if (!data[key]) {
      res.status(400).json({ success: false, message: `${key} is required` });
      throw new Error(`${key} is required`);
    }

    if (inputs[key].type === "string") {
      if (!inputs[key].RegExp.test(data[key])) {
        res.status(400).json({
          success: false,
          message: `${key} must be ${inputs[key].type}`,
        });
        throw new Error(`${key} must be ${inputs[key].type}`);
      }
    } else if (inputs[key].type === "date") {
      if (!inputs[key].RegExp.test(data[key])) {
        res.status(400).json({
          success: false,
          message: `${key} must be ${inputs[key].type}`,
        });
        throw new Error(`${key} must be ${inputs[key].type}`);
      }
    }
  }
}
