const API_URL = "https://animejacket.com/wp-json/wp/v2";

const get = async function (endpoint: String, params?: Object): Promise<any> {
    let url = API_URL + endpoint;

    if (params) {
        url = url + "?" + new URLSearchParams(params as any).toString();
    }

    const response = await fetch(url);

    return response.json();
};

export default {
    get,
};
