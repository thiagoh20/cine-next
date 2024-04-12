const mongoose = require("mongoose");



const moviesSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    titulo: {
      type: String,
      required: true,
    },
    subTitulo: {
      type: String,
      required: true,
    },
    generos: [], 
    sinopsis: {
      type: String,
      required: true,
          },
    duracion: {
      type: String,
      required: true,
    },
    imageCartelera: {
      type: String,
      required: true,
    },
    imageBackground: {
      type: String,
      required: true,
    },
    
    clasificacionEdad: {
      type: String,
      required: true,
    },
    fecha_estreno: {
      type: String,
      required: true,
    },
    valorboleta: {
      type: Number,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    elenco: {
      type: String,
      required: true,
    },
    idvideo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movies", moviesSchema);


