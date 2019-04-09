import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {QuestionsListComponent} from './questions-list/questions-list.component';
import {QuestionsCreateComponent} from './questions-create/questions-create.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    QuestionsCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
