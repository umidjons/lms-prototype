import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/questions-manage`;
  }

  list() {
    return this.http.get(this.url).toPromise();
  }

}
