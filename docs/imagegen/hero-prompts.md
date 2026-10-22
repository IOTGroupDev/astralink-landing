# Оригинальные обложки AstraLink

Созданы встроенным ImageGen, без CLI и API-ключей. Финальное направление: спокойная фотография на природе, мягкая фиолетовая палитра, минимум астрологических деталей и свободная тёмная область под текст.

Файлы сайта: `public/images/hero-wide.webp` и `public/images/hero-mobile.webp`. PNG-оригиналы сохранены в `artifacts/generated/` (локально, исключены из Git). Мобильная версия сгенерирована из новой широкой обложки, с сохранением персонажа и атмосферы. Логотип взят из предоставленного пользователем `Frame 551.svg` и сохранён без изменений в `public/brand/astralink-mark.svg`.

## Промпт широкой обложки

```text
Use case: photorealistic-natural.
Create a brand-new landscape 16:9 editorial photograph for the AstraLink website hero, ideally 2048x1152. The attached photo is a STYLE REFERENCE ONLY: borrow its soft natural light, quiet human presence, film softness, flowing fabric and open-air cinematic mood. Do not copy the woman's identity, outfit, pose or scene.
A natural adult woman with softly windblown dark hair by a still lake and hazy mountain silhouettes at the very end of a lavender evening. A simple flowing plum / lavender wrap over understated clothing, relaxed natural posture, hands out of frame, eyes gently open and looking toward the horizon. Authentic skin and fabric texture, calm lifestyle photography, not fantasy or a costume shoot.
The scene is deliberately simple: a smooth violet-to-midnight sky, soft distant mountains, quiet water, a few tiny realistic stars far from the center. Astrology is only a subtle feeling. No visible instruments or foreground props.
Composition for a CENTERED WHITE WEBSITE HEADLINE: place her softly lit face near the upper center, above the central headline area, with plenty of breathing room. Across the middle 30–65% of the image leave calm dark plum fabric and softly shaded empty background, without bright highlights, busy detail or high-contrast objects. The image must remain readable under a large centered white title and smaller paragraph. Her head and torso should remain inside a central narrow mobile crop. Keep the top edge quiet for navigation.
Palette: restrained violet, lavender, plum, midnight navy; natural skin. Similar soft photographic mood to the reference, but purple rather than turquoise, with no artificial neon effects. Soft atmospheric dusk rather than an intensely black star field.
Avoid: armillary spheres, astrolabes, telescopes, zodiac wheels, glyphs, constellation lines, large moons, observatories, temples, candles, crystals, gold accessories, fantasy scenery, meditation poses, prayer hands, closed eyes, forehead jewelry, teal or cyan clothing, text, logos, UI, watermark. No bright sky directly behind the central words.
```

## Промпт мобильной обложки

```text
Use case: lighting-weather.
Make a matching 1:2 PORTRAIT MOBILE version of this exact quiet editorial photograph for the AstraLink landing page, ideally 1024x2048. Preserve the same woman, identity, dark windblown hair, lavender/plum wrap, relaxed natural posture, softly glowing lake and hazy mountains, natural dusk light and photographic softness.
Reframe the scene vertically, with her head high in the frame, roughly between 10% and 25% of image height, safely below the very top navigation area and ABOVE the middle text zone. Keep the middle 30–65% calm, dark and uncluttered, mostly soft plum fabric and shaded water, because a centered white heading and paragraph will be overlaid. Relaxed portrait, no posed meditation.
Keep the gentle muted lavender/violet palette. A few very faint distant stars are enough. No astronomical props, no wheel, no astrolabe, no telescope, no zodiac symbols, no drawn constellation lines, no large moon, no extra jewelry, no fantasy decor, no teal, no text, no logos or UI.
This should feel like the same minimal premium lifestyle campaign, not fantasy art.
```
