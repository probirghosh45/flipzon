import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import useStyles from '../utils/styles';

export default function Layout  ({children})  {

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Flipzon | Next</title>
      </Head>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <Typography>Flipzon</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
       {children}
      </Container>
      <footer>
          <Typography className={classes.footer}>
              All Right Reserved by Next-Flipzon.
          </Typography>
      </footer>
    </div>
  );
};


