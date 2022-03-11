import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TACHE_FORM } from 'src/app/models/forms/tache.form';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  id: number;
  tache!: Tache;
  submit: boolean = false;
  loaded: boolean = false;

  updateForm: FormGroup;

  constructor(route: ActivatedRoute, private service: TacheService, private router: Router, builder: FormBuilder) { 
    this.updateForm = builder.group(TACHE_FORM);
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

  onSubmit(){
    if(this.updateForm.valid){
      let tache: Tache = {
        intitule: this.updateForm.value.intitule,
        description: this.updateForm.value.description,
        dateCreation: new Date(),
        deadline: new Date(this.updateForm.value.deadline),
        dateExecution: null,
        priorite: this.updateForm.value.priorite,
        id: this.id
      }

      this.service.updateTache(tache).subscribe(() => this.submit = true);
    }
  }

  onChange(){
    if(this.submit)
      this.submit = false;
  }

  onLoad(){
    this.updateForm.setValue({
      intitule: this.tache.intitule,
      description: this.tache.description,
      deadline: this.tache.deadline,
      priorite: this.tache.priorite
    });

    this.loaded = true;
  }

}
