class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    // To access element from particular index
    get(index) {
        return this.data[index];
    }
    // Addig element at the end of the array
    push(element) {
        this.data[this.length] = element;
        this.length++;
        return this.length;
    }
    // Removing element at the end of the array
    pop() {
        delete this.data[this.length - 1];
        this.length--;
        return this.length;
    }

    // Deleting an element at a specified index
    delete(index) {
        const element = this.data[index];
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
    }

};

const array1 = new MyArray()

array1.push(1);

array1.push(2);

array1.push(3);

// array1.pop();

array1.push(4);
array1.delete(1)
console.log(array1)