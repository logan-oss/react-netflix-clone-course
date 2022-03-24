import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToolBar from './components/ToolBar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { mainTheme } from './theme';

export default function Login() {
  return (
    <Box bgcolor="primary">
      <ToolBar display={"logoOnly"} />
      <Container maxWidth="sm" sx={{ p: 2, bgcolor: 'primary', mt: 10 }}>
        <Typography color="white" sx={{ fontSize: "30px", fontWeight: 'bold', mb: 2 }}>Sign In</Typography>
        <TextField fullWidth id="outlined-basic" label={<Typography>Email or phone number</Typography>} variant="outlined" sx={{ bgcolor: "#707070", mb: 2 }} style={{ borderRadius: "3px" }} />
        <TextField fullWidth id="outlined-basic" label={<Typography>Password</Typography>} variant="outlined" sx={{ bgcolor: "#707070", mb: 4 }} style={{ borderRadius: "3px" }} />
        <Button fullWidth variant="contained" sx={{ bgcolor: "red", py: 1, fontSize: "20px" }}>Sign in</Button>
        <Box
          sx={{
            width: 1,
            display: 'flex',
            alignItems: "center",
            justifyContent: 'space-between',
            mb: 25
          }}
        >
          <FormControlLabel control={<Checkbox sx={{
            color: "#707070",
            '&.Mui-checked': {
            },
          }} />}

            label={<Typography>Remember me</Typography>}
          />

          <Link> Need help ?? </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: "center" }}>
          <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" style={{ backgroundColor: "white", width: "20px" }} alt="" />
          <Link href="#" sx={{ ml: 2 }} underline="none">
            {'Login with Facebook'}
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: "center" }}>
          <Typography>  New to Netflix? </Typography>
          <Link href="#" sx={{ fontWeight: 'bold', ml: 1 }} underline="none">
            {'Sign up now'}
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
