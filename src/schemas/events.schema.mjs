import mongoose from "mongoose";

const eventsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "El titulo del evento es obligatorio"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    date: {
      type: Date, //ia pregunntar fecha y hora
      required: [true, "La fecha del evento es obligatorio"],
      trim: true,
      default: Date.now,
    },

    address: {
      type: String,
      required: false,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    image:{
      type: String,
      required: false
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const eventsModel = mongoose.model(
    "events", 
    eventsSchema
  );

export default eventsModel;
