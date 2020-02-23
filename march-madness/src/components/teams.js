import React, {useEffect, useState} from 'react';
import axiosWithAuth from './axiosWithAuth';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        function fetchData() {
            axiosWithAuth()
                .get('/standings?league=116&season=2019-2020')
                .then(res => {
                    console.log(res);
                    setTeams(res.data.response[0])
                })
                .catch(err => console.log(err))
        }
        fetchData();
    },[]);

    return (
        <div>
            {teams.map(team => (
                <div key={team.team.id}>
                    <p>{team.team.name}({team.games.win.total}-{team.games.lose.total})</p>
                </div>
            ))}
        </div>
    )
}

export default Teams
