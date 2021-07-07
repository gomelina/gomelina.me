function withOpacity(variableName) {
  // const hsler = /hsl\((.+)\)/i

  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`
    }

    return `hsl(var(${variableName}))`
  }
}

module.exports = {
  purge: {
    content: [
      "./layouts/**/*.html",
      "./content/**/*.md",
      "./content/**/*.html"
    ],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'display': ['Inter']
      },
      colors: {
        'th-primary': withOpacity("--primary"),
        'th-secondary': withOpacity("--secondary"),
        'th-input': withOpacity("--input"),
        'th-muted': withOpacity("--muted"),
        'th-highlight': withOpacity("--highlight"),
        'th-background': withOpacity("--background")
      },
	  scale: {
		'101': '1.01',
		'102': '1.02'
	  }
    },
  },
  variants: {
    extend: {
	  scale: ['hover'],
	  hueRotate: ['hover'],
	  gap: ['hover'],
	  space: ['hover']
	},
  },
  plugins: [],
};
