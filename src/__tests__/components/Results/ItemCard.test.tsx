import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import ItemCard from '../../../components/Results/ItemCard';

describe('<ItemCard />', () => {
  test('Item card component is rendering', () => {
    const itemCard = mount(
      <ProviderMock>
        <ItemCard 
          id={1} 
          title={'Title'}
          image={'Image'}
          price={1000} 
          currency={'ARS'}
          condition={'New'} 
          free_shipping={true} 
        />
      </ProviderMock>
    );
    expect(itemCard.length).toEqual(1);
  })
})