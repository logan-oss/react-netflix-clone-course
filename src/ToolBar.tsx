import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const links = ["Accueil", "Séries", "Films", "Nouveautés les plus regardées", "Ma liste"]

export default function ToolBar(props: any) {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: 'rgb(0,0,0)',
            },
        },
    });

    const styles = {
        link: {
            color: '#B1B1B1',
        },
    }

    const logoOnly = true;


    return (
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static">
                    <Container maxWidth={false}>
                        <Toolbar disableGutters>
                            <img src="assets/images/logo.png" alt="" style={{ width: "130px", margin: "0px 20px" }} />
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
                                <Box sx={{ flexGrow: 0 }}>
                                        <Tooltip title="Profil">
                                            <IconButton sx={{ p: 0 }}>
                                                <Avatar variant="square" alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                            </IconButton>
                                        </Tooltip>
                                    </Box>
                                ]

                            }

                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </Stack>
    );
}