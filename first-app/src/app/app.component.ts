import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Arman';
  serverName = 'Apollo';
  serverStatus = 'Offline';
  statusFlag = false;

  toggleServerStatus()
  {
    this.statusFlag = !this.statusFlag;

    if(this.statusFlag == true)
    {
      this.serverStatus = 'Online';
    }
    else
    {
      this.serverStatus = 'Offline';
    }

    return this.serverStatus;
  }

  firstName = "";

  emptyCheck()
  {
    if(this.firstName.length == 0)
      return true;
    else
      return false;
  }
  clearName()
  {
    if(this.firstName.length != 0)
    {
      this.firstName = ""
    }
  }

  flag = true;
  toggleFlag()
  {
    this.flag = !this.flag;
    return this.flag;
  }

  getColor()
  {
    if(this.flag == true)
      return 'green';
    else
      return 'red';
  }

  fruits = ["apple","banana","orange"];
  fruitName = ""
  add()
  {
    this.fruits.push(this.fruitName)
  }
}
