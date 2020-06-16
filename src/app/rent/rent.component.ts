import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BoatManagementService } from '../shared/services/BoatManagement.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  rentForm: FormGroup;
  constructor(private fb: FormBuilder, private service: BoatManagementService) { 
    this.rentForm = fb.group({
      CustomerName: [null, Validators.required],
       BoatId: [null, Validators.required],
     })
  }
  

  ngOnInit() {
  }

}
