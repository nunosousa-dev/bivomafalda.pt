---
name: Casa da Bivó Mafalda
description: A family-photo album for a real house in Pinheiros, Tabuaço, Douro.
colors:
  paper: "#f7f8f4"
  white: "#fff"
  pine: "#183f34"
  pine-hover: "#285645"
  ink: "#203d34"
  muted: "#59665d"
  moss: "#697b4f"
  leaf: "#e3eadc"
  mist: "#edf0e9"
  line: "#d6ddd2"
  on-pine-muted: "#c5d5c9"
typography:
  display:
    fontFamily: "Gelasio, Georgia, serif"
    fontSize: "clamp(2.6rem, 5.5vw, 4.75rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-.035em"
  display-home:
    fontFamily: "Gelasio, Georgia, serif"
    fontSize: "clamp(2.8rem, 5.2vw, 4.65rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Gelasio, Georgia, serif"
    fontSize: "clamp(2rem, 3.5vw, 3.2rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-.035em"
  title:
    fontFamily: "Gelasio, Georgia, serif"
    fontSize: "clamp(1.9rem, 3vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-.035em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  body-reading:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".95rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".8rem"
    fontWeight: 600
    lineHeight: 1.4
  label-small:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".75rem"
    fontWeight: 600
    lineHeight: 1.75
  navigation:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".83rem"
    fontWeight: 600
    lineHeight: 1.75
  link:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".85rem"
    fontWeight: 600
    lineHeight: 1.75
  caption:
    fontFamily: "Manrope, sans-serif"
    fontSize: ".7rem"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  radius: "12px"
  button: "8px"
  gallery-control: "7px"
  inset-control: "6px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 5rem)"
  tight: ".75rem"
  compact: "1rem"
  related: "1.5rem"
  group: "2rem"
  section-gap: "2.5rem"
  column-gap: "3rem"
  section: "clamp(3.75rem, 7.5vw, 7.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: ".85rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.pine-hover}"
  button-small:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: ".7rem 1.15rem"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pine}"
    typography: "{typography.label}"
    rounded: "{rounded.button}"
    padding: ".85rem 1.5rem"
  button-light-hover:
    backgroundColor: "{colors.leaf}"
  text-link:
    typography: "{typography.link}"
  navigation-disclosure:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.navigation}"
    rounded: "{rounded.radius}"
    padding: ".6rem"
  gallery-filter:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.label-small}"
    rounded: "{rounded.gallery-control}"
    padding: ".75rem 1rem"
  gallery-filter-hover:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.pine}"
  gallery-filter-selected:
    backgroundColor: "{colors.pine}"
    textColor: "{colors.paper}"
  trail-facts:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.radius}"
    padding: "1.5rem"
  contact-banner:
    backgroundColor: "{colors.leaf}"
    textColor: "{colors.ink}"
    padding: "4.5rem 0"
  lightbox-navigation:
    backgroundColor: "transparent"
    textColor: "{colors.pine}"
    rounded: "{rounded.gallery-control}"
    width: "44px"
    height: "44px"
  lightbox-navigation-hover:
    backgroundColor: "{colors.leaf}"
---

# Design System: Casa da Bivó Mafalda

## Overview

**Creative North Star: "An Open Family-Photo Album"**

The house's own photographs, granite walls, recovered furniture and family memories provide the visual character. Cool limestone-white reading fields sit between deep vine-green sections, with a soft leaf-green invitation to make contact. Gelasio's regular and genuine italic faces give the family story warmth; Manrope keeps navigation, rates and practical details clear. This is a regional family house, not an anonymous luxury-hotel template.

The album is open and uncrowded: photographs have room to be seen, detail images sit beside the story, and captions locate rather than embellish. Rounded controls and bounded fact panels do not turn whole pages into cards. Direct telephone and email links are the actual reservation path, not a simulated booking flow.

