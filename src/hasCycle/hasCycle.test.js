import { hasCycle } from './hasCycle.js';

describe('hasCycle', () => {
  it('should return true if a cycle exists in a linked list', () => {
    let head = { val: 1, next: null};
    head.next = { val: 45, next: head };
    expect(hasCycle(head)).toEqual(true);
  });

  it('should return false if a cycles doesn\'t exist', () => {
    let head = { val: 1, next: { val: 45, next: null} };
    expect(hasCycle(head)).toEqual(false);
  });

  it('should return false if given node is empty', () => {
    let head = {};
    expect(hasCycle(head)).toEqual(false);
  });
});