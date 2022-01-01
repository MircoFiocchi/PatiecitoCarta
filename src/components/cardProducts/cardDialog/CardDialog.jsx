import React from 'react';
import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import useStyle from './styles';

const CardDialog = ({ open, onClose, title, image, description }) => {
  const classes = useStyle();

  return (
    <Dialog
      open={open}
      PaperProps={{ className: classes.componentDialog }}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <Card>
        <IconButton size="large" className={classes.cancelButton} onClick={onClose}>
          <CancelIcon fontSize="inherit" />
        </IconButton>
        <Grid container justifyContent="center" alignItems="center">
          <CardMedia component="img" image={image} className={classes.image} />
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className={classes.titleDialog}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" className={classes.subtitleDialog}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default CardDialog;
