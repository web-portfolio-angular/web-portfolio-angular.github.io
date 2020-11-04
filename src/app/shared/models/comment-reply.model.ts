export class CommentReply {
  constructor(
    public name: string,
    public email: string,
    public date: firebase.firestore.Timestamp,
    public comment: string,
    public id: string,
    public commentId: string,
    public img?: string
  ){}
}