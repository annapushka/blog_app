import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import Card from '@/shared/ui/Card/Card';
import VStack from '@/shared/ui/Stack/VStack/VStack';
import Text from '@/shared/ui/Text/Text';
import { StarsRating } from '@/shared/ui/StarsRating/StarsRating';
import Modal from '@/shared/ui/Modal/Modal';
import Input from '@/shared/ui/Input/Input';
import HStack from '@/shared/ui/Stack/HStack/HStack';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate ?? 0);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                value={feedback}
                onChange={setFeedback}
                placeholder={t('Ваш отзыв')}
            />
        </>
    );

    return (
        <Card className={classNames('', {}, [className])}>
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Спасибо за оценку!') : title} />
                <StarsRating selectedStars={starsCount} size={40} onSelect={onSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    <VStack max gap="32">
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={cancelHandle}
                            >
                                {t('Отмена')}
                            </Button>
                            <Button
                                onClick={acceptHandle}
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </VStack>

                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
                    <VStack gap="32">
                        {modalContent}
                        <Button
                            onClick={acceptHandle}
                        >
                            {t('Отправить')}
                        </Button>
                    </VStack>
                </Drawer>
            </MobileView>
        </Card>
    );
});