import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mainFont':['Helvetica Neue'] 
      },
      spacing: {
        '128': '32rem',
      },
      backgroundImage: {
        'hero-image': "url('https://media.licdn.com/dms/image/C4D03AQGLf4MIExmCcA/profile-displayphoto-shrink_800_800/0/1643027474129?e=1705536000&v=beta&t=Naw1SYEdX77xpw3H5TBc3tr9RafMzAJCIH536LCY_Is')",
        'twitter-logo': "url('/twitter-logo.png')",
        'telegram-logo': "url('/telegram.png')",
        'linkedin-logo': "url('/linkedin.png')",

      },
      colors: {
        mainBg: {
          '100': 'rgb(195,195,251)'
        },
        mainText: {
          '100': 'rgb(53,109,137)'
        }
      }
    },
  },
  plugins: [],
}
export default config
