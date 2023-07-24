module.exports = {
  source: ['style-dictionary/figma/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'custom/css',
      buildPath: 'dist/css/',
      files: [
        {
          filter: 'isColor',
          destination: 'colors.css',
          format: 'css/variables',
        },
        {
          filter: 'isSpace',
          destination: 'spaces.css',
          format: 'css/variables',
        },
        {
          filter: 'isRadii',
          destination: 'radiis.css',
          format: 'css/variables',
        },
        // {
        //   filter: 'isTypography',
        //   destination: 'typographys.css',
        //   format: 'css/variables',
        // },
      ],
    },
    ts: {
      transformGroup: 'ts',
      buildPath: 'src/',
      files: [
        {
          filter: 'isColor',
          destination: 'colors.ts',
          format: 'token/ts',
        },
        {
          filter: 'isSpace',
          destination: 'spaces.ts',
          format: 'token/ts',
        },
        {
          filter: 'isRadii',
          destination: 'radiis.ts',
          format: 'token/ts',
        },
        // {
        //   filter: 'isTypography',
        //   destination: 'typographys.ts',
        //   format: 'token/ts',
        // },
        {
          destination: 'index.ts',
          format: 'index/ts',
          options: { excludes: ['typography'] },
        },
      ],
    },
  },
}
