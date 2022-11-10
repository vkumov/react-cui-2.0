import React from 'react';

const PaginationContext = /*#__PURE__*/ React.createContext(null);

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
const Button = ({ content , position , active =false , disabled =false  })=>/*#__PURE__*/ React.createElement(PaginationContext.Consumer, null, ({ changePage  })=>/*#__PURE__*/ React.createElement("li", {
            className: active ? "active" : ""
        }, /*#__PURE__*/ React.createElement("a", {
            className: disabled ? "disabled" : "",
            onClick: (e)=>changePage(e, position)
        }, content)));
const FirstPrev = ()=>{
    const { perPage , firstAndLast , position , icons , prev , beginAt  } = React.useContext(PaginationContext);
    const disabled = position < perPage + beginAt;
    const r = [];
    if (icons && firstAndLast) r.push(/*#__PURE__*/ React.createElement(Button, {
        content: /*#__PURE__*/ React.createElement("span", {
            className: "icon-chevron-left-double"
        }),
        disabled: disabled,
        key: "first-page",
        position: beginAt
    }));
    r.push(/*#__PURE__*/ React.createElement(Button, {
        content: icons ? /*#__PURE__*/ React.createElement("span", {
            className: "icon-chevron-left"
        }) : prev,
        disabled: disabled,
        key: "previous-page",
        position: position - perPage
    }));
    return /*#__PURE__*/ React.createElement(React.Fragment, null, r);
};
const NextLast = ()=>{
    const { beginAt , perPage , total , firstAndLast , position , icons , next  } = React.useContext(PaginationContext);
    const pages = Math.floor(total / perPage) + 1;
    const disabled = position > total - perPage + beginAt;
    const r = [];
    r.push(/*#__PURE__*/ React.createElement(Button, {
        content: icons ? /*#__PURE__*/ React.createElement("span", {
            className: "icon-chevron-right"
        }) : next,
        disabled: disabled,
        key: "next-page",
        position: position + perPage
    }));
    if (icons && firstAndLast) r.push(/*#__PURE__*/ React.createElement(Button, {
        content: /*#__PURE__*/ React.createElement("span", {
            className: "icon-chevron-right-double"
        }),
        disabled: disabled,
        key: "last-page",
        position: (pages - 1) * perPage + beginAt
    }));
    return /*#__PURE__*/ React.createElement(React.Fragment, null, r);
};
const Pages = ({ start , finish  })=>/*#__PURE__*/ React.createElement(PaginationContext.Consumer, null, ({ perPage , active , beginAt  })=>[
            ...Array(finish - start + 1)
        ].map((v, i)=>{
            const current = start + i;
            return /*#__PURE__*/ React.createElement(Button, {
                active: active === current,
                content: `${current}`,
                key: `${current}-page`,
                position: (current - 1) * perPage + beginAt
            });
        }));
const Pagination = ({ beginAt =1 , rounded =false , firstAndLast =true , icons =false , next ="Next" , perPage =1 , prev ="Previous" , size ="default" , className =null , position , total , onPageChange , ...rest })=>{
    const pages = Math.ceil(total / perPage);
    const active = Math.floor(position / perPage) + 1;
    const changePage = (e, newPosition)=>{
        if (typeof onPageChange === "function") onPageChange(e, newPosition);
    };
    return /*#__PURE__*/ React.createElement(PaginationContext.Provider, {
        value: {
            active,
            beginAt,
            changePage,
            firstAndLast,
            icons,
            next,
            perPage,
            position,
            prev,
            total
        }
    }, /*#__PURE__*/ React.createElement("ul", _extends({
        className: `pagination${size !== "default" ? ` pagination--${size}` : ""}${rounded ? " pagination--rounded" : ""}${className ? ` ${className}` : ""}`
    }, rest), /*#__PURE__*/ React.createElement(FirstPrev, null), active < 4 || pages === 4 ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Pages, {
        start: 1,
        finish: Math.min(pages, 4)
    }), pages > 4 ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("span", {
        className: "icon-more"
    })), /*#__PURE__*/ React.createElement(Button, {
        content: pages,
        key: `${pages}-page`,
        position: (pages - 1) * perPage + beginAt
    })) : null) : /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Button, {
        active: active === beginAt,
        content: "1",
        key: "1-page",
        position: beginAt
    }), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("span", {
        className: "icon-more"
    })), active < pages - 2 ? /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Pages, {
        start: active - 1,
        finish: active + 1
    }), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("span", {
        className: "icon-more"
    })), /*#__PURE__*/ React.createElement(Button, {
        active: active === pages,
        content: pages,
        key: `${pages}-page`,
        position: (pages - 1) * perPage + beginAt
    })) : /*#__PURE__*/ React.createElement(Pages, {
        start: pages - 3,
        finish: pages
    })), /*#__PURE__*/ React.createElement(NextLast, null)));
};

export { Pagination };
//# sourceMappingURL=index.js.map
