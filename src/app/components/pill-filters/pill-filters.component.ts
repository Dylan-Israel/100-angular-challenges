import { Component, Input, Output, EventEmitter } from '@angular/core';
import { } from 'protractor';

@Component({
  selector: 'app-pill-filters',
  templateUrl: './pill-filters.component.html',
  styleUrls: ['./pill-filters.component.scss']
})
export class PillFiltersComponent {
  private pillLabels: string[] = [];
  @Input() public set pills(value: string[]) {
    this.pillLabels = value;
    this.unselectedPills = value;
  }
  public get pills(): string[] {
    return this.pillLabels;
  }
  public selectedPills: string[] = [];
  public unselectedPills: string[] = [];
  @Output() public selected = new EventEmitter<string[]>();

  public pillUpdate(pillDetails: { hasBeenSelected: boolean, label: string }) {
    if (pillDetails.hasBeenSelected) {
      const selectedPillIndex = this.unselectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.unselectedPills.splice(selectedPillIndex, 1);
      this.selectedPills.push(selectedPill);
    } else {
      const selectedPillIndex = this.selectedPills.indexOf(pillDetails.label);
      const [selectedPill] = this.selectedPills.splice(selectedPillIndex, 1);
      this.unselectedPills.push(selectedPill);
    }

    this.selected.emit(this.selectedPills);
  }
}
