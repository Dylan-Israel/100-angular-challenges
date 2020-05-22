import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Input() public tabs: { title: string, active: boolean }[] = [];
  @Output() public selectedTabIndex = new EventEmitter<number>();

  public selectTab(selectedTab: { title: string, active: boolean }, index: number) {
    this.tabs.forEach(tab => {
      tab.active = selectedTab === tab;
    });
    this.selectedTabIndex.emit(index);
  }

}
