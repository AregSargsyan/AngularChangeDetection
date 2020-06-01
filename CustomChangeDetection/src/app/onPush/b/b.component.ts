import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ApplicationRef, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, timer, Subject } from 'rxjs';
import { map, tap, take, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BComponent implements OnInit {

  user: Observable<any>;



  constructor(private cd: ChangeDetectorRef, private ar: ApplicationRef, private ng: NgZone, private http: HttpClient) { }

  ngOnInit(): void {

    // this will trigger change detection in all components, except "C"
    this.user = this.http.get('https://randomuser.me/api/').
      pipe(map((res: any) => res.results[0].picture.medium))

  }

  runChangeDetection() {
    console.log('B Component - Checking the view');
  }

  doNothing() {
    //this function du nothing, but anyway change detection is triggered
  }
}
