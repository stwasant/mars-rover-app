import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { InterfaceMarsResponse } from '../../interfaces/interfacesMarsResponse';

export const fetchData = ( axiosInstance: AxiosInstance, requestConfig: AxiosRequestConfig, url: string ): Promise<InterfaceMarsResponse> => {
    return axiosInstance.get(url, {
        ...requestConfig
    })
}