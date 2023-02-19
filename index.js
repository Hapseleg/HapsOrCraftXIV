// const xivapikey = require('./config/xivapikey')
// const XIVAPI = require('@xivapi/js')

import xivapikey from './config/xivapikey.js'
import XIVAPI from '@xivapi/js'

const xiv = new XIVAPI({
  private_key: xivapikey,
  language: 'en',
  snake_case: true
})

import Universalis from 'universalis.js'
const uni = new Universalis()

/**
https://xivapi.com/Recipe/5300
https://xivapi.com/item/10 wind
https://xivapi.com/item/36194 log
https://xivapi.com/item/36200 lumber
 */

/**
 * search item name
 * get recipe id and item id
 * get recipe info
 * get price on item
 * get prices on recipe ingredients
 * show prices
 * is it worth crafting?
 */

//   xiv.data.get('Integral Lumber','35463').then((response) => {
//     // do something with the response
//     console.log(response)
//   }).catch((error) => {
//     // do something with the error
// })


// xiv.data.list('test',{ids:'36200'}).then((response) => {
//   // do something with the response
//   console.log(response)
// }).catch((error) => {
//   // do something with the error
// })

// xiv.data.get('item','36194').then((response) => {
//     // do something with the response
//     console.log(response)
//   }).catch((error) => {
//     // do something with the error
//   })


// xiv.data.get('recipe', '5300').then((response) => {
//   console.log(response)
// }).catch((error) => {
//   console.error(error)
// })

// function updateValue(sourceObj, targetObj) {
//   for (var i in sourceObj) {
//     if (targetObj[i] != undefined) {
//       if (typeof(sourceObj[i]) == "object") {
//         sourceObj[i] = updateValue(sourceObj[i], targetObj[i])
//       }
//       else {
//         sourceObj[i] = targetObj[i]
//       }
//     }
//   }
//   return sourceObj
// }

