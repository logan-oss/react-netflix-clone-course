import Box from '@mui/material/Box';
import ToolBar from './components/ToolBar';
import { useSelector } from 'react-redux';
import { Button, Grid, Stack, Typography } from '@mui/material';
import { Slide } from './components/Slide';
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import { useEffect } from 'react';
import StateInterface from './interfaces/StateInterface';
import React from 'react';
import { LoadingDataSeries } from './actions/fetchApiSeries';
import { CustomSlide } from './components/CustomSlide';

export default function MainMenu() {

    const [viewSearch, SetOnSearch] = React.useState(false)

    useEffect(() => {
        LoadingDataSeries();
    }, [])

    const Series = useSelector((state: StateInterface) => state.series);

    return (
        <Box bgcolor="primary">
            <ToolBar display={""} setOnSearch={SetOnSearch} />
            {viewSearch ?
                <> 
                    <CustomSlide type="serie" title={"Recherche sur le mot \"" + Series.searchSeries.keyword + "\""} list={Series.searchSeries.series} />
                </>
                :
                ((Series.popularSeries.length !== 0)) &&
                <>
                    <Box sx={{
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                        height: "calc(100vh - 73.125px)",
                        '&::after': {
                            position: 'absolute',
                            content: '""',
                            width: '100%',
                            height: '100%',
                            top: 0,
                            left: 0,
                            backgroundImage: 'url(https://image.tmdb.org/t/p/original/' + Series.popularSeries[0].backdrop_path + ')',
                            backgroundRepeat: "no-repeat",
                        }

                    }}>
                        <Typography fontSize='70px' sx={{ position: 'absolute', zIndex: 200, top: '40%', maxWidth: "50%", left:0, ml:5 }}>
                            {Series.popularSeries[0].name}
                        </Typography>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="space-between"
                            ml={5}
                            mb={30}
                            zIndex={100}
                        >
                            <Stack direction="row" spacing={1}>
                                <Button startIcon={<PlayArrow />} sx={{ fontWeight: "bold", bgcolor: "white", color: "black", mr: 1 }} variant="contained">Lecture</Button>
                                <Button startIcon={<InfoOutlined />} sx={{ fontWeight: "bold" }} variant="contained" >Plus d'infos</Button>
                            </Stack>
                        </Grid>
                    </Box>
                    <Stack sx={{ ml: 5 }} spacing={1}>
                        <Slide type='serie' list={Series.popularSeries} title={"Les plus gros succès de Netflix"} />
                        <Slide type='serie' list={Series.trendingSeries} title={"Tendances actuelles"} />
                        <Slide type='serie' list={Series.topSeries} title={"Les mieux notés"} />
                    </Stack>
                </>
            }

        </Box>
    );
}
