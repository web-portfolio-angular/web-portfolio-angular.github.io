export class Comment {
  name: string;
  email: string;
  date: firebase.firestore.Timestamp;
  comment: string;
  replies?: CommentReply [];
  id?: string;
}

export class CommentReply {
  name: string;
  email: string;
  date: firebase.firestore.Timestamp;
  comment: string;
  id: string;
  commentId: string;
}