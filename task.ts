import  {Dates} from './date';
import {Priority} from './priority';

export  class Task {
  private content : string;
  private date : Dates;
  private priority : Priority;
  private checked :boolean;
  constructor(content:string, date:Dates, priority : Priority, checked:boolean){
    this.content = content;
    this.date = date;
    this.priority = priority;
    this.checked = checked = false;
  }

  get Content():string{
    return this.content;
  }
  get Date():Dates{
    return this.date;
  }
  get Priority() : Priority{
    return this.priority;
  }
  get Checked():boolean{
    return this.checked;
  }
  set Content(value : string){
    this.content = value;
  }
  set Date(value:Dates){
    this.date = value;
  }
  set Priority(value : Priority){
    this.priority = value;
  }
  set Checked(value : boolean){
    this.checked = value;
  }

  add(content:string, date : Dates,priority:Priority,checked:boolean) : string{
    return content.length.toString();
  }
  update(content: string,date:Dates, priority:Priority,checked?:boolean){
    content?this.content = content:'';
    this.date = date;
    this.priority = priority;
    this.checked = checked;

  }
  close(){
    this.checked = true;
  }
  toString(){
    return "CONTENU :"+this.content+"\nDATE :"+this.date.toString()+"\nPRIORITE :"+ this.priority+"\n"+(this.checked?"EFFECTUE":"NON EFFECTUE");
  }
}
