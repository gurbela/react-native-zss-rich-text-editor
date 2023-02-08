export const actions = {
	enableOnChange: 'ENABLE_ON_CHANGE',
	setTitleHtml: 'SET_TITLE_HTML',
	setContentHtml: 'SET_CONTENT_HTML',
	getTitleHtml: 'GET_TITLE_HTML',
	getTitleText: 'GET_TITLE_TEXT',
	toggleTitle: 'TOGGLE_TITLE',
	hideTitle: 'HIDE_TITLE',
	showTitle: 'SHOW_TITLE',
	getContentHtml: 'GET_CONTENT_HTML',
	getSelectedText: 'GET_SELECTED_TEXT',
	blurTitleEditor: 'BLUR_TITLE_EDITOR',
	blurContentEditor: 'BLUR_CONTENT_EDITOR',
	focusTitle: 'FOCUS_TITLE',
	focusContent: 'FOCUS_CONTENT',
	insertHTML: 'INSERT_HTML',
	insertCSS: 'INSERT_CSS',
	insertExternalCSS: 'INSERT_EXTERNAL_CSS',
	insertMention: 'INSERT_MENTION',
	startMention: 'START_MENTION',

	setBold: 'bold',
	setItalic: 'italic',
	setUnderline: 'underline',
	heading1: 'h1',
	heading2: 'h2',
	heading3: 'h3',
	heading4: 'h4',
	heading5: 'h5',
	heading6: 'h6',
	setParagraph: 'SET_PARAGRAPH',
	removeFormat: 'REMOVE_FORMAT',
	alignLeft: 'justifyLeft',
	alignCenter: 'justifyCenter',
	alignRight: 'justifyRight',
	alignFull: 'justifyFull',
	insertBulletsList: 'unorderedList',
	insertOrderedList: 'orderedList',
	insertLink: 'INST_LINK',
	updateLink: 'UPDATE_LINK',
	insertImage: 'INST_IMAGE',
	insertVideo: 'INST_VIDEO',
	setSubscript: 'subscript',
	setSuperscript: 'superscript',
	setStrikethrough: 'strikeThrough',
	setHR: 'horizontalRule',
	setIndent: 'indent',
	setOutdent: 'outdent',
	setTitlePlaceholder: 'SET_TITLE_PLACEHOLDER',
	setContentPlaceholder: 'SET_CONTENT_PLACEHOLDER',
	setTitleFocusHandler: 'SET_TITLE_FOCUS_HANDLER',
	setTitleBlurHandler: 'SET_TITLE_BLUR_HANDLER',
	setContentFocusHandler: 'SET_CONTENT_FOCUS_HANDLER',
	setContentBlurHandler: 'SET_CONTENT_BLUR_HANDLER',
	prepareInsert: 'PREPARE_INSERT',
	restoreSelection: 'RESTORE_SELECTION',
	setCustomCSS: 'SET_CUSTOM_CSS',
	setTextColor: 'SET_TEXT_COLOR',
	setBackgroundColor: 'SET_BACKGROUND_COLOR',
	init: 'ZSSS_INIT',
	setEditorHeight: 'SET_EDITOR_HEIGHT',
	setFooterHeight: 'SET_FOOTER_HEIGHT',
	setPlatform: 'SET_PLATFORM',
};

export const messages = {
	TITLE_HTML_RESPONSE: 'TITLE_HTML_RESPONSE',
	TITLE_TEXT_RESPONSE: 'TITLE_TEXT_RESPONSE',
	CONTENT_HTML_RESPONSE: 'CONTENT_HTML_RESPONSE',
	ZSS_INITIALIZED: 'ZSS_INITIALIZED',
	SCROLL: 'SCROLL',
	LOG: 'LOG',
	TITLE_FOCUSED: 'TITLE_FOCUSED',
	TITLE_BLURRED: 'TITLE_BLURRED',
	CONTENT_FOCUSED: 'CONTENT_FOCUSED',
	CONTENT_BLURRED: 'CONTENT_BLURRED',
	SELECTION_CHANGE: 'SELECTION_CHANGE',
	CONTENT_CHANGE: 'CONTENT_CHANGE',
	SELECTED_TEXT_RESPONSE: 'SELECTED_TEXT_RESPONSE',
	LINK_TOUCHED: 'LINK_TOUCHED',
	SELECTED_TEXT_CHANGED: 'SELECTED_TEXT_CHANGED',
	ENTER_MENTION: 'ENTER_MENTION',
	EXIT_MENTION: 'EXIT_MENTION',
	MENTION_TEXT_CHANGED: 'MENTION_TEXT_CHANGED',
};
