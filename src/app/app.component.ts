import { Component } from '@angular/core';

export enum TypeOfButton {
  plain,
  gradientBorder,
  white,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'nft-crypto';
  public TypeOfButtonEnum = TypeOfButton;
  public listOfKeypoints = [
    {
      icon: 'assets/images/loupe-search-svgrepo-com.svg',
      content: 'Trusted with 10 achievements',
    },
    {
      icon: 'assets/images/loupe-search-svgrepo-com.svg',
      content: 'Trusted with 10 achievements',
    },
    {
      icon: 'assets/images/loupe-search-svgrepo-com.svg',
      content: 'Trusted with 10 achievements',
    },
  ];
}
