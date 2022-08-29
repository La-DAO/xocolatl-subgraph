import { BigInt } from "@graphprotocol/graph-ts"
import {
  HouseOfReserveWETHActiveOracleChanged as HouseOfReserveWETHActiveOracleChangedEvent,
  HouseOfReserveWETHChainlinkAddressChange as HouseOfReserveWETHChainlinkAddressChangeEvent,
  CollateralRatioChanged as CollateralRatioChangedEvent,
  DepositLimitChanged as DepositLimitChangedEvent,
  HouseOfReserveWETHInitialized as HouseOfReserveWETHInitializedEvent,
  HouseOfReserveWETHRoleAdminChanged as HouseOfReserveWETHRoleAdminChangedEvent,
  HouseOfReserveWETHRoleGranted as HouseOfReserveWETHRoleGrantedEvent,
  HouseOfReserveWETHRoleRevoked as HouseOfReserveWETHRoleRevokedEvent,
  HouseOfReserveWETHTickersChanged as HouseOfReserveWETHTickersChangedEvent,
  HouseOfReserveWETHTrustedSignerChanged as HouseOfReserveWETHTrustedSignerChangedEvent,
  HouseOfReserveWETHUMAHelperAddressChanged as HouseOfReserveWETHUMAHelperAddressChangedEvent,
  UserDeposit as UserDepositEvent,
  UserWithdraw as UserWithdrawEvent
} from "../generated/HouseOfReserveWETH/HouseOfReserveWETH"

import {
  User,
} from "../generated/schema"


export function handleUserDeposit(event: UserDepositEvent): void {
  let id = event.params.user.toHex();
  let user = User.load(id)
  if (!user) {
    user = new User(id)
    user.wethDeposited = BigInt.fromI32(0)
    user.xocDebt = BigInt.fromI32(0)
  }
  user.wethDeposited = user.wethDeposited.plus(event.params.amount);
  user.save()
}

export function handleUserWithdraw(event: UserWithdrawEvent): void {
  let id = event.params.user.toHex();
  let user = User.load(id)
  if (!user) {
    user = new User(id)
  }
  user.wethDeposited = user.wethDeposited.minus(event.params.amount);
  user.save()
}

export function handleHouseOfReserveWETHActiveOracleChanged(
  event: HouseOfReserveWETHActiveOracleChangedEvent
): void {
}

export function handleHouseOfReserveWETHChainlinkAddressChange(
  event: HouseOfReserveWETHChainlinkAddressChangeEvent
): void {
}

export function handleCollateralRatioChanged(
  event: CollateralRatioChangedEvent
): void {
}

export function handleDepositLimitChanged(
  event: DepositLimitChangedEvent
): void {
}

export function handleHouseOfReserveWETHInitialized(
  event: HouseOfReserveWETHInitializedEvent
): void {
}

export function handleHouseOfReserveWETHRoleAdminChanged(
  event: HouseOfReserveWETHRoleAdminChangedEvent
): void {
}

export function handleHouseOfReserveWETHRoleGranted(
  event: HouseOfReserveWETHRoleGrantedEvent
): void {
}

export function handleHouseOfReserveWETHRoleRevoked(
  event: HouseOfReserveWETHRoleRevokedEvent
): void {
}

export function handleHouseOfReserveWETHTickersChanged(
  event: HouseOfReserveWETHTickersChangedEvent
): void {
}

export function handleHouseOfReserveWETHTrustedSignerChanged(
  event: HouseOfReserveWETHTrustedSignerChangedEvent
): void {
}

export function handleHouseOfReserveWETHUMAHelperAddressChanged(
  event: HouseOfReserveWETHUMAHelperAddressChangedEvent
): void {
}


