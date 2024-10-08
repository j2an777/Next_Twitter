export const getTrends = async () => {
    const res = await fetch(`http://localhost:9090/api/trends`, {
        next: {
            tags: ['trends'],
        },
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch trends`);
    }

    return res.json();
}