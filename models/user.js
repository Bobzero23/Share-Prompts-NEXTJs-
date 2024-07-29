import { Schema, model, models } from "mongoose";

const UserSchema = newSchema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email already required!"],
  },
  username: {
    type: String,
    required: [true, "Username already required!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

// we first check if the model exists we reuse it instead of defining a new one.
const User = models.User || model("User", UserSchema);
export default User;
