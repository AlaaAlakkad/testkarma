import t from '../client/app/index';
describe("testing t", ()=>{
    it("testing 1 Equals 1", ()=>{
        expect(t(1)).toEqual(1);
    });

    it("testing 2 Equals 2", ()=>{
        expect(t(2)).toEqual(2);
    });

    xit("testing error ", ()=>{
        let a;
        a.t();
        expect(t(2)).toEqual(2);
    });
});