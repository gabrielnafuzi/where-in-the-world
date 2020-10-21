import React from 'react';

export default function useComponentVisible(
  setFilterMenu: React.Dispatch<React.SetStateAction<boolean>>
) {
  const ref = React.useRef<HTMLDivElement>(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setFilterMenu(false);
    }
  };

  const handleClickOutside = (event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setFilterMenu(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref };
}
