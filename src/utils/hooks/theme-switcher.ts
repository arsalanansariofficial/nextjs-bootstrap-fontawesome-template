import { useEffect, useState } from 'react';

export default function useThemeSwitcher() {
  const [day, setDay] = useState<boolean>(false);

  useEffect(
    function () {
      if (!day) document.querySelector('body')!.classList.add('dark');
      else document.querySelector('body')!.classList.remove('dark');
    },
    [day]
  );

  function toggleTheme() {
    setDay(function (prev) {
      return !prev;
    });
  }

  return { day, toggleTheme };
}
