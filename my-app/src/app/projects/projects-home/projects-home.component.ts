import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-home',
  templateUrl: './projects-home.component.html',
  styleUrls: ['./projects-home.component.css']
})
export class ProjectsHomeComponent implements OnInit {
  firstName: string = "William";
  lastName: string = "Wallace";
  phoneNumber: string = "(201) 748-6000";
  email: string = "williamwallace@email.com";

  constructor() { }

  ngOnInit(): void {
  }

}
