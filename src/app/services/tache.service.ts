import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tache } from '../models/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  private readonly _URL = "http://localhost:3000/taches";

  constructor(private client: HttpClient) { }

  getAllTaches(){
    return this.client.get<Tache[]>(this._URL);
  }

  createTache(toCreate: Tache){
    return this.client.post<Tache>(this._URL, toCreate);
  }
}
