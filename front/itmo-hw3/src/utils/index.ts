import { requestInstance } from '../api/index';

// submit comment
export interface IComment {
  author: string;
  comment: string;
}
export async function submitComment(comment: IComment) {
  const res = await requestInstance.post({
    url: '/addComment',
    headers: {
      'Content-Type': 'application/json',
    },
    data: comment,
  });
  return res;
}

// request comments
export async function fetchComments() {
  const res: IComment[] = await requestInstance.get({
    url: '/allComments',
  });
  return res;
}
