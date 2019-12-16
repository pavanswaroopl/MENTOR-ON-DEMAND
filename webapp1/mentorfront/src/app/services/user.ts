export interface user{
    id?:number
    userName:string
    firstName:string
    lastName:string
    password:string
    contactNumber:number
    role:string
    resetPassword?:boolean
    resetPasswordDate?:Date
   }