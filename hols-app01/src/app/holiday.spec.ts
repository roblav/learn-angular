import {Holiday} from './holiday';

describe('Holiday', () => {
  it('should create an instance', () => {
    expect(new Holiday()).toBeTruthy();
  });
  it('should except values in the constructor', () => {
    let holiday01 = new Holiday({
      description: 'Centre Parcs'
    })
    expect(holiday01.description).toEqual('Centre Parcs')
  })
});
