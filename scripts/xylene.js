const xylene = extendContent(Liquid, "xylene", {
  effect: extendContent(StatusEffect, "xylened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  }),
  color: Color.valueOf("cfa580"),
  barColor: Color.valueOf("cfa580"),
  lightColor: Color.valueOf("cfa580"),
  flammability: 0.75,
  explosiveness: 0.1,
  temperature: 0.5,
  heatCapacity: 0,
  viscosity: 0.2
});