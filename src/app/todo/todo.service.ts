import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  static readonly API_URL = `http://localhost:3000/todos`;

  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(TodoService.API_URL);
  }

  // get a User (by id)
  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(TodoService.API_URL + `/${id}`);
  }

  // create new User
  addTodo(user: Todo): Observable<Todo> {
    return this.http.post<Todo>(TodoService.API_URL, user);
  }


  patchTodo(id: number, user: Todo): Observable<Todo> {
    return this.http.patch<Todo>(TodoService.API_URL + `/${id}`, user);
  }


  // update a User (by id)
  updateTodo(id: number, user: Todo): Observable<Todo> {
    return this.http.put<Todo>(TodoService.API_URL + `/${id}`, user);
  }

  // delete a User  (by id)
  deleteTodo(id: number): Observable<any> {
    return this.http.delete(TodoService.API_URL + `/${id}`);
  }







}
