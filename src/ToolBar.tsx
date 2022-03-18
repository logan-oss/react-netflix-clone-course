import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import ToolbarInterface from './interfaces/propsInterface/ToolbarInterface';

const links = ["Accueil", "Séries", "Films", "Nouveautés les plus regardées", "Ma liste"]

export default function ToolBar(props: ToolbarInterface) {

    const styles = {
        link: {
            color: '#B1B1B1',
        },
    }

    const logoOnly = true;

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));


    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="secondary">
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <img src="assets/images/logo.png" alt="" style={{ width: "130px", margin: "0px 16px" }} />
                        {props.display !== "logoOnly" &&

                            [
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, m: 2 }}>
                                    {
                                        links.map((link) => <Link style={styles.link} sx={{ mx: 1 }}>
                                            {link}
                                        </Link>)
                                    }
                                </Box>

                                ,
                                <Box sx={{ flexGrow: 0, display: "inline-flex" }}>
                                    <Stack direction="row" spacing={1}>
                                        <Search>
                                            <SearchIconWrapper>
                                                <SearchIcon />
                                            </SearchIconWrapper>
                                            <StyledInputBase
                                                sx={{width: "300px"}}
                                                placeholder="Search…"
                                                inputProps={{ 'aria-label': 'search' }}
                                            />
                                        </Search>
                                        <Tooltip title="Profil">
                                            <IconButton sx={{ p: 0 }}>
                                                <Avatar variant="square" alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                            </IconButton>
                                        </Tooltip>
                                    </Stack>
                                </Box>
                            ]

                        }

                    </Toolbar>
                </Container>
            </AppBar>
        </Stack>
    );
}