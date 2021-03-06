import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = 'http://localhost:54653/api/users';

  
  constructor(
    private http: HttpClient
    ) {}
    
    list(): Observable<User[]>{
      return this.http.get(this.baseurl) as Observable<User[]>;
    }
    get(id: number): Observable<User>{
      return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
    }
    create(user: User): Observable<User>{
      return this.http.post(`${this.baseurl}`, user) as Observable<User>;
    }
    change(user: User): Observable<any>{
      return this.http.put(`${this.baseurl}/${user.id}`, user) as Observable<any>;
    }
    remove(user: User): Observable<User>{
      return this.http.delete(`${this.baseurl}/${user.id}`) as Observable<User>;
    }
    login(username: string, password: string): Observable<User>{
      return this.http.get(`${this.baseurl}/login/${username}/${password}`) as Observable<User>;
    }
}
