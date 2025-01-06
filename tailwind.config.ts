import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'primary': '#1DA1F2',
        'dark': '#14171A',
        'light': '#AAB8C2',
        'lighter': '#E1E8ED',
        'lightest': '#F5F8FA',
      }
    }
  },
  plugins: [],
} satisfies Config