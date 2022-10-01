import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
      maxlength: 60,
    },
    bairro: {
      type: String,
      required: true,
      maxlength: 60,
    },
    entrega: {
      type: Number,
      required: true,
      maxlength: 60,
    },
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    telefone: {
      type: String,
      required: true,
      maxlength: 60,
    },
    obs: {
      type: String,
      maxlength: 200,
    },
    produto: {
      type: [],
      default: undefined,  
    },
  
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    troco: {
      type: Number,
      default: 0,
    },
    metodo: {
      type: Number,
      required:true
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
