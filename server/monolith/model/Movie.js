const db = require("../config/config");
const Movie = db.collection("Movies");
const { ObjectId } = require("mongodb");

class MovieModel {
  static findAll() {
    return Movie.find().toArray();
  }

  static findOne(id) {
    return Movie.findOne({ "_id": ObjectId(id) });
  }

  static addMovie(payload) {
    let data = {
      title: payload.title,
      overview: payload.overview,
      poster_path: payload.poster_path,
      popularity: payload.popularity,
      tags: payload.tags,
    };
    return Movie.insertOne(data);
  }

  static updateMovie(id, payload) {
    let data = {
      title: payload.title,
      overview: payload.overview,
      poster_path: payload.poster_path,
      popularity: payload.popularity,
      tags: payload.tags,
    };
    const editedMovie = Movie.findOneAndUpdate(
      {
        "_id": ObjectId(id)
      },
      {
        $set: data,
      },
      {
        returnOriginal: false,
      }
    );
    return editedMovie;
  }

  static deleteMovie(id){
      return Movie.findOneAndDelete({"_id": ObjectId(id)})
  }
}

module.exports = MovieModel
