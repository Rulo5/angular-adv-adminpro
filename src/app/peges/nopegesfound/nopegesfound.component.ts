import { Component } from '@angular/core';

@Component({
  selector: 'app-nopegesfound',
  templateUrl: './nopegesfound.component.html',
  styleUrls: [  './nopeges.component.css']
})
export class NopegesfoundComponent {

  year = new Date().getFullYear();

}
