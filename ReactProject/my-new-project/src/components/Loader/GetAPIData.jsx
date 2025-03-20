export const GetAPIData = async ({ request }) => {
    try {
        const url = new URL(request.url); 
        const userId = url.searchParams.get("userId"); 
        let apiUrl = "https://jsonplaceholder.typicode.com/users";
        if (userId) {
            apiUrl += `?id=${userId}`; 
        }
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return await response.json(); 
    } catch (error) {
        console.log(error);
        throw new Response("Error fetching data", { status: 500 });
    }
};
