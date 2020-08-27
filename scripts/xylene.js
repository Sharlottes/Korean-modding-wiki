const xylene = extendContent(Liquid, "xylene", {
  effect: extendContent(StatusEffect, "xylened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  }),
  xylene.color: Color.valueOf("cfa580ff"),
  xylene.barColor: Color.valueOf("cfa580ff"),
  xylene.lightColor: Color.valueOf("cfa580ff"),
  xylene.flammability: 0.75,
  xylene.explosiveness: 0.1,
  xylene.temperature: 0.5,
  xylene.heatCapacity: 0,
  xylene.viscosity: 0.2
});