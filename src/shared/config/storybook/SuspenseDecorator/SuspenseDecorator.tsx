// eslint-disable-next-line fsd-01/layer-imports
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';
import { Suspense } from 'react';

export const SuspenseDecorator = (StoryComponent: Story) => (
    <Suspense>
        <StoryComponent />
    </Suspense>
);
