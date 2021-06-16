import { RegisterOptions, FieldValues } from "react-hook-form";

export interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  isFavorite: boolean;
}

export interface IForm {
  register: (value: string, options: RegisterOptions) => FieldValues;
  errors: FieldValues;
  handleSubmit: () => void;
  status?: string;
  handleDelete?: () => void;
}

export interface IUseForm {
  email: string;
  password: string;
  name?: string;
}
