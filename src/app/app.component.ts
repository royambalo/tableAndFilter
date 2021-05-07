import { Component, OnInit } from '@angular/core';
import { IModel, IValues } from './models/resonse.models';
import * as moment from 'moment';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: IModel[] = [];
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
  groupByField = 'UserDisplayName';
  groupPeriod = 'day';
  iValues: IValues[] = [];
  fromDate = new Date('01/01/2021');
  toDate = new Date('03/30/2021');
  jsonMe = [
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Management',
      Date: '01/01/2021',
      TotalHours: 30,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Management',
      Date: '01/01/2021',
      TotalHours: 4,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Management',
      Date: '01/12/2021',
      TotalHours: 2.5,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Management',
      Date: '01/13/2021',
      TotalHours: 6,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Management',
      Date: '01/04/2021',
      TotalHours: 1,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Management',
      Date: '01/05/2021',
      TotalHours: 2,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Management',
      Date: '01/06/2021',
      TotalHours: 7,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Management',
      Date: '02/07/2021',
      TotalHours: 7,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Management',
      Date: '02/08/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Management',
      Date: '02/09/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '03/10/2021',
      TotalHours: 2,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '01/02/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '01/12/2021',
      TotalHours: 4,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '01/13/2021',
      TotalHours: 4,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '01/04/2021',
      TotalHours: 6,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '01/05/2021',
      TotalHours: 7,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '01/06/2021',
      TotalHours: 8,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '02/07/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '02/08/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '02/09/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Yuval',
      GroupName: 'Dev',
      Date: '03/10/2021',
      TotalHours: 1.5,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '01/11/2021',
      TotalHours: 2,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '01/22/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '01/12/2021',
      TotalHours: 4,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '01/23/2021',
      TotalHours: 4,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '01/04/2021',
      TotalHours: 6,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '01/05/2021',
      TotalHours: 7,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '01/06/2021',
      TotalHours: 8,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '02/07/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '02/08/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '02/09/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Avi',
      GroupName: 'Dev',
      Date: '03/10/2021',
      TotalHours: 1.5,
    },
    {
      UserDisplayName: 'Modi',
      GroupName: 'Management',
      Date: '01/11/2021',
      TotalHours: 3,
    },
    {
      UserDisplayName: 'Modi',
      GroupName: 'Management',
      Date: '01/07/2021',
      TotalHours: 4,
    },
    {
      UserDisplayName: 'Modi',
      GroupName: 'Management',
      Date: '01/12/2021',
      TotalHours: 2.5,
    },
    {
      UserDisplayName: 'Modi',
      GroupName: 'Management',
      Date: '01/13/2021',
      TotalHours: 6,
    },
    {
      UserDisplayName: 'Modi',
      GroupName: 'Management',
      Date: '01/04/2021',
      TotalHours: 1,
    },
    {
      UserDisplayName: 'Modi',
      GroupName: 'Management',
      Date: '01/05/2021',
      TotalHours: 2,
    },
  ];

  constructor() {}
  ngOnInit() {}

  buildDate(){
    this.iValues = [];
    this.fromDate = this.range.get('start')?.value;
    this.toDate = this.range.get('end')?.value;
    if (this.groupPeriod === 'day') {
      let i = this.toDate.getTime() - this.fromDate.getTime();
      let day = 1000 * 60 * 60 * 24;
      i = Math.floor(i / day);
      for (let index = 0; index < i; index++) {
        let now = moment(this.fromDate);
        now = now.add(index, 'd');
        let item: IValues = {
          periodStr: `${now.date()}/${now.month() + 1}`,
          value: 0,
        };
        this.iValues.push(item);
      }
    } else {
      let i = this.toDate.getMonth() - this.fromDate.getMonth();
      if (i === 0) {
        let item: IValues = {
          periodStr: `${this.fromDate.getMonth() + 1}`,
          value: 0,
        };
        this.iValues.push(item);
      } else {
        for (let index = 0; index <= i; index++) {
          let item: IValues = {
            periodStr: `${index + 1}`,
            value: 0,
          };
          this.iValues.push(item);
        }
      }
    }
  }
  filterMe(): void {
    this.buildDate();
    const mapping: { [key: string]: IModel } = this.jsonMe.reduce(
      (result: { [key: string]: IModel }, item) => {
        let groupByField;
        if (this.groupByField === 'UserDisplayName') {
          groupByField = item.UserDisplayName;
        } else {
          groupByField = item.GroupName;
        }
        if (!result[groupByField]) {
          var tempArray = JSON.parse(JSON.stringify(this.iValues));
          result[groupByField] = {
            fieldGroup: groupByField,
            arrValues: tempArray,
          };
        }
        let date = moment(item.Date);
        let dateInString: string = '';
        if (this.groupPeriod === 'day') {
          dateInString = `${date.date()}/${date.month() + 1}`;
        } else {
          dateInString = `${date.month() + 1}`;
        }
        result[groupByField].arrValues.map((inArr) => {
          if (dateInString === inArr.periodStr) {
            inArr.value += item.TotalHours;
          }
        });

        return result;
      },
      {}
    );
    this.dataSource = Object.values(mapping);
    this.displayedColumns = this.iValues.map((item) => {
      return item.periodStr;
    });
  }
}
