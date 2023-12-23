import { StoryFn } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line fsd-01/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme, Story: StoryFn) => () => (
  <ThemeProvider initialTheme={theme ?? Theme.LIGHT}>
    <div className={`app ${theme ?? Theme.LIGHT}`}>
      <Story />
    </div>
  </ThemeProvider>
);
