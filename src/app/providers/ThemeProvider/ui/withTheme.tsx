import React from 'react';
import { useJsonSettings } from '@/entities/User';
import ThemeProvider from './ThemeProvider';

const withTheme = (Component: React.ComponentType) => {
  return () => {
    const { theme: defaultTheme } = useJsonSettings();
    return (
      <ThemeProvider initialTheme={defaultTheme}>
        <Component />
      </ThemeProvider>
    );
  };
};

export default withTheme;
