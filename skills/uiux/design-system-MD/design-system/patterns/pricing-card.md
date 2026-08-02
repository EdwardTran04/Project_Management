# Pricing Card

> Card hiển thị plan/pricing — convince user to convert.

---

## 🎨 Variants

- **Standard** — 1 plan trong 1 card
- **Comparison** — Multiple plans side-by-side
- **Toggle** — Monthly/Yearly switch
- **Featured** — Highlight plan recommended

---

## 🧩 Anatomy

```
┌───────────────────────────────┐
│  [Most Popular Badge]         │  ← Featured ribbon
├───────────────────────────────┤
│  Plan Name                    │
│  Plan description             │
├───────────────────────────────┤
│  $XX                          │  ← Display large
│  /month                       │
├───────────────────────────────┤
│  ✓ Feature 1                  │  ← Feature list
│  ✓ Feature 2                  │
│  ✓ Feature 3                  │
│  ✗ Feature not included       │
├───────────────────────────────┤
│  [Get Started] (CTA Button)   │
└───────────────────────────────┘
```

---

## 💻 Example

```jsx
<PricingCard featured>
  {featured && <Badge variant="primary">Most Popular</Badge>}

  <PricingCard.Header>
    <PricingCard.Name>Pro</PricingCard.Name>
    <PricingCard.Description>
      For growing teams
    </PricingCard.Description>
  </PricingCard.Header>

  <PricingCard.Price
    amount={29}
    currency="$"
    period="/ month"
    billing="Billed annually"
  />

  <PricingCard.Features>
    <Feature included>Unlimited projects</Feature>
    <Feature included>20GB storage</Feature>
    <Feature included>Priority support</Feature>
    <Feature>API access</Feature>
  </PricingCard.Features>

  <PricingCard.CTA>
    <Button variant="primary" fullWidth>
      Start free trial
    </Button>
  </PricingCard.CTA>
</PricingCard>
```

---

## 📏 Specs

| Property | Value |
|----------|-------|
| Width | 320-400px |
| Padding | 32px |
| Featured border | 2px `brand-primary-600` |
| Featured background | gradient hoặc subtle highlight |
| Price font size | 48-60px (display) |
| Feature gap | 12px |

---

## ✅ Best Practices

- ✅ 3-4 plans (free, basic, pro, enterprise)
- ✅ Highlight 1 plan (recommended)
- ✅ Toggle Monthly/Yearly với savings
- ✅ Compare features clearly
- ✅ Strong CTA
- ❌ Không quá > 4 plans (gây tê liệt)

---

## 🔗 Related

[Card →](../components/molecules/card.md) | [Badge →](../components/atomic/badge.md)
