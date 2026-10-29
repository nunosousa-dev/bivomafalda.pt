# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output) deployed to GitHub Pages with a custom domain (`bivomafalda.pt` via CNAME). Chosen by the owner for the modernization refactor; no backend services — frontend pages with static content only. The legacy Bootstrap/LESS/jQuery site is retained in the repo as the content source during migration.

## Users

Prospective guests of Casa da Bivó Mafalda, a rural guest house in Pinheiros (Tabuaço, Douro), Portugal. The existing site is Portuguese. Visitors need to decide whether the house fits their trip and contact the owner to reserve. Audience demographics and acquisition channels have not been confirmed.

## Product Purpose

Marketing/information site for the guest house: present the house, its history, comfort/amenities, rates, photos, and the surrounding region (tourist spots, pedestrian routes), then enable reservations by direct contact. Success = a visitor calls, emails, or navigates to the house.

## Positioning

A family house — granite walls, three generations of recovered furniture, the old wine press turned regional museum, the adega turned lounge — named after the great-grandmother who bequeathed it. The existing content describes whole-house rental with 6 double rooms, a pool and garage for 4 cars, in a Douro Vinhateiro village about 120 km from Porto. Registration numbers and the legal operator are not established by the repository and must not be invented.

## Operating Context

The new site directs reservation enquiries to the existing phone numbers and email address. It has no booking engine. GitHub Pages serves the static build. Who maintains content and how frequently it changes have not been confirmed.

## Capabilities and Constraints

- 7 pages, kept 1:1 in the refactor: Início, Descobrir → História da Casa / Pontos Turísticos / Percursos Pedestres, Preços, Galeria, Contactos.
- Preserve the existing substantive content and prices as the migration source. Repository text is not independent verification of current rates or other business facts.
- No backend in this phase. Decided: replace the contact form with direct contacts (tel:/mailto: links); replace the Google Maps JavaScript integration with a keyless OpenStreetMap iframe; remove the non-functional newsletter, commented-out availability search, and guestbook/testimonials carousel.
- Gallery: 20 real photos with categories exterior, piscina, quartos, cozinha, salas, adega (from `images/gallery/popup/img-1..20.jpg`); categories need a light re-tagging pass since some tags in the legacy HTML are template leftovers ("ground", "dining", "bathroom").
- Contact details from the existing pages: Av. António Silva 2, 5120-284 Pinheiros; phones 933 530 715 / 916 565 232 / 925 099 827; e-mail casadabivomafalda@gmail.com; GPS 41.1024187, -7.6116245.
- Site language: Portuguese (pt). Legacy `ajax/` fragments and `plugin/` demo pages are template leftovers — not shipped.

## Brand Commitments

- Name: Casa da Bivó Mafalda.
- Owner-approved direction: a new regional identity replacing the generic "Lotus" hotel template. The source content places the house in Pinheiros, Tabuaço, Douro; the earlier inspection's reference to Sabugal was incorrect.
- Real photography of the house (30 MB in `images/`) is the brand's core asset and must stay.

## Evidence on Hand

- Existing photos: `images/` (slider, gallery, about, room, banners). Verify their visible subjects before selecting images or describing them.
- Real content: house history (1853, recoveries in 1930/1950s), amenities list, full rates text, tourist spots (Igreja Matriz de Pinheiros, Capela de Sta. Bárbara), PR1 Vale do Tedo and GR14 "Rota dos Vinhos da Europa" route descriptions — all transcribed in the legacy HTML.
- Absences that must not be fabricated: no booking system, no reviews source (testimonials were cut by decision), no social profiles (legacy links were `#`), no press coverage collected.

## Product Principles

1. The house sells itself: real photographs and the family story lead; decoration never fakes what the template era did.
2. Every page ends in a working path to a human: phone and email are the conversion, and they must be one tap away on a phone.
3. Say only what is true: prices, distances, amenities exactly as confirmed; no invented claims.
4. Keep it small and editable: a handful of static pages the family can update without tooling drama.

## Accessibility & Inclusion

No formal requirement stated; baseline: semantic landmarks, real focus states, text alternatives on photos, no user-scalable=no lock (legacy anti-pattern to remove).
