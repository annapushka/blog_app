import { Button } from '@/shared/ui/deprecated/Button/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';

export const Counter = () => {
  const counterValue = useCounterValue();
  const { decrement, increment } = useCounterActions();

  const handleIncrement = () => {
    increment();
  };

  const handleDecrement = () => {
    decrement();
  };

  return (
    <VStack gap="16" align="center">
      <h1 data-testid="value-title">{counterValue}</h1>
      <HStack gap="8">
        <Button onClick={handleIncrement} data-testid="increment-btn">
          +
        </Button>
        <Button onClick={handleDecrement} data-testid="decrement-btn">
          -
        </Button>
      </HStack>
    </VStack>
  );
};
