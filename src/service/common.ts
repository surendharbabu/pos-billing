import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Common {

  constructor(public httpClient: HttpClient){

  }
  local:string = 'http://localhost:4300/'

  categoryUrl: any = 'api/category/v1.0/'

  categoryService = 'category-service'

  getCategorySummary(request: any){
    let url = this.local + this.categoryService + this.categoryUrl + 'summary'
    return this.POSTAPI(request,url)
  }

  createCategory(request: any) {
    let url = this.local + this.categoryService + this.categoryUrl + 'create'
    return this.POSTAPI(request, url)
  }

  getCategory(request: any) {
    let url = this.local + this.categoryService + this.categoryUrl + 'category'
    return this.POSTAPI(request, url)
  }

  view(request: any) {
    let url = this.local + this.categoryService + this.categoryUrl + 'view'
    return this.POSTAPI(request, url)
  }

  getDashboardCount(){
    let url = this.local + this.categoryService + this.categoryUrl + 'dashboard'
    return this.GETAPI(url)
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


