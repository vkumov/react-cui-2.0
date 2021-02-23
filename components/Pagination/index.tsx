import React, { FC, ReactNode } from "react";

interface IPaginationContext {
  active: number;
  beginAt: number;
  changePage: (e, position: number) => void;
  firstAndLast: boolean;
  icons: boolean;
  next: ReactNode;
  perPage: number;
  position: number;
  prev: ReactNode;
  total: number;
}

const PaginationContext = React.createContext<IPaginationContext>(null);

type ButtonProps = {
  active?: boolean;
  content: ReactNode;
  disabled?: boolean;
  position: number;
};

const Button: FC<ButtonProps> = ({
  content,
  position,
  active = false,
  disabled = false,
}) => (
  <PaginationContext.Consumer>
    {({ changePage }) => (
      <li className={active ? "active" : ""}>
        <a
          className={disabled ? "disabled" : ""}
          onClick={(e) => changePage(e, position)}
        >
          {content}
        </a>
      </li>
    )}
  </PaginationContext.Consumer>
);

const FirstPrev = (): JSX.Element => {
  const {
    perPage,
    firstAndLast,
    position,
    icons,
    prev,
    beginAt,
  } = React.useContext(PaginationContext);
  const disabled = position < perPage + beginAt;

  const r: JSX.Element[] = [];
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

  return <>{r}</>;
};

const NextLast = (): JSX.Element => {
  const {
    beginAt,
    perPage,
    total,
    firstAndLast,
    position,
    icons,
    next,
  } = React.useContext(PaginationContext);
  const pages = Math.floor(total / perPage) + 1;
  const disabled = position > total - perPage + beginAt;

  const r: JSX.Element[] = [];
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

  return <>{r}</>;
};

type PagesProps = {
  start: number;
  finish: number;
};

const Pages: FC<PagesProps> = ({ start, finish }) => (
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

export type PaginationProps = {
  size?: "small" | "default" | "large";
  rounded?: boolean;
  icons?: boolean;
  next?: ReactNode;
  prev?: ReactNode;
  position: number;
  perPage?: number;
  total: number;
  onPageChange: (e, position: number) => void;
  firstAndLast?: boolean;
  beginAt?: number;
  className?: string;
};

const Pagination: FC<PaginationProps> = ({
  beginAt = 1,
  rounded = false,
  firstAndLast = true,
  icons = false,
  next = "Next",
  perPage = 1,
  prev = "Previous",
  size = "default",
  className = null,
  position,
  total,
  onPageChange,
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
        total,
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

export { Pagination };
