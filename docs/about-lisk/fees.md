---
title: Fees
sidebar_position: 1
slug: /fees
description: Documentation about network fees on Lisk. This page covers details of the two-component cost system involving L2 execution fees and L1 data fees, and offers insights on fee variations and cost-saving strategies.
keywords:
  [
    Lisk fees,
    transaction fees,
    network fees,
    Lisk network fees,
    L2 execution fee,
    L1 security fee,
    L1 data fee,
    transaction costs,
    gas fees,
    fee calculation,
    cost-saving,
    transaction timing,
    fee variations,
    Lisk platform,
  ]
---

<!-- 
TODO: Add link to the Lisk gas price tracker similar to https://optimistic.grafana.net/public-dashboards/c84a5a9924fe4e14b270a42a8651ceb8?orgId=1&refresh=5m - once available
 -->
# Fees

Fees on Lisk Mainnet are, for the most part, significantly lower than on the L1 Ethereum network.
The low transaction fees can be provided because Lisk is a [Layer 2 optimistic rollup](https://ethereum.org/en/developers/docs/scaling/optimistic-rollups) network.

## How are fees on Lisk calculated?

Every Lisk Mainnet transaction has two costs: An **L2 execution fee** and an **L1 data fee**.
At a high level, the L2 fee is the cost to execute your transaction on L2 and the L1 fee is the estimated cost to publish your transaction on L1 (in a rollup batch).

```text
transaction_fee = l2_execution_fee + l1_data_fee
```

- **L2 Execution Fee**: 
The [L2 Execution Fee](https://docs.optimism.io/stack/transactions/fees#execution-gas-fee) is equal to the amount of gas used by the transaction multiplied by the gas price attached to the transaction.
  ```
  l2_execution_fee = transaction_gas_price * l2_gas_used
  ```

  Because Lisk Mainnet is EVM equivalent, the **gas used** by a transaction on Lisk Mainnet is **exactly the same** as the gas used by the same transaction on Ethereum.
  If a transaction costs 100,000 gas on Ethereum, it will cost 100,000 gas on Lisk Mainnet.
  **The only difference is that the gas price on Lisk Mainnet is much lower** than the gas price on Ethereum so you'll end up paying much less in ETH.

  The transaction gas price is the sum of the [Base Fee](https://ethereum.org/en/developers/docs/gas/#base-fee) and the optional additional [Priority Fee](https://ethereum.org/en/developers/docs/gas/#priority-fee).

  ```
  transaction_gas_price = l2_base_fee + l2_priority_fee
  ```

  Like Ethereum, Lisk Mainnet uses the [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) mechanism to set the Base Fee for transactions (although with [different parameter values](https://docs.optimism.io/chain/differences#eip-1559-parameters) compared to Ethereum).

  For this component of the fee, you can estimate the total cost of a transaction using the same tools you would use to estimate the cost of a transaction on Ethereum.
  You can read more about how Ethereum's gas fees work over on [Ethereum.org](https://ethereum.org/en/developers/docs/gas/).
- **L1 Data Fee**: 
The [L1 Data Fee](https://docs.optimism.io/stack/transactions/fees#l1-data-fee) is the only part of the Lisk Mainnet transaction fee that differs from the Ethereum transaction fee.
This fee arises from the fact that the transaction data for all Lisk Mainnet transactions is published to Ethereum.
This guarantees that the transaction data is available for nodes to download and execute.

  The L1 Data Fee is automatically charged for any transaction that is included in a Lisk Mainnet block.
  This fee is deducted directly from the address that sent the transaction.
  The exact amount paid depends on the estimated size of the transaction in bytes after compression, the current Ethereum gas price and/or blob gas price, and several small parameters.

  The L1 Data Fee is most heavily influenced by the Ethereum base fee that is continuously and trustlessly relayed from Ethereum to Lisk Mainnet.

:::note

It is currently **not** possible to limit the maximum L1 Data Fee that a transaction is willing to pay.

For further information about transaction fees, please check the [Optimism Developer Docs > Transaction Fees](https://docs.optimism.io/stack/transactions/fees)

:::

## How do fluctuation in gas price on Ethereum (L1) affect transaction costs on Lisk (L2)?

While the L1 Data Fee will be always cheaper compared to posting the transaction directly to Ethereum mainnet (due to the efficient encoding in batching transactions), it's value will vary depending on the amount of transactions on the L1.
If the timing of your transaction is flexible, you can save cost by submitting transactions during periods when gas prices on L1 are lower than usual for example, over the weekend.

Changes after the transaction is processed on the sequencer do not affect the cost the user pays.

For an L2 transaction, the normal process is:

1. The wallet estimates the cost of the transaction and shows it to the user.
2. The user then submits the transaction.
3. The sequencer processes the transaction in two phases.
    - First, it processes the transaction.
    - Then, it deducts the gas cost, based on the L1 and L2 gas prices at that time.
4. After that, the transaction is written to L1.

In principle, between steps 1 and 3 the gas price might change. However, it can not increase by more than 12.5%, therefore the difference between the price shown to user in step 1 and the actual one is bounded by 12.5%.  
After step 3, the finality of the transaction is Lisk's responsibility.
If the L1 gas price spikes, Lisk pays the new cost.

In conclusion, the user will pay at most 12.5% more than expected.
See the [Optimism Docs > Transaction Fees](https://docs.optimism.io/stack/transactions/fees#mechanism) for more information around transaction fees.