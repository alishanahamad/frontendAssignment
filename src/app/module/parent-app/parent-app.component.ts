import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserListService } from 'src/app/services/user-list.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-parent-app',
  templateUrl: './parent-app.component.html',
  styleUrls: ['./parent-app.component.scss']
})
export class ParentAppComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;
  error: string;
  constructor(private formBuilder: FormBuilder,
              private userListService: UserListService,
              private utilService: UtilService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      contact: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.saveUserDetail(this.registerForm.value);
    this.registerForm.reset();
    this.submitted = false;
  }

  saveUserDetail(userDetail) {
    const requestBody = {
      name: userDetail.name,
      email: userDetail.email,
      password: userDetail.password,
      contact: userDetail.contact
    };
    this.userListService.addUserDetail(requestBody)
      .then(response => {
          this.utilService.addUserDetail.next(userDetail);
          alert(`Successfully user added`);
      })
      .catch(err => console.log(err));
  }

  get f() { return this.registerForm.controls; }

  resetForm() {
    this.registerForm.reset();
  }

}
