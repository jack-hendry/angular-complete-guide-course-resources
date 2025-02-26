import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  // @Input({required: true}) id!: string;
  // @Input({ required: true }) avatar!: string; //will definetly be set
  // @Input({ required: true }) name!: string; //will definetly be set
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  /*  */
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
