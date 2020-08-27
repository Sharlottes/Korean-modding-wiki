const toluene = extendContent(Liquid, "toluene", {
  effect: extendContent(StatusEffect, "toluened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  }),
  color: Color.valueOf("949494ff"),
  barColor: Color.valueOf("949494ff"),
  lightColor: Color.valueOf("949494ff"),
  flammability: 0.75,
  explosiveness: 0.1,
  temperature: 0.5,
  heatCapacity: 0,
  viscosity: 0.2
});