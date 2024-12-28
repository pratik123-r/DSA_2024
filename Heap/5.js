/**
 * 621. Task Scheduler
 * 
 * You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n. 
 * Each CPU interval can be idle or allow the completion of one task. Tasks can be completed in any order, 
 * but there's a constraint: there has to be a gap of at least n intervals between two tasks with the same label.
 * 

Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

Example 2:
Input: tasks = ["A","C","A","B","D","B"], n = 1
Output: 6
Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
With a cooling interval of 1, you can repeat a task after just one other task.

Example 3:
Input: tasks = ["A","A","A", "B","B","B"], n = 3
Output: 10
Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

 */

var leastInterval = function (tasks, n) {
    let map = new Map()
    for (let i = 0; i < tasks.length; i++) {
        map.set(tasks[i], (map.get(tasks[i]) || 0) + 1)
    }
    const sortedArray = Array.from(map)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    let idle = (sortedArray[0][1] - 1) * n
    for (let i = 1; i < sortedArray.length; i++) {
        idle -= Math.min(sortedArray[i][1], sortedArray[0][1] - 1)
    }

    return Math.max(0, idle) + tasks.length

};

leastInterval(["A", "A", "A", "B", "B", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"], 7)
leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "D"], 2)