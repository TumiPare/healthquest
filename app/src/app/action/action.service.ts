import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAction } from './action.interface';
import { IActionUpdates } from './action-updates.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  apiUrl = environment.apiUrlLink + "/action"

  constructor(private http: HttpClient) { }

  sendAction(action: IAction) {
    return this.http.post<IActionUpdates>(this.apiUrl, action);
  }

}
