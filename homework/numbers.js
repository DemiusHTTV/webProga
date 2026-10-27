function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) [a, b] = [b, a % b];
  return a;
}

function reduce(num, den) {
  if (den === 0) throw new Error("Знаменатель равен нулю");
  if (den < 0) { num = -num; den = -den; }
  const g = gcd(num, den) || 1;
  return [num / g, den / g];
}

function fracToString([num, den]) {
  return den === 1 ? `${num}` : `${num}/${den}`;
}

function digitsOf(n) {
  return String(Math.abs(n)).split("").map(Number);
}

// Задание 1.1
function areCoprime(a, b) {
  return gcd(a, b) === 1;
}

// Задание 1.2
function isPrime(n) {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0) return false;
  for (let d = 3; d * d <= n; d += 2) {
    if (n % d === 0) return false;
  }
  return true;
}

// Задание 1.3
function sieve(n) {
  const composite = new Array(n + 1).fill(false);
  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (composite[i]) continue;
    primes.push(i);
    for (let j = i * i; j <= n; j += i) composite[j] = true;
  }
  return primes;
}

// Задание 1.4
function firstPrimes(n) {
  const primes = [];
  for (let x = 2; primes.length < n; x++) {
    if (isPrime(x)) primes.push(x);
  }
  return primes;
}

// Задание 1.5
function divisors(n) {
  const small = [];
  const large = [];
  for (let d = 1; d * d <= n; d++) {
    if (n % d === 0) {
      small.push(d);
      if (d !== n / d) large.unshift(n / d);
    }
  }
  return small.concat(large);
}

// Задание 1.6
function factorize(n) {
  n = Math.abs(n);
  const result = [];
  for (let p = 2; p * p <= n; p++) {
    let power = 0;
    while (n % p === 0) {
      n /= p;
      power++;
    }
    if (power > 0) result.push([p, power]);
  }
  if (n > 1) result.push([n, 1]);
  return result;
}

// Задание 1.7
function isPerfect(n) {
  if (n < 2) return false;
  let sum = 1;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) {
      sum += d;
      if (d !== n / d) sum += n / d;
    }
  }
  return sum === n;
}

function firstPerfect(n) {
  const result = [];
  for (let x = 2; result.length < n; x++) {
    if (isPerfect(x)) result.push(x);
  }
  return result;
}

// Задание 1.8
function threePrimes(n) {
  for (let p = 2; 3 * p <= n; p++) {
    if (!isPrime(p)) continue;
    for (let q = p; p + 2 * q <= n; q++) {
      if (!isPrime(q)) continue;
      const r = n - p - q;
      if (isPrime(r)) return [p, q, r];
    }
  }
  return null;
}

function oddAsThreePrimes(from, to) {
  const result = [];
  for (let x = from; x <= to; x++) {
    if (x % 2 === 0) continue;
    result.push([x, threePrimes(x)]);
  }
  return result;
}

// Задание 1.9
function isFibonacci(n) {
  if (n < 0) return false;
  let a = 0, b = 1;
  while (a < n) [a, b] = [b, a + b];
  return a === n;
}

// Задание 1.10
function doubleFactorial(n) {
  let result = 1n;
  for (let k = BigInt(n); k > 1n; k -= 2n) result *= k;
  return result;
}

// Задание 1.11
function pythagoreanTriples(from, to) {
  const result = [];
  for (let a = Math.max(from, 1); a <= to; a++) {
    for (let b = a + 1; b <= to; b++) {
      const c = Math.round(Math.sqrt(a * a + b * b));
      if (c > to) break;
      if (c * c === a * a + b * b) result.push([a, b, c]);
    }
  }
  return result;
}

// Задание 1.12
function mulFrac([a, b], [c, d]) {
  return reduce(a * c, b * d);
}

function divFrac([a, b], [c, d]) {
  if (c === 0) throw new Error("Деление на ноль");
  return reduce(a * d, b * c);
}

// Задание 1.13
function addFrac([a, b], [c, d]) {
  return reduce(a * d + c * b, b * d);
}

function subFrac([a, b], [c, d]) {
  return reduce(a * d - c * b, b * d);
}

// Задание 1.14
function divisibleByEachDigit(from, to) {
  const result = [];
  for (let x = from; x <= to; x++) {
    if (x === 0) continue;
    if (digitsOf(x).every((d) => d !== 0 && x % d === 0)) result.push(x);
  }
  return result;
}

// Задание 1.15
function divisibleByDigitSum(from, to) {
  const result = [];
  for (let x = from; x <= to; x++) {
    const sum = digitsOf(x).reduce((s, d) => s + d, 0);
    if (sum !== 0 && x % sum === 0) result.push(x);
  }
  return result;
}

console.log("1.1  Взаимно просты 14 и 25:", areCoprime(14, 25));
console.log("     Взаимно просты 14 и 21:", areCoprime(14, 21));

console.log("1.2  97 простое:", isPrime(97), "| 91 простое:", isPrime(91));

console.log("1.3  Простые до 50:", sieve(50).join(" "));

console.log("1.4  Первые 10 простых:", firstPrimes(10).join(" "));

console.log("1.5  Делители 60:", divisors(60).join(" "));

console.log(
  "1.6  360 =",
  factorize(360).map(([p, k]) => `${p}^${k}`).join(" * ")
);

console.log("1.7  Первые 4 совершенных:", firstPerfect(4).join(" "));

console.log("1.8  Нечётные из 1..21 как сумма трёх простых:");
for (const [x, triple] of oddAsThreePrimes(1, 21)) {
  console.log(`     ${x}: ${triple ? triple.join(" + ") : "нельзя"}`);
}

console.log("1.9  144 — число Фибоначчи:", isFibonacci(144), "| 145:", isFibonacci(145));

console.log("1.10 10!! =", doubleFactorial(10).toString(), "| 9!! =", doubleFactorial(9).toString());

console.log(
  "1.11 Пифагоровы тройки в 1..30:",
  pythagoreanTriples(1, 30).map((t) => `(${t.join(",")})`).join(" ")
);

const x = [3, 4], y = [10, 9];
console.log("1.12 3/4 * 10/9 =", fracToString(mulFrac(x, y)));
console.log("     3/4 : 10/9 =", fracToString(divFrac(x, y)));

console.log("1.13 3/4 + 10/9 =", fracToString(addFrac(x, y)));
console.log("     3/4 - 10/9 =", fracToString(subFrac(x, y)));

console.log("1.14 Делятся на каждую цифру (10..50):", divisibleByEachDigit(10, 50).join(" "));

console.log("1.15 Делятся на сумму цифр (10..50):", divisibleByDigitSum(10, 50).join(" "));