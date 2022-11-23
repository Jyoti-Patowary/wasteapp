import mongoose from "mongoose";

export interface notificationDocument extends mongoose.Document {
  sender: string;
  receiver: string;
  notificationType: string;
  notificationPayload: string;
  createdAt: Date;
  updatedAt: Date;
}

const notificationSchema = new mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin' },
    receiver:  { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
    notificationType:  { type: String },
    notificationPayload: { type: String }
  },
  { timestamps: true }
);

const Notification = mongoose.model<notificationDocument>("notification", notificationSchema);

export default Notification;
