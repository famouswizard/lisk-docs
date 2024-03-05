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
        'building-on-lisk/add-token-to-lisk',
        'building-on-lisk/deploying-a-smart-contract',
        {
          type: 'category',
          label: 'Interacting with the Blockchain',
          collapsible: true,
          collapsed: true,
          items: [
            'building-on-lisk/interacting-with-the-blockchain/ethers',
            'building-on-lisk/interacting-with-the-blockchain/viem',
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
        'lisk-tools/bridges',
        'lisk-tools/api-providers',
        'lisk-tools/utilities',
      ],
    },
  ],

};

export default sidebars;
