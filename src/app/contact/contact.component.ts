import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {

  messageForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    privacyPolicyAgreement: [false, Validators.requiredTrue]
  })

  isSubmitted = false;
  successMessage = '';


  constructor(private fb: FormBuilder) { }

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('sendButton') sendButon!: ElementRef;

  disableFormFields() {
    this.nameField.nativeElement.disabled = true;
    this.emailField.nativeElement.disabled = true;
    this.messageField.nativeElement.disabled = true;
    this.sendButon.nativeElement.disabled = true;
  }

  enableFormFields() {
    this.nameField.nativeElement.disabled = false;
    this.emailField.nativeElement.disabled = false;
    this.messageField.nativeElement.disabled = false;
    this.sendButon.nativeElement.disabled = false;
  }


  async sendMail() {
    this.disableFormFields();

    let fd = new FormData();
    fd.append('name', this.nameField.nativeElement.value);
    fd.append('email', this.emailField.nativeElement.value);
    fd.append('message', this.messageField.nativeElement.value);

    try {
      await fetch('https://formspree.io/f/mpzgevdq', {
        method: 'post',
        body: fd
      });


      this.myForm.nativeElement.reset();
      this.successMessage = 'Your email has been sent successfully!';
      this.hideSuccessMessageAfterDelay();
      this.enableFormFields();

    } catch (error) {
      this.successMessage = 'Your email could not be sent';
      this.hideSuccessMessageAfterDelay();
      this.myForm.nativeElement.reset();
      this.enableFormFields();
    }
  }
  canSendMail() {
    return this.messageForm.invalid;
  }

  hideSuccessMessageAfterDelay() {
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
}