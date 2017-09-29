import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.';
  serverName = '';
  serverCreated = false;
  servers:Array<string> = ['TestServer 1', 'TestServer 2']
  username: string = '';
  inputNotEmpty: boolean = false;
  showParagraph: boolean = true;
  btnDisplayClicks: Array<any> = [];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log(this.allowNewServer);
    }, 2000);
   }

  ngOnInit() {
    console.log(this.allowNewServer);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;   
  }

  inputCheck() {
    return (this.username != '') ? false : true;
  }

  btnClick() {
    this.showParagraph = !this.showParagraph;
    // this.btnDisplayClicks.push(this.btnDisplayClicks.length+1);  
    this.btnDisplayClicks.push(new Date());  
  }

}
