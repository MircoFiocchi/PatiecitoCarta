import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  iconSize: {
    fontSize: '80px !important',
    [theme.breakpoints.down(768)]: {
      fontSize: '200px',
    },
  },
}));
