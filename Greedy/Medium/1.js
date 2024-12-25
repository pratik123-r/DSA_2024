/**
 * N meetings in one room


Input: start[] = [1, 3, 0, 5, 8, 5], end[] =  [2, 4, 6, 7, 9, 9]
Output: 4
Explanation: Maximum four meetings can be held with given start and end timings. The meetings are - (1, 2), (3, 4), (5,7) and (8,9)

 */

var maxMeetings = (start, end) => {
    let arr = [];
    let ans = 0;
    let lastEndTime = -1;

    for (let index = 0; index < start.length; index++) {
        arr.push({
            start: start[index],
            end: end[index]
        });
    }

    arr.sort((a, b) => a.end - b.end);

    for (let index = 0; index < arr.length; index++) {
        if (arr[index].start > lastEndTime) {
            ans++; 
            lastEndTime = arr[index].end;
        }
    }

    return ans; 
};


maxMeetings([7, 18, 14], [30,26,28])

