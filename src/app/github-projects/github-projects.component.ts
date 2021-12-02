import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-github-projects',
  templateUrl: './github-projects.component.html',
  styleUrls: ['./github-projects.component.scss']
})
export class GithubProjectsComponent implements OnInit {

  user: any;
  repos: any;
  loading = true;


  constructor(private githubService: GithubService) {
    this.githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      this.loadContributorRepos();
    });
  }

  loadContributorRepos() {
    this.githubService.getRepos2().subscribe(contributorRepos => {
      var temp = contributorRepos as any[];
      this.repos.push(temp.find((repo) => repo.name == "CMPG223-POS"));
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
