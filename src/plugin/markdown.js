import MarkdownIt from 'markdown-it';
import MarkdonwItContainer from '@gerhobbelt/markdown-it-container';
import hljs  from 'highlight.js';


const highlight = function (str, lang) {
	if (lang && hljs.getLanguage(lang)) {
		try {
			return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
		} catch (__) {}
	}

    return ''; // use external default escaping
}
const options = {
	validate: function(params) {
		return params.trim().match(/^spoiler\s+(.*)$/);
	},
	render: function (tokens, idx) {
		var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

		if (tokens[idx].nesting === 1) {
	      // opening tag
	      return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';

	  } else {
	      // closing tag
	      return '</details>\n';
	  }
	}
}

const md = new MarkdownIt({
	html : true , 
	linkify : true , 
	typographer : true,
	highlight
}).use(MarkdonwItContainer,'spoiler',options);


export default function(text){
	return md.render(text);
}