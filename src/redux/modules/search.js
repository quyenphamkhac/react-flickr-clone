import { ajax } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';
import { ofType } from 'redux-observable';

//api config
import { baseUrl, methods, apiKey } from '../../api/api';

//action types
export const SEARCH_PHOTO_BY_TAG = 'SEARCH_PHOTO_BY_TAG';
export const SEARCH_PHOTO_BY_TAG_SUCCESS = 'SEARCH_PHOTO_BY_TAG_SUCCESS';
export const SEARCH_PHOTO_CLEAR = 'SEARCH_PHOTO_CLEAR';

//action creator
export const searchByTag = tag => ({ type: SEARCH_PHOTO_BY_TAG, payload: tag });
export const clearSearch = () => ({ type: SEARCH_PHOTO_CLEAR });
const searchByTagSuccess = payload => ({ type: SEARCH_PHOTO_BY_TAG_SUCCESS, payload });

//epic
export const searchEpic = action$ => action$.pipe(
    ofType(SEARCH_PHOTO_BY_TAG),
    mergeMap(action => ajax.getJSON(`${baseUrl}?api_key=${apiKey}&method=${methods.FLICKR_SEARCH}&format=json&nojsoncallback=1&&per_page=50&page=1&text=${action.payload}`).pipe(
        map(response => searchByTagSuccess(response.photos))
    ))
);

const defaultState = {
  searchByTag: [],
};

const search = (state = defaultState, action) => {
    switch(action.type) {
        case SEARCH_PHOTO_BY_TAG_SUCCESS:
            const { photo } = action.payload;
            return {
                ...state,
                searchByTag: photo,    
            };
        case SEARCH_PHOTO_CLEAR:
            return defaultState;
        default:
            return state;
    }
}

export default search;