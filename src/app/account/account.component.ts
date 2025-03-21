import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { GeneralComponent } from "./general/general.component";
import { RewardsComponent } from "./rewards/rewards.component";
import { SavedContactsComponent } from "./saved-contacts/saved-contacts.component";
import { PreferencesComponent } from "./preferences/preferences.component";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [HeaderComponent, GeneralComponent, RewardsComponent, SavedContactsComponent, PreferencesComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountComponent {

}