const xylene = extendContent(Liquid, "toluene", {
  effect: extendContent(StatusEffect, "toluened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  }),
  color: Color.valueOf("949494"),
  barColor: Color.valueOf("949494"),
  lightColor: Color.valueOf("949494"),
  flammability: 0.75,
  explosiveness: 0.1,
  temperature: 0.5,
  heatCapacity: 0,
  viscosity: 0.2
});