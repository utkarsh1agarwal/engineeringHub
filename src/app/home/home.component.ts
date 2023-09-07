import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 

  ngOnInit(): void {
  }

  poc_data = [
    {
      poc_icon: "bi bi-incognito",
      title: "Tweets List",
      desc: "A simple poc see the list of tweets via API, database, jenkins etc",
      demo_link: "",
      team_name: "RA",
      team_member: [
        "Milan", "Anshu", "Santosh", "Utkarsh"
      ],
      team_lead: "Parashar"
    },
    {
      poc_icon: "bi bi-command",
      title: "Jenkin Jobs",
      desc: "A poc automate for the parts of software development related to building, testing, and deploying, facilitating continuous integration and continuous delivery",
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

  constructor(private api: BackendService) { 

    this.api.load_poc().subscribe((r:any) => {
      if(r) {
        this.poc_data = r[0].poc_data
        console.log("rrr",this.poc_data)
      }
    })

    // console.log(JSON.stringify(this.poc_data))
  }


}
