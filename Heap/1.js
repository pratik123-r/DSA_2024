class Heap {
    constructor() {
      this.data = [];
    }
  
    // Helper function to get parent index
    getParentIndex(index) {
      return Math.floor((index - 1) / 2);
    }
  
    // Helper function to get left child index
    getLeftChildIndex(index) {
      return 2 * index + 1;
    }
  
    // Helper function to get right child index
    getRightChildIndex(index) {
      return 2 * index + 2;
    }
  
    // Swap two elements in the heap
    swap(index1, index2) {
      [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }
  
    // Insert an element into the heap
    insert(value) {
      this.data.push(value);
      this.heapifyUp();
    }
  
    // Move the element at the end up to its correct position
    heapifyUp() {
      let index = this.data.length - 1;
      while (
        index > 0 &&
        this.data[index] < this.data[this.getParentIndex(index)]
      ) {
        this.swap(index, this.getParentIndex(index));
        index = this.getParentIndex(index);
      }
    }
  
    // Remove and return the minimum element (root of the heap)
    delete() {
      if (this.data.length === 0) return null;
      if (this.data.length === 1) return this.data.pop();
  
      const root = this.data[0];
      this.data[0] = this.data.pop();
      this.heapifyDown();
      return root;
    }
  
    // Move the root element down to its correct position
    heapifyDown() {
        let index = 0;
        const length = this.data.length;
    
        while (true) {
          const left = this.getLeftChildIndex(index);
          const right = this.getRightChildIndex(index);
          let smallest = index;
    
          if (left < length && this.data[left] < this.data[smallest]) {
            smallest = left;
          }
    
          if (right < length && this.data[right] < this.data[smallest]) {
            smallest = right;
          }
    
          if (smallest === index) break;
    
          this.swap(index, smallest);
          index = smallest;
        }
      }
  
    // Build a heap from an array
    heapify(array) {
    //   this.data = [...array];
    //   for (let i = Math.floor(this.data.length / 2) - 1; i >= 0; i--) {
    //     this.siftDown(i);
    //   }

        this.data = [];
        for (const value of array) {
        this.insert(value);
        }
    }
  
    // Sift down helper for heapify
    siftDown(index) {
      let smallest = index;
      let left = this.getLeftChildIndex(index);
      let right = this.getRightChildIndex(index);
  
      if (left < this.data.length && this.data[left] < this.data[smallest]) {
        smallest = left;
      }
  
      if (right < this.data.length && this.data[right] < this.data[smallest]) {
        smallest = right;
      }
  
      if (smallest !== index) {
        this.swap(index, smallest);
        this.siftDown(smallest);
      }
    }
  
    // Utility function to get the heap as an array
    toArray() {
      return this.data;
    }
  }
  
  // Example usage:
  const heap = new Heap();
  heap.insert(3);
  heap.insert(1);
  heap.insert(6);
  heap.insert(5);
  heap.insert(2);
  heap.insert(4);
  console.log(heap.toArray()); // [1, 2, 4, 5, 3, 6]
  console.log(heap.delete()); // 1
  console.log(heap.toArray()); // [2, 3, 4, 5, 6]
  
  const arr = [3, 1, 6, 5, 2, 4];
  heap.heapify(arr);
  console.log(heap.toArray()); // [1, 2, 4, 5, 3, 6]
  