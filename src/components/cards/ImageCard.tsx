import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

type Props = {
  id: number;
  fullName: string;
  url: string;
  earthDate: string;
  nameRover: string;
  statusRover: string;
}
const ImageCard = ({id,fullName,url,earthDate,nameRover,statusRover}:Props) => {
  return (
    <Card sx={{ minWidth: 300 }}
    // style={{ marginLeft:'15px', marginRight:'15px', marginTop:'15px' }}
    // style={{ marginTop:'15px' }}

    >
    <CardMedia
      component="img"
      height="400"
      width="800"
      image={url}
      alt={fullName}  
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {fullName} - {earthDate}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {nameRover} - {statusRover}
      </Typography>
    </CardContent>
    <CardActions>
    <a href={url} target="_blank" rel="noreferrer" >Open Image</a>
    </CardActions>
  </Card>
  )
}

export default ImageCard