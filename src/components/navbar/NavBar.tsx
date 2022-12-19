import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeViewer6Photo, refreshingData } from '../../redux/handleImages';
// Style UI
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
// Assets
import Mars1 from '../../assets/icons/mars1.png';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import viewerPhotoSlice from '../../redux/handleImages';

const NavBar = () => {
  const dispatch = useDispatch();
  const flagShowViewerPhoto = useSelector((state: any) => state.viewerphotoslice.flagShow);

  const dispatch2 = useAppDispatch()

  const flagShowViewerPhoto2: number = useAppSelector((state: { viewerphotoslice: { flagShow: any } }) => state.viewerphotoslice.flagShow);
   const refreshingData =  useSelector((state: any) => state.viewerphotoslice.refreshing);

  console.log('flagShowViewerPhoto 2: ', flagShowViewerPhoto);
  const [flag, setFlag] = useState<boolean>(false);
  const [counterRefreshing, setCounterRefreshing] = useState<number>(0);

  const handleRefreshig = () => {
    setCounterRefreshing((prev) => prev + 1);
    // dispatch2(refreshingData(({refreshing:counterRefreshing})));
    dispatch(refreshingData({ refreshing: counterRefreshing }));
  };

  useEffect(() => {
    setFlag(!flag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flagShowViewerPhoto]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='fixed' style={{ backgroundColor: '#2B3467' }}>
        <Toolbar variant='dense'>
          <img src={Mars1} alt='Logo' style={{ height: '90px', padding: '5px' }} />
          <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
            MARS ROVERS PHOTOS
          </Typography>
          <div>
            <Button
              variant='contained'
              size='medium'
              onClick={() => {
                dispatch(changeViewer6Photo({ flagShow: flag }));
              }}>
              {!flag ? 'Show 4 Pictures' : 'Show 6 Pictures'}
            </Button>
            <Button
              variant='contained'
              size='medium'
              onClick={() => {
                // dispatch(changeViewer6Photo({ refreshingData: flag }));
                handleRefreshig();
              }}>
              Refresh pictures
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
