const db = require('../models');
const Star = db.star;

exports.create = async (req, res) => {
    if (!req.body.type) {
        res.status(400).send({
          message: "Type can not be empty!"
        });
        return;
      }
    try {
        const star = await Star.create({
            type: req.body.type
        })
        res.status(201).send(star);
    } catch(e) {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Star"
          });
    }
};

exports.findAll = async (req, res) => {
    const type = req.query.type;
    const condition = type ? { type } : null;

    try {
        const stars = await Star.findAll({where: condition});
        res.send(stars);
    } catch(e) {
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving stars"
          });
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;

    try {
        const star = await Star.findByPk(id);
        res.send(star);
    } catch(e) {
        res.status(500).send({
            message: `Error retrieving Tutorial with id=${id}`
          });
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Star.destroy({where: {id}});
        res.send()
    } catch(e) {
        res.status(500).send({
            message: `Could not delete Star with id=${id}`
          });
    }
    
};