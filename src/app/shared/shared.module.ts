import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@NgModule({
  declarations: [CardComponent, FilterTermPipe, BannerCutOutComponent, SnackbarComponent],
  exports: [CardComponent, FilterTermPipe, BannerCutOutComponent, SnackbarComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
