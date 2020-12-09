const db = require("../config/config");
const Movie =process.env.COLLECTION_NAME || db.collection("Movies");
const { ObjectId } = require("mongodb");

class MovieModel {
  static findAll() {
    return Movie.find().toArray();
  }

  static findOne(id) {
    return Movie.findOne({ "_id": ObjectId(id) });
  }

  static addMovie(payload) {
    console.log(payload)
    return Movie.insertOne(payload);
  }

  static updateMovie(id, payload) {
    const editedMovie = Movie.findOneAndUpdate(
      {
        "_id": ObjectId(id)
      },
      {
        $set: payload,
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
