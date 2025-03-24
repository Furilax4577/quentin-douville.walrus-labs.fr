import { Component } from '@angular/core';
import { EnterpriseComponent } from '../enterprise/enterprise.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-they-trust-me',
  imports: [EnterpriseComponent, RouterModule],
  templateUrl: './they-trust-me.component.html',
  styleUrl: './they-trust-me.component.scss',
})
export class TheyTrustMeComponent {}
