import { TestBed, async, inject } from '@angular/core/testing';
import {Todo} from './todo';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should be created', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([TodoDataService],
    (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }))

    it('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      //Create some Todos
      let todo1 = new Todo({ title: 'My first todo'});
      let todo2 = new Todo({ title: 'My second todo'});
      //Add todos
      service.addTodo(todo1);
      service.addTodo(todo2);
      //Get todos
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }))

  }) //END describe #getAllTodos()

  describe('#addTodo(todo)', () => {
    it('should automatically increment and id', inject([TodoDataService], (service: TodoDataService) => {
      //Create some Todos
      let todo1 = new Todo({title:'First todo'});
      let todo2 = new Todo({title:'Second todo'});
      //Add todos
      service.addTodo(todo1);
      service.addTodo(todo2);
      //Check the ids
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }))
  }) //END describe #addTodo(todo)

  describe('#deleteTodoById(id)', () => {
    it('should remove the correct todo using corresponding id', inject([TodoDataService], (service: TodoDataService) => {
      //Create some Todos
      let todo1 = new Todo({title:'first todo'});
      let todo2 = new Todo({title:'second todo'});
      //Add todos
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1,todo2]);
      //Delete todo
      service.deleteTodoById(1)
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }))

    it('should not remove anything if no id is found', inject([TodoDataService], (service: TodoDataService) => {
      //Create some Todos
      let todo1 = new Todo({title:'first todo'});
      let todo2 = new Todo({title:'second todo'});
      //Add todos
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1,todo2]);
      //Try to delete a non existent todo
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1,todo2]);
    }))

  }) //END describe #deleteTodoById(id)

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with updated details', inject([TodoDataService], (service: TodoDataService) => {
      //Create new Todo
      let todo1 = new Todo({title: 'first todo'});
      //Add todo
      service.addTodo(todo1);
      expect(service.getAllTodos()).toEqual([todo1]);
      let updatedTodo = service.updateTodoById(1, {title:'Updated todo'});
      expect(service.getTodoById(1)).toEqual(updatedTodo);
    }))

    it('should return null if the todo doesnt exist', inject([TodoDataService], (service: TodoDataService) => {

      //Create some todos
      let todo1 = new Todo({title:'first todo'});
      //Add todos
      service.addTodo(todo1);
      expect(service.getAllTodos()).toEqual([todo1]);
      let updatedTodo = service.updateTodoById(2, {title:'Updated todo'});
      //Make sure your can't Delete a non-exisitant todo
      expect(service.updateTodoById(2)).toEqual(null);

    }))

  }) //END describe #updateTodoById(id, values)

  describe('#toggleTodoComplete(todo)', () => {

    it('should toggle the status of the todo', inject([TodoDataService], (service: TodoDataService) => {

      //Create todo
      let todo1 = new Todo({title:'first todo'});
      //Add todo
      service.addTodo(todo1);
      expect(todo1.complete).toEqual(false);
      //Mark as complete
      service.toggleTodoComplete(todo1);
      expect(todo1.complete).toEqual(true);
    }))

  }) //END describe #toggleTodoComplete(todo)

});
