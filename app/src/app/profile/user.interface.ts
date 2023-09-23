import { IChallenge } from "../user/challenge.interface";
import { ICreature } from "../user/creature.interface";

export interface IUser {
    username: string;
    password: string;
    profilePicUrl: string;
    dob: string;
    weight: number;
    height: number;
    challenges: IChallenge[];
    creatures: ICreature[];
    friends: string[];
    points: number;
}