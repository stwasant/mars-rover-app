import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// Components
import ImageCard from '../cards/ImageCard';
// Models
import { ModelMarsResponsePhotos } from '../../models/modelMarsRover';
// Interface
import { Photo } from '../../interfaces/interfacesMarsResponse';
// Utils
import randomPhotos from '../utils/randomPhotos';

// Style UI
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { selectValueRefreshingPhoto } from '../../redux/handleImages';
import { useAppSelector } from '../../hooks/useReduxHooks';

const ImageContainer = () => {
  // States
  const [flagImages, setFlagImages] = useState<boolean>(false);
  const [xlScreenValue, setXLScreenValue] = useState<number>(4);
  const [dataA, setData] = useState<Photo[]>();
  //
  const flagShowViewerPhoto: boolean = useSelector((state: any) => state.viewerphotoslice.flagShow);
  const refreshingData: number = useSelector((state: any) => state.viewerphotoslice.refreshing);
  const refresh: number = useAppSelector((state: { viewerphotoslice: { refreshing: any; }; }) => state.viewerphotoslice.refreshing)

  console.log('refresh:', refresh);

  const handleData = async () => {
    const newArray = await randomPhotos(ModelMarsResponsePhotos, xlScreenValue);
    console.log('newArray: ', newArray);
    setData(newArray);
  };
  useEffect(() => {
    setFlagImages(!flagImages);
    setXLScreenValue(flagImages ? 4 : 6);
    handleData();
    console.log('xlScreenValue 1: ', xlScreenValue);  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flagShowViewerPhoto]);

  useEffect(() => {
    console.log('xlScreenValue 2: ', xlScreenValue);
    handleData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ refreshingData])

  return (
    <>
      <Box sx={{ width: '100%', marginTop: '100px' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1, xl: 1 }} style={{ paddingTop: '5px' }}>
          {dataA?.map((res) => (
            <Grid key={res.id} 
                  item xs={12} 
                  md={xlScreenValue} 
                  xl={xlScreenValue}
              >
              <ImageCard  key={res.id}
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
      </Box>
    </>
  );
};

export default ImageContainer;
