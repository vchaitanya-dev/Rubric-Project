export interface Twubric {
     total: number
     friends: number
     influence: number
     chirpiness: number
   }
   

export interface user {
     uid: number
     username: string
     image: string
     fullname: string
     twubric: Twubric
     join_date: number
   }
   
   