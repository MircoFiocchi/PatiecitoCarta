import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  image: {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '400px',
  },
  cancelButton: {
    color: 'black',
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
  componentDialog: {
    maxHeight: '800px',
  },
  titleDialog: {
    fontSize: '15px',
    fontWeight: 'bold',
  },
  subtitleDialog: {
    fontSize: '15px',
  },
}));
