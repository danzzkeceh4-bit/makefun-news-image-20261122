# The World in One Day — Sunday 22 November 2026

[![make.fun](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/danzzkeceh4-bit/makefun-news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/danzzkeceh4-bit/makefun-news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122)

A make.fun entry for [news-image-20261122](https://make.fun/bounty/news-image-20261122):
one image summing up the world's news of Sunday 22 November 2026.

The front page leads with Iran striking a U.S. air base in Kuwait as
the Gulf war widens — tankers hit off Oman, an ADNOC vessel attacked
in the Strait of Hormuz — beside a small stylised map of the Gulf.
Below it, six stories from the day: COP31 deadlocked over fossil
fuels in Antalya; 400 drones and 110 missiles hitting Ukraine, with
debris falling in Poland; a 6.9-magnitude quake in the Peruvian Andes;
Estonia shutting its border with Russia after a drone hits a Russian
cargo ship in the Baltic; cartel boss "El Chapo Isidro" seized in
Mexico; and former Brazilian president Bolsonaro in intensive care.
The foot of the page adds the FBI probing a hack of its criminal
database, India v New Zealand opening their first Test in Wellington,
and Trump saying an Iran deal could last 20 years.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` — a
1024&times;1024 front page drawn programmatically with Python/PIL — to
`/output/entry.png`, byte for byte, and then reads the copy back to
check its SHA-256 against the bundled file, so two runs always write
the same bytes:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
