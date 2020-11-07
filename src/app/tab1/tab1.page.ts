import { Component, OnInit } from "@angular/core";
import { Observable, Subscriber } from "rxjs";
import { DataService } from "../services/data.service";
import { map, tap } from "rxjs/operators";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  participants: Array<any> = [];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');

    this.dataService.getListActivity(false).subscribe((response) => {
      console.log(response);
      this.dataService
        .getParticipants("5fa6aafdf866ac3e91d12a2c")
        .subscribe((response) => {
          console.log(response);
          response.map((x) => {
            console.log(x.name);
            this.participants.push(x.name);
          });
          console.log(this.participants.length);
        });
    });
  }
}
