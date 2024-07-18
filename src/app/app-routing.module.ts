import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { DietComponent } from './user/diet/diet.component';
import { CommunicationComponent } from './user/communication/communication.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diet', component: DietComponent },
  { path: 'chat', component: CommunicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
