import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Navigation from "components/Navigation";

const SciencePage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const querySnapshot = await db.collection("articles").get();
      setArticles(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };

    fetchArticles();
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="homepage">
        <Navigation />
        <div className="main-content">
          <h1>Статьи</h1>
          {articles.map((article) => (
            <div key={article.id}>
              <h3>{article.title}</h3>
              <a href={article.downloadURL} download>
                Скачать
              </a>
            </div>
          ))}
        </div>
        <footer>
          <p>Многомасштабные модели пониженного порядка 2023</p>
        </footer>
      </div>
    </div>
  );
};

export default SciencePage;
