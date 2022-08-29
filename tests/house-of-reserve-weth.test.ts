import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { HouseOfReserveWETHActiveOracleChanged } from "../generated/schema"
import { HouseOfReserveWETHActiveOracleChanged as HouseOfReserveWETHActiveOracleChangedEvent } from "../generated/HouseOfReserveWETH/HouseOfReserveWETH"
import { handleHouseOfReserveWETHActiveOracleChanged } from "../src/house-of-reserve-weth"
import { createHouseOfReserveWETHActiveOracleChangedEvent } from "./house-of-reserve-weth-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let newOracleNumber = BigInt.fromI32(234)
    let newHouseOfReserveWETHActiveOracleChangedEvent = createHouseOfReserveWETHActiveOracleChangedEvent(
      newOracleNumber
    )
    handleHouseOfReserveWETHActiveOracleChanged(
      newHouseOfReserveWETHActiveOracleChangedEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("HouseOfReserveWETHActiveOracleChanged created and stored", () => {
    assert.entityCount("HouseOfReserveWETHActiveOracleChanged", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "HouseOfReserveWETHActiveOracleChanged",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newOracleNumber",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
