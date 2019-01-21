import {Task} from './task';
export  class Project {
  private tasks : Task [] = new Array();

  constructor(tasks : Task[] = new Array()){
    this.tasks = tasks;
  }

  get task():Task[]{
    return this.tasks;
  }
  set task(value: Task[]){
    this.tasks = value;
  }


  public addTask(value : Task){
    this.tasks.push(value);
  }
  public getTask(pos: number):Task{
    return this.tasks[pos];
  }
  public deleteTask(pos:number){
    this.tasks.splice(pos)
  }
  public all(){
    let task : any;
    for(task in this.tasks){
      console.log(this.tasks[task].toString());
    }
  }
  public complete(){
    //let task : any;
    //let other = this.tasks
    
    for(let task in this.tasks){
      if(this.tasks[task].Checked == true){
        console.log(this.tasks[task].toString());
      }
    }
  }
  public uncomplete(){
    //let task : any;
    for(let task in this.tasks){
      if(this.tasks[task].Checked == false){
        console.log(this.tasks[task].toString());
      }
    }
  }
}