// var recipe = { "AmountIngredient0": -1, "AmountIngredient1": -1, "AmountIngredient2": -1, "AmountIngredient3": -1, "AmountIngredient4": -1, "AmountIngredient5": -1, "AmountIngredient6": -1, "AmountIngredient7": -1, "AmountIngredient8": -1, "AmountIngredient9": -1, "AmountResult": -1, "CanHq": -1, "CanQuickSynth": -1, "ID": -1, "IsExpert": -1, "IsSecondary": -1, "IsSpecializationRequired": -1, "ItemIngredient0": { "AdditionalData": -1, "Adjective": -1, "AetherialReduce": -1, "AlwaysCollectable": -1, "Article": -1, "BaseParam0": null, "BaseParam0Target": "", "BaseParam0TargetID": -1, "BaseParam1": null, "BaseParam1Target": "", "BaseParam1TargetID": -1, "BaseParam2": null, "BaseParam2Target": "", "BaseParam2TargetID": -1, "BaseParam3": null, "BaseParam3Target": "", "BaseParam3TargetID": -1, "BaseParam4": null, "BaseParam4Target": "", "BaseParam4TargetID": -1, "BaseParam5": null, "BaseParam5Target": "", "BaseParam5TargetID": -1, "BaseParamModifier": -1, "BaseParamSpecial0": null, "BaseParamSpecial0Target": "", "BaseParamSpecial0TargetID": -1, "BaseParamSpecial1": null, "BaseParamSpecial1Target": "", "BaseParamSpecial1TargetID": -1, "BaseParamSpecial2": null, "BaseParamSpecial2Target": "", "BaseParamSpecial2TargetID": -1, "BaseParamSpecial3": null, "BaseParamSpecial3Target": "", "BaseParamSpecial3TargetID": -1, "BaseParamSpecial4": null, "BaseParamSpecial4Target": "", "BaseParamSpecial4TargetID": -1, "BaseParamSpecial5": null, "BaseParamSpecial5Target": "", "BaseParamSpecial5TargetID": -1, "BaseParamValue0": -1, "BaseParamValue1": -1, "BaseParamValue2": -1, "BaseParamValue3": -1, "BaseParamValue4": -1, "BaseParamValue5": -1, "BaseParamValueSpecial0": -1, "BaseParamValueSpecial1": -1, "BaseParamValueSpecial2": -1, "BaseParamValueSpecial3": -1, "BaseParamValueSpecial4": -1, "BaseParamValueSpecial5": -1, "Block": -1, "BlockRate": -1, "CanBeHq": -1, "CastTimeS": -1, "ClassJobCategory": null, "ClassJobCategoryTarget": "", "ClassJobCategoryTargetID": -1, "ClassJobRepair": null, "ClassJobRepairTarget": "", "ClassJobRepairTargetID": -1, "ClassJobUse": null, "ClassJobUseTarget": "", "ClassJobUseTargetID": -1, "CooldownS": -1, "DamageMag": -1, "DamagePhys": -1, "DefenseMag": -1, "DefensePhys": -1, "DelayMs": -1, "Description": "", "Description_de": "", "Description_en": "", "Description_fr": "", "Description_ja": "", "Desynth": -1, "EquipRestriction": -1, "EquipSlotCategory": null, "EquipSlotCategoryTarget": "", "EquipSlotCategoryTargetID": -1, "FilterGroup": -1, "GrandCompany": null, "GrandCompanyTarget": "", "GrandCompanyTargetID": -1, "ID": -1, "Icon": "", "IconHD": "", "IconID": -1, "IsAdvancedMeldingPermitted": -1, "IsCollectable": -1, "IsCrestWorthy": -1, "IsDyeable": -1, "IsGlamourous": -1, "IsIndisposable": -1, "IsPvP": -1, "IsUnique": -1, "IsUntradable": -1, "ItemAction": null, "ItemActionTarget": "", "ItemActionTargetID": -1, "ItemGlamour": null, "ItemGlamourTarget": "", "ItemGlamourTargetID": -1, "ItemRepair": null, "ItemRepairTarget": "", "ItemRepairTargetID": -1, "ItemSearchCategory": { "Category": -1, "ClassJob": null, "ClassJobTarget": "", "ClassJobTargetID": -1, "ID": -1, "Icon": "", "IconHD": "", "IconID": -1, "Name": "", "Name_de": "", "Name_en": "", "Name_fr": "", "Name_ja": "", "Order": -1 }, "ItemSearchCategoryTarget": "", "ItemSearchCategoryTargetID": -1, "ItemSeries": null, "ItemSeriesTarget": "", "ItemSeriesTargetID": -1, "ItemSortCategory": { "ID": -1, "Param": -1 }, "ItemSortCategoryTarget": "", "ItemSortCategoryTargetID": -1, "ItemSpecialBonus": null, "ItemSpecialBonusParam": -1, "ItemSpecialBonusTarget": "", "ItemSpecialBonusTargetID": -1, "ItemUICategory": { "ID": -1, "Icon": "", "IconHD": "", "IconID": -1, "Name": "", "Name_de": "", "Name_en": "", "Name_fr": "", "Name_ja": "", "OrderMajor": -1, "OrderMinor": -1 }, "ItemUICategoryTarget": "", "ItemUICategoryTargetID": -1, "LevelEquip": -1, "LevelItem": -1, "Lot": -1, "MateriaSlotCount": -1, "MaterializeType": -1, "ModelMain": "", "ModelSub": "", "Name": "", "Name_de": "", "Name_en": "", "Name_fr": "", "Name_ja": "", "Plural": "", "Plural_de": "", "Plural_en": "", "Plural_fr": "", "Plural_ja": "", "PossessivePronoun": -1, "PriceLow": -1, "PriceMid": -1, "Pronoun": -1, "Rarity": -1, "Singular": "", "Singular_de": "", "Singular_en": "", "Singular_fr": "", "Singular_ja": "", "StackSize": -1, "StartsWithVowel": -1, "SubStatCategory": -1 }, "ItemIngredient0Target": "", "ItemIngredient0TargetID": -1, "ItemIngredient1": null, "ItemIngredient1Target": "", "ItemIngredient1TargetID": -1, "ItemIngredient2": null, "ItemIngredient2Target": "", "ItemIngredient2TargetID": -1, "ItemIngredient3": null, "ItemIngredient3Target": "", "ItemIngredient3TargetID": -1, "ItemIngredient4": null, "ItemIngredient4Target": "", "ItemIngredient4TargetID": -1, "ItemIngredient5": null, "ItemIngredient5Target": "", "ItemIngredient5TargetID": -1, "ItemIngredient6": null, "ItemIngredient6Target": "", "ItemIngredient6TargetID": -1, "ItemIngredient7": null, "ItemIngredient7Target": "", "ItemIngredient7TargetID": -1, "ItemIngredient8": { "AdditionalData": -1, "Adjective": -1, "AetherialReduce": -1, "AlwaysCollectable": -1, "Article": -1, "BaseParam0": null, "BaseParam0Target": "", "BaseParam0TargetID": -1, "BaseParam1": null, "BaseParam1Target": "", "BaseParam1TargetID": -1, "BaseParam2": null, "BaseParam2Target": "", "BaseParam2TargetID": -1, "BaseParam3": null, "BaseParam3Target": "", "BaseParam3TargetID": -1, "BaseParam4": null, "BaseParam4Target": "", "BaseParam4TargetID": -1, "BaseParam5": null, "BaseParam5Target": "", "BaseParam5TargetID": -1, "BaseParamModifier": -1, "BaseParamSpecial0": null, "BaseParamSpecial0Target": "", "BaseParamSpecial0TargetID": -1, "BaseParamSpecial1": null, "BaseParamSpecial1Target": "", "BaseParamSpecial1TargetID": -1, "BaseParamSpecial2": null, "BaseParamSpecial2Target": "", "BaseParamSpecial2TargetID": -1, "BaseParamSpecial3": null, "BaseParamSpecial3Target": "", "BaseParamSpecial3TargetID": -1, "BaseParamSpecial4": null, "BaseParamSpecial4Target": "", "BaseParamSpecial4TargetID": -1, "BaseParamSpecial5": null, "BaseParamSpecial5Target": "", "BaseParamSpecial5TargetID": -1, "BaseParamValue0": -1, "BaseParamValue1": -1, "BaseParamValue2": -1, "BaseParamValue3": -1, "BaseParamValue4": -1, "BaseParamValue5": -1, "BaseParamValueSpecial0": -1, "BaseParamValueSpecial1": -1, "BaseParamValueSpecial2": -1, "BaseParamValueSpecial3": -1, "BaseParamValueSpecial4": -1, "BaseParamValueSpecial5": -1, "Block": -1, "BlockRate": -1, "CanBeHq": -1, "CastTimeS": -1, "ClassJobCategory": null, "ClassJobCategoryTarget": "", "ClassJobCategoryTargetID": -1, "ClassJobRepair": null, "ClassJobRepairTarget": "", "ClassJobRepairTargetID": -1, "ClassJobUse": null, "ClassJobUseTarget": "", "ClassJobUseTargetID": -1, "CooldownS": -1, "DamageMag": -1, "DamagePhys": -1, "DefenseMag": -1, "DefensePhys": -1, "DelayMs": -1, "Description": "", "Description_de": "", "Description_en": "", "Description_fr": "", "Description_ja": "", "Desynth": -1, "EquipRestriction": -1, "EquipSlotCategory": null, "EquipSlotCategoryTarget": "", "EquipSlotCategoryTargetID": -1, "FilterGroup": -1, "GrandCompany": null, "GrandCompanyTarget": "", "GrandCompanyTargetID": -1, "ID": -1, "Icon": "", "IconHD": "", "IconID": -1, "IsAdvancedMeldingPermitted": -1, "IsCollectable": -1, "IsCrestWorthy": -1, "IsDyeable": -1, "IsGlamourous": -1, "IsIndisposable": -1, "IsPvP": -1, "IsUnique": -1, "IsUntradable": -1, "ItemAction": null, "ItemActionTarget": "", "ItemActionTargetID": -1, "ItemGlamour": null, "ItemGlamourTarget": "", "ItemGlamourTargetID": -1, "ItemRepair": null, "ItemRepairTarget": "", "ItemRepairTargetID": -1, "ItemSearchCategory": { "Category": -1, "ClassJob": null, "ClassJobTarget": "", "ClassJobTargetID": -1, "ID": -1, "Icon": "", "IconHD": "", "IconID": -1, "Name": "", "Name_de": "", "Name_en": "", "Name_fr": "", "Name_ja": "", "Order": -1 }, "ItemSearchCategoryTarget": "", "ItemSearchCategoryTargetID": -1, "ItemSeries": null, "ItemSeriesTarget": "", "ItemSeriesTargetID": -1, "ItemSortCategory": { "ID": -1, "Param": -1 }, "ItemSortCategoryTarget": "", "ItemSortCategoryTargetID": -1, "ItemSpecialBonus": null, "ItemSpecialBonusParam": -1, "ItemSpecialBonusTarget": "", "ItemSpecialBonusTargetID": -1, "ItemUICategory": { "ID": -1, "Icon": "", "IconHD": "", "IconID": -1, "Name": "", "Name_de": "", "Name_en": "", "Name_fr": "", "Name_ja": "", "OrderMajor": -1, "OrderMinor": -1 }, "ItemUICategoryTarget": "", "ItemUICategoryTargetID": -1, "LevelEquip": -1, "LevelItem": -1, "Lot": -1, "MateriaSlotCount": -1, "MaterializeType": -1, "ModelMain": "", "ModelSub": "", "Name": "", "Name_de": "", "Name_en": "", "Name_fr": "", "Name_ja": "", "Plural": "", "Plural_de": "", "Plural_en": "", "Plural_fr": "", "Plural_ja": "", "PossessivePronoun": -1, "PriceLow": -1, "PriceMid": -1, "Pronoun": -1, "Rarity": -1, "Singular": "", "Singular_de": "", "Singular_en": "", "Singular_fr": "", "Singular_ja": "", "StackSize": -1, "StartsWithVowel": -1, "SubStatCategory": -1 }, "ItemIngredient8Target": "", "ItemIngredient8TargetID": -1, "ItemIngredient9": null, "ItemIngredient9Target": "", "ItemIngredient9TargetID": "", "ItemIngredientRecipe0": null, "ItemIngredientRecipe1": null, "ItemIngredientRecipe2": null, "ItemIngredientRecipe3": null, "ItemIngredientRecipe4": null, "ItemIngredientRecipe5": null, "ItemIngredientRecipe6": null, "ItemIngredientRecipe7": null, "ItemIngredientRecipe8": null, "ItemIngredientRecipe9": null, "ItemRequired": null, "ItemRequiredTarget": "", "ItemRequiredTargetID": -1, "ItemResult": { "Description": "", "ID": -1, "Icon": "", "IconHD": "", "IconID": -1, "LevelItem": -1, "Name": "", "Singular": "", "StackSize": -1, }, "ItemResultTarget": "", "ItemResultTargetID": -1, "MaterialQualityFactor": -1, "Name": "", "Url": "" }

