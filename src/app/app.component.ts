import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {   
  constructor(private http: HttpClient){
  }
  title = 'app';

  ngOnInit(): void {
    // GET
  //   this.http.get('http://127.0.0.1:8000/snippets/').subscribe(data => {
  //     console.log(data);
  //   },
  // err=>{
  //   console.log("Error Occured");
  // });
  // POST

  const req = this.http.post('http://127.0.0.1:8000/snippets/', {
    title: 'foo',
    code: 'bar',
    Lineos: true,
    Language:'ABAP',
    style:'abap'
  })
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
