import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { componentRender } from '@/shared/config/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
  test('render Counter', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment Counter', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('increment-btn')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('increment-btn'));
    await expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement Counter', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('decrement-btn')).toBeInTheDocument();
    await userEvent.click(screen.getByTestId('decrement-btn'));
    await expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
