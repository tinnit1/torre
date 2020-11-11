import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {RootObject} from '../../models/rootObject';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {loadUser} from '../../store/actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnDestroy {
  username = '';
  userForm: FormGroup;
  userSubscription: Subscription;
  user: RootObject;
  loading = false;
  error: any;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {
    this.store.select('user').subscribe(({user, loading, error}) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  onClick() {
    console.log(this.userForm.value.name);
    if (this.userForm.value.name !== '') {
      console.log('paso');
      this.store.dispatch(loadUser({username: this.userForm.value.name}));
    }
  }

}
