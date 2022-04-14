import toStorage from './toStorage';

let fakeData 


const localStorageMock = {
  getItem: () => { return JSON.stringify(fakeData) },
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;

describe('getData from local sotrage ', () => {

  beforeEach(() => {
    fakeData = [
      {},
      false,
      'abc',
      {
        queryData: {
        },
        users: []
      }
    ]
  })

  test('anyway must return array witch correct data or empty arr', () => {
    expect(toStorage.getData()).toBeTruthy()
    expect(toStorage.getData()).toBeInstanceOf(Array);
    expect(toStorage.getData()).toEqual(
      [{ queryData: {}, users: [] }]
    );
  })

})

