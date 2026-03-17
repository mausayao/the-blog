import { PostModel } from "@/models/posts/post-model";

export interface PostRepository {
    findAllPublic(): Promise<PostModel[]>;
    findAll(): Promise<PostModel[]>;
    findById(id: string): Promise<PostModel>;
    findBy(slug: string): Promise<PostModel>;
}
