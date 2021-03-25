import { Injectable } from '@angular/core';
import { GamesArena } from '../../models/gamesarena/games.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private urlApi = 'https://api.jsonbin.io/b/605ab21dc197e473302de0ca/1';

  constructor(private http: HttpClient) { }

  getAllGames():Observable<GamesArena[]>{
    return this.http.get<GamesArena[]>(this.urlApi);
  }

}
