import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { ButtonComponent } from './shared/button/button.component';
import { AuctionCardComponent } from './components/auction-card/auction-card.component';
import { KeyPointsComponent } from './components/key-points/key-points.component';
import { ListKeyNumberComponent } from './components/list-key-number/list-key-number.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    ListKeyNumberComponent,
    AuctionCardComponent,
    KeyPointsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
