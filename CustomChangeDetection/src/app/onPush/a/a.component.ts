import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  runChangeDetection() {
    console.log('A Component - Checking the view');
  }

}
