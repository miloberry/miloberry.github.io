import {Component, OnInit} from '@angular/core';
import {OwnerEnum} from "../models/owner.enum";
import {Chore} from "../models/chore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  startDate: Date = new Date('2023-09-25T00:00:00Z');
  today: Date = new Date(`${new Date().toISOString().substring(0, 10)}T00:00:00Z`);

  allChores: Chore[] = [
    new Chore('bathroom', OwnerEnum.Milo),
    new Chore('trash', OwnerEnum.Milo, [
      new Chore('test 2', OwnerEnum.Milo),
      new Chore('test', OwnerEnum.Milo)
    ])
  ];

  currentUser: OwnerEnum = OwnerEnum.Milo;

  get ChoresForCurrentUser(): Chore[] {
    return this.allChores.filter((c: Chore) => c.owner === this.currentUser);
  }

  get IncompleteChoresForCurrentUser(): Chore[] {
    return this.allChores.filter((c: Chore) => c.owner === this.currentUser && !c.isCompleted());
  }

  ngOnInit(): void {
    const days = (this.today.getTime() - this.startDate.getTime()) / (1000 * 3600 * 24);
    if (days % 14 === 0) {
      this.allChores.forEach((c: Chore) => {
        switch (c.owner) {
          case OwnerEnum.Maria:
            c.owner = OwnerEnum.Milo;
            break;
          case OwnerEnum.Milo:
            c.owner = OwnerEnum.Maria;
            break;
        }
      })
    }
  }
}
