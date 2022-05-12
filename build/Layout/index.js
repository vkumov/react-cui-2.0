import React from 'react';
import { appendClass } from '../utils/index.js';

const Footer = ()=>/*#__PURE__*/ React.createElement("footer", {
        className: "footer"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "footer__links"
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "list list--inline"
    }, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "http://www.cisco.com/cisco/web/siteassets/contacts/index.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Contacts")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "https://secure.opinionlab.com/ccc01/o.asp?id=jBjOhqOJ",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Feedback")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "https://www.cisco.com/c/en/us/about/help.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Help")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "http://www.cisco.com/c/en/us/about/sitemap.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Site Map")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "https://www.cisco.com/c/en/us/about/legal/terms-conditions.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Terms & Conditions")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Privacy Statement")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "https://www.cisco.com/c/en/us/about/legal/privacy-full.html#cookies",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Cookie Policy")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "https://www.cisco.com/c/en/us/about/legal/trademarks.html",
        target: "_blank",
        rel: "noopener noreferrer"
    }, "Trademarks")))))
;

function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
const Header = ({ children , fluid =false , ...props })=>/*#__PURE__*/ React.createElement("header", _extends({
        className: "header"
    }, props), /*#__PURE__*/ React.createElement("div", {
        className: `container${fluid ? "-fluid" : ""}`
    }, /*#__PURE__*/ React.createElement("div", {
        className: "header-panels"
    }, children)))
;
const HeaderPanel = ({ children , center =false , right =false , className =null , ...props })=>/*#__PURE__*/ React.createElement("div", _extends({
        className: `header-panel${appendClass(center, "header-panel--center")}${appendClass(right, "header-panel--right")}${appendClass(className)}`
    }, props), children)
;
const HeaderTitle = ({ icon =true , link =null , title , ...props })=>/*#__PURE__*/ React.createElement(HeaderPanel, _extends({}, props), icon ? /*#__PURE__*/ React.createElement("a", {
        className: "header__logo",
        href: link || "http://www.cisco.com",
        target: "_blank",
        rel: "noopener noreferrer"
    }, /*#__PURE__*/ React.createElement("span", {
        className: typeof icon === "string" ? `icon-${icon}` : "icon-cisco"
    })) : null, /*#__PURE__*/ React.createElement("div", {
        className: "header__title"
    }, title))
;

export { Footer, Header, HeaderPanel, HeaderTitle };
//# sourceMappingURL=index.js.map
