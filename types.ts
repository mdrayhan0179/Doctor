export interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  date: string;
  time: string;
  reason: string;
}

export interface Appointment extends FormData {
  id: number;
  fullPhone: string;
  status: string;
}
