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
    node[this.endOfWord] = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!(char in node)) return false;
      node = node[char];
    }
    return this.endOfWord in node;
  }

  autocomplete(prefix) {
    const autoCompleteWords = [];
    let node = this.root;
    for (const char of prefix) {
      if (!(char in node)) return autoCompleteWords;
      node = node[char];
    }
    this.searchWords(node, autoCompleteWords, prefix);
    return autoCompleteWords;
  }
  searchWords(node, autocomplete, word) {
    if (!node) return;
    if (node["*"]) {
      autocomplete.push(word);
    }
    for (const char in node) {
      this.searchWords(node[char], autocomplete, word + char);
    }
  }
}

const words = ["i", "island", "iroman", "type", "t", "tie", "typehead"];

const trie = new Trie();

for (const word of words) {
  trie.insert(word);
}

console.log(trie.startsWith("ty"));
