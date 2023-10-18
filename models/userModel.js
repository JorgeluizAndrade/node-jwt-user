import bcryptjs from "bcryptjs";
import { mongoose } from "mongoose";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


userSchema.pre('save', async ()=> {
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password, salt)
})

userSchema.methods.matchPassword = async function(enteredPassword){
    return await bcryptjs.compare(enteredPassword, this.password)
}

const User = mongoose.model('User', userSchema)

export default User