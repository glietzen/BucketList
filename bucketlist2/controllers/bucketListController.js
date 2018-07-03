const db = reguire('../models');

module.exports = {
    findById: function(req, res) {
        db.Lists
            .findById(req.params.id)
            .populate('items')
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Item
            .create(req.body)
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    createList: function(req, res) {
        db.Lists
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