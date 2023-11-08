import { userStore } from '../store';
import { type TResponse } from '../types/api.types';
import { type TUser, type TUserLoginPayload, type TUserRegisterPayload } from '../types/user.type';
import ApiInstance from './api.service';

export namespace UserService {
  export const login = async (payload: TUserLoginPayload) => {
    return ApiInstance.post<TResponse<TUser>>('/User/login', payload).then((res) => {
      const user = res.data.data as TUser;
      saveUser(user);
      return user;
    });
  };

  export const register = async (payload: TUserRegisterPayload) => {
    return ApiInstance.post<TResponse<TUser>>('/User/register', payload).then((res) => {
      const user = res.data.data as TUser;
      saveUser(user);
      return user;
    });
  };

  export const logout = async () => {
    localStorage.removeItem('user');
    return true;
  };

  export const isLoggedIn = () => !!getLoggedUser();

  export const getLoggedUser = (): TUser | null => {
    return JSON.parse(localStorage.getItem('openpoll_user') || 'null');
  };

  const saveUser = (user: TUser) => {
    userStore.set(user);
    localStorage.setItem('openpoll_user', JSON.stringify(user));
  };
}
