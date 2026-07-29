import { s as getDish } from "./diet-mark-D2c_m40-.mjs";
import {
  c as lazyRouteComponent,
  l as createFileRoute,
  p as notFound,
} from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dish._dishId-dJF-8OX9.js
var $$splitComponentImporter = () => import("./dish._dishId-CTVqHBh5.mjs");
var Route = createFileRoute("/dish/$dishId")({
  loader: ({ params }) => {
    const dish = getDish(params.dishId);
    if (!dish) throw notFound();
    return {
      name: dish.name.en,
      description: dish.description.en,
    };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Dish unavailable — Chapati.com" },
          {
            name: "robots",
            content: "noindex",
          },
        ],
      };
    const title = `${loaderData.name} — Chapati.com Menu`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: loaderData.description,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: loaderData.description,
        },
      ],
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
});
//#endregion
export { Route as t };
