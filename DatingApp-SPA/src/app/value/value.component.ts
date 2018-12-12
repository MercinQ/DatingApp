import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
@Injectable()
export class ValueComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() { // odpala sie przy inicializacji
    this.getValues();
  }
  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error);
    });
  }


}
