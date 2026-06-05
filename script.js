/* =============================================
   I CRIED TODAY - CORE ENGINE
   Features: Auto-Detect, Random Wisdom Generator, Deep Healing
   ============================================= */

// 1. TEXTES D'INTERFACE (FIXES)
const uiTranslations = {
    fr: {
        nav_help: "🆘 Besoin d'aide",
        nav_chat: "🧠 Gardien",
        crown: "👑 Crown of Insight",
        title: "I Cried Today",
        badge: "🔒 Local & Privé",
        subtitle: "Libère ton esprit. Reçois la sagesse.",
        tag_sad: "😢 Triste",
        tag_anxious: "😰 Anxieux",
        tag_lonely: "🌑 Seul",
        tag_tired: "😴 Fatigué",
        tag_destroyed: "💔 Détruit",
        tag_betrayed: "🔪 Trahi",
        tag_used: "🧸 Utilisé",
        placeholder_feeling: "Je me sens...",
        btn_quick: "⚡ Vite",
        btn_deep: "🛡️ Protocole",
        btn_healing: "🌱 Soin",
        btn_breathe: "🌬️ Respirer",
        chat_title: "Gardien Émotionnel",
        chat_sub: "Ici pour t'écouter",
        chat_placeholder: "Écris ici...",
        chat_welcome: "Bonjour. Je suis là pour t'écouter. Comment te sens-tu aujourd'hui ?"
    },
    en: {
        nav_help: "🆘 Need Help",
        nav_chat: "🧠 Guardian",
        crown: "👑 Crown of Insight",
        title: "I Cried Today",
        badge: "🔒 Local & Private",
        subtitle: "Unburden your mind. Receive wisdom.",
        tag_sad: "😢 Sad",
        tag_anxious: "😰 Anxious",
        tag_lonely: "🌑 Lonely",
        tag_tired: "😴 Tired",
        tag_destroyed: "💔 Destroyed",
        tag_betrayed: "🔪 Betrayed",
        tag_used: "🧸 Used",
        placeholder_feeling: "I am feeling...",
        btn_quick: "⚡ Quick",
        btn_deep: "🛡️ Protocol",
        btn_healing: "🌱 Healing",
        btn_breathe: "🌬️ Breathe",
        chat_title: "Emotional Guardian",
        chat_sub: "Here to listen",
        chat_placeholder: "Type here...",
        chat_welcome: "Hello. I am here to listen. How are you feeling today?"
    },
    ar: {
        nav_help: "🆘 مساعدة",
        nav_chat: "🧠 الحارس",
        crown: "👑 تاج البصيرة",
        title: "بكيت اليوم",
        badge: "🔒 محلي وخاص",
        subtitle: "حرر عقلك. استقبل الحكمة.",
        tag_sad: "😢 حزين",
        tag_anxious: "😰 قلق",
        tag_lonely: "🌑 وحيد",
        tag_tired: "😴 متعب",
        tag_destroyed: "💔 محطم",
        tag_betrayed: "🔪 مغدور",
        tag_used: "🧸 مستغل",
        placeholder_feeling: "أشعر بـ...",
        btn_quick: "⚡ سريع",
        btn_deep: "🛡️ بروتوكول",
        btn_healing: "🌱 تشافي",
        btn_breathe: "🌬️ تنفس",
        chat_title: "الحارس العاطفي",
        chat_sub: "هنا لأستمع إليك",
        chat_placeholder: "اكتب هنا...",
        chat_welcome: "مرحباً. أنا هنا لأسمعك. كيف تشعر اليوم؟"
    }
};

