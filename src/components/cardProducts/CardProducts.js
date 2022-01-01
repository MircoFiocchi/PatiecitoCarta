import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardDialog from './cardDialog/CardDialog';
import './CardProducts.css';

const CardProducts = ({ title, subtitle, image, description }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Card sx={{ display: 'flex', marginBottom: '15px', width: '361px', maxHeight: '110px' }} onClick={handleOpenDialog}>
        <div className="contentCard">
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {subtitle}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia component="img" sx={{ width: '100%' }} image={image} alt="Live from space album cover" />
        </div>
      </Card>
      <CardDialog open={dialogOpen} onClose={handleCloseDialog} title={title} subtitle={subtitle} image={image} description={description} />
    </>
  );
};

export default CardProducts;
