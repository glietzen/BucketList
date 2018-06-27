const db = reguire('../models');

module.exports = {
    findAll: function(req, res) {
        db.Lists
            .find({})
            .populate('items')
            .then(dbLists => res.json(dbLists))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Item
            .findById(req.params.id)
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Item
            .create(req.body)
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Item
            .findOneAndUpdate({_id: req.params.id }, req.body)
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Item
            .findById({ _id: req.params.id })
            .then(dbItem => dbItem.remove())
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    }
};