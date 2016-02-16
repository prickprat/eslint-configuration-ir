# eslint-configuration-ir
JavaScript ESLint Coding Standard for IR

If your JavaScript is for use in Node, put this comment at the top of your files:
   <code>/*eslint-env es6, node */</code>

If your JavaScript is for use in the browser:
   <code>/*eslint-env browser*/</code>

You may need to add to the aforementioned eslint comments depending on what frameworks/libaries/environments your code uses.
See: http://eslint.org/docs/user-guide/configuring#specifying-environments for more information

We need to make these distinctions as we currently support non-ECMA6 Compliant browsers, while using ECMA6 features in Node.
Files that are shared between Node and the browser should be treated (with respect to implementation and linting) as if it was just used in the browser.

Known Issues:
Chai Language Chains:
If you are using Chai's expect language chains in your testing (http://chaijs.com/api/bdd/), you will get linting errors pertaining to the 'no-unused-expressions' ESLint rule.

ESLint has purposely not supported this, see https://github.com/eslint/eslint/issues/2102.

Your choices are to either not using the language chains, or to add the following comment to the top of the relevant file.
   <code>/*eslint-disable no-unused-expressions*/</code>
