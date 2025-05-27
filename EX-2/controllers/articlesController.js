import { articles } from '../models/data.js';

export const getAllArticles = (req, res) => {
  res.json(articles);
};

export const getArticleById = (req, res) => {
  const articleId = parseInt(req.params.id);
  const article = articles.find(a => a.id === articleId);
  if (!article) return res.status(404).json({ error: "Article not found" });
  res.json(article);
};

export const createArticle = (req, res) => {
  const { title, content, journalistId, categoryId } = req.body;
  const newArticle = {
    id: articleList.length + 1,
    title,
    content,
    journalistId,
    categoryId
  };

  articleList.push(newArticle);
  res.status(201).json(newArticle);
};

export const updateArticle = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content, journalistId, categoryId } = req.body;

  const article = articles.find(a => a.id === id);
  if (!article) return res.status(404).json({ error: "Article not found" });

  article.title = title;
  article.content = content;
  article.journalistId = journalistId;
  article.categoryId = categoryId;

  res.json(article);
};

export const deleteArticle = (req, res) => {
  const id = parseInt(req.params.id);
  const articleIndex = articles.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ error: "Article not found" });

  articles.splice(articleIndex, 1);
  res.json(202).send();
};
