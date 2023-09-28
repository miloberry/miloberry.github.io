import {Component, Input} from '@angular/core';
import {Chore} from "../../models/chore";

@Component({
  selector: 'app-chore-list',
  templateUrl: './chore-list.component.html',
  styleUrls: ['./chore-list.component.css']
})
export class ChoreListComponent {
  @Input() choreList: Chore[] = [];

  updateCompletedSubchore(parent: Chore, chore: Chore, isCompleted: boolean) {
    chore.updateCompleted(isCompleted);
    parent.completed = parent.subchores.every((c: Chore) => c.isCompleted());
  }


}
