import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(public httpClient: HttpClient){

  }
  local:string = 'http://localhost:4300/'

  userUrl: any = '/api/users/v1.0/'
  commonUrl: any = '/api/common/v1.0/'

  userService = 'pos-service'

  getUserSummary(request: any){
    let url = this.local + this.userService + this.userUrl + 'summary'
    return this.POSTAPI(request,url)
  }

  createUser(request: any) {
    let url = this.local + this.userService + this.userUrl + 'create'
    return this.POSTAPI(request, url)
  }
  updateUser(request: any) {
    let url = this.local + this.userService + this.userUrl + 'update'
    return this.POSTAPI(request, url)
  }

  deleteUser(request: any) {
    let url = this.local + this.userService + this.userUrl + 'delete'
    return this.POSTAPI(request, url)
  }

  getUsers(request: any) {
    let url = this.local + this.userService + this.userUrl + 'category'
    return this.POSTAPI(request, url)
  }

  view(request: any) {
    let url = this.local + this.userService + this.userUrl + 'view'
    return this.POSTAPI(request, url)
  }

  getDashboardCount(){
    let url = this.local + this.userService + this.userUrl + 'count'
    return this.GETAPI(url)
  }
  getLookup(request: any) {
    let url = this.local + this.userService + this.commonUrl + 'lookup'
    return this.POSTAPI(request, url)
  }


  GETAPI(url: any): Observable<any> {
    return this.httpClient.get<any>(url);
  }

   POSTAPI(pdata:any, url: any): Observable<any> {
    let request: any = {
      requestMessage: {
         body: {
          ...pdata
         }
      }
    }
    return this.httpClient.post<any>(url, request);
  }
}


