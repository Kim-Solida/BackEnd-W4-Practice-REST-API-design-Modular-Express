import express from 'express';
import {
  getAllJournalists,
  getJournalistById,
  createJournalist,
  updateJournalist,
  deleteJournalist,
  getArticlesByJournalist
} from '../controllers/journalistsController.js';

const router = express.Router();

// Get all journalists
router.get('/', getAllJournalists);

// Get a journalist by ID
router.get('/:id', getJournalistById);

// Create a new journalist
router.post('/', createJournalist);

// Update a journalist by ID
router.put('/:id', updateJournalist);

// Delete a journalist by ID
router.delete('/:id', deleteJournalist);

// Get all articles written by a specific journalist
router.get('/:id/articles', getArticlesByJournalist);

export default router;