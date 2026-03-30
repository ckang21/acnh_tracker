export type Villager = {
    name: string;
    image_url: string;
    species: string;
    personality: string;
    gender: string;
    birthday_month: string;
    birthday_day: string;
    phrase: string;
    appearances: string[];
};

async function get<T>(path: string, params?: Record<string, string>): Promise<T> {
    const key = import.meta.env.VITE_NOOKIPEDIA_API_KEY as string
    const url = new URL(`https://api.nookipedia.com${path}`)
    if (params) {
        Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))
    }

    const res = await fetch(url.toString(), {
        headers: { 'X-API-Key': key },
    })
    if (!res.ok) {
        throw new Error(`API error: ${res.status}`)
    }
    return await res.json() as T
}

export function fetchVillagers(): Promise<Villager[]> {
    return get<Villager[]>('/villagers', { game: 'NH' })
}