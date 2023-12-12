import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { js_service } from '../../js_service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';
  number: string = '';
  password: string = '';
  interPercentage: number = 0; // Example numeric value
  tenthPercentage: number = 0; // Example numeric value
  graduationPercentage: number = 0;
  state: string = '';
  city: string = '';
  zipCode: string = '';
  interestedFields: string = '';
  skills: string = '';
  hobbies: string = '';
  isRegisteredIn: boolean = false;

  constructor(private router: Router, private jobSeekerService: js_service) {}

  onSubmit() {
    const jobSeekerData = {
      name: this.name,
      email: this.email,
      number: this.number,
      password: this.password,
      interPercentage: this.interPercentage,
      tenthPercentage: this.tenthPercentage,
      graduationPercentage: this.graduationPercentage,
      state: this.state,
      city: this.city,
      zipCode: this.zipCode,
      interestedFields: this.interestedFields,
      skills: this.skills,
      hobbies: this.hobbies,
    };

    this.jobSeekerService.jobseekerReg(jobSeekerData).subscribe(
      (response) => {
        // Assuming successful registration
        this.isRegisteredIn = true;
        console.log('Registration successful:', response);
      },
      (error) => {
        // Handle error if needed
        console.error('Registration error:', error);
      }
    );
  }
  redirectToAnotherPage() {
    // Your navigation logic to redirect to another page
    this.router.navigate(['/login']);
  }
}
