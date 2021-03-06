import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatTabsModule,
  MatCardModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatDialogModule
} from '@angular/material';

@NgModule({
    imports: [
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatTabsModule,
      MatCardModule,
      MatSelectModule,
      MatProgressSpinnerModule,
      MatDialogModule
    ],
    exports: [
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatCheckboxModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatTabsModule,
      MatCardModule,
      MatSelectModule,
      MatProgressSpinnerModule,
      MatDialogModule
    ],
})
export class CustomeMaterialModule {}
