import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  poc_title = ''
  desc = ''
  link = ''

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

  new_poc_data:any = []
  constructor(private api: BackendService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("click")
    let paylaod = {
      poc_icon: "bi bi-incognito",
      title: this.poc_title,
      desc: this.desc,
      demo_link: this.link,
      team_name: "RA",
      team_member: [
        "Milan", "Anshu", "Santosh", "Utkarsh"
      ],
      team_lead: "Parashar"
    }

    this.new_poc_data = this.poc_data;
    this.new_poc_data.push(paylaod)
    console.log("this.new_poc_data", this.new_poc_data)

    this.api.add_poc(this.new_poc_data).subscribe((r:any) => {
      if(r)
      {
        alert("POC deatils updated successfully.")

        console.log("response", r)
        this.poc_title = ''
        this.desc = ''
        this.link = ''
      }
    })


  }

}
