// eslint-disable-next-line fsd-01/layer-imports
import '@/app/styles/index.scss';
import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (Story: StoryFn) => (
  <Suspense>
    <Story />
  </Suspense>
);