This record describes the implemented Astro application under `site/`, not the legacy Bootstrap files at the repository root. Surface modes remain local: home is **Persuade**, the gallery is **Experience**, and the history and regional guides are **Read**. The home composition is not a mandatory template for the other pages; the direction contract remains in `.impeccable/home-brief.md`.

**Key Characteristics:**
- Real house, family and regional photography lead the identity.
- Cool paper, vine-green fields and leaf-green contact bands establish the ground.
- Regular and italic Gelasio pair with practical Manrope details.
- Open sections, inset photographs and small captions form the album.
- Quiet, accessible controls lead to a direct conversation with the owner.

## Colors

The palette is green and cool limestone, with brighter pool blues supplied by the photographs rather than an invented interface accent. The frontmatter preserves the exact source color strings; its keys map directly to identically named custom properties in `site/src/styles/global.css`.

### Primary
- **Vine Green** (`pine`): primary actions, wordmark, footer, home hero ground and amenities section; also selected gallery filters.
- **Open Vine Green** (`pine-hover`): primary-button hover, without changing text color or adding lift.

### Secondary
- **Moss** (`moss`): selected home italic emphasis, visible keyboard focus and the scrollbar thumb. It is not a second primary-button fill.
- **Soft Leaf** (`leaf`): the recurring contact banner, light-button and lightbox-control hover, and the map's loading ground.

### Neutral
- **Limestone Paper** (`paper`): page and masthead ground; light controls, disclosure and dialog surfaces; primary text on pine.
- **Photographic White** (`white`): text over the home album's photographic caption scrim, not a replacement page ground.
- **Green Ink** (`ink`): default reading text and headings on light surfaces.
- **Quiet Green** (`muted`): reading paragraphs, supporting copy and captions on light surfaces.
- **Limestone Mist** (`mist`): route facts, access notes, map section and unselected-filter hover.
- **Limestone Rule** (`line`): fine article, navigation, contact and price-table separators.
- **Pale Vine Text** (`on-pine-muted`): secondary copy and contact details on the dark home sections and footer. Do not substitute `muted` on pine.

### Named Rules
**The Photographic Blue Rule.** Pool and river blues belong to the photographs; the implemented interface has no blue accent token.

## Typography

**Display Font:** Gelasio, with Georgia and serif fallbacks.

**Body Font:** Manrope, with a sans-serif fallback. Labels and numbers use this same family; there is no mono family.

**Character:** a personable editorial serif for the house's voice, balanced by a restrained sans serif for useful information. Headings are regular-weight and balanced; paragraphs use pretty wrapping. This is a role-based, fluid hierarchy, not a fixed mathematical type scale.

`site/src/layouts/BaseLayout.astro` imports real self-hosted Fontsource Latin files: Gelasio regular (400) and italic (400), and Manrope (400, 500, 600, 700). Global `font-synthesis: none` is intentional. Keep those files available instead of synthesizing bold or italic faces or replacing the display family with a system font.

### Hierarchy
- **Display** (`typography.display`): inner-page titles in `PageIntro.astro`, with a maximum measure of 19ch. Intro descriptions have a 56ch limit and a fluid size (`clamp(.95rem, 1.3vw, 1.1rem)`).
- **Home display** (`typography.display-home`): the façade welcome only, with a 22ch limit and a genuine italic second line. At 800px and below, its size becomes `clamp(2.25rem, 7.5vw, 3.75rem)`.
- **Headline** (`typography.headline`): the shared section-heading baseline, visible in the home gallery; home story, comfort, region and contact-banner headings have local fluid sizes suited to their layouts.
- **Title** (`typography.title`): history and guide article headings, preserving the same regular serif voice at reading scale.
- **Body** (`typography.body`): the root text baseline. Long-form history and guides use `typography.body-reading`, a 70ch maximum and paragraph separation (1.2rem).
- **Labels and links** (`typography.label`, `label-small`, `navigation`, `link`): semibold practical text. They remain sentence case, not tracked uppercase headings.
- **Caption** (`typography.caption`): small factual photo captions. Gallery captions are locally .72rem; metadata and secondary utility labels range down to .65rem. Those utility sizes are not the reading-body scale.

