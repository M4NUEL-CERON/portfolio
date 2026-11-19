---
name: Manuel Cerón — Portfolio
description: A full stack developer's work drawn as a night transit network over a generated city.
colors:
  cobalt: "#0a1d3d"
  night: "#0b0f16"
  tower: "#070a10"
  street: "#111826"
  sodium: "#ffb627"
  window-blue: "#7ba4ff"
  dawn-silver: "#d4d7de"
  text: "#e9ebf0"
  lamplit: "#c3cad6"
  muted: "#9aa6ba"
  rule: "#233049"
typography:
  display:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 10vw, 9.5rem)"
    fontWeight: 300
    lineHeight: 0.84
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.9
  title:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "0.02em"
  station:
    fontFamily: "Big Shoulders, Arial Narrow, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.05em"
  body:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Overpass, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.22em"
rounded:
  none: "0px"
  focus: "2px"
  train: "9px"
  station: "50%"
spacing:
  gutter: "clamp(1.25rem, 5vw, 5rem)"
  section: "clamp(5rem, 12vw, 9rem)"
  line: "clamp(2.5rem, 5vw, 3.5rem)"
  stop: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.sodium}"
    textColor: "{colors.tower}"
    typography: "{typography.station}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.4rem 0.8rem"
  link:
    textColor: "{colors.text}"
    typography: "{typography.label}"
  link-hover:
    textColor: "{colors.sodium}"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.sodium}"
  station:
    backgroundColor: "{colors.night}"
    rounded: "{rounded.station}"
    size: "1.35rem"
  station-lit:
    backgroundColor: "{colors.sodium}"
  line-bullet:
    textColor: "{colors.sodium}"
    rounded: "{rounded.station}"
    size: "0.95em"
---

# Design System: Manuel Cerón — Portfolio

## Overview

**Creative North Star: "Night Transit"**

The page is a city after dark seen from a bridge. Blue-hour cobalt drains into tower-shadow navy; a generated skyline of lit window grids climbs the right side of the hero; one eastern facade has turned silver before dawn; below the bridge a wet street throws the lights back as long blurred streaks. Work is drawn as transit: a project is a line, its stations are the real path a request takes, and sodium-lamp yellow is the electricity running through it.

Density is low and vertical. Big condensed caps carry the structure, quiet tracked labels carry the wayfinding, and Overpass (a highway-signage descendant) carries the reading. Everything is flat and square-cornered except the transit hardware, which is round, and the light itself, which glows. All imagery is code: deterministic SVG from a seeded generator, so the same city renders on every visit.

**Key Characteristics:**
- Dark ground in three tones (cobalt sky, night, tower shadow) with one warm accent.
- Thin-to-semibold condensed display caps against a sans body.
- Transit lines as the reusable structural device: rail, round stations, numbered bullets.
- Light behaves like light: sodium glows, windows bleed, reflections blur vertically.
- Square, flat surfaces; depth comes from tone and light, not cards.

## Colors

A cold night palette with a single sodium-lamp accent; blue and silver exist as light sources in the city, not as UI accents.

### Primary
- **Sodium Lamp** (sodium): the only interactive and emphasis color. The primary button, transit rails and stations, the train pulse, the emphasized word in each section heading, timetable dates, the clock's hour, hover states, focus rings and text selection.

### Secondary
- **Window Blue** (window-blue): cool lit windows in the skyline and their reflections, and the first line of the name. Never a link, button or state color.
- **Dawn Silver** (dawn-silver): the one silver facade, section headings, the role line and the clock label. The cool counterweight to sodium.

