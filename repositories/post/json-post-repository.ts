import { PostModel } from "@/models/posts/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(ROOT_DIR, "db", "seed", "posts.json");

export class JsonPostRepository implements PostRepository {
    private async readFromDisk(): Promise<PostModel[]> {
        const jsonConten = await readFile(JSON_POST_FILE_PATH, "utf-8");
        const parsedJson = JSON.parse(jsonConten);
        const { posts } = parsedJson;
        return posts;
    }
    async findAll(): Promise<PostModel[]> {
        const posts = await this.readFromDisk();
        return posts;
    }

    async findById(id: string): Promise<PostModel> {
        const posts = await this.findAll();
        const post = posts.find((post) => post.id === id);

        if (!post) throw new Error("Post não encontrado");

        return post;
    }
}

export const postRepository: PostRepository = new JsonPostRepository();
