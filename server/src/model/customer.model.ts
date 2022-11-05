import mongoose from "mongoose"
import bcrypt from "bcrypt"
import config from "config"

export interface customerDocument extends mongoose.Document {
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    comparePassword(candidatePassword: string): Promise<boolean>;
  }
  
  const customerSchema = new mongoose.Schema(
    {
      email: { type: String, required: true, unique: true },
      name: { type: String, required: true },
      password: { type: String, required: true },
    },
    { timestamps: true }
  );

  customerSchema.pre("save", async function (next: mongoose.HookNextFunction) {
    let customer = this as customerDocument;
  
    // only hash the password if it has been modified (or is new)
    if (!customer.isModified("password")) return next();
  
    // Random additional data
    const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));
  
    const hash = await bcrypt.hashSync(customer.password, salt);
  
    // Replace the password with the hash
    customer.password = hash;
  
    return next();
  });

  // Used for logging in
customerSchema.methods.comparePassword = async function (
    candidatePassword: string
  ) {
    const customer = this as customerDocument;
  
    return bcrypt.compare(candidatePassword, customer.password).catch((e) => false);
  };
  
  const Customer = mongoose.model<customerDocument>("Customer", customerSchema);

export default Customer;