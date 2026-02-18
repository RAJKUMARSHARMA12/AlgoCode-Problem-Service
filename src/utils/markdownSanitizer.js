const marked = require('marked');
const sanitizeHtmlLibrary = require('sanitize-html');
const TurndownService = require('turndown');

function sanitizeMarkdownContent(markdownContent) {
    const tunrmdownService = new TurndownService();

    //2. Convert markdown to HTML
    const convertedHtml = marked.parse(markdownContent);
    console.log("Converted HTML:", convertedHtml);

    //3. Sanitize the HTML
    const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
        allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
    });
    console.log("Sanitized HTML:", sanitizedHtml);

    //4. Convert sanitized HTML back to markdown
    const sanitizedMarkdown = tunrmdownService.turndown(sanitizedHtml);
    console.log("Sanitized Markdown:", sanitizedMarkdown);
    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;


