const benzene = extendContent(Liquid, "benzene", {
  effect: extendContent(StatusEffect, "benzened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  })
});