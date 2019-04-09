const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

const log = require('debug')('app:question-admin');

router
    .put('/', async (req, res, next) => {
        try {
            const {question, answers} = req.body;
            const entry = new Question({text: question, answers});
            await entry.save();
            log('[PUT /] entry=%O', entry);
            res.json({
                error: null,
                result: {
                    id: entry._id
                }
            });
        }
        catch (error) {
            log('[PUT /] %O', error);
            res.json({
                error: error.message,
                result: null
            });
        }
    })
    .post('/', async (req, res, next) => {
        try {
            const {id, question, answers} = req.body;
            if (!id) {
                throw Error('ID does not specified');
            }

            const entry = await Question.findById(id);
            if (!entry) {
                throw Error('QA not found');
            }

            entry.text = question;
            entry.answers = answers;
            await entry.save();
            log('[POST /] entry=%O', entry);

            res.json({
                error: null,
                result: {
                    id: entry._id
                }
            });
        }
        catch (error) {
            log('[POST /] %O', error);
            res.json({
                error: error.message,
                result: null
            });
        }
    })
    .get('/:id', async (req, res, next) => {
        try {
            const entry = await Question.findById(req.params.id);
            if (!entry) {
                throw Error('QA not found');
            }
            res.json({
                error: null,
                result: entry
            });
        }
        catch (error) {
            log('[GET /id] %O', error);
            res.json({
                error: error.message,
                result: null
            });
        }
    })
    .get('/', async (req, res, next) => {
        try {
            const entries = await Question.find({}, null, {limit: 10});
            res.json({
                error: null,
                result: entries
            });
        }
        catch (e) {
            log('[GET /] %O', error);
            res.json({
                error: error.message,
                result: null
            });
        }
    });

module.exports = router;