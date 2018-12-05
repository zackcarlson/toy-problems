export const hasCycle = (head) => {
  if (!head || !head.next) return false;
  let hash = {};
  let current = head;

  while (current.next) {
    let node = [current.val, current.next.val];
    if (!hash[node]) {
      hash[node] = node;
    } else {
      return true;
    }
    current = current.next;
  }
  return false;
};