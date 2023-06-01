import { useState } from "react";

const useHttp = () => {

    const [error, setError] = useState(false);

    const _apiURL = 'https://mern-todo-list-50k4jmxxf-andsailor.vercel.app/api/todos';

    const request = async (url = _apiURL, method = "GET", body = null, headers = { 'Content-Type': 'application/json;charset=utf-8' }) => {

        try {
            const response = await fetch(url, { method, headers, body });

            if (response.ok) {
                const json = response.json();
                return await json;
            } else {
                setError(true);
                throw new Error(`Could not fetch url: ${_apiURL} with status ${response.status}`);
            }
        } catch (e) {
            setError(true);
            console.log(e);
        }
    }

    return {
        request,
        error
    }

}

export default useHttp;