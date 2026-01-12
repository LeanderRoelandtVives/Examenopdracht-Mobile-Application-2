const BASE_URL = 'https://dummyjson.com'


function delay(ms: number)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function get<T>(endpoint: string): Promise<T>
{
    const response = await fetch(`${BASE_URL}${endpoint}`)

      await delay(1000);

    if (!response.ok)
    {
        throw new Error('Network response was not ok')
    }

    return response.json()
}

export async function post<T>(endpoint: string): Promise<T>
{
    const response = await fetch(`${BASE_URL}${endpoint}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    title: 'BMW Pencil',
                })
        }
    )

    if (!response.ok)
    {
        throw new Error('Network response was not ok')
    }

    return response.json()
}