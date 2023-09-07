## How to migration from v1 to v2

1. Due to sdk v2 only support on chain trade, we add and remove some options:

   1. add `palette.slider`

   ```
       slider: {
         radioButtonBorderColor: '#FFFFFF',
       },
   ```

   1. add `defaultTheme`
   1. add `brokerId`, it will be written on-chain along with the position order form
   1. `futuresWsHost` changed to plain protocol: `wss://perp-qa.pancakeswap.finance/plain`
   1. remove `deliveryWsHost`
   1. remove `liteConfig`
   1. remove `defaultFavoriteSymbols`
   1. remove `proGridLayoutMargin`
   1. remove `footerConfig`

1. Remove `login` event

1. Remove broker whitelist restrict
