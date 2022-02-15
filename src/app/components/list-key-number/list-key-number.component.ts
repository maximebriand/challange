import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-key-number',
  templateUrl: './list-key-number.component.html',
  styleUrls: ['./list-key-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListKeyNumberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
