// import tape from 'tape';
// import { handleActions } from 'redux-actions';
// // import handleActions from '../../src/reducers/client';
// import * as Actions from '../../src/constants/client';
//
//
//
// test('Testing Add User Reducer', nest => {
//   nest('Should Add User', t => {
//     const expected: IClient.Info[] = [{
//       id: 0,
//       location: 'New York',
//       firstName: 'Ryan',
//       lastName: 'Bas'
//     }];
//     const client = {
//       id: 0,
//       location: 'New York',
//       firstName: 'Ryan',
//       lastName: 'Bas'
//     };
//     const msg = 'Should add a client to state';
//     const state = [];
//     const action = { payload: { client } }
//     const actual = handleActions.Actions.ADD_CLIENT(state, action);
//
//     t.same(actual, expected, msg)
//     t.end()
//   });
// })
