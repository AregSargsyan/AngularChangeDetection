import { Component, OnInit, SimpleChanges, DoCheck, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  //  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent  {

  // name="areg";

  constructor() { }

// ngOnInit(): void {
//   console.log('oninit')

// }

   runChangeDetection() {
    console.log('FirstComponent - Checking the view');
  }


}
