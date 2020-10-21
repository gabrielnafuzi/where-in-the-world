export const themes = {
  light: {
    background: '#fafafa',
    element: '#fff',
    'text-color': '#111517',
    'input-text': '#b3b3b3',
  },

  dark: {
    background: '#202c37',
    element: '#2b3945',
    'text-color': '#fff',
    'input-text': '#fff',
  },
};

export type ThemeName = keyof typeof themes;
export type ThemeType = typeof themes.light | typeof themes.dark;
