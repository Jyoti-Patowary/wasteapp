import mongoose from "mongoose";

export interface customerDocument extends mongoose.Document {
  address: string;
  photo: string;
  customerHistory: string;
  createdAt: Date;
  updatedAt: Date;
}

const customerSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    address: { type: String, required: true },
    photo: { data: Buffer, contentType: String },
    customerHistory: [{type: mongoose.Schema.Types.ObjectId, ref: "Ticket"}]
  },
  { timestamps: true }
);

const Customer = mongoose.model<customerDocument>("Customer", customerSchema);

export default Customer;
