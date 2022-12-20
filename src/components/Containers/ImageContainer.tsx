import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Components
import ImageCard from '../cards/ImageCard';
import Spinner from '../spinner/Spinner';
// Interface
import { Photo } from '../../interfaces/interfacesMarsResponse';
// Utils
import randomPhotos from '../utils/randomPhotos';
// Style UI
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { RootState } from '../../redux/store';
import { useFetchData } from '../../hooks/useFetchData';

const ImageContainer = () => {
  // States
  const [xlScreenValue, setXLScreenValue] = useState<number>(4);
  const [dataA, setData] = useState<Photo[]>();
  //
  const { response, flagLoading } = useFetchData();
  //
  const dataShow6Photo = useSelector((state: RootState) => state.viewerphotoslice.value);
  const refreshingData = useSelector((state: RootState) => state.refreshing.value);

  const handleData = async () => {
    const newArray = await randomPhotos(response, dataShow6Photo.flagShow ? 6 : 4);
    setData(newArray);
  };

  useEffect(() => {
    setXLScreenValue(dataShow6Photo.valueScreen);
    handleData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  useEffect(() => {
    if (response) {
      setXLScreenValue(dataShow6Photo.valueScreen);
      handleData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataShow6Photo.flagShow]);

  useEffect(() => {
    if (response) {
      handleData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshingData.refreshing]);

  return (
    <>
      <Box sx={{ width: '100%', marginTop: '100px' }}>
        {flagLoading ? (
          <Spinner color={'#2B3467'} cargando={flagLoading} size={50} />
        ) : (
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, xl: 1 }} style={{ paddingTop: '5px' }}>
            {dataA?.map((res) => (
              <Grid key={res.id} item xs={12} md={xlScreenValue} xl={xlScreenValue}>
                <ImageCard
                  key={res.id}
                  id={res.camera.id}
                  fullName={res.camera.full_name}
                  url={res.img_src}
                  earthDate={res.earth_date}
                  nameRover={res.rover.name}
                  statusRover={res.rover.status}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default ImageContainer;
