# Astronaut Desk Lamp — Landing Page Interaction Specification

## 1. Product

Build a modern, premium, conversion-focused landing page for:

**Astronaut Desk Lamp with Alarm Clock**

বাংলা product positioning:

> **২-ইন-১ মাল্টিফাংশনাল ল্যাম্প**

The product combines:

- Alarm clock
- Reading/study lamp
- Night light
- Flexible lamp neck
- Rechargeable battery
- Wireless/tabletop usage

The primary audience is parents buying for children/students, students, and people looking for a stylish multifunctional desk accessory.

---

# 2. Overall Design Direction

Create a **premium futuristic space/astronaut aesthetic**, but keep the page clean and suitable for an e-commerce product.

### Visual style

- Dark navy / deep-space background
- White typography
- Soft blue/purple space glow
- Warm light glow around the lamp
- Glassmorphism used subtly
- Rounded cards
- Large product photography
- Strong visual hierarchy
- Plenty of whitespace
- Premium rather than childish
- Avoid excessive gradients and excessive animations

The product should always remain the visual focus.

### Design inspiration

Think:

**Apple product page + modern DTC e-commerce + space/astronaut aesthetic**

Do NOT make it look like a generic Shopify template.

---

# 3. Page Structure

Create the landing page in this order:

1. Announcement bar
2. Navigation
3. Hero section
4. Product benefits
5. Interactive product showcase
6. Feature sections
7. How it works
8. Use cases
9. Why parents/students will love it
10. Product specification
11. Final CTA
12. Footer

---

# 4. Announcement Bar

At the very top.

Example:

**🚀 ২-ইন-১ অ্যাস্ট্রোনট ল্যাম্প — পড়াশোনা, অ্যালার্ম ও নাইট লাইট একসাথে**

Make it compact.

Add a subtle horizontal marquee animation.

The animation must be slow and elegant.

---

# 5. Navigation

Desktop navigation:

- Logo / Astronaut Lamp
- Features
- Benefits
- How It Works
- FAQ
- Order Now

Mobile:

- Logo
- Hamburger menu

The navbar should become sticky after scrolling.

### Navbar interaction

When the user scrolls:

- Initially transparent
- After scrolling 30–50px:
  - Add subtle backdrop blur
  - Add dark translucent background
  - Add slight shadow
  - Reduce navbar height slightly

Use smooth transitions.

---

# 6. Hero Section

This is the most important section.

### Layout

Desktop:

Left:

- Small eyebrow text
- Large headline
- Product description
- CTA buttons

Right:

- Large astronaut lamp product image/render

Example headline:

**আপনার শিশুর পড়ার টেবিলে  
একজন ছোট্ট Astronaut**

Supporting text:

**অ্যালার্ম ঘড়ি, রিডিং ল্যাম্প ও নাইট লাইট — সব একসাথে।**

CTA:

**এখনই অর্ডার করুন**

Secondary CTA:

**ফিচার দেখুন ↓**

### Hero visual

Place the astronaut lamp prominently.

Add:

- Soft radial glow behind product
- Small floating stars
- Very subtle particles
- Light beam/glow from the flexible lamp

Do not over-animate the product.

### Hero interaction

When the mouse moves over the hero:

- Background stars move slightly using parallax
- Product moves very slightly in the opposite direction
- Glow follows cursor subtly

Keep movement minimal.

Do not make the product shake or rotate aggressively.

---

# 7. Product Feature Cards

Immediately below the hero.

Create 4 cards:

### Card 1

**⏰ Alarm Clock**

সময় মেনে চলার অভ্যাস তৈরি করতে সাহায্য করে।

### Card 2

**💡 Reading Lamp**

পড়াশোনার সময় পর্যাপ্ত আলো দেয়।

### Card 3

**🌙 Night Light**

রাতে ঘুমানোর সময় মৃদু আলো হিসেবে ব্যবহার করা যায়।

### Card 4

**🔋 Rechargeable**

তারের ঝামেলা ছাড়াই ব্যবহার করুন।

### Interaction

On hover:

- Card moves upward 4–6px
- Icon scales slightly
- Background glow appears
- Border becomes brighter

Use smooth 200–300ms transitions.

---

# 8. Interactive Product Showcase

Create a large section titled:

**একটি ল্যাম্প, অনেক ব্যবহার**

Place the product in the center.

Around the product, create interactive hotspots.

Hotspots:

1. Flexible Neck
2. LED Light
3. Analog Alarm Clock
4. Rechargeable Battery

When the user hovers/clicks a hotspot:

- Show a small information card
- Highlight the corresponding product area
- Add a subtle glow
- Animate the information card in

On mobile, use clickable feature buttons instead of hover-only interactions.

---

# 9. Flexible Neck Interaction

Create a dedicated feature section.

Heading:

**আলো যেখানে প্রয়োজন, সেখানেই**

Explain:

**ফ্লেক্সিবল নেক নিজের প্রয়োজন অনুযায়ী বাঁকিয়ে আলোর দিক সহজেই পরিবর্তন করা যায়।**

