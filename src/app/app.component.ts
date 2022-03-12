import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ParseSourceFile } from '@angular/compiler/src/parse_util';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  exform: FormGroup;
  ngOnInit() {
    this.exform = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.required,
      ]),
      check: new FormControl('', Validators.requiredTrue),
    });
  }
  add() {
    console.log(this.exform.value);
    this.exform.reset();
  }
}
