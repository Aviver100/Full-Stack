import { status } from '../modules/TaskStatus'

export interface task {
    id: string,
    title: string,
    description: string,
    status: status
}