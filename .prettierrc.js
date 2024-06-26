module.exports = {
  printWidth: 140, // 换行字符串阈值
  tabWidth: 2, // 设置工具每一个水平缩进的空格数
  semi: false, // 句末是否加分号
  useTabs: false, // 是否使用tab进行缩进，默认为false，表示用空格进行缩减
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 用单引号
  trailingComma: 'none', // 最后一个对象元素加逗号
  bracketSpacing: true, // 对象，数组加空格
  jsxBracketSameLine: true, // jsx > 是否另起一行
  arrowParens: 'avoid', // (x) => {} 是否要有小括号
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  endOfLine: 'auto',
  // 使用 eslint + prettier 格式化 .html 文件报错
  overrides: [
    {
      files: '*.html',
      options: { parser: 'html' }
    },
    {
      files: '*.vue',
      options: { parser: 'vue' }
    }
  ]
}
