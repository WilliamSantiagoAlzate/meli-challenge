import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../__mocks__/ProviderMock';
import App from '../../routes/App';

describe('<App />', () => {
  test('App component is rendering', () => {
    const app = mount(
      <ProviderMock>
        <App />
      </ProviderMock>
    );
    expect(app.length).toEqual(1);
  })
})