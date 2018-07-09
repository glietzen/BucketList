const db = require('../models');

module.exports = {
    findUser: function(req,res) {
        db.Users
            .findById(req.params.id)
            .populate({
                path: 'list',
                populate: {
                    path: 'Items',
                    model: 'Item'
                }
            })
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err))
    },
    findById: function(req, res) {
        db.Lists
            .findById(req.params.id)
            .populate('items')
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        console.log(req.body)
        db.Items
            .create(req.body)
            .then((listitem) => {
                let listID = req.body.listId;
                console.log(listID)
                console.log(listitem._id)
                return db.Lists.findByIdAndUpdate(listID, {$push: {items: listitem._id}}, {new: true})
            })
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    createList: function(req, res) {
        db.Lists
            .create(req.body)
            .then((userList) => {
                console.log(req.body)
                let __id__ = req.body.userId;
                console.log(userList.id)
                console.log(__id__)
                return db.Users.findByIdAndUpdate(__id__, {$push: {list: userList._id}}, {new:true})
            })
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.Items
            .findOneAndUpdate({_id: req.params.id }, { completed: true })
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Items
            .findById({ _id: req.params.id })
            .then(dbItem => dbItem.remove())
            .then(dbItem => res.json(dbItem))
            .catch(err => res.status(422).json(err));
    }
};