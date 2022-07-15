import { TOKENS_SYMBOLS } from "./tokens";
import {
  Furucombo,
  Uniswapv2,
  Aave,
  Sushiswap,
  Curve,
  Yearn,
  Compound,
  Maker,
  // OneInch,
  // Paraswap,
  // UniswapV3,
  Bprotocol,
  Synthetix,
  Utility,
} from "./furucomboConfig";

const TOKENS = TOKENS_SYMBOLS;

export const PAIR_LIST = [
  {
    token: TOKENS.WETH,
    collateral: TOKENS.USDC,
    tokenPrice: 1121.08,
    liquidation: 0.750756387059963,
    health: 0.117984,
    apr: 0.25,
    oracle: "Chainlink",
    strategy: "Active",
    ltv: 75,
    borrowed: 5882,
    available: 7855,
  },
  {
    token: TOKENS.DAI,
    collateral: TOKENS.WETH,
    tokenPrice: 1,
    apr: 0.25,
    oracle: "Chainlink",
    strategy: "Active",
    ltv: 75,
    borrowed: 2437,
    available: 292450,
  },
  {
    token: TOKENS.DAI,
    collateral: TOKENS.USDC,
    tokenPrice: 1,
    apr: 1,
    oracle: "Chainlink",
    strategy: "Active",
    ltv: 75,
    borrowed: 0,
    available: 0.001008,
  },
];

export const BORROW_PAIR_LIST = [
  {
    token: TOKENS.WETH,
    collateral: TOKENS.USDC,
    tokenPrice: 1121.08,
    collateralPrice: 1,
    liquidation: 0.750756387059963,
    health: 0.117984,
    apr: 0.25,
    oracle: "Chainlink",
    strategy: "Active",
    ltv: 75,
    borrowed: 5882,
    available: 7855,
  },
];

export const FURUCOMBO_CUBES = [
  Furucombo,
  Uniswapv2,
  Aave,
  Sushiswap,
  Curve,
  Yearn,
  Compound,
  Maker,
  // OneInch,
  // Paraswap,
  // UniswapV3,
  Bprotocol,
  Synthetix,
  Utility,
];
