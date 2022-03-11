import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TACHE_FORM } from 'src/app/models/forms/tache.form';
import { Tache } from 'src/app/models/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {

  tacheAjoutee: boolean = false;

  createForm: FormGroup;

  constructor(builder: FormBuilder, private service: TacheService) { 
    this.createForm = builder.group(TACHE_FORM);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    let tache: Tache = {
      intitule: this.createForm.value.intitule,
      description: this.createForm.value.description,
      dateCreation: new Date(),
      deadline: this.createForm.value.deadline,
      priorite: this.createForm.value.priorite
    }

    this.service.createTache(tache).subscribe(() => this.tacheAjoutee = true);
  }

}
