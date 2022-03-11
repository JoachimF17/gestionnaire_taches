import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  tache!: Tache;

  constructor(route: ActivatedRoute, service: TacheService, private router: Router) { 
    const getId = route.snapshot.paramMap.get('id');
    this.id = getId ? parseInt(getId) : -1;

    if(this.id && this.id > 0){
      service.readTache(this.id).subscribe({
        next: (tache) => this.tache = tache,
        error: () => router.navigateByUrl('liste')
      });
    }
  }

  ngOnInit(): void {
  }

  onRetourClick(){
    this.router.navigateByUrl("liste");
  }

}
