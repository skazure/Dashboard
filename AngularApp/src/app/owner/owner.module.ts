import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
 
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OwnerDetailsComponent } from './owner-details/owner-details.component';

 
@NgModule({
  imports: [
    CommonModule,    
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'list', component: OwnerListComponent },
      { path: 'create', component: OwnerCreateComponent },
      { path: 'details/:id', component: OwnerDetailsComponent }
    ])
  ],
  declarations: [OwnerListComponent, OwnerCreateComponent, OwnerDetailsComponent]
})
export class OwnerModule { }