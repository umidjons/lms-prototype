import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {QuestionsListComponent} from './questions-list/questions-list.component';
import {QuestionsCreateComponent} from './questions-create/questions-create.component';

const routes: Routes = [
  {
    path: 'questions-list',
    component: QuestionsListComponent,
    children: [
      {path: 'question-create', component: QuestionsCreateComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
