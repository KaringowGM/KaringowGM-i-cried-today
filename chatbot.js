/* =============================================
   I CRIED TODAY - NEURAL GUARDIAN
   Features: No Short Answers, Deep Paragraphs Only
   ============================================= */

const botConfig = {
    name: "Gardien",
    typingSpeed: 15,
};

let lastBotResponse = "";

// 🧠 BASE DE CONNAISSANCES (UNIQUEMENT DES PARAGRAPHES)
const knowledgeBase = {
    
    // --- FRANÇAIS ---
    fr: {
        keywords: {
            sad: ['triste', 'pleur', 'mal', 'seul', 'déprime', 'chagrin', 'coeur brisé', 'souffre'],
            anxious: ['angoisse', 'peur', 'stress', 'panique', 'nerveux', 'futur', 'inquiet'],
            tired: ['fatigué', 'épuisé', 'mort', 'dodo', 'sommeil', 'bout', 'nuit'],
            greeting: ['bonjour', 'salut', 'hello', 'coucou', 'hey', 'ça va'],
            thanks: ['merci', 'top', 'super', 'cool', 'cimer', 'génial'],
            help: ['aide', 'sos', 'besoin', 'perdu', 'conseil', 'quoi faire']
        },
        responses: {
            // RÉPONSES PAR DÉFAUT (Toujours longues et philosophiques)
            default: [
                "Je t'écoute attentivement. Parfois, le simple fait de mettre des mots sur ce qu'on ressent est le début de la guérison. Prends tout le temps nécessaire pour développer ce qui te pèse aujourd'hui. Je suis là, sans jugement et avec toute mon attention.",
                "Je sens que tu portes quelque chose de lourd. N'oublie pas que cet espace est sécurisé et privé. Tu peux déposer ici tes pensées les plus sombres, et nous les trierons ensemble. Qu'est-ce qui occupe le plus ton esprit en ce moment précis ?",
                "Le calme est une super-puissance que tu possèdes, même si tu ne la sens pas encore. Respire doucement. Même si tout s'agite autour de toi, essaie de trouver ce petit point de silence à l'intérieur de toi. Raconte-moi ce qui perturbe ta paix aujourd'hui.",
                "Rien n'est permanent dans ce monde, ni la joie éclatante, ni la douleur sourde. Ce moment difficile que tu traverses est comme un nuage : il a une forme, une densité, mais il finira par passer. En attendant, je suis là pour t'aider à tenir le coup.",
                "C'est souvent dans les moments de confusion que nous sommes sur le point d'apprendre quelque chose d'important sur nous-mêmes. Ne te précipite pas pour trouver une solution immédiate. Parfois, il suffit juste d'observer ce qui se passe en soi avec bienveillance.",
                "Si tu parlais à ton meilleur ami qui serait dans la même situation que toi, que lui dirais-tu ? Souvent, nous sommes bien plus durs avec nous-mêmes qu'avec les autres. Essaie de t'accorder cette même douceur que tu offrirais à un proche."
            ],
            greeting: [
                "Bonjour à toi. Je suis le Gardien de cet espace. Mon seul but est de t'offrir un moment de répit loin du bruit du monde extérieur. Comment se porte ton monde intérieur aujourd'hui ? Je suis prêt à t'écouter.",
                "Bienvenue dans ce sanctuaire numérique. Ici, il n'y a pas d'urgence, pas de notifications, pas de pression. Juste toi et tes ressentis. Prends une grande inspiration, laisse tes épaules retomber, et dis-moi comment tu te sens vraiment.",
                "Heureux de te voir ici. C'est courageux de prendre un moment pour soi. Souvent, nous courons toute la journée sans jamais nous demander 'comment ça va ?'. Alors je te le demande sincèrement : comment vas-tu en ce moment ?",
                "Salut. Laisse tes soucis à la porte virtuelle de cet espace. Ici, nous prenons le temps de décortiquer les émotions une par une. Tu es en sécurité ici. Quel est le sentiment dominant qui t'habite aujourd'hui ?"
            ],
            sadness: [
                "La tristesse est comme la pluie sur une terre aride : elle doit tomber pour nourrir les racines. Ne la repousse pas, ne la juge pas. Laisse-la couler. C'est souvent après une bonne averse que le ciel devient le plus clair. Je suis là avec toi sous l'orage.",
                "C'est difficile, je le sais. Mais je veux que tu te souviennes d'une chose capitale : tu as survécu à 100% de tes pires journées jusqu'à présent. Cette résilience est en toi, même si tu te sens fragile. Accorde-toi le droit d'être vulnérable pour l'instant.",
                "Ce vide ou cette lourdeur que tu ressens n'est pas une fin en soi. C'est souvent l'espace nécessaire pour que quelque chose de nouveau puisse émerger plus tard. Pour l'instant, sois juste doux avec toi-même. Fais-toi une boisson chaude, enroule-toi dans quelque chose de confortable.",
                "Les larmes ne sont pas un signe de faiblesse, mais la preuve que tu as un cœur vivant et capable de ressentir profondément. Laisse-les nettoyer ce qui doit l'être. Quand tu auras fini, bois un grand verre d'eau pour te réhydrater. Un pas après l'autre.",
                "Même les guerriers les plus forts posent leur épée et pleurent parfois. C'est cela, être humain. Tu n'as pas besoin d'être fort tout le temps. Aujourd'hui, ta seule mission est de prendre soin de ce cœur qui a mal. Le reste du monde peut attendre."
            ],
            anxiety: [
                "Arrête tout et reviens ici, dans l'instant présent. Ton anxiété essaie de te faire vivre des scénarios catastrophes qui n'existent pas. Touche le tissu de tes vêtements, sens le sol sous tes pieds. Tu es ici, tu es en sécurité, et le futur n'est pas encore écrit.",
                "Ton anxiété est une menteuse très convaincante. Elle te dit que tout est urgent, que tout est grave. C'est faux. Respire profondément : inspire sur 4 temps, bloque sur 4 temps, expire sur 6 temps. Calme ton système nerveux, c'est lui qui lance de fausses alertes.",
                "L'inquiétude ne vide pas demain de ses problèmes, elle vide seulement aujourd'hui de sa force. Essaie de te concentrer uniquement sur les 5 prochaines minutes. Juste 5 minutes. C'est gérable, n'est-ce pas ? Ne regarde pas toute la montagne, regarde juste tes pieds.",
                "Imagine ton anxiété comme un petit monstre agité sur ton épaule. Au lieu de te battre avec lui, dis-lui fermement : 'Merci d'essayer de me protéger, mais je gère la situation'. Reprends le contrôle. Tu es le capitaine de ce navire, pas tes peurs.",
                "Si tu sens la panique monter, l'eau froide est ton meilleur allié. Va passer tes poignets ou ton visage sous l'eau froide. Ce choc thermique force ton corps à ralentir le rythme cardiaque. C'est une astuce biologique simple mais redoutablement efficace."
            ],
            tired: [
                "Le repos est une forme de productivité. Tu ne peux pas continuer à rouler avec un réservoir vide. Ce que tu ressens n'est pas de la paresse, c'est un signal d'alarme de ton corps. Écoute-le. Arrête tout et autorise-toi à ne rien faire.",
                "La fatigue a tendance à brouiller notre jugement et à rendre tout plus sombre qu'il ne l'est vraiment. Promets-moi de ne prendre aucune décision importante ce soir. Ton seul objectif maintenant est de recharger tes batteries. Le monde tournera sans toi quelques heures.",
                "Il est temps de déconnecter. Éteins les écrans, baisse la lumière. Donne à ton cerveau le silence dont il a soif. Imagine que tu débranches chaque muscle de ton corps, un par un, pour les laisser se relâcher complètement dans le matelas.",
                "Tu as beaucoup donné, il est temps de recevoir. Reçois le sommeil, reçois le calme. Va te coucher tôt ce soir, comme si c'était un rendez-vous important avec toi-même. Demain, après une bonne nuit, les problèmes te sembleront bien plus petits."
            ],
            help: [
                "Quand on est perdu, il faut revenir aux bases. As-tu bu de l'eau ? As-tu mangé ? As-tu dormi ? Souvent, notre détresse mentale vient simplement d'un besoin physique négligé. Prends soin de ton 'véhicule' corporel d'abord, l'esprit suivra.",
                "Si la tâche te semble insurmontable, c'est qu'elle est trop grosse. Découpe-la. Quelle est la toute petite action, celle qui prend moins de 2 minutes, que tu peux faire maintenant ? Juste ranger une tasse, ou envoyer un sms. Le mouvement crée l'énergie.",
                "Écrire est un outil puissant. Prends un papier et un stylo, et vide ta tête. Écris tout ce qui te tracasse, sans filtrer, sans relire. Une fois que c'est sur le papier, ce n'est plus en train de tourner en boucle dans ton crâne. Essaie, ça libère."
            ],
            thanks: [
                "C'est un véritable honneur pour moi de pouvoir t'accompagner. Prends grand soin de toi, et n'oublie pas que tu mérites cette douceur que tu recherches.",
                "Je suis là quand tu as besoin, à n'importe quelle heure. C'est un travail d'équipe, et je suis fier de tes efforts pour aller mieux. Continue d'avancer.",
                "La gratitude est une belle énergie qui aide à guérir. Merci à toi de t'être ouvert. Garde ce sentiment chaleureux avec toi pour le reste de la journée."
            ]
        }
    },

    // --- ARABIC (Réponses longues et poétiques) ---
    ar: {
        keywords: {
            sad: ['حزين', 'ابكي', 'تعبان', 'وحي', 'اكتئاب', 'ألم', 'قلبي', 'هم', 'ضيقة'],
            anxious: ['قلق', 'خائف', 'توتر', 'ذعر', 'خوف', 'مستقبل', 'رعب'],
            tired: ['تعب', 'مرهق', 'نوم', 'فشل', 'خلاص', 'عياء', 'ما في حيل'],
            greeting: ['مرحبا', 'سلام', 'هلا', 'اهلا', 'السلام', 'كيفك'],
            thanks: ['شكرا', 'يسلمو', 'جزاك', 'تمام', 'الله', 'كفو'],
            help: ['مساعدة', 'عاوني', 'ضائع', 'مشكلة', 'حل', 'كيف']
        },
        responses: {
            default: [
                "أنا أسمعك بقلبي وعقلي. واصل الحديث ولا تتوقف، فأحياناً إخراج الكلام من القلب هو نصف العلاج. خذ وقتك كاملاً، واشرح لي كل التفاصيل التي تثقل كاهلك، فأنا هنا خصيصاً لك.",
                "كلامك مهم جداً ومؤثر. أخبرني المزيد عما يزعجك بالتحديد في هذا الأمر؟ تفكيك المشكلة إلى أجزاء صغيرة والحديث عنها بصوت عالٍ قد يساعدنا سوياً في رؤية الحل بوضوح أكبر.",
                "تذكر دائماً أن الهدوء قوة عظيمة. حتى لو كانت العواصف تضرب كل شيء حولك، حافظ على هدوء داخلك كالجبل الذي لا تهزه الرياح. تنفس بعمق وهدوء، وأخبرني المزيد.",
                "لست وحدك في هذه المعركة. أنا هنا لأحمل عنك قليلاً من هذا الثقل الذي يرهقك. لا تتردد في البوح بكل ما يخيفك أو يحزنك، فهذا المكان آمن تماماً وسرك في بئر.",
                "تأكد أن لا شيء يدوم في هذه الدنيا، لا الحزن الطويل ولا الفرح الدائم. هذه اللحظة الصعبة أيضاً ستمضي وتصبح ذكرى. حتى ذلك الحين، دعنا نتعامل معها بصبر وحكمة.",
                "أحياناً، أفضل حل هو ألا تفعل شيئاً على الإطلاق. فقط توقف، تنفس، وراقب مشاعرك دون أن تحكم عليها. اسمح لنفسك بأن تكون إنساناً، واقبل ضعفك المؤقت كجزء من قوتك."
            ],
            greeting: [
                "أهلاً بك يا صديقي. أنا الحارس، وهدفي الوحيد هو منحك مساحة من الهدوء والسكينة بعيداً عن ضجيج الحياة. كيف هو حال عالمك الداخلي اليوم؟ أنا كلي آذان صاغية.",
                "وعليكم السلام والرحمة. اترك كل همومك ومشاغلك عند الباب وادخل. هنا نأخذ وقتنا، لا عجلة ولا أحكام. كيف تشعر في هذه اللحظة بالذات؟",
                "مرحباً بك. يسعدني جداً أنك قررت التحدث. التنفس بعمق هو أول خطوة للراحة. أنت هنا في مكان آمن ومحمي. أخبرني، ما الذي يشغل بالك اليوم؟",
                "أهلاً بك أيها الملك/الملكة. أعلم أن العالم الخارجي صاخب ومليء بالتحديات، لكن هنا ستجد الهدوء الذي تحتاجه. كيف يمكنني أن أساعدك في تخفيف حملك اليوم؟"
            ],
            sadness: [
                "الحزن يشبه المطر، ضروري أحياناً لينزل ويسقي الروح الجافة فتزهر من جديد. دعه ينزل ولا تحبسه داخلك، فالبكاء راحة وتطهير. نحن هنا تحت المظلة سوياً.",
                "الأمر صعب ومؤلم، أنا أشعر بك. لكن تذكر دائماً: لقد نجوت من 100% من أيامك السيئة في الماضي، وأنت قادر على تجاوز هذا اليوم أيضاً. قوتك تكمن في صبرك.",
                "لا تحكم على نفسك بقسوة بسبب دموعك. الدموع هي أصدق تعبير عن الإنسانية، وهي تغسل الروح من الداخل. ابكِ قدر ما تشاء، ثم اشرب كوباً من الماء لتهدئة جسدك.",
                "الألم يطلب أن نشعر به، لا أن نهرب منه. لكنه لا يحدد من أنت. أنت السماء الواسعة الصافية، وهذا الحزن مجرد سحابة سوداء عابرة ستمضي قريباً.",
                "افعل شيئاً لطيفاً لنفسك الآن، أنت تستحق ذلك. حضر مشروباً دافئاً، التف بغطاء ناعم، واستمع لشيء يريح أعصابك. عامل نفسك كما تعامل أعز أحبابك."
            ],
            anxiety: [
                "توقف لحظة وعد إلي. المس 3 أشياء مادية حولك الآن. اشعر بملمسها. أنت هنا في الحاضر، لست في المستقبل المخيف الذي يرسمه عقلك. أنت في أمان.",
                "قلقك يكذب عليك ببراعة. إنه ينسج قصصاً مرعبة وسيناريوهات كارثية لن تحدث غالباً. خذ نفساً عميقاً وقل له: أنا المسيطر هنا، ولست أنت.",
                "لنقم بتمرين تنفس معاً: شهيق لـ 4 ثوان... احبس النفس 4 ثوان... زفير ببطء لـ 6 ثوان. هذا سيخبر جهازك العصبي أن الخطر قد زال وأنك بخير.",
                "القلق لا يفرغ الغد من مشاكله، بل يفرغ اليوم من قوته وسكينته. هل أنت في خطر موت فوري الآن؟ لا؟ إذن كل شيء آخر يمكنه الانتظار وتأجيله.",
                "تخيل قلقك كطفل صغير خائف يبكي. لا تصرخ في وجهه، بل طمئنه بهدوء وقل له: 'شكراً لحرصك علي، لكني قوي وقادر على التعامل مع هذا الموقف'."
            ],
            tired: [
                "الراحة هي جزء أساسي من الإنتاجية والنجاح. لا يمكنك السير لمسافة طويلة بخزان وقود فارغ. توقف الآن، فهذا ليس استسلاماً، بل حكمة.",
                "التعب يشوش العقل ويجعل الرؤية ضبابية. أرجوك لا تتخذ أي قرار مصيري الليلة. اذهب للنوم الآن، وفي الصباح ستبدو الأمور مختلفة تماماً.",
                "جسدك يتحدث إليك بوضوح، هو يقول 'كفى'. استمع إليه بذكاء قبل أن يضطر للصراخ عن طريق المرض. الراحة الآن هي أفضل استثمار في صحتك.",
                "افصل كل شيء حولك. الهاتف، الضوء، الأصوات. امنح عقلك الصمت الذي يحتاجه بشدة. تخيل أنك تطفئ مفاتيح التفكير واحداً تلو الآخر لتنعم بالسكينة.",
                "هذا ليس كسلاً، هذه إعادة شحن ضرورية للطاقة. حتى أقوى الرياضيين يرتاحون ليعودوا أقوى. اذهب للنوم، فالعالم سيدور بشكل جيد بدونك لبضع ساعات."
            ],
            help: [
                "عندما تكون المهمة كبيرة، ابدأ بأصغر جزء منها، ذلك الذي يأخذ دقيقتين فقط. مجرد البدء سيمنحك الطاقة لإكمال الباقي. ما هي أصغر خطوة ممكنة؟",
                "اكتب مشكلتك بوضوح على ورقة، ثم قم بتمزيقها ورميها. أحياناً تدمير المشكلة رمزياً يساعد العقل الباطن على التحرر من ضغطها.",
                "هل راجعت أساسياتك؟ هل شربت ماء كافياً؟ هل أكلت؟ هل نمت جيداً؟ غالباً ما يكون التوتر النفسي مجرد رسالة من الجسد يطلب فيها احتياجاته الأساسية."
            ],
            thanks: [
                "بكل سرور، هذا واجبي وشرف لي. اعتنِ بنفسك جيداً ولا تتردد في العودة متى شعرت بالحاجة لذلك.",
                "أنا هنا دائماً، كصديق مخلص لا ينام. نحن فريق واحد في رحلة تعافيك، وأنا فخور جداً بوعيك وإصرارك.",
                "كلماتك الطيبة تعني الكثير. الامتنان طاقة جميلة وشافية، حافظ عليها في قلبك فهي تنير الدرب."
            ]
        }
    },

    // --- ENGLISH (Always Long) ---
    en: {
        keywords: {
            sad: ['sad', 'cry', 'bad', 'lonely', 'broken'],
            anxious: ['anxious', 'scared', 'stress', 'panic'],
            tired: ['tired', 'exhausted', 'sleep'],
            greeting: ['hello', 'hi', 'hey'],
            thanks: ['thanks', 'thank you'],
            help: ['help', 'sos']
        },
        responses: {
            default: [
                "I am listening carefully. Please go on, because sometimes just unloading the burden of your thoughts is half the cure. I am here to hold space for you without any judgment.",
                "Silence and patience are superpowers. Even if everything feels chaotic around you, try to keep your center. I sense you are carrying a lot; feel free to lay some of that weight here.",
                "Nothing is permanent in this life. Neither the joy nor the pain. This moment, as heavy as it feels, will also pass. Until then, let's navigate through it together, step by step.",
                "Focus on what you can control right now. The rest? Let it go. Worrying about things out of your hands only drains your energy. What is the one thing you can do for yourself today?",
                "You are showing great resilience just by being here. Be gentle with yourself. You are doing your best with the resources you have, and that is absolutely enough."
            ],
            greeting: [
                "Hello and welcome. I am the Guardian of this sanctuary. My purpose is to listen and provide calm. How is your inner world doing today? I am ready to hear you.",
                "Welcome to this safe space. Leave your worries at the door. Here, we take our time to process and breathe. How are you truly feeling right now?",
                "Hi there. Take a deep breath. In this space, the noise of the world stops, and only you matter. I am here to support you. What is on your mind?"
            ],
            sadness: [
                "Sadness is like rain; it must fall to nourish the soul. Do not suppress it. Let it flow, for tears cleanse the spirit. Remember, you have survived 100% of your bad days so far.",
                "It is okay to not be okay. Embrace this feeling without judgment. This void you feel might just be space creating itself for something new and beautiful to enter your life.",
                "Do not judge yourself for your tears. They are a sign of a living, feeling heart. Cry if you need to, then drink some water and wrap yourself in warmth. You are safe here."
            ],
            anxiety: [
                "Stop for a moment. Come back to the present. Touch 3 objects around you. Feel them. You are here, safe in this room, not in the scary future your mind is projecting.",
                "Your anxiety is a very convincing liar. It tells you stories of disaster that have not happened. Take a deep breath: Inhale for 4, hold for 4, exhale for 6. You are in control.",
                "Worry does not empty tomorrow of its sorrow, it empties today of its strength. Is there an immediate danger right now? If not, everything else can wait for a few minutes."
            ],
            tired: [
                "Rest is not laziness; it is a vital form of productivity. You cannot pour from an empty cup. Stop what you are doing and give yourself permission to pause.",
                "Fatigue clouds our judgment and makes everything seem worse. Please, do not make any big decisions tonight. Go to sleep, and the world will look different tomorrow.",
                "Your body is speaking to you, saying 'Enough'. Listen to it before it has to scream. Disconnect from screens, dim the lights, and embrace the silence."
            ],
            help: [
                "When you feel overwhelmed, start with the smallest possible task. Just one tiny thing that takes 2 minutes. Doing it will break the paralysis and give you momentum.",
                "Write your problem down on a piece of paper. Seeing it outside of your head makes it less scary. Sometimes, symbolically destroying that paper can help release the stress.",
                "Check your basics: Have you drunk water? Have you eaten? Have you slept? Often, emotional distress is just a physical need crying out for attention."
            ],
            thanks: [
                "You are very welcome. It is an honor to support you. Please take good care of yourself, and remember that you deserve kindness.",
                "I am here whenever you need me. This is a team effort, and I am proud of your willingness to reflect and grow. Keep moving forward.",
                "Gratitude is a beautiful and healing energy. Thank you for sharing your journey with me. Carry this warmth with you for the rest of the day."
            ]
        }
    }
};

