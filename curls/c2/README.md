# c2 template output file size

## With pictures

| category       | full size | transferred |
| -------------- | --------- | ----------- |
| packs-and-bags | 701.66 kB | 504.27 kB   |
| mens-jackets   | 306.70 kB | 110.83 kB   |

## Without pictures

| category       | full size | transferred |
| -------------- | --------- | ----------- |
| packs-and-bags | 272.32 kB | 89.55 kB    |
| mens-jackets   | 269.30 kB | 88.90 kB    |

_Note: the css file size remains the same, using Tailwind. There is no css splitting._

_Note2: Deleting the entire `/c3` path produces very similar numbers for the `/c2` paths. It's about 1 kB different._

## Next.js terminal output

Route (pages) Size First Load JS

```bash
Route (pages)                              Size     First Load JS
┌ ○ /                                      1.64 kB        78.7 kB
├   └ css/a6086129adba8575.css             577 B
├   /_app                                  0 B            73.4 kB
├ ○ /404                                   182 B          73.6 kB
├ λ /api/hello                             0 B            73.4 kB
├ ○ /b/[brand]                             279 B          73.7 kB
├ ● /b/[brand]/c/[category]                321 B          73.8 kB
├   ├ /b/patagonia/c/womens-jackets
├   ├ /b/patagonia/c/mens-jackets
├   ├ /b/patagonia/c/packs-and-bags
├   └ [+3 more paths]
├ ● /b2/[brand]/c2/[category]              1.46 kB        78.5 kB
├   ├ /b2/patagonia/c2/womens-jackets
├   ├ /b2/patagonia/c2/mens-jackets
├   ├ /b2/patagonia/c2/packs-and-bags
├   └ [+3 more paths]
└ ● /b2/[brand]/c3/[category]              1.76 kB        78.8 kB
    ├ /b2/patagonia/c3/womens-jackets
    ├ /b2/patagonia/c3/mens-jackets
    ├ /b2/patagonia/c3/packs-and-bags
    └ [+3 more paths]
+ First Load JS shared by all              77.4 kB
  ├ chunks/framework-cda2f1305c3d9424.js   45.2 kB
  ├ chunks/main-4dcb7f9b52833aba.js        27.2 kB
  ├ chunks/pages/_app-ae907860a06fe57a.js  296 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js     750 B
  └ css/3847471e328e2166.css               3.98 kB
```
