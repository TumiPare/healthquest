import { IChallenge } from "../user/challenge.interface";
import { ICreature } from "../user/creature.interface";

export interface IUser {
    username: string;
    email: string;
    password: string;
    gender: string;
    profilePicUrl: string;
    dob: string;
    weight: number;
    height: number;
    nationality: string;
    challenges: IChallenge[];
    creatures: ICreature[];
    friends: string[];
    points: number;
}