export const TOKENS = {
  ETH: "ETH",
  FRAX: "FRAX",
  USDT: "USDT",
  BOBA: "BOBA",
  USDC: "USDC",
  DAI: "DAI",
  WBTC: "WBTC",
  LINK: "LINK",
  BZRX: "BZRX",
  KNC: "KNC",
  LEND: "LEND",
  YFI: "YFI",
  UNI: "UNI",
  AAVE: "AAVE",
  COMP: "COMP",
  LRC: "LRC",
};

export const LOAN_LIST = [
  {
    token: TOKENS.DAI,
    apy: 1.58,
    prices: {
      [TOKENS.AAVE]: 0.00771,
      [TOKENS.BZRX]: 0.00001,
      [TOKENS.COMP]: 0.01092,
      [TOKENS.ETH]: 0.00041,
      [TOKENS.LINK]: 0.08037,
      [TOKENS.LRC]: 1.19327,
      [TOKENS.UNI]: 0.11711,
      [TOKENS.USDC]: 1.12,
      [TOKENS.USDT]: 1.12,
      [TOKENS.WBTC]: 0.00004,
      [TOKENS.YFI]: 0.00007,
    },
  },
  {
    token: TOKENS.USDC,
    apy: 1.58,
    prices: {
      [TOKENS.AAVE]: 0.00771,
      [TOKENS.BZRX]: 0.00001,
      [TOKENS.COMP]: 0.01083,
      [TOKENS.DAI]: 1.11,
      [TOKENS.ETH]: 0.00041,
      [TOKENS.LINK]: 0.07972,
      [TOKENS.LRC]: 1.18361,
      [TOKENS.UNI]: 0.11676,
      [TOKENS.USDT]: 1.11,
      [TOKENS.WBTC]: 0.00004,
      [TOKENS.YFI]: 0.00007,
    },
  },
  {
    token: TOKENS.USDT,
    apy: 1.58,
    prices: {
      [TOKENS.AAVE]: 0.00771,
      [TOKENS.BZRX]: 0.00001,
      [TOKENS.COMP]: 0.01083,
      [TOKENS.DAI]: 1.11,
      [TOKENS.ETH]: 0.00041,
      [TOKENS.LINK]: 0.07972,
      [TOKENS.LRC]: 1.18361,
      [TOKENS.UNI]: 0.11676,
      [TOKENS.USDT]: 1.11,
      [TOKENS.WBTC]: 0.00004,
      [TOKENS.YFI]: 0.00007,
    },
  },
  {
    token: TOKENS.ETH,
    apy: 0.5,
    prices: {
      [TOKENS.AAVE]: 23.10071,
      [TOKENS.BZRX]: 0.00001,
      [TOKENS.COMP]: 32.73084,
      [TOKENS.DAI]: 3769.32,
      [TOKENS.LINK]: 241.03698,
      [TOKENS.LRC]: 3579.10126,
      [TOKENS.UNI]: 351.25968,
      [TOKENS.USDC]: 3761.37,
      [TOKENS.USDT]: 3761.37,
      [TOKENS.WBTC]: 0.09703,
      [TOKENS.YFI]: 0.18301,
    },
  },
  {
    token: TOKENS.WBTC,
    apy: 0.25,
    prices: {
      [TOKENS.AAVE]: 673.9079,
      [TOKENS.BZRX]: 0.00001,
      [TOKENS.COMP]: 954.84418,
      [TOKENS.DAI]: 59317.87,
      [TOKENS.ETH]: 19.11859,
      [TOKENS.LINK]: 7031.67923,
      [TOKENS.LRC]: 104411.74865,
      [TOKENS.UNI]: 10247.16386,
      [TOKENS.USDC]: 59192.74,
      [TOKENS.USDT]: 59192.74,
      [TOKENS.YFI]: 5.33888,
    },
  },
  {
    token: TOKENS.LINK,
    apy: 0.83,
    prices: {
      [TOKENS.AAVE]: 0.24545,
      [TOKENS.BZRX]: 0.00001,
      [TOKENS.COMP]: 0.34777,
      [TOKENS.DAI]: 19.2,
      [TOKENS.ETH]: 0.00619,
      [TOKENS.LRC]: 38.02784,
      [TOKENS.UNI]: 3.73213,
      [TOKENS.USDC]: 19.16,
      [TOKENS.USDT]: 19.16,
      [TOKENS.WBTC]: 0.00092,
      [TOKENS.YFI]: 0.00195,
    },
  },
  {
    token: TOKENS.BZRX,
    apy: 0.44,
    prices: {
      // [TOKENS.AAVE]: 0.00771,
      // [TOKENS.BZRX]: 0.00001,
      // [TOKENS.COMP]: 0.01092,
      // [TOKENS.ETH]: 0.00041,
      // [TOKENS.LINK]: 0.08037,
      // [TOKENS.LRC]: 1.19327,
      // [TOKENS.UNI]: 0.11711,
      // [TOKENS.USDC]: 1.12,
      // [TOKENS.USDT]: 1.12,
      // [TOKENS.WBTC]: 0.00004,
      // [TOKENS.YFI]: 0.00007,
    },
  },
  {
    token: TOKENS.UNI,
    apy: 0.83,
    prices: {
      [TOKENS.AAVE]: 0.16843,
      [TOKENS.BZRX]: 0.00001,
      [TOKENS.COMP]: 0.23864,
      [TOKENS.DAI]: 13.18,
      [TOKENS.ETH]: 0.00425,
      [TOKENS.LINK]: 1.75739,
      [TOKENS.LRC]: 26.09498,
      [TOKENS.USDC]: 13.15,
      [TOKENS.USDT]: 13.15,
      [TOKENS.WBTC]: 0.00063,
      [TOKENS.YFI]: 0.00134,
    },
  },
  {
    token: TOKENS.AAVE,
    apy: 0.83,
    prices: {
      [TOKENS.BZRX]: 0.00001,
      [TOKENS.COMP]: 3.79266,
      [TOKENS.DAI]: 209.38,
      [TOKENS.ETH]: 0.06751,
      [TOKENS.LINK]: 27.92992,
      [TOKENS.LRC]: 414.7247,
      [TOKENS.UNI]: 40.70186,
      [TOKENS.USDC]: 210.2,
      [TOKENS.USDT]: 210.2,
      [TOKENS.WBTC]: 0.01,
      [TOKENS.YFI]: 0.02121,
    },
  },
  {
    token: TOKENS.LRC,
    apy: 0.83,
    prices: {
      [TOKENS.AAVE]: 0.01653,
      [TOKENS.BZRX]: 0.00001,
      [TOKENS.COMP]: 0.02343,
      [TOKENS.LRC]: 1.3,
      [TOKENS.ETH]: 0.00042,
      [TOKENS.LINK]: 0.17248,
      [TOKENS.UNI]: 0.25135,
      [TOKENS.USDC]: 1.29,
      [TOKENS.USDT]: 1.29,
      [TOKENS.WBTC]: 0.00007,
      [TOKENS.YFI]: 0.00014,
    },
  },
];

