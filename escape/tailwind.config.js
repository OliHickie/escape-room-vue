/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

export const content = [
  "./index.html",
  "./src/**/*.{vue,js, jsx}",
];
export const theme = { 
  extend: {
    fontFamily: {
      lora: ['"Lora"', ..._fontFamily.sans],
      alegreya: ['"Alegreya"', ..._fontFamily.serif],
      kalam: ['"Kalam"', ..._fontFamily.serif],
    }
  },
};
export const plugins = [];
