import { BlogData } from "./data";

export async function GET(){
    return new Response(JSON.stringify(BlogData))
}