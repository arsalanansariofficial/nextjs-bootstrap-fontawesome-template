import { Children } from 'react';

type T_Show = {
  children: any;
};

type T_When = {
  isTrue: boolean;
  children: any;
};

type T_Else = {
  render?: any;
  children?: any;
};

export function Show(props: T_Show) {
  let when: any = null;
  let otherwise: any = null;

  Children.forEach(props.children, function (children) {
    if (children.props.isTrue === undefined) otherwise = children;
    if (!when && children.props.isTrue) when = children;
  });

  return when || otherwise;
}

Show.When = function ({ isTrue, children }: T_When) {
  return isTrue && children;
};

Show.Else = function ({ render, children }: T_Else) {
  return render || children;
};
