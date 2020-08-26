try{//nvm
  //get script from multi-lib2
  const multiLib=require("multi-lib2/wrapper");
  //you can use GenericSmelter instead GenericCrafter
                                          // ▼this has to be same with .json file name
  const multi2=multiLib.extend(GenericCrafter,"BTX",/*Array [] not {} ->*/[
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
    {//1  you can skip recipe properties
      input:{
        items:["sand/1","lead/1"],
      },
      craftTime:12
    },
    {//2
      input:{
        items:["coal/1","sand/1"],
      },
      output:{
        items:["thorium/1","surge-alloy/2"],
        power:10
      },
      craftTime:60
    },
    {//3
      input:{
        items:["pyratite/1","blast-compound/1"],
      },
      output:{
        items:["scrap/1","plastanium/2","spore-pod/2"],
      },
      craftTime:72
    },
    {//4
      input:{
        items:["sand/1"],
        power:15
      },
      output:{
        items:["silicon/1"],
        power:10
      },
      craftTime:30
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
  multi2.dumpToggle=true;

  multi2.requirements(Category.crafting,ItemStack.with(Items.copper,75));

}
catch(err){

}