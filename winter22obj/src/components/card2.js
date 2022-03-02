import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';


export default function SlotCard(props) {

  return (
            <Card style={{display: 'inline-block', width: '10.5vw'}}>
            <CardContent >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Year
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Date
                </Typography>
                <Typography variant="h5" component="div">
                Time
                </Typography>
                <Typography variant="body2">
                Coefficient
                </Typography>
            </CardContent>
            <CardActions>
                <Button >Edit</Button>
                
            </CardActions>
            </Card>
  );
}



