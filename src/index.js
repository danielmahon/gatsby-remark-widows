const visit = require(`unist-util-visit`);

module.exports = ({ markdownAST }, pluginOptions = {}) => {
  const options = pluginOptions;
  options.minLength = options.minLength || 4;
  options.maxLength = options.maxLength;

  visit(markdownAST, `text`, node => {
    let processedText = node.value;
    const words = processedText.split(' ');
    let skip = false;

    if (options.maxLength && words.length > options.maxLength) {
      skip = true;
    }
    if (options.minLength && words.length < options.minLength) {
      skip = true;
    }

    // Fix possible widows if text is more than 4 words
    if (!skip) {
      processedText = processedText.replace(/\s+([\S]*)(\s*)$/gm, '\u00a0$1$2');
    }

    node.value = processedText;
  });

  return markdownAST;
};
