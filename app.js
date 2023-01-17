function validAnagram(string1, string2) {
    // Sort the strings
    string1 = string1.split('').sort().join('');
    string2 = string2.split('').sort().join('');
  
    // Create two objects to store the frequencies of each character
    const charFrequency1 = {};
    const charFrequency2 = {};
  
    // Iterate through the first string and add the characters to the first object
    for (const char of string1) {
      charFrequency1[char] = charFrequency1[char] + 1 || 1;
    }
  
    // Iterate through the second string and add the characters to the second object
    for (const char of string2) {
      charFrequency2[char] = charFrequency2[char] + 1 || 1;
    }
  
    // Compare the two objects to see if they are equal
    return JSON.stringify(charFrequency1) === JSON.stringify(charFrequency2);
  }