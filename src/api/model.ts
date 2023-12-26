export type User = {
    id?: number,
    username: string,
    password: string, 
    token?: string, 
    
}

export type AuthState = 
    {mode: 'not signed in' | 'signed in', user: User | undefined} 