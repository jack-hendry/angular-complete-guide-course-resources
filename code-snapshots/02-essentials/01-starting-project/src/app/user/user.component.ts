import { Component, Input} from '@angular/core';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input() avatar!: string; //will definetly be set 
  @Input() name!: string; //will definetly be set 

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {

  }
}
