import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RaitingCard.module.scss';
import Card from '@/shared/ui/Card/Card';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import Text from '@/shared/ui/Text/Text';

interface RaitingCardProps {
    className?: string;
}

export const RaitingCard = memo((props: RaitingCardProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <Card className={classNames(cls.RaitingCard, {}, [className])}>
            <VStack align="center" gap="8">
                <Text />
            </VStack>
        </Card>
    );
});
