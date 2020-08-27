const benzene = extendContent(Liquid, "benzene", {
  effect: extendContent(StatusEffect, "benzened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  }),
  color: Color.valueOf("ccd97fff"),
  barColor: Color.valueOf("ccd97fff"),
  lightColor: Color.valueOf("ccd97fff"),
  flammability: 0.75,
  explosiveness: 0.1,
  temperature: 0.5,
  heatCapacity: 0,
  viscosity: 0.2
});