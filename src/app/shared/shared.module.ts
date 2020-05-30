import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';

@NgModule({
  declarations: [CardComponent, FilterTermPipe, BannerCutOutComponent],
  exports: [CardComponent, FilterTermPipe, BannerCutOutComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
