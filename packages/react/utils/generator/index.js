require('colors');
const fs = require('fs');
const templates = require('./templates');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

const componentDirectory = `./components/${componentName}`;
const componentTestDirectory = `./components/${componentName}/__tests__`;
const storiesDirectory = `./stories/${componentName}`;

if (fs.existsSync(componentDirectory) || fs.existsSync(storiesDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentTestDirectory, {
  recursive: true
});
fs.mkdirSync(storiesDirectory);

const generatedTemplates = templates.map(template => template(componentName));

const writeFile = (dir, name, tpl) => {
  fs.writeFileSync(`${dir}/${name}${tpl.extension}`, tpl.content);
};

generatedTemplates.forEach(template => {
  switch (template.type) {
    case 'test':
      writeFile(componentTestDirectory, componentName, template);
      break;
    case 'stories':
      writeFile(storiesDirectory, componentName, template);
      break;
    case 'component':
      writeFile(componentDirectory, componentName, template);
      break;
  }
});

console.log('Successfully created component under: ' + componentDirectory.green);
