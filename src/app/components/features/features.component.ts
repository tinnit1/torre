import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Opportunities} from '../../models/opportunities';
import {Work} from '../../models/work';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {loadJobs} from '../../store/actions';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  jobsSubscription: Subscription;
  job: Work[];
  loading = false;
  error: any;

  constructor(private store: Store<AppState>) {
    this.store.select('jobs').subscribe(({jobs, loading, error}) => {
      this.job = jobs;
      this.loading = loading;
      this.error = error;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadJobs());
  }

}
