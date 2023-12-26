/*http://localhost:9090/login

{
    "username": "admin",
    "password": "secret"
}*/

import type { User } from "./model";

let url = 'http://localhost:9090'

export async function signIn(username: string, password: string) {
    let _body = JSON.stringify({ username, password })

    const result = await fetch(`http://localhost:9090/login`, {
        method: "POST",
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: _body
    });

    if (result.ok) {

        let _token;
        let _id;

        result.json()
            .then((info) => {
                _token = info.token
                _id = info.userId
                console.log(info.token)
                console.log(info.userId)

                let authUser = {
                    id: _id,
                    username: username,
                    password: password,
                    token: _token
                }
                return authUser
            }
        )
    }
    else {
        const { errors } = await result.json()
        const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
        return Promise.reject(error)
    }
}