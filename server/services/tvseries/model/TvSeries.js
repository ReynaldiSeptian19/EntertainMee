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
    return TvSeries.insertOne(payload);
  }

  static updateTvSeries(id, payload) {
    const editedTvSeries = TvSeries.findOneAndUpdate(
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
    return editedTvSeries;
  }

  static deleteTvSeries(id){
      return TvSeries.findOneAndDelete({"_id": ObjectId(id)})
  }
}

module.exports = TvSeriesModel
