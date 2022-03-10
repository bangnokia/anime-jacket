import { get } from "./api";

export interface Category {
    id: Number;
    name: String;
    count: Number;
}
const index = async function (): Promise<Category[]> {
    const result = await get("/categories");

    return result;
};

export const category = { index: index };
