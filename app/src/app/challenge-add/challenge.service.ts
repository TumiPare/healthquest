import { Injectable } from '@angular/core';
import { ProfileService } from '../profile/profile.service';
import { UserStorage } from '../user/user.storage';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private userStorage: UserStorage, private profileService: ProfileService) { }

  createNewChallenge(name: string, category: string, goal: number, type: string) {
    this.userStorage.user?.challenges.push({
      name: name,
      category: category,
      goal: goal,
      progress: 0,
      type: type,
      dateStarted: new Date().toJSON().slice(0, 10)
    });

    if (this.userStorage.user) {
      this.profileService.saveUser(this.userStorage.user).subscribe((user) => {
        this.userStorage.user = user;
      });
    }
  }
}
