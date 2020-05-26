import React from 'react';
import PropTypes from 'prop-types';
import { _ as _objectWithoutProperties, a as _extends } from '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass, e as eventManager, E as EVENTS } from '../index-be24eb93.js';
import { s as styleInject } from '../style-inject.es-1f59c1d0.js';
import { Button } from './Button.js';
import 'formik';
import { DisplayIf, ConditionalWrapper } from './Conditional.js';
import './InputHelpBlock.js';
import { Input } from './Input.js';
import { _ as _inheritsLoose, a as _objectWithoutPropertiesLoose } from '../inheritsLoose-5aebf23c.js';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

var config = {
  disabled: false
};

var timeoutsShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : null;

var TransitionGroupContext = React.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = ReactDOM.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      // allows for nested Transitions
      return React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, children(status, childProps));
    }

    var child = React.Children.only(children);
    return (// allows for nested Transitions
      React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, React.cloneElement(child, childProps))
    );
  };

  return Transition;
}(React.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the
   * `<Transition>` component mounts. If you want to transition on the first
   * mount set `appear` to `true`, and the component will transition in as soon
   * as the `<Transition>` mounts.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var css = "@-webkit-keyframes fade-out{0%{opacity:1}to{opacity:0}}@keyframes fade-out{0%{opacity:1}to{opacity:0}}.cui .modal-backdrop{background:rgba(196,199,204,.65);pointer-events:all;opacity:1;transition:opacity .15s linear;outline:none}.cui .ReactModal__Overlay--before-close .modal__dialog{-webkit-animation:blowdown .3s cubic-bezier(.165,.84,.44,1) forwards,fade-out .25s linear 1!important;animation:blowdown .3s cubic-bezier(.165,.84,.44,1) forwards,fade-out .25s linear 1!important}.cui .ReactModal__Overlay--before-close{opacity:0!important}body.cui .modal .modal__content div.modal__close>a{color:var(--cui-inactive-color)}body.cui .modal .modal__content div.modal__close>a:hover{color:var(--cui-active-color);text-decoration:none}";
styleInject(css);

const ModalHeader = (_ref) => {
  let {
    className,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement("div", _extends({
    className: `modal__header${className ? ` ${className}` : ""}`
  }, props), children);
};
ModalHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
ModalHeader.defaultProps = {
  className: null
};
const ModalBody = (_ref2) => {
  let {
    className,
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["className", "children"]);

  return React.createElement("div", _extends({
    className: `modal__body${className ? ` ${className}` : ""}`
  }, props), children);
};
ModalBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
ModalBody.defaultProps = {
  className: null
};
const ModalFooter = (_ref3) => {
  let {
    className,
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["className", "children"]);

  return React.createElement("div", _extends({
    className: `modal__footer${className ? ` ${className}` : ""}`
  }, props), children);
};
ModalFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
ModalFooter.defaultProps = {
  className: null
};
const Modal = (_ref4) => {
  let {
    size,
    closeIcon,
    closeHandle,
    title,
    left,
    children,
    autoClose,
    isOpen,
    animationDuration,
    transitionEvents,
    dialogProps,
    contentProps,
    maximize
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["size", "closeIcon", "closeHandle", "title", "left", "children", "autoClose", "isOpen", "animationDuration", "transitionEvents", "dialogProps", "contentProps", "maximize"]);

  const [maximized, setMaximized] = React.useState(false);
  React.useEffect(() => setMaximized(false), [isOpen]);
  const realSize = React.useMemo(() => maximized ? "full" : size, [maximized, size]);
  const maximizeCb = React.useCallback(() => {
    setMaximized(curr => !curr);
  }, []);
  return React.createElement(Transition, _extends({
    in: isOpen,
    mountOnEnter: true,
    unmountOnExit: true,
    timeout: animationDuration
  }, transitionEvents), state => React.createElement(ReactModal, _extends({}, props, {
    autoClose: autoClose,
    onRequestClose: autoClose && closeHandle ? closeHandle : undefined,
    overlayClassName: "modal-backdrop",
    isOpen: ["entering", "entered"].includes(state),
    className: `modal${appendClass(realSize, `modal--${realSize}`)}${appendClass(left, "modal--left")}`,
    closeTimeoutMS: typeof animationDuration === "object" ? animationDuration.exiting : animationDuration
  }), React.createElement("div", _extends({
    className: "modal__dialog"
  }, dialogProps, {
    onClick: e => e.stopPropagation()
  }), React.createElement("div", _extends({
    className: "modal__content"
  }, contentProps), React.createElement(DisplayIf, {
    condition: !!(closeIcon && closeHandle) || maximize
  }, React.createElement(ConditionalWrapper, {
    condition: !!(closeIcon && closeHandle) && maximize,
    wrapper: React.createElement("div", {
      className: "modal__close"
    })
  }, React.createElement(DisplayIf, {
    condition: maximize
  }, React.createElement("a", {
    className: `${appendClass(!(closeIcon && closeHandle), "modal__close")}${appendClass(closeIcon && closeHandle, "qtr-margin-right")}`,
    onClick: maximizeCb
  }, React.createElement("span", {
    className: maximized ? "icon-minimize" : "icon-maximize"
  }))), React.createElement(DisplayIf, {
    condition: !!(closeIcon && closeHandle)
  }, React.createElement("a", {
    className: !maximize ? "modal__close" : "",
    onClick: closeHandle
  }, React.createElement("span", {
    className: "icon-close"
  }))))), React.createElement(DisplayIf, {
    condition: !!title
  }, React.createElement(ModalHeader, null, React.createElement("h1", {
    className: "modal__title"
  }, title))), children))));
};
Modal.propTypes = {
  size: PropTypes.oneOf([false, "small", "default", "large", "full", "fluid"]),
  closeIcon: PropTypes.bool,
  closeHandle: PropTypes.func,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  autoClose: PropTypes.bool,
  left: PropTypes.bool,
  animationDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    entering: PropTypes.number,
    exiting: PropTypes.number
  })]),
  children: PropTypes.node.isRequired,
  transitionEvents: PropTypes.objectOf(PropTypes.func),
  dialogProps: PropTypes.shape({}),
  contentProps: PropTypes.shape({}),
  maximize: PropTypes.bool
};
Modal.defaultProps = {
  size: false,
  autoClose: true,
  animationDuration: 250,
  closeIcon: false,
  title: null,
  closeHandle: null,
  left: false,
  transitionEvents: null,
  dialogProps: null,
  contentProps: null,
  maximize: false
};

