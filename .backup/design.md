# Design System Strategy: The Digital Hearth
 
## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Digital Hearth."** 
 
Unlike traditional "utilitarian" food apps that feel like spreadsheets of recipes, this system is designed to feel like a sun-drenched kitchen at golden hour. We are moving away from the "app-as-a-tool" and toward "app-as-a-gathering." To achieve this high-end editorial feel, we break the rigid digital grid using **intentional asymmetry** and **organic layering**. We lean into the warmth of the palette to create a space that feels tactile, inviting, and premium. Layouts should prioritize large, enticing imagery that "bleeds" off-grid, paired with sophisticated serif typography that suggests a curated, cookbook-like quality.
 
## 2. Colors: Tonal Depth over Borders
This palette is grounded in the warmth of terracotta (`primary`) and the energy of sunny yellow (`secondary`), balanced by a sophisticated creamy off-white (`surface`).
 
### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts. Use `surface-container-low` to define a section against a `surface` background. The eye should perceive structure through "blocks of warmth" rather than wireframe-like lines.
 
### Surface Hierarchy & Nesting
Treat the UI as a physical stack of fine papers. 
- Use `surface-container-lowest` (#ffffff) for the most elevated, interactive cards.
- Nest these on `surface-container` (#f7f3ed) or `surface-container-low` (#fdf9f3) backgrounds.
- This creates a soft, nested depth that feels natural and organic, avoiding the "flatness" of standard Material Design.
 
### The "Glass & Gradient" Rule
To add soul to the interface, avoid flat blocks of the terracotta `primary`. Instead:
- **Hero CTAs:** Use a subtle linear gradient from `primary` (#af3f27) to `primary-container` (#fd795b) to give buttons a "lit from within" glow.
- **Glassmorphism:** For floating navigation or over-image labels, use semi-transparent `surface` colors with a 12px-20px backdrop-blur. This allows the vibrant food imagery to bleed through the UI, softening the experience.
 
## 3. Typography: The Editorial Voice
The typography is a dialogue between the timeless authority of the serif and the modern accessibility of the sans-serif.
 
*   **Display & Headlines (Noto Serif):** These are your "Hero" elements. Use `display-lg` and `headline-lg` with generous leading. These should be treated as design elements in themselves—don't be afraid to let a headline overlap an image slightly to create a high-end editorial look.
*   **Body & Titles (Plus Jakarta Sans):** This is your functional workhorse. `plusJakartaSans` provides a clean, geometric contrast to the serif headings, ensuring that even dense ingredient lists or instructions remain highly legible.
*   **Hierarchy as Identity:** Large scale-contrasts (e.g., a `display-md` title next to a `label-md` date) create an "expensive" look. Avoid keeping all text sizes too similar; lean into the drama of the scale.
 
## 4. Elevation & Depth: Tonal Layering
We reject the standard "drop shadow" aesthetic in favor of **Ambient Tonal Layering.**
 
*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-lowest` card sitting on a `surface-dim` background creates a natural lift.
*   **Ambient Shadows:** If a floating element (like a FAB or a Modal) requires a shadow, it must be massive and faint. Use a blur of `32px` to `64px` with an opacity of only `4-6%`. The shadow color must be a tinted version of `on-surface` (#393835), never pure black, to maintain the "warm" atmosphere.
*   **The "Ghost Border" Fallback:** If a divider is functionally required for accessibility, use the `outline-variant` token at **15% opacity**. It should be a whisper of a line, not a statement.
 
## 5. Components: Softness & Sociality
 
*   **Buttons:** 
    *   **Primary:** Rounded `full` (9999px) or `xl` (3rem). Use the Primary-to-Primary-Container gradient.
    *   **Secondary:** `secondary-container` background with `on-secondary-container` text. No border.
*   **Cards:** Use the `lg` (2rem) or `xl` (3rem) corner radius. Cards should never have borders. Use `surface-container-highest` for a "pressed-in" look or `surface-container-lowest` for a "popped-out" look.
*   **Input Fields:** Use `surface-container-high` with a `md` (1.5rem) corner radius. The lack of a heavy border makes the form feel less like a "chore" and more like a conversation.
*   **Chips:** Use `secondary-fixed` for selected states. They should look like soft, rounded lozenges that are "fun" to tap.
*   **Imagery (Signature Component):** All food imagery should use a minimum `lg` (2rem) corner radius. Experiment with "Organic Masking"—using slightly asymmetrical rounded corners (e.g., Top-Left: 3rem, Bottom-Right: 3rem, others: 1rem) to mimic the shape of a ceramic plate or a hand-drawn sketch.
 
## 6. Do’s and Don’ts
 
### Do:
*   **Do** use "Breathing Room." Increase your white space by 20% more than you think you need.
*   **Do** use asymmetrical layouts. Place a large image on the left and offset the headline to the right.
*   **Do** prioritize `surface-tint` for subtle highlights in iconography to tie the brand together.
 
### Don't:
*   **Don't** use 1px solid dividers between list items. Use 16px of `surface-container` spacing instead.
*   **Don't** use high-contrast black text. Stick to `on-surface` (#393835) to keep the "warm, cozy" feel.
*   **Don't** use sharp corners. Every element should feel soft to the touch, echoing the "friendly" and "community-driven" brief.