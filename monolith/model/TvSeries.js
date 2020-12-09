const db = require("../config/config");
const TvSeries = db.collection("TvSeries");
const { ObjectId } = require("mongodb");

class TvSeriesModel {
  static findAll() {
    return TvSeries.find().toArray();
  }

  static findOne(id) {
    return TvSeries.findOne({ "_id": ObjectId(id) });
  }

  static addTvSeries(payload) {
    let data = {
      title: payload.title,
      overview: payload.overview,
      poster_path: payload.poster_path,
      popularity: payload.popularity,
      tags: payload.tags,
    };
    return TvSeries.insertOne(data);
  }

  static updateTvSeries(id, payload) {
    let data = {
      title: payload.title,
      overview: payload.overview,
      poster_path: payload.poster_path,
      popularity: payload.popularity,
      tags: payload.tags,
    };
    const editedTvSeries = TvSeries.findOneAndUpdate(
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
    return editedTvSeries;
  }

  static deleteTvSeries(id){
      return TvSeries.findOneAndDelete({"_id": ObjectId(id)})
  }
}

module.exports = TvSeriesModel
