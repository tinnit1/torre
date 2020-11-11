import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {loadOpportunity} from '../../store/actions/oportunity.actions';
import {Subscription} from 'rxjs';
import {RootObject} from '../../models/rootObject';
import {Opportunities} from '../../models/opportunities';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  text: string;
  opportunitySubscription: Subscription;
  opportunity: Opportunities;
  loading = false;
  error: any;

  constructor(private store: Store<AppState>) {
    this.store.select('opportunity').subscribe(({opportunity, loading, error}) => {
      this.opportunity = opportunity;
      this.loading = loading;
      this.error = error;
      if (this.opportunity !== null) {
        this.opportunity.details.forEach((value) => {
          if (value.code === 'challenges') {
            this.text = value.content;
            return;
          }
          if (value.code === 'reason') {
            this.text = value.content;
          }
        });
      }
    });
  }

  ngOnInit(): void {
  }

  show(id: string) {
    console.log(id);
    this.store.dispatch(loadOpportunity({id}));
  }

  goToUrl(): void {

  }
}
