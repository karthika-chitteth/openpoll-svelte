import { type TResponse } from '../types/api.types';
import { type TUser, type TUserLoginPayload, type TUserRegisterPayload } from '../types/user.type';
import ApiInstance from './api.service';

export namespace UserService {
  export const login = async (payload: TUserLoginPayload) => {
    return ApiInstance.post<TResponse<TUser>>('/User/login', payload).then((res) => {
      const user = res.data.data;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
  };

  export const register = async (payload: TUserRegisterPayload) => {
    return ApiInstance.post<TResponse<TUser>>('/User/register', payload).then((res) => {
      const user = res.data.data;
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
  };
}
