import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock, ProviderMockStore } from '../../../__mocks__/ProviderMock';
import Items from '../../../components/Results/Items';

describe('<Items />', () => {
  test('Items component is rendering', () => {
    const items = mount(
      <ProviderMock>
        <Items />
      </ProviderMock>
    );
    expect(items.length).toEqual(1);
  })

  test('Render item card', () => {
    const items = mount(
      <ProviderMockStore>
        <Items />
      </ProviderMockStore>
    );
    expect(items.length).toEqual(1);
  })
})