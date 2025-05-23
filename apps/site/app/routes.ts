import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("about", "./routes/about.tsx"),
  route("work", "./routes/work.tsx"),
  route("writing", "./routes/writing.tsx"),
  route("contact", "./routes/contact.tsx"),
] satisfies RouteConfig;
