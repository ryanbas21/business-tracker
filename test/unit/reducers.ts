import { test } from 'tape';
import handleActions from '../../src/reducers/client';


test('Testing Add User Reducer', nest => {
  nest.plan(1);
  nest.test('Should Add User', t => {
    const expected : IClient.Info[] = [{
      clientId: 0,
      location: 'New York',
      firstName: 'Ryan',
      lastName: 'Bas',
      jobs: []
    }];
    const client : IClient.Info = {
      clientId: 0,
      location: 'New York',
      firstName: 'Ryan',
      lastName: 'Bas',
      jobs: []
    };
    const msg = 'Should add a client to state';
    const state = [];
    const action = { payload: { client } };
    const actual = handleActions['ADD_CLIENT'](state, action);

    t.same(actual, expected, msg)
  });
});
