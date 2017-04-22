import { handleActions } from 'redux-actions';
import * as Actions from '../constants/actions';

const initialState: ClientStoreState[] = [{
  id: 0,
  location: 'Jupiter, Florida',
  name: 'Mike',
  phone: 9145390958
}];

export default handleActions<ClientStoreState[], ClientItemData>({
  [Actions.ADD_CLIENT]: (state, action)  => {
    return [{
      id: 1,
      location: 'Jupiter, Florida',
      name: 'Ryan',
      phone: 9145390959,
      ...action.payload,
    }, ...state]
  }
}, initialState);
