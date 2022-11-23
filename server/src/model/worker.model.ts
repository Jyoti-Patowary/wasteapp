import mongoose from "mongoose";

export interface workerDocument extends mongoose.Document {
  address: string;
  photo: string;
  workerExperience: string;
  createdAt: Date;
  updatedAt: Date;
}

const workerSchema = new mongoose.Schema(
  {
    address: { type: String, required: true },
    photo: { data: Buffer, contentType: String },
    workerExperience: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
  },
  { timestamps: true }
);

const Worker = mongoose.model<workerDocument>("Worker", workerSchema);

export default Worker;
