import * as C from 'handsontable/i18n/constants';
import { registerCondition } from './../conditionRegisterer';

export const CONDITION_NAME = 'lt';

export function condition(dataRow, [value] = inputValues) {
  if (dataRow.meta.type === 'numeric') {
    value = parseFloat(value, 10);
  }

  return dataRow.value < value;
}

registerCondition(CONDITION_NAME, condition, {
  name: C.FILTERS_CONDITIONS_LESS_THAN,
  inputsCount: 1,
  showOperators: true
});
