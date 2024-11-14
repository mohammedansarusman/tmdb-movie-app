import { sum } from "../sum";

test("sum function will calculate sum of two value",()=>{
    const result = sum(3,4)
    expect(result).toBe(7);

})
