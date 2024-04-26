

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
interface PostState {
  list: Post[];
}

  export interface AppState {
    counter: { value: number };
    task: { list: any, current: any };
    post: any
  }
  