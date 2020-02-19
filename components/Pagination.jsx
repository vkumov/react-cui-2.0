import React from "react";
import PropTypes from "prop-types";

const PaginationContext = React.createContext({});

const Button = ({ active, content, disabled, position }) => (
  <PaginationContext.Consumer>
    {({ changePage }) => (
      <li className={active ? "active" : ""}>
        <a
          className={disabled ? "disabled" : ""}
          onClick={e => changePage(e, position)}
        >
          {content}
        </a>
      </li>
    )}
  </PaginationContext.Consumer>
);

Button.propTypes = {
  active: PropTypes.bool,
  content: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  position: PropTypes.number.isRequired
};

Button.defaultProps = {
  active: false,
  disabled: false
};

const FirstPrev = () => {
  const {
    perPage,
    firstAndLast,
    position,
    icons,
    prev,
    beginAt
  } = React.useContext(PaginationContext);
  const disabled = position < perPage + beginAt;

  const r = [];
  if (icons && firstAndLast)
    r.push(
      <Button
        content={<span className="icon-chevron-left-double" />}
        disabled={disabled}
        key="first-page"
        position={beginAt}
      />
    );

  r.push(
    <Button
      content={icons ? <span className="icon-chevron-left" /> : prev}
      disabled={disabled}
      key="previous-page"
      position={position - perPage}
    />
  );

  return r;
};

const NextLast = () => {
  const {
    beginAt,
    perPage,
    total,
    firstAndLast,
    position,
    icons,
    next
  } = React.useContext(PaginationContext);
  const pages = Math.floor(total / perPage) + 1;
  const disabled = position > total - perPage + beginAt;

  const r = [];
  r.push(
    <Button
      content={icons ? <span className="icon-chevron-right" /> : next}
      disabled={disabled}
      key="next-page"
      position={position + perPage}
    />
  );

  if (icons && firstAndLast)
    r.push(
      <Button
        content={<span className="icon-chevron-right-double" />}
        disabled={disabled}
        key="last-page"
        position={(pages - 1) * perPage + beginAt}
      />
    );

  return r;
};

const Pages = ({ start, finish }) => (
  <PaginationContext.Consumer>
    {({ perPage, active, beginAt }) =>
      [...Array(finish - start + 1)].map((v, i) => {
        const current = start + i;
        return (
          <Button
            active={active === current}
            content={`${current}`}
            key={`${current}-page`}
            position={(current - 1) * perPage + beginAt}
          />
        );
      })
    }
  </PaginationContext.Consumer>
);

Pages.propTypes = {
  start: PropTypes.number.isRequired,
  finish: PropTypes.number.isRequired
};

const Pagination = ({
  size,
  rounded,
  icons,
  next,
  prev,
  position,
  perPage,
  total,
  onPageChange,
  className,
  firstAndLast,
  beginAt,
  ...rest
}) => {
  const pages = Math.ceil(total / perPage);
  const active = Math.floor(position / perPage) + 1;

  const changePage = (e, newPosition) => {
    if (typeof onPageChange === "function") onPageChange(e, newPosition);
  };

  return (
    <PaginationContext.Provider
      value={{
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
      }}
    >
      <ul
        className={`pagination${
          size !== "default" ? ` pagination--${size}` : ""
        }${rounded ? " pagination--rounded" : ""}${
          className ? ` ${className}` : ""
        }`}
        {...rest}
      >
        <FirstPrev />
        {active < 4 || pages === 4 ? (
          <>
            <Pages start={1} finish={Math.min(pages, 4)} />
            {pages > 4 ? (
              <>
                <li>
                  <span className="icon-more" />
                </li>
                <Button
                  content={pages}
                  key={`${pages}-page`}
                  position={(pages - 1) * perPage + beginAt}
                />
              </>
            ) : null}
          </>
        ) : (
          <>
            <Button
              active={active === beginAt}
              content="1"
              key="1-page"
              position={beginAt}
            />
            <li>
              <span className="icon-more" />
            </li>
            {active < pages - 2 ? (
              <>
                <Pages start={active - 1} finish={active + 1} />
                <li>
                  <span className="icon-more" />
                </li>
                <Button
                  active={active === pages}
                  content={pages}
                  key={`${pages}-page`}
                  position={(pages - 1) * perPage + beginAt}
                />
              </>
            ) : (
              <Pages start={pages - 3} finish={pages} />
            )}
          </>
        )}
        <NextLast />
      </ul>
    </PaginationContext.Provider>
  );
};

Pagination.propTypes = {
  size: PropTypes.oneOf(["small", "default", "large"]),
  rounded: PropTypes.bool,
  icons: PropTypes.bool,
  next: PropTypes.node,
  prev: PropTypes.node,
  position: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  total: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  firstAndLast: PropTypes.bool,
  beginAt: PropTypes.number,
  className: PropTypes.string
};

Pagination.defaultProps = {
  beginAt: 1,
  rounded: false,
  firstAndLast: true,
  icons: false,
  next: "Next",
  perPage: 1,
  prev: "Previous",
  size: "default",
  className: null
};

export { Pagination };
