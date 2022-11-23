import mongoose from "mongoose";

export interface adminDocument extends mongoose.Document {
  photo: string;
  createdAt: Date;
  updatedAt: Date;
}

const adminSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    photo: { data: Buffer, contentType: String },
  },
  { timestamps: true }
);

const Admin = mongoose.model<adminDocument>("Admin", adminSchema);

export default Admin;
