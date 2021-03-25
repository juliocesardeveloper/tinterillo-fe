import { db } from "../firebase/firebaseConfig"



export const loadArticles = async ( uid ) => {

  const articlesSnap = await db.collection(`${ uid }/selectedArticles/articles`).get();
  const articles = [];

  articlesSnap.forEach( snapHijo => {
    articles.push({
      id: snapHijo.id,
      ...snapHijo.data()
    })
  });

  console.log(articles);

  return articles;

}