The home family-story lead is a deliberate serif paragraph (1.65rem, line-height 1.55, tracking -.025em), not a new heading level. Rates and the lightbox count use tabular numbers. Prices retain their stronger Manrope hierarchy instead of adopting display typography.

### Named Rules
**The Two Voices Rule.** Gelasio tells the house's story; Manrope handles navigation, controls, rates and practical facts. A utility label is not a heading eyebrow, and the small “Casa da” line belongs to the complete business-name wordmark.

## Layout

The shared container is centered with a maximum width (1240px); its fluid side gutters are `spacing.gutter`. Section padding is `spacing.section`. The spacing entries in the frontmatter record reused distances, not a claim that every local value fits a rigid scale. Preserve fluid values rather than rounding them to a new framework's defaults.

Desktop reading and rate layouts are open image/copy rows. Guide articles use a slightly wider copy column (`.9fr 1.1fr`) with a fluid gap (`clamp(2.5rem, 6vw, 6rem)`); price rows use equal columns. Rules and whitespace separate articles without enclosing them in raised cards. Detail photographs in desktop guide stacks are narrower (72%) and aligned to the inline end. The home album uses an unequal two-column grid (`1.15fr 1fr`) with the first photograph spanning two rows; this is a home pattern, not the gallery grid.

### Responsive conventions

All size breakpoints are **max-width**, inclusive, and local to the components that need them:

| Width | Implemented change |
| --- | --- |
| 1000px | Home story/region gaps and amenities spacing tighten before the layout stacks. |
| 900px | Gallery changes from three columns to two; its toolbar stacks above the photos. |
| 800px | Header switches from desktop navigation to a native mobile disclosure. Story, comfort, region, articles, rates, contacts and map heading become one column; contact-banner actions stack. Footer becomes two columns with the brand spanning both. |
| 600px | Gallery and home album become one column. Gallery filters tighten and wrap; discover sibling navigation tightens. The family inset fills its available width. |
| 420px | Footer contact columns become one column. |

At 800px and below, guide articles stack **image group before copy**, but a pair of guide images remains two-up with equal widths and a .75rem gap. A lone guide image spans the group. Their crop ratios become 1.3 for pairs and 1.5 for a lone image. Price and contact photographs become wide (1.4). Do not turn every mobile photo into the same portrait crop.

The home façade is full-bleed, with a bottom-aligned welcome and action. Its desktop frame has a minimum height (570px) and fluid height (`min(680px, 71vh)`); mobile uses `min(720px, 76svh)` with the same minimum. Cropping shifts from `center 54%` to `58% center` on mobile, and the scrim changes from horizontal to bottom-up. The location caption remains; only its secondary sentence disappears. Keep the façade and telephone action visible rather than imposing a shorter generic mobile hero.

The gallery maintains row-based grids and visible captions, not masonry. Filters wrap instead of becoming a clipped horizontal strip. Long contact email addresses allow wrapping; rate amounts remain unbroken and right-aligned. The masthead is in document flow, not sticky.

## Elevation & Depth

Depth comes primarily from full-width color fields, photographs, scrims and fine rules. There is no ambient shadow on ordinary photos, article rows, rate sections or action buttons. The shared soft shadow is used only for the desktop disclosure and lightbox; the expanded mobile navigation has its own soft downward shadow. Exact shadow and motion values live in `.impeccable/design.json` because the frontmatter schema has no fields for them.

Photographic scrims are native to this implementation: a green-black gradient protects the home welcome, while bottom gradients support the home album's overlaid captions. They are legibility layers over real photos, not gradient lettering or simulated materials. The gallery lightbox dims the surrounding page with a dark translucent backdrop.

The only entry animation is the home façade's subtle scale reveal (1.4s); photo-link hovers scale the image within its clipped frame (450ms), and button background changes are short (180ms). There is no looping decoration or page-wide scroll-reveal system. `prefers-reduced-motion: reduce` globally removes animations and transitions and restores automatic scrolling.

