import  {Dates} from './date';
import {Task} from './task';
import {Project} from './Project';
import {Priority} from './priority'

let date = new Dates(1998,2,6);
let priority = Priority.Tiny;
let task = new Task("premier Task",date,priority,false);
let project = new Project(new Array(task));
console.log(project);
console.log(task);
console.log(priority);
console.log(date);
