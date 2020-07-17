var swamp = {

    // Variables
    shown : false,
    step : 0,
    
    // Functions
    updateOnPageFinalFrog : function(){
        var text = "";
        var answer_form = "\n\n<input id=\"answer\" type=\"text\" onchange=\"swamp.answer()\" /> <span id=\"swamp_comment\"></span>";
        switch(this.step){
            case 4:
                text = speech.makeSpeechFromText("Здарова, я мистер Лягушка. Я могу тебе дать конфеты, и много других полезных вещей. Я знаю, что ты любишь сладости. Но мне одиноко на болоте. И потому я сыграю с тобой в игру. Если ты ответишь на мои вопросы верно, то вкуснейшие сладости будут твоими!", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(5);\">Продолжить</button>";
            break;
            case 5:
                text = speech.makeSpeechFromText("Первый вопрос : ТЫ действительно любишь конфеты?", 29, "");
                text += answer_form;
            break;
            case 6:
                text = speech.makeSpeechFromText("Идеально. Держи 10 конфеток. Гораздо больше конфет ждёт тебя!.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(7);\">Второй вопрос!</button>";
            break;
            case 7:
                text = speech.makeSpeechFromText("Second question : if A равно B и B равно C, и D равно A, и E равно D, чему равняется A?", 29, "");
                text += answer_form;
            break;
            case 8:
                text = speech.makeSpeechFromText("Великолепно. Ты понимаешь базовую логику. Забирай 100 конфет.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(9);\">Следующий!</button>";
            break;
            case 9:
                text = speech.makeSpeechFromText("Третий вопрос. Представь себе 10 дней. Если я дам тебе 1 конфету в первый день, и каждый следующий буду давать в 2 раза больше нежели в предыдущий, сколько конфет я дам тебе на 10-ый, последний, день", 29, "");
                text += answer_form;
            break;
            case 10:
                text = speech.makeSpeechFromText("Точно. Давай ускорим процесс : вот тебе 512 конфет прямо сейчас! Играть с тобой так интересно! Следующий вопрос будет на 1000 конфет, готов?", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(11);\">Конфетыыыыыыы!</button>";
            break;
            case 11:
                text = speech.makeSpeechFromText("Четвёртый вопрос : Если бы ты мог быть кем угодно, то кем бы ты стал?", 29, "");
                text += answer_form;
            break;
            case 12:
                text = speech.makeSpeechFromText("Правильно! Кто же не хочет быть лягушкой. Держи свои 1000 конфет.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(13);\">Еще одна загадка?</button>";
            break;
            case 13:
                text = speech.makeSpeechFromText("Вот история : Однажды, лиса, лев и волк оказались в краторе луны. Лиса укусила льва, лев укусил волка, а волк укусил лису. Был снегопад и Игорь увидел это по телеку . Кому понравилась эта история ?", 29, "");
                text += answer_form;
            break;
            case 14:
                text = speech.makeSpeechFromText("Именно, ты наслажем! Во всяком случае я надеюсь ;). Вот шоколадка для тебя. Она очень вкусная!", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(15);\">Спасибо, мистер Лягушка!</button>";
            break;
            case 15:
                text = speech.makeSpeechFromText("Теперь напиши ответ и я дам тебе специальный подарок. Какая вещь принадлежит только одному человеку во вселенной ?", 29, "");
                text += answer_form;
            break;
            case 16:
                text = speech.makeSpeechFromText("Невероятно ! Теперь держи 5 крутых зелий. Они будут очень полезны, пока проходишь квест.", 29, "");
                text += "\n\n<button id=\"answer\" onClick=\"swamp.setStep(17);\">Yay !!</button>";
            break;
            default:
                text = speech.makeSpeechFromText("У меня больше нету сладостей. Но было очень классно поиграть с тобой. Спасибо большое.", 29, "");
            break;
        }
        
        text += "\n\n<button onClick=\"swamp.leave();\">Уйти с Мутного Болота</button>";
        
        htmlInteraction.setInnerHtml("map", "\
           .--._.--.\n\
   Мистер ( O     O ) Лягушка\n\
          /   . .   \\\n\
         .`._______.'.\n\
        /(           )\\\n\
      _/  \\  \\   /  /  \\_\n\
   .~   `  \\  \\ /  /  '   ~.\n\
  {    -.   \\  V  /   .-    }\n\
_ _`.    \\  |  |  |  /    .'_ _\n\
>_       _} |  |  | {_       _<\n\
 /. - ~ ,_-'  .^.  `-_, ~ - .\\\n\
          '-'|/   \\|`-`\n\n\
" + text);
    },
    
    updateOnPage : function(){
        if(this.shown){
            
        switch(this.step){
            case 0:
                htmlInteraction.setInnerHtml("map", "\
While you walk through the swamp,\n\
following your map...\
");
                this.step = 1;
                window.setTimeout(this.updateOnPage.bind(this), 3500);
            break;
            case 1:
                htmlInteraction.setInnerHtml("map", "\
На горизонте вы видите что какая-то\n\
              00        лягушка\n\
             (--)         подходит к вам...\n\
            ( || )\n\
            ^^~~^^\
");
                this.step = 2;
                window.setTimeout(this.updateOnPage.bind(this), 3500);
            break;
            case 2:
                htmlInteraction.setInnerHtml("map", "\
Она идёт    _    _\n\
медленно   (o)--(o)\n\
   но     /.______.\\\n\
уверенно, \________/\n\
         ./        \\.\n\
        ( .        , )\n\
         \\ \\_\\\\//_/ /\n\
          ~~  ~~  ~~\
");
                this.step = 3;
                window.setTimeout(this.updateOnPage.bind(this), 3500);
            break;
            case 3:
                htmlInteraction.setInnerHtml("map", "\
           .-.   .-.\n\
          ( o )_( o )\n\
      __ / '-'   '-' \\ __ и она\n\
     /  /      \"      \\  \\    зелёная.\n\
    |   \\    _____,   /   |\n\
     \\  \\`-._______.-'/  /\n\
 _.-`   /\\)         (/\\   `-._\n\
(_     / /  /.___.\\  \\ \\     _)\n\
 (_.(_/ /  (_     _)  \\ \\_)._)\n\
       (_(_)_)   (_(_)_)\
");
                this.step = 4;
                window.setTimeout(this.updateOnPage.bind(this), 3500);
            break;
            default:
                this.updateOnPageFinalFrog();
            break;
        }
        
        }
    },
    
    enter : function(){
        objects.leave();
        
        this.shown = true;
        
        this.updateOnPage();
    },
    
    leave : function(){
        this.shown = false;
        
        htmlInteraction.setInnerHtml("map", "");
        //buttons.enableHomeButtons();
    },
    
    resetComment : function(){
        htmlInteraction.setInnerHtml("swamp_comment", "");
    },
    
    setComment : function(value){
        htmlInteraction.setInnerHtml("swamp_comment", value);
        window.setTimeout(this.resetComment.bind(this), 1000); // We set the timeout to reset it in one second
    },
    
    setStep : function(value){
        // We change the value
        this.step = value;
        
        // If the swamp is shown
        if(this.shown){
            // We update on page
            this.updateOnPage();
            // We possibly focus
            if(this.step >= 4 && this.step <= 16){
                htmlInteraction.focusElement("answer");
            }
        }
    },
    
    answer : function(){
        var ans = htmlInteraction.getElement("answer").value.toLowerCase().replace(/[^\w]|_/g, "");
        htmlInteraction.getElement("answer").focus(); // Re focus after answering
        
        switch(this.step){
            case 5:
                if(ans == "да"){
                    candies.setNbrOwned(candies.nbrOwned + 10);
                    this.setStep(6);
                }
                else this.setComment("Неверно.");
            break;
            case 7:
                if(ans == "c" || ans == "b" || ans == "candb" || ans == "bandc"){
                    candies.setNbrOwned(candies.nbrOwned + 100);
                    this.setStep(8);
                }
                else this.setComment("Враньё.");
            break;
            case 9:
                if(ans == "512"){
                    candies.setNbrOwned(candies.nbrOwned + 512);
                    this.setStep(10);
                }
                else this.setComment("Ошибочка.");
            break;
            case 11:
                if(ans == "лягушка" || ans == "ты"){
                    candies.setNbrOwned(candies.nbrOwned + 1000);
                    this.setStep(12);
                }
                else this.setComment("Не-а.");
            break;
            case 13:
                if(ans == "мне"){
                    chocolateBars.setNbrOwned(chocolateBars.nbrOwned + 1);
                    this.setStep(14);
                }
                else this.setComment("Ты серьёзно?");
            break;
            case 15:
                if(ans == "ответ"){
                    potions.getPotions(potions.list.berserk, 5);
                    this.setStep(16);
                }
                else this.setComment("Не правда.");
            break;
        }
    }

}