import { user } from './user';

export interface mentor{
    id:number;
    linkedinUrl:string;
    yearsOfExperience:number;
    timeslot:string;
    user?:user;
}