import { Component, OnInit } from '@angular/core';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  listeTaches: Tache[] = [];

  constructor(private service: TacheService) { 
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    this.service.getAllTaches().subscribe(taches => this.listeTaches = taches);
  }

}
