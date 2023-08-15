import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from './articleDetails';

describe('articleDetails.test', () => {
    test('should return data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data: {
                    id: '1',
                    title: 'title',

                },
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
    });
});