Visual:

Show the astronaut lamp with the lamp neck angled toward:

- Book
- Keyboard
- Bedside area

Create a simple interactive control.

For desktop:

A slider or drag interaction can change the lamp angle.

Example:

`← Move the light →`

The lamp should visually respond to the slider.

If a true 3D implementation is not practical, simulate the interaction with multiple product image states or CSS transforms.

Do not build unnecessarily complex WebGL.

---

# 10. Reading Mode

Create a section focused on students.

Heading:

**পড়ার সময় আলো, পাশে একজন Astronaut**

Show:

- Book/notebook
- Astronaut lamp
- Warm light beam

Interaction:

When the section enters the viewport:

- Lamp gradually turns on
- Light beam expands
- Text fades/slides into position

Keep the animation around 600–900ms.

---

# 11. Alarm Clock Feature

Create a close-up visual of the analog clock.

Heading:

**সময়কে গুরুত্ব দিতে শেখায়**

Text:

**অ্যালার্ম ঘড়ির মাধ্যমে শিশুদের সময়মতো পড়াশোনা, ঘুম ও দৈনন্দিন কাজের অভ্যাস তৈরি করতে সাহায্য করুন।**

Add an animated clock hand.

The clock hand should move smoothly.

Do not make it continuously spin rapidly.

---

# 12. Night Light Section

Use a darker section.

Heading:

**রাতেও থাকুক নরম আলো**

Show the astronaut lamp glowing softly in a dark room.

Interaction:

When the user scrolls into this section:

- Background gradually becomes darker
- Lamp glow increases
- Soft ambient light appears around product

This should feel cinematic.

Avoid excessive particles.

---

# 13. Rechargeable Battery Feature

Heading:

**তারের ঝামেলা ছাড়াই ব্যবহার করুন**

Show the lamp on:

- Study desk
- Bedside table
- Living room table

Add a simple battery indicator animation.

Example:

`🔋 100%`

Then animate gently toward:

`🔋 75%`

Do NOT claim an exact battery duration unless the actual product specification provides one.

Use:

**এক চার্জে দীর্ঘ সময় ব্যবহার করা যায়**

instead of inventing a number.

---

# 14. Use Cases

Create three large visual cards.

### 01 — পড়াশোনা

**Reading Lamp**

পড়ার টেবিলে পর্যাপ্ত আলো।

### 02 — ঘুম

**Night Light**

রাতে মৃদু আলো।

### 03 — সময়

**Alarm Clock**

সময় মেনে চলার অভ্যাস।

### Interaction

Cards should have large visuals.

On hover:

- Image zoom 1.03–1.05x
- Overlay appears
- Title moves slightly upward
- CTA appears

On mobile, use normal cards without hover dependency.

---

# 15. "Why Buy It?" Section

Heading:

**কেন এই Astronaut Lamp?**

Use a clean comparison-style benefit layout.

Benefits:

- ২-ইন-১ / multifunctional design
- Rechargeable
- Flexible lamp neck
- Alarm clock
- Reading light
- Night light
- Wireless tabletop usage
- Space-saving design
- Child-friendly visual appeal

Do not make unsupported medical, safety, or performance claims.

---

# 16. Scroll Animations

Use scroll-triggered animations carefully.

Recommended animations:

### Fade Up

For:

- Headings
- Paragraphs
- Cards

### Scale In

For:

- Product images

### Slide In

For:

- Feature content

### Parallax

Only for:

- Stars
- Background decorative elements

Avoid applying parallax to every element.

### Animation principle

The page should feel:

**smooth → premium → cinematic**

Not:

**busy → flashy → distracting**

Respect `prefers-reduced-motion`.

If reduced motion is enabled, disable parallax and large entrance animations.

---

# 17. CTA Interaction

Primary CTA:

**এখনই অর্ডার করুন**

Buttons should have:

- Rounded corners
- Strong contrast
- Subtle glow
- Hover lift
- Press-down feedback

Hover:

- Translate Y: -2px
- Slight glow increase

Active:

- Translate Y: 0
- Slight scale reduction

The CTA should always feel clickable.

---

# 18. Sticky Mobile Order CTA

On mobile, create a fixed bottom CTA after the user scrolls past the hero.

Example:

**🚀 এখনই অর্ডার করুন**

It should:

- Stay above the bottom safe area
- Have a subtle shadow
- Not cover important content
- Appear with a smooth slide-up animation

Hide it while the user is already near the final CTA/order section.

---

# 19. Order Flow

The landing page should be conversion-focused.

When clicking **এখনই অর্ডার করুন**:

Either:

1. Scroll to an order form section, or
2. Open an order modal.

Preferred implementation:

**Scroll to the order section.**

Order section fields:

- Name
- Phone Number
- Address
- Quantity

Primary button:

**অর্ডার কনফার্ম করুন**

Do not implement a fake payment system.

If backend integration is not available, create the frontend UI only.

---

# 20. FAQ Section

