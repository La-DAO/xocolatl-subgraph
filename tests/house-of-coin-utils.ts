import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  ActiveOracleChanged,
  ChainlinkAddressChange,
  CoinMinted,
  CoinPayback,
  Initialized,
  Liquidation,
  LiquidationParamsChanges,
  MarginCall,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TickersChanged,
  TrustedSignerChanged,
  UMAHelperAddressChanged
} from "../generated/HouseOfCoin/HouseOfCoin"

export function createActiveOracleChangedEvent(
  newOracleNumber: BigInt
): ActiveOracleChanged {
  let activeOracleChangedEvent = changetype<ActiveOracleChanged>(newMockEvent())

  activeOracleChangedEvent.parameters = new Array()

  activeOracleChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newOracleNumber",
      ethereum.Value.fromUnsignedBigInt(newOracleNumber)
    )
  )

  return activeOracleChangedEvent
}

export function createChainlinkAddressChangeEvent(
  _newAddrUsdFiat: Address,
  _newAddrReserveAsset: Address
): ChainlinkAddressChange {
  let chainlinkAddressChangeEvent = changetype<ChainlinkAddressChange>(
    newMockEvent()
  )

  chainlinkAddressChangeEvent.parameters = new Array()

  chainlinkAddressChangeEvent.parameters.push(
    new ethereum.EventParam(
      "_newAddrUsdFiat",
      ethereum.Value.fromAddress(_newAddrUsdFiat)
    )
  )
  chainlinkAddressChangeEvent.parameters.push(
    new ethereum.EventParam(
      "_newAddrReserveAsset",
      ethereum.Value.fromAddress(_newAddrReserveAsset)
    )
  )

  return chainlinkAddressChangeEvent
}

export function createCoinMintedEvent(
  user: Address,
  backedTokenId: BigInt,
  amount: BigInt
): CoinMinted {
  let coinMintedEvent = changetype<CoinMinted>(newMockEvent())

  coinMintedEvent.parameters = new Array()

  coinMintedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  coinMintedEvent.parameters.push(
    new ethereum.EventParam(
      "backedTokenId",
      ethereum.Value.fromUnsignedBigInt(backedTokenId)
    )
  )
  coinMintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return coinMintedEvent
}

export function createCoinPaybackEvent(
  user: Address,
  reservetokenID: BigInt,
  amount: BigInt
): CoinPayback {
  let coinPaybackEvent = changetype<CoinPayback>(newMockEvent())

  coinPaybackEvent.parameters = new Array()

  coinPaybackEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  coinPaybackEvent.parameters.push(
    new ethereum.EventParam(
      "reservetokenID",
      ethereum.Value.fromUnsignedBigInt(reservetokenID)
    )
  )
  coinPaybackEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return coinPaybackEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createLiquidationEvent(
  userLiquidated: Address,
  liquidator: Address,
  collateralAmount: BigInt,
  debtAmount: BigInt
): Liquidation {
  let liquidationEvent = changetype<Liquidation>(newMockEvent())

  liquidationEvent.parameters = new Array()

  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "userLiquidated",
      ethereum.Value.fromAddress(userLiquidated)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "liquidator",
      ethereum.Value.fromAddress(liquidator)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "collateralAmount",
      ethereum.Value.fromUnsignedBigInt(collateralAmount)
    )
  )
  liquidationEvent.parameters.push(
    new ethereum.EventParam(
      "debtAmount",
      ethereum.Value.fromUnsignedBigInt(debtAmount)
    )
  )

  return liquidationEvent
}

export function createLiquidationParamsChangesEvent(
  globalBase: BigInt,
  marginCallThreshold: BigInt,
  liquidationThreshold: BigInt,
  liquidationPricePenaltyDiscount: BigInt,
  collateralPenalty: BigInt
): LiquidationParamsChanges {
  let liquidationParamsChangesEvent = changetype<LiquidationParamsChanges>(
    newMockEvent()
  )

  liquidationParamsChangesEvent.parameters = new Array()

  liquidationParamsChangesEvent.parameters.push(
    new ethereum.EventParam(
      "globalBase",
      ethereum.Value.fromUnsignedBigInt(globalBase)
    )
  )
  liquidationParamsChangesEvent.parameters.push(
    new ethereum.EventParam(
      "marginCallThreshold",
      ethereum.Value.fromUnsignedBigInt(marginCallThreshold)
    )
  )
  liquidationParamsChangesEvent.parameters.push(
    new ethereum.EventParam(
      "liquidationThreshold",
      ethereum.Value.fromUnsignedBigInt(liquidationThreshold)
    )
  )
  liquidationParamsChangesEvent.parameters.push(
    new ethereum.EventParam(
      "liquidationPricePenaltyDiscount",
      ethereum.Value.fromUnsignedBigInt(liquidationPricePenaltyDiscount)
    )
  )
  liquidationParamsChangesEvent.parameters.push(
    new ethereum.EventParam(
      "collateralPenalty",
      ethereum.Value.fromUnsignedBigInt(collateralPenalty)
    )
  )

  return liquidationParamsChangesEvent
}

export function createMarginCallEvent(
  user: Address,
  mintedAsset: Address,
  reserveAsset: Address
): MarginCall {
  let marginCallEvent = changetype<MarginCall>(newMockEvent())

  marginCallEvent.parameters = new Array()

  marginCallEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  marginCallEvent.parameters.push(
    new ethereum.EventParam(
      "mintedAsset",
      ethereum.Value.fromAddress(mintedAsset)
    )
  )
  marginCallEvent.parameters.push(
    new ethereum.EventParam(
      "reserveAsset",
      ethereum.Value.fromAddress(reserveAsset)
    )
  )

  return marginCallEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTickersChangedEvent(
  newtickerUsdFiat: Bytes,
  newtickerReserveAsset: Bytes
): TickersChanged {
  let tickersChangedEvent = changetype<TickersChanged>(newMockEvent())

  tickersChangedEvent.parameters = new Array()

  tickersChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newtickerUsdFiat",
      ethereum.Value.fromFixedBytes(newtickerUsdFiat)
    )
  )
  tickersChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newtickerReserveAsset",
      ethereum.Value.fromFixedBytes(newtickerReserveAsset)
    )
  )

  return tickersChangedEvent
}

export function createTrustedSignerChangedEvent(
  newSigner: Address
): TrustedSignerChanged {
  let trustedSignerChangedEvent = changetype<TrustedSignerChanged>(
    newMockEvent()
  )

  trustedSignerChangedEvent.parameters = new Array()

  trustedSignerChangedEvent.parameters.push(
    new ethereum.EventParam("newSigner", ethereum.Value.fromAddress(newSigner))
  )

  return trustedSignerChangedEvent
}

export function createUMAHelperAddressChangedEvent(
  newAddress: Address
): UMAHelperAddressChanged {
  let umaHelperAddressChangedEvent = changetype<UMAHelperAddressChanged>(
    newMockEvent()
  )

  umaHelperAddressChangedEvent.parameters = new Array()

  umaHelperAddressChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAddress",
      ethereum.Value.fromAddress(newAddress)
    )
  )

  return umaHelperAddressChangedEvent
}
