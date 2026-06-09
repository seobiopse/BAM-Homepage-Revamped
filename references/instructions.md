# Universal Web Development & Optimization Guidelines

This document establishes the absolute standards, design rules, functional specifications, and programmatic guidelines to be followed across all subprojects under **Tom Projects** (including **BAM**, **BAS**, and **Alpha Trophies**).

---

## 1. Project Specifications & Design Systems

Maintain distinct brand systems for each project. Do not blend colors or typography across projects unless explicitly instructed.

### A. BadgeStore (BAS)
*   **Aesthetic:** Modern, trust-focused, high-contrast.
*   **Color Palette:**
    *   `Primary (Brand Red)`: `#ED1C24` (signature red from the BadgeStore logo).
    *   `Secondary (Charcoal)`: `#231F20` (rich charcoal from the logo for body text and headers).
    *   `Surfaces`: `#FFFFFF` with `#FDFDF2` (warm ivory/cream surfaces to modernize the background).
    *   `Accents`: `#EAB308` (amber for ratings, trust Badges, and highlights).
*   **Typography:** Google Fonts: *Plus Jakarta Sans* and *Inter*.

### B. Badge-A-Minit (BAM)
*   **Aesthetic:** Professional, organic, Adelaide-themed.
*   **Color Palette:**
    *   `Primary (Forest Green)`: `hsl(104, 60%, 25%)` (main brand identity).
    *   `Primary Light`: `hsl(104, 55%, 32%)` (button hovers, secondary links).
    *   `Accent Green`: `#2e8b22`.
    *   `Dark Background/Text`: `hsl(194, 90%, 8%)`.
    *   `Base Background`: `hsl(104, 15%, 98%)`.
    *   `Surfaces`: `#FFFFFF` and `hsl(104, 25%, 96%)`.
*   **Typography:** Google Fonts: *Outfit* (headings), *DM Sans* (body), and *JetBrains Mono* (code blocks/specs).

### C. Alpha Trophies
*   **Aesthetic:** Premium, dark-mode focused, elegant.
*   **Color Palette:**
    *   `Primary (Navy)`: `#1A2344` (header background).
    *   `Secondary (Gold)`: `#AD7D35` (accents, borders, high-value highlights).
    *   `Surface Dark`: `#0d1117`.
    *   `Panels`: `#161b22`.
    *   `Border`: `#30363d`.
    *   `Text Primary`: `#f0f6fc`.
    *   `Text Muted`: `#8b949e`.
*   **Typography:** Google Fonts: *Poppins* and *JetBrains Mono*.

---

## 2. Interactive Component Specifications

All interactive widgets must be built using **Vanilla Javascript, HTML, and CSS** without bloated third-party libraries.

### A. Interactive Live Badge Previewer (Hero Widget)
*   **Real-Time Rendering:** Capture keypresses/inputs to instantly update text content (Name, Job Title) on the SVG/HTML card preview.
*   **Skin/Texture Selection:** Selecting materials (Acrylic, Metal, Wood, Full-Color) must swap out background layers, gradients, and typography styles dynamically.
*   **Fastener Switching:** Provide visual indicator toggle between "Pin" and "Magnetic" backing.

### B. Instant Bulk Price Calculator
*   **Discount Scaling:** Standardize wholesale pricing scales that dynamically recalculate the unit price as the quantity input/slider updates.
*   **Feedback Metrics:** Display:
    1. Unit price bracket.
    2. Total estimate.
    3. Total dollar savings compared to single-unit purchase.

### C. Postcode Delivery Calculator
*   **Sunday Exclusion:** Estimated delivery windows must calculate standard calendars but skip Sundays when estimating arrival dates.
*   **Zone Offset Logic:** Update transit times based on postcode ranges:
    *   `Local (SA: 5000-5999)`: Priority (1d), Express (1-2d), Standard (2-3d).
    *   `East Coast Metro (NSW, VIC, QLD Metro: 2000-2999, 3000-3999, 4000-4299)`: Priority (1-2d), Express (2-3d), Standard (4-5d).
    *   `Regional & Remote (WA, NT, TAS, QLD Regional: 0800-0999, 6000-6999, 7000-7999, 4300-4999)`: Priority (2-3d), Express (3-5d), Standard (6-8d).

---

## 3. SEO, AEO & GEO Guidelines (Generative/AI Indexing)

Optimize all landing pages for crawler spiders, LLM-based web crawlers, and AI-driven answer engines.

### A. Semantic Heading Architecture
*   **Single H1:** Exactly one `<h1>` per page. Place it on the hero element/top fold of the page (e.g. *"Australia's Trusted Supplier of Badges & Lanyards"*).
*   **Hierarchy:** Do not place `<h2>` sections above the `<h1>` element. Subsections must cleanly follow hierarchy: `<h1>` -> `<h2>` -> `<h3>`.

### B. Unified Schema Graph (`@graph` JSON-LD)
Embed a single JSON-LD block in `<head>` linking core organization metadata:
*   `Organization`: Logo, legal name, official website.
*   `LocalBusiness`: Address, coordinates, phone contact.
*   `MerchantReturnPolicy`: 30-day finite return info.
*   `ShippingRateSettings`: Clear rates (e.g., standard flat rate $12/$15).
*   `FAQPage`: Conversational FAQs.
*   `ItemList` / `Product`: Product data matching specific collections.

### C. Conversational Long-Tail FAQs
Write comprehensive Q&As addressing modern consumer queries:
*   Purchase Order support.
*   Magnet attachments and fabric safety.
*   Safety breakaways on lanyards.
*   Production difference between soft/hard enamel pins.

---

## 4. Agentic Browser Capabilities & State Logic

Ensure AI-agents, script-crawlers, and browser subagents can navigate and execute interface actions cleanly.

### A. Landmark Semantics & Input Bindings
*   **Bound Labels:** Every `<input>` or `<textarea>` must have a matching `<label>` with bound `id` and `for` attributes.
*   **Invisible Labels:** Use a `.visually-hidden` class to hide labels off-screen from users while keeping them in the DOM for screen readers and AI agents:
    ```css
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }
    ```

### B. Dynamic ARIA State Updating
*   Update states programmatically via Javascript when menus or toggles open/close:
    *   **Expandable Accordions/Drawers:** Toggle `aria-expanded="true"` / `aria-expanded="false"` on the action buttons.
    *   **Collapsible Elements:** Set `aria-hidden="false"` / `aria-hidden="true"` on the container panels.
    *   **Landmarks:** Explicitly declare `role="navigation"` on drawers and `role="search"` on search forms.

### C. Scoped Namespace Handling
*   Avoid global variable re-declarations (e.g., `let closeDrawer`). Use distinct namespaces or scoped objects/functions (e.g., `closeMobileDrawer`) to prevent script execution crashes.
