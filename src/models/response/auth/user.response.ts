export interface RegisterResponse {
    message: string;
    data: RegisterData;
    error: string;
  }
  export interface RegisterData {
    name: string;
    token: string;
  }
  export interface LoginResponse {
    message: string;
    data: LoginData;
    error: string;
  }
  export interface LoginData {
    name: string;
    email: string;
    token: string;
  }
  