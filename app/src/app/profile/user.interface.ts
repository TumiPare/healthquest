import { IChallenge } from "./challenge.interface";
import { ICreature } from "./creature.interface";

export interface IUser {
    username: string;
    profilePicUrl: string;
    dob: string;
    weight: number;
    height: number;
    challenges: IChallenge[];
    creatures: ICreature[];
    friends: string[];
    points: number;
}