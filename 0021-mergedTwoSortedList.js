// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1,list2) {
    
    // let finalList = [...list1, ...list2]
    // finalList.sort();
    let finalList = [];
    for(let i = 0; i < list1.length; i++) finalList.push(list1[i]);
    for(let i = 0; i < list2.length; i++) finalList.push(list2[i]);
    finalList.sort();
    console.log(finalList);
}

mergeTwoLists([1,2,4],[1,3,4]);
mergeTwoLists([],[]);


