import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    navbar:{
        backgroundColor:'#203040',
        '& a':{
            color:'#fff',
            marginLeft:10
        }
    },
   brand:{
       fontWeight:'bold',
       fontSize:'1.5rem'
   },
   grow:{
     flexGrow:1
   },
    main:{
        minHeight:'80vh'
    },

    footer:{
        marginTop:10,
        textAlign:'center',
        fontWeight:'bold',
    },
    section: {
        paddingTop:70,
        marginTop: 10,
        marginBottom: 10,
      },
});

export default useStyles;