var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var _ = require('lodash');
var timestamps = require('mongoose-timestamp');
var Definitions = require('../model-definitions');

var StorySchema = new Schema({
  assignee: Definitions.string(100, true),
  criteria: Definitions.string(100, false),
  description: Definitions.string(100, false),
  reporter: Definitions.string(100, true),
  status: Definitions.string(100, true),
  title: Definitions.string(100, true),
  type: Definitions.string(100, true),
  userId: Definitions.string(100, true)
});

StorySchema.virtual('id').get(function() {
  return this._id;
});

StorySchema.set('toJSON', {
  virtuals: true
});

StorySchema.plugin(timestamps);

module.exports = mongoose.model('Story', StorySchema);