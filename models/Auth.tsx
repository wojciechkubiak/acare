export interface Auth {
  authToken: string;
  refreshToken: string;
}

export interface AuthToken {
  access_token: string;
  refresh_token: string;
}

export interface AuthResponse {
  auth: Auth;
}

export interface AuthLoginData {
  email: string;
  password: string;
}

export interface AuthRegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
