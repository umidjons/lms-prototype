const {Schema, model} = require('mongoose');

const AnswerSchema = new Schema({
    text: {type: String, required: true},
    isCorrect: {type: Boolean, default: false}
});

const QuestionSchema = new Schema({
    text: {type: String, required: true},
    answers: [AnswerSchema]
}, {
    timestamps: true
});

const Question = model('Question', QuestionSchema);

module.exports = Question;