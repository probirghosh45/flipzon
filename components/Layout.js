import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import useStyles from '../utils/styles';

export default function Layout({ children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Flipzon | Next</title>
      </Head>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <Link href="/">
            <Typography className={classes.brand}>Flipzon</Typography>
          </Link>
          <div className={classes.grow}></div>
          <div>
          <Link href="/cart">Cart</Link>
          <Link href="/login">Login</Link>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer>
        <Typography className={classes.footer}>
          All Right Reserved by Next-Flipzon.
        </Typography>
      </footer>
    </div>
  );
}
