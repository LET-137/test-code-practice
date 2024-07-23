const text = document.querySelector('#text');
const checkbox = document.querySelector('#checkbox');
const button = document.querySelector('#button');
const reset = document.querySelector('#reset');
const output = document.querySelector('#output');

  
// checkboxがtrueの状態でボタンを押すと、入力フォームの文字をoutput.textContentに出力する
const textOutput = (Checked, textInputValue) => {  
  if (Checked && isAlphabetic(textInputValue)) {
    output.textContent = textInputValue;
  } else {
    output.textContent = ""
  }
}
// テストコード
const test_textOutput = () => {
  const isBool = [
    {bool: true, value: 'abc', expected: 'abc', description: 'checkboxにチェックあり'},
    {bool: false, value: 'abc',expected: '', description: 'checkboxにチェックなし'},
  ]
  isBool.forEach(({bool, value, expected, description}) => {
    output.textContent = ""
    textOutput(bool, value)
    const result = output.textContent
    
    console.log(`Text case: ${description}`)
    console.log(`expected: ${expected} Result: ${result}`)
    console.log(result === expected ? `PASS` : `FAIL (Expected: ${expected} Resulu: ${result})`)
    console.log('-------------------------')
  })
}

// textInputが半角英字か判断
const isAlphabetic = (textInput) => {
  return /^[a-z]+$/.test(textInput);
}
// テストコード
const test_isAlphabetic = () => {
  const testCases = [
    {input: 'abc', expected: true, description: '全て半角英数文字'},
    {input: 'ABC', expected: false, description: '全て大文字の半角英数文字'},
    {input: 'abC', expected: false, description: '一部大文字の全角英数文字'},
    {input: 'あいう', expected: false, description: '日本語'},
    {input: '123', expected: false, description: '数値'},
    {input: '%@#', expected: false, description: '記号'},
  ]
  testCases.forEach(({input, expected, description}) => {
    const result = isAlphabetic(input);
    console.log(`Test case: ${description}`);
    console.log(`input: ${input}`);
    console.log(`Expected: ${expected}, Result: ${result}`);
    console.log(result === expected ? 'PASS' : `FAIL (Expected: ${expected} Result: ${result}`);
    console.log('-------------------------')
  })
}

// 実行ボタンを押してフォームの文字を表示させる
button.addEventListener('click', () => {
  const textInput = text.value;
  const isChecked = checkbox.checked;
  textOutput(isChecked,textInput)
});

// テストコードを実行
test_isAlphabetic()
test_textOutput()

