const mongoose = require("mongoose");

const reservaMoviesSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    peliculaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pelicula',
      required: true,
    },
    hora: {
      type: String,
      required: true,
    },
    sala: {
      type: String,
      required: true,
    },
    asientosSala: [],

    asientosNumeroOcupado: {
      type: String,
      default: '0',
    },
    
    asientosDisponibles: {
      type: String,
      default: '0',
    },
    estado: {
      type: String,
      enum: ['activa', 'desactivada',],
      default: 'activa',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ReservaPelicula", reservaMoviesSchema);
