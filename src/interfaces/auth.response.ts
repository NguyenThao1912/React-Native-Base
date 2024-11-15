export interface IAuthReponse {
    jwt: string
    jwtRefresh: string
    req2FA: number
    data?: ILoginUserProfile
    apiVersion: number
    time: number
}

export interface ILoginUserProfile {
    userId: number
    uuid: string
    firstName: string
    lastName: string
    status: number
    modules: IModule[]
    acceptanceNeeded: number
    country: number
    citizenship: number
}

export interface IModule {
    id: string
    days: number
    expires: number
}