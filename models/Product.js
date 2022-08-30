import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 80,
    },
    listName: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 2000,
    },
    img: {
      type: String,
      required: true,
    },
    img2: {
      type: String,
      required: true,
    },
    refri: {
      type: Boolean,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    estoque: {
      type: Number,
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
