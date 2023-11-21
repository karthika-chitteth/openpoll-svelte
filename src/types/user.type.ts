export type TUser = {
  [x: string]: any;
  uniqueId?: string;
  email: string;
  name: string;
  password?: string;
  confirmpassword?:string;
};

export type TUserLoginPayload = Omit<TUser, 'id' | 'name' | 'created_at' | 'updated_at'>;

export type TUserRegisterPayload = Omit<TUser, 'id' | 'created_at' | 'updated_at'>;
