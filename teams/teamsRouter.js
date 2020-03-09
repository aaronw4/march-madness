const teams = require('./teamsModel');

const router = require('express').Router();

router.post('/', (req, res) => {
    let team = req.body;

    teams.add(team)
        // .then(info => {
        //     res.status(201).json(info);
        // })
        // .catch(err => {
        //     res.status(500).json(err);
        // })
});

router.get('/', (req, res) => {
    teams.find()
        .then(info => {
            res.status(200).json(info);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    teams.remove(id)
        .then(team => {
            res.status(200).json({removed: team})
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;