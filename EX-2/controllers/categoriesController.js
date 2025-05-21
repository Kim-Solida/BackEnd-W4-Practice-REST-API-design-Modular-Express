import { categories, articles } from '../models/data.js';

let categoryList = [...categories];

export const getAllCategories = (req, res) => {
  res.json(categoryList);
};

export const getCategoryById = (req, res) => {
  const category = categoryList.find(c => c.id === parseInt(req.params.id));
  if (!category) return res.status(404).json({ message: 'Category not found' });
  res.json(category);
};

export const createCategory = (req, res) => {
  const newCategory = {
    id: categoryList.length + 1,
    ...req.body
  };
  categoryList.push(newCategory);
  res.status(201).json(newCategory);
};

export const updateCategory = (req, res) => {
  const index = categoryList.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Category not found' });

  categoryList[index] = { ...categoryList[index], ...req.body };
  res.json(categoryList[index]);
};

export const deleteCategory = (req, res) => {
  const index = categoryList.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Category not found' });

  const deleted = categoryList.splice(index, 1);
  res.json(deleted[0]);
};

export const getArticlesByCategory = (req, res) => {
  const id = parseInt(req.params.id);
  const result = articles.filter(article => article.categoryId === id);
  res.json(result);
};
