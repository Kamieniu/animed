import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { Children, ReactNode } from 'react';
import { LinkProps } from 'next/dist/client/link';

type Props = {
  children: ReactNode | any;
  activeClassName: string;
};

const ActiveLink = ({
  children,
  activeClassName,
  ...props
}: React.PropsWithChildren<LinkProps> & Props) => {
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
