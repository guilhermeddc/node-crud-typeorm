import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    duration,
    category_id,
  }: VideoRequest): Promise<Video | Error> {
    const repoVideo = getRepository(Video);
    const repoCategory = getRepository(Category);

    if (!(await repoCategory.findOne(category_id))) {
      return new Error("Category does not exists!");
    }

    const video = repoVideo.create({
      name,
      description,
      duration,
      category_id,
    });

    await repoVideo.save(video);

    return video;
  }
}
