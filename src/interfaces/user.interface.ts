import IEvent from './event.interface'

export default interface IUser {
    name: string
    avatarUrl: string
    events: IEvent[]
}
