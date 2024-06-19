const Question = require('./question');
const Session = require('./session');
const SessionAnswer = require('./sessionAnswer');
const AnswerOption = require('./answerOption');
const Recommendation = require('./recommendation');
const WbExercice = require('./wbExercice');
const Unhealthy = require('./unhealthy');
const Plants = require('./plant');
const EssentialOil = require('./essentialOil');
const Dietetics = require('./dietetics');
const Food = require('./food');

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

Recommendation.hasMany(AnswerOption, { foreignKey: 'reco_id' });

Recommendation.belongsTo(AnswerOption, { foreignKey: 'answer_id' });
Recommendation.belongsTo(Unhealthy, { foreignKey: 'unhealthy_id' });
Recommendation.belongsTo(WbExercice, { foreignKey: 'exo_id' });
Recommendation.belongsTo(Food, { as: 'Food1', foreignKey: 'food_id1' });
Recommendation.belongsTo(Food, { as: 'Food2', foreignKey: 'food_id2' });
Recommendation.belongsTo(Plants, { foreignKey: 'plant_id' });
Recommendation.belongsTo(EssentialOil, { foreignKey: 'eo_id' });
Recommendation.belongsTo(Dietetics, { foreignKey: 'diet_id' });
