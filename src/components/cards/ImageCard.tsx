import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type Props = {
  id: number;
  fullName: string;
  url: string;
  earthDate: string;
  nameRover: string;
  statusRover: string;
};
const ImageCard = ({ id, fullName, url, earthDate, nameRover, statusRover }: Props) => {
  return (
    <Card
      sx={{ minWidth: 300 }}
    >
      <CardActionArea>
        <CardMedia component='img' height='400' width='800' image={url} alt={fullName} />
        <CardContent
          sx={{
            backgroundColor: '#2B3A55',
            color: '#fff',
          }}
          >
          <Typography gutterBottom variant='h4' 
                      component='div'
                      
                      >
            {fullName} - {earthDate}
          </Typography>
          <Typography variant='h5' 
                      color='text.secondary'
                      sx={{

                        color: '#fff',
                      }}
                      >
            {nameRover} - {statusRover}
          </Typography>
          <Typography variant='h4'
          >
            <a href={url} target='_blank' rel='noreferrer' style={{color: '#FF7000'}}>
              Open Image
            </a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ImageCard;
