import Model from "../models/item";
import mongoose from "mongoose";

export function getAll(req, res) {
  Model.find()
    .select("_id content image audio ordernumber unitid")
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function getOne(req, res) {
  const id = req.params.id;
  Model.findById(id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function create(req, res) {
  const newObj = new Model({
    _id: mongoose.Types.ObjectId(),
    content: req.body.content,
    image: req.body.image,
    audio: req.body.audio,
    ordernumber: req.body.ordernumber,
    unitid: req.body.unitid,
  });

  return newObj
    .save()
    .then((item) => {
      res.status(201).json(item);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function update(req, res) {
  const id = req.params.id;
  const updateObj = req.body;
  Model.updateOne({ _id: id }, { $set: updateObj })
    .exec()
    .then(() => {
      res.status(200).json(updateObj);
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}

export function remove(req, res) {
  const id = req.params.id;
  Model.findByIdAndRemove(id)
    .exec()
    .then(() => {
      res.status(204).json({ success: true });
    })
    .catch((e) => {
      res.status(500).json({
        error: e.message,
      });
    });
}
