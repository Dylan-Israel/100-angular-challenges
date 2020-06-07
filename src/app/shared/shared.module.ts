import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterTermPipe } from '../pipes/filter-term/filter-term.pipe';
import { BannerCutOutComponent } from '../components/banner-cut-out/banner-cut-out.component';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { TabsComponent } from '../components/tabs/tabs.component';
import { SocialMediaBarComponent } from '../components/social-media-bar/social-media-bar.component';

@NgModule({
  declarations: [
    CardComponent,
    FilterTermPipe,
    BannerCutOutComponent,
    SnackbarComponent,
    FooterComponent,
    TabsComponent,
    SocialMediaBarComponent
  ],
  exports: [
    CardComponent,
    FilterTermPipe,
    BannerCutOutComponent,
    SnackbarComponent,
    FooterComponent,
    TabsComponent,
    SocialMediaBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
