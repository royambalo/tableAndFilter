import {Component, Inject, OnInit} from '@angular/core';
import {eAppDialogStatus, IDialogAction} from '../../models/resonse.models';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  dialogStatuses = eAppDialogStatus;
  departmentTypeTitle = 'add edit pop up';
 formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(null, Validators.required),
    image: new FormControl('', Validators.required),
    category : new FormControl('', Validators.required)
  });
  clicked = 0;

  constructor(   @Inject(MAT_DIALOG_DATA) public action: IDialogAction<any>,
                 private dialog: MatDialogRef<IDialogAction>) { }

  ngOnInit(): void {
    if (this.action?.data) {
      console.log(this.action);
      this.formGroup.patchValue({
        name: this.action.data?.name || '',
        price: this.action.data?.price || null,
        image: this.action.data?.image || '',
        category: this.action.data?.cat || ''
      });
    }
  }
  closeModal(ev = eAppDialogStatus.DISMISS): void {
    const payload = { status: ev };
    this.dialog.close(payload);
  }
  okClick(): void {
    this.clicked++;
    if (this.clicked < 2) {
      const { name, price, image, category } = this.formGroup.value;
      const payload = {
        status: eAppDialogStatus.CLOSE_OK,
        edit: this.action.edit,
        data: {
          id: this.action.data?._id,
          name,
          price,
          image,
          category
        },
      };
      this.dialog.close(payload);
    }
  }
}
