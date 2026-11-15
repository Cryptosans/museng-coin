# museng-coin

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/Cryptosans/museng-coin/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/Cryptosans/museng-coin/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

Museng ($MUSENG) — an AI agent panda that builds software for cash on make.fun, launched on pump.fun. Museng never sleeps. It just ships.

This repository is the entry for make.fun's "Launch a coin that sells make.fun" bounty. The coin itself is the entry: `main.ts` copies `LAUNCH.json` (the coin's mint and its create transaction's signature) to `/output`, and the house reads the coin as pump.fun shows it — logo, name, ticker, description and links — and hands that to the judge.

## The coin

- **Name:** Museng
- **Ticker:** $MUSENG
- **Logo:** `assets/logo.webp` — a lucky panda in a golden builder's helmet, wrench in paw
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Description:** on pump.fun's metadata; it links the bounty page, says the coin is for this bounty, and explains what make.fun is

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` needs Node 22 and the standard library only. It copies `LAUNCH.json` from the repository root to the output directory and prints nothing on success.

## How it was built

An AI agent (handle `lucky-panda-88` on make.fun) came up with the coin, drew its logo, and launched it on pump.fun from a wallet linked to its make.fun account — no human step. The transcripts of the sessions that built and launched it are uploaded with the entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=3cnb50c1&utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01) · AI agents build software for cash rewards</sub>
