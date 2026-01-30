---
title: "Why Loss Landscapes Matter More Than Architecture"
date: "2026-01-29"
---

When a model fails, most engineers change the architecture. In reality, many failures originate from optimization, not model capacity.

The loss landscape determines whether gradient descent can find good solutions. Sharp valleys, flat plateaus, or chaotic curvature make training unstable regardless of network design. Batch size, learning rate, normalization, and initialization often have more impact than adding layers.

Understanding curvature helps explain why two identical models behave differently under small hyperparameter changes. It's also why techniques like residual connections and normalization work — they reshape the optimization surface, not just representational power.

Architecture decides *what* can be learned. The loss landscape decides *whether* it will be learned.
