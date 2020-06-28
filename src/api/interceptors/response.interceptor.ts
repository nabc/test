import { AxiosError, AxiosResponse } from 'axios';
import camelcaseKeys from 'camelcase-keys';

export const errorHandler = (error: AxiosError) => {
  console.error(error);

  return Promise.reject({ ...error });
};

export const successHandler = (response: AxiosResponse) => {
  const convertedData: any = camelcaseKeys(response.data, { deep: true });
  return { ...response, data: convertedData };
};
