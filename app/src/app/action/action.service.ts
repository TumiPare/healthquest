import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAction } from './action.interface';
import { IActionUpdates } from './action-updates.interface';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  apiUrl = "http://healthquest.ddns.net:5000/action"

  constructor(private http: HttpClient) { }

  sendAction(action: IAction) {
    return this.http.post<IActionUpdates>(this.apiUrl, action);
  }

}
