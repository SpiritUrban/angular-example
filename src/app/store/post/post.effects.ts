
import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostService } from './post.service'; // Импортируйте ваш сервис
import { PostActions } from './post.actions';


@Injectable()
export class PostEffects {


  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.loadPosts), // Действие для начала загрузки постов
    mergeMap(() => this.postService.getPosts() // Используйте ваш сервис для получения постов
      .pipe(
        map(posts => PostActions.loadPostsSuccess({ posts })), // В случае успеха отправьте действие успеха
        catchError(() => EMPTY) // В случае ошибки можно вернуть EMPTY или отправить действие ошибки
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private postService: PostService // Внедрите ваш сервис
  ) {}

}


 

