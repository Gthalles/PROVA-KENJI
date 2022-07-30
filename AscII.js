class AscII {
    constructor(text) {
        this.string = text;
        this.code = [];
    }

    getArray (string) {
        let array = [];

        for(let index = 0; index < string.length; index++){
            let code = string.charCodeAt(index);
            array.push(code);
        }
        return array;
    }

    getCode () {
        this.code = this.getArray(this.string);
        let total = 0;

        for (let index = 0; index < this.code.length; index++) {
            total += this.code[index];
        }

        return total;
    }
}
