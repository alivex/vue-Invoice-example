// import parseTime, formatTime and set to filter
export { parseTime, formatTime } from "@/utils";

/**
 * Show currency label
 * @param {number} currency
 * @param {string} amount
 * @return {string}
 */
export function currencize(amount, currency) {
  return currency + " " + toThousandFilter(amount);
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
  return (+num || 0)
    .toString()
    .replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}

/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
