import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  HouseOfReserveWETHActiveOracleChanged,
  HouseOfReserveWETHChainlinkAddressChange,
  CollateralRatioChanged,
  DepositLimitChanged,
  HouseOfReserveWETHInitialized,
  HouseOfReserveWETHRoleAdminChanged,
  HouseOfReserveWETHRoleGranted,
  HouseOfReserveWETHRoleRevoked,
  HouseOfReserveWETHTickersChanged,
  HouseOfReserveWETHTrustedSignerChanged,
  HouseOfReserveWETHUMAHelperAddressChanged,
  UserDeposit,
  UserWithdraw
} from "../generated/HouseOfReserveWETH/HouseOfReserveWETH"

export function createHouseOfReserveWETHActiveOracleChangedEvent(
  newOracleNumber: BigInt
): HouseOfReserveWETHActiveOracleChanged {
  let houseOfReserveWethActiveOracleChangedEvent = changetype<
    HouseOfReserveWETHActiveOracleChanged
  >(newMockEvent())

  houseOfReserveWethActiveOracleChangedEvent.parameters = new Array()

  houseOfReserveWethActiveOracleChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newOracleNumber",
      ethereum.Value.fromUnsignedBigInt(newOracleNumber)
    )
  )

  return houseOfReserveWethActiveOracleChangedEvent
}

export function createHouseOfReserveWETHChainlinkAddressChangeEvent(
  _newAddrUsdFiat: Address,
  _newAddrReserveAsset: Address
): HouseOfReserveWETHChainlinkAddressChange {
  let houseOfReserveWethChainlinkAddressChangeEvent = changetype<
    HouseOfReserveWETHChainlinkAddressChange
  >(newMockEvent())

  houseOfReserveWethChainlinkAddressChangeEvent.parameters = new Array()

  houseOfReserveWethChainlinkAddressChangeEvent.parameters.push(
    new ethereum.EventParam(
      "_newAddrUsdFiat",
      ethereum.Value.fromAddress(_newAddrUsdFiat)
    )
  )
  houseOfReserveWethChainlinkAddressChangeEvent.parameters.push(
    new ethereum.EventParam(
      "_newAddrReserveAsset",
      ethereum.Value.fromAddress(_newAddrReserveAsset)
    )
  )

  return houseOfReserveWethChainlinkAddressChangeEvent
}

export function createCollateralRatioChangedEvent(
  newFactor: ethereum.Tuple
): CollateralRatioChanged {
  let collateralRatioChangedEvent = changetype<CollateralRatioChanged>(
    newMockEvent()
  )

  collateralRatioChangedEvent.parameters = new Array()

  collateralRatioChangedEvent.parameters.push(
    new ethereum.EventParam("newFactor", ethereum.Value.fromTuple(newFactor))
  )

  return collateralRatioChangedEvent
}

export function createDepositLimitChangedEvent(
  newLimit: BigInt
): DepositLimitChanged {
  let depositLimitChangedEvent = changetype<DepositLimitChanged>(newMockEvent())

  depositLimitChangedEvent.parameters = new Array()

  depositLimitChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newLimit",
      ethereum.Value.fromUnsignedBigInt(newLimit)
    )
  )

  return depositLimitChangedEvent
}

export function createHouseOfReserveWETHInitializedEvent(
  version: i32
): HouseOfReserveWETHInitialized {
  let houseOfReserveWethInitializedEvent = changetype<
    HouseOfReserveWETHInitialized
  >(newMockEvent())

  houseOfReserveWethInitializedEvent.parameters = new Array()

  houseOfReserveWethInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return houseOfReserveWethInitializedEvent
}

export function createHouseOfReserveWETHRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): HouseOfReserveWETHRoleAdminChanged {
  let houseOfReserveWethRoleAdminChangedEvent = changetype<
    HouseOfReserveWETHRoleAdminChanged
  >(newMockEvent())

  houseOfReserveWethRoleAdminChangedEvent.parameters = new Array()

  houseOfReserveWethRoleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  houseOfReserveWethRoleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  houseOfReserveWethRoleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return houseOfReserveWethRoleAdminChangedEvent
}

export function createHouseOfReserveWETHRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): HouseOfReserveWETHRoleGranted {
  let houseOfReserveWethRoleGrantedEvent = changetype<
    HouseOfReserveWETHRoleGranted
  >(newMockEvent())

  houseOfReserveWethRoleGrantedEvent.parameters = new Array()

  houseOfReserveWethRoleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  houseOfReserveWethRoleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  houseOfReserveWethRoleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return houseOfReserveWethRoleGrantedEvent
}

export function createHouseOfReserveWETHRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): HouseOfReserveWETHRoleRevoked {
  let houseOfReserveWethRoleRevokedEvent = changetype<
    HouseOfReserveWETHRoleRevoked
  >(newMockEvent())

  houseOfReserveWethRoleRevokedEvent.parameters = new Array()

  houseOfReserveWethRoleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  houseOfReserveWethRoleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  houseOfReserveWethRoleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return houseOfReserveWethRoleRevokedEvent
}

export function createHouseOfReserveWETHTickersChangedEvent(
  newtickerUsdFiat: Bytes,
  newtickerReserveAsset: Bytes
): HouseOfReserveWETHTickersChanged {
  let houseOfReserveWethTickersChangedEvent = changetype<
    HouseOfReserveWETHTickersChanged
  >(newMockEvent())

  houseOfReserveWethTickersChangedEvent.parameters = new Array()

  houseOfReserveWethTickersChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newtickerUsdFiat",
      ethereum.Value.fromFixedBytes(newtickerUsdFiat)
    )
  )
  houseOfReserveWethTickersChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newtickerReserveAsset",
      ethereum.Value.fromFixedBytes(newtickerReserveAsset)
    )
  )

  return houseOfReserveWethTickersChangedEvent
}

export function createHouseOfReserveWETHTrustedSignerChangedEvent(
  newSigner: Address
): HouseOfReserveWETHTrustedSignerChanged {
  let houseOfReserveWethTrustedSignerChangedEvent = changetype<
    HouseOfReserveWETHTrustedSignerChanged
  >(newMockEvent())

  houseOfReserveWethTrustedSignerChangedEvent.parameters = new Array()

  houseOfReserveWethTrustedSignerChangedEvent.parameters.push(
    new ethereum.EventParam("newSigner", ethereum.Value.fromAddress(newSigner))
  )

  return houseOfReserveWethTrustedSignerChangedEvent
}

export function createHouseOfReserveWETHUMAHelperAddressChangedEvent(
  newAddress: Address
): HouseOfReserveWETHUMAHelperAddressChanged {
  let houseOfReserveWethumaHelperAddressChangedEvent = changetype<
    HouseOfReserveWETHUMAHelperAddressChanged
  >(newMockEvent())

  houseOfReserveWethumaHelperAddressChangedEvent.parameters = new Array()

  houseOfReserveWethumaHelperAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return houseOfReserveWethumaHelperAddressChangedEvent
}

export function createUserDepositEvent(
  user: Address,
  asset: Address,
  amount: BigInt
): UserDeposit {
  let userDepositEvent = changetype<UserDeposit>(newMockEvent())

  userDepositEvent.parameters = new Array()

  userDepositEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userDepositEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  userDepositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return userDepositEvent
}

export function createUserWithdrawEvent(
  user: Address,
  asset: Address,
  amount: BigInt
): UserWithdraw {
  let userWithdrawEvent = changetype<UserWithdraw>(newMockEvent())

  userWithdrawEvent.parameters = new Array()

  userWithdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userWithdrawEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  userWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return userWithdrawEvent
}
