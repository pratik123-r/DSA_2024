/**
    Input: id = [1, 2, 3, 4], deadline = [4, 1, 1, 1], profit = [20, 1, 40, 30]
    Output: [2, 60]
    Explanation: Job1 and Job3 can be done with maximum profit of 60 (20+40).

    Input: id = [1, 2, 3, 4, 5], deadline = [2, 1, 2, 1, 1], profit = [100, 19, 27, 25, 15]
    Output: [2, 127]
    Explanation: Job1 and Job3 can be done with maximum profit of 127 (100+27).

    Input: id = [1, 2, 3, 4], deadline = [3, 1, 2, 2], profit = [50, 10, 20, 30]
    Output: [3, 100]
    Explanation: Job1, Job3 and Job4 can be completed with a maximum profit of 100 (50 + 20 + 30).
 */

function jobSequencing(id, deadline, profit) {
    // Combine the job information into a single array
    const jobs = id.map((jobId, index) => ({
        id: jobId,
        deadline: deadline[index],
        profit: profit[index]
    }));

    // Sort jobs in descending order of profit
    jobs.sort((a, b) => b.profit - a.profit);

    const n = Math.max(...deadline); // Find the maximum deadline
    const result = Array(n).fill(-1); // Time slots for jobs
    let maxProfit = 0;
    let jobsCompleted = 0;

    // Iterate through the sorted jobs
    for (let i = 0; i < jobs.length; i++) {
        // Try to schedule the job in its latest possible time slot
        for (let j = jobs[i].deadline - 1; j >= 0; j--) {
            if (result[j] === -1) {
                result[j] = jobs[i].id; // Schedule the job
                maxProfit += jobs[i].profit; // Add the profit
                jobsCompleted++; // Increment the job count
                break;
            }
        }
    }

    return [jobsCompleted, maxProfit];
}

// Example usage:
const id1 = [1, 2, 3, 4];
const deadline1 = [4, 1, 1, 1];
const profit1 = [20, 1, 40, 30];
console.log(jobSequencing(id1, deadline1, profit1)); // Output: [2, 60]

const id2 = [1, 2, 3, 4, 5];
const deadline2 = [2, 1, 2, 1, 1];
const profit2 = [100, 19, 27, 25, 15];
console.log(jobSequencing(id2, deadline2, profit2)); // Output: [2, 127]

const id3 = [1, 2, 3, 4];
const deadline3 = [3, 1, 2, 2];
const profit3 = [50, 10, 20, 30];
console.log(jobSequencing(id3, deadline3, profit3)); // Output: [3, 100]
