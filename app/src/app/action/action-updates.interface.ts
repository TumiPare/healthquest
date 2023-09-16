import { IUser } from "../profile/user.interface";

export interface IChange {
    title: string;
    body: string;
    points: number;
}

export interface IActionUpdates {
    updatedUser: IUser;
    changes: IChange[];
}