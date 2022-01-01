import React from 'react';
import './WhoWeAre.css';
import PeopleIcon from '@mui/icons-material/People';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Typography from '@mui/material/Typography';
import useStyle from './styles';

const WhoWeAre = () => {
  const classes = useStyle();

  return (
    <div className="container-icons">
      <div className="icons-features">
        <PeopleIcon className={classes.iconSize} />
        <Typography gutterBottom variant="h5" component="div">
          Bar de amigxs
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Veni y disfruta un experiencia unica
        </Typography>
      </div>
      <div className="icons-features">
        <SportsBarIcon className={classes.iconSize} />
        <Typography gutterBottom variant="h5" component="div">
          Tragos
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Consulta mas abajo los tragos que hay!
        </Typography>
      </div>
      <div className="icons-features">
        <MyLocationIcon className={classes.iconSize} />
        <Typography gutterBottom variant="h5" component="div">
          Ubicacion
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Estamos en Chacabuco 643
        </Typography>
      </div>
    </div>
  );
};

export default WhoWeAre;
