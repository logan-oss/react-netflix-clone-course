import Box from '@mui/material/Box';
import ToolBar from './ToolBar';
import Button from '@mui/material/Button';
import { Avatar, FormControl, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import React from 'react';
import store from "./store/store";
import { addUser } from './store/userSlice'

export default function AddProfile() {

    const [profileColor, setProfileColor] = React.useState("silver");
    const colors = ["silver", "green", "red", "yellow", "orange", "pink", "purple"];

    function colorChange(e: SelectChangeEvent) {
        setProfileColor(e.target.value as string)
    }

    function submit(){
        store.dispatch(addUser(""));
    }

    const selectStyle = '2px solid '+ profileColor;

    return (
        <div>
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
                        ?
                    </Avatar>
                    <Box sx={{ml:2}}>
                        <TextField id="outlined-basic" label="Votre nom" variant="outlined" />
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
                <Button variant="outlined" sx={{ borderWidth: "2px", fontSize: "20px" }}>VALIDER</Button>
            </div>
        </div >
    );
}
