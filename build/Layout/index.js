import React from 'react';
import { appendClass } from '../utils/index.ts';

var Footer = function() {
    return /*#__PURE__*/ React.createElement("footer", {
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
    }, "Trademarks")))));
};

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
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var Header = function(_param)  {
    var children = _param.children, _fluid = _param.fluid, fluid = _fluid === void 0 ? false : _fluid, props = _objectWithoutProperties(_param, [
        "children",
        "fluid"
    ]);
    return React.createElement("header", _extends({
        className: "header"
    }, props), /*#__PURE__*/ React.createElement("div", {
        className: "container".concat(fluid ? "-fluid" : "")
    }, /*#__PURE__*/ React.createElement("div", {
        className: "header-panels"
    }, children)));
};
var HeaderPanel = function(_param)  {
    var children = _param.children, _center = _param.center, center = _center === void 0 ? false : _center, _right = _param.right, right = _right === void 0 ? false : _right, _className = _param.className, className = _className === void 0 ? null : _className, props = _objectWithoutProperties(_param, [
        "children",
        "center",
        "right",
        "className"
    ]);
    return React.createElement("div", _extends({
        className: "header-panel".concat(appendClass(center, "header-panel--center")).concat(appendClass(right, "header-panel--right")).concat(appendClass(className))
    }, props), children);
};
var HeaderTitle = function(_param)  {
    var _icon = _param.icon, icon = _icon === void 0 ? true : _icon, _link = _param.link, link = _link === void 0 ? null : _link, title = _param.title, props = _objectWithoutProperties(_param, [
        "icon",
        "link",
        "title"
    ]);
    return React.createElement(HeaderPanel, _extends({}, props), icon ? /*#__PURE__*/ React.createElement("a", {
        className: "header__logo",
        href: link || "http://www.cisco.com",
        target: "_blank",
        rel: "noopener noreferrer"
    }, /*#__PURE__*/ React.createElement("span", {
        className: typeof icon === "string" ? "icon-".concat(icon) : "icon-cisco"
    })) : null, /*#__PURE__*/ React.createElement("div", {
        className: "header__title"
    }, title));
};

export { Footer, Header, HeaderPanel, HeaderTitle };
//# sourceMappingURL=index.js.map
