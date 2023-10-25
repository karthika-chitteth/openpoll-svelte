export type TResponse<T> = {
  message?: string;
  error?: [];
  data?: T;
};
