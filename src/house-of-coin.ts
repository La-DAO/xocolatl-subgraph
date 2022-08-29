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
import { ExampleEntity } from "../generated/schema"

export function handleActiveOracleChanged(event: ActiveOracleChanged): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.newOracleNumber = event.params.newOracleNumber

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.HOUSE_TYPE(...)
  // - contract.activeOracle(...)
  // - contract.assetsAccountant(...)
  // - contract.backedAsset(...)
  // - contract.checkRemainingMintingPower(...)
  // - contract.computeCostOfLiquidation(...)
  // - contract.computeUserHealthRatio(...)
  // - contract.getBackedTokenID(...)
  // - contract.getChainlinkData(...)
  // - contract.getLatestPrice(...)
  // - contract.getLiqParams(...)
  // - contract.getMaxBlockTimestampDelay(...)
  // - contract.getMaxDataTimestampDelay(...)
  // - contract.getRedstoneData(...)
  // - contract.getRoleAdmin(...)
  // - contract.hasRole(...)
  // - contract.isSignerAuthorized(...)
  // - contract.isTimestampValid(...)
  // - contract.mintCoin(...)
  // - contract.supportsInterface(...)
}

export function handleChainlinkAddressChange(
  event: ChainlinkAddressChange
): void {}

export function handleCoinMinted(event: CoinMinted): void {}

export function handleCoinPayback(event: CoinPayback): void {}

export function handleInitialized(event: Initialized): void {}

export function handleLiquidation(event: Liquidation): void {}

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
