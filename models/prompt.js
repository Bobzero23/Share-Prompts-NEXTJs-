import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User", //one user can create many prompts
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
});

//check if the prompt model exists, if not create a new one call it "Prompt" based on the given schema
const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;
