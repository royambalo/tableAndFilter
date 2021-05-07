import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { StatsComponent } from './stats/stats.component';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { AdminTableComponent } from './admin/admin-table/admin-table.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AddEditComponent } from './admin/add-edit/add-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    StatsComponent,
    AdminTableComponent,
    AddEditComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  exports : [
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatRadioModule,
    MatSnackBarModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
