import { user } from './user';
import { mentor } from './mentor';
import { skill } from './skill';


export interface Training{
    id:number;
    user:user;
    mentor:mentor;
    skill:skill;
    status:string;
	progress:number;
	rating:number;
	startDate:Date;
	endDate:Date;
}