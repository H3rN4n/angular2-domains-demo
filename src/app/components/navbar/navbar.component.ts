import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'navbar.component.html'
})
export class NavbarComponent { }
