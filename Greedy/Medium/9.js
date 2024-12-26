/**
    Geek is a software engineer. He is assigned with the task of calculating average waiting time of all the processes by following shortest job first policy.

    The shortest job first (SJF) or shortest job next, is a scheduling policy that selects the waiting process with the smallest execution time to execute next.

    Given an array of integers bt of size n. Array bt denotes the burst time of each process. 
    Calculate the average waiting time of all the processes and return the nearest integer which is smaller or equal to the output.
 * 
 */

function solve(bt) {
    bt.sort((a, b) => a - b);
    let totalTime = 0
    let waitingTime = 0
    for (let i = 0; i < bt.length; i++) {
        waitingTime += totalTime
        totalTime += bt[i]
    }
    return Math.floor((waitingTime / bt.length)) 
}