# Test the web application with cypress version 10.0.3

Original from https://github.com/harblaith7/cypress-crash-course but upgrade cypress version from 7.4.0 to 10.0.3

Folder for write script is in `e2e` instread of `integration` in old version

in `tsconfig.json` add the following line to make visual studio code know `cy` syntax
```javascript
...
"types": ["node","cypress"],
},
"include": [
    "src",
    "cypress"
  ]
```

Config baseURL in `cypress.config.ts`

```javascript
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://localhost:3000/',
  },
});
```

Step1: npm install #install package from package.json <br />
Step2: npm start #run localhost:3000 for test<br />
Step3: npm install cypress --save-dev <br />
Step4: npx cypress open<br />

