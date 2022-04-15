import React, { cloneElement } from 'react';
import { appendClass } from '../utils';
import Transition from 'react-transition-group/Transition';
import ReactModal from 'react-modal';
import { DisplayIf, ConditionalWrapper } from '../Conditional';
import { Button } from '../Button';
import { Input } from '../Input';
import { eventManager } from '../utils/eventManager';

function _extends$4() {
    _extends$4 = Object.assign || function(target) {
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
    return _extends$4.apply(this, arguments);
}
function _objectWithoutProperties$3(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$3(source, excluded);
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
function _objectWithoutPropertiesLoose$3(source, excluded) {
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
var ModalHeader = function(_param)  {
    var _className = _param.className, className = _className === void 0 ? null : _className, children = _param.children, props = _objectWithoutProperties$3(_param, [
        "className",
        "children"
    ]);
    return React.createElement("div", _extends$4({
        className: "modal__header".concat(appendClass(className))
    }, props), children);
};

function _extends$3() {
    _extends$3 = Object.assign || function(target) {
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
    return _extends$3.apply(this, arguments);
}
function _objectWithoutProperties$2(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$2(source, excluded);
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
function _objectWithoutPropertiesLoose$2(source, excluded) {
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
var ModalFooter = function(_param)  {
    var _className = _param.className, className = _className === void 0 ? null : _className, children = _param.children, props = _objectWithoutProperties$2(_param, [
        "className",
        "children"
    ]);
    return React.createElement("div", _extends$3({
        className: "modal__footer".concat(appendClass(className))
    }, props), children);
};

function _extends$2() {
    _extends$2 = Object.assign || function(target) {
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
    return _extends$2.apply(this, arguments);
}
function _objectWithoutProperties$1(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose$1(source, excluded);
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
function _objectWithoutPropertiesLoose$1(source, excluded) {
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
var ModalBody = function(_param)  {
    var _className = _param.className, className = _className === void 0 ? null : _className, children = _param.children, props = _objectWithoutProperties$1(_param, [
        "className",
        "children"
    ]);
    return React.createElement("div", _extends$2({
        className: "modal__body".concat(appendClass(className))
    }, props), children);
};

function _arrayLikeToArray$3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$3(arr) {
    if (Array.isArray(arr)) return arr;
}
function _extends$1() {
    _extends$1 = Object.assign || function(target) {
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
    return _extends$1.apply(this, arguments);
}
function _iterableToArrayLimit$3(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$3() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _slicedToArray$3(arr, i) {
    return _arrayWithHoles$3(arr) || _iterableToArrayLimit$3(arr, i) || _unsupportedIterableToArray$3(arr, i) || _nonIterableRest$3();
}
function _unsupportedIterableToArray$3(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}
var Modal = function(_param) {
    var _size = _param.size, size = _size === void 0 ? null : _size, _autoClose = _param.autoClose, autoClose = _autoClose === void 0 ? true : _autoClose, _animationDuration = _param.animationDuration, animationDuration = _animationDuration === void 0 ? 250 : _animationDuration, _closeIcon = _param.closeIcon, closeIcon = _closeIcon === void 0 ? false : _closeIcon, _title = _param.title, title = _title === void 0 ? null : _title, _closeHandle = _param.closeHandle, closeHandle = _closeHandle === void 0 ? null : _closeHandle, _left = _param.left, left = _left === void 0 ? false : _left, _transitionEvents = _param.transitionEvents, transitionEvents = _transitionEvents === void 0 ? null : _transitionEvents, _dialogProps = _param.dialogProps, dialogProps = _dialogProps === void 0 ? null : _dialogProps, _contentProps = _param.contentProps, contentProps = _contentProps === void 0 ? null : _contentProps, _maximize = _param.maximize, maximize = _maximize === void 0 ? false : _maximize, children = _param.children, isOpen = _param.isOpen, props = _objectWithoutProperties(_param, [
        "size",
        "autoClose",
        "animationDuration",
        "closeIcon",
        "title",
        "closeHandle",
        "left",
        "transitionEvents",
        "dialogProps",
        "contentProps",
        "maximize",
        "children",
        "isOpen"
    ]);
    var ref = _slicedToArray$3(React.useState(false), 2), maximized = ref[0], setMaximized = ref[1];
    React.useEffect(function() {
        return setMaximized(false);
    }, [
        isOpen
    ]);
    var realSize = React.useMemo(function() {
        return maximized ? "full" : size;
    }, [
        maximized,
        size
    ]);
    var maximizeCb = React.useCallback(function() {
        setMaximized(function(curr) {
            return !curr;
        });
    }, []);
    return /*#__PURE__*/ React.createElement(Transition, _extends$1({
        in: isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        timeout: animationDuration
    }, transitionEvents), function(state) {
        return /*#__PURE__*/ React.createElement(ReactModal, _extends$1({}, props, {
            onRequestClose: autoClose && closeHandle ? closeHandle : undefined,
            overlayClassName: "modal-backdrop",
            isOpen: [
                "entering",
                "entered"
            ].includes(state),
            className: "modal".concat(appendClass(realSize, "modal--".concat(realSize))).concat(appendClass(left, "modal--left")),
            closeTimeoutMS: typeof animationDuration === "object" ? animationDuration.exit : animationDuration
        }), /*#__PURE__*/ React.createElement("div", _extends$1({
            className: "modal__dialog"
        }, dialogProps, {
            onClick: function(e) {
                return e.stopPropagation();
            }
        }), /*#__PURE__*/ React.createElement("div", _extends$1({
            className: "modal__content"
        }, contentProps), /*#__PURE__*/ React.createElement(DisplayIf, {
            condition: !!(closeIcon && closeHandle) || maximize
        }, /*#__PURE__*/ React.createElement(ConditionalWrapper, {
            condition: !!(closeIcon && closeHandle) && maximize,
            wrapper: /*#__PURE__*/ React.createElement("div", {
                className: "modal__close"
            })
        }, Boolean(maximize) && /*#__PURE__*/ React.createElement("a", {
            className: "".concat(appendClass(!(closeIcon && closeHandle), "modal__close")).concat(appendClass(closeIcon && closeHandle, "qtr-margin-right")),
            onClick: maximizeCb
        }, /*#__PURE__*/ React.createElement("span", {
            className: maximized ? "icon-minimize" : "icon-maximize"
        })), Boolean(closeIcon && closeHandle) && /*#__PURE__*/ React.createElement("a", {
            className: !maximize ? "modal__close" : "",
            onClick: closeHandle
        }, /*#__PURE__*/ React.createElement("span", {
            className: "icon-close"
        })))), Boolean(title) && /*#__PURE__*/ React.createElement(ModalHeader, null, /*#__PURE__*/ React.createElement("h1", {
            className: "modal__title"
        }, title)), children)));
    });
};
Modal.Small = function(props) {
    return /*#__PURE__*/ React.createElement(Modal, _extends$1({}, props, {
        size: "small"
    }));
};
Modal.Large = function(props) {
    return /*#__PURE__*/ React.createElement(Modal, _extends$1({}, props, {
        size: "large"
    }));
};
Modal.Full = function(props) {
    return /*#__PURE__*/ React.createElement(Modal, _extends$1({}, props, {
        size: "full"
    }));
};
Modal.Fluid = function(props) {
    return /*#__PURE__*/ React.createElement(Modal, _extends$1({}, props, {
        size: "fluid"
    }));
};
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

var runtime = {exports: {}};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (module) {
var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
}(runtime));

var regeneratorRuntime$1 = runtime.exports;

function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$2(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator$3(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep$3(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterableToArrayLimit$2(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$2() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$2(arr, i) {
    return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
}
function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}
var ConfirmationModal = function(param) {
    var _isOpen = param.isOpen, isOpen = _isOpen === void 0 ? false : _isOpen, _confirmType = param.confirmType, confirmType = _confirmType === void 0 ? "primary" : _confirmType, _autoClose = param.autoClose, autoClose = _autoClose === void 0 ? true : _autoClose, _confirmText = param.confirmText, confirmText = _confirmText === void 0 ? "Confirm" : _confirmText, confirmHandle = param.confirmHandle, closeHandle = param.closeHandle, prompt = param.prompt, _dontAskAgain = param.dontAskAgain, dontAskAgain = _dontAskAgain === void 0 ? {
        show: false
    } : _dontAskAgain;
    var ref = _slicedToArray$2(React.useState(false), 2), doing = ref[0], setDoing = ref[1];
    var ref1 = _slicedToArray$2(React.useState(false), 2), dontAsk = ref1[0], setDontAsk = ref1[1];
    return /*#__PURE__*/ React.createElement(Modal, {
        isOpen: isOpen,
        closeIcon: true,
        closeHandle: closeHandle,
        autoClose: autoClose,
        title: "Confirmation"
    }, /*#__PURE__*/ React.createElement(ModalBody, null, prompt, (dontAskAgain === null || dontAskAgain === void 0 ? void 0 : dontAskAgain.show) ? /*#__PURE__*/ React.createElement("div", {
        className: "form-group"
    }, /*#__PURE__*/ React.createElement("label", {
        className: "checkbox"
    }, /*#__PURE__*/ React.createElement("input", {
        type: "checkbox",
        checked: dontAsk,
        onChange: function(e) {
            setDontAsk(e.target.checked);
        }
    }), /*#__PURE__*/ React.createElement("span", {
        className: "checkbox__input"
    }), /*#__PURE__*/ React.createElement("span", {
        className: "checkbox__label"
    }, dontAskAgain.text || "Don't ask again"))) : null), /*#__PURE__*/ React.createElement(ModalFooter, null, /*#__PURE__*/ React.createElement(Button.Light, {
        onClick: closeHandle
    }, "Close"), /*#__PURE__*/ React.createElement(Button, {
        color: confirmType,
        disabled: doing,
        onClick: _asyncToGenerator$3(regeneratorRuntime$1.mark(function _callee() {
            return regeneratorRuntime$1.wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        setDoing(true);
                        _ctx.next = 3;
                        return confirmHandle(dontAsk);
                    case 3:
                        if (!_ctx.sent) {
                            _ctx.next = 5;
                            break;
                        }
                        setDoing(false);
                    case 5:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }))
    }, confirmText, doing ? /*#__PURE__*/ React.createElement("span", {
        className: "icon-animation spin qtr-margin-left"
    }) : null)));
};

function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles$1(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator$2(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep$2(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterableToArrayLimit$1(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest$1() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray$1(arr, i) {
    return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
}
function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
function PromptModal(param) {
    var title = param.title, question = param.question, cb = param.onSave, onClose = param.onClose, initial = param.initial, type = param.type, isOpen = param.isOpen, hint = param.hint, validate = param.validate;
    var ref = _slicedToArray$1(React.useState(initial), 2), val = ref[0], setVal = ref[1];
    var ref1 = _slicedToArray$1(React.useState(false), 2), doing = ref1[0], setDoing = ref1[1];
    var onSave = React.useCallback(_asyncToGenerator$2(regeneratorRuntime$1.mark(function _callee() {
        return regeneratorRuntime$1.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    _ctx.t0 = typeof validate === "function";
                    if (!_ctx.t0) {
                        _ctx.next = 5;
                        break;
                    }
                    _ctx.next = 4;
                    return validate(val);
                case 4:
                    _ctx.t0 = !_ctx.sent;
                case 5:
                    if (!_ctx.t0) {
                        _ctx.next = 7;
                        break;
                    }
                    return _ctx.abrupt("return");
                case 7:
                    setDoing(true);
                    _ctx.next = 10;
                    return cb(val);
                case 10:
                    setDoing(false);
                    onClose();
                case 12:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    })), [
        onClose,
        cb,
        val,
        validate
    ]);
    React.useEffect(function() {
        return setVal(initial);
    }, [
        initial
    ]);
    var inpRef = React.useRef(undefined);
    React.useEffect(function() {
        if (isOpen && inpRef.current) inpRef.current.focus();
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ React.createElement(Modal, {
        isOpen: isOpen,
        closeIcon: true,
        closeHandle: onClose,
        title: title
    }, /*#__PURE__*/ React.createElement(ModalBody, null, /*#__PURE__*/ React.createElement(Input, {
        type: type,
        onChange: function(e) {
            return setVal(e.target.value);
        },
        onKeyUp: function(e) {
            if (e.key === "Enter") {
                onSave();
            }
        },
        name: "promptInput",
        value: val,
        label: /*#__PURE__*/ React.createElement(React.Fragment, null, question, /*#__PURE__*/ React.createElement(DisplayIf, {
            condition: !!hint && typeof hint === "string"
        }, /*#__PURE__*/ React.createElement("span", {
            "data-balloon": hint,
            "data-balloon-length": "large",
            "data-balloon-pos": "up"
        }, /*#__PURE__*/ React.createElement("span", {
            className: "icon-question-circle qtr-margin-left",
            style: {
                cursor: "help"
            }
        })))),
        ref: inpRef
    })), /*#__PURE__*/ React.createElement(ModalFooter, null, /*#__PURE__*/ React.createElement(Button, {
        color: "light",
        onClick: onClose,
        disabled: doing
    }, "Close"), /*#__PURE__*/ React.createElement(Button, {
        color: "primary",
        onClick: onSave,
        disabled: doing
    }, "OK", doing ? /*#__PURE__*/ React.createElement("span", {
        className: "icon-animation spin qtr-margin-left"
    }) : null)));
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator$1(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
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
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var ConfirmationListener = function() {
    var ref = _slicedToArray(React.useState([]), 2), modals = ref[0], setModals = ref[1];
    var addModal = React.useCallback(function(modal) {
        return setModals(function(curr) {
            return _toConsumableArray(curr).concat([
                _objectSpread({
                    id: Date.now(),
                    shown: true
                }, modal)
            ]);
        });
    }, []);
    var hideModal = React.useCallback(function(id) {
        setModals(function(curr) {
            return curr.map(function(m) {
                return m.id === id ? _objectSpread({}, m, {
                    shown: false
                }) : m;
            });
        });
    }, []);
    var deleteModal = React.useCallback(function(id) {
        setModals(function(curr) {
            return curr.filter(function(m) {
                if (m.id === id && typeof m.onClosed === "function") m.onClosed();
                return m.id !== id;
            });
        });
    }, []);
    var closeModal = React.useCallback(function(id, cb) {
        hideModal(id);
        setTimeout(function() {
            return deleteModal(id);
        }, 500);
        if (cb) cb();
    }, [
        hideModal,
        deleteModal
    ]);
    React.useEffect(function() {
        var cb = function(m) {
            return addModal(m);
        };
        eventManager.on("showModal", cb);
        return function() {
            eventManager.off("showModal", cb);
        };
    }, [
        addModal
    ]);
    if (!modals.length) return null;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, modals.map(function(modal) {
        if (modal.modalType === "dynamic") return /*#__PURE__*/ React.createElement(Modal, _extends({}, modal.modalProps, {
            key: modal.id,
            isOpen: modal.shown,
            closeHandle: function() {
                return closeModal(modal.id, modal.onModalClose);
            },
            title: modal.title
        }), modal.fullBody ? typeof modal.fullBody === "function" ? modal.fullBody({
            close: function() {
                return closeModal(modal.id, modal.onModalClose);
            }
        }) : /*#__PURE__*/ cloneElement(modal.fullBody, {
            close: function() {
                return closeModal(modal.id, modal.onModalClose);
            }
        }) : /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(ModalBody, null, modal.body), /*#__PURE__*/ React.createElement(ModalFooter, null, modal.buttons.map(function(button, idx) {
            return /*#__PURE__*/ React.createElement(Button, {
                key: idx,
                color: button.color || "light",
                onClick: function(e) {
                    if (typeof button.onClick === "function") button.onClick(e, function() {
                        return closeModal(modal.id, modal.onModalClose);
                    });
                    else closeModal(modal.id, modal.onModalClose);
                }
            }, button.text);
        }))));
        if (modal.modalType === "notification") return /*#__PURE__*/ React.createElement(Modal, {
            key: modal.id,
            isOpen: modal.shown,
            closeIcon: true,
            closeHandle: function() {
                return closeModal(modal.id, modal.onModalClose);
            },
            title: modal.title
        }, /*#__PURE__*/ React.createElement(ModalBody, null, modal.body), /*#__PURE__*/ React.createElement(ModalFooter, null, /*#__PURE__*/ React.createElement(Button, {
            color: modal.buttonColor || "light",
            onClick: function() {
                return closeModal(modal.id, modal.onModalClose);
            }
        }, modal.button)));
        if (modal.modalType === "prompt") {
            if (typeof modal.options !== "undefined") {
                var _options = modal.options, _initial = _options.initial, initial = _initial === void 0 ? "" : _initial, _type = _options.type, type = _type === void 0 ? "text" : _type, _hint = _options.hint, hint = _hint === void 0 ? undefined : _hint, _validate = _options.validate, validate = _validate === void 0 ? undefined : _validate;
                return /*#__PURE__*/ React.createElement(PromptModal, {
                    key: modal.id,
                    isOpen: modal.shown,
                    onClose: function() {
                        return closeModal(modal.id, modal.onModalClose);
                    },
                    onSave: modal.cb,
                    title: modal.title,
                    question: modal.question,
                    initial: initial,
                    type: type,
                    hint: hint,
                    validate: validate
                });
            }
            return /*#__PURE__*/ React.createElement(PromptModal, {
                key: modal.id,
                isOpen: modal.shown,
                onClose: function() {
                    return closeModal(modal.id, modal.onModalClose);
                },
                onSave: modal.cb,
                title: modal.title,
                question: modal.question,
                initial: modal.initial,
                type: modal.type,
                hint: modal.hint
            });
        }
        if (modal.modalType === "confirmation") return /*#__PURE__*/ React.createElement(ConfirmationModal, {
            key: modal.id,
            isOpen: modal.shown,
            prompt: modal.prompt,
            confirmHandle: function() {
                var _ref = _asyncToGenerator$1(regeneratorRuntime$1.mark(function _callee(dontAskAgain) {
                    var r;
                    return regeneratorRuntime$1.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return modal.onConfirm(dontAskAgain);
                            case 2:
                                r = _ctx.sent;
                                if (r) closeModal(modal.id, modal.onModalClose);
                                return _ctx.abrupt("return", true);
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }));
                return function(dontAskAgain) {
                    return _ref.apply(this, arguments);
                };
            }(),
            closeHandle: function() {
                return closeModal(modal.id, modal.onModalClose);
            },
            confirmText: modal.confirmText,
            confirmType: modal.confirmType,
            dontAskAgain: modal.dontAskAgain
        });
        return null;
    }));
};

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function confirmation(prompt1, onConfirm) {
    var confirmType = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "primary", confirmText = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "Confirm", dontAskAgain = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
        show: false
    };
    if (!prompt1) throw new Error("Prompt must be specified");
    if (!onConfirm || typeof onConfirm !== "function") throw new Error("onConfirm must be specified and must be a function");
    eventManager.emit("showModal", {
        modalType: "confirmation",
        prompt: /*#__PURE__*/ React.createElement("p", null, prompt1),
        onConfirm: onConfirm,
        confirmText: confirmText,
        confirmType: confirmType,
        dontAskAgain: dontAskAgain
    });
}
var notificationModal = function(title, body) {
    var buttonColor = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "light", button = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "OK";
    if (!title || !body) throw new Error("Title and body must be specified");
    return new Promise(function(resolve) {
        eventManager.emit("showModal", {
            modalType: "notification",
            title: title,
            body: body,
            buttonColor: buttonColor,
            button: button,
            onClosed: resolve
        });
    });
};
function prompt(title, question, cb, initial) {
    var type = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "text", hint = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : undefined;
    if (!title || !question) throw new Error("Title and question must be specified");
    if (typeof initial === "object") {
        eventManager.emit("showModal", {
            modalType: "prompt",
            title: title,
            question: question,
            cb: cb,
            options: initial
        });
        return;
    }
    eventManager.emit("showModal", {
        modalType: "prompt",
        title: title,
        initial: initial,
        type: type,
        question: question,
        cb: cb,
        hint: hint
    });
}
var dynamicModal = function() {
    var _ref = _asyncToGenerator(regeneratorRuntime$1.mark(function _callee(param) {
        var title, _fullBody, fullBody, _body, body, _buttons, buttons, _modalProps, modalProps;
        return regeneratorRuntime$1.wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    title = param.title, _fullBody = param.fullBody, fullBody = _fullBody === void 0 ? null : _fullBody, _body = param.body, body = _body === void 0 ? null : _body, _buttons = param.buttons, buttons = _buttons === void 0 ? [] : _buttons, _modalProps = param.modalProps, modalProps = _modalProps === void 0 ? {} : _modalProps;
                    return _ctx.abrupt("return", new Promise(function(resolve) {
                        eventManager.emit("showModal", {
                            modalType: "dynamic",
                            title: title,
                            fullBody: fullBody,
                            body: body,
                            buttons: buttons,
                            modalProps: modalProps,
                            onModalClose: resolve
                        });
                    }));
                case 2:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return function dynamicModal(_) {
        return _ref.apply(this, arguments);
    };
}();

export { ConfirmationListener, ConfirmationModal, ConfirmationListener as DynamicModal, Modal, ModalBody, ModalFooter, ModalHeader, PromptModal, confirmation, dynamicModal, notificationModal as notification, notificationModal, prompt };
//# sourceMappingURL=index.js.map
