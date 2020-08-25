//get script from multi-lib
const multiLib=require("multi-lib/wrapper");
//you can use GenericSmelter
const multi=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"TGF",{
// you can customize here ex) draw(tile)
},
/*length of output, input, crafTimes should be same.
if not, I'm not sure which error happens.
length of recipes is not limited now.

output
-first place : array of items      *IF YOU DON't NEED IT, YOU MUST SET NULL*
-second place: array of liquids    *IF YOU DON't NEED IT, YOU MUST SET NULL*
-third place: power                *IF YOU DON't NEED IT, YOU MUST SET NULL*

input
-first place : array of items      *IF YOU DON't NEED IT, YOU MUST SET NULL*
-second place: array of liquids    *IF YOU DON't NEED IT, YOU MUST SET NULL*
-third place: power                *IF YOU DON't NEED IT, YOU MUST SET NULL*

craftTimes
-1=1frame=1/60second
-NOT NULLABLE

[item,amount]
Vanilla item : "item-name"
list: scrap, copper, lead, graphite, coal, titanium, thorium, silicon, plastanium, phase-fabric, surge-alloy,
    spore-pod, sand, blast-compound, pyratite, metaglass

Modded item : "Mod-Name"+"-"+"item-name"
item-name is .json file name

[liquid,amount]
Vanilla liquids : "liquid-name"

Modded liquids :"Mod-Name"+"-"+"liquid-name"
liquid-name is .json file name

*/

{
  _output:[
    [[["WW2"+"-"+"iron",1]],null,null],
    [[["WW2"+"-"+"aluminum",1]],null,null],
    [[["WW2"+"-"+"tungsten",1]],null,null],
  ],
  _input:[
    [[["WW2"+"-"+"hematite",1]],null,300],
    [[["WW2"+"-"+"aluminum-org",1]],null,300],
    [[["WW2"+"-"+"tungsten-org",1]],null,300],
  ],
  craftTimes:[60,60,60],
  //DON'T MODIFY THESE
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
  //
});
/*true: enable displaying inventory
false:disable displaying inventory*/
multi.enableInv=false;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
multi.dumpToggle=false;

/*
YOU MUST NOT MODIFY VALUE OF
THESE

configurable=true;
outputsPower=true;
hasItems=true;
hasLiquids=true;
hasPower=true;

*/

multi.requirements(Category.crafting,ItemStack.with(Items.copper,75));
