import { Component, OnInit, NgZone, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  constructor(private ngzone: NgZone, private renderer: Renderer2, public cd: ChangeDetectorRef) { }
  // @ViewChild('div') div: ElementRef
  // count = 6;

  // ngOnInit(): void {
  //   // setInterval(_=> {
  //   //   this.count+=10;
  //   //   // this.cd.detectChanges()
  //   // }
  //   //   ,500)
  //   this.ngzone.runOutsideAngular(_=>{
  //     setInterval(_=> {
  //       this.count+=10;
  //       // this.cd.detectChanges()
  //     }
  //       ,500)

  //   })
  // }

  runChangeDetection() {
    console.log('SecondComponent - Checking the view');
  }
  second(){

  }

  // randomColor(){
  //   this.ngzone.runOutsideAngular(_ => setInterval(_=> this.this.coloring(),500))

  // }

  // ngAfterViewInit(): void {


  //   this.ngzone.runOutsideAngular(_ => {

  //     setInterval(_=> this.coloring(),500)
  //   })


      // setInterval(_ => this.coloring(), 500)
  // }
  // randomHsl() {
  //   const color = 'hsla(' + (Math.random() * 360) + ', 100%, 50%, 1)';
  //   return color;
  // }
  // coloring() {
  //   this.renderer.setStyle(this.div.nativeElement, "color", this.randomHsl())
  // }

}
