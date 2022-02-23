// https://eth-ropsten.alchemyapi.io/v2/3Ik-z_XzA8s22HpLZLDqpY1ij6Ko9Fa0

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/3Ik-z_XzA8s22HpLZLDqpY1ij6Ko9Fa0',
      accounts: ['1325cfada74ad19a56c97ce3308a14aea032f6f7a13d1161963283e27821ffa7']
    }
  }


}