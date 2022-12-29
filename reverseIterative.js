/*
function reverseIterative(list)
   // accepts list - a linked list, potentially empty, to be reversed

   declare a variable named reversedList and initialize it to an empty LinkedList
   declare a variable node initialized to the head of the list
   while the node pointer is not null do
     insert the node value at the head of the reversedList
     move the node pointer along to the next node
  return the reversedList
*/
  
function reverseIterative(list) {
  const reversedList = new LinkedList();
  let node = list.head;
  while (node) {
    reversedList.insertAtHead(node.value);
    node = node.next;
  }
  return reversedList;
}

module.exports = reverseIterative;
