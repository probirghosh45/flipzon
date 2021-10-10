import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import Head from 'next/head';
import useStyles from '../utils/styles';

export default function Layout({ title,description, children }) {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>{title?`${title}-Flipzon`: 'Flipzon'}</title>
       {description && <meta name="description" content={description}></meta>}
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
