import { articles } from '../models/data.js';

let articleList = [...articles];

export const getAllArticles = (req, res) => {
  res.json(articleList);
};

export const getArticleById = (req, res) => {
  const article = articleList.find(a => a.id === parseInt(req.params.id));
  if (!article) return res.status(404).json({ message: "Article not found" });
  res.json(article);
};

export const createArticle = (req, res) => {
  const newArticle = {
    id: articleList.length + 1,
    ...req.body
  };
  articleList.push(newArticle);
  res.status(201).json(newArticle);
};

export const updateArticle = (req, res) => {
  const index = articleList.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Article not found" });

  articleList[index] = { ...articleList[index], ...req.body };
  res.json(articleList[index]);
};

export const deleteArticle = (req, res) => {
  const index = articleList.findIndex(a => a.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Article not found" });

  const deleted = articleList.splice(index, 1);
  res.json(deleted[0]);
};
