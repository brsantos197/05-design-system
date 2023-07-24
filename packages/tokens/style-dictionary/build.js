const fs = require('fs')
const _ = require('lodash')
const path = require('path')
const StyleDictionary = require('style-dictionary').extend(
  path.join(__dirname, '/config.js'),
)

StyleDictionary.registerTransform({
  type: `value`,
  name: `space/pxToRem`,
  matcher: (token) => token?.attributes?.category === 'space',
  transformer: (token) => {
    const spaceValues = Object.values(token.value).map(
      (spaceValue) => `${spaceValue / 16}rem`,
    )
    if (spaceValues.every((item) => item === spaceValues[0])) {
      return spaceValues[0]
    } else if (
      spaceValues[0] === spaceValues[1] &&
      spaceValues[2] === spaceValues[3]
    ) {
      return `${spaceValues[0]} ${spaceValues[2]}`
    } else if (
      spaceValues[0] !== spaceValues[1] &&
      spaceValues[2] === spaceValues[3]
    ) {
      return `${spaceValues[0]} ${spaceValues[2]} ${spaceValues[1]}`
    } else {
      return spaceValues.join(' ')
    }
    // token.value will be resolved and transformed at this point
  },
})

StyleDictionary.registerTransform({
  type: `value`,
  name: `radii/px`,
  matcher: (token) => token?.attributes?.category === 'radii',
  transformer: (token) => {
    const raddis = Object.values(token.value).map((raddi) => `${raddi}px`)
    raddis.shift()
    if (raddis.every((item) => item === raddis[0])) {
      return raddis[0]
    } else if (raddis[0] === raddis[1] && raddis[2] === raddis[3]) {
      return `${raddis[0]} ${raddis[2]}`
    } else if (raddis[0] !== raddis[1] && raddis[2] === raddis[3]) {
      return `${raddis[0]} ${raddis[2]} ${raddis[1]}`
    } else {
      return raddis.join(' ')
    }
    // token.value will be resolved and transformed at this point
  },
})

StyleDictionary.registerTransformGroup({
  name: 'ts',
  // notice: here the "size/px" transform is not the pre-defined one, but the custom one we have declared above
  transforms: [
    'attribute/cti',
    'name/cti/pascal',
    'size/rem',
    'space/pxToRem',
    'radii/px',
    'color/hex',
  ],
})

StyleDictionary.registerTransformGroup({
  name: 'custom/css',
  // notice: here the "size/px" transform is not the pre-defined one, but the custom one we have declared above
  transforms: [
    'attribute/cti',
    'name/cti/kebab',
    'time/seconds',
    'content/icon',
    'size/rem',
    'color/css',
    'space/pxToRem',
    'radii/px',
  ],
})

StyleDictionary.registerFilter({
  name: 'isColor',
  matcher: (token) => {
    return token.attributes.category === 'color'
  },
})

StyleDictionary.registerFilter({
  name: 'isSpace',
  matcher: (token) => {
    return token.attributes.category === 'space'
  },
})

StyleDictionary.registerFilter({
  name: 'isTypography',
  matcher: (token) => {
    return token.attributes.category === 'typography'
  },
})

StyleDictionary.registerFilter({
  name: 'isRadii',
  matcher: (token) => {
    return token.attributes.category === 'radii'
  },
})

// These formatting functions are using the Lodash "template" syntax
StyleDictionary.registerFormat({
  name: 'index/ts',
  formatter: _.template(
    fs.readFileSync(path.join(__dirname, '/templates/ts.index.template')),
  ),
})

StyleDictionary.registerFormat({
  name: 'token/ts',
  formatter: _.template(
    fs.readFileSync(path.join(__dirname, '/templates/ts.token.template')),
  ),
})

StyleDictionary.buildAllPlatforms()

console.log('\n==============================================')
console.log('\nBuild completed!')
