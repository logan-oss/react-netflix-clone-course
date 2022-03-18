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
import { Avatar, Stack } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function WhoIsWatching() {

    const profiles = ["Nora", "Logan", "Paul"];
    const colors = ["silver", "green", "red", "yellow", "orange", "pink", "purple"];
    const random = () => { return Math.floor(Math.random() * colors.length) };

    return (
        <div>
            <ToolBar display={"logoOnly"} />
            <div
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center'
                }}
            >
                <Box sx={{ fontSize: 'h3.fontSize' }}>Who's watching?</Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb:8 }}>
                    <Stack sx={{ textAlign: 'center' }} direction="row" spacing={2}>
                        {
                            profiles.map((profile) => <Box>
                                <Avatar sx={{ bgcolor: colors[random()], width: '150px', height: "150px", fontSize: "50px", mb: 2 }} variant="square">
                                    {profile[0]}
                                </Avatar>
                                <Typography>{profile}</Typography>
                            </Box>)
                        }

                        <Box>
                            <Avatar sx={{ bgcolor: "black", width: '150px', height: "150px", fontSize: "50px", mb: 2 }} variant="square">
                                <AddCircleIcon color="primary" sx={{fontSize: 100}} />
                            </Avatar>
                            <Typography>Add Profile</Typography>
                        </Box>
                    </Stack>
                </Box>
                <Button variant="outlined" sx={{borderWidth:"2px", fontSize: "20px"}}>MANAGE PROFILES</Button>
            </div>,
        </div >
    );
}
