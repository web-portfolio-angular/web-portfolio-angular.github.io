import { Reply } from './reply.model';

export class Comment{
  constructor(
    public name: string,
    public date: string,
    public comment: string,
    public replies?: Reply [],
    public id?: string
  ){}
}