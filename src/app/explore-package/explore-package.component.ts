import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-explore-package',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './explore-package.component.html',
  styleUrl: './explore-package.component.scss'
})
export class ExplorePackageComponent {
  activeTab: string = 'packages';

  onTabClick(tab: string) {
    this.activeTab = tab;
  }
}
