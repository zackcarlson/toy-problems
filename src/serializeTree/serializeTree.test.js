import BST from './serializeTree.js';

describe('BST', () => {
  let bst = new BST();
  bst.insert(20);
  bst.insert(34);
  bst.insert(15);
  bst.insert(45);
  let actualSerialized = bst.serialize();
  let expectedSerialized = '20 15 e e 34 e 45 e e';

  let actualDeserialized = bst.deserialize();
  let expectedDeserialized = bst;

  it('should serialize a tree', () => {
    expect(actualSerialized).toEqual(expectedSerialized);
  });

  it ('should deserialize a tree', () => {
    expect(actualDeserialized).toEqual(expectedDeserialized);
  });
});