### Named Rules
**The Overlay-Only Lift Rule.** Reserve soft shadows for navigation overlays and the image dialog; separate ordinary content with space, tonal fields and fine rules.

## Shapes

The recurring photo and panel corner is `rounded.radius`, sourced from `--radius`. Use it for bounded images, guide facts/access notes, the map frame, disclosure and lightbox. Buttons use `rounded.button`; gallery filter, expand and icon controls use `rounded.gallery-control`; inset photo labels and disclosure links use `rounded.inset-control`. These are gently rounded rectangles, not pill controls.

Photographs crop with `object-fit: cover` inside their named frames; the enlarged gallery image instead uses `contain` so the full photograph remains available. Full-bleed section edges stay square. Most separators are fine solid rules (1px), including price rows and contact methods. Dark-section separators are translucent light rules rather than dark `line` borders.

## Components

### Buttons and text links

Calm, compact and unmistakably actionable. Primary and light buttons use the frontmatter's respective fill/text pairs, semibold labels and an inline icon gap (.85rem). The shared minimum height is 52px; the small masthead variant is 44px. Keep these as **minimum** heights, not fixed-height text boxes. Hover changes only the background, using the corresponding hover variant.

Text links inherit the surrounding text color, pair a label with an SVG arrow, and gain an underline on hover. They are not another filled-button variant. All interactive elements retain the shared visible focus outline (3px moss, offset 5px). There is no additional custom pressed-state transform. Disabled buttons keep the existing reduced opacity (.5) and not-allowed cursor.

The current site has no contact form or text-field component. Do not infer input, validation, booking or newsletter styles from this record.

### Navigation

The light masthead has a two-line wordmark and minimum height (108px desktop, 88px mobile). Desktop links use `typography.navigation`; the active link is underlined. “Descobrir” is a native `details` disclosure, with a paper dropdown, soft shadow, bounded link hovers and a chevron that turns upward when open. Mobile exposes all seven page subjects in a single native disclosure; the active page is bold. Escape closes an open menu and returns focus to its summary; outside clicks also close menus.

History and guides share the separate wrapping `DiscoverNav.astro` sibling navigation. Its active subject is vine-green, bold and underlined. Preserve real URLs and `aria-current`, not visual state alone.

### Gallery filters, photographs and lightbox

The photographs are the work; controls recede. Filters use transparent/muted defaults, mist hover, and a vine-green selected state through `aria-pressed`. Their minimum target height is 44px. Selection updates the live photograph count and the `categoria` query parameter; unknown query values fall back to all photographs.

Gallery frames use the shared radius and a crop ratio (1.25). The expand affordance is a small paper square (36px) inside the linked photograph, not a separate undersized button. A figcaption remains below each image. Without JavaScript, the filters stay hidden and each photograph still links to its full-size image.

The native dialog uses a paper frame with a maximum width (1120px) and viewport gutters (1rem per side); the full image is contained with a maximum height (70svh). It includes a count, image description, close action and opposing previous/next arrows. Navigation wraps within the currently filtered images. ArrowLeft/ArrowRight move through photos; Escape, the close action or an outside click closes the dialog and restores focus to the triggering photo. Body scrolling is locked only while open. Icon controls have 44px square targets and leaf hover fills.

### Reading panels

Route facts are a mist-ground definition list, not promotional cards. The first two facts share a row; route places and connections span both columns. The shared panel radius and padding are recorded under `components.trail-facts`; quiet labels (.65rem) sit above medium-weight values (.8rem). Access notes use the same material with local padding (1.2rem 1.4rem). Keep long descriptions in the adjacent reading column rather than adding more nested containers.

### Rates

Rates sit beside real photographs in ruled, open sections. House prices use a definition list; room prices use a semantic table with its caption, column headers and row headers. Numbers are semibold and tabular, with units and seasonal notes quieter. The action requests availability through `/contactos.html`; it does not claim to complete a reservation. Preserve the existing substantive rates and policy wording instead of resolving business ambiguities visually or inventing a new policy.

