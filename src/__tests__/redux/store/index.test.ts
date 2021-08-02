import { storeFn } from '../../../redux/store/index';

it('Should create store', () => {
  expect(storeFn().dispatch).toBeTruthy();
  expect(storeFn().getState).toBeTruthy();
  expect(storeFn().runSaga).toBeTruthy();
});