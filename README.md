# Next.js mutliple dynamic nested routes example

This repo is a reference for demoing (and my own memory retention) dynamic routes in Next.js, particularly when multiple levels are needed.

This example also uses `groq`, but that is not necessary. It's purely for simulating query fetching and JSON manipulation. It's pretty cool that you can use it outside of Sanity, though.

## Common example folder structure

The path `pages/b/[brand]/c/[category].tsx` is a more usual example, which I took the URL structure from REI. Brands and Categories are many to many relationships, and we have no way of knowing how many there are ahead of time (constantly growing dataset), so this is a good use-case for needing dynamic routes.

I take the time to mention all this, because many examples of nested dynamic routes only show a single dynamic route with nested pre-determined files, like: `/b/[brand]/c/patagonia/index.tsx`, which is clearly not practical. Or they will just use `/b/[[...slug]]` or some variant to catch-all. But more commonly for me, I need a set folder structure, and it's easier to determine which routes use which templates.

## Less-common example folder structure

This is a tricky problem I am trying to demo as well as test out for myself whether or not multiple templates living at the same dynamic directory level will get the usual code-splitting and static generation benefits.

The path for this is `pages/b2/[brand]/c2/[category].tsx`. It is the same as the common example in many aspects, except that `[category].tsx` uses multiple templates, depending on the category. This is an example where you want the same URL structure, but wish to lay out content different depending on the data.
