import {Place} from './place';
import {Language} from './language';
import {Strength} from './strength';
import {Organization} from './organization';
import {Compensation} from './compesation';

export class Opportunities {
  constructor(
    public id: string,
    public place: Place,
    public agreement: Agreement,
    public languages: Language[],
    public created: Date,
    public crawled: boolean,
    public opportunity: string,
    public active: boolean,
    public stableOn: Date,
    public timezones: string[],
    public strengths: Strength[],
    public organizations: Organization[],
    public compensation: Compensation,
    public openGraph: string,
    public status: string
  ) {
  }
}

export class Agreement {
  constructor(public type: string) {
  }
}
