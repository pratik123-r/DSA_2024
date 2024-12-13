/**
    Problem Statement: Given an array ‘arr of integer numbers, ‘ar[i]’ represents the number of pages in the ‘i-th’ book. There are a ‘m’ number of students, and the task is to allocate all the books to the students.
    Allocate books in such a way that:

    Example 1:
    Input Format:
    n = 4, m = 2, arr[] = {12, 34, 67, 90}
    Result:
    113
    Explanation:
    The allocation of books will be 12, 34, 67 | 90. One student will get the first 3 books and the other will get the last one.

    Example 2:
    Input Format:
    n = 5, m = 4, arr[] = {25, 46, 28, 49, 24}
    Result:
    71
    Explanation: The allocation of books will be 25, 46 | 28 | 49 | 24.

    We can allocate books in several ways but it is clearly said in the question that we have to allocate the books in such a way that the maximum number of pages received by a student should be minimum.

    Assume the given array is {25 46 28 49 24} and number of students, M = 4. Now, we can allocate these books in different ways. Some of them are the following:

    25 | 46 | 28 | 49, 24  → Maximum no. of pages a student receive = 73
    25 | 46 | 28, 49 | 24  → Maximum no. of pages a student receive = 77
    25 | 46, 28 | 49 | 24  → Maximum no. of pages a student receive = 74
    25, 46 | 28 | 49 | 24  → Maximum no. of pages a student receive = 71
    From the above allocations, we can clearly observe that the minimum possible maximum number of pages is 71.

    When it is impossible to allocate books:

    When the number of books is lesser than the number of students, we cannot allocate books to all the students even if we give only a single book to each student. So, if m > n, we should return -1.

    Observations:

    Minimum possible answer: We will get the minimum answer when we give n books of the array to n students(i.e. Each student will receive 1 book). Now, in this case, the maximum number of pages will be the maximum element in the array. So, the minimum possible answer is max(arr[]).
    Maximum possible answer: We will get the maximum answer when we give all n books to a single student. The maximum no. of pages he/she will receive is the summation of array elements i.e. sum(arr[]). So, the maximum possible answer is sum(arr[]).
    From the observations, it is clear that our answer lies in the range [max(arr[]), sum(arr[])].

    How to calculate the number of students to whom we can allocate the books if one can receive at most ‘pages’ number of pages:

    In order to calculate the number of students we will write a function, countStudents(). This function will take the array and ‘pages’ as parameters and return the number of students to whom we can allocate the books.

    countStudents(arr[], pages):

    We will first declare two variables i.e. ‘students’(stores the no. of students), and pagesStudent(stores the number of pages of a student). As we are starting with the first student, ‘students’ should be initialized with 1.
    We will start traversing the given array.
    If pagesStudent + arr[i] <= pages: If upon adding the pages with the existing number of pages does not exceed the limit, we can allocate this i-th book to the current student.
    Otherwise, we will move to the next student(i.e. students += 1 ) and allocate the book.
    Finally, we will return the value of ‘students’.
 */

    function bookAllocation(arr, student) {
        if (student > arr.length)
            return -1;
        let low = Math.max(...arr);
        let high = arr.reduce((a, b) => a + b, 0);
        let ans;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (isPossible(arr, mid, student)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans
    }
    
    function isPossible(arr, maxPages, students) {
        let currentSum = 0;
        let studentCount = 1;  // Start by assigning books to the first student
    
        for (let i = 0; i < arr.length; i++) {
            // If adding the current book exceeds maxPages, allocate to a new student
            if (currentSum + arr[i] > maxPages) {
                studentCount++;
                currentSum = arr[i];  // Start the next student with the current book's pages
                
                // If students exceed the limit, return false
                if (studentCount > students) return false;
            } else {
                currentSum += arr[i];  // Otherwise, add the current book to the current student's total
            }
        }
    
        // If the books are allocated within the student limit, return true
        return true;
    }
    
    console.log(bookAllocation([25, 46, 28, 49, 24], 4));