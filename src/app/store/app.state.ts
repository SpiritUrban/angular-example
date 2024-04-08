// interface UserState {
//     userData: UserData;
//     isLoading: boolean;
//     error: Error | null;
//   }
  
//   interface UIState {
//     sidebarOpen: boolean;
//   }

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }
interface PostState {
  list: Post[];
}
  
  // Глобальное состояние приложения
  export interface AppState {
    // user: UserState;
    // ui: UIState;
    counter: { value: number };
    task: { list: any };
    post: any
  }
  