### Neutral
- **Blue-Hour Cobalt** (cobalt): top of the hero sky gradient only (cobalt → #0d1a33 at 40% → night at 78%).
- **Night** (night): page ground and the timetable band; also the fill of unlit stations.
- **Tower Shadow** (tower): building fills, text on sodium, and the floor of the closing gradient.
- **Street** (street): the projects band, a half-step lighter than night so the lines section reads as its own district.
- **Headlamp White** (text): primary text and titles.
- **Lamplit Grey** (lamplit): long-form secondary copy (lede, line summaries, timetable items, closing paragraph).
- **Fog** (muted): labels, nav, station notes, tags, footer.
- **Rail Rule** (rule): 1px hairlines between lines and timetable rows, and the scrollbar.

### Named Rules
**The One Lamp Rule.** Sodium is the only accent. If something is clickable, active or emphasized, it is sodium; nothing else competes for that job.

**The Light Source Rule.** Blue and silver appear as things that emit or reflect light in the city (windows, the facade, the name). They do not become UI states.

## Typography

**Display Font:** Big Shoulders (with Arial Narrow, sans-serif)
**Body Font:** Overpass (with system-ui, sans-serif)

**Character:** Tall condensed signage caps over a calm road-sign sans. The display face is always uppercase; weight, not size alone, sets the rank.

### Hierarchy
- **Display** (300, clamp(4.5rem, 10vw, 9.5rem), 0.84): the name only, two lines in two lights.
- **Headline** (300, clamp(3rem, 7vw, 6rem), 0.9): section headings in dawn silver, one word lit in sodium.
- **Title** (600, clamp(2.25rem, 4.5vw, 3.75rem), 0.95, 0.02em): line names. Timetable roles use the same voice at clamp(1.75rem, 3vw, 2.4rem), 1.
- **Role** (500, clamp(1.5rem, 2.4vw, 2rem), 0.06em): the job title under the name.
- **Station** (600, 1.35rem, 0.05em): station names, timetable dates, button text (700, 1.2rem, 0.12em). Stack-line stations drop to 1.1rem.
- **Body** (400, 1.0625rem, 1.6): reading copy, capped at 34–40rem measure. Notes and list items step down to 0.92–0.97rem at 1.45.
- **Label** (400, 0.75–0.8rem, 0.16–0.22em tracking, uppercase): top bar, nav, text links, tags, footer.

### Named Rules
**The Caps Signage Rule.** Every display-face setting is uppercase. Big Shoulders never sets sentence case.

**The Weight Ladder Rule.** Hero and section headings are thin (300); anything that names a thing (line, role, station) is semibold (600). Size never substitutes for that split.

**The Tabular Time Rule.** Clocks and dates use tabular numerals.

## Layout

One full-bleed column with a fluid side gutter (clamp(1.25rem, 5vw, 5rem)) and fluid section padding (clamp(5rem, 12vw, 9rem)). Sections are bands of tone (hero gradient, street, night, night → tower) rather than boxed containers. Reading copy keeps a 34–44rem measure on the left; the city occupies the right and bottom of the hero and pulls up under the copy with a negative margin, kept low on the left so text never sits on lit windows.

Transit lines are a CSS grid with one equal column per station on a 3px rail. Line heads are a two-column grid (title and summary, then links aligned to the end). Timetable rows are a 13rem date column beside the content, with role bullets flowing in two balanced columns.

At 800px and below: nav and wordmark leave the bar (the clock stays), every grid collapses to one column, transit lines turn vertical with the rail on the left, the train is removed, the stack line becomes a two-column station list without a rail, and the skyline shortens to 16rem.

## Elevation & Depth

Flat. There are no cards and no layered surfaces; depth is tonal (sky gradient, band tones) and atmospheric (the skyline in front, its reflection below). The only shadows are light: sodium glows on things that are lit.

### Shadow Vocabulary
- **Sodium glow, rest** (`box-shadow: 0 10px 30px -12px rgb(255 182 39 / 0.55)`): under the primary button.
- **Sodium glow, hover** (`box-shadow: 0 16px 36px -12px rgb(255 182 39 / 0.7)`): the button lifting 2px toward the viewer.
- **Train halo** (`box-shadow: 0 0 18px 2px rgb(255 182 39 / 0.6)`): around the moving train pulse.

### Named Rules
**The Only Light Glows Rule.** A shadow exists only where sodium light is emitted. Neutral surfaces never get drop shadows.

## Shapes

Square by default: buttons, bands and rules have no radius. Roundness is reserved for transit hardware: stations are 3px sodium rings (1.35rem circles), line numbers sit in circular bullets, and the train is a 9px pill. Hairline rules (1px) divide lines and timetable rows; rails are 3px at 35% sodium. Skyline geometry is all rectangles: towers, 5×7 windows, 1px facade louvers.

## Components

### Buttons
Signage, not a pill.
- **Shape:** square corners (0).
- **Primary:** sodium fill, tower-shadow text, display face 700 at 1.2rem with 0.12em tracking, uppercase, padding 0.95rem 1.4rem 0.8rem, trailing 18×12 SVG arrow.
- **Hover / Focus:** lifts 2px with a stronger sodium glow; the arrow slides 4px right; 0.3s on the house ease. Focus is a 2px sodium outline at 4px offset.
- **Text link (secondary):** label type, tracked caps in headlamp white, 1px underline in fog at 0.25em offset; hover turns text and underline sodium. Used for Email, CV, GitHub and repo links. The CV link opens the PDF in the page language (EN at /, ES at /es). One primary button per action group.

### Navigation
Top bar absolutely positioned over the hero sky: wordmark left, three section links center, live clock right ("CUENCA hh:mm UTC−5", hour in sodium semibold, rest in dawn silver). All label type in fog; nav hover turns sodium. Mobile keeps only the clock.

### Transit Line (signature)
A numbered project line: circular sodium bullet with the line number, title, summary, end-aligned text links, then a row of stations on a 3px rail, then a tracked-caps tag strip. Each station is a ring with a semibold caps name and a fog note. On hover or focus-within, a glowing sodium train rides the rail over 1.4s and stations fill sodium in sequence (staggered by index). Under touch, stations are lit by default; under reduced motion, nothing animates. The same component, without notes, is the stack line along the hero's base.

### Portrait Station
The closing portrait is a station: the cut-out sits in a 19rem circle (14rem on mobile) with a 3px sodium ring over a blue-hour radial disc, framed head and shoulders, and stands clear above the towers instead of overlapping them.

### Timetable Row
Date in sodium station type on the left, role title in display caps with the employer after a muted dot separator, a fog location line, and role bullets in two columns separated by faint hairlines.

### City (signature)
Deterministic SVG skyline from a fixed seed: dark rectangle towers alternating tower-shadow tones, sparse 5×7 windows (mostly sodium at 0.8, some window blue at 0.35), and one tall eastern tower in a dawn-silver gradient with 1px louvers. Beneath it, the wet-street reflection repeats each window and the facade as vertically blurred streaks fading to transparent. It appears in the hero and again in the close, always aria-hidden.

### Night Motion (signature)
One authored arrival, then quiet weather. On load the hero's windows switch on one by one (0.6s each on the house ease, staggered over ~1.6s from a separate seed so the city itself never changes), then the surname powers up like a sodium sign (a 1.3s flicker to a steady glow). Section headings light their sodium word the same way the first time they scroll into view. Supporting loops: seeded rain in two depths (near 0.85s, far 1.7s, translate-only, masked out above the street), the wet reflection breathing on a 6s scaleY, about 3% of windows going dark and flickering back on like apartments, a night train crossing the stack bridge every 9s, and the clock's colon ticking. Every loop pauses when its city leaves the viewport (`.idle`); under reduced motion everything is static and the rain is removed.

## Do's and Don'ts

### Do:
- **Do** route every interactive, active or emphasized state through sodium (#ffb627); hover, focus, selection and lit stations all use it.
- **Do** set display type in uppercase Big Shoulders, 300 for headings and 600 for names of things.
- **Do** express structure as transit: rails, ring stations, numbered bullets, timetable rows.
- **Do** generate imagery in code with a fixed seed so the city is identical on server and client.
- **Do** give every motion a static fallback under prefers-reduced-motion and a lit-by-default state under hover: none.
- **Do** use the house ease (cubic-bezier(0.16, 1, 0.3, 1)) for lifts, slides and station fills.

### Don't:
- **Don't** introduce a second accent; window blue and dawn silver are light sources, not UI colors.
- **Don't** round buttons, bands or containers; radius belongs to stations, bullets and the train.
- **Don't** add drop shadows to neutral surfaces or wrap content in cards; depth is tone and light.
- **Don't** set Big Shoulders in sentence case or use it for running text.
- **Don't** let lit windows sit behind reading copy; keep the city low under the text column.
