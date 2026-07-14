import {expect } from '@playwright/test';
import {test} from '../fixtures/fixtures'


test('has title', async ({ page, loginPage }) => {
  
  function duplicateChar(input:string){
    let map = new Map<string,number>();
    input.split("").forEach(ele =>{
        if(!map.has(ele)){
           map.set(ele,(map.get(ele)||0)+1); 
        }else{
          map.set(ele,(map.get(ele)||0)+1); 
        }
    })
    console.log(map)
    for(let [key,value] of map){
        if(value>1){
          console.log("duplicate chars are :" + key)
        }
    }
}

duplicateChar("QAQA");

});



