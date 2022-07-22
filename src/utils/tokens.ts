const WETH = {
  name: "",
  symbol: "WETH",
  address: "",
  decimals: "",
  protocolName: "",
};

const USDC = {
  name: "",
  symbol: "USDC",
  address: "",
  decimals: "",
  protocolName: "",
};

const USDT = {
  name: "Tether",
  symbol: "USDT",
  address: "",
  decimals: "",
  protocolName: "",
};

const DAI = {
  name: "",
  symbol: "DAI",
  address: "",
  decimals: "",
  protocolName: "",
};

const ETH = {
  name: "",
  symbol: "ETH",
  address: "",
  decimals: "",
  protocolName: "",
};

const FRAX = {
  name: "",
  symbol: "FRAX",
  address: "",
  decimals: "",
  protocolName: "",
};

const COMBO = {
  name: "",
  symbol: "COMBO",
  address: "",
  decimals: "",
  protocolName: "",
};

const BOBA = {
  name: "",
  symbol: "BOBA",
  address: "",
  decimals: "",
  protocolName: "",
};

const WBTC = {
  name: "",
  symbol: "WBTC",
  address: "",
  decimals: "",
  protocolName: "",
};

const LINK = {
  name: "",
  symbol: "LINK",
  address: "",
  decimals: "",
  protocolName: "",
};

const BZRX = {
  name: "",
  symbol: "BZRX",
  address: "",
  decimals: "",
  protocolName: "",
};

const KNC = {
  name: "",
  symbol: "KNC",
  address: "",
  decimals: "",
  protocolName: "",
};

const LEND = {
  name: "",
  symbol: "LEND",
  address: "",
  decimals: "",
  protocolName: "",
};

const YFI = {
  name: "",
  symbol: "YFI",
  address: "",
  decimals: "",
  protocolName: "",
};

const UNI = {
  name: "",
  symbol: "UNI",
  address: "",
  decimals: "",
  protocolName: "",
};

const AAVE = {
  name: "",
  symbol: "AAVE",
  address: "",
  decimals: "",
  protocolName: "",
};

const COMP = {
  name: "",
  symbol: "COMP",
  address: "",
  decimals: "",
  protocolName: "",
};

const LRC = {
  name: "",
  symbol: "LRC",
  address: "",
  decimals: "",
  protocolName: "",
};

const BAT = {
  name: "",
  symbol: "BAT",
  address: "",
  decimals: "",
  protocolName: "",
};

const MATIC = {
  name: "",
  symbol: "MATIC",
  address: "",
  decimals: "",
  protocolName: "",
};

const FTM = {
  name: "",
  symbol: "FTM",
  address: "",
  decimals: "",
  protocolName: "",
};

const BNB = {
  name: "",
  symbol: "BNB",
  address: "",
  decimals: "",
  protocolName: "",
};

const OP = {
  name: "",
  symbol: "OP",
  address: "",
  decimals: "",
  protocolName: "",
};

const AVAX = {
  name: "",
  symbol: "AVAX",
  address: "",
  decimals: "",
  protocolName: "",
};

export const TOKENS_SYMBOLS = {
  WETH: WETH.symbol,
  ETH: ETH.symbol,
  FRAX: FRAX.symbol,
  USDT: USDT.symbol,
  USDC: USDC.symbol,
  DAI: DAI.symbol,
  BOBA: BOBA.symbol,
  WBTC: WBTC.symbol,
  LINK: LINK.symbol,
  BZRX: BZRX.symbol,
  KNC: KNC.symbol,
  LEND: LEND.symbol,
  YFI: YFI.symbol,
  UNI: UNI.symbol,
  AAVE: AAVE.symbol,
  COMP: COMP.symbol,
  LRC: LRC.symbol,
  COMBO: COMBO.symbol,
  FTM: FTM.symbol,
  MATIC: MATIC.symbol,
  BNB: BNB.symbol,
  OP: OP.symbol,
  AVAX: AVAX.symbol,
};

export const BORROW_TOKEN_LIST = [USDC, DAI, ETH];

export const FURUCOMBO_AAVE_TOKENS = [
  "AMPL",
  "BAL",
  BAT.symbol,
  "BUSD",
  "CRV",
  DAI.symbol,
  "ENJ",
  "ETH",
  "FEI",
  "FRAX",
  "GUSD",
  "KNCL",
  "LINK",
  "MANA",
  "MKR",
  "PAX",
  "RAI",
  "REN",
  "SNX",
  "TUSD",
  "UNI",
  USDC.symbol,
  "USDT",
  WBTC.symbol,
  "YFI",
  "ZRX",
  "renFIL",
  "sUSD",
];

export const FURUCOMBO_UTILITY_TOKENS = [
  "1INCH",
  "3Crv",
  "3EURpool-f",
  "AAVE",
  "ADS",
  "ADX",
  "AGLD",
  "AKRO",
  "ALBT",
  "ALCX",
  "ALEPH",
  "ALPHA",
  "AMP",
  "AMPL",
  "ANJ",
  "ANT",
  "AXS",
  "BAC",
  "BADGER",
  "BAL",
  "BAND",
  BAT.symbol,
  "BBTC",
  "BFC",
  "BID",
  "BIT",
  "BNS",
  "BNSD",
  "BNT",
  "BOND",
  "BTC2x-FLI",
  "BUSD",
  "BUSD3CRV-f",
  "BZRX",
  "CEL",
  "CGT",
  "CHADS",
  "CHAI",
  "CHAIN",
  "CHI",
  "COMBO",
  "COMP",
  "CORE",
  "CREAM",
  "CRV",
  "CVX",
  "D3-f",
  DAI.symbol,
  "DEFI+L",
  "DEFI+S",
  "DEGO",
  "DE",
  "DHT",
  "DIA",
  "DODO",
  "DOUGH",
  "DPI",
  "DUSD",
  "DYDX",
  "EDEN",
  "EDEN",
  "ELF",
  "ENJ",
  "ENS",
  "ESD",
];

export const NEW_VAULT_ETH_ASSETS = [
  {
    asset: "ETH-A",
    input: ETH.symbol,
    output: DAI.symbol,
    generateAmount: 1974.4827586206898,
    outputMinimum: 15000,
    fee: 2.25,
    collateralization: 286300,
  },
  {
    asset: "ETH-B",
    input: ETH.symbol,
    output: DAI.symbol,
    generateAmount: 2202.3076923076924,
    outputMinimum: 40000,
    fee: 4,
    collateralization: 286300,
  },
  {
    asset: "ETH-C",
    input: ETH.symbol,
    output: DAI.symbol,
    generateAmount: 1684.1176470588236,
    outputMinimum: 5000,
    fee: 0.5,
    collateralization: 286300,
  },
];

export const NEW_VAULT_ASSETS = [
  ...NEW_VAULT_ETH_ASSETS,
  {
    asset: "BAT-A",
    input: BAT.symbol,
    output: DAI.symbol,
    generateAmount: 0.0064205837775,
    outputMinimum: 10000,
    fee: 4,
    collateralization: 71.92,
  },
  {
    asset: "WBTC-A",
    input: WBTC.symbol,
    output: DAI.symbol,
    generateAmount: 26679.458620689657,
    outputMinimum: 15000,
    fee: 3.25,
    collateralization: 3868521.5,
  },
  {
    asset: "USDC-A",
    input: USDC.symbol,
    output: DAI.symbol,
    generateAmount: 0.9900990099009901,
    outputMinimum: 15000,
    fee: 1,
    collateralization: 100,
  },
  {
    asset: "USDC-B",
    input: USDC.symbol,
    output: DAI.symbol,
    generateAmount: 0.8333333333333334,
    outputMinimum: 10000,
    fee: 50,
    collateralization: 100,
  },
  {
    asset: "MATIC-A",
    input: MATIC.symbol,
    output: DAI.symbol,
    generateAmount: 0.6152327912571429,
    outputMinimum: 15000,
    fee: 3,
    collateralization: 107.66573847,
  },
];
