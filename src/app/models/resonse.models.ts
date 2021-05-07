export interface IResponseModel{
  cat: string;
  date: Date ;
  image: string;
  info: string;
  price: number;
  name: string;
  user_id: string;
  _id: string;
}
export interface IResponseModel1{
  userDisplayName:string;
  GroupName:string;
  date:string;
  totalHours:number;
}
export interface IValues{
  periodStr:string;
  value:number
}
export interface IModel{
  fieldGroup:string;
  arrValues:IValues[];
}
export enum eAppDialogStatus {
  OPEN, // dialog status is open
  DISMISS, // dialog status is closed without taken action => cancel
  CLOSE_OK, // Close with success
  CLOSE_ERROR, // close with an error
}

export interface IDialogAction<T = any, R = any> {
  status: eAppDialogStatus;
  data?: T;
  edit?: boolean;
  error?: R;
  projectId?: number;
  projectName?: string;
  preventEdit?: boolean;
}
