/** регулярка имени ноды */
export const name = "[\\w0-9_]+";
/** регулярка значения ноды */
export const value = "[\"\'][\\w0-9_]+[\"\']";
/** регулярка опциональных разделителей */
export const spaces = "[\\s]*";
/** регулярка ноды с простым значением */
export const valueStatement = `${name}${spaces}=${spaces}${value}`;
/** регулярка списка со элементами -- нодами с простым значенем */
export const list = `{${spaces}${valueStatement}${spaces}(,${spaces}${valueStatement}${spaces})*}`
/** регулярка ноды с значением-списком */
export const listStatement = `${name}${spaces}=${spaces}${list}`;
/** регулярка списка с элементами -- ноды с простым значеним и ноды со списками */
export const complexList = `\{${spaces}(?:${valueStatement}|${listStatement})+${spaces}\}`;
//point = { x = '1', y = '0', z = '0' }