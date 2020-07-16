var objects = {

    // Variables
    list : {
        key : {have:false, found:false, text:"a key", name:"Ключ от фермы леденцов.", description:"Этот ключ открывает ферму леденцов для их фарма в вашу коробку сладостей"},
        boots : {have:false, found:false, text:"a pair of boots", name:"Сапоги седьмой лиги", description:"Они ускоряют вас, при прохождении квестов."},
        swampMap : {have:false, found:false, text:"a map", name:"Карта к Мутному Болоту", description:"Мутное болото это самое мутное болото, которое ту когда-нибудь видел"},
        hutMap : {have:false, found:false, text:"a map", name:"Карта к дому Колдуньи", description:"Тут живёт самая могущественная ведьма в мире ! Она может помочь тебе... но не бесплатно."},
        wellMap : {have:false, found:false, text:"a map", name:"Карта к Колодцу Желаний", description:"Загадай желание, ты можешь засветиться или засиять"},
        magicianHat : {have:false, found:false, text:"a hat", name:"Шляпа мага", description:"Эта шляпа даст тебе магические способности!"},
        pinkRing : {have:false, found:false, text:"a ring", name:"Розовое кольцо покоя", description:"Это кольцо будет контролировать твоё дыхание.Ты будешь быстрее восстанавливаться после прохождения квеста."},
        forgeMap : {have:false, found:false, text:"a map", name:"Карта к кузнице", description:"Наковальня будет очень полезна, если ваш меч сделан из метала?"},
        candiesConverter : {have:false, found:false, text:"a strange object", name:"Конвертор конфет.", description:"При активации в вашей коробке конфет этот удивительный объект быстро превращает все ваши конфеты в леденцы на палочке. Одна конфета дает один леденец! Поверь, это жёстко."},
        plateArmour : {have:false, found:false, text:"a strong armour", name:"Латная броня.", description:"Эта броня защищает тебя от противников. Будешь получать меньше урона."},
        cauldron : {have:false, found:false, text:"a big container", name:"Котёл.", description:"Этот котел позволяет варить самые разные зелья, используя сырые, обычные материалы, такие как конфеты или леденцы на палочке."},
        magicalHorn : {have:false, found:false, text:"a horn", name:"Волшебный рог.", description:"Этот волшебный рог принадлежал единорогу. С ним вы будете восстанавливать очки здоровья во время прохождения квеста. !"},
        hornOfPlenty : {have:false, found:false, text:"a horn", name:"Рог изобилия.", description:"Рог изобилия, украденный из Плутоса Каукингом, который думал, что это настоящий рог. Этот мифический объект увеличит втрое вашу продукцию леденцовой фермы"},
        oldAmulet : {have:false, found:false, text:"an amulet", name:"Старинный амулет.", description:"Этот древний амулет, найденный на трупе убитого воина, как известно, приносит процветание своему владельцу. Это увеличит втрое все ваши конфеты на вашем складе."}
    },
    
    leave : function(){
        hut.leave();
        wishingWell.leave();
        swamp.leave();
        forge.leave();
    },
    
    // Functions
    setHaveObject : function(name, value){
        // We set the new "have" value
        this.list[name].have = value;
        
        // We check the buttons related to objects, since they may have changed
        buttons.checkObjects();
        
        // We update the inventory
        inventory.updateOnPage();
    }
    
};
