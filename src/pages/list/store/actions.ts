import { IArticle, ArticleAction, ADD_ARTICLE, REMOVE_ARTICLE, DispatchType } from "./types"

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: ADD_ARTICLE,
    article,
  }

  return simulateHttpRequest(action)
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: REMOVE_ARTICLE,
    article,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ArticleAction) {
  //http request to server
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action) //这里执行后，会触发reducer函数执行
    }, 500)
  }
}