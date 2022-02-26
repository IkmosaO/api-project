import React, { useEffect, useState } from "react";
import axios from 'axios'
import RosterTable from "./RosterTable";
import Title from "./Title";
import Grid from '@mui/material/Grid'
import SWCLogo from "./SWCLogo";

const SplashPage = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        const fetchTeams = async () => {
            const { data } = await axios.get('http://localhost:1340/api/teams')

            setTeams(data)
        }
        fetchTeams()
    },[setTeams])


    return (
  
    <Grid 
    container 
    direction="column"
    justifyContent="space-between"
    alignItems="center">

        <Grid item marginTop={-3}>
            <SWCLogo/>
        </Grid>
        <Grid item>
            <Title />
        </Grid>
        <Grid item paddingTop={1}>
            <RosterTable teams={teams}/>
        </Grid>

    </Grid>

    )
}

export default SplashPage

