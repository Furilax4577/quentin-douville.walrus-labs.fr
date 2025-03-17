import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  imports: [],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  @HostBinding('class.active') isActive = true;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  getImagePath() {
    return this.isActive
      ? './assets/svg/burger-close.svg'
      : './assets/svg/burger-open.svg';
  }
}
