export function* range(n: number, m: number): Generator<number> {
    for (let i = n; i < m; i++) yield i;
}