import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  //Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpYUBnbWFpbC5jb20iLCJleHAiOjQxOTU3MTg1MjJ9.V1h2KNPXUvVKyFP-4TlBMzJo8qdUfvtD1Cp2ocGl_LAo93KdPyxUp9ieM7-6vMLZ_N1ajG4hCL07F9TpRtpCww
  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    this.dataService.getListActivity(false).subscribe((response) => {
      console.log(response);
    });
  }
}
