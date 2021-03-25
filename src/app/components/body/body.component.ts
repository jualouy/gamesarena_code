import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { GamesArena } from '../../models/gamesarena/games.interface';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  games_data: GamesArena[];
  pageActual: number = 1;
  pages: number = 8;
  search: any = "";
  sortbyad: any = "";
  show_this: boolean = false;

  constructor(private dataSvc: DataService) { }

  ngOnInit() {
   this.dataSvc.getAllGames().subscribe(data => this.games_data = data);   
  }
  
  valuePageSearch(): void {

   if(this.search.length >= 2){
      this.show_this = true;
   }

   if(this.search===''){
      this.init_values();
   }
  }

  refresh(): void {
    this.pageActual = 1;
    this.pages = 8;
    this.search = "";
    this.sortbyad = "";
    this.show_this = false;
    this.games_data = [];
    this.dataSvc.getAllGames().subscribe(data => this.games_data = data);
  }

  activateClassT(item): void {
    item.active = true;    
  }

  activateClassF(item): void {
    item.active = false;    
  }
  
  init_values(): void {
    this.pageActual = 1;
    this.pages = 8;
    this.search = "";
    this.sortbyad = "";
    this.show_this = false;
  }

  sortad(sortby): void {
    
    if(sortby==='ASC'){
      this.sortbyad = 'ASC';
    }

    if(sortby==='DESC'){
      this.sortbyad = 'DESC'; 
    }

  }

}
