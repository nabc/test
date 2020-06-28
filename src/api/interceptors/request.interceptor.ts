import snakeCaseKeys from 'snakecase-keys';

export const requestHandler = (request: any) => {
  return {
    ...request,
    data: snakeCaseKeys({ ...request.data }, { deep: true }),
  };
};
