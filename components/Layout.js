import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider } from '@mui/system';
import Head from 'next/head';
import useStyles from '../utils/styles';

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      body1:{
        fontWeight: 'normal'
      }
    },
    
    palette:{
      type:'light',
      primary:{
        main:'#f0c000'
      },
      secondary:{
        main:'#208080',
      },
    }


  });

  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title}-Flipzon` : 'Flipzon'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
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
      </ThemeProvider>
    </div>
  );
}
