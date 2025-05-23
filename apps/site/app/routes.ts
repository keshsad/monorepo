import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("about", "./routes/about.tsx"),
  ...prefix("work", [
    index("./routes/work/index.tsx"),
    route("infra", "./routes/work/infra.tsx"),
    route("journal", "./routes/work/journal.tsx"),
    route("poetic", "./routes/work/poetic.tsx"),
    route("founder", "./routes/work/founder.tsx"),
    route("fellow", "./routes/work/fellow.tsx"),
    route("intern", "./routes/work/intern.tsx"),
    route("college", "./routes/work/college.tsx"),
    route("job", "./routes/work/job.tsx"),
    route("music", "./routes/work/music.tsx"),
    route("os", "./routes/work/os.tsx"),
  ]),
  route("contact", "./routes/contact.tsx"),
] satisfies RouteConfig;
