export interface IUserStat {
    category: string,
    value: number
}

export interface IUserStats {
    avgSteps: IUserStat,
    avgWater: IUserStat,
    avgCalories: IUserStat,
    avgSleep: IUserStat
}