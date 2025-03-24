import { Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-burger-menu',
  imports: [RouterModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  @HostBinding('class.active') isActive = false;

  toggleActive() {
    this.isActive = !this.isActive;
  }

  getImagePath() {
    return this.isActive
      ? './assets/svg/burger-close.svg'
      : './assets/svg/burger-open.svg';
  }

  close() {
    console.log('close');
    this.isActive = false;
  }
}
