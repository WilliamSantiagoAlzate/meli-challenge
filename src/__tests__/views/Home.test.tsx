import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../__mocks__/ProviderMock';
import HomeView from '../../views/Home';

describe('<HomeView />', () => {
  test('Home view is rendering', () => {
    const homeView = mount(
      <ProviderMock>
        <HomeView />
      </ProviderMock>
    );
    expect(homeView.length).toEqual(1);
  })
})