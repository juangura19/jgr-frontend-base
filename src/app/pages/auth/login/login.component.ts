import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  hide = true;
  form = new UntypedFormGroup({
    'username': new UntypedFormControl('', [
      Validators.required]),
    'password': new UntypedFormControl('')
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
