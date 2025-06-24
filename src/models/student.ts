
export default class Student {
  id : number;
  name : string;
  age : number;
  details: string;

  constructor(
    id:number,
    name:string,
    age:number,
    details:string
  ){
    this.id=id;
    this.name=name;
    this.age=age;
    this.details=details;
  }
}

