var shop = {

    // Variables
    buy10LollipopsButtonShown : false, // True if the buy 10 lollipops button should be shown
    shown : false, // True if the shop is currently shown
    ticklingStep : 0, // Tickling step (increase when we click on the merchant's hat
    clickingOnLollipopStep : 0, // Clicking on lollipop step (increase when we clicked on the top of the lollipop sold at the shop)
    oneLollipopPrice : 0, // Price of one lollipop, calculated depending on the clicking on lollipop step
    tenLollipopsPrice : 0, // Price of ten lollipops, calculated the same way as above
    currentSwordButtonId : "none", // Contains the id of the current sword buying button
    currentSwordPrice : 0, // Contains the price of the current sword being sold by the merchant
    
    // Functions
    onload : function(){
        lollipops.delivery(); // The merchant must have some lollipops in stock at the beginning, so we make a delivery
        this.setClickingOnLollipopStep(0); // This also set the lollipops price !
    },
    
    check : function(){
        if(candies.nbrOwned >= this.oneLollipopPrice){
            this.setShown(true);
        }
        if(candies.nbrOwned >= 150){
            // If we don't have any sword and there's no sword to sell yet, we show the wooden sword
            if(sword.name == "none" && this.currentSwordButtonId == "none"){
                this.showProduct("wooden_sword");
            }
        }
    },
    
    setBuy10LollipopsButtonShown : function(value){
        this.buy10LollipopsButtonShown = value;
    },
    
    clickedOnHat : function(){
        switch(this.ticklingStep){
            case 0:
                this.setMerchantSpeech("Эй ! Ты тронул мою шляпу !");
            break;
            case 1:
                this.setMerchantSpeech("Остановись, прекрати ! Мне щекотно !");
            break;
            case 2:
                this.setMerchantSpeech("Ха-ха-ха ! Я очень боюсь щекоток !");
            break;
            case 3:
                this.setMerchantSpeech("Слушай : Я дам тебе 100 конфет ! Но останови это безумие !");
                candies.setNbrOwned(candies.nbrOwned + 100);
            break;
        }
        
        this.setTicklingStep(this.ticklingStep + 1);
    },
    
    setTicklingStep : function(value){
        this.ticklingStep = value;
    },
    
    setClickingOnLollipopStep : function(value){
        this.clickingOnLollipopStep = value;
        
        // Set the buttons value if the step is 0 or the price is reducing or is reduced
        if(this.clickingOnLollipopStep <= 4){
            this.oneLollipopPrice = 60;
            this.tenLollipopsPrice = 500;
            htmlInteraction.setInnerHtml("buy_1_lollipop", "Купить леденец (60 конфет)");
            htmlInteraction.setInnerHtml("buy_10_lollipops", "Купить 10 леденцов (500 конфет)");
        }
        else if(this.clickingOnLollipopStep >= 5 && this.clickingOnLollipopStep < 15){
            this.oneLollipopPrice = 60 - (this.clickingOnLollipopStep - 4);
            this.tenLollipopsPrice = 500 - (this.clickingOnLollipopStep - 4) * 5;
            htmlInteraction.setInnerHtml("buy_1_lollipop", "Купить леденец (" + this.oneLollipopPrice + " candies)");
            htmlInteraction.setInnerHtml("buy_10_lollipops", "Купить 10 леденцов (" + this.tenLollipopsPrice + " candies)");
        }
        else{
            this.oneLollipopPrice = 60 - (14 - 4);
            this.tenLollipopsPrice = 500 - (14 - 4) * 5;
            htmlInteraction.setInnerHtml("buy_1_lollipop", "Купить леденец (" + this.oneLollipopPrice + " candies)");
            htmlInteraction.setInnerHtml("buy_10_lollipops", "Купить 10 леденцов (" + this.tenLollipopsPrice + " candies)");
        }
    },
    
    clickedOnLollipop : function(){
        this.setClickingOnLollipopStep(this.clickingOnLollipopStep + 1);
        
        // Possibly change the merchant speech
        switch(this.clickingOnLollipopStep){
            case 1:
                this.setMerchantSpeech("Эй ! Не трогай продукты !");
            break;
            case 2:
                this.setMerchantSpeech("Серьёзно, не трогай этот леденец.");
            break;
            case 3:
                this.setMerchantSpeech("Да не трогай ты его ! Другие покупатели будут его лизать после тебя !");
            break;
            case 4:
                this.setMerchantSpeech("Остановись сейчас-же или я тебе устрою");
            break;
            case 15:
                this.setMerchantSpeech("Ну не могу я сделать цену меньше, остановись, пожалуйста");
            break;
        }
        
        if(this.clickingOnLollipopStep >= 5 && this.clickingOnLollipopStep < 15){
            this.setMerchantSpeech("Вот сукин сын, ладно, я понижу цену !");
        }
    },
    
    showProduct : function(id){
        switch(id){
            // If it's a special product
            case "wooden_sword":
                htmlInteraction.setInnerHtml("sword_with_button", sword.asciiWoodenSwordWithButton);
                this.currentSwordButtonId = "buy_wooden_sword";
                this.currentSwordPrice = 150;
            break;
            case "copper_sword":
                htmlInteraction.setInnerHtml("sword_with_button", sword.asciiCopperSwordWithButton);
                this.currentSwordButtonId = "buy_copper_sword";
                this.currentSwordPrice = 300;
            break;
            case "iron_sword":
                htmlInteraction.setInnerHtml("sword_with_button", sword.asciiIronSwordWithButton);
                this.currentSwordButtonId = "buy_iron_sword";
                this.currentSwordPrice = 500;
            break;
            case "silver_sword":
                htmlInteraction.setInnerHtml("sword_with_button", sword.asciiSilverSwordWithButton);
                this.currentSwordButtonId = "buy_silver_sword";
                this.currentSwordPrice = 1000;
            break;
            case "diamond_sword":
                htmlInteraction.setInnerHtml("sword_with_button", sword.asciiDiamondSwordWithButton);
                this.currentSwordButtonId = "buy_diamond_sword";
                this.currentSwordPrice = 2000;
            break;
            // Else, we just show the html element corresponding to the received id
            default:
                htmlInteraction.setElementVisibility(id, true);
                htmlInteraction.setElementDisplay(id, "block");
            break;
        }
    },
    
    show : function(){
        // We show the shop
        if(htmlInteraction.isElementVisible("shop") == false){ // If the shop isn't already visible
            htmlInteraction.setElementVisibility("shop", true);
            this.setMerchantSpeech("Приветуль, я конфетный продавец. Я сделаю всё за конфеты. Мои леденцы невероятно вкусные !");
        }
        
        // And the lollipop we can buy :)
        this.showProduct("lollipop");
    },
    
    setShown : function(value){
        // If the new value is true but it was false before, we show the shop
        if(value == true && this.shown == false)
        {
			this.show();
		}
        
        // We change the value
        this.shown = value;
    },
    
    hideProduct : function(id){
        // If it's a special product
        if(id == "sword"){
            this.currentSwordButtonId = "none";
            htmlInteraction.setInnerHtml("sword_with_button", "");
        }
        // Else
        else{
            htmlInteraction.setElementVisibility(id, false);
            htmlInteraction.setElementDisplay(id, "none");
        }
    },
    
    setMerchantSpeech : function(text){
        htmlInteraction.setInnerHtml("merchant_speech", speech.makeSpeechFromText(text, 20, " "));
    }
    
};
