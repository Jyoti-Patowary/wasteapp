import mongoose from "mongoose";

export interface ticketDocument extends mongoose.Document {
  tickerRaiser: string;
  serviceDetails: string;
  acceptor: string;
  createdAt: Date;
  updatedAt: Date;
}

const ticketSchema = new mongoose.Schema(
  {
    ticketRaiser: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    serviceDetails:  { type: String },
    acceptor:  { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  },
  { timestamps: true }
);

const Ticket = mongoose.model<ticketDocument>("Ticket", ticketSchema);

export default Ticket;
