import { BigInt } from "@graphprotocol/graph-ts"
import {
  HouseOfCoin,
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
import { User } from "../generated/schema"


export function handleCoinMinted(event: CoinMinted): void {
  let id = event.params.user.toHex();
  let user = User.load(id)
  if (!user) {
    user = new User(id)
    user.xocDebt = BigInt.fromI32(0)
  }

  user.xocDebt = user.xocDebt.plus(event.params.amount);
  user.save()
}

export function handleCoinPayback(event: CoinPayback): void {
  let id = event.params.user.toHex();
  let user = User.load(id)
  if (!user) {
    user = new User(id)
  }
  user.xocDebt = user.xocDebt.minus(event.params.amount);
  user.save()
}

export function handleLiquidation(event: Liquidation): void {
  let id = event.params.userLiquidated.toHex();
  let user = User.load(id)
  if (!user) {
    user = new User(id)
  }
  user.wethDeposited = user.wethDeposited.minus(event.params.collateralAmount); 
  user.xocDebt = user.xocDebt.minus(event.params.debtAmount);
  event.params
  user.save();
}

export function handleActiveOracleChanged(event: ActiveOracleChanged): void {}

export function handleChainlinkAddressChange(
  event: ChainlinkAddressChange
): void {}

export function handleInitialized(event: Initialized): void {}

export function handleLiquidationParamsChanges(
  event: LiquidationParamsChanges
): void {}

export function handleMarginCall(event: MarginCall): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleTickersChanged(event: TickersChanged): void {}

export function handleTrustedSignerChanged(event: TrustedSignerChanged): void {}

export function handleUMAHelperAddressChanged(
  event: UMAHelperAddressChanged
): void {}
