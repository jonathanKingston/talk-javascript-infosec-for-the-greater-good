var fs = require('fs');
var slidePath = 'slides';
var slideNames = fs.readdirSync(slidePath);
var slideContent = [];
var MarkdownIt = require('markdown-it');
var md = new MarkdownIt();
var notes;


slideContent.push(fs.readFileSync('src/head.html'));
slideNames.sort().forEach(function (slideName) {
  var slide = fs.readFileSync(slidePath + '/' + slideName);
  var slideHTML = '<section class="slide" id="s' + slideName.replace(/[.]md$/, '').replace(/[.]/g, '_') + '" >\n<div>\n' + md.render(slide.toString()) + '</div>\n</section>\n\n';
  slideContent.push(slideHTML);
});

slideContent.push(fs.readFileSync('src/foot.html')); 

fs.writeFileSync('index.html', slideContent.join(''));

notes = fs.readFileSync('notes.md');
fs.writeFileSync('notes.html', '<!DOCTYPE html><html><body>' + md.render(notes.toString()) + '</body></html>');
