import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cnadicompo',
  templateUrl: './cnadicompo.component.html',
  styleUrls: ['./cnadicompo.component.css']
})
export class CnadicompoComponent {

  constructor(private http:HttpClient){
    this.getallcandi();
    this.getfliter();
  }


  candidateArray :any []=[]
  filterObject: any ={
    "Name": "",
    "ContactNo": "",
    "Email": "",
    "PageNumber": 1,
    "PageSize": 1
  }
  
  getallcandi(){
    this.http.get("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllCandidates").subscribe((res:any)=>{
      this.candidateArray = res.data
    })
  }
  getfliter(){
    this.http.post("http://onlinetestapi.gerasim.in/api/OnlineTest/GetCandidatesByFilter", this.filterObject).subscribe((res:any)=>{
      this.candidateArray = res.data
    })
  }

  onprevious(){
    this.filterObject.PageNumber --;
    this.getfliter();
  }

  onnext(){
    this.filterObject.PageNumber ++;
    this.getfliter();

  }

}
