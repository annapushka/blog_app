import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card/Card';
import { VStack } from '@/shared/ui/redesigned/Stack/VStack/VStack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text/Text';
import { StarsRating } from '@/shared/ui/deprecated/StarsRating/StarsRating';
import { Modal } from '@/shared/ui/redesigned/Modal/Modal';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input/Input';
import HStack from '@/shared/ui/redesigned/Stack/HStack/HStack';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer/Drawer';
import { ToggleFeatures } from '@/shared/lib/features';
import { Input } from '@/shared/ui/redesigned/Input/Input';
import { Text } from '@/shared/ui/redesigned/Text/Text';
import Button from '@/shared/ui/redesigned/Button/Button';
import { Card } from '@/shared/ui/redesigned/Card/Card';

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

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <>
          <Text title={feedbackTitle} />
          <Input
            data-testid="StarRating.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
          />
        </>
      )}
      off={(
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            data-testid="StarRating.Input"
            value={feedback}
            onChange={setFeedback}
            placeholder={t('Ваш отзыв')}
          />
        </>
      )}
    />
  );

  const content = (
    <>
      <VStack align="center" gap="8">
        <ToggleFeatures
          feature="isAppRedesigned"
          on={(<Text title={starsCount ? t('Спасибо за оценку!') : title} />)}
          off={(<TextDeprecated title={starsCount ? t('Спасибо за оценку!') : title} />)}
        />
        <StarsRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={(
                <HStack max gap="16" justify="end">
                  <Button
                    variant="outline"
                    onClick={cancelHandle}
                    data-testid="StarRating.Cancel"
                  >
                    {t('Отмена')}
                  </Button>
                  <Button
                    onClick={acceptHandle}
                    data-testid="StarRating.Send"
                  >
                    {t('Отправить')}
                  </Button>
                </HStack>
              )}
              off={(
                <HStack max gap="16" justify="end">
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={cancelHandle}
                    data-testid="StarRating.Cancel"
                  >
                    {t('Отмена')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    onClick={acceptHandle}
                    data-testid="StarRating.Send"
                  >
                    {t('Отправить')}
                  </ButtonDeprecated>
                </HStack>
              )}
            />

          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              on={<Button onClick={acceptHandle}>{t('Отправить')}</Button>}
              off={<ButtonDeprecated onClick={acceptHandle}>{t('Отправить')}</ButtonDeprecated>}
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <Card
          data-testid="RatingCard"
          padding="24"
          className={classNames('', {}, [className])}
          border="round"
        >
          {content}
        </Card>
      )}
      off={(
        <CardDeprecated
          data-testid="RatingCard"
          className={classNames('', {}, [className])}
        >
          {content}
        </CardDeprecated>
      )}
    />

  );
});
