import { createCherryBombFont } from '@tamagui/font-cherry-bomb'
import { createInterFont } from '@tamagui/font-inter'
import { createMunroFont } from '@tamagui/font-munro'
import { createSilkscreenFont } from '@tamagui/font-silkscreen'
import { shorthands } from '@tamagui/shorthands'
import { tokens } from '@tamagui/themes/v2'
import { themes as themesIn } from '@tamagui/themes/v2-themes'
import { CreateTamaguiProps, setupDev } from '@tamagui/web'

import { animations } from './animations.reanimated'
import { createGenericFont } from './createGenericFont'
import { media, mediaQueryDefaultActive } from './media'

export { animations } from './animations.reanimated'

export const cherryBombFont = createCherryBombFont()
export const munroFont = createMunroFont()

setupDev({
  visualizer: true,
})

const silkscreenFont = createSilkscreenFont()
const headingFont = createInterFont(
  {
    size: {
      5: 13,
      6: 15,
      9: 32,
      10: 44,
    },
    transform: {
      6: 'uppercase',
      7: 'none',
    },
    weight: {
      6: '400',
      7: '700',
    },
    color: {
      6: '$colorFocus',
      7: '$color',
    },
    letterSpacing: {
      5: 2,
      6: 1,
      7: 0,
      8: 0,
      9: -0.1,
      10: -0.25,
      11: -0.5,
      12: -0.75,
      14: -1,
      15: -2,
    },
    // for native
    face: {
      700: { normal: 'InterBold' },
      800: { normal: 'InterBold' },
      900: { normal: 'InterBold' },
    },
  },
  { sizeLineHeight: (size) => Math.round(size * 1.1 + (size < 30 ? 10 : 5)) }
)

const bodyFont = createInterFont(
  {
    weight: {
      1: '400',
    },
  },
  {
    sizeSize: (size) => Math.round(size),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size >= 12 ? 8 : 4)),
  }
)

const monoFont = createGenericFont(
  `"ui-monospace", "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace`,
  {
    weight: {
      1: '500',
    },
    size: {
      1: 11,
      2: 12,
      3: 13,
      4: 13,
      5: 14,
      6: 16,
      7: 18,
      8: 20,
      9: 24,
      10: 32,
      11: 46,
      12: 62,
      13: 72,
      14: 92,
      15: 114,
      16: 124,
    },
  },
  {
    sizeLineHeight: (x) => x * 1.5,
  }
)

// avoid themes only on client bundle
const themes =
  process.env.TAMAGUI_IS_SERVER || process.env.TAMAGUI_KEEP_THEMES
    ? themesIn
    : ({} as typeof themesIn)

export const config = {
  defaultFont: 'body',
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  animations,
  themes,
  media,
  shorthands,
  tokens,
  settings: {
    allowedStyleValues: 'somewhat-strict-web',
    autocompleteSpecificTokens: 'except-special',
    // mediaPropOrder: true,
  },
  fonts: {
    heading: headingFont,
    body: bodyFont,
    mono: monoFont,
    silkscreen: silkscreenFont,
    munro: munroFont,
    cherryBomb: cherryBombFont,
  },
} satisfies CreateTamaguiProps

// @ts-ignore
config.selectionStyles = (theme) => ({
  backgroundColor: theme.color5,
  color: theme.color11,
})

// @ts-ignore bad types
config.mediaQueryDefaultActive = mediaQueryDefaultActive
