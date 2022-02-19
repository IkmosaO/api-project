// 1 import react
// 2 create a function (same as the name of your file)
// 3 return some JSX
// 4 export that function

import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios'
import RosterTable from "./RosterTable";
import Title from "./Title";



const SplashPage = () => {

    const [teams, setTeams] = useState({ roster: []})

    useEffect(() => {
        const fetchTeams = async () => {
            const { data } = await axios.get('http://localhost:1340/api/teams')

            setTeams({roster: data})
            console.log(data)
        }
        fetchTeams()
    },[setTeams])

    return (
    <>
    <img height="400" src="SWC2018logo_square.webp" alt="Nocturns Gaming"/>
    <Title />
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Region</th>
                    <th>Head-Coach</th>
                    <th>Sponsor</th>
                    <th>Solo</th>
                    <th>Mid</th>
                    <th>Jungle</th>
                    <th>Support</th>
                    <th>Hunter</th>
                </tr>
            </thead>
            <tbody>
                {
                    teams.roster.map(team => (
                    <tr key={team.id}>
                        <td>{team.name}</td>
                        <td>{team.region.name}</td>
                        <td>{team.headCoach}</td>
                        <td>{team.sponsor}</td>
                        <td>{team.solo}</td>
                        <td>{team.mid}</td>
                        <td>{team.jungle}</td>
                        <td>{team.support}</td>
                        <td>{team.hunter}</td>
                    </tr>
                    ))
                }

            </tbody>
        </Table>
    </>
    )
}

export default SplashPage