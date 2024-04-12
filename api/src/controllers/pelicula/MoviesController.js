const Movie = require("../../models/MoviesModel.js");
const asyncHandler = require("express-async-handler");

const getMovies = asyncHandler(async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(201).json({ movies });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const getunaMovie = asyncHandler(async (req, res) => {
  try {
    const movie = await Movie.find().sort({ createdAt: -1 }).limit(1);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const updateMovie = asyncHandler(async (req, res) => {
  try {
    // get data from request body
    const {
      Titulo,
      SubTitulo,
      Genero,
      Sinopsis,
      Duracion,
      imageCartelera,
      imageBackground,
      Formato,
      Clasificacion,
      HoraDisponibles,
      Valorboleta,
    } = req.body;

    // find movie by id in database
    const movie = await Movie.findById(req.params.id);

    if (movie) {
      // update movie data
      movie.Titulo = Titulo || movie.Titulo;
      movie.SubTitulo = SubTitulo || movie.SubTitulo;
      movie.Genero = Genero || movie.Genero;
      movie.Sinopsis = Sinopsis || movie.Sinopsis;
      movie.Duracion = Duracion || movie.Duracion;
      movie.imageCartelera = imageCartelera || movie.imageCartelera;
      movie.imageBackground = imageBackground || movie.imageBackground;
      movie.Formato = Formato || movie.Formato;
      movie.Clasificacion = Clasificacion || movie.Clasificacion;
      movie.HoraDisponibles = HoraDisponibles || movie.HoraDisponibles;
      movie.Valorboleta = Valorboleta || movie.Valorboleta;
      // save the movie in database

      const updatedMovie = await movie.save();
      // send the updated movie to the client
      res.status(201).json(updatedMovie);
    } else {
      res.status(404);
      throw new Error("Movie not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete movie
// @route   DELETE /api/movies/:id
// @access  Private/Admin

const deleteMovie = asyncHandler(async (req, res) => {
  try {
    // find movie by id in database
    const movie = await Movie.findById(req.params.id);
    // if the movie is found delete it
    // console.log(movie);
    if (movie) {
      await movie.deleteOne();
      res.json({ message: "Movie removed" });
    }
    // if the movie is not found send 404 error
    else {
      res.status(404);
      throw new Error("Movie not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
const getMovieById = asyncHandler(async (req, res) => {
  try {
    // find movie by id in database
    const movie = await Movie.findById(req.params.id);
    // if the movie is found delete it
    // console.log(movie);
    if (movie) {

      res.json(movie);
    }
    // if the movie is not found send 404 error
    else {
      res.status(404);
      throw new Error("Movie not found");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


const createMovie = asyncHandler(async (req, res) => {
  try {
    // get data from request body
    const {
      titulo,
      subTitulo,
      generos,
      sinopsis,
      duracion,
      imageCartelera,
      imageBackground,
      formato,
      clasificacionEdad,
      fecha_estreno,
      valorboleta,
      director,
      elenco,
      idvideo,
    } = req.body;

    // create a new movie
    const movie = new Movie({
      titulo,
      subTitulo,
      generos,
      sinopsis,
      duracion,
      imageCartelera,
      imageBackground,
      formato,
      clasificacionEdad,
      fecha_estreno,
      valorboleta,
      director,
      elenco,
      idvideo,
      userId: req.user._id,
    });

    // save the movie in database
    if (movie) {
      const createdMovie = await movie.save();
      res.status(201).json(createdMovie);
    } else {
      res.status(400);
      throw new Error("Invalid movie data");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = {
  getMovies,
  updateMovie,
  deleteMovie,
  createMovie,
  getMovieById,
  getunaMovie,
};
