import { GenderEnum } from './gender.enum';

export interface User {
  id: string;
  name: string;
  weight: number;
  height: number;
  bodyFatPercentage: number;
  muscleRate: number;
  age: number;
  gender: GenderEnum;
}
