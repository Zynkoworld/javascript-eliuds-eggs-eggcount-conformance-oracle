const eggCount = (displayValue) =>
  [...displayValue.toString(2)].reduce(
    (acc, curr) => (curr === '1' ? (acc += 1) : acc),
    0,
  );

const __in = [0, 16, 89, 2000000000];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: eggCount(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
