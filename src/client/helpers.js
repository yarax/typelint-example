/** Example of union types
 * @param {Category|Pet} item
 * @returns {*}
 */
export function getTitle(item) {
  return item.name;
}

/**
 * The same result, but with "dot" accessor
 * @param {Pet.category} item
 * @returns {*}
 */
export function getTitle2(item) {
  return item.name;
}