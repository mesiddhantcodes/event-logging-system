const Ajv = require('ajv');

const ajv = new Ajv();
const eventSchema = {
  type: 'object',
  properties: {
    eventType: { type: 'string' },
    sourceAppId: { type: 'string' },
    dataPayload: { type: 'object' },
  },
  required: ['eventType', 'sourceAppId', 'dataPayload'],
};

const validateEvent = (data) => {
  const validate = ajv.compile(eventSchema);
  const valid = validate(data);
  if (!valid) {
    return validate.errors;
  }
  return null;
};

module.exports = validateEvent;
