import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text='app'
  updateValue(e){
    this.text=e.target.value
    console.log(e.target.value)
  }
}
