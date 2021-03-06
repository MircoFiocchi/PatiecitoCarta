import React from 'react';
import './WhoWeAre.css';
import PeopleIcon from '@mui/icons-material/People';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Typography from '@mui/material/Typography';

const WhoWeAre = () => {
  return (
    <div className="container-icons">
      <div className="icons-features">
        <PeopleIcon className="iconSize" />
        <Typography gutterBottom variant="h5" component="div" className="title-typography">
          Bar de amigxs
        </Typography>
        <Typography variant="body2" color="text.secondary" className="subtitle-typography">
          Veni y disfruta un experiencia unica
        </Typography>
      </div>
      <div className="icons-features">
        <SportsBarIcon className="iconSize" />
        <Typography gutterBottom variant="h5" component="div" className="title-typography">
          Tragos
        </Typography>
        <Typography variant="body2" color="text.secondary" className="subtitle-typography">
          Consulta mas abajo los tragos que hay!
        </Typography>
      </div>
      <div className="icons-features">
        <MyLocationIcon className="iconSize" />
        <Typography gutterBottom variant="h5" component="div" className="title-typography">
          Ubicacion
        </Typography>
        <Typography variant="body2" color="text.secondary" className="subtitle-typography">
          Chacabuco 643
        </Typography>
      </div>
    </div>
  );
};

export default WhoWeAre;
