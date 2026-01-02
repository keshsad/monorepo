# AGENTS.md

This is my monorepo built with Bun workspaces, Effect for business logic patterns, and SST v3 for multi-cloud deployments across AWS and Cloudflare Workers. The structure is simple: `packages/core` holds shared Effect utilities and types, while `apps/*` contains individual applications that deploy independently.

An important, overarching learning objective is to learn to build high-quality software, and my technical choices directly reflect that. **My main goal right now is getting this monorepo set up properly with the foundational patterns, then shipping two apps quickly.**

I need to build my personal site using SvelteKit to learn Svelte and Effect integration, and a fitness app using TanStack Start to track habits. Both can start with SST's auto-generated URLs but will eventually live on subdomains of my custom domain that resides on Cloudflare DNS. The personal site comes first since it's simpler and lets me learn the patterns before the fitness app.

All my apps must use Effect properly - `Effect.gen` for business logic, `Schema.TaggedError` for error handling, and Effect Config for environment management. The `packages/core` directory should accumulate reusable patterns that future apps and packages can pull from. I'm using SST to handle the deployment complexity since I have only one custom domain but want each app to be independently deployable across different cloud providers.

Even though I'm working fast, I won't cut corners on the Effect patterns or type safety. Better to ship two solid applications than ten half-finished ones. The goal is showing I can ship quality code under pressure while maintaining high engineering standards. Think simple, scoped features but with sophisticated TypeScript and Effect integration throughout.

## Resources and Tools

My priority is learning, so use **todo lists** and **subagents** to track progress but focus on teaching me to do things myself. Create them for complex tasks and update them as we complete steps. The `@general` and `@explore` subagents are perfect to search far and wide without cluttering the main conversation.

Always start conversations with **linear tools** to ensure projects and issues reflect reality. Always use subagents to reference the Linear Method at `~/Documents/contexts/linear-method.md` and guide me to write proper issues and project documents myself. The goal is for me to learn and leverage the Linear Method myself, so ask questions that encourage me to think critically and apply the method.

When you need help with **effect**, always use subagents to leverage the following resources in the following order. First run `effect-solutions list` and `effect-solutions show <solution>` to quickly find approved patterns and best practices. Second, explore my local copy of effect.website, effect.solutions, llm.txts, and its AGENTS.md to learn effect at `~/Desktop/man-effect` (this is part of a larger collection of personally maintained repos under my own npm scope to help me consolidate, organize, and publish knowledge). Third, I have the Effect source code forked at `~/Desktop/forks/effect/` to find real code examples. And fourth, if the previous resources are somehow insufficient, use `context7` subagents to search documentation, then finally regular web search as a last resort.

For personal context, always use subagents to search my journal at `~/Desktop/journal/`.
