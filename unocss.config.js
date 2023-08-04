import {
  defineConfig,
  presetAttributify,
  presetUno,
  UserConfig,
  presetIcons,
} from 'unocss';

export default defineConfig({
  presets: [
    presetIcons({
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetAttributify({ prefix: 'uno-' }),
    presetUno(),
  ],
  shortcuts: {
    '??': 'border border-white',
    '?': 'border border-black',
  },
});
