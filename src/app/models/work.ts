import {Organization} from './organization';
import {Compensation} from './compesation';

export class Work {
  constructor(public id: string,
              public objective: string,
              public type: string,
              public organizations: Organization[],
              public locations: any[],
              public remote: boolean,
              public external: boolean,
              public deadline: Date,
              public status: string,
              public compensation: Data,
              public skills: Skill[]) {
  }
}

export interface Skill {
  name: string;
  experience: string;
}

export interface Data {
  data: Compensation;
}
