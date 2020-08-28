try{//nvm
  //get script from multi-lib2
  const multiLib=require("multi-lib2/wrapper");
  //you can use GenericSmelter instead GenericCrafter
                                          // ▼this has to be same with .json file name
  const multi=multiLib.extend(GenericCrafter,"TGF",/*Array [] not {} ->*/[
    /*default form for each recipes. You can change values.
    {
      input:{
        items:[],     Modded Item:  "mod-name-item-name/amount", Vanilla Item: "item-name/amount"
        liquids:[],   Modded Liquid:  "mod-name-liquid-name/amount",  Vanilla liquid: "liquid-name/amount"
        power:0,
      },
      output:{
        items:[],
        liquids:[],
        power:0,
      },
      craftTime:80,
    },*/
    {
      input:{
        items:["ww2-hematiter/3"],
        liquids:["water/5"],
        power:100
      },
      output:{
        items:["ww2-iron/2"],
      },
      craftTime:60
    },
    {//2
      input:{
        items:["ww2-aluminum-org/3"],
        liquids:["water/7"],
        power:150
      },
      output:{
        items:["ww2-aluminum/2"],
      },
      craftTime:60
    },
    {//3
      input:{
        items:["ww2-tungsten-org/3"],
        liquids:["water/15"],
        power:300
      },
      output:{
        items:["ww2-tungsten/2"],
      },
      craftTime:90
    }
  ],{
    /*you can customize block here. ex)draw()
    you can use customUpdate(tile). this function excuted before update(tile)
    Modifying methods in library.js is not recommanded.
    */
  },{
    /*you can customize entity here.
    ex)
    _myProp:0,
    getMyProp(){
      return this._myProp;
    },
    setMyProp(a){
      this._myProp=a;
    }*/
  });
  /*
  YOU MUST NOT MODIFY VALUE OF THESE
  configurable
  outputsPower
  hasItems
  hasLiquids
  hasPower
  */
  /*true: dump items and liquids of output according to button
  false: dump items and liquids of output unconditionally*/
  multi.dumpToggle=false;

  multi.requirements(Category.crafting,ItemStack.with(Items.copper,75));
}
catch(err){
  print("multi-lib2 is not enabled");
}