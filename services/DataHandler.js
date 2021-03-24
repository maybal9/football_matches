const csv=require('csvtojson')// Invoking csv returns a promise

class DataFileHandler{
    upcoming_matches = [];
    played_matches = [];

    constructor(){
        const upcoming_converter = csv()
            .fromFile('./data/result_upcoming.csv')
            .then( json => Object.assign(this.upcoming_matches, json))
            .catch( e => console.log(e));
        
        const played_converter = csv()
            .fromFile('./data/result_played.csv')
            .then( json => Object.assign(this.played_matches, json))
            .catch( e => console.log(e));
    };

    GetMatchByPred(pred, status = ""){
        if (status === ''){
            var res = this.upcoming_matches.filter(pred);
            res = res.concat(this.played_matches.filter(pred));
            return res;
        } 
        if(status === 'upcoming'){
            return this.upcoming_matches.filter(pred);
        } 
        if (status === 'played'){
            return this.played_matches.filter(pred);
        }
    };

    GetMatchesByTeam(team, status = ""){
        var predByTeam = x => x.home_team == team || x.away_team == team;
        return this.GetMatchByPred(predByTeam, status);
    };

    GetMatchesByTournament(tournament, status = ""){
        var predByTournament = x => x.tournament == tournament;
        return this.GetMatchByPred(predByTournament, status);
    };
}

module.exports = DataFileHandler;