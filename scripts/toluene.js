const toluene = extendContent(Liquid, "toluene", {
  effect: extendContent(StatusEffect, "toluened", {
    damageMultiplier: 1,
    armorMultiplier: 0.9,
    speedMultiplier: 0.7,
    effect: Fx.shieldBreak
  }),
  toluene.color: Color.valueOf("949494ff"),
  toluene.barColor: Color.valueOf("949494ff"),
  toluene.lightColor: Color.valueOf("949494ff"),
  toluene.flammability: 0.75,
  toluene.explosiveness: 0.1,
  toluene.temperature: 0.5,
  toluene.heatCapacity: 0,
  toluene.viscosity: 0.2
});