import React from 'react';
import { mount } from 'enzyme';
import { ProviderMock } from '../../../__mocks__/ProviderMock';
import ItemDetail from '../../../components/Detail/ItemDetail';

describe('<ItemDetail />', () => {
  test('Item detail component is rendering', () => {
    const movieDetail = mount(
      <ProviderMock>
        <ItemDetail
          image={'Image'}
          title={'Title'}
          description={'Description'}
          price={1000}
          currency={'ARS'}
          condition={'new'}
          free_shipping={true}
          sold_quantity={300}
        />
      </ProviderMock>
    );

    expect(movieDetail.length).toEqual(1);
  })
})