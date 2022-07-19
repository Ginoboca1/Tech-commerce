import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '1%',
    textAlign : 'center'
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    alignItems : 'center',
    display: 'flex',
    marginTop: '5%',
    marginBottom : '5%',
    width: '100%',
    justifyContent: 'center',
    gap : 30
  },
  emptyCart:{
    textAlign:'center'
  }
}));