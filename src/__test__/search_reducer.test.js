import reducer from '../redux/modules/search';
import { SEARCH_PHOTO_BY_TAG_SUCCESS, SEARCH_PHOTO_CLEAR } from '../redux/modules/search';
import { mock_api } from '../api/mock_api';

describe('search photos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            searchByTag: [],
        })
    });


    it('call api must returns the correct state', () => {
        const action = { type: SEARCH_PHOTO_BY_TAG_SUCCESS, payload: mock_api };
        const expectedState = {
            searchByTag: mock_api.photo
        };

        expect(reducer(undefined, action)).toEqual(expectedState);
    });

    it('clear search must return correct state', () => {
        const action = { type: SEARCH_PHOTO_CLEAR };
        const expectedState = {
            searchByTag: [],
        }

        expect(reducer(undefined, action)).toEqual(expectedState);
    });
});