import { NgModule } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import {
  MatCard,
  MatCardTitle,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
} from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  imports: [
    MatProgressSpinner,
    MatCard,
    MatCardTitle,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatIcon,
  ],
  exports: [
    MatProgressSpinner,
    MatCard,
    MatCardTitle,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatIcon,
  ],
})
export class MaterialModule {}
