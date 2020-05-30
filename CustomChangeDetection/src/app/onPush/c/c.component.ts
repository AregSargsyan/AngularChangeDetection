import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  runChangeDetection() {
    console.log('C Component - Checking the view');
  }
}
