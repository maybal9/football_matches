var express = require('express');
var router = express.Router();
const DataFileHandler = require('./../services/DataHandler');

const FileHandler = new DataFileHandler();

//1. Get list of matches by team.
router.get('/teams/:team', function(req, res) {
    const team = req.params.team;
    const matches = FileHandler.GetMatchesByTeam(team);
    res.json(matches);
});

//2. Get list of matches by team filtered by status.
router.get('/teams/:team/:status', function(req, res) {
    const team = req.params.team;
    const status = req.params.status;
    const matches = FileHandler.GetMatchesByTeam(team, status);
    res.json(matches);

});

//3. Get list of matches by tournament.
router.get('/:tournament', function(req, res) {
    const tournament = req.params.tournament;
    const matches = FileHandler.GetMatchesByTournament(tournament);
    res.json(matches);

});

//4. Get list of matches by tournament filtered by status.
router.get('/:tournament/:status', function(req, res) {
    const tournament = req.params.tournament;
    const status = req.params.status;
    const matches = FileHandler.GetMatchesByTournament(tournament, status);
    res.json(matches);
});

module.exports = router;