import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  id: any;
  user: any;

  constructor(private _route: ActivatedRoute, 
    private _http: HttpClient) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this._http.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
    .subscribe(result => {
      this.user = result;
      console.log(this.user);
    }, error => {
      console.log(error)
    })
  }

}
