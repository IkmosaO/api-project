import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const RosterTable = (props) => {
    const { teams } = props

        let navigate = useNavigate();

    return (
        <TableContainer sx={{ minWidth: 400, maxWidth: 500 }} component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align='center'> <Typography>Team Names</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {teams.map((team) => (
                    <TableRow
                      key={team.id} >
                      <TableCell align='center' onClick={() => {navigate(`/teams/${team['id']}`)}}>
                        {team.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
    )
}

export default RosterTable 