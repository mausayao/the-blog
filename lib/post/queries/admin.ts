import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findPostsAdmin = cache(async () => {
    return postRepository.findAll();
});

export const findPostByIdAdmin = cache(async (id: string) => {
    return postRepository.findById(id);
});
