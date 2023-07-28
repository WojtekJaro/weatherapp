import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import convertTemp from '../common/convertTemp';

const WeatherApp = ({data}) => {
    
console.log(data)
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Miasto: {data.name}
        </Typography>
        <Typography variant="h5" component="div">
          
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Temperatura: {convertTemp(data.main.temp)} °C<br />
          Temperatura maksymalna: {convertTemp(data.main.temp_max)} °C<br />
          Temperatura minimalna: {convertTemp(data.main.temp_min)} °C<br />
        </Typography>
        <Typography variant="body2">
          Wilgotność: {data.main.humidity}
         
        </Typography>
        <Typography variant="body2">
          Prędkość wiatru: {data.wind.speed} km/h
         
        </Typography>
        
      </CardContent>
    
    </Card>
    </div>
  )
}

export default WeatherApp
