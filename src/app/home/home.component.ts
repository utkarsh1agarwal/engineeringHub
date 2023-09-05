import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  poc_data = [
    {
      poc_icon: "bi bi-buildings",
      title: "CRUD Operations",
      desc: "A simple poc to perform the crud operation using jenkins angular, databse etc",
      demo_link: "",
      team_name: "EGAAA_RA",
      team_member: [
        "A", "B", "C", "D"
      ],
      team_lead: "ABC"
    },
    {
      poc_icon: "bi bi-command",
      title: "CRUD Operations",
      desc: "A simple poc to perform the crud operation using jenkins angular, databse etc",
      demo_link: "",
      team_name: "2",
      team_member: [
        "A", "B", "C", "D"
      ],
      team_lead: "ABC"
    },
    {
      poc_icon: "bi bi-graph-up-arrow",
      title: "CRUD Operations",
      desc: "A simple poc to perform the crud operation using jenkins angular, databse etc",
      demo_link: "",
      team_name: "3",
      team_member: [
        "A", "B", "C", "D"
      ],
      team_lead: "ABC"
    }
  ]

  onclick() {
    alert("111")
    console.log("1111")
  }

}
