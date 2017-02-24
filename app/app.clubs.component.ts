import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from './club';
import { ClubService } from './club.service';

@Component({
  selector: 'clubs-app',
  template: `
  <!--angular2-material card and button-->
    <div class="clubs">
      <div *ngFor="let club of clubs" (click)="gotoDetail(club)" style="margin-top: 5px">
        <md-card>
          <md-card-title-group>
              <img md-card-sm-image src={{club.image}}>
              <md-card-title>{{club.name}}</md-card-title>
          </md-card-title-group>
        </md-card>
      </div>
    </div>
  `,
  providers: [ClubService]
})
export class ClubsComponent implements OnInit{
  clubs: Club[];
  constructor(
    private clubService: ClubService,
    private router: Router
  ){}
  getHeroes(): void {
    this.clubs = this.clubService.getClubs();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(club: Club): void {
    this.router.navigate(['/about', club.name]);
  }
}

