import { Component, ViewEncapsulation } from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-menu-chips',
  templateUrl: './menu-chips.component.html',
  styleUrls: ['./menu-chips.component.scss'],
  imports: [MatChipsModule],
  standalone: true

})
export class MenuChipsComponent {

}
