import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {

    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.form.get('username').value === 'admin' && this.form.get('password').value === 'admin') {
      this.router.navigate(['./dashboard']);
    } else {
      alert('Invalid credentials');
      this.clearFields();
    }
  }
  clearFields(): void {
    this.form.patchValue({
      username: '',
      password: ''
    });
  }


}
