const API_URL = "https://wordpress.test/wp-json/wp/v2";
export const get = async function (endpoint: String, params?: Object): Promise<any> {
    let url = API_URL + endpoint;

    if (params) {
        url = url + "?" + new URLSearchParams(params as any).toString();
    }

    const response = await fetch(url);

    return response.json();
};
