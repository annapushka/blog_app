import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';

const ArticleEditePage = () => {
    const { t } = useTranslation('article');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page />
    );
};

export default ArticleEditePage;
