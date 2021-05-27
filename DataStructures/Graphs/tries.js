class Trie {
  constructor() {
    this.root = {};
    this.endOfWord = "*";
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!(char in node)) node[char] = {};
      node = node[char];
    }
    node[this.endOfWord] = word;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!(char in node)) return false;
      node = node[char];
    }
    return this.endOfWord in node;
  }

  startsWith(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!(char in node)) return false;
      node = node[char];
    }
    return true;
  }
}
function longestWords(words) {
  const trie = new Trie();
  for (const char of words) {
    trie.insert(char);
  }
  console.log(trie);
}

console.log(longestWords(["w", "wo", "wor", "worl", "world"]));
