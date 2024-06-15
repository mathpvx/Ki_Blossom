const Question = require('./question');
const Session = require('./session');
const SessionAnswer = require('./sessionAnswer');
const AnswerOption = require('./answerOption');
const Recommendation = require('./recommendation.js');

// Associations
AnswerOption.belongsTo(Question, { foreignKey: 'next_qu' });
AnswerOption.belongsTo(Question, { foreignKey: 'current_qu' });
AnswerOption.belongsTo(Recommendation, { foreignKey: 'reco_id' });

Question.hasOne(Session, { foreignKey: 'next_qu' });
Question.hasMany(SessionAnswer, { foreignKey: 'qu_id' });

Session.belongsTo(Question, { foreignKey: 'next_qu' });
Session.hasMany(SessionAnswer, { foreignKey: 'sess_id' });

SessionAnswer.belongsTo(Session, { foreignKey: 'sess_id' });
SessionAnswer.belongsTo(AnswerOption, { foreignKey: 'answer_id' });