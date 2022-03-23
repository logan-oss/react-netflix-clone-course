import Box from '@mui/material/Box';
import ToolBar from './ToolBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Link, Stack } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useSelector } from 'react-redux';
import UsersInterface from './interfaces/UsersInterface';
import User from './interfaces/UserInterface';

export default function WhoIsWatching() {

    const users = useSelector((state: any) => state.users);

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
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
                    <Stack sx={{ textAlign: 'center' }} direction="row" spacing={2}>
                        {
                            users.users.map((profile: User) => <Box>
                                <Avatar sx={{ bgcolor: profile.color, width: '150px', height: "150px", fontSize: "50px", mb: 2 }} variant="square">
                                    {profile.name[0]}
                                </Avatar>
                                <Typography>{profile.name}</Typography>
                            </Box>)
                        }
                        <Box>
                            <Link href="/addProfile">
                                <Avatar sx={{ bgcolor: "black", width: '150px', height: "150px", fontSize: "50px", mb: 2 }} variant="square">
                                    <AddCircleIcon color="primary" sx={{ fontSize: 100 }} />
                                </Avatar>
                                <Typography>Add Profile</Typography>
                            </Link>
                        </Box>
                    </Stack>
                </Box>
                <Button variant="outlined" sx={{ borderWidth: "2px", fontSize: "20px" }}>MANAGE PROFILES</Button>
            </div>,
        </div >
    );
}
