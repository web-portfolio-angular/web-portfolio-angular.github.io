import { CommentReply } from './comment-reply.model';

export class Comment {
  constructor(
    public name: string,
    public email: string,
    public date: firebase.firestore.Timestamp,
    public comment: string,
    public replies?: CommentReply [],
    public id?: string
  ){}
}