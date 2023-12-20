export interface IUserStat {
    category: string,
    value: number
}

export interface IUserStats {
    steps: IUserStat,
    water: IUserStat,
    calories: IUserStat,
    sleep: IUserStat
}