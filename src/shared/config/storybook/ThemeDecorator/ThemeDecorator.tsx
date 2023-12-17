import { Story } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line fsd-01/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme ?? Theme.LIGHT}>
    <div className={`app ${theme ?? Theme.LIGHT}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>
);
