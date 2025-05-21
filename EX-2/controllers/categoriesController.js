import { categories } from '../models/data.js';

export const getAllCategories = (req, res) => {
  res.json(categoryList);
};

export const getCategoryById = (req, res) => {
  const id = req.params.id;
  const category = categories.find(category => 
    category.id === parseFloat(id)
  );

  if (!category) return res.status(404).json({ error: 'Category not found' });
  return res.status(200).json(category);
};

export const createCategory = (req, res) => {
  const { name } = req.body;

  const newCategory = {
    id: categoryList.length + 1,
    name
  };

  categoryList.push(newCategory);
  res.status(201).json(newCategory);
};

export const updateCategory = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  const category = categories.find(category =>
        category.id === parseInt(id)
  );

  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  category.name = name;
  return res.status(200).json(category);
};

export const deleteCategory = (req, res) => {
  const id = req.params.id;
  const categoryIndex = categories.findIndex(category =>
    category.id === parseInt(id)
  );

  if (categoryIndex === -1) {
    return res.status(404).json({ error: "Category not found" });
  }

  categories.splice(categoryIndex, 1);
  return res.status(204).send();
};

export const getArticlesByCategory = (req, res) => {
  const id = req.params.id;
  const category = categories.find(category =>
    category.id === parseInt(id)
  );

  if (!category) {
    return res.status(404).json({ error: "Category not found" });
  }

  const articlesByCategory = data.articles.filter(article => article.categoryId === category.id);
  return res.status(200).json(articlesByCategory);
};