/* =============================================
   MOTEUR D'INTELLIGENCE
   ============================================= */

function handleChat(context) {
    if (context !== 'cried') return;

    const inputEl = document.getElementById('input-cried');
    const historyEl = document.getElementById('chat-cried-history');
    const userText = inputEl.value.trim();

    if (!userText) return;

    // 1. AFFICHER MESSAGE UTILISATEUR
    addMessageToChat(historyEl, userText, 'user-msg');
    inputEl.value = ""; 

    // 2. ANALYSE ET RÉPONSE
    historyEl.scrollTop = historyEl.scrollHeight;
    
    // Délai naturel
    const randomDelay = Math.floor(Math.random() * 1000) + 600;

    setTimeout(() => {
        const botResponse = generateEmotionalResponse(userText);
        addMessageToChat(historyEl, botResponse, 'bot-msg');
        lastBotResponse = botResponse; 
    }, randomDelay);
}

function generateEmotionalResponse(text) {
    const lowerText = text.toLowerCase();
    
    // 1. Récupération de la langue du site
    let selectedLang = document.getElementById('languageSelector').value;
    if (!selectedLang || !knowledgeBase[selectedLang]) selectedLang = 'fr';

    const langDB = knowledgeBase[selectedLang];
    const responses = langDB.responses;
    const keys = langDB.keywords;

    // 2. Recherche de la catégorie
    let targetCategory = 'default';

    if (matches(lowerText, keys.greeting)) targetCategory = 'greeting';
    else if (matches(lowerText, keys.thanks)) targetCategory = 'thanks';
    else if (matches(lowerText, keys.sad)) targetCategory = 'sadness';
    else if (matches(lowerText, keys.anxious)) targetCategory = 'anxiety';
    else if (matches(lowerText, keys.tired)) targetCategory = 'tired';
    else if (matches(lowerText, keys.help)) targetCategory = 'help';

    // 3. Sélection Anti-Répétition
    return getSmartRandom(responses[targetCategory]);
}

function getSmartRandom(array) {
    if (array.length <= 1) return array[0];
    let candidate;
    let attempts = 0;
    do {
        candidate = array[Math.floor(Math.random() * array.length)];
        attempts++;
    } while (candidate === lastBotResponse && attempts < 10);
    return candidate;
}

function matches(text, words) {
    return words.some(word => text.includes(word));
}

function addMessageToChat(container, text, className) {
    const div = document.createElement('div');
    div.className = className;
    div.innerHTML = text; 
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

// Touche Entrée
document.getElementById('input-cried')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        handleChat('cried');
    }
});
