module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    // 1. 接入 prettier 的规则
    'prettier',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],

    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'vue/name-property-casing': ['off', 'PascalCase'],
    'vue/multi-word-component-names': 'off',
    'vue/attributes-order': 'off',
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/script-setup-uses-vars': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    // 强制for循环按照正确的方向前进
    'for-direction': 'error',
    // switch语句必须有default分支
    'default-case': 'error',
    // 禁止在没有类型检查的情况下与null比较
    'no-eq-null': 'error',
    // 禁止在变量定义之前使用他
    'no-use-before-define': 'off',
    // 变量的命名一律使用驼峰命名
    camelcase: 0,
    // switch 的冒号之后有空格
    'switch-colon-spacing': ['error', { after: true, before: false }],
    // 箭头函数的箭头前后都有空格
    'arrow-spacing': 'error',
    // 要求非空文件末尾存在一行空行
    'eol-last': 'error',
    // 回调函数中必须有容错处理
    'handle-callback-err': 'error',
    // 禁止行尾空格
    'no-trailing-spaces': 'error',
    // 禁止出现多行空行
    'no-multiple-empty-lines': 'error',
    // 禁止在单行内非缩进情况出现多个空格
    'no-multi-spaces': 'error',
    //  使用'==='来代替'=='
    eqeqeq: 'error',
    //  遵循大括号约定
    curly: 'error',
    // 禁止与自身比较 , if (x===x){}
    'no-self-compare': 'error',
    // 禁止重复导入
    'no-duplicate-imports': 'off',
    // 函数名后不需要空格
    'space-before-function-paren': 0,
    // 在注释中使用特定的警告术语
    'no-warning-comments': 0,
    // 使用指定的 import 加载的模块
    'no-restricted-imports': 0,

    // $emit不校验kebab-case
    'vue/custom-event-name-casing': 0,
    // prop校验
    'vue/no-unused-properties': 0,
    'vue/no-unused-vars': 'error',
    // 'vue/name-property-casing': 0,
    'vue/component-name-in-template-casing': 0,
    // 'vue/component-definition-name-casing': ['error', 'PascalCase' | 'kebab-case'],

    // 禁止在生产环境出现alert
    'no-var': 'error',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 指定程序中允许的最大环路复杂度
    // complexity: ["error", 20],
    // 要求调用 isNaN()检查 NaN
    'use-isnan': 'error',
    // 禁止使用eval
    'no-eval': 'error',
    // 允许空函数
    'no-empty': 'off',
    // 禁止使用未定义的变量
    'no-undef': 'error'
  }
}
