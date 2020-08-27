const benzene = extendContent(Liquid, "benzene", {
  effect: extendContent(StatusEffect, "benzened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  }),
  benzene.color: Color.valueOf("ccd97fff"),
  benzene.barColor: Color.valueOf("ccd97fff"),
  benzene.lightColor: Color.valueOf("ccd97fff"),
  benzene.flammability: 0.75,
  benzene.explosiveness: 0.1,
  benzene.temperature: 0.5,
  benzene.heatCapacity: 0,
  benzene.viscosity: 0.2
});