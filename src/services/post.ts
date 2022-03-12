import api from "./api";

export interface PostType {
    id: number;
    title: string;
    date: string;
    content: string;
    excerpt: string;
    featured_image: string | undefined;
    url: string;
}

const post = {
    list: async function (params: Object = {}): Promise<PostType[]> {
        const result = await api.get("/posts", { ...{ per_page: 25, _embed: true }, ...params });

        return result.map((post: any) => {
            return {
                id: post.id,
                title: post.title.rendered,
                date: post.date,
                content: post.content.rendered,
                excerpt: post.excerpt.rendered,
                featured_image: post._embedded["wp:featuredmedia"]
                    ? post._embedded["wp:featuredmedia"][0]?.source_url
                    : null,
                url: "/posts/" + post.id,
            } as PostType;
        });
    },

    show: async function (id: number): Promise<PostType> {
        const result = await api.get("/posts/" + id, { _embed: true });
        return {
            id: result.id,
            title: result.title.rendered,
            date: result.date,
            content: result.content.rendered,
            excerpt: result.excerpt.rendered,
            featured_image: result._embedded["wp:featuredmedia"]
                ? result._embedded["wp:featuredmedia"][0]?.source_url
                : null,
            url: "/posts/" + result.id,
        } as PostType;
    },
};

export default post;
