import { test } from 'tape';
import { ClientReducer } from '../../src/reducers/client';


test('Testing Add User Reducer', nest => {
  nest.plan(1);
  nest.test('Should Add User', t => {
    const expected = {
      clientId: 0,
      location: 'New York',
      firstName: 'Ryan',
      lastName: 'Bas',
    };
    const client = {
      clientId: 0,
      location: 'New York',
      firstName: 'Ryan',
      lastName: 'Bas',
    };
    const msg = 'Should add a client to state';
    const state = [];
    const action = { payload: { client } };
    const actual = ClientReducer['ADD_CLIENT'](state, action);

    t.same(actual, expected, msg)
  });
});
