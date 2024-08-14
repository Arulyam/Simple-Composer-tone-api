// Start by reading the instructions in the README.

function lintAndPlaySequence() {
  const sequence1 = document.querySelector('#sequence-input-1').value;
  const sequence2 = document.querySelector('#sequence-input-2').value;
  const sequence3 = document.querySelector('#sequence-input-3').value;
  const sequence4 = document.querySelector('#sequence-input-4').value;

  // TASKS
  // 1. Update lintedSequence by removing the whitespace off of the ends of sequence1, 2, 3, and 4, and concatenating them together
  // 2. Update lintedSequence by converting all characters to lowercase
  let lintedSequence = sequence1.trim() + sequence2.trim() + sequence3.trim() + sequence4.trim();
  lintedSequence = lintedSequence.toLowerCase();

  // 3. LevelUp: Update lintedSequence by using the 'replace' method to remove all characters that aren't letters or spaces
  lintedSequence = lintedSequence.replaceAll(/[^a-g0-4\s]/g, "");

  // Don't code below this line! 
  playSequence(lintedSequence);
}
