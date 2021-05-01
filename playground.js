function wordWrap(words) {
  const longest = [];
  let sentence = words.join(" ");
  if (sentence.length < 9) return words;

  while (sentence.length) {
    const substring = sentence.slice(0, 8);
    const word = substring.replace(/\s+/g, "-");
    if (word.length === 8 && word.length - 1 !== "-") {
      longest.push(word + "-");
    }
    if (word.length < 8) {
      longest[longest.length - 1] =
        longest[longest.length - 1].slice(0, -1) + word;
    }
    // console.log(sentence.substring(8).replace(/\s+/g, "-").length);
    sentence = sentence.substring(8).trimStart();
  }
  return longest;
}

console.log(wordWrap(["Tom", "is", "a", "dragon", "that", "breathes", "fire"]));
