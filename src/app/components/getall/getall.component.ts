import { Component, OnInit } from '@angular/core';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-getall',
  templateUrl: './getall.component.html',
  styleUrls: ['./getall.component.css']
})
export class GetallComponent implements OnInit {

  liste: Tache[] = [];

  constructor(private service: TacheService) { 
    service.getAllTaches().subscribe(taches => this.liste = taches);
  }

  ngOnInit(): void {
  }

}
