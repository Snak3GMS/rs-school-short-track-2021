/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return email.match(/@[A-Z0-9-]+.[A-Z]{2,4}$/gmi)[0].split('').splice(1).join('');
}

module.exports = getEmailDomain;
