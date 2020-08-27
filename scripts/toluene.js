const toluene = extendContent(Liquid, "toluene", {
  effect: extendContent(StatusEffect, "toluened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  })
});