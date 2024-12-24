export function joinStrings(strings, delimiter = ' ') {
    return strings.filter((s) => s && typeof s === 'string').join(delimiter);
  }