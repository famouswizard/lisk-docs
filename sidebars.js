/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //documentationSidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually

  documentationSidebar: [
    {
      type: 'category',
      label: 'About Lisk',
      collapsible: true,
      collapsed: false,
      items: [
        'intro',
        'about-lisk/network-info',
        'about-lisk/governance',
        'about-lisk/fees'
      ],
    },
    {
      type: 'category',
      label: 'Building on Lisk',
      collapsible: true,
      collapsed: false,
      items: [
        'building-on-lisk/connecting-to-a-wallet',
        'building-on-lisk/contracts',
        {
          type: 'category',
          label: 'Deploying a Smart Contract',
          collapsible: true,
          collapsed: true,
          items: [
            'building-on-lisk/deploying-smart-contract/with-Foundry',
            'building-on-lisk/deploying-smart-contract/with-Hardhat',
            'building-on-lisk/deploying-smart-contract/with-thirdweb',
          ],
        },
        {
          type: 'category',
          label: 'Deploying an ERC-20 token to Lisk',
          collapsible: true,
          collapsed: true,
          items: [
            'building-on-lisk/add-token-to-lisk/standard-token',
            'building-on-lisk/add-token-to-lisk/custom-token',
          ],
          link: {
            type: 'doc',
            id: 'building-on-lisk/add-token-to-lisk/index',
          },
        },
/*         'building-on-lisk/bridge-tokens-to-lisk', */
        {
          type: 'category',
          label: 'Interacting with the blockchain',
          collapsible: true,
          collapsed: true,
          items: [
            'building-on-lisk/interacting-with-the-blockchain/viem',
            'building-on-lisk/interacting-with-the-blockchain/ethers',
            'building-on-lisk/interacting-with-the-blockchain/web3',

          ],
        },
        'building-on-lisk/migration-guide',
      ],
      link: {
        type: 'generated-index',
        title: 'Building on Lisk',
        description: 'Guides for developers to start building dApps on Lisk L2.',
        slug: '/category/building-on-lisk',
        keywords: ['guides'],
      },
    },
    {
      type: 'category',
      label: 'Lisk Tools',
      collapsible: true,
      collapsed: false,
      items: [
        'lisk-tools/api-providers',
        'lisk-tools/bridges',
        'lisk-tools/oracles',
        'lisk-tools/utilities',
        'lisk-tools/indexers'
      ],
    },
  ],
};

export default sidebars;
