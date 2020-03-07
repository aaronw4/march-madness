const matchup = require('./matchupsModel');

const router = require('express').Router();

router.post('/', (req, res) => {
    let teams = req.body;

    matchup.add(teams)
        .then(info => {
            res.status(200).json(info)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.get('/', (req, res) => {
    matchup.find()
        .then(info => {
            res.status(200).json(info)
        })
        .catch(err => {
            res.status(500).json(err)
        })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    matchup.remove(id)
        .then(matchup => {
            res.status(200).json({removed: matchup})
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router;