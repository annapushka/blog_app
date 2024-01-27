import { memo } from 'react';
import { MainLayout } from '../MainLayout';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton';
import cls from './AppLoaderLayout.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';

export const AppLoaderLayout = memo(() => {
  return (
    <MainLayout
      header={(
        <VStack className={cls.header}>
          <Skeleton width={40} height={40} border="55%" />
        </VStack>
      )}
      content={(
        <VStack gap="16" style={{ height: '100%' }}>
          <Skeleton width="70%" height={32} border="16px" />
          <Skeleton width="40%" height={20} border="16px" />
          <Skeleton width="50%" height={20} border="16px" />
          <Skeleton width="30%" height={32} border="16px" />
          <Skeleton width="80%" height="40%" border="16px" />
          <Skeleton width="80%" height="40%" border="16px" />
        </VStack>
)}
      sidebar={<Skeleton width={220} height="100%" border="32px" />}
    />
  );
});
