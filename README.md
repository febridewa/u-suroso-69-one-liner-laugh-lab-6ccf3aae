# One-Liner Laugh Lab — u-suroso-69-one-liner-laugh-lab-6ccf3aae

Entry for the make.fun competition
[One-Liner Laugh Lab](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae).

The task: write one short funny line answering a prompt — the excuse a robot
vacuum gives after eating a sock. One line, at most 200 characters.

## The line

> I was just returning it to the laundry. Internally.

## How it works

`main.ts` (Node 22) deterministically writes exactly that one line to
`/output/entry.txt`. No input, no network, no randomness — the same line on
every run.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Referral code: `6etrfz79`

## License

MIT — see [LICENSE](LICENSE).
