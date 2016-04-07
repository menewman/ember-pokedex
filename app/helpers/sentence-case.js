import Ember from 'ember';

export function sentenceCase([text]/*, hash*/) {
  if (!text || !text.length) return '';

  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

export default Ember.Helper.helper(sentenceCase);
