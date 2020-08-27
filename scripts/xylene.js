const xylene = extendContent(Liquid, "xylene", {
  effect: extendContent(StatusEffect, "xylened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  })
});