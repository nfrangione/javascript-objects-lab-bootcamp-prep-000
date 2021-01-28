var recipes = new Object();

function updateWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}