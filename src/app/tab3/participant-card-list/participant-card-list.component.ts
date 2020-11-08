import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-participant-card-list",
  templateUrl: "./participant-card-list.component.html",
  styleUrls: ["./participant-card-list.component.scss"],
})
export class ParticipantCardListComponent implements OnInit {
  @Input()
  participants: any[];

  constructor() {}

  ngOnInit() {}
}
