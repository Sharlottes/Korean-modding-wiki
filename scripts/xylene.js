const xylene = extendContent(Liquid, "xylene", {
  effect: extendContent(StatusEffect, "xylened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  }),
  color: Color.valueOf("cfa580ff"),
  barColor: Color.valueOf("cfa580ff"),
  lightColor: Color.valueOf("cfa580ff"),
  flammability: 0.75,
  explosiveness: 0.1,
  temperature: 0.5,
  heatCapacity: 0,
  viscosity: 0.2
});