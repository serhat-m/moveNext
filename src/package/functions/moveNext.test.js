import { it, expect, describe } from "vitest"
import moveNext from "./moveNext"

describe("Behaviour: default", () => {
  describe("Direction: down", () => {
    describe("Array length: 1", () => {
      it("should enable and disable the only entry", () => {
        const data = [{ id: 0 }]
        let selectedId = undefined
        const next = () => moveNext({ data, direction: "next", endBehaviour: "default", selector: (el) => el.id, selectedId })

        selectedId = next()
        expect(selectedId).toBe(data[0].id)

        selectedId = next()
        expect(selectedId).toBeUndefined()
      })
    })

    describe("Array length: 2", () => {
      it("should first activate the first entry, then the second (last) entry and then restore the original state", () => {
        const data = [{ id: 0 }, { id: 1 }]
        let selectedId = undefined
        const next = () => moveNext({ data, direction: "next", endBehaviour: "default", selector: (el) => el.id, selectedId })

        selectedId = next()
        expect(selectedId).toBe(data[0].id)

        selectedId = next()
        expect(selectedId).toBe(data[1].id)

        selectedId = next()
        expect(selectedId).toBeUndefined()
      })
    })

    describe("Array length: > 2", () => {
      it("should enable each entry step by step starting from the first one and disable the previous one. After the last entry all should be disabled", () => {
        const data = [{ id: 0 }, { id: 1 }, { id: 2 }]
        let selectedId = undefined
        const next = () => moveNext({ data, direction: "next", endBehaviour: "default", selector: (el) => el.id, selectedId })

        selectedId = next()
        expect(selectedId).toBe(data[0].id)

        selectedId = next()
        expect(selectedId).toBe(data[1].id)

        selectedId = next()
        expect(selectedId).toBe(data[2].id)

        selectedId = next()
        expect(selectedId).toBeUndefined()
      })
    })
  })

  describe("Direction: up", () => {
    describe("Array length: 1", () => {
      it("should enable and disable the only entry", () => {
        const data = [{ id: 0 }]
        let selectedId = undefined
        const prev = () => moveNext({ data, direction: "prev", endBehaviour: "default", selector: (el) => el.id, selectedId })

        selectedId = prev()
        expect(selectedId).toBe(data[0].id)

        selectedId = prev()
        expect(selectedId).toBeUndefined()
      })
    })

    describe("Array length: 2", () => {
      it("should first activate the second (last) entry, then the first entry and then restore the original state", () => {
        const data = [{ id: 0 }, { id: 1 }]
        let selectedId = undefined
        const prev = () => moveNext({ data, direction: "prev", endBehaviour: "default", selector: (el) => el.id, selectedId })

        selectedId = prev()
        expect(selectedId).toBe(data[1].id)

        selectedId = prev()
        expect(selectedId).toBe(data[0].id)

        selectedId = prev()
        expect(selectedId).toBeUndefined()
      })
    })

    describe("Array length: > 2", () => {
      it("should enable each entry step by step starting from the last one and disable the previous one. After the first entry all should be disabled", () => {
        const data = [{ id: 0 }, { id: 1 }, { id: 2 }]
        let selectedId = undefined
        const prev = () => moveNext({ data, direction: "prev", endBehaviour: "default", selector: (el) => el.id, selectedId })

        selectedId = prev()
        expect(selectedId).toBe(data[2].id)

        selectedId = prev()
        expect(selectedId).toBe(data[1].id)

        selectedId = prev()
        expect(selectedId).toBe(data[0].id)

        selectedId = prev()
        expect(selectedId).toBeUndefined()
      })
    })
  })
})

describe("Behaviour: jump", () => {
  describe("Direction: down", () => {
    describe("Array length: 1", () => {
      it("should enable the only entry and stay at it", () => {
        const data = [{ id: 0 }]
        let selectedId = undefined
        const next = () => moveNext({ data, direction: "next", endBehaviour: "jump", selector: (el) => el.id, selectedId })

        selectedId = next()
        expect(selectedId).toBe(data[0].id)

        selectedId = next()
        expect(selectedId).toBe(data[0].id)
      })
    })

    describe("Array length: 2", () => {
      it("should first activate the first entry, then the second (last) entry and then jump to the first entry", () => {
        const data = [{ id: 0 }, { id: 1 }]
        let selectedId = undefined
        const next = () => moveNext({ data, direction: "next", endBehaviour: "jump", selector: (el) => el.id, selectedId })

        selectedId = next()
        expect(selectedId).toBe(data[0].id)

        selectedId = next()
        expect(selectedId).toBe(data[1].id)

        selectedId = next()
        expect(selectedId).toBe(data[0].id)
      })
    })
  })

  describe("Direction: up", () => {
    describe("Array length: 1", () => {
      it("should enable the only entry and stay at it", () => {
        const data = [{ id: 0 }]
        let selectedId = undefined
        const prev = () => moveNext({ data, direction: "prev", endBehaviour: "jump", selector: (el) => el.id, selectedId })

        selectedId = prev()
        expect(selectedId).toBe(data[0].id)

        selectedId = prev()
        expect(selectedId).toBe(data[0].id)
      })
    })

    describe("Array length: 2", () => {
      it("should first activate the second (last) entry, then the first entry and then jump to the second (last) entry", () => {
        const data = [{ id: 0 }, { id: 1 }]
        let selectedId = undefined
        const prev = () => moveNext({ data, direction: "prev", endBehaviour: "jump", selector: (el) => el.id, selectedId })

        selectedId = prev()
        expect(selectedId).toBe(data[1].id)

        selectedId = prev()
        expect(selectedId).toBe(data[0].id)

        selectedId = prev()
        expect(selectedId).toBe(data[1].id)
      })
    })
  })
})

describe("Error handling", () => {
  it("should throw an type error if no array is passed as the first parameter", () => {
    const dataString = "X"
    const dataNumber = 1
    const dataBoolean = true
    const selectedId = undefined

    const fnString = () => moveNext(dataString, "prev", "jump", (el) => el.id, selectedId)
    const fnNumber = () => moveNext(dataNumber, "prev", "default", (el) => el.id, selectedId)
    const fnBool = () => moveNext(dataBoolean, "next", "jump", (el) => el.id, selectedId)

    expect(fnString).toThrowError()
    expect(fnNumber).toThrowError()
    expect(fnBool).toThrowError()
  })
})
