import { PostModel } from "@/models/posts/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(ROOT_DIR, "db", "seed", "posts.json");
const SIMULATE_WAIT_IN_MS = 2000;

export class JsonPostRepository implements PostRepository {
    private async simulateWait() {
        if (SIMULATE_WAIT_IN_MS <= 0) return;

        await new Promise((resolve) =>
            setTimeout(resolve, SIMULATE_WAIT_IN_MS)
        );
    }

    private async readFromDisk(): Promise<PostModel[]> {
        const jsonConten = await readFile(JSON_POST_FILE_PATH, "utf-8");
        const parsedJson = JSON.parse(jsonConten);
        const { posts } = parsedJson;
        return posts;
    }
    async findAll(): Promise<PostModel[]> {
        await this.simulateWait();
        const posts = await this.readFromDisk();
        return posts;
    }

    async findById(id: string): Promise<PostModel> {
        await this.simulateWait();
        const posts = await this.findAll();
        const post = posts.find((post) => post.id === id);

        if (!post) throw new Error("Post não encontrado");

        return post;
    }

    async findBy(slug: string): Promise<PostModel> {
        await this.simulateWait();
        const posts = await this.findAll();
        const post = posts.find((post) => post.slug === slug);

        if (!post) throw new Error("Post não encontrado");

        return post;
    }
}

export const postRepository: PostRepository = new JsonPostRepository();
