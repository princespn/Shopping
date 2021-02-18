import { NullishCoalescePipe } from './nullish-coalesce.pipe';

describe('NullishCoalescePipe', () => {
  it('create an instance', () => {
    const pipe = new NullishCoalescePipe();
    expect(pipe).toBeTruthy();
  });
});
