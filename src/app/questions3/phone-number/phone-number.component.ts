import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {
  phoneForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.phoneForm = this.formBuilder.group({
      phoneNumbers: this.formBuilder.array([this.createPhoneControl()])
    });
  }

  get phoneControls(): FormControl[] {
    return (this.phoneForm.get('phoneNumbers') as FormArray).controls as FormControl[];
  }

  createPhoneControl(): FormControl {
    return this.formBuilder.control('');
  }

  addPhone() {
    const phoneNumbersArray = this.phoneForm.get('phoneNumbers') as FormArray;
    phoneNumbersArray.push(this.createPhoneControl());
  }

  removePhone(index: number) {
    const phoneNumbersArray = this.phoneForm.get('phoneNumbers') as FormArray;
    phoneNumbersArray.removeAt(index);
  }

  // submitForm() {
  //   const phoneNumbersArray = (this.phoneForm.get('phoneNumbers') as FormArray)
  //     .controls
  //     .map((phoneControl: AbstractControl) => phoneControl.value)
  //     .filter((phone: string) => phone.trim() !== '')
  //     .map((phone: any, index: number) => ({ [`phoneNumber${index + 1}`]: phone }));
  
  //   console.log(phoneNumbersArray);
  // }
  submitForm() {
    const phoneNumbersArray = this.phoneForm.get('phoneNumbers')?.value
      .filter((phone: string) => phone.trim() !== '')
      .map((phone: string, index: number) => ({ [`phoneNumber${index + 1}`]: phone }));
  
    console.log(phoneNumbersArray);
  }
}
