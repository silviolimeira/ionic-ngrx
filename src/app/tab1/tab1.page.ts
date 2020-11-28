import { Component, OnInit } from "@angular/core";
import { from, fromEvent, Observable, Subscriber } from "rxjs";
import { DataService } from "../services/data.service";
import { filter, map, scan, tap } from "rxjs/operators";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  participants: Array<any> = [];

  button1;

  constructor(public dataService: DataService) {}

  numbers: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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

    // fromEvent(document, "click").subscribe(() => {
    //   console.log("clicked !");
    // });
  }

  ngAfterViewInit() {
    this.button1 = document.getElementById("button1");
    this.button1.addEventListener("click", () => {
      from(this.numbers)
        .pipe(
          map((n) => ({ x: n })),
          filter((obj) => obj.x < 7)
          //scan((prev, cur) => prev.concat(cur), [])
        )
        .subscribe((data) => {
          console.log(JSON.stringify(data));
        });

      // let data = this.numbers
      //   .map((n) => {
      //     return { x: n };
      //   })
      //   .filter((obj) => obj.x < 7);
      // console.log(JSON.stringify(data));
    });
  }
}
