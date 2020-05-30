import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  open = false;

  // ngDoCheck(): void {
    // console.log('docheck in  AppComponent  ' )
  // }

   runChangeDetection() {
    console.log('AppComponent - Checking the view');
  }



}
