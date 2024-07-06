export class GroupSchedule {
  constructor(
    public id: number,
    public groupId: number,
    public roomId: number,
    public startTime: Date
  )
  {}
}
