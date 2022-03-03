import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToolBar from './ToolBar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgb(0,0,0)',
    },
  },
});

export default function Login() {
  return (
    <div>

      <ToolBar display={"logoOnly"} />

      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ p: 2, bgcolor: '#000000' }}>
          <Typography sx={{ fontSize: "30px", fontWeight: 'bold', color: "#e5e5e5", mb: 2 }}>Sign In</Typography>
          <TextField fullWidth id="outlined-basic" label="Email or phone number" variant="outlined" sx={{ bgcolor: "#707070", mb: 2 }} style={{ borderRadius: "3px" }} />
          <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" sx={{ bgcolor: "#707070", mb: 4 }} style={{ borderRadius: "3px" }} />
          <Button fullWidth variant="contained" sx={{ bgcolor: "red", py: 1, fontSize: "20px" }}>Sign in</Button>
          <Box
            sx={{
              width: 1,
              display: 'flex',
              alignItems: "center",
              justifyContent: 'space-between',
              mb:25
            }}
          >
            <FormControlLabel control={<Checkbox sx={{
              color: "#707070",
              '&.Mui-checked': {
                color: "#b7b7b7",
              },
            }} />}

              label={<Typography style={{color:"#b7b7b7"}}>Remember me</Typography>}
            />

            <Link style={{color:"#b7b7b7"}}> Need help ?? </Link>
          </Box>
          <Typography style={{color:"#b7b7b7"}}>Login with Facebook</Typography>
          <Typography style={{color:"#b7b7b7"}}>New to Netflix? </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
}
