import Box from '@mui/material/Box';
import ToolBar from './components/ToolBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Link, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch, useSelector } from 'react-redux';
import User from './interfaces/user/UserInterface';
import { Navigate, NavLink } from 'react-router-dom';
import React from 'react';
import { setSelectedUser } from './store/slice/userSlice';
import StateInterface from './interfaces/StateInterface';

export default function WhoIsWatching() {

    const users = useSelector((state: StateInterface) => state.users);
    const [selectedUser, setSelectUser] = React.useState({ name: "", color: "" });
    const dispatch = useDispatch();

    function setUser(u: User) {
        dispatch(setSelectedUser(u));
        setSelectUser(u);
    }

    const style = {
        width: '150px',
        height: "150px",
        fontSize: "50px",
        mb: 2,
        '&:hover': {
            border: '2px solid white'
        }
    }

    return (
        <div>
            {selectedUser.name !== "" ? <Navigate to='/' /> : null}
            <ToolBar display={"logoOnly"} />
            <div
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center'
                }}
            >
                <Box sx={{ fontSize: 'h3.fontSize' }}>Who's watching?</Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
                    <Stack sx={{ textAlign: 'center' }} direction="row" spacing={2}>
                        {
                            users.users.map((profile: User) => <NavLink onClick={() => { setUser(profile); }} to={''}>
                                <Avatar sx={{ ...style, bgcolor: profile.color }} variant="square">
                                    {profile.name[0]}
                                </Avatar>
                                <Typography>{profile.name}</Typography>
                            </NavLink>)
                        }
                        <Box>
                            <NavLink to="/addProfile">
                                <Avatar sx={{ ...style, bgcolor: 'black' }} variant="square">
                                    <AddCircleIcon color="primary" sx={{ fontSize: 100 }} />
                                </Avatar>
                                <Typography>Add Profile</Typography>
                            </NavLink>
                        </Box>
                    </Stack>
                </Box>
                <Button variant="outlined" sx={{ borderWidth: "2px", fontSize: "20px" }}>MANAGE PROFILES</Button>
            </div>,
        </div >
    );
}
