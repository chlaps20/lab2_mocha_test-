const { expect } = require('chai')
const calculator = require('../calculator')

describe('Calculator',()=> {
    describe("add",()=>{
        it("add(5, 2) expected result 7 PASS",()=>{
            expect(calculator.add(5,2)).to.equal(7)
        })
    })
})

describe('Calculator',()=> {
    describe("sub",()=>{
        it("sub(5, 2) expected result 3 PASS",()=>{
            expect(calculator.sub(5,2)).to.equal(3)
        })
    })
})

describe('Calculator',()=> {
    describe("mul",()=>{
        it("mul(5, 2) expected result 10 PASS",()=>{
            expect(calculator.mul(5,2)).to.equal(10)
        })
    })
})

describe('Calculator',()=> {
    describe("div",()=>{
        it("div(10, 2) expected result 5 PASS",()=>{
            expect(calculator.div(10,2)).to.equal(5)
        })
    })
})