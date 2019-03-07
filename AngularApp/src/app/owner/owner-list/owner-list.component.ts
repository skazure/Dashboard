import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/_intefaces/owner.model';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  public owners: Owner[];
  public errorMessage: string = '';
  

  constructor(private repository: RepositoryService, private errorHandler: ErrorHandlerService,private router: Router) { }

  ngOnInit() {
    this.getAllOwners();
  }

  public getAllOwners(){
    let apiAddress: string = "api/owner";
    
    this.repository.getData(apiAddress).subscribe(res => {this.owners = res as Owner[];
    },
    (error) => {
      this.errorHandler.handleError(error);
      this.errorMessage = this.errorHandler.errorMessage;
    }    
    )
  }

  public getOwnerDetails(id){
    let detailsUrl: string = `/owner/details/${id}`
    this.router.navigate([detailsUrl]);
  }

}