export const BORROW_TOKEN_LIST = [TOKENS.USDC, TOKENS.DAI, TOKENS.ETH];

export const FURUCOMBO_TYPES = {
  FURUCOMBO_CLAIM_OUTPUT: "FURUCOMBO_CLAIM_OUTPUT",
  FURUCOMBO_SWAP: "FURUCOMBO_SWAP",
  FURUCOMBO_VAULT: "FURUCOMBO_VAULT",
  FURUCOMBO_ADDRESS: "FURUCOMBO_ADDRESS",
  FURUCOMBO_ADDRESS_OR_ENS: "FURUCOMBO_ADDRESS_OR_ENS",
  FURUCOMBO_ASSET: "FURUCOMBO_ASSET",
  FURUCOMBO_TRADING_PARS: "FURUCOMBO_TRADING_PARS",
  FURUCOMBO_MULTIPLE_INPUTS: "FURUCOMBO_MULTIPLE_INPUTS",
  FURUCOMBO_BRIGDE: "FURUCOMBO_BRIGDE",
  FURUCOMBO_POOL: "FURUCOMBO_POOL",
  FURUCOMBO_INPUT_TOKEN: "FURUCOMBO_INPUT_TOKEN",
  FURUCOMBO_OUTPUT_TOKEN: "FURUCOMBO_OUTPUT_TOKEN",
  FURUCOMBO_TRADING_OUTPUT_PARS: "FURUCOMBO_TRADING_OUTPUT_PARS",
};

