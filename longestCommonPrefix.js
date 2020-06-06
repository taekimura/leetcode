const longestCommonPrefix = strs => {
    if (strs.length === 0) return '';
  
    // First scan: find shortest length
    let minLength = strs[0].length;
    for (const str of strs) {
      if (str.length < minLength) {
        minLength = str.length;
      }
    }
  
    // Second scan: find common chars until a different one
    for (let i = 0; i < minLength; i++) {
      for (const str of strs) {
        if (str[i] !== strs[0][i]) {
          return str.substr(0, i);
        }
      }
    }
    return strs[0].substr(0, minLength);
  };