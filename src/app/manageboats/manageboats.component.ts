import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BoatManagementService } from '../shared/services/BoatManagement.service';

@Component({
  selector: 'app-manageboats',
  templateUrl: './manageboats.component.html',
  styleUrls: ['./manageboats.component.css']
})
export class ManageboatsComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private service: BoatManagementService) { 
   this.registerForm = fb.group({
    BoatName: [null, Validators.required],
     Image: [null, Validators.required],
     HourlyRate: [null, Validators.required]
   })
  }

  ngOnInit() {
    
  }

  addBoat(){
    const formData: FormData = new FormData();
    formData.append('BoatName', this.registerForm.get('BoatName').value);
    formData.append('HourlyRate', this.registerForm.get('HourlyRate').value);
     formData.append('Image', this.registerForm.get('Image').value, this.registerForm.get('Image').value.name);
    this.service.addNewBoat(formData).subscribe(result => {
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registerForm.get('Image').setValue(file);
    }
  }

  resetForm(){
    this.registerForm.reset();

  }
}
