const xylene = extendContent(Liquid, "benzene", {
  effect: extendContent(StatusEffect, "benzened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  }),
  color: Color.valueOf("ccd97f"),
  barColor: Color.valueOf("ccd97f"),
  flammability: 0.75,
  explosiveness: 0.1,
  temperature: 0.5,
  heatCapacity: 0,
  viscosity: 0.2
});