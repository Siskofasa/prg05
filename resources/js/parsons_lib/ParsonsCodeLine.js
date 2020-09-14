export default class ParsonsCodeLine {
    // Create a line object skeleton with only code and indentation from
    // a code string of an assignment definition string (see parseCode)
    constructor(codeString, widget) {

        // regexp used for trimming
        const trimRegexp = /^\s*(.*?)\s*$/;

        this.widget = widget;
        this.code = "";
        this.indent = 0;
        this._toggles = [];

        this.distractor = false;
        this.vitalElement = false;
        this.static = false;

        if (codeString) {
            // Consecutive lines to be dragged as a single block of code have strings "\\n" to
            // represent newlines => replace them with actual new line characters "\n"
            this.code = codeString
                .replace(/#distractor\s*$/, "")
                .replace(/#vital\s*$/, "")
                .replace(/#static\s*$/, "")
                .replace(trimRegexp, "$1")
                .replace(/\\n/g, "\n");
            this.indent = codeString.length - codeString.replace(/^\s+/, "").length;
        }
    }

    elem() {
        // the element will change on shuffle, so we should re-fetch it every time
        return $("#" + this.id);
    };
    markCorrect() {
        this.elem().addClass(this.widget.FEEDBACK_STYLES.correctPosition);
    };

    markIncorrectPosition() {
        this.elem().addClass(this.widget.FEEDBACK_STYLES.incorrectPosition);
    };

    markIncorrectIndent() {
        this.elem().addClass(this.widget.FEEDBACK_STYLES.incorrectIndent);
    };

    _addToggles() {
        const toggleRegexp =
            new RegExp("\\$\\$toggle(" + this.widget.options.toggleSeparator + ".*?)?\\$\\$", "g");
        const toggles = this.code.match(toggleRegexp);
        const that = this;

        this._toggles = [];
        if (toggles) {
            let html = this.code;
            for (let i = 0; i < toggles.length; i++) {
                const opts = toggles[i].substring(10, toggles[i].length - 2).split(this.widget.options.toggleSeparator);
                html = html.replace(toggles[i], "<span class='jsparson-toggle' data-jsp-options='" +
                    JSON.stringify(opts).replace("<", "&lt;") + "'></span>");

            }
            this.elem().html(html);
            this.elem().find(".jsparson-toggle").each(function (index, item) {
                that._toggles.push(item);
            });
        }
    };

    // Returns the number of toggleable elements in this code block
    toggleCount() {
        return this._toggles.length;
    };

    // Returns the index of the currently selected toggle option for the
    // toggle element at given index
    selectedToggleIndex(index) {
        if (index < 0 || index >= this._toggles.length) {
            return -1;
        }
        const elem = this._toggles[index];
        const opts = $(elem).data("jsp-options");
        return opts.indexOf(elem.textContent);
    };

    // Returns the value of the toggleable element at the given index (0-based)
    toggleValue(index) {
        if (index < 0 || index >= this._toggles.length) {
            return undefined;
        }
        return this._toggles[index].textContent;
    };
}
