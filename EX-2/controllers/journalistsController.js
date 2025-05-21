import { journalists, articles } from '../models/data.js';

let journalistList = [...journalists];

export const getAllJournalists = (req, res) => {
  res.json(journalistList);
};

export const getJournalistById = (req, res) => {
  const journalist = journalistList.find(j => j.id === parseInt(req.params.id));
  if (!journalist) return res.status(404).json({ message: 'Journalist not found' });
  res.json(journalist);
};

export const createJournalist = (req, res) => {
  const newJournalist = {
    id: journalistList.length + 1,
    ...req.body
  };
  journalistList.push(newJournalist);
  res.status(201).json(newJournalist);
};

export const updateJournalist = (req, res) => {
  const index = journalistList.findIndex(j => j.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Journalist not found' });

  journalistList[index] = { ...journalistList[index], ...req.body };
  res.json(journalistList[index]);
};

export const deleteJournalist = (req, res) => {
  const index = journalistList.findIndex(j => j.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Journalist not found' });

  const deleted = journalistList.splice(index, 1);
  res.json(deleted[0]);
};

export const getArticlesByJournalist = (req, res) => {
  const id = parseInt(req.params.id);
  const result = articles.filter(article => article.journalistId === id);
  res.json(result);
};
