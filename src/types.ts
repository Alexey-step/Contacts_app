export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  isFavorite: boolean;
}

export interface RegisterOptions {
  required?: string;
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
}

export interface IUseForm {
  email: string;
  password: string;
  name: string;
}
