/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const levels = {};
  const getUrlHierarchy = (domain) => {
    const resArr = [];
    const reverseDomain = domain.split('.').reverse().reduce((a, b) => {
      resArr.push(`.${a}`);
      return `${a}.${b}`;
    });
    resArr.push(`.${reverseDomain}`);
    return resArr;
  };

  domains.forEach((link) => {
    const hierarchy = getUrlHierarchy(link);
    hierarchy.forEach((elem) => {
      if (levels[elem] === undefined) {
        levels[elem] = 1;
      } else {
        levels[elem] += 1;
      }
    });
  });
  return levels;
}

module.exports = getDNSStats;
