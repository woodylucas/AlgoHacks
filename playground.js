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

// Class Prototypes

function reverseString(string) {
  const characters = string.split("");
  return reversal(characters);
}

function reversal(characters) {
  let leftIdx = 0,
    rightIdx = characters.length - 1;
  while (leftIdx < rightIdx) {
    swap(characters, leftIdx, rightIdx);
    leftIdx++;

    rightIdx--;
  }
  return characters.join("");
}

const swap = (arr, idx1, idx2) =>
  ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

function validPalindrome(string) {
  let leftIdx = 0,
    rightIdx = string.length - 1;

  string = string.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");

  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

function vaccumCleaner(string) {
  let x = 0,
    y = 0;

  for (const char of string) {
    if (char === "L") {
      x--;
    } else if (char === "R") {
      x++;
    } else if (char === "U") {
      y--;
    } else if (char === "D") {
      y++;
    }
  }

  return x === 0 && y === 0;
}

function correctCapitalization(string) {}

function addBinary(a, b) {
  let idx1 = a.length - 1;
  let idx2 = b.length - 1;
  let carry = 0;
  let binary = "";

  while (idx1 >= 0 || idx2 >= 0 || carry !== 0) {
    let digit1 = idx1 >= 0 ? a[idx1] - "0" : 0;
    let digit2 = idx2 >= 0 ? b[idx2] - "0" : 0;

    let sum = digit1 + digit2 + carry;
    let solution = sum % 2;
    carry = Math.floor(sum / 2);
    binary = solution + binary;

    idx1--;
    idx2--;
  }

  return binary;
}

console.log(addBinary("11", "1"));
