const { generateTemplateFiles } = require('generate-template-files');
const fs = require('fs');

generateTemplateFiles([
  {
    option: 'Create redux saga action ',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/redux-saga-action/',
    },
    stringReplacers: [
      { question: 'Insert Module name', slot: '__module__' },
      { question: 'Insert Model name', slot: '__model__' },
      { question: 'Insert Action name', slot: '__action__' },
    ],
    dynamicReplacers: [{ slot: '__module__', slotValue: 'xxxx' }],
    output: {
      path: './src/modules/__module__(pascalCase)/redux',
      pathAndFileNameDefaultCase: '(kebabCase)',
      overwrite: true,
    },
    onComplete: (results) => {
      const indexActionsPath = `${results.output.path}/action-types/index.ts`;
      const comment = `// [Generator] don't remove this line`;
      const newExportLine = `export * from './${
        results.stringReplacers.find((s) => s.slot === '__action__').slotValue
      }-${results.stringReplacers.find((s) => s.slot === '__model__').slotValue}';`;
      if (fs.existsSync(indexActionsPath)) {
        let data = fs.readFileSync(indexActionsPath).toString();
        data = data.replace(
          comment,
          `${newExportLine}
${comment}`,
        );
        fs.writeFileSync(indexActionsPath, data);
      } else {
        fs.writeFileSync(
          indexActionsPath,
          `${newExportLine}
${comment}
`,
        );
      }
      console.log(`results`, results);
    },
  },
]).then((rs) => {
  console.log('DONE', rs);
});
