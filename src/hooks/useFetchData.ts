import { useEffect, useState } from 'react';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
// Interface
import { InterfaceMarsResponse } from '../interfaces/interfacesMarsResponse';
// Services
import apiPhotoAxiosInstance from '../services/apis/apiPhotoAxiosInstance';
import { fetchData as fetchDataPhotos } from '../services/apis/fetchData';

export const useFetchData = () => {
  // States
  const [response, setResponse] = useState<InterfaceMarsResponse>();
  const [error, setError] = useState<string>('');
  const [flagLoading, setFlagLoading] = useState<boolean>(false);
  const [reload, setReload] = useState<number>(0);

  // Fecth Data configuration
  const axiosInstance: AxiosInstance = apiPhotoAxiosInstance;
  const url: string = '/v1/rovers/curiosity/photos?sol=1000&api_key=pJIEKaW7q8VgUrIGviuxCw8sG4I7ndUUQVX5awzj';
  const requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Language': 'en-EN',
    },
  };

  // Refetch Function
  const reFetch = () => setReload((prev) => prev + 1);

  //
  const fetchData = async () => {
      setFlagLoading(true);
    try {
      const response = await fetchDataPhotos(axiosInstance, requestConfig, url);
      const respData = await response;
      setResponse(respData);
      setFlagLoading(false);
    } catch (error: any) {
      setFlagLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchData();
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  return {
    response,
    flagLoading,
    error,
    reFetch,
  };
};
