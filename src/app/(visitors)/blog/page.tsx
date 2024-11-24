export default async function Blog() {
    // Fetching data from the API
    let data;
    try {
        const response = await fetch('http://localhost:3000/api/blog');
        if (!response.ok) {
            throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        data = await response.json();
    } catch (error) {
        console.error('Error fetching blog data:', error);
        data = []; // Fallback to an empty array on error
    }

    return (
        <div className="text-fuchsia-950 w-[100vw] h-[100vh] p-4">
            <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
            {data.length > 0 ? (
                data.map((blog: { title: string; content: string }, index: number) => (
                    <div key={index} className="mb-4 border-b pb-2">
                        <h2 className="text-xl font-semibold">{blog.title}</h2>
                        <p className="text-gray-700">{blog.content}</p>
                    </div>
                ))
            ) : (
                <p>No blogs available.</p>
            )}
        </div>
    );
}


