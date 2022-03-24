import Box from '@mui/material/Box';
import ToolBar from './components/ToolBar';
import { useSelector, useDispatch } from 'react-redux';
import StateInterface from './interfaces/StateInterface';
import { CustomSlide } from './components/CustomSlide';

export default function MyList() {

    const Users = useSelector((state: StateInterface) => state.users);


    return (
        <Box bgcolor="primary">
            <ToolBar display={""} />
            <CustomSlide type='movie' title={"Ma Liste"} list={Users.selectedUser.movieList} />
        </Box>
    );
}
