import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // setInterval(console.log,4000)
  }

  runChangeDetection() {
    console.log('B Component - Checking the view');
  }
  b(){

  }
}
