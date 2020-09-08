int : 정수
float : 실수
boolean : true/false
this는 그 블록 자신을 말합니다. 모드일 경우 꼭 모드명-블록명 으로 작성하셔야 됩니다.
중괄호{}로 감싸진 유형은 밑에 작성된 단어를 선택해야 하며, {}를 무조건 제외하고 작성하셔야 됩니다.

js, json, hjson 파일의 경로는 content/blocks 안에서 자유롭게 하셔도 됩니다.
스프라이트 파일의 경로는 https://github.com/Anuken/Mindustry/tree/master/core/assets-raw/sprites/ 경로를 참고해주세요. (꼭 이 파일 경로대로 안해도 되지만, 랙이 줄어듭니다]

{}목록은 txt파일로 다시 문서화할 계획입니다.
문서화할 "계획" 이기 때문에, 없을수도 있습니다. 일부 문서는 깃허브 파일에 없고 제가 따로 생성한 문서입니다.
"특이사항(스프라이트)" 를 너무 믿지 말아주세요. 저도 몰라요. 그냥 인게임 스프라이트와 대조하는게 더 좋습니다.
아뉴크는 여전히 업데이트를 하기 때문에, 위키는 1달 주기로 업뎃됩니다.(솔직히 이거 다 볼거 아니잖아요)

임시로 모아둔 문서

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

{Category} 목록
    turret, production, distribution, liquid, power, defense, crafting, units, effect, logic