### Contact banner, contact page and footer

The recurring leaf band pairs a serif invitation with a direct telephone button and an email text link. Desktop content and actions share a horizontal row; mobile stacks them without turning the band into a card. It appears on home, gallery, rates, history and guides. The contact page instead presents the direct contact methods and a location section; the footer keeps contact paths available throughout the site.

The contact page groups phone, email and address with simple stroked SVG icons and fine separators. Its keyless OpenStreetMap iframe has a bounded frame (420px high desktop, 350px mobile), a visible GPS caption and a larger-map link; the address also offers external directions. The pine footer repeats the wordmark, address, telephone numbers and email, using pale vine text for supporting copy.

### Maintenance conventions

- Change shared colors, font stacks, gutter, radius, shadow and global control/focus rules in `site/src/styles/global.css`; update this frontmatter and its sidecar together when the implemented system genuinely changes.
- Keep font imports and the shared page shell in `site/src/layouts/BaseLayout.astro`. Page-specific crops, headings and arrangements belong in the relevant `site/src/pages/` style block, not in new global tokens.
- Reuse `Header.astro`, `Footer.astro`, `PageIntro.astro`, `ContactBanner.astro`, `DiscoverNav.astro` and `TrailFacts.astro` before copying their markup. Contact values come from `site/src/data/site.ts`; photo metadata and categories come from `site/src/data/gallery.ts`.
- Icons are inline stroked SVG from `site/src/components/Icon.astro`, not glyphs or an icon font. Parent Astro scoped styles must deliberately reach child SVGs: the implemented selectors are `.previous :global(svg)` for the left-pointing gallery arrow and `.discover-menu[open] summary :global(svg)` for the open-menu chevron. Preserve their opposite/open directions when refactoring.
- Preserve the original seven page subjects and their `.html` paths; `/` is the canonical home link. No backend, fake form or booking engine is part of this design.
- Keep original photographs and their provenance with the assets; use Astro's responsive image pipeline rather than replacing them with generic stock. Full-image gallery viewing remains distinct from cropped grid thumbnails.
- Recheck 1440px desktop, 390px mobile and the narrow 320px case after shared edits, including expanded navigation, gallery filters, dialog directions/focus, long email wrapping and the rate table. Respect the global reduced-motion equivalent. These are maintenance checks, not a claim that a future change has already passed them.
- Sidecar ramps are synthesized eight-step OKLCH **panel previews**, not additional implemented CSS colors. Sidecar components are standalone translations of existing patterns; source Astro components remain authoritative for runtime behavior.

## Do's and Don'ts

### Do:
- **Do** use the real house and regional photographs, with honest captions, useful alternative text and deliberate crops.
- **Do** keep paper for reading, pine for dark fields and primary actions, leaf for the contact invitation, and pale vine text for supporting copy on pine.
- **Do** preserve the Gelasio/Manrope role split and the self-hosted regular, italic and practical text weights.
- **Do** use open image/copy rows, responsive gutters and the existing component-specific stacking rules.
- **Do** preserve semantic navigation, visible keyboard focus, 44px gallery controls, reduced motion and focus restoration.
- **Do** keep telephone, email and directions as working contact paths, and refresh both design records only from implemented changes.

### Don't:
- **Don't** turn the family-photo album into a generic luxury-hotel template or replace real property imagery with stock.
- **Don't** make the home hero, its promotional rhythm or any one surface mode a required layout for history, guides or gallery.
- **Don't** enclose whole sections in rounded cards, add ordinary-content shadows, or invent ornamental stone and paper textures.
- **Don't** use heading eyebrows, glyph icons, synthetic display faces or decorative gradient lettering as house style.
- **Don't** apply muted-on-paper text colors to pine fields or promote tiny caption sizes into body copy.
- **Don't** add booking widgets, contact forms, testimonials, newsletter controls or business claims that the static implementation does not support.
- **Don't** remove native photo links, full-image viewing, original URLs or directional icon clarity while simplifying the interface.
