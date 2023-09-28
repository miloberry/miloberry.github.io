import {OwnerEnum} from "./owner.enum";

export class Chore {
  name: string;
  completed: boolean;
  owner: OwnerEnum;
  subchores: Chore[];

  constructor(name: string, owner: OwnerEnum, subchores: Chore[] = [], completed: boolean = false) {
    this.name = name;
    this.owner = owner;
    this.subchores = subchores;
    this.completed = completed;
  }

  isCompleted(): boolean {
    return this.completed &&
      (this.subchores.length === 0 || this.subchores.every((c: Chore) => c.isCompleted()));
  }

  someCompleted(): boolean {
    return (this.subchores.length === 0 && this.completed)
      || this.subchores.some((task: Chore) => task.someCompleted());
  }

  updateCompleted(complete: boolean): void {
    if (this.subchores.length !== 0) {
      this.subchores.forEach((c: Chore) => c.updateCompleted(complete));
    }
    this.completed = complete;
  }
}
