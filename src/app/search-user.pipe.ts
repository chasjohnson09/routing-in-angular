import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user/user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[], serchCriteria: string): User[] {
    let selectedUsers: User[] = [];
    if(serchCriteria.length == 0){
      return users;
    }
    for(let user of users){
      if(
        user.id.toString().includes(serchCriteria.toLowerCase())
        || user.username.toLowerCase().includes(serchCriteria.toLowerCase())
        || user.firstname.toLowerCase().includes(serchCriteria.toLowerCase())
        || user.lastname.toLowerCase().includes(serchCriteria.toLowerCase())

        || (user.email != null &&
           user.email.toLowerCase().includes(serchCriteria.toLowerCase()))
           
        || (user.phoneNumber != null &&   
           user.phoneNumber.toLowerCase().includes(serchCriteria.toLowerCase()))
      ){
        selectedUsers.push(user);
      }
    }
    return selectedUsers;
  }

}
