import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  participants$: Observable<any[]>;

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');

    // TODO: get activity from url
    const activities$ = this.dataService
      .getActivity("5fa6aafdf866ac3e91d12a2c")
      .pipe(
        // TODO: sorting and create and other observable to filter name for example
        map((activities) => activities),
        shareReplay()
      );

    this.participants$ = activities$.pipe(
      map((res) => {
        return this.extractData(res);
      })
    );
  }

  private extractData(res) {
    console.log("extractData: ", res["participants"]);
    return res["participants"];
  }
}
