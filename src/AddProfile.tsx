import Box from '@mui/material/Box';
import ToolBar from './ToolBar';
import Button from '@mui/material/Button';
import { Avatar, FormControl, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import store from './store/store';
import { addUser } from './store/slice/userSlice';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function AddProfile() {
    const [name, setName] = React.useState("");
    const [profileColor, setProfileColor] = React.useState("silver");
    const colors = ["silver", "green", "red", "yellow", "orange", "pink", "purple"];
    const [redirect, setRedirect] = React.useState(false);

    const dispatch = useDispatch();

    function colorChange(e: SelectChangeEvent) {
        setProfileColor(e.target.value as string)
    }

    function submit(){
        if(name !== ""){
            console.log("test");
            
            dispatch(addUser({name:name,color: profileColor}));
            setRedirect(true);
        }
    }

    const selectStyle = '2px solid '+ profileColor;

    return (
        <div>
            {redirect ? <Navigate to='/whoiswatching' /> : null}
            <ToolBar display={"logoOnly"} />
            <div
                style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'left'
                }}
            >
                <Box sx={{ fontSize: 'h3.fontSize' }}>Ajouter un profil</Box>
                <Box sx={{ display: 'flex', mb: 8 }}>
                    <Avatar sx={{ bgcolor: profileColor, width: '100px', height: "100px", fontSize: "50px", mb: 2 }} variant="square">
                        {name !== "" ? name[0] :"?"}
                    </Avatar>
                    <Box sx={{ml:2}}>
                        <TextField id="outlined-basic" onChange={(e) => {setName(e.target.value)}} label="Votre nom" variant="outlined" />
                        <br />
                        <FormControl fullWidth>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={profileColor}
                                onChange={colorChange}
                                style={{ border: selectStyle}}
                            >
                                {
                                    colors.map((c: string, index: number) => {
                                        return <MenuItem value={c}>{c}</MenuItem>
                                    })
                                }
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Button variant="outlined" onClick={submit} sx={{ borderWidth: "2px", fontSize: "20px" }}>VALIDER</Button>
            </div>
        </div >
    );
}
