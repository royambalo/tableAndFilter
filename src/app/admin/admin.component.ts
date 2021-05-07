import { Component, OnInit } from '@angular/core';
import {HttpService} from '../core/http.service';
import {eAppDialogStatus, IDialogAction, IResponseModel} from '../models/resonse.models';
import { displayedColumns } from './table.const';
import {MatDialog} from '@angular/material/dialog';
import {AddEditComponent} from './add-edit/add-edit.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  dataSource: IResponseModel[] = [];
  displayedColumns: string[] = displayedColumns as string[];
  constructor(private httpService: HttpService,    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.httpService.getProductsForAdmin('/prods').subscribe(data => {
      this.dataSource = data;
    });
  }
  addOrEdit(ev?: IResponseModel): void{
    const payload: IDialogAction<any> = {
      status: eAppDialogStatus.OPEN,
      data: ev ? ev : undefined,
      edit: !!ev,
    };
    const dialogRef = this.dialog.open(AddEditComponent, {
      autoFocus: true,
      disableClose: true,
      hasBackdrop: true,
      height: '35 rem',
      width: '45vw',
      maxHeight: '35rem',
      maxWidth: '50rem',
      data: payload,
    });
    dialogRef.afterClosed().subscribe((data: IDialogAction<any>) => {
      if (data.status !== eAppDialogStatus.DISMISS) {
      if (data?.edit){
        const bodyData = {
          id: ev?._id,
          name: data?.data?.name,
          price: data?.data?.price,
          image: data?.data?.image,
          cat: data?.data?.category,
          user_id: data?.data?.user_id
        };

        this.httpService.editProd('/prods/update', bodyData).subscribe(prods => this.dataSource = prods);
      }
      else{
        const bodyData = {
          name: data?.data?.name,
          price: data?.data?.price,
          image: data?.data?.image,
          cat: data?.data?.category,
        };
        this.httpService.addProd('/prods/add', bodyData).subscribe(prods => this.dataSource = prods);
      }
      }
    });
  }
  deleteProd(ev: IResponseModel): void{
    this.httpService.delProducts('/prods/del', ev?._id).subscribe(data => {this.dataSource = data; }, (error) => {console.log(error); });
  }
}
