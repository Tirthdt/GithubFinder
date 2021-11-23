import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FlashMessagesService } from 'flash-messages-angular';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as UserActions from '../store/User.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @ViewChild('nameString')
  nameRef!: ElementRef<HTMLInputElement>;
  user$!: Observable<any>;
  name: string = '';

  constructor(
    private fm: FlashMessagesService,
    private store: Store<any>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') || '';
    if (this.name) {
      console.log('here');
      this.store.dispatch(UserActions.UserSearchRequest({ name: this.name }));
      // this.nameRef.nativeElement.value = this.name;
    }
    this.user$ = this.store.select('user');
    console.log(this.name);
  }

  searchUser() {
    const name = this.nameRef.nativeElement.value;
    if (name === '') {
      this.fm.show('Please enter name before searching', {
        cssClass: 'alert-danger',
        timeout: 1500,
      });
      return;
    }

    this.store.dispatch(UserActions.UserSearchRequest({ name }));
    this.nameRef.nativeElement.value = '';
  }

  UserFetch() {
    this.store.dispatch(UserActions.UserSearchRequest({ name: 'Tirth' }));
  }
}
