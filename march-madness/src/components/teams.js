import React, {useEffect, useState} from 'react';
import axiosWithAuth from './axiosWithAuth';
import Stats from './enterStats';

const Teams = () => {
    const [teams, setTeams] = useState([]);
    const [list, setList] = useState([]);

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

    useEffect(() => {
        function newList() {
            let list = teams.map(team => ({
                id: team.team.id,
                name: team.team.name,
                wins: team.games.win.total,
                loses: team.games.lose.total
            }));
    
            let orderedList = list.sort(function(a,b) {
                var name1 = a.name;
                var name2 = b.name;
                if (name1 < name2) {
                    return -1;
                }
                if (name1 > name2) {
                    return +1;
                }
                return 0;
            });

            setList(orderedList);
        } 
        newList();
    },[teams]);

    function click() {
        var element = document.getElementById('stats');
        element.classList.toggle('stats');
    }

    return (
        <div>
            {list.map(team => (
                <div key={team.id}>
                    <button onClick={click}>Enter Stats</button>
                    <p>{team.name}({team.wins}-{team.loses})</p>
                    <Stats name={team.name} id='stats'/>
                </div>
            ))}
        </div>
    )
}

export default Teams