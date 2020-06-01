import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  @ViewChild('div', { static: true }) div: ElementRef


  constructor(private ngZone: NgZone, private renderer: Renderer2, public cd: ChangeDetectorRef) { }


  ngOnInit(): void {

    //  will not trigger change detection
    // this.ngZone.runOutsideAngular(_ => this.changeColor())


    // this.changeColor() // will trigger change detection each 50ms

  }

  private setRandomColor() {
    return ['red', 'orange', 'yellow', 'green', 'blue', 'purple'][Math.random() * 6 | 0];
  }
  private changeColor() {
    setInterval(_ => this.div.nativeElement.style.background = this.setRandomColor(), 50)
  }

  runChangeDetection() {
    console.log('SecondComponent - Checking the view');
  }
  second(){

  }

}
