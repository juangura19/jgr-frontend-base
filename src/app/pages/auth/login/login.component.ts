import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  hide = true;
  form = new FormGroup({
    'username': new FormControl('', [
      Validators.required]),
    'password': new FormControl('')
  })


  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.formDirective.invalid) {
      return;
    }
    this.router.navigate(['/admin']);
  }

}
