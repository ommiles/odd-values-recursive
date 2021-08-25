// RECURSIVELY, WITH HELPER

const collectOddValues = arr => {
  let outerScopedVariable = [];

  const helper = helperInput => {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      outerScopedVariable.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };

  helper(arr);

  return outerScopedVariable;
};

collectOddValues([1, 3, 2, 4, 5, 6, 3, 8]);
