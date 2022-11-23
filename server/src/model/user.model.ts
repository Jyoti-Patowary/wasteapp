import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

enum userRole {
  admin = "admin",
  customer = "customer",
  worker = "worker",
}

export interface userDocument extends mongoose.Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phonenumber: number;
  userType: userRole;
  createdAt: Date;
  updatedAt: Date;
  //   comparePassword(userPassword: string): Promise<boolean>;
}

// export interface HookNextFunction {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   (error?: Error): any;
// }

const userSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phonenumber: { type: String, required: true },
    userType: {
      type: String,
      enum: Object.values(userRole),
      // default: userRole.admin,
      required: true,
    },
  },
  { timestamps: true }
);

//   userSchema.pre("save", async function (next: HookNextFunction) {
//     let customer = this as userDocument;

//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified("password")) return next();

//     // Random additional data
//     const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));

//     const hash = await bcrypt.hashSync(user.password, salt);

//     // Replace the password with the hash
//     user.password = hash;

//     return next();
//   });

//   // Used for logging in
//      userSchema.methods.comparePassword = async function (
//     candidatePassword: string
//   ) {
//     const user = this as userDocument;

//     return bcrypt.compare(userPassword, user.password).catch((e) => false);
//   };

const User = mongoose.model<userDocument>("User", userSchema);

export default User;
