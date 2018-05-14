import { Component } from '@angular/core';
import { item } from './item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
    
    title : string = 'Goodville Angular CLI 6.0.1 ToDo List'; //title to be used in header
    todoAdd : string = null; //placeholder for ngmodel input
    testItem : item = new item('Write an Angular 4+ ToDo List', false); //test item 
    items: item[] = [this.testItem]; //array of items
    
    removeItem(index: number) {
        this.items.splice(index, 1); //splice a single item from array starting at defined index
    }
    
    addItem() {
        if (this.checkItems(this.todoAdd)) {
            this.items.push(new item(this.todoAdd, false)); //add new item to end of array
        } else {
            alert("Task already exists!");
        }
        
        this.todoAdd = null; //clear input via two way binding
    }
    
    checkItem(index: number) {
        this.items[index].itemDone = !this.items[index].itemDone; //toggles boolean regardless of value
    }
    
    checkItems(checkDesc : string) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].itemDesc == checkDesc) {
                return false; //item already exists
            }
        }
        
        return true;
    }
}
