import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {RootObject} from '../../models/rootObject';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {loadUser} from '../../store/actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userSubscription: Subscription;
  user: RootObject;
  loading = false;
  error: any;

  constructor(private store: Store<AppState>) {
    this.store.select('user').subscribe(({user, loading, error}) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadUser({username: 'juanpalacor'}));
  }

}
