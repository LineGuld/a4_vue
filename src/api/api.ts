/*http://localhost:9090/login

{
    "username": "admin",
    "password": "secret"
}*/

import { User } from "./model";

let url = 'http://localhost:9090'

export async function signIn(username: string, password: string){
    let _body =  JSON.stringify({username,password})

    const result = await fetch(`http://localhost:9090/login`, {
        method: "POST",
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: _body
      });

    if (result.ok) {
        let authUser = User();
        
        const json = result.json()
            .then((info) =>
                authUser = User(
                    id = info.userId,
                    username = username,
                    password = password,
                    token = info.token
                ));

    return authUser 
    }
    else{
    const {errors} = await result.json()
     const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')  
     return Promise.reject(error) 
    }
}