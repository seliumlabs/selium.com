import { loader } from "fumadocs-core/source";
import { news } from "../.source/server";

export const newsSource = loader(news.toFumadocsSource(), {
  baseUrl: "/news",
});
