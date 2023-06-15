type ServiceResponseErrorType = 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND' | 'BAD_REQUEST';

export type ServiceResponseError = {
  status: ServiceResponseErrorType, 
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL', 
  data: T
};

export type OrderServiceResponse = {
  id: number,
  userId: number,
  productIds: number[],
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;

export type OrderResponse = {
  userId: number,
  productIds: number[],
};