import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TypeOfButton } from 'src/app/app.component';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() typeOfButton: TypeOfButton = TypeOfButton.gradientBorder;
  @Input() buttonContent!: string;
  @Input() size = 'normal';
  public TypeOfButtonEnum = TypeOfButton;
}
