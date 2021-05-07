import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {IResponseModel} from '../../models/resonse.models';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() data: IResponseModel[] = [];
  @Output() rowClicked = new EventEmitter<IResponseModel>();
  @Output() delete = new EventEmitter<IResponseModel>();

  constructor() { }

  ngOnInit(): void {
  }

}
