import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],

})
export class ThirdComponent  {

  constructor() { }

  runChangeDetection() {
    console.log('ThirdComponent - Checking the view');
  }


}
