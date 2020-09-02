int : 정수
float : 실수
boolean : true/false
this는 그 블록 자신을 말합니다. 모드일 경우 꼭 모드명-블록명 으로 작성하셔야 됩니다.
중괄호{}로 감싸진 유형은 밑에 작성된 단어를 선택해야 하며, {}를 무조건 제외하고 작성하셔야 됩니다.

hjson 또는 json으로 저장한 파일은 content-blocks-environment 경로로, 스프라이트는 sprites-blocks-environment 경로로 저장하시면 됩니다.

{}목록은 txt파일로 다시 문서화할 계획입니다.

{Effect} 목록
    none, placeBlock, breakBlock, smoke, spawn, tapBlock, select,
    vtolHover, unitDrop, unitPickup, unitLand, pickup, healWave, heal, landShock, reactorsmoke, nuclearsmoke, nuclearcloud,
    redgeneratespark, generatespark, fuelburn, plasticburn, pulverize, pulverizeRed, pulverizeRedder, pulverizeSmall, pulverizeMedium,
    producesmoke, smeltsmoke, formsmoke, blastsmoke, lava, doorclose, dooropen, dooropenlarge, doorcloselarge, purify, purifyoil, purifystone, generate,
    mine, mineBig, mineHuge, smelt, teleportActivate, teleport, teleportOut, ripple, bubble, launch,
    healBlock, healBlockFull, healWaveMend, overdriveWave, overdriveBlockFull, shieldBreak, hitBulletSmall, hitFuse,
    hitBulletBig, hitFlameSmall, hitLiquid, hitLaser, hitLancer, hitMeltdown, despawn, flakExplosion, blastExplosion,
    plasticExplosion, artilleryTrail, incendTrail, missileTrail, absorb, flakExplosionBig, plasticExplosionFlak, burning, fire,
    fireSmoke, steam, fireballsmoke, ballfire, freezing, melting, wet, oily, overdriven, dropItem, shockwave,
    bigShockwave, nuclearShockwave, explosion, blockExplosion, blockExplosionSmoke, shootSmall, shootHeal, shootSmallSmoke, shootBig, shootBig2, shootBigSmoke,
    shootBigSmoke2, shootSmallFlame, shootPyraFlame, shootLiquid, shellEjectSmall, shellEjectMedium,
    shellEjectBig, lancerLaserShoot, lancerLaserShootSmoke, lancerLaserCharge, lancerLaserChargeBegin, lightningCharge, lightningShoot,
    unitSpawn, spawnShockwave, magmasmoke, impactShockwave, impactcloud, impactsmoke, dynamicExplosion, padlaunch, commandSend, coreLand

{Item} 목록
    copper, lead, silicon, graphite, thorium, titanium, sand, coal, phase-fabric, surge-alloy, blast-compound, pyratite, spore-pod, metaglass, plastanium

{Liquid} 목록
    water, slag, oil, cryofluid

{StatusEffect} 목록
    none, burning, freezing, wet, melting, tarred, overdrive, shielded, boss, shocked, corroded