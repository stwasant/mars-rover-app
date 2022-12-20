import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeViewer6Photo } from '../../redux/handleImages';
import { refreshingData } from '../../redux/handleRefreshing';
// Style UI
import { Box, AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
// Assets
import Mars1 from '../../assets/icons/mars1.png';
import { RootState } from '../../redux/store';


const NavBar = () => {
  const dispatch = useDispatch();
  const currentRefreshingData = useSelector((state: RootState) => state.refreshing.value);
  //
  const [flag, setFlag] = useState<boolean>(false);

  const handleChangeViewer6Photo = () => {
    setFlag((prev) => !prev);
    dispatch(changeViewer6Photo({ valueScreen: !flag ? 4 : 6, flagShow: !flag }));
  };

  const handleRefreshigData = () => {
    dispatch(refreshingData({ refreshing: currentRefreshingData.refreshing + 1 }));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' style={{ backgroundColor: '#2B3467' }}>
        <Toolbar variant='dense'>
          <img src={Mars1} alt='Logo' style={{ height: '90px', padding: '5px' }} />
          <Typography
            variant='h4'
            component='div'
            sx={{
              mr: 2,
              display: { xs:'none', sm: 'flex', md: 'flex', xl:'flex' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: {  xs: 200, md: 700, xl:800 },
              fontSize: { xs:10 ,sm: 20, md: 25, xl: 35 },
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            MARS ROVERS PHOTOS
          </Typography>
          <Stack direction='row' spacing={1}>
            <Button
              sx={{
                fontSize:{xs:8, sm:12, md:15, xl:20}
              }}
              variant='contained'
              size='medium'
              onClick={() => {
                handleChangeViewer6Photo();
              }}>
              {!flag ? 'Show 6 Pictures' : 'Show 4 Pictures'}
            </Button>
            <Button
              sx={{
                fontSize:{xs:8, sm:12, md:15, xl:20}
              }}
              variant='contained'
              size='medium'
              onClick={() => {
                handleRefreshigData();
              }}>
              Refresh pictures
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
