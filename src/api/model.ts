export interface User {
    id: number,
    username: string,
    password: string, 
    token: string, 
}

export type AuthState = 
    {mode: 'not signed in' | 'signed in', user: User | undefined} 

/*export type Model = {
    all(): Model
}

export const createModel = (users: User[]): Model => {
    const all: () => Model = () => createModel(users)
    return {all }
}
*/
