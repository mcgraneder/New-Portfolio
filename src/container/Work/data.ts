import { images } from "@app/constants";
import { WorkData } from "@app/types";

export const worksData: ReadonlyArray<WorkData> = [
  {
    imgUrl: images.work.astralBridge1,
    projectLink: "https://astral-bridge.onrender.com/home",
    codeLink: "https://github.com/mcgraneder/Astral-Bridge",
    title: "Cross-chain Crypto Bridge/Dex",
    description:
      "Full cross chain cryptocurrency bridge that supports 9 EVM chains. Users can bridge synthetic assets and swap on desired chains. Next.js Node.js MongoDB Postgresql Typescript Web3-React Ethers.js Web3.js Ren.js Prisma tRPC, ZOD Render",
    tags: ["nextjs", "typescript", "nodejs"],
  },
  {
    imgUrl: images.work.cryptoExploer,
    projectLink: "https://catalog-explorer.onrender.com/explorerHome",
    codeLink: "https://github.com/mcgraneder/blockchain_explorer",
    title: "Blockchain exploer & indexer",
    description:
      "Full stack Etherscan like blockchain explorer for Ren L1 blockchain. Users can query blocks, transactions, ENS addresses and more. Features a bytecode decoder to extract error logs, event logs and smart contract input data info. React.js, Typescript, Node.js",
    tags: ["nextjs", "typescript"],
  },
  {
    imgUrl: images.work.nextjsWebOAuth,
    projectLink: "https://nextjs-web-oauth.vercel.app",
    codeLink: "https://github.com/paalamugan/nextjs-web-oauth-project",
    title: "Web OAuth",
    description:
      "Web OAuth Project developed using Next.js, NextAuth, Chakra UI, React, Redux, Redux Toolkit, TypeScript, Google OAuth, and more.",
    tags: ["nextjs", "typescript"],
  },
  {
    imgUrl: images.work.cryptocurrencyBitcoin,
    projectLink: "https://cryptocurrency-bitcoin.netlify.app",
    codeLink: "https://github.com/paalamugan/cryptocurrency-bitcoin-price-chart",
    title: "Crypto Bitcoin Price Chart",
    description:
      "Cryptocurrency Bitcoin Price Chart was developed using React, Typescript, coingecko-api, react-chartjs-2, chart.js and tailwindcss.",
    tags: ["reactjs", "typescript", "tailwindcss"],
  },
  {
    imgUrl: images.work.parallelWallets,
    projectLink: "https://github.com/mcgraneder/parrellel-wallets",
    codeLink: "https://github.com/mcgraneder/parrellel-wallets",
    title: "Multi-chain Wallet System Package Demo",
    description:
      "Web3 wallet NPM Package Concept sandbox that allows users to connect to multiple wallets on different chains simultaneously in order to submit multiple paralle txs. This allows app users to abstract the need to show users what chain they're on. React.js Typescript, Ren.js Node.js",
    tags: ["nextjs", "reactjs", "typescript"],
  },
  {
    imgUrl: images.work.web3login,
    projectLink: "https://github.com/mcgraneder/Celestium-DEX-InterfaceV1",
    codeLink: "https://github.com/mcgraneder/Celestium-DEX-InterfaceV1",
    title: "Web3 ECDSA Cryptographic Login System",
    description:
      "Web3 eliptic curve digital signature & email based login system Concept using ENS verification and Mongo DB database",
    tags: ["Nodejs", "reactjs", "typescript, nodejs"],
  },
  {
    imgUrl: images.work.backendCode,
    projectLink:
      "https://github.com/mcgraneder/Defi-Trading-Arbitrage-Bot/blob/main/Defi-Bot-Financial-Theory-%26-Design-Proposal.pdf",
    codeLink: "https://github.com/mcgraneder/Defi-Trading-Arbitrage-Bot",
    title: "Advanced Defi Arbitrage Bot",
    description:
      "Custom build Arb bot with Node.js/Solididty which can arbiyrage DAI/WETH across Uniswap/Suishiswap and 2 other exchanges using flashloans",
    tags: ["nodejs", "typescript"],
  },
  {
    imgUrl: images.work.translatorApplication,
    projectLink: "https://translator-application.vercel.app",
    codeLink: "https://github.com/paalamugan/translator-mono-repo",
    title: "Translator Application",
    description:
      "It helps to translate from one language to multiple languages. It is developed using svelte, typescript, nodejs and more.",
    tags: ["nodejs", "svelte", "typescript"],
  },
  {
    imgUrl: images.work.portfolioWebsite,
    projectLink: "https://paalamugan.com",
    codeLink: "https://github.com/paalamugan/paalamugan-portfolio-nextjs",
    title: "Portfolio Website",
    description:
      "Portfolio Website developed for Full Stack Software Engineer with full responsiveness using Nextjs, Tailwindcss, SCSS, Typescript and more.",
    tags: ["nextjs", "reactjs", "tailwindcss", "typescript"],
  },
];

export const workTabs = [
  {
    id: "all",
    name: "All",
  },
  {
    id: "nodejs",
    name: "Nodejs",
  },
  {
    id: "nextjs",
    name: "Nextjs",
  },
  {
    id: "reactjs",
    name: "React",
  },
] as const;
