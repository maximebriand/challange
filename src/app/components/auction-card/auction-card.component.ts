import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TypeOfButton } from 'src/app/app.component';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuctionCardComponent {
  public TypeOfButtonEnum = TypeOfButton;
}
