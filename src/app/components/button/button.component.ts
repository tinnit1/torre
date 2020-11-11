import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {RootObject} from '../../models/rootObject';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {loadUser} from '../../store/actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  username = 'juanpalacor';
  userForm: FormGroup;

  constructor(private store: Store<AppState>, private formBuilder: FormBuilder, private  router: Router) {
  }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: ['juanpalacor', Validators.required],
    });
  }

  async onClick() {
    console.log(this.userForm.value.name);
    if (this.userForm.value.name !== '') {
      await this.router.navigate(['/profile']);
    }
  }

}
