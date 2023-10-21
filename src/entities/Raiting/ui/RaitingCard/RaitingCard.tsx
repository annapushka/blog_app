import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RaitingCard.module.scss';
import Card from '@/shared/ui/Card/Card';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import Text from '@/shared/ui/Text/Text';
import { StarsRating } from '@/shared/ui/StarsRating/StarsRating';
import Modal from '@/shared/ui/Modal/Modal';
import Input from '@/shared/ui/Input/Input';
import HStack from '@/shared/ui/Stack/HStack/HStack';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';

interface RaitingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
}

export const RaitingCard = memo((props: RaitingCardProps) => {
    const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSelectStars = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    return (
        <Card className={classNames(cls.RaitingCard, {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={title} />
                <StarsRating size={40} onSelect={onSelectStars} />
            </VStack>
            <Modal isOpen={isModalOpen} lazy>
                <VStack max gap="32">
                    <Text title={feedbackTitle} />
                    <Input placeholder={t('Ваш отзыв')} />
                    <HStack max gap="16">
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={() => setIsModalOpen(false)}
                        >
                            {t('Отмена')}
                        </Button>
                        <Button onClick={() => setIsModalOpen(false)}>{t('Отправить')}</Button>
                    </HStack>
                </VStack>
            </Modal>
        </Card>
    );
});
