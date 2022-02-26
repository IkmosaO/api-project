import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import axios from "axios";
import { NavLink, useParams } from 'react-router-dom'
import Button from "@mui/material/Button";


const TeamTable = () => {
  const [team, setTeam] = useState([])
  const { id } = useParams()

  useEffect(() => {
      const fetchTeam = async () => {
          const { data } = await axios.get(`http://localhost:1340/api/teams/${id}`)

          setTeam(data)
      }
      fetchTeam()
  },[id])

  const createData = (position, player) => {
      return { position, player }
  }

  const rows = [
    createData('HeadCoach',`${team.headCoach}`),
    createData('Solo',`${team.solo}`),
    createData('Mid',`${team.mid}`),
    createData('Jungle',`${team.jungle}`),
    createData('Support',`${team.support}`),
    createData('Hunter',`${team.hunter}`),
  ]


  return (
    <Grid 
    container 
    direction="column"
    justifyContent="space-between"
    alignItems="center"
    // sx={{ mmx: 'auto'}}
    >
      <Grid item >
      <TableContainer sx={{ minWidth: 400, maxWidth: 500 }} component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                  </TableRow>
                  <TableRow>
                  <TableCell align='center' colSpan={2}> <Typography>{team.name}</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row['position']}>
                         <TableCell align="center">
                           {row['position']}
                         </TableCell>
                         <TableCell align="center">
                           {row['player']}
                         </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
      </Grid>
      <Grid item m={5}>
        <NavLink to={'/'}><Button variant="contained" >Back</Button></NavLink>
      </Grid>
    </Grid>
  );
}

export default TeamTable