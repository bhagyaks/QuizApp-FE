import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'spinner',
  template: `
    <div class="spinner-wrapper">
      <mat-progress-spinner mode="indeterminate" diameter="50"> </mat-progress-spinner>
    </div>
  `,
  styles: [
    `
      .spinner-wrapper {
        display: flex;
        justify-content: center;
        margin-top: 4rem;
      }
    `,
  ],

  imports: [MaterialModule],
})
export class SpinnerComponent {}
