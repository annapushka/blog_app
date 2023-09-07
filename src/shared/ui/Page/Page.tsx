import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
}

export const Page = ({ className }: PageProps) => (
    <div className={classNames(cls.Page, {}, [className])}>Page</div>
);
