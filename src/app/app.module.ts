import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { TemplateComponent } from './components/template/template.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatMenuModule, MatDialogModule, MatTabsModule, MatInputModule,
  MatSnackBarModule, MatTooltipModule, MatIconModule, MatToolbarModule, MatListModule,
  MatCardModule, MatSidenavModule, MatButtonModule, MatSelectModule, MatSlideToggleModule,
  MatButtonToggleModule, MatFormFieldModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule,
  MatRadioModule, MatSliderModule, MatStepperModule, MatExpansionModule, MatChipsModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatTableModule, MatBadgeModule, MatSortModule, MatPaginatorModule, MatGridListModule, MatNativeDateModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PNFComponent } from './components/pnf/pnf.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    TemplateComponent,
    PNFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule, MatDialogModule, MatTabsModule, MatInputModule,
    MatSnackBarModule, MatTooltipModule, MatIconModule, MatToolbarModule, MatListModule,
    MatCardModule, MatSidenavModule, MatButtonModule, MatSelectModule, MatSlideToggleModule,
    MatButtonToggleModule, MatFormFieldModule, MatCheckboxModule, MatAutocompleteModule, MatDatepickerModule,
    MatRadioModule, MatSliderModule, MatStepperModule, MatExpansionModule, MatChipsModule, MatProgressSpinnerModule,
    MatProgressBarModule, MatTableModule, MatBadgeModule, MatSortModule, MatPaginatorModule, MatGridListModule, MatNativeDateModule, BrowserAnimationsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
