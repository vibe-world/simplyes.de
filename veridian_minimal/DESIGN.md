# Design System Specification: Premium Minimalist Editorial

## 1. Overview & Creative North Star: "The Living Canvas"
This design system is built upon the concept of **"The Living Canvas."** We are moving away from the rigid, boxed-in layouts of traditional SaaS and toward a high-end, editorial experience. The goal is to make the digital interface feel as intentional and premium as a physical gallery or a luxury lifestyle magazine.

**The Creative North Star** dictates that we prioritize "Breathing Room" over "Information Density." We break the standard template look through:
*   **Intentional Asymmetry:** Aligning large display type against expansive white space to create a sense of bespoke craft.
*   **Tonal Depth:** Replacing harsh lines with soft transitions between surface tiers.
*   **Organic Movement:** Using the vibrant green (`primary`) and calm teal (`secondary`) as rhythmic accents rather than overwhelming fills.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a "Pure White" ethos, but depth is achieved through a sophisticated hierarchy of off-whites and soft greens.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Traditional borders create visual noise that breaks the premium feel. Instead, define boundaries through:
1.  **Background Shifts:** Transitioning from `surface` (#f8faf9) to `surface-container-low` (#f2f4f3).
2.  **Generous Padding:** Using white space itself as the separator.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, premium materials. Use the `surface-container` tiers to create "nested" depth:
*   **Base:** `surface` (#f8faf9) for the overall page background.
*   **Mid-Level:** `surface-container-low` (#f2f4f3) for secondary content areas or sidebars.
*   **Floating Elements:** `surface-container-lowest` (#ffffff) for cards or interactive modules to create a "pop" against the background.

### The "Glass & Signature Texture" Rule
To elevate the experience, use **Glassmorphism** for navigation bars and floating overlays. Apply `surface` with a 70-80% opacity and a `20px` backdrop-blur. 
**Signature Gradients:** For primary CTAs or Hero backgrounds, utilize a subtle linear gradient: 
`linear-gradient(135deg, #3e6a00 0%, #8bc34a 100%)`. This adds "soul" and dimension that flat hex codes lack.

---

## 3. Typography: Editorial Authority
We use a dual-typeface system to balance professional technicality with modern lifestyle aesthetics.

*   **Display & Headlines (Manrope):** This is our "Editorial Voice." Manrope’s geometric yet organic curves provide a high-end tech feel. Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero moments to command attention.
*   **Body & Labels (Inter):** Inter provides clinical clarity. It is the "Utility Voice." Use `body-lg` (1rem) for long-form content to ensure maximum readability against the pure white background.

**Hierarchy Note:** Use `on-surface-variant` (#424939) for secondary text to reduce contrast slightly, creating a more sophisticated, "soft-black" look rather than a harsh pure black.

---

## 4. Elevation & Depth
Depth in this system is a whisper, not a shout.

### The Layering Principle
Achieve hierarchy by "stacking" surface tiers. A `surface-container-lowest` (#ffffff) card placed on a `surface-container-low` (#f2f4f3) background creates a natural, soft lift without the need for heavy shadows.

### Ambient Shadows
When a physical "float" is required (e.g., a primary modal):
*   **Shadow:** `0px 12px 32px rgba(25, 28, 28, 0.04)`
*   **Key Insight:** The shadow is a tinted version of `on-surface`, kept at a very low 4-8% opacity to mimic natural ambient light.

### The "Ghost Border" Fallback
If a container requires a boundary for accessibility (e.g., an input field), use a **Ghost Border**:
*   `outline-variant` (#c2c9b4) at **15% opacity**. 100% opaque borders are strictly forbidden.

---

## 5. Components & Interaction

### Buttons (High-Impact)
*   **Primary:** A gradient fill (Primary to Primary-Container) with `full` roundedness. Large horizontal padding (2rem). Use `on-primary` (#ffffff) for text.
*   **Secondary:** No fill. A Ghost Border (`outline-variant` at 20%) with `secondary` (#006a60) text.
*   **Tertiary:** No border, no fill. High-letter-spaced `label-md` text in `primary`.

### Cards & Lists
*   **Constraint:** Forbid the use of divider lines. 
*   **Execution:** Use `surface-container-low` as a background for the list container, and `surface-container-lowest` for the items themselves, separated by a `1rem` vertical gap. This creates "islands" of information.

### Input Fields
*   **State:** Default state uses `surface-container-highest`. Upon focus, transition the background to `surface-container-lowest` and apply a 1px `primary` Ghost Border. 
*   **Shape:** Use `md` (0.375rem) roundedness to maintain a professional, architectural feel.

### Additional Signature Component: The "Content Reveal"
Use a `tertiary_container` (#ff8bde) subtle glow behind high-priority lifestyle imagery or product shots to add a "halo" effect, drawing the eye without using a traditional border.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts where text is weighted to one side and whitespace to the other.
*   **Do** use `primary_fixed` (#b9f474) for subtle background highlights behind important text labels.
*   **Do** ensure all "floating" elements have a `backdrop-filter: blur(12px)`.

### Don’t:
*   **Don’t** use 1px solid black or grey lines for anything. 
*   **Don’t** use "Drop Shadows" with high opacity or zero blur.
*   **Don’t** crowd the edges of the screen; maintain a minimum 32px "Safe Zone" on all layouts to preserve the premium feel.
*   **Don’t** use the `tertiary` pink color as a main fill; it is a "stinger" color meant only for notifications, errors, or very small accents.