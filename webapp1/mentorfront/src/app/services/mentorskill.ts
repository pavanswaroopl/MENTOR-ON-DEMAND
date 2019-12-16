import { mentor } from './mentor';

import { skill } from './skill';

export interface Mentor_Skill{
    mentor:mentor;
    skill:skill;
    selfRating:number;
    yearsOfExperience:number;
}