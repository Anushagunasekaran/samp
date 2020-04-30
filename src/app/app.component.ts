 import { Component } from '@angular/core';

//  @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'angu';
//   todaydate= new Date();




// //json obj pipe

// jsonval={name:"anu",age:"22",address:{village:"arjunapuram"}};
// months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
// name="pipe";
// }



import {Pipe,PipeTransform} from '@angular/core';
@Pipe({
  name:'flr'
})
export class FloorPipe implements PipeTransform{
  transform(value:number):number{
return Math.floor(value);
  }
}