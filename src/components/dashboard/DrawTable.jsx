import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from '@mui/material';
import LinearProgress from './LinearProgress';

function createData(id, type, vsts, pcrt, color, icon) {
  const visits = vsts > 1000 ? `${(vsts / 1000).toFixed(2)}k` : `${vsts}`;
  const percent = (pcrt * 100).toFixed(2);
  const img = `/assets/distribution/${icon}`;
  return { id, type, visits, percent, color, img };
}


export default function DrawTable({type, data}) {

  const bgColor = ['rgb(113, 221, 55)', 'rgb(105, 108, 255)', 'rgb(3, 195, 236)', 'rgb(255, 171, 0)', 'rgb(255, 62, 29)', 'rgb(3, 195, 236)'];
  const rows = data.map((item, idx) => {
    return createData((idx + 1), item.type, item.visits, item.pcrt, bgColor[idx], item.icon);
  });

  // console.log(rows);

  return (
    <TableContainer>
      <Table sx={{
        minWidth: 650,
        [`& .${tableCellClasses.root}`]: {
          borderBottom: "none"
        }
      }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NO.</TableCell>
            <TableCell align="left">{type}</TableCell>
            <TableCell align="left">VISITS</TableCell>
            <TableCell align="left">DATA IN PERCENTAGE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell component="th" scope="row" width="10%">
                {row.id}
              </TableCell>
              <TableCell align="left" width="20%" sx={{display: 'flex', alignItems: 'center'}}><img src={row.img} alt={row.type} style={{height: '25px', marginRight: '8px'}}/>{row.type}</TableCell>
              <TableCell align="left" width="20%">{row.visits}</TableCell>
              <TableCell align="left" width="50%"><LinearProgress percent={Number(row.percent)} color={row.color} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
