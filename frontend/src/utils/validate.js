/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export function validateLoginUsername(rule, value, callback) {
  rule;
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
}
export function validateRegisterUsername(rule, value, callback) {
  rule;
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else if (value.length < 6) {
    callback(new Error("输入用户名长度不能小于6"));
  } else {
    callback();
  }
}
export function validateLoginPassword(rule, value, callback) {
  rule;
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
}

export function validateRegisterPassword(rule, value, callback) {
  rule;
  if (value === "") {
    callback(new Error("请输入密码"));
  } else if (value.length < 6) {
    callback(new Error("密码至少6位!"));
  } else {
    callback();
  }
}
