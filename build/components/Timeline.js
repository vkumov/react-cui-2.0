import React from 'react';
import PropTypes from 'prop-types';
import '../_rollupPluginBabelHelpers-b60338eb.js';
import { a as appendClass } from '../index-be24eb93.js';
import { Icon } from './Icon.js';

const TimelineItem = ({
  icon,
  time,
  children,
  className,
  contentClassName
}) => React.createElement("div", {
  className: `timeline__item${appendClass(className)}`
}, React.createElement("div", {
  className: "timeline__icon"
}, icon), time ? React.createElement("div", {
  className: "timeline__time"
}, time) : null, React.createElement("div", {
  className: `timeline__content${appendClass(contentClassName)}`
}, children));
TimelineItem.propTypes = {
  icon: PropTypes.node,
  time: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  contentClassName: PropTypes.string
};
TimelineItem.defaultProps = {
  icon: React.createElement(Icon, {
    icon: "circle"
  }),
  time: null,
  className: null,
  contentClassName: null
};
const Timeline = ({
  center,
  right,
  className,
  children
}) => React.createElement("div", {
  className: `timeline${appendClass(center, "timeline--centered")}${appendClass(right, "timeline--right")}${appendClass(className)}`
}, children);
Timeline.propTypes = {
  center: PropTypes.bool,
  right: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(TimelineItem), TimelineItem]).isRequired
};
Timeline.defaultProps = {
  center: false,
  right: false,
  className: null
};

export { Timeline, TimelineItem };
