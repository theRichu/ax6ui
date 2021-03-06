"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var main = function main() {
    return "\n<div data-ax6grid-container=\"root\" data-ax6grid-instance=\"{{instanceId}}\">\n    <div data-ax6grid-container=\"hidden\">\n        <textarea data-ax6grid-form=\"clipboard\"></textarea>\n    </div>\n    <div data-ax6grid-container=\"header\">\n        <div data-ax6grid-panel=\"aside-header\"></div>\n        <div data-ax6grid-panel=\"left-header\"></div>\n        <div data-ax6grid-panel=\"header\">\n            <div data-ax6grid-panel-scroll=\"header\"></div>\n        </div>\n        <div data-ax6grid-panel=\"right-header\"></div>\n    </div>\n    <div data-ax6grid-container=\"body\">\n        <div data-ax6grid-panel=\"top-aside-body\"></div>\n        <div data-ax6grid-panel=\"top-left-body\"></div>\n        <div data-ax6grid-panel=\"top-body\">\n            <div data-ax6grid-panel-scroll=\"top-body\"></div>\n        </div>\n        <div data-ax6grid-panel=\"top-right-body\"></div>\n        <div data-ax6grid-panel=\"aside-body\">\n            <div data-ax6grid-panel-scroll=\"aside-body\"></div>\n        </div>\n        <div data-ax6grid-panel=\"left-body\">\n            <div data-ax6grid-panel-scroll=\"left-body\"></div>\n        </div>\n        <div data-ax6grid-panel=\"body\">\n            <div data-ax6grid-panel-scroll=\"body\"></div>\n        </div>\n        <div data-ax6grid-panel=\"right-body\">\n          <div data-ax6grid-panel-scroll=\"right-body\"></div>\n        </div>\n        <div data-ax6grid-panel=\"bottom-aside-body\"></div>\n        <div data-ax6grid-panel=\"bottom-left-body\"></div>\n        <div data-ax6grid-panel=\"bottom-body\">\n            <div data-ax6grid-panel-scroll=\"bottom-body\"></div>\n        </div>\n        <div data-ax6grid-panel=\"bottom-right-body\"></div>\n    </div>\n    <div data-ax6grid-container=\"page\">\n        <div data-ax6grid-page=\"holder\">\n            <div data-ax6grid-page=\"navigation\"></div>\n            <div data-ax6grid-page=\"status\"></div>\n        </div>\n    </div>\n    <div data-ax6grid-container=\"scroller\">\n        <div data-ax6grid-scroller=\"vertical\">\n            <div data-ax6grid-scroller=\"vertical-bar\"></div>    \n        </div>\n        <div data-ax6grid-scroller=\"horizontal\">\n            <div data-ax6grid-scroller=\"horizontal-bar\"></div>\n        </div>\n        <div data-ax6grid-scroller=\"corner\"></div>\n    </div>\n    <div data-ax6grid-resizer=\"vertical\"></div>\n    <div data-ax6grid-resizer=\"horizontal\"></div>\n</div>\n";
};

var page_navigation = function page_navigation() {
    return "<div data-ax6grid-page-navigation=\"holder\">\n            {{#hasPage}}\n            <div data-ax6grid-page-navigation=\"cell\">    \n                {{#firstIcon}}<button type=\"button\" data-ax6grid-page-move=\"first\">{{{firstIcon}}}</button>{{/firstIcon}}\n                <button type=\"button\" data-ax6grid-page-move=\"prev\">{{{prevIcon}}}</button>\n            </div>\n            <div data-ax6grid-page-navigation=\"cell-paging\">\n                {{#@paging}}\n                <button type=\"button\" data-ax6grid-page-move=\"{{pageNo}}\" data-ax6grid-page-selected=\"{{selected}}\">{{pageNo}}</button>\n                {{/@paging}}\n            </div>\n            <div data-ax6grid-page-navigation=\"cell\">\n                <button type=\"button\" data-ax6grid-page-move=\"next\">{{{nextIcon}}}</button>\n                {{#lastIcon}}<button type=\"button\" data-ax6grid-page-move=\"last\">{{{lastIcon}}}</button>{{/lastIcon}}\n            </div>\n            {{/hasPage}}\n        </div>";
};

var page_status = function page_status() {
    return "<span>{{{progress}}} {{fromRowIndex}} - {{toRowIndex}} of {{dataRowCount}} {{#totalElements}}&nbsp; Total {{.}}{{/totalElements}}</span>";
};

exports.default = {
    "main": main,
    "page_navigation": page_navigation,
    "page_status": page_status
};