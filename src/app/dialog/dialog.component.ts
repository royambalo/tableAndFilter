import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';
import {eAppDialogStatus} from '../models/resonse.models';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @Input() title = '';
  @Output() closeModal = new EventEmitter<eAppDialogStatus>();
  dialogStatuses = eAppDialogStatus;
  constructor() { }

  ngOnInit(): void {
  }

}
