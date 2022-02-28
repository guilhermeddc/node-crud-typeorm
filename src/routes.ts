import { Router } from "express";
import { CreateCategoryController } from "./controllers/createCategoryController";
import { CreateVideoController } from "./controllers/createVideoController";
import { DeleteCategoryController } from "./controllers/deleteCategoryController";
import { GetAllCategoriesController } from "./controllers/getAllCategoriesController";
import { GetAllVideosController } from "./controllers/getAllVideosController";
import { UpdateCategoryController } from "./controllers/updateCategoryController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };
