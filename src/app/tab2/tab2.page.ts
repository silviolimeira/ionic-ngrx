import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { map, tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { resolve } from "path";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  // TODO: https://www.youtube.com/watch?v=T9VHfMRmKig

  participants: Array<any> = [];

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');

    this.getParticipants().subscribe((res) => {
      console.log("Response: ", res);
      this.participants = res;
    });
  }

  getParticipants(): Observable<any> {
    return this.dataService.getListActivity(false).pipe(
      tap((res) => {
        this.logResponse(res);
      }),
      map((res) => {
        return this.extractData(res);
      })
    );
  }

  private logResponse(res: Response) {
    console.log("logResponse: ", res.body);
    return res;
  }

  private extractData(res: Response) {
    // pick the three activity form the list for test only - hardcoded
    console.log("extract data: ", res);

    //return of(res.content[3].participants);
    return res.content[3].participants;
  }
}
