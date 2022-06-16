import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Pet } from './pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sample2';
  name: string = 'hellow';
  species = ['fish', 'cat', 'dog'];
  model = new Pet(1, 'goldie', this.species[1]);
  submit = false;
  clickSubmit = () => {
    this.submit = true;
    alert(JSON.stringify(this.model));
  };
  formNamings = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });
  onSubmit = () => {
    alert(JSON.stringify(this.formNamings.value));
  };
}