Use accordion interaction.

Questions:

### এটি কি rechargeable?

Yes. এটি rechargeable battery দিয়ে ব্যবহার করা যায়।

### এটি কি reading lamp হিসেবে ব্যবহার করা যায়?

হ্যাঁ। flexible neck-এর মাধ্যমে আলো প্রয়োজন অনুযায়ী পরিচালনা করা যায়।

### এতে alarm clock আছে?

হ্যাঁ। মাঝখানে analog clock রয়েছে এবং alarm সেট করা যায়।

### এটি কি night light হিসেবে ব্যবহার করা যায়?

হ্যাঁ। রাতে মৃদু আলো হিসেবে ব্যবহার করা যায়।

### তার লাগিয়ে রাখতে হয়?

না। rechargeable হওয়ায় তার ছাড়াই ব্যবহার করা যায়।

FAQ interaction:

- Click question
- Answer smoothly expands
- Plus icon rotates to X
- Only one item needs to be open at a time

---

# 21. Final CTA

Create a dramatic final section.

Heading:

**আপনার টেবিলে আনুন ছোট্ট এই Astronaut-কে 🚀**

Subheading:

**পড়াশোনা, সময় মেনে চলা এবং রাতের মৃদু আলো — সবকিছু একসাথে।**

CTA:

**এখনই অর্ডার করুন**

Place the astronaut lamp prominently beside the CTA.

Use a subtle space background.

---

# 22. Footer

Keep it simple.

Include:

- Product name
- Short description
- Features
- FAQ
- Contact
- Order Now

No unnecessary footer links.

---

# 23. Responsive Design

The page must be fully responsive.

### Desktop

- Large hero
- Product image on right
- Multi-column layouts
- Hover interactions
- Floating decorative elements

### Tablet

- Reduce spacing
- 2-column layouts where appropriate
- Smaller typography

### Mobile

- Single-column layout
- Large readable Bangla typography
- Full-width CTA
- No hover-dependent functionality
- Sticky order CTA
- Smaller product image
- Simplified animations
- Horizontal overflow must never occur

Test at:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1280px
- 1440px+

---

# 24. Performance Requirements

Performance is important.

Do NOT:

- Add unnecessary libraries
- Use heavy WebGL
- Add huge background videos
- Use excessive particle systems
- Load unnecessary fonts
- Add animations that hurt scrolling performance

Prefer:

- CSS animations
- transform/opacity animations
- Intersection Observer
- Optimized images
- Lazy loading below-the-fold images

Target:

- Fast initial load
- Smooth 60fps interactions
- Excellent mobile performance
- Good Core Web Vitals

---

# 25. Accessibility

Implement:

- Semantic HTML
- Proper heading hierarchy
- Accessible buttons
- Keyboard navigation
- Visible focus states
- Alt text for product images
- Sufficient color contrast
- `aria-expanded` for FAQ
- `prefers-reduced-motion`

Do not rely on color alone to communicate state.

---

# 26. Interaction Rules

Important:

### DO

- Use subtle micro-interactions
- Make CTAs obvious
- Make product visuals interactive
- Use smooth transitions
- Use scroll-triggered storytelling
- Keep animations purposeful

### DON'T

- Use excessive bouncing
- Use spinning product animations
- Use flashing effects
- Use aggressive parallax
- Use autoplay audio
- Use fake countdown timers
- Use fake reviews
- Invent product specifications
- Make unsupported claims
- Overload the page with stars/particles

---

# 27. Content Language

Primary language:

**Bangla**

Use English only where it improves product naming or visual hierarchy.

Examples:

- Astronaut Desk Lamp
- Reading Lamp
- Night Light
- Alarm Clock
- Rechargeable
- Order Now

Bangla text should be natural and easy to understand.

Do not use machine-translated or awkward Bangla.

---

# 28. Visual Hierarchy

Priority order:

1. Product
2. Main value proposition
3. CTA
4. Product benefits
5. Features
6. Supporting content

The user should understand what the product is and why they should buy it within the first 5 seconds.

---

# 29. Important Product Accuracy

Only use these confirmed product characteristics:

- Astronaut design
- Alarm clock
- Reading lamp
- Flexible neck
- Rechargeable battery
- Night light
- Wireless/tabletop usage
- Analog clock
- Adjustable light direction

Do not invent:

- Battery capacity
- Exact runtime
- Charging time
- Warranty
- Dimensions
- Weight
- Material
- Waterproof rating
- LED wattage
- Number of brightness levels
- Price
- Discount
- Delivery time

Unless these values are provided separately.

---

# 30. Final Implementation Goal

The finished page should feel like a **premium product launch page**, not a generic product listing.

The experience should tell a visual story:

**Astronaut → Light → Study → Time → Night → Convenience → Order**

Every interaction should support that story and ultimately guide the visitor toward:

**এখনই অর্ডার করুন**

Build the page with production-quality responsive UI, clean component structure, reusable components, optimized assets, accessible interactions, and polished micro-animations.