// 2. BIBLIOTHÈQUE DE RÉPONSES ALÉATOIRES (Dynamic Database)
const wisdomDatabase = {
    // --- MODE VITE (QUICK) ---
    quick: {
        fr: [
            "C'est noté. Rappelle-toi que ce n'est qu'un moment difficile, pas une vie difficile. Respire un grand coup, bois un verre d'eau et ne prends aucune décision radicale ce soir.",
            "Stop. Ne crois pas tout ce que ton esprit te raconte maintenant. La fatigue et l'émotion déforment la réalité. Attends demain matin avant de juger ta situation.",
            "Tu es en sécurité. Ce sentiment d'urgence est une fausse alerte de ton cerveau. Ralentis tes gestes, baisse les épaules, et concentre-toi juste sur les 5 prochaines minutes."
        ],
        en: [
            "Understood. Remember, this is just a bad moment, not a bad life. Take a deep breath, drink a glass of water, and do not make any radical decisions tonight.",
            "Pause. Do not believe everything your mind is telling you right now. Exhaustion and emotion distort reality. Wait until tomorrow morning before judging your situation.",
            "You are safe. This sense of urgency is a false alarm from your brain. Slow down your movements, drop your shoulders, and just focus on the next 5 minutes."
        ],
        ar: [
            "فهمت شعورك. تذكر أن هذه مجرد لحظة صعبة، وليست حياة سيئة. تنفس بعمق، اشرب كوباً من الماء، ولا تتخذ أي قرارات مصيرية الليلة.",
            "توقف لحظة. لا تصدق كل ما يخبرك به عقلك الآن. التعب والمشاعر يشوهان الحقيقة. انتظر حتى الصباح قبل أن تحكم على وضعك.",
            "أنت في أمان. هذا الشعور بالخطر هو مجرد إنذار خاطئ. أبطئ حركتك، أرخِ كتفيك، وركز فقط على الدقائق الخمس القادمة."
        ]
    },

    // --- MODE PROTOCOLE (DEEP) ---
    deep: {
        fr: [
            "<b>🛡️ Protocole d'Urgence A :</b><br><br>1. <b>Déconnecte :</b> Lâche ton téléphone pour 5 minutes.<br>2. <b>Physiologie :</b> Lève-toi, étire-toi ou change de pièce.<br>3. <b>Ordre :</b> Range une seule chose autour de toi.<br>4. <b>Action :</b> Fais une micro-tâche de 2 minutes que tu repousses.",
            "<b>🛡️ Protocole de Réinitialisation B :</b><br><br>1. <b>Eau Froide :</b> Passe-toi de l'eau froide sur le visage (choc vagal).<br>2. <b>Respiration 4-7-8 :</b> Inspire 4s, retiens 7s, expire 8s.<br>3. <b>Ancrage :</b> Nomme 3 objets bleus autour de toi.<br>4. <b>Silence :</b> 2 minutes de silence total.",
            "<b>🛡️ Stratégie de Sortie C :</b><br><br>1. <b>Environnement :</b> Sors dehors ou ouvre une fenêtre immédiatement.<br>2. <b>Écriture :</b> Jette tes pensées sur papier sans relire.<br>3. <b>Mouvement :</b> Marche rapidement ou fais 10 pompes.<br>4. <b>Distraction :</b> Écoute une sourate ou une musique calme."
        ],
        en: [
            "<b>🛡️ Emergency Protocol A:</b><br><br>1. <b>Disconnect:</b> Put down your phone for 5 minutes.<br>2. <b>Physiology:</b> Stand up, stretch, or change rooms.<br>3. <b>Order:</b> Tidy up one single thing around you.<br>4. <b>Action:</b> Do a 2-minute micro-task you have been avoiding.",
            "<b>🛡️ Reset Protocol B:</b><br><br>1. <b>Cold Water:</b> Splash cold water on your face (vagus nerve shock).<br>2. <b>4-7-8 Breathing:</b> Inhale 4s, hold 7s, exhale 8s.<br>3. <b>Grounding:</b> Name 3 blue objects around you.<br>4. <b>Silence:</b> 2 minutes of total silence.",
            "<b>🛡️ Exit Strategy C:</b><br><br>1. <b>Environment:</b> Go outside or open a window immediately.<br>2. <b>Writing:</b> Dump your thoughts on paper without reading.<br>3. <b>Movement:</b> Walk fast or do 10 push-ups.<br>4. <b>Distraction:</b> Listen to Quran or calming music."
        ],
        ar: [
            "<b>🛡️ بروتوكول الطوارئ أ:</b><br><br>1. <b>افصل:</b> اترك هاتفك لمدة 5 دقائق.<br>2. <b>تحرك:</b> قف، تمدد، أو غير مكان جلوسك.<br>3. <b>رتب:</b> نظم شيئاً واحداً حولك.<br>4. <b>أنجز:</b> قم بمهمة صغيرة لمدة دقيقتين كنت تؤجلها.",
            "<b>🛡️ بروتوكول إعادة الضبط ب:</b><br><br>1. <b>الماء البارد:</b> اغسل وجهك بماء بارد فوراً.<br>2. <b>التنفس:</b> شهيق 4 ثوان، حبس 7 ثوان، زفير 8 ثوان.<br>3. <b>تثبيت:</b> سمِّ 3 أشياء زرقاء حولك.<br>4. <b>صمت:</b> دقيقتان من الصمت التام.",
            "<b>🛡️ استراتيجية الخروج ج:</b><br><br>1. <b>البيئة:</b> اخرج للهواء الطلق أو افتح نافذة.<br>2. <b>الكتابة:</b> فرغ أفكارك على الورق دون قراءتها.<br>3. <b>الحركة:</b> امشِ بسرعة أو قم بتمارين خفيفة.<br>4. <b>الاستماع:</b> استمع للقرآن أو لصوت هادئ."
        ]
    },

    // --- MODE SOIN (HEALING) ---
    healing: {
        fr: [
            "Prends un instant pour fermer les yeux et écouter ce silence. Ce que tu ressens en ce moment, aussi lourd soit-il, ne définit pas qui tu es. C'est une tempête passagère, et tu es le ciel qui reste intact derrière les nuages. Tu as le droit d'être fatigué. Respire doucement... Inspire la paix, expire la douleur.",
            "Imagine que ton esprit est un jardin. Aujourd'hui, il pleut, et c'est nécessaire pour que les fleurs poussent demain. Ne te bats pas contre la pluie. Laisse-la tomber. Sois doux avec toi-même, comme tu le serais avec un meilleur ami qui souffre. Tu guéris, petit à petit.",
            "Ta valeur ne dépend pas de ta productivité ni de ton humeur du jour. Tu es précieux simplement parce que tu existes. Cette douleur que tu ressens est la preuve que ton cœur est vivant, qu'il est capable de ressentir profondément. Pardonne-toi pour aujourd'hui. Tout ira mieux."
        ],
        en: [
            "Take a moment to close your eyes and embrace the silence. What you are feeling right now, no matter how heavy, does not define who you are. It is just a passing storm, and you are the vast sky that remains untouched behind the clouds. You are allowed to be tired. Breathe gently... Inhale peace, exhale pain.",
            "Imagine your mind is a garden. Today it is raining, and that is necessary for the flowers to grow tomorrow. Do not fight the rain. Let it fall. Be gentle with yourself, just as you would be with a best friend who is hurting. You are healing, step by step.",
            "Your worth does not depend on your productivity or your mood today. You are precious simply because you exist. This pain you feel is proof that your heart is alive, capable of feeling deeply. Forgive yourself for today. It will get better."
        ],
        ar: [
            "خذ لحظة لتغمض عينيك وتستمع إلى السكون. ما تشعر به الآن، مهما كان ثقيلاً، لا يحدد هويتك. إنها مجرد عاصفة عابرة، وأنت السماء الصافية التي تبقى ثابتة خلف الغيوم. لديك الحق في أن تتعب. تنفس ببطء... استنشق السلام، وازفر الألم.",
            "تخيل أن عقلك حديقة. اليوم تهطل الأمطار، وهذا ضروري لتنمو الزهور غداً. لا تحارب المطر، دعه يهطل. كن لطيفاً مع نفسك كما تكون مع أعز أصدقائك. أنت تتشافى، خطوة بخطوة.",
            "قيمتك لا تعتمد على إنجازك اليومي أو مزاجك. أنت غالي ومهم لمجرد وجودك. هذا الألم دليل على أن قلبك حي وينبض بالشعور. سامح نفسك عن هذا اليوم. القادم أفضل بإذن الله."
        ]
    }
};

