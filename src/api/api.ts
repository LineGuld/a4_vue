/*http://localhost:9090/login

{
    "username": "admin",
    "password": "secret"
}*/

import { User } from "./model";

let url = 'http://localhost:9090'

export async function signIn(username: string, password: string){
   
    let authUser = {
        id:0,
        username: username,
        password: password,
        token: null
    };

    let _body =  JSON.stringify({username,password})

    const result = await fetch(`http://localhost:9090/login`, {
        method: "POST",
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: _body
      });


    
    if(result.ok)
    {
    const json = result.json()
    
    console.log(json)

    return authUser 
    }
    else{
    const {errors} = await result.json()
     const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')  
     return Promise.reject(error) 
    }
}