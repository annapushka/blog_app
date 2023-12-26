import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { Theme } from '../../src/shared/const/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  decorators: [
    (Story) => StyleDecorator(Story),
    (Story) => ThemeDecorator(Theme.LIGHT, Story),
    (Story) => RouterDecorator(Story),
    (Story) => SuspenseDecorator(Story),
  ],
  themes: {
    default: 'dark',
    list: [
      { name: 'light', class: Theme.LIGHT, color: '#e2f8ff' },
      { name: 'dark', class: Theme.DARK, color: '#2b2828' },
      { name: 'blue', class: Theme.BLUE, color: '#5e69ee' },
    ],
  },
};
