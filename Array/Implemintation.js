class Array {
    constructor() {
        this.length = 0;
        this.data = {};
      }
      get(index) {
        return this.data[index];
      }
      push(item) {
        this.data[this.length] = item;
        this.length++;
      }
      pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
      }
      deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItems(index);
      }
      shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
          this.data[i] = this.data[i + 1];
        }
        console.log(this.data[this.length - 1]);
        delete this.data[this.length - 1];
        this.length--;
      }
      unShift(val) {
        this.length++;
        for (let i =  this.length - 1 ; i >= 0; i--) {
          this.data[i] = this.data[i - 1];
        }
        this.data[0] = val;
      }
    }
    
    const myArray = new Array();
    myArray.push('hi');
    myArray.push('you');
    myArray.push('are');
    myArray.push('nice');
    myArray.deleteAtIndex(0);
    myArray.unShift('hey');
    console.log(myArray);
    
    