let currentLang = 'en';

// 3. FONCTIONS SYSTÈME
function changeLanguage(langOverride = null) {
    const selector = document.getElementById('languageSelector');
    if (langOverride) {
        selector.value = langOverride;
        currentLang = langOverride;
    } else {
        currentLang = selector.value;
    }

    const texts = uiTranslations[currentLang];
    const body = document.body;

    if (currentLang === 'ar') body.classList.add('rtl');
    else body.classList.remove('rtl');

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (texts[key]) element.innerText = texts[key];
    });

    const userFeeling = document.getElementById('userFeeling');
    if (userFeeling) userFeeling.placeholder = texts.placeholder_feeling;
    
    const chatInput = document.getElementById('input-cried');
    if (chatInput) chatInput.placeholder = texts.chat_placeholder;
    
    const chatTitle = document.querySelector('.chat-header-static strong');
    if (chatTitle) chatTitle.innerText = texts.chat_title;
    
    const chatSub = document.querySelector('.chat-header-static div div');
    if (chatSub) chatSub.innerText = texts.chat_sub;

    document.getElementById('replyText').innerText = "";
}

function switchView(viewName) {
    document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.getElementById('view-' + viewName).classList.add('active');
    const navIndex = viewName === 'help' ? 0 : 1;
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems[navIndex]) navItems[navIndex].classList.add('active');
}

function addTag(emotionKey) {
    const texts = uiTranslations[currentLang];
    const emotionText = texts['tag_' + emotionKey] || emotionKey;
    const textarea = document.getElementById('userFeeling');
    if (textarea.value === "") textarea.value = emotionText;
    else textarea.value += ", " + emotionText;
}

function clearText() {
    document.getElementById('userFeeling').value = "";
    document.getElementById('replyText').innerText = "";
}

function startBreathing() {
    document.getElementById('breathingOverlay').style.display = 'flex';
}

function stopBreathing() {
    document.getElementById('breathingOverlay').style.display = 'none';
}

// 4. GÉNÉRATEUR ALÉATOIRE (CŒUR DU SYSTÈME)
function processFeeling(type) {
    const area = document.getElementById('replyText');
    
    // Animation
    area.style.opacity = '0.5';
    area.innerText = (currentLang === 'ar') ? "...جاري المعالجة" : "Processing...";

    setTimeout(() => {
        area.style.opacity = '1';
        
        // Récupérer la liste des messages possibles pour la langue actuelle
        const possibilities = wisdomDatabase[type][currentLang];
        
        // CHOIX ALÉATOIRE : Math.random() choisit un index au hasard
        const randomIndex = Math.floor(Math.random() * possibilities.length);
        const randomMessage = possibilities[randomIndex];
        
        // Affichage (innerHTML permet le gras et les sauts de ligne)
        area.innerHTML = randomMessage;
        
    }, 500);
}

// 5. AUTO-START
window.onload = () => {
    const userLang = navigator.language || navigator.userLanguage; 
    let targetLang = 'en'; 
    if (userLang.startsWith('fr')) targetLang = 'fr';
    else if (userLang.startsWith('ar')) targetLang = 'ar';
    changeLanguage(targetLang);
};
