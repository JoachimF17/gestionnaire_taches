import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-getall-item',
  templateUrl: './getall-item.component.html',
  styleUrls: ['./getall-item.component.css']
})
export class GetallItemComponent implements OnInit {

  terminee: boolean = false;

  @Input('item')
  tache!: Tache;

  @Output('suppr')
  emitter = new EventEmitter();

  constructor(private router: Router, private service: TacheService) { }

  ngOnInit(): void {
    if(this.tache && this.tache.dateExecution)
      this.terminee = true;
  }

  onDetailsClick(){
    this.router.navigate(["tache", this.tache.id]);
  }

  onModifierClick(){
    this.router.navigate(["modifier", this.tache.id]);
  }

  onAnnulerClick(){
    this.service.deleteTache(<number>this.tache.id).subscribe();
    this.emitter.emit();
  }

  onTacheTermineeClick(){
    this.tache.dateExecution = new Date();
    this.service.updateTache(this.tache).subscribe(() => this.terminee = true);
  }


}
