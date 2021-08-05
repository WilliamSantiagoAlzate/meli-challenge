import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import Header from '../../../components/Layout/Header';

describe('<Header />', () => {
  test('Header component is rendering', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
  
    expect(header.length).toEqual(1);
  })
  test('Search input is changing', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    
    header.find('input').simulate('change', { 
      target: { value: 'Iphone' } 
    });
    expect(header.find('input').props().value).toEqual('Iphone');
  })
})