export const FURUCOMBO_CUBES = [
  {
    title: "Furucombo",
    defiName: "furucombo",
    colors: { from: "#5c5d62", to: "#9e9fa6" },
    options: [
      {
        featureName: "unstake_token",
        title: "Unstake Token",
        type: FURUCOMBO_TYPES.FURUCOMBO_OUTPUT_TOKEN,
        tokens: ["COMBO", "ETH/COMBO"],
      },
      {
        featureName: "clain_combo",
        title: "Clain COMBO",
        type: FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT,
        token: "COMBO",
      },
    ],
  },
  // {
  //   title: "Uniswap V2",
  //   defiName: "uniswapv2",
  //   colors: { from: "#e6006e", to: "#ff007a" },
  //   options: [
  //     {
  //       featureName: "swap_token",
  //       title: "Swap Token",
  //       inputs: ["1INCH", "AAVE", "ADX", "AKRO", "ALBT"],
  //       outputEstimate: [
  //         {
  //           id: "1INCH",
  //           AAVE: 0.00984,
  //           ADX: 3.75209,
  //           AKRO: 125.76352,
  //           ALBT: 6.63339,
  //         },
  //         {
  //           id: "AAVE",
  //           "1INCH": 100.27142,
  //           ADX: 378.58528,
  //           AKRO: 12687.62371,
  //           ALBT: 669.42873,
  //         },
  //         {
  //           id: "ADX",
  //           "1INCH": 0.35047,
  //           AAVE: 0.0026,
  //           AKRO: 33.31682,
  //           ALBT: 1.75732,
  //         },
  //         {
  //           id: "AKRO",
  //           "1INCH": 0.01906,
  //           AAVE: 0.00013,
  //           ADX: 0.05314,
  //           ALBT: 0.09433,
  //         },
  //         {
  //           id: "ALBT",
  //           "1INCH": 0.19977,
  //           AAVE: 0.00147,
  //           ADX: 0.56224,
  //           AKRO: 18.84516,
  //         },
  //       ],
  //     },
  //     {
  //       featureName: "add_liquidity",
  //       title: "Add Liquidity",
  //     },
  //     {
  //       featureName: "remove_liquidity",
  //       title: "Remove Liquidity",
  //       inputs: ["AAVE/ETH", "AKRO/ETH", "ALBT/ETH", "ALPHA/ETH"],
  //       outputEstimate: [
  //         { id: "AAVE/ETH", AAVE: 5.29379, ETH: 0.28907 },
  //         { id: "AKRO/ETH", AKRO: 1134.3547, ETH: 0.00482 },
  //         { id: "ALBT/ETH", ALBT: 211.12596, ETH: 0.01656 },
  //         { id: "ALPHA/ETH", ALPHA: 260.16071, ETH: 0.02632 },
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Aave V2",
    defiName: "aavev2",
    colors: { from: "#b6509e", to: "#2ebac6" },
    options: [
      // {
      //   featureName: "deposit",
      //   title: "Deposit",
      // },
      // {
      //   featureName: "withdraw",
      //   title: "Withdraw",
      // },
      {
        featureName: "borrow",
        title: "Borrow",
        type: FURUCOMBO_TYPES.FURUCOMBO_OUTPUT_TOKEN,
        tokens: [
          "AMPL",
          "BAL",
          "BAT",
          "BUSD",
          "CRV",
          "DAI",
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
          "USDC",
          "USDT",
          "WBTC",
          "YFI",
          "ZRX",
          "renFIL",
          "sUSD",
        ],
      },
      {
        featureName: "repay",
        title: "Repay",
        type: FURUCOMBO_TYPES.FURUCOMBO_ADDRESS,
        tokens: [
          "AMPL",
          "BAL",
          "BAT",
          "BUSD",
          "CRV",
          "DAI",
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
          "USDC",
          "USDT",
          "WBTC",
          "WETH",
          "YFI",
          "ZRX",
          "renFIL",
          "sUSD",
          "xSUSHI",
        ],
      },
      {
        featureName: "flashloan",
        title: "Flashloan",
        type: FURUCOMBO_TYPES.FURUCOMBO_OUTPUT_TOKEN,
        tokens: [
          "AAVE",
          "AMPL",
          "BAL",
          "BAT",
          "BUSD",
          "CRV",
          "DAI",
          "DPI",
          "ENJ",
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
          "USDC",
          "USDT",
          "WBTC",
          "WETH",
          "YFI",
          "ZRX",
          "renFIL",
          "sUSD",
        ],
      },
    ],
  },
  // {
  //   title: "Sushiswap",
  //   defiName: "sushiswap",
  //   colors: { from: "#d44588", to: "#27b0e6" },

  //   options: [
  //     { featureName: "swap_token", title: "Swap Token" },
  //     { featureName: "add_liquidity", title: "Add Liquidity" },
  //     { featureName: "remove_liquidity", title: "Remove Liquidity" },
  //   ],
  // },
  {
    title: "Curve",
    defiName: "curve",
    colors: { from: "#000FFF", to: "#3465A4" },
    options: [
      //     {
      //       featureName: "swap_usd",
      //       title: "Swap USD",
      //     },
      //     { title: "Swap BTC", featureName: "swap_btc" },
      //     { title: "Swap ETH", featureName: "swap_eth" },
      //     { title: "Swap Crypto", featureName: "swap_crypto" },
      //     { title: "Swap Other", featureName: "swap_other" },
      {
        title: "Add Liquidity",
        featureName: "add_liquidity",
        type: FURUCOMBO_TYPES.FURUCOMBO_MULTIPLE_INPUTS,
        outputsOptions: [
          {
            token: "3Crv",
            DAI: 0.96991,
            USDC: 0.96992,
            USDT: 0.96992,
          },
          {
            token: "3EURpool-f",
            agEUR: 0.98758,
            EURT: 0.99011,
            EURS: 0.9868,
          },
          {
            token: "BUSD3CRV-f",
            BUSD: 0.98476,
            DAI: 0.9847,
            USDC: 0.98471,
            USDT: 0.98524,
          },
          {
            token: "D3-f",
            FRAX: 0.98926,
            FEI: 0.98843,
            alUSD: 0.98755,
          },
          {
            token: "EURT-f",
            EURT: 0.98855,
            sEUR: 0.98388,
          },
          {
            token: "FRAX3CRV-f",
            FRAX: 0.98258,
            DAI: 0.98266,
            USDC: 0.98267,
            USDT: 0.9832,
          },
          {
            token: "LUSD3CRV-f",
            LUSD: 0.97984,
            DAI: 0.97665,
            USDC: 0.97666,
            USDT: 0.97719,
          },
          {
            token: "LinkUSD3CRV",
            LINKUSD: 0.99321,
            DAI: 0.96698,
            USDC: 0.96699,
            USDT: 0.96752,
          },
        ],
      },
      //     { title: "Remove Liquidity", featureName: "remove_liquidity" },
      {
        title: "Stake Token",
        featureName: "stake_token",
        type: FURUCOMBO_TYPES.FURUCOMBO_INPUT_TOKEN,
        tokens: [
          "3Crv",
          "3EURpool-f",
          "BUSD3CRV-f",
          "D3-f",
          "EURT-f",
          "FRAX3CRV-f",
          "LUSD3CRV-f",
          "MIM-3LP3CRV-f",
          "MIM-UST-f",
          "OUSD3CRV-f",
          "TUSD3CRV-f",
          "a3CRV",
          "alUSD3CRV-f",
          "ankrCRV",
          "bCRV",
          "bbtcCRV",
          "cCRV",
          "crv3crypto",
          "crvCRVETH",
          "crvCVXETH",
          "crvEURSUSDC",
          "crvEURTUSD",
          "cvxcrv-f",
          "dusd3CRV",
          "eCRV",
          "eursCRV",
          "gusd3CRV",
          "hbtcCRV",
          "husd3CRV",
          "ib3CRV",
          "ibbtc-sbtcCRV-f",
          "linkCRV",
          "musd3CRV",
          "obtcCRV",
          "pbtcCRV",
          "rCRV",
          "renCRV",
          "rsv3 CRV",
          "sCRV",
          "sacRV",
          "sbtcCRV",
          "steCRV",
          "tbtcCRV",
          "usdk3CRV",
          "usdn3CRV",
          "usdp3CRV",
          "usdtCRV",
          "ust3CRV",
          "yCRV",
          "ypaxCrv",
        ],
      },
      {
        title: "Claim CRV",
        featureName: "claim_crv",
        type: FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT,
        token: "CRV",
      },
    ],
  },
  // {
  //   title: "Yearn",
  //   defiName: "yearn",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     {
  //       title: "Deposit Vault",
  //       featureName: "deposit_vault",
  //     },
  //     { title: "Withdraw Vault", featureName: "withdraw_vault" },
  //   ],
  // },
  {
    title: "Compound",
    defiName: "compound",
    colors: { from: "#2E9F9A", to: "#00D395" },
    options: [
      //   {
      //     featureName: "supply",
      //     title: "Supply",
      //   },
      //   {
      //     featureName: "withdraw",
      //     title: "Withdraw",
      //   },
      {
        featureName: "repay",
        title: "Repay",
        type: FURUCOMBO_TYPES.FURUCOMBO_ADDRESS,
        tokens: [
          "AAVE",
          "BAT",
          "COMP",
          "DAI",
          "ETH",
          "LINK",
          "MKR",
          "SUSHI",
          "TUSD",
          "UNI",
          "USDC",
          "USDT",
          "WBTC",
          "YFI",
          "ZRX",
        ],
      },
      {
        featureName: "collect_comp",
        title: "Collect COMP",
        type: FURUCOMBO_TYPES.FURUCOMBO_CLAIM_OUTPUT,
        token: "COMP",
      },
    ],
  },
  // {
  //   title: "Maker",
  //   defiName: "maker",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     { title: "New Vault", featureName: "new_vault" },
  //     { title: "Deposit", featureName: "deposit" },
  //     { title: "Withdraw", featureName: "withdraw" },
  //     { title: "Generate", featureName: "generate" },
  //     { title: "Pay Back", featureName: "pay_back" },
  //   ],
  // },
  // {
  //   title: "1inch",
  //   defiName: "oneinch",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     {
  //       featureName: "swap_token",
  //       title: "Swap Token",
  //     },
  //   ],
  // },
  // {
  //   title: "Paraswap",
  //   defiName: "paraswap",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     {
  //       featureName: "swap_token",
  //       title: "Swap Token",
  //     },
  //   ],
  // },
  // {
  //   title: "Uniswap V3",
  //   defiName: "uniswapv3",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     {
  //       featureName: "swap_token",
  //       title: "Swap Token",
  //     },
  //   ],
  // },
  // {
  //   title: "B‧Protocol",
  //   defiName: "bprotocol",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     {
  //       featureName: "new_vault",
  //       title: "New Vault",
  //     },
  //     { featureName: "new_vault", title: "New Vault" },
  //     { featureName: "deposit", title: "Deposit" },
  //     { featureName: "withdraw", title: "Withdraw" },
  //     { featureName: "generate", title: "Generate" },
  //     { featureName: "pay_back", title: "Pay Back" },
  //   ],
  // },
  // {
  //   title: "Synthetix",
  //   defiName: "synthetix",
  //   colors: { from: "#5c5d62", to: "#9e9fa6" },

  //   options: [
  //     { featureName: "stake_token", title: "Stake Token" },
  //     { featureName: "claim_rewards", title: "Claim Rewards" },
  //     { featureName: "unstake_token", title: "Unstake Token" },
  //     { featureName: "claim_and_unstake", title: "Claim & Unstake" },
  //   ],
  // },
  {
    title: "Utility",
    defiName: "utility",
    colors: { from: "#5c5d62", to: "#9e9fa6" },
    options: [
      {
        featureName: "send_token",
        title: "Send Token",
        type: FURUCOMBO_TYPES.FURUCOMBO_ADDRESS,
        tokens: [
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
          "BAT",
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
          "DAI",
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
        ],
      },
      // { featureName: "weth", title: "WETH" },
      {
        featureName: "add_funds",
        title: "Add Funds",
        type: FURUCOMBO_TYPES.FURUCOMBO_INPUT_TOKEN,
        tokens: [
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
          "BAT",
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
          "DAI",
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
        ],
      },
      {
        featureName: "return_funds",
        title: "Return Funds",
        type: FURUCOMBO_TYPES.FURUCOMBO_OUTPUT_TOKEN,
        tokens: [
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
          "BAT",
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
        ],
      },
      {
        featureName: "gas_saver",
        title: "Gas Saver",
        type: FURUCOMBO_TYPES.FURUCOMBO_INPUT_TOKEN,
        tokens: ["CHI", "GST2"],
      },
      {
        featureName: "token_bridge",
        title: "Token Bridge",
        type: FURUCOMBO_TYPES.FURUCOMBO_BRIGDE,
        network: "Polygon",
        tokens: [
          "1INCH",
          "AAVE",
          "ADX",
          "AKRO",
          "ALBT",
          "ALCX",
          "ALEPH",
          "BAC",
          "BADGER",
          "BAL",
          "BAND",
          "BAT",
          "BID",
          "BNT",
          "BOND",
          "BTC2x-FLI",
          "BUSD",
          "BZRX",
          "CEL",
          "CGT",
          "CHAI",
          "CHAIN",
          "COMBO",
          "COMP",
          "CORE",
          "CREAM",
          "CRV",
          "DAI",
          "DEFI+L",
          "DEFI+S",
          "DEFI5",
          "DHT",
          "DOUGH",
          "DPI",
          "EDEN",
          "ENJ",
          "ETH",
          "ETH2x-FLI",
          "EURS",
          "FARM",
          "FOAM",
          "FRAX",
        ],
      },
    ],
  },
];
