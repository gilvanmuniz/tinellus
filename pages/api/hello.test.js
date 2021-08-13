const hello = require("./hello")
// @ponicode
describe("hello.default", () => {
    test("0", () => {
        let callFunction = () => {
            hello.default(200, 404)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            hello.default(500, 400)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            hello.default(404, 404)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            hello.default(404, 429)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            hello.default(400, 500)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            hello.default(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
