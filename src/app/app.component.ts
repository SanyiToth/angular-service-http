import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo/todo.service';
import {Todo} from './todo/todo.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'http-client-demo';

  constructor(private todoService: TodoService) {
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.todoService.getTodos().subscribe(todos => {
      console.log('getTodos(): ', todos);
    });

    this.todoService.getTodo(200).subscribe(todoItem => {
      console.log('getTodo(200)', todoItem);
    });


    // add Todo
    const newTodo = {name: 'Son Goku'} as Todo;
    this.todoService.addTodo(newTodo).subscribe(todoItem => {
      console.log('addTodo(newTodo)', todoItem);
    });


    // modify with PATCH Todo with id:10
    const newTodo2 = {username: 'shark'} as Todo;
    this.todoService.patchTodo(9, newTodo2)
      .subscribe(todoItem => {
        console.log('.patchTod(newTodo2)', todoItem);
      });


    // modify with PUT Todo with id:10
    const todo = {name: 'Jimi HEndrix'} as Todo;
    this.todoService.updateTodo(10, todo)
      .subscribe((todoItem) => {
        console.log('updateTodo(todo)', todoItem);
      });


    // delete
    this.todoService.deleteTodo(3).subscribe(todoItem => {
      console.log('deleteTodo(3)', todoItem);
    });


  }
}
