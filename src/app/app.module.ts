import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'flash-messages-angular';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { UserService } from './services/user.service';
import { userReducer } from './store/User.reducer';
import { UserEffect } from './store/User.effect';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    StoreModule.forRoot({ user: userReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
    EffectsModule.forRoot([UserEffect]),
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
