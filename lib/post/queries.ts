import { postRepository } from "@/repositories/post/json-post-repository";
import { cache } from "react";

export const findAll = cache(async () => await postRepository.findAll());

export const findBySlug = cache(async (slug: string) => await postRepository.findBy(slug))
