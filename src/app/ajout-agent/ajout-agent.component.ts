import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl, NgForm } from '@angular/forms';
import { Profil } from '../profil';
import { ProfilServiceService } from '../profil-service.service';
import { Agent } from '../agent';
import { AgentService } from '../agent.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';



@Component({
  selector: 'app-ajout-agent',
  templateUrl: './ajout-agent.component.html',
  styleUrls: ['./ajout-agent.component.css']
})
export class AjoutAgentComponent implements OnInit {


 
  errText: string;
  agentForm: FormGroup;
  profilSelected: Profil;
  erreur: boolean;
  messageErreur: String;

  // tslint:disable-next-line:max-line-length
  constructor(private formBuilder: FormBuilder,
               private profilService: ProfilServiceService,
               private agentService: AgentService, 
               public snackBar: MatSnackBar,
               private router: Router) {
   }

   onSubmit() {
    const formValue = this.agentForm.value;
    const newAgent = new Agent(
      formValue['nom'],
      formValue['prenom'],
      formValue['adresse'],
      formValue['ville'],
      formValue['email'],
      formValue['mdp'],
      this.profilSelected
    );
    console.log(newAgent);
    this.agentService.createAgent(newAgent).subscribe(
      () => {
        this.openSnackBar('Agent crée','succes'),
        this.router.navigateByUrl('/index/gestion/agents');

      },
      err => { console.log('coucou ' + JSON.stringify(err.error.message); this.openSnackBar('Error',err.error.message);}
   // this.router.navigate(['agents']);
    );
   }

   onChange() {
     console.log('coco : ' + this.agentForm.value['profil']);
    this.profilService.getProfil(this.agentForm.value['profil']).subscribe( pro => this.profilSelected = pro
      , err => this.errText = 'la requete a echoué' );
   }

  ngOnInit() {
    this.initForm();

  }

  initForm() {
    this.agentForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: '',
      ville: '',
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', Validators.required],
      confMdp: ['', Validators.required],
      profil: ''

    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
