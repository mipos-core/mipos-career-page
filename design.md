# Mipos Career Page — Design System

> Distilled from 6 mockup HTMLs. Space/astronaut theme with warm orange branding.

## Colors

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `primary` | `#F97316` | `#F97316` | CTAs, accents, links, icons |
| `primary-hover` | `#EA580C` | `#EA580C` | Button hover states |
| `secondary` | `#FB923C` | `#FB923C` | Secondary accents |
| `accent` | `#FCD34D` | `#FCD34D` | Highlights, badges |
| `bg` | `#FFF7ED` (warm cream) | `#1F1528` (deep space) | Page background |
| `surface` | `#FFFFFF` | `#2D2438` | Cards, nav, footer |
| `text` | `#374151` | `#E5E7EB` | Body text |
| `text-muted` | `#6B7280` | `#9CA3AF` | Secondary text |

## Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display | **Fredoka** | 300–700 | Headlines, nav logo, section titles |
| Body | **Nunito** | 400, 600, 700, 800 | Paragraphs, buttons, labels |

Import: `https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Nunito:wght@400;600;700;800&display=swap`

## Shape & Spacing

| Element | Radius |
|---------|--------|
| Cards | `1.5rem` (rounded-3xl) |
| Buttons | `0.75rem` – `1rem` (rounded-xl to rounded-2xl) |
| Pill buttons/badges | `9999px` (rounded-full) |
| Input fields | `0.75rem` (rounded-xl) |
| Icons containers | `1rem` (rounded-2xl) |

## Shadows

- Cards: `shadow-md` → `shadow-xl` on hover
- CTA buttons: `shadow-lg shadow-orange-500/30`
- Hero CTA: `shadow-xl shadow-orange-500/20`

## Animations

| Name | Duration | Effect | Usage |
|------|----------|--------|-------|
| `float` | 6s ease-in-out infinite | translateY 0→-20px→0 | Mascot, decorative elements |
| `twinkle` | 3s ease-in-out infinite | opacity 0.5→1, scale 1→1.2 | Star decorations |
| `bounce` | 3s (CSS bounce) | Built-in | Status badges |

## Nav

- Fixed top, `bg-white/80 dark:bg-card-dark/80`, `backdrop-blur-md`
- Border bottom: `border-orange-100 dark:border-white/10`
- Height: `h-20`
- Logo: rocket_launch icon in orange square + "Mipos" in Fredoka bold
- Pages: Home, Missions, Openings, Blog, Contact
- CTA: "Board Now" orange button
- Dark mode toggle button

## Icons

- **Material Icons Round** (`material-icons-round`)
- Key icons: `rocket_launch`, `rocket`, `visibility`, `volunteer_activism`, `emoji_events`, `stars`, `check_circle`, `place`, `schedule`, `payments`, `groups`, `mail`, `send`, `arrow_forward`, `dark_mode`, `light_mode`, `trending_up`, `store`, `person`, `calendar_today`

## Card Patterns

### Job listing card
- White bg, rounded-3xl, p-8, shadow-md
- Hover: shadow-xl, -translate-y-1, border-primary/30
- Department badge (colored pill), location with place icon
- Title bold, bullet points with orange dots
- "Apply Now" ghost button → fills on hover

### Mission card
- Similar to job card but with emoji icon in colored bg square
- Category + type pill (e.g. "Design • Contract")
- "Start Mission" border button → fills on hover

### Blog card
- Image area (h-56) with category badge overlay
- Date with calendar icon, title, excerpt, "Read Story" link

## CTA Sections

- Full-width orange bg (rounded-3xl), white text
- "Don't see your role?" / "Don't see your mission?"
- White button on orange background

## Dark Mode

- Toggle via `class="dark"` on `<html>`
- Persist in localStorage
- All surfaces shift to deep purple-space tones
- Text shifts to light gray
- Borders become `white/5` or `white/10`

## Framework

- **TailwindCSS CDN** with plugins: forms, typography
- `darkMode: "class"`
- Custom colors and fonts in `tailwind.config`
