import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';

@NgModule({
  declarations: [CardComponent, FilterTermPipe],
  exports: [CardComponent, FilterTermPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
