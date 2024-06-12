import { Children } from 'react';
import { T_Each } from '../types/types';

export default function Each({ of, render }: T_Each) {
  return Children.toArray(
    of.map(function (item: any, index: number) {
      return render(item, index);
    })
  );
}
