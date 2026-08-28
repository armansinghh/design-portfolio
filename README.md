# design.armansingh.me
a portfolio site that doesn't feel like a portfolio site


![Hero section screenshot](./public/preview.png)

## try it
[design.armansingh.me -->](https://hefy.vercel.app)


## what is it
this is my design/motion portfolio, arman aka hefy. i do video edits, posters, motion graphics, a custom typeface, and some pixel art on the side, and i wanted a site that actually *felt* like that stuff instead of just a grid of images in a template. so everything scrolls, snaps, and wobbles a little more than a normal portfolio would.

the hero is a 3D tunnel of glass boxes flying at you (one `InstancedMesh`, not 1500 separate meshes, so it doesn't chug). scroll into the about section and there's a snake illustration that draws itself as you scroll, then hands off to its own little spring animation once you scroll past a point, and hands back if you scroll up again mid-animation. that handoff was way more annoying to get right than it has any business being.

rest of the site is smooth scrolled with lenis, has its own drag to scroll scrollbar instead of the native one, and the project section splits into categories (posters, typography, motion, game assets, society work) each with a different way of showing itself off, hover for sound video previews, a live custom font typing demo, click to swap timelapses, etc.

## quick start
```bash
git clone <this-repo-url>
cd <this-repo-folder>
npm install
npm run dev
```
then open [http://localhost:3000](http://localhost:3000). that's it, everything runs fine with zero env vars, only the contact form submission needs the env stuff below.

## features
1. 3D animated hero tunnel (r3f + bloom postprocessing + camera follows your cursor a bit)
2. scroll synced snake SVG in the about section that draws itself, then autoplays, then hands back to scroll if you reverse
3. lenis smooth scrolling site-wide + a custom drag scrollbar
4. project showcase split by category, each with its own interaction instead of a generic gallery
5. contact form that fires a discord webhook AND a real email via resend at the same time, with inline bento grid validation
6. custom floating nav with a staggered dropdown + a genuinely functional draggable zipper divider between sections

## running it with the contact form working
you need a `.env.local`:
```
RESEND_API_KEY=your_resend_api_key
DISCORD_WEBHOOK_URL=your_discord_webhook_url
CONTACT_EMAIL_FROM=you@yourdomain.com
CONTACT_EMAIL_TO=you@yourdomain.com
```
without these the whole site still runs fine, the contact form just won't actually send anything.

requires node 18+, npm (no lockfile-specific tooling assumed).

```bash
npm run dev      # dev server
npm run build    # prod build
npm run lint     # eslint
```

## how it works
the tunnel effect is one instanced mesh instead of 1500 separate boxes, each box just loops its z position through a fixed depth range every frame, keeps it at 60fps without the gpu caring how many "objects" are technically in the scene.

the snake was the fiddly part. it's scroll driven for the first ~55% of the about section, then hands off to a timed spring animation past that point, with debounced logic to bridge smoothly back to scroll if you reverse direction mid-animation. wanted it to feel alive on a fast scroll without janking on a slow deliberate one, took a few rewrites to land on something that didn't fight itself. (its still kinda broken, would be fixing soon)

styling's mostly tailwind v4, with a handful of hand rolled utility classes in globals.css for the grain/grid backgrounds and marquee keyframes since those don't map to utilities cleanly.

## stack
next.js (app router) + typescript, tailwind v4, framer motion, react three fiber + drei + postprocessing for the hero, lenis for scroll, resend for email.

## credits
Stickers: [Sticker Maker](https://getstickerpack.com/)<br>
Society Media: [ig/@gfgmits.official](https://instagram.com/gfgmits.official)<br>
Fonts: [Google Fonts](https://fonts.google.com) - Bytesized, Elms Sans, Erica One<br>
3D hero: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + [drei](https://github.com/pmndrs/drei) + [@react-three/postprocessing](https://github.com/pmndrs/react-postprocessing), env map HDR from [Poly Haven](https://polyhaven.com)<br>
Animation: [Framer Motion](https://www.framer.com/motion/)<br>
Scrolling: [Lenis](https://github.com/darkroomengineering/lenis) by [Darkroom Engineering](https://darkroom.engineering)<br>
Icons: [react-icons](https://react-icons.github.io/react-icons/)<br>
Video/image hosting: [Cloudinary](https://cloudinary.com)<br>
Email: [Resend](https://resend.com)<br>
Built with [Next.js](https://nextjs.org) + [Tailwind CSS](https://tailwindcss.com)<br>

Built by [Arman Singh](https://armansingh.vercel.app)