Modal.Small = props => React.createElement(Modal, _extends({}, props, {
  size: "small"
}));

Modal.Large = props => React.createElement(Modal, _extends({}, props, {
  size: "large"
}));

Modal.Full = props => React.createElement(Modal, _extends({}, props, {
  size: "full"
}));

Modal.Fluid = props => React.createElement(Modal, _extends({}, props, {
  size: "fluid"
}));

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
const ConfirmationModal = ({
  isOpen,
  confirmHandle,
  closeHandle,
  prompt,
  confirmType,
  confirmText,
  autoClose
}) => {
  const [doing, setDoing] = React.useState(false);
  return React.createElement(Modal, {
    isOpen: isOpen,
    closeIcon: true,
    closeHandle: closeHandle,
    autoClose: autoClose,
    title: "Confirmation"
  }, React.createElement(ModalBody, null, React.createElement("p", null, prompt)), React.createElement(ModalFooter, null, React.createElement(Button.Light, {
    onClick: closeHandle
  }, "Close"), React.createElement(Button, {
    color: confirmType,
    disabled: doing,
    onClick: async () => {
      setDoing(true);
      if (await confirmHandle()) setDoing(false);
    }
  }, confirmText, doing ? React.createElement("span", {
    className: "icon-animation spin qtr-margin-left"
  }) : null)));
};
ConfirmationModal.propTypes = {
  isOpen: PropTypes.bool,
  confirmHandle: PropTypes.func.isRequired,
  closeHandle: PropTypes.func.isRequired,
  prompt: PropTypes.node.isRequired,
  confirmType: PropTypes.string,
  confirmText: PropTypes.string,
  autoClose: PropTypes.bool
};
ConfirmationModal.defaultProps = {
  isOpen: false,
  confirmType: "primary",
  autoClose: true,
  confirmText: "Confirm"
};
const PromptModal = ({
  title,
  question,
  onSave: cb,
  onClose,
  initial,
  type,
  isOpen,
  hint
}) => {
  const [val, setVal] = React.useState(initial);
  const onSave = React.useCallback(() => {
    onClose();
    cb(val);
  }, [onClose, cb, val]);
  React.useLayoutEffect(() => setVal(initial), [initial]);
  return React.createElement(Modal, {
    isOpen: isOpen,
    closeIcon: true,
    closeHandle: onClose,
    title: title
  }, React.createElement(ModalBody, null, React.createElement(Input, {
    type: type,
    form: {
      errors: {},
      touched: {}
    },
    field: {
      onChange: e => setVal(e.target.value),
      name: "promptInput",
      value: val
    },
    label: React.createElement(React.Fragment, null, question, React.createElement(DisplayIf, {
      condition: !!hint && typeof hint === "string"
    }, React.createElement("span", {
      "data-balloon": hint,
      "data-balloon-length": "large",
      "data-balloon-pos": "up"
    }, React.createElement("span", {
      className: "icon-question-circle qtr-margin-left",
      style: {
        cursor: "help"
      }
    }))))
  })), React.createElement(ModalFooter, null, React.createElement(Button, {
    color: "light",
    onClick: onClose
  }, "Close"), React.createElement(Button, {
    color: "primary",
    onClick: onSave
  }, "OK")));
};
PromptModal.propTypes = {
  title: PropTypes.node.isRequired,
  question: PropTypes.node.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func,
  initial: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  hint: PropTypes.node
};
PromptModal.defaultProps = {
  onClose: null,
  initial: null,
  type: "text",
  hint: null
};
const ConfirmationListener = () => {
  const [modal, setModal] = React.useState(null);
  const [modalShown, setModalShown] = React.useState(false);
  React.useEffect(() => {
    eventManager.on(EVENTS.SHOW_MODAL, m => setModal(m));
  }, []);
  React.useEffect(() => {
    if (modal) setModalShown(true);
  }, [modal]);

  const onClose = () => setModalShown(false);

  if (!modal) return null;
  if (modal.modalType === "notification") return React.createElement(Modal, {
    isOpen: modalShown,
    closeIcon: true,
    closeHandle: onClose,
    title: modal.title
  }, React.createElement(ModalBody, null, modal.body), React.createElement(ModalFooter, null, React.createElement(Button, {
    color: modal.buttonColor || "light",
    onClick: onClose
  }, modal.button)));
  if (modal.modalType === "prompt") return React.createElement(PromptModal, {
    isOpen: modalShown,
    onClose: onClose,
    onSave: modal.cb,
    title: modal.title,
    question: modal.question,
    initial: modal.initial,
    type: modal.type,
    hint: modal.hint
  });
  if (modal.modalType === "confirmation") return React.createElement(ConfirmationModal, {
    isOpen: modalShown,
    prompt: modal.prompt,
    confirmHandle: async () => {
      const r = await modal.onConfirm();
      if (r) onClose();
      return true;
    },
    closeHandle: onClose,
    confirmText: modal.confirmText,
    confirmType: modal.confirmType
  });
  return null;
};
const confirmation = (prompt, onConfirm, confirmType = "primary", confirmText = "Confirm") => {
  if (!prompt) throw new Error("Prompt must be specified");
  if (!onConfirm || typeof onConfirm !== "function") throw new Error("onConfirm must be specified and must be a function");
  eventManager.emit(EVENTS.SHOW_MODAL, {
    modalType: "confirmation",
    prompt,
    onConfirm,
    confirmText,
    confirmType
  });
};
const notificationModal = (title, body, buttonColor = "light", button = "OK") => {
  if (!title || !body) throw new Error("Title and body must be specified");
  eventManager.emit(EVENTS.SHOW_MODAL, {
    modalType: "notification",
    title,
    body,
    buttonColor,
    button
  });
};
const prompt = (title, question, cb, initial = "", type = "text", hint = undefined) => {
  if (!title || !question) throw new Error("Title and question must be specified");
  eventManager.emit(EVENTS.SHOW_MODAL, {
    modalType: "prompt",
    title,
    initial,
    type,
    question,
    cb,
    hint
  });
};

export { ConfirmationListener, ConfirmationModal, ConfirmationListener as DynamicModal, Modal, ModalBody, ModalFooter, ModalHeader, PromptModal, confirmation, notificationModal as notification, notificationModal, prompt };
