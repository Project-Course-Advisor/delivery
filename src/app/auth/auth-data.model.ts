export interface AuthData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  dob: Date;
  university: string;
}

export interface AuthDataLogin {
  email: string;
  password: string;
}