// let itemInfo = {
//   itemId: 0,
//   recipeId: 0,
//   iconURL: ""
// }

async function getItemIdAndRecipeId(nameOfItem, callback) {
  console.log("getItemIdAndRecipeId")
  let itemInfo = {
    itemId: 0,
    recipeId: 0,
    iconURL: ""
  }

  xiv.search(nameOfItem).then((response) => {
    // console.log(response)
    response.results.forEach(element => {
      if (element.url_type == 'Item') {
        itemInfo.itemId = element.id
        itemInfo.iconURL = element.icon
      }
      else if (element.url_type == 'Recipe')
        itemInfo.recipeId = element.id
    });
    callback(itemInfo)
  }).catch((error) => {
    console.error(error)
  })
}

async function getRecipeData(recipeId, callback) {
  console.log("getRecipeData")
  xiv.data.get('recipe', recipeId).then((res) => {
    callback(res)

    // recipe = recipeRes
    // console.log(recipe)
  }).catch((error) => {
    console.error(error)
    // do something with the error
  })
}

function printInfo(recipe) {
  let ing = getIngredientsAndRecipes(recipe)

  console.log(recipe.name)
  ing.ingredient.forEach(element => {
    console.log(element.name)
  });
}

function getIngredientsAndRecipes(recipeRes) {
  let res = { 'ingredientAmount': [], 'ingredient': [], 'recipes': [] }
  for (let i = 0; i <= 9; i++) {
    if (recipeRes["amount_ingredient" + i] != 0)
      res.ingredientAmount.push(recipeRes["amount_ingredient" + i])

    if (recipeRes["item_ingredient" + i] != null)
      res.ingredient.push(recipeRes["item_ingredient" + i])

    if (recipeRes["item_ingredient_recipe" + i] != null)
      res.recipes.push(recipeRes["item_ingredient_recipe" + i])
  }
  return res
}

function getXVIAPIInfo(itemName){
  getItemIdAndRecipeId(itemName, function (res) {
    console.log(res)
  
    getRecipeData(res.recipeId, function (recipeRes) {
      let recipe = recipeRes
      // console.log(recipe["amount_ingredient0"])
      // console.log(recipeRes["AmountIngredient0"])
      // console.log(recipeRes.AmountIngredient0)
      // console.log(recipeRes[0])
      // printRecipeInfo(recipe)
      // console.log(recipe.name)
      // console.log(getIngredientsAndRecipes(recipe))
      printInfo(recipe)
    })
    // xiv.data.get('recipe',res.recipeId).then((recipeRes) => {
    //   recipe = recipeRes
    //   console.log(recipe)
    // }).catch((error) => {
    //   console.error(error)
    //   // do something with the error
    // })
  })
}

var findThisItem = "Integral Lumber"
// getXVIAPIInfo(findThisItem)


const getFatCatListings = async () => {
	const listings = await uni.getListings('cerberus', '9347', { hq: true, listingLimit: 10 })
  console.log(listings)
}