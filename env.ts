
export function env<T>(name: string, def: T): T | string {
    // @ts-ignore
    const env = Deno.env.get(name);
    return env ?? def
}

