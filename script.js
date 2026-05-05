function stringChop(str, size) {
  // Handle null input
  if (str === null) return [];

  // Convert size to number (since prompt gives string)
  size = Number(size);

  const result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(str, size)));