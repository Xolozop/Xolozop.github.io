function main() {
    var poetry = "Пусть этот стих не будет грустный,\nЯ посвящу его тебе,\nТому, как каждый день морозный,\nГреюсь я в твоём тепле.\n\nКак в шею больше утыкаясь,\nМурлычу тихо и ласкаюсь.\nГлаза закрыв, в сон погружаюсь,\nПока невольно улыбаюсь.\n\nЯ чувства горького настолько\nИ столь же тёплого ни раз\nНе испытала, пока только\nДуша моя не знала Вас.\n\nТы — центр мироздания,\nТы в тёмном царстве яркий луч.\nМоё спасенье? Наказание —\nЗакрыта ты за сотней туч.\n\nЯ без тебя не знала боли,\n И не раз сдыхала б от неволи\nИли от жуткого бездушия,\nКоторым себя наделила с малодушия.\nТеперь я знаю — ярок мир,\nВ нём есть любовь и есть эфир.\nВ нём смысл жизни — это ты,\nНе сравнятся с тобой никакие цветы.\n\nЗелёные глаза и лёгкая улыбка,\nМне душу греют вновь.\nИ милые черты, острота интеллекта —\nВсё ты, моя любовь.\n\nКак я хочу быть лучше\nИ тем же отплатить.\nПозволь мне быть лишь ближе,\nЗаботу проявить.\n\nЯ нежно притяну\nИ также поцелую.\nВ любовь погружу\nИ ей же согрею.\n\nМои душа и тело,\nМой голос и слова;\nЯ заявляю смело,\nЧто я только твоя.\n";
    
    //48-126 //-750 1024-1273
    
    //var poetry = "УєфJї ўѐёR Ѳёшщ юи 9юхуѕ CѱђёцююA,\nк ѐьєBҀјѓ йфс Jрту,\nеNѭђ, ъды н8схљь DѦьќ ряуFтюљь,\nѴѱфўхѝ ђ : эуьѤL ѳфяпц.\n\nН8х у іш^ Ѣэыѐљи Kэќшу_Ѳћ,\nЬчёоSђє ѐыUѯ ч ыдђн8љђњ.\nЦKѡцр лснHіу, р єNѮ ююзёц>лџяџ,\nҀѯщр сцеFцѝыё SѬњсдџфT.\n\nк јёхQѳср зяуTхясё MѡѐђтьяBщ\nЩ яѕNѬћ цй ѓєGцясё Mѩ ярл\nЮи ьѐљѕ@Ѭп, ятыг JщьњэN\nхђјд эсW шц хѐ@Ѭп Тдђ.\n\nХS ᯎ їуѐRѱ ышфяк<люцѢ,\n2Ѽ с ђѕэрFч їоѓQѳсх ѓён@ф ьёњ.\nѽѯѠ ёусф=шѝуR Ѿѡщрлср@р ᯔ\nХуJѱњђд ѓю ?л ђьѕMѦш ђчј.\n\nв рш шAҀ ьх люгCл тьюH,\nщ ьх фск IпќѓуKѡ р юц юи:щьц\nЫKѩ эђ кєхBщфь фEѨуѓьщђ,\nѳщѓьѓ[ѭ ѐхеѠ р8пцщыKѡ ѐ ьдьс<юљцѢ.\n2Ѧюхфѝ ђ ?шсќ ᯖ _ѱэъ рщу,\nѫ шѢъ шQѳћ ыђтс:ї щ уєRѽ ємё.\nЕ Eќэ яя[Ѳъ цмшр@ ᯎ ўѐё RѼ,\nЬх хёг:шѠѐє_ Ѳ ёюеям EуыоэHѦ ѕтйѓю.\nЕ Eќэ яя[Ѳъ цмшр@ ᯎ ўѐё RѼ,\nЬх хёг:шѠѐє_ Ѳ ёюеям EуыоэHѦ ѕтйѓю.\n\nѰрьџѐ[Ѧ тыдшг @ цѢсэ@Ҁ ыятн8,\nЧюу чSѹђ уфцёJ нюьх\.\nщ ышпќи Oрёѐў, NѲёѐтѓг @шѓуюKѦщђд ᯔ\nЕIќ ѓљ, яNҀ ъўеяеT.\n\nХсш Ѣ Uѯіѓ еќхT цєѕћE\nщ ёхр чи FэѐщуRѩёќ.\nУяк:щьњ яMѦ рћцѝ о@ѓѝ юHѧф,\nЧдтсJю ѐюё_ѣчђѐ.\n\nр р=сюь ђPѩёџсє\nЛ Jлыфш Oѯѕхпєё.\nѫ цџпёBѽ ююзёц>ю\nЩ уь FѦ ѐюзёиV.\n\nЧяц чSѹп ш ццоF,\nЧяч цNѬэё м ђоFнсI\nт GѡўтпѠё Iчцщё,\n7ѳэ џ яоTхя ѐхNҀ.";
    let key = "hugYourwa1st"
    let arr = poetry.split('\n'), arr2 = [];
    var x = 0;
    
    arr.forEach((str) => {
        let newstr = "";
        for (var y = 0; y < str.length; y++) {
            if (str.charCodeAt(y) > 48) {
                var number = str.charCodeAt(y) + key.charCodeAt(x % key.length) % 100;
                number = (number > 1153) ? 48 + number - 1153 : number;

                //var number = str.charCodeAt(y) - 48 + 1153 - key.charCodeAt(x % key.length) % 100;
                //number = (str.charCodeAt(y) > 1040) ? str.charCodeAt(y) - key.charCodeAt(x % key.length) % 100 : number;

                console.log(key.charCodeAt(x % key.length), str.charCodeAt(y), number);
                console.log(key.charAt(x % key.length), str.charAt(y), String.fromCharCode(number));

                newstr += String.fromCharCode(number);
            
                x++;
            } else {
                newstr += str.charAt(y);
            } // 1024-1279
        }
        arr2.push(newstr);
    });
    
    var half = Math.round(arr.length/2);
    
    for (var c = 0; c < 2; c++) {
        let div = document.getElementById("main-div");
        let p = document.createElement('p');
        p.className = "poetry";
        var paragraph = "";
        
        for (var i = half*c + c; i <= half*(c + 1); i += 4) {
            for (var z = 0; z < 4; z++) {
                if (i + z >= arr.length) break;
                paragraph += arr2[i + z] + "<br>";  
                console.log(i+z + " " + arr2[i + z]);
            }
        }
        
        p.innerHTML = paragraph;
        div.append(p);
    }
}