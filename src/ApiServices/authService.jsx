export const register = async (username, password) => {
    // console.log(username, password);
    try {
        const fetchResponse = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await fetchResponse.json();
        return data;    
    } catch (error) {
        return error.message;
    }
    
}