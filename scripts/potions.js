var potions = {
    
    // Variables
    list : {},
  
    // Functions
    getCountdown : function(){
        if(objects.list.magicianHat.have) return 12;
        return 20;
    },
    
    onload : function(){
        this.addPotion("health", "Зелье здоровья", "#ff0000", "potions.heal(50);", "Используйте это незначительное зелье здоровья во время боев, чтобы восстановить некоторые из ваших очков здоровья !", "potion");
        this.addPotion("escape", "Зелье побега", "#51c90f", "potions.escape();", "Зелье побега позволяет убежать от задания, избегая при этом любого временного штрафа. Оно заставляет тебя бежать очень быстро !", "potion");
        this.addPotion("berserk", "Зелье неистовости", "#000000", "potions.berserk();", "Зелье неистовости превращает тебя в.. Берсееееееерка !", "potion");
        this.addPotion("fireScroll", "Огненный свиток", "#dc3e00", "potions.fireScroll();", "Это мощный огненный свиток, который сожжёт вашего противника во время битвы .", "scroll");
        this.addPotion("acidRainScroll", "Свиток кислотного дождя", "#68980b", "potions.acidRainScroll();", "Этот свиток кислотного дождя мгновенно повредит всем на этой территории (включая вас).", "scroll");
        this.addPotion("teleportScroll", "Свиток телепортации", "#7ca0b5", "potions.teleportScroll();", "Этот телепортирующий свиток перенесёт вас в начало задания. Полезно, если надо отдохнуть немного !", "scroll");
        this.addPotion("earthquakeScroll", "Свиток землетрясения", "#470b0b", "potions.earthquakeScroll();", "Этот свиток землетрясения нанесет большой ущерб всем на всей территории.", "scroll");
        this.addPotion("impInvocationScroll", "Imp invocation scroll", "#ff6600", "potions.impInvocationScroll();", "This imp invocation scroll will, if there's enough place, invoke in front of you an imp which will fight for you.", "scroll");
        this.addPotion("majorHealth", "Двойное зелье здоровья", "#ff0000", "potions.heal(100);", "Это зелье имеет двойной эффект восстановления здоровья", "potion");
        this.addPotion("invulnerability", "Invulnerability potion", "#ef893b", "potions.invulnerability();", "This invulnerability potion will make you invincible for some time, but it fills your stomach : you won't be able to drink another potion for a long time after using it.", "potion");
        this.addPotion("turtle", "Черепашье зелье", "#008a13", "potions.turtle();", "После использования вы станете черепахой (но не ниндзя). Недостаток: вы идете медленнее. Преимущество: теперь вы гораздо более устойчивы к атакам ваших врагов.", "potion");
        this.addPotion("jelly", "Желе Генадий", "#9500b5", "potions.jelly();", "Желе Гена взрывается при соприкосновении с чем-либо, пытающимся пройти сквозь него, нанося высокий урон. При использовании, ставится сзади вас.", "special");
        this.addPotion("seed", "Семя", "#3dab3a", "potions.seed();", "Это семя способно заставить вырасти конфетное дерево. Конфетное дерево сделано из конфет, и требуется много времени, чтобы срубить его. П. С.: посадится только если для него достаточно места.", "special");
        this.addPotion("cloning", "Зелье клонирования", "#6d6d6d", "potions.cloning();", "Это зелье клонирования будет, хорошо... клонировать тебя. Странно, не так-ли? Ваш клон будет иметь те же очки здоровья, что и вы, когда вы выпили зелье, но у него не будет ни вашей брони, ни вашего меча. Он будет сражаться, используя \"клонированный меч\", который наносит правильное количество урона. Клон будет помещен перед вами, если там достаточно места.", "potion");
        this.addPotion("superman", "Зелье супермена", "#ddef17", "potions.superman();", "Это зелье супермэна даст вам плащ и сделает вас похожим на Супермена до конца задания !", "potion");
        this.addPotion("gmooh", "Зелье У.М.О.С.", "#ff00c0", "potions.gmooh();", "Это зелье \"Убери меня отсюда\" телепортирует тебя в другое место. Пункт назначения вообще не предсказуем.", "potion");
    },
    
    updateOnPage : function(){
        htmlInteraction.setInnerHtml("quest_potions", this.getText());
        if(quest.weAreQuestingRightNow) this.updateCountdownOnPage();
    },
    
    updateCountdownOnPage : function(){
        htmlInteraction.setInnerHtml("quest_potions_countdowns", this.getCountdownText());
    },
    
    getCountdownText : function(){
        var text = "";
        
        // Potions
        if(quest.berserk) text += "Режим неистовости : " + quest.berserkCountdown + "\n";
        if(quest.turtle) text += "Ты - черепаха : " + quest.turtleCountdown + "\n";
        if(quest.invulnerability) text += "Бессмертие : " + quest.invulnerabilityCountdown + "\n";
        if(this.list.health.shown || this.list.escape.shown || this.list.berserk.shown || this.list.majorHealth.shown || this.list.invulnerability.shown || this.list.turtle.shown || this.list.cloning.shown || this.list.superman.shown || this.list.gmooh.shown) text += "Число зелий : " + quest.potionUseCountdown + "\n";
        
        // Scrolls
        if(this.list.fireScroll.shown || this.acidRainScroll.shown || this.teleportScroll.shown || this.earthquakeScroll.shown || this.impInvocationScroll.shown) text += "Число свитков : " + quest.scrollUseCountdown;
        
        return text;
    },
    
    getText : function(){
        var text = "";
        
        // Special stuff
        text += this.getPotionButtonText(this.list.seed);
        text += this.getPotionButtonText(this.list.jelly);
        
        text += "\n";
        
        // Potions
        text += this.getPotionButtonText(this.list.health);
        text += this.getPotionButtonText(this.list.escape);
        text += this.getPotionButtonText(this.list.berserk);
        
        text += "\n";
        
        // Potions bis !
        text += this.getPotionButtonText(this.list.majorHealth);
        text += this.getPotionButtonText(this.list.turtle);
        text += this.getPotionButtonText(this.list.invulnerability);
        text += this.getPotionButtonText(this.list.superman);
        text += this.getPotionButtonText(this.list.cloning);
        text += this.getPotionButtonText(this.list.gmooh);
        
        text += "\n";
        
        // Scrolls
        text += this.getPotionButtonText(this.list.fireScroll);
        text += this.getPotionButtonText(this.list.acidRainScroll);
        text += this.getPotionButtonText(this.list.teleportScroll);
        text += this.getPotionButtonText(this.list.impInvocationScroll);
        text += this.getPotionButtonText(this.list.earthquakeScroll);
        
        return text;
    },
    
    getPotions : function(potion, nbr){
        this.setPotionShown(potion, true);
        potion.nbrOwned += nbr;
        this.updateOnPage();
    },
    
    setPotionShown : function(potion, value){
        potion.shown = value;
    },
    
    setPotionNbrOwned : function(potion, value){
        potion.nbrOwned = value;
    },
    
    buyPotion : function(potion, price){
        this.getPotions(potion, 1);
        candies.setNbrOwned(candies.nbrOwned - price);
        shop.setMerchantSpeech(potion.merchantSpeech);
    },
    
    buyScroll : function(price){
        var maxPower = 2;
        
        if(objects.list.magicianHat.have) maxPower = 4;
        
        switch(random.getRandomIntUpTo(maxPower)){
            case 0:
                this.buyPotion(this.list.fireScroll, price);
            break;
            case 1:
                this.buyPotion(this.list.acidRainScroll, price);
            break;
            case 2:
                this.buyPotion(this.list.teleportScroll, price);
            break;
            case 3:
                this.buyPotion(this.list.impInvocationScroll, price);
            break;
            case 4:
                this.buyPotion(this.list.earthquakeScroll, price);
            break;
        }
    },
    
    getPotionButtonText : function(potion){
        if(potion.shown){
            var disabled = "";
            var tooltip = "";
        
            if(quest.weAreQuestingRightNow == false || potion.nbrOwned <= 0 || ((potion.type == "potion" && quest.potionUseCountdown > 0) || (potion.type == "scroll" && quest.scrollUseCountdown > 0))) disabled = "disabled=disabled";
            if(quest.weAreQuestingRightNow == false) tooltip = "<span>" + potion.merchantSpeech + "</span>";
        
            return "<button class=\"tooltip\" style=\"border: 2px solid " + potion.buttonColor + "; padding: 2px 5px;\" " + disabled  + " onclick=\"" + potion.action + "\">" + potion.buttonText + " (" + potion.nbrOwned + ")" + tooltip + "</button>\n";
        }
        return "";
    },
    
    addPotion : function(name, buttonText, buttonColor, action, merchantSpeech, type){
        this.list[name] = {buttonText:buttonText, buttonColor:buttonColor, action:action, shown:false, nbrOwned:0, merchantSpeech:merchantSpeech, type:type};
    },
    
    makeJelly : function(){
        return land.createTrap("JEL", 1, 1, "Сильный взрыв!", "Желе! || Убирайся!", []);
    },
    
    makeClone : function(hp, max_hp){
        return land.createAlly("\\o/", max_hp, hp, "Пашка", "Твой клон.", []);
    },
    
    makeCandyTree : function(){
        var hp = 0;
        
        // One chance out of 100 to spawn the Yggdrasil \o/
        if(random.oneChanceOutOf(100)){
            return land.createTrap("/Y\\", 10000, 10000, "ничего", "Его зовут Васька, высокое дерево, посыпаное блестящей пылью", [drops.createDrop("candies", 10000)]);
        }
        else{
            hp = 500 + 100 * random.getRandomIntUpTo(4); // 500 / 600 / 700 / 800 / 900
            return land.createTrap("\\|/", hp, hp, "ничего", "Конфетное дерево. Я надеюсь ты брал хороший топор.", []);
        }
    },
    
    heal : function(howMuch){
        // We get the character index
        var id = quest.getCharacterIndex();
        
        if(quest.things[id].hp > 0 && ((howMuch == 50 && this.list.health.nbrOwned > 0) || (howMuch == 100 && this.list.majorHealth.nbrOwned > 0))){
            // We decrement nbrOwned
            if(howMuch == 50)
                this.list.health.nbrOwned -= 1;
            else if(howMuch == 100)
                this.list.majorHealth.nbrOwned -= 1;
        
            // We increment hp
            quest.things[id].hp += howMuch;
        
            // We set hp = max_hp if hp > max_hp
            if(quest.things[id].hp > quest.things[id].max_hp){
                quest.things[id].hp = quest.things[id].max_hp;
            }
        
            // We set the countdown
            quest.potionUseCountdown += this.getCountdown();
        
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    escape : function(){
        if(this.list.escape.nbrOwned > 0){
        // We decrement nbrOwned
        this.list.escape.nbrOwned -= 1;
        
        // We tell the quest that we escape
        quest.escaping = true;
        
        // We delete all tired time
        quest.setTiredTime(0);
        quest.setTiredFound(0);
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    berserk : function(){
        if(this.list.berserk.nbrOwned > 0){
        // We decrement nbrOwned
        this.list.berserk.nbrOwned -= 1;
        
        // We set the countdown
        quest.potionUseCountdown += this.getCountdown();
        
        // We tell the quest that we are now in berserk mode
        quest.beginBerserk();
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    fireScroll : function(){
        if(this.list.fireScroll.nbrOwned > 0){
        // We decrement nbrOwned
        this.list.fireScroll.nbrOwned -= 1;
        
        // We set the countdown
        quest.scrollUseCountdown += this.getCountdown();
        
        // We burn the enemy !
        var index = quest.getCharacterIndex();
        index += 1; // We set the index to look just in front of the player
        if(quest.things[index].type == "mob"){ // If it's a mob
            quest.things[index].hp -= 25 + random.getRandomIntUpTo(10);
            if(quest.things[index].hp < 0) quest.things[index] = quest.makeNoneThing();
        }
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    acidRainScroll : function(){
        if(yourself.end == false && this.list.acidRainScroll.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.acidRainScroll.nbrOwned -= 1;
            
            // We set the countdown
            quest.scrollUseCountdown += this.getCountdown();
            
            // We burn everyone
            for(var i = 0; i < quest.things.length; i++){
                if(quest.things[i].type == "mob" || quest.things[i].type == "character"){
                    quest.things[i].hp -= 6;
                    if(quest.things[i].type == "character" && quest.things[i].hp <= 0) quest.things[i].hp = 1;
                    if(quest.things[i].hp < 0) quest.things[i] = quest.makeNoneThing();
                }
            }
            
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    teleportScroll : function(){
        // If we're not already at index 0
        if(quest.things[0].type != "character" && this.list.teleportScroll.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.teleportScroll.nbrOwned -= 1;
        
            // We set the countdown
            quest.scrollUseCountdown += this.getCountdown();
        
            // We teleport !
            var index = quest.getCharacterIndex();
            quest.things[0] = quest.things[index];
            quest.things[index] = quest.makeNoneThing();
        
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    earthquakeScroll : function(){
        if(yourself.end == false && this.list.earthquakeScroll.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.earthquakeScroll.nbrOwned -= 1;
            
            // We set the countdown
            quest.scrollUseCountdown += this.getCountdown();
            
            // We hit everyone
            for(var i = 0; i < quest.things.length; i++){
                if(quest.things[i].type == "mob" || quest.things[i].type == "character"){
                    quest.things[i].hp -= 12;
                    if(quest.things[i].type == "character" && quest.things[i].hp <= 0) quest.things[i].hp = 1;
                    if(quest.things[i].hp < 0) quest.things[i] = quest.makeNoneThing();
                }
            }
            
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    impInvocationScroll : function(){
        var index = quest.getCharacterIndex();
        
        // If the character isn't at the end of the land and there's nothing in front of him
        if(index < quest.things.length-1 && quest.things[index+1].type == "none" && this.list.impInvocationScroll.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.impInvocationScroll.nbrOwned -= 1;
            
            // We set the countdown
            quest.scrollUseCountdown += this.getCountdown();
            
            // We invoke an int
            quest.things[index+1] = quest.makeImp();
            
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    invulnerability : function(){
        if(this.list.invulnerability.nbrOwned > 0){
        // We decrement nbrOwned
        this.list.invulnerability.nbrOwned -= 1;
        
        // We set the countdown (40 ! because this potion is too awesome)
        quest.potionUseCountdown += 40;
        
        // We tell the quest that we are now in berserk mode
        quest.beginInvulnerability();
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    turtle : function(){
        if(this.list.turtle.nbrOwned > 0){
        // We decrement nbrOwned
        this.list.turtle.nbrOwned -= 1;
        
        // We set the countdown
        quest.potionUseCountdown += this.getCountdown();
        
        // We tell the quest that we are now in berserk mode
        quest.beginTurtle();
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    jelly : function(){
        // We get the character index
        var index = quest.getCharacterIndex();
        
        // If the character isn't at the beginning of the land and there's nothing behind the character
        if(index != 0 && quest.things[index - 1].type == "none" && this.list.jelly.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.jelly.nbrOwned -= 1;
        
            // We place a jelly
            quest.things[index-1] = this.makeJelly();
        
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    seed : function(){
        // We get the character index
        var index = quest.getCharacterIndex();
        
        // If the character isn't at the end of the land and there's nothing in front of the character
        if(index < quest.things.length-1 && quest.things[index + 1].type == "none"){
            // We decrement nbrOwned
            this.list.seed.nbrOwned -= 1;
        
            // We place a candy tree
            quest.things[index+1] = this.makeCandyTree();
        
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    cloning : function(){
        // We get the character index
        var index = quest.getCharacterIndex();
        
        // If the character isn't at the beginning of the land and there's nothing in front of the character
        if(index != 0 && index < quest.things.length-1 && quest.things[index + 1].type == "none" && this.list.cloning.nbrOwned > 0){
            // We decrement nbrOwned
            this.list.cloning.nbrOwned -= 1;
            
            // We set the countdown
            quest.potionUseCountdown += 100;
        
            // We place a clone
            quest.things[index+1] = this.makeClone(quest.things[index].hp, quest.things[index].max_hp);
        
            // We update the quest and the potions on page
            quest.updateOnPage();
            this.updateOnPage();
        }
    },
    
    superman : function(){
        if(this.list.superman.nbrOwned > 0){
        // We get the character's index
        var index = quest.getCharacterIndex();
        
        // We decrement nbrOwned
        this.list.superman.nbrOwned -= 1;
        
        // We set the countdown
        quest.potionUseCountdown += this.getCountdown();
        
        // We change the character text
        quest.things[index].text = "(o-";
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    gmooh : function(){
        if(this.list.gmooh.nbrOwned > 0){
        // We tell the quest that we're using a gmooh potion, then when quest.move will be executed, our gmoohEffect() function will be called
        quest.gmooh = true;
        
        // We delete all tired time
        quest.setTiredTime(0);
        quest.setTiredFound(0);
        
        // We update the quest and the potions on page
        quest.updateOnPage();
        this.updateOnPage();
    }
    },
    
    // When this function is called, quest.stop() was done just before, so we can launch a new quest if we want ;)
    gmoohEffect : function(){
        // We decrement nbrOwned
        this.list.gmooh.nbrOwned -= 1;
        
        quest.setTiredTime(0);
        
        switch(random.getRandomIntUpTo(3)){
            case 0:
                quest.begin(false, land.getLandIndexFromName("Peaceful Forest"));
            break;
            case 1:
                quest.begin(false, land.getLandIndexFromName("cowlevel"));
            break;
            case 2:
                quest.begin(false, land.getLandIndexFromName("sea"));
            break;
            case 3:
                quest.begin(false, land.getLandIndexFromName("desert"));
            break;
        }
    }
    
};
