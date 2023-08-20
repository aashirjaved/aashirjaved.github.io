module.exports = {
  siteTitle: 'Aashir Javed',
  siteDescription:
    'Crafting innovative software solutions with 6+ years of expertise across the development lifecycle, driving impactful results and embracing cutting-edge technologies.',
  siteKeywords:
    'Aashir Javed, Aashir, aashir, aashirjaved, software engineer, web developer, javascript, python, java, generativeai, ai, london, uk',
  siteUrl: 'https://aashirjaved.net',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'asfdasfas',
  googleVerification: 'safasfsfas',
  name: 'Aashir Javed',
  location: 'London, United Kingdom',
  email: 'me@aashirjaved.net',
  github: 'https://github.com/aashirjaved',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/aashirjaved',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/aashirjaved/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/aashirjaved',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/aashirjaved',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
