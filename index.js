// Your code here
class Polygon {
    constructor(array) {
        this.array = array
    }

    get countSides() {
        return this.array.length

    }

    get perimeter() {
        if (this.array.length === 3) {
            return this.array[0] + this.array[1] + this.array[2]

        } else if (this.array.length === 4) {
            return this.array[0] + this.array[1] + this.array[2] + this.array[3]
        }
    }
}

class Triangle extends Polygon {
    get isValid() {
        let s1 = this.array[0]
        let s2 = this.array[1]
        let s3 = this.array[2]

        if (s1 + s2 > s3 && s2 + s3 > s1 && s3 + s1 > s2) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let s1 = this.array[0]
        let s2 = this.array[1]
        let s3 = this.array[2]
        let s4 = this.array[3]
        if (s1 === s2 && s1 === s2 && s1 === s4) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.array[0] * this.array[0]
    }
}