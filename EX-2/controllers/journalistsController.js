// controllers/journalistsController.js

import { journalists, articles } from "../models/data.js";

export const getAllJournalists = (req, res) => {
    res.status(200).json(journalists);
};

export const getJournalistById = (req, res) => {
    const id = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === id);

    if (!journalist) {
        return res.status(404).json({ error: "Journalist not found" });
    }

    res.status(200).json(journalist);
};

export const createJournalist = (req, res) => {
    const { name, email } = req.body;

    const newJournalist = {
        id: journalists.length + 1,
        name,
        email
    };

    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
};

export const updateJournalist = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;

    const journalist = journalists.find(j => j.id === id);

    if (!journalist) {
        return res.status(404).json({ error: "Journalist not found" });
    }

    journalist.name = name;
    journalist.email = email;
    res.status(200).json(journalist);
};

export const deleteJournalist = (req, res) => {
    const id = parseInt(req.params.id);
    const index = journalists.findIndex(j => j.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Journalist not found" });
    }

    journalists.splice(index, 1);
    res.sendStatus(204);
};

export const getArticleByJournalistId = (req, res) => {
    const id = parseInt(req.params.id);
    const journalist = journalists.find(j => j.id === id);

    if (!journalist) {
        return res.status(404).json({ error: "Journalist not found" });
    }

    const journalistArticles = articles.filter(article => article.journalistId === id);
    res.status(200).json(journalistArticles);
};
