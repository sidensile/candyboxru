var spells = {

    // Variables
    list : [],
    fasterCandiesFiboPrev : 1,
    fasterCandiesFiboCurr : 2,
    
    // Functions
    onload : function(){
        // We add the spells
        this.addSpell("Конфеты, скорее конфеты !", this.getFasterCandiesPrice.bind(this), this.fasterCandies.bind(this), "Поздравляю, теперь вы получаете больше конфет в секунду !", []);
        this.addSpell("Конфеты, больше конфет !", this.getMoreCandiesPrice.bind(this), this.moreCandies.bind(this), "///", []);
        this.addSpell("Меч, лучше меч !", this.getBetterSwordPrice.bind(this), this.betterSword.bind(this), "///", ["specialSword"]);
    
        // We sort the list
        this.sortListDependingOnPrice();
    },
    
    sortListDependingOnPrice : function(){
        this.list.sort(this.priceSortFunction);
    },
    
    priceSortFunction : function(spellA, spellB){
        var priceA = spellA.price();
        var priceB = spellB.price();
        
        if(priceA < priceB) return -1;
        else if(priceB < priceA) return 1;
        return 0;
    },
    
    getBetterSwordPrice : function(){
        return Math.floor(Math.pow(sword.specialPower+1, 2.6)) * 10000;
    },
    
    getFasterCandiesPrice : function(){
        return Math.pow(this.fasterCandiesFiboCurr, 2) * 10000;
    },
    
    addSpell : function(name, price, effect, speech, conditions){
        this.list.push({name:name, price:price, effect:effect, speech:speech, conditions:conditions});
    },
    
    getMoreCandiesPrice : function(){
        return 300000;
    },
    
    betterSword : function(){
        sword.setSpecialPower(sword.specialPower + 1);
        this.sortListDependingOnPrice();
        
        // And we change the hut's speech by ourselves
        switch(sword.name){
            case "Sword of Life":
                hut.setSpeech("Ваш меч жизни теперь будет высасывать больше энергии из ваших врагов.");
            break;
            case "Sword of Flames":
                hut.setSpeech("Ваш огненный меч стал более мощным.")
            break;
            case "Sword of Summoning":
                hut.setSpeech("Вы можете сейчас призвать " + sword.summonList[sword.getIndexOfBetterToSummon()].name + " !");
            break;
        }
    },
    
    moreCandies : function(){
        var nbr = Math.floor(candies.nbrTotal/20);
        
        // We can't gain more candies than the price we pay for the spell !
        if(nbr > 300000) nbr = 300000;
        
        candies.setNbrOwned(candies.nbrOwned + nbr);
        hut.setSpeech("Вот " + nbr + " конфетки для тебя !");
    },
    
    nextFasterCandiesFiboStep : function(){
        this.setFasterCandiesFibo(this.fasterCandiesFiboCurr, this.fasterCandiesFiboPrev + this.fasterCandiesFiboCurr);
    },
    
    setFasterCandiesFibo : function(prev, curr){
        // Set the new values
        this.fasterCandiesFiboPrev = prev;
        this.fasterCandiesFiboCurr = curr;
        
        // Sort the spells list depending on their price, since the price of the faster candies spell just changed
        this.sortListDependingOnPrice();
    },
    
    fasterCandies : function(){
        // We change candies per second
        candies.setCandiesPerSecond(this.fasterCandiesFiboCurr);
        
        // We continue fibo
        this.nextFasterCandiesFiboStep();
    }

};
