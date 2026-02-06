let currentLang = 'en'; // Langue par défaut

// ============================================================
// 1. DATASET COMPLET (TEXTES RICHES POUR BOUTONS)
// ============================================================

const translations = {
    // --- FRANÇAIS ---
    fr: {
        ui: {
            crown: "👑 Couronne de la Sagesse", badge: "🔒 Privé & Sécurisé",
            title: "J'ai Pleuré Aujourd'hui", subtitle: "Déposez votre fardeau. Recevez la sagesse.",
            nav_help: "🆘 Demander de l'aide", nav_chat: "🧠 IA Neurale",
            btn_quick: "⚡ Rapide", btn_deep: "🛡️ Protocole", btn_healing: "🌱 Guérison",
            btn_breathe: "🌬️ Respirer",
            chat_welcome: "Je suis prêt. Pas de pitié, que des solutions. Quel est le problème ?",
            
            tag_sad: "😢 Triste", tag_anxious: "😰 Anxieux", tag_lonely: "🌑 Seul",
            tag_tired: "😴 Fatigué", tag_destroyed: "💔 Détruit",
            tag_betrayed: "🔪 Trahi", tag_used: "🧸 Utilisé",
            replyLabel: "Sagesse :"
        },
        placeholders: ["Je suis à bout...", "Ils m'ont détruit...", "Je me sens sale..."],
        
        responses: {
            destroyed: {
                quick: "🚑 <strong>URGENCE VITALE :</strong><br>Arrêtez tout. Mode Avion. Buvez un grand verre d'eau. Zéro décision pendant 48h.",
                deep: "🛡️ <strong>PROTOCOLE PHÉNIX :</strong><br>1. <strong>Acceptation :</strong> Dites à voix haute 'L'ancienne version de ma vie est morte'.<br>2. <strong>Purge :</strong> Jetez tout objet lié au choc.<br>3. <strong>Base Zéro :</strong> Manger, dormir et marcher pendant 3 jours.",
                healing: "🌿 <strong>LEÇON DE GUÉRISON :</strong><br>L'état de destruction n'est pas une fin, c'est une fondation. La douleur est le feu purificateur qui brûle ce qui était faux. Ce qui reste dans les cendres est votre noyau indestructible. Relevez-vous, invincible."
            },
            betrayed: {
                quick: "🔪 <strong>PREMIERS SOINS :</strong><br>Retirez le couteau. Coupez le lien avec le traître. Ne demandez pas 'Pourquoi'.",
                deep: "🛡️ <strong>PROTOCOLE INTÉGRITÉ :</strong><br>1. <strong>Silence Radio :</strong> Ne leur montrez pas votre colère.<br>2. <strong>Autopsie :</strong> Listez les signes ignorés.<br>3. <strong>Pardon :</strong> Pardonnez-vous d'avoir été aveugle.",
                healing: "🌿 <strong>LEÇON DE GUÉRISON :</strong><br>La trahison est une pilule empoisonnée que vous refusez d'avaler. La loyauté est un langage qu'ils ne parlent pas. Ils ont perdu un soutien ; vous avez perdu un parasite. Votre cicatrice est votre radar."
            },
            used: {
                quick: "🛑 <strong>STOP :</strong><br>Le mot magique est <strong>'NON'</strong>. Dites-le maintenant. Leur colère sera la preuve qu'ils vous utilisaient.",
                deep: "🛡️ <strong>PROTOCOLE SOUVERAINETÉ :</strong><br>1. <strong>Tuer le Gentil :</strong> Soyez 'vrai', pas 'gentil'.<br>2. <strong>Audit :</strong> Qu'avez-vous donné vs reçu ?<br>3. <strong>Coupure :</strong> Coupez les vivres.",
                healing: "🌿 <strong>LEÇON DE GUÉRISON :</strong><br>Tuez le 'Sauveur' pour laisser naître le 'Souverain'. Votre valeur n'est pas votre utilité. Ceux qui vous aiment pour ce que vous ÊTES resteront. Reprenez votre énergie."
            },
            breakup: {
                quick: "🚫 <strong>URGENCE :</strong><br>Bloquez partout. Regarder c'est souffrir. C'est du sevrage chimique.",
                deep: "🛡️ <strong>PROTOCOLE DÉTOX :</strong><br>1. <strong>Zéro Contact :</strong> Absolu pour 30 jours.<br>2. <strong>Hygiène :</strong> Changez vos draps.<br>3. <strong>Exutoire :</strong> Lettre brûlée.",
                healing: "🌿 <strong>LEÇON DE GUÉRISON :</strong><br>Ce n'est pas un rejet, c'est une redirection. La douleur est chimique. Si c'était votre destin, ils seraient là. Fermez le livre, la suite est pour vous."
            },
            cheated: {
                quick: "🛑 <strong>SANTÉ :</strong><br>Test MST immédiat. C'est la priorité. Pas de détails sordides.",
                deep: "🛡️ <strong>PROTOCOLE DIGNITÉ :</strong><br>1. <strong>Pas de Larmes :</strong> Pas devant eux.<br>2. <strong>Pas de Comparaison :</strong> Jamais.<br>3. <strong>Sortie :</strong> Partez la tête haute.",
                healing: "🌿 <strong>LEÇON DE GUÉRISON :</strong><br>L'infidélité parle de leur vide, pas de votre valeur. Vous étiez suffisant, mais vous remplissiez un seau percé. Laissez-les à leur chaos."
            },
            sad: {
                quick: "🚿 <strong>ACTION :</strong><br>Douche froide ou 20 pompes. Bougez le corps.",
                deep: "🛡️ <strong>PROTOCOLE DOPAMINE :</strong><br>1. <strong>Soleil :</strong> Marche 15 min.<br>2. <strong>Ordre :</strong> Rangez un coin.<br>3. <strong>Protéines :</strong> Mangez bien.",
                healing: "🌿 <strong>LEÇON DE GUÉRISON :</strong><br>La tristesse est un nuage, vous êtes le ciel. Elle signale un besoin de changement. Ne la combattez pas, mais ne devenez pas elle."
            },
            anxious: {
                quick: "🌬️ <strong>RESPIRATION :</strong><br>Inspirez 4s, Bloquez 7s, Expirez 8s. Trois fois.",
                deep: "🛡️ <strong>PROTOCOLE ANCRAGE :</strong><br>1. <strong>Vue :</strong> 5 objets bleus.<br>2. <strong>Toucher :</strong> Une texture.<br>3. <strong>Écrire :</strong> Notez la peur.",
                healing: "🌿 <strong>LEÇON DE GUÉRISON :</strong><br>L'anxiété est une erreur de calcul du futur. Vous souffrez en imagination. Revenez au présent : ici, vous êtes en sécurité."
            },
            lonely: {
                quick: "📞 <strong>SORTIE :</strong><br>Allez dans un lieu public. Entendre des voix calme le cerveau.",
                deep: "🛡️ <strong>PROTOCOLE CONNEXION :</strong><br>1. <strong>Coupez :</strong> Les réseaux sociaux.<br>2. <strong>Aidez :</strong> Quelqu'un d'autre.<br>3. <strong>Créez :</strong> Art ou sport.",
                healing: "🌿 <strong>LEÇON DE GUÉRISON :</strong><br>La solitude est un laboratoire pour bâtir votre empire intérieur. Devenez la personne avec qui vous rêvez de passer du temps."
            },
            tired: {
                quick: "😴 <strong>SIESTE :</strong><br>20 minutes max. Pas de téléphone. Eau.",
                deep: "🛡️ <strong>PROTOCOLE ÉNERGIE :</strong><br>1. <strong>Bio :</strong> Fer/Magnésium.<br>2. <strong>Vampires :</strong> Coupez les relations toxiques.<br>3. <strong>Dodo :</strong> 22h00.",
                healing: "🌿 <strong>LEÇON DE GUÉRISON :</strong><br>Cette fatigue est émotionnelle. Vous avez trop porté. Déposez les armes. Le monde tournera sans vous pendant 24h."
            },
            default: {
                quick: "⚠️ <strong>PRÉCISEZ :</strong><br>Je ne comprends pas. Utilisez : 'Trahi', 'Détruit', 'Rupture'.",
                deep: "🛡️ <strong>ANALYSE :</strong><br>Situation complexe. Décomposez le problème.",
                healing: "🌿 <strong>CONSEIL :</strong><br>Le silence ou la confusion est normal. Identifiez la source de la douleur (un mot clé) pour que je puisse vous aider."
            }
        }
    },

    // --- ENGLISH ---
    en: {
        ui: {
            crown: "👑 Crown of Insight", badge: "🔒 Local & Private",
            title: "I Cried Today", subtitle: "Unburden your mind. Receive wisdom.",
            nav_help: "🆘 Ask for Help", nav_chat: "🧠 Neural AI",
            btn_quick: "⚡ Quick", btn_deep: "🛡️ Protocol", btn_healing: "🌱 Healing",
            btn_breathe: "🌬️ Breathe",
            chat_welcome: "I am ready. No pity, only solutions. What is the problem?",
            
            tag_sad: "😢 Sad", tag_anxious: "😰 Anxious", tag_lonely: "🌑 Lonely",
            tag_tired: "😴 Tired", tag_destroyed: "💔 Destroyed",
            tag_betrayed: "🔪 Betrayed", tag_used: "🧸 Used",
            replyLabel: "Insight:"
        },
        placeholders: ["I feel destroyed...", "They used me...", "I was betrayed..."],
        
        responses: {
            destroyed: {
                quick: "🚑 <strong>CRITICAL EMERGENCY:</strong><br>Stop everything. Airplane mode. Drink water. NO decisions for 48h.",
                deep: "🛡️ <strong>PHOENIX PROTOCOL:</strong><br>1. <strong>Accept:</strong> 'The old me died today'.<br>2. <strong>Purge:</strong> Throw away broken things.<br>3. <strong>Base Zero:</strong> Eat, Sleep, Walk.",
                healing: "🌿 <strong>HEALING LESSON:</strong><br>Destruction is an initiation. You are not the burning wood, you are the soil. Rise from the wreckage. You are the Phoenix."
            },
            betrayed: {
                quick: "🔪 <strong>FIRST AID:</strong><br>Pull the knife out. Cut the bond. Don't ask 'Why'.",
                deep: "🛡️ <strong>INTEGRITY PROTOCOL:</strong><br>1. <strong>Silence:</strong> Don't show anger.<br>2. <strong>Autopsy:</strong> List red flags.<br>3. <strong>Forgive:</strong> Yourself for being loyal.",
                healing: "🌿 <strong>HEALING LESSON:</strong><br>Betrayal is a bitter pill; don't swallow it. Loyalty is a language they can't speak. You lost a parasite. Your scar is your radar."
            },
            used: {
                quick: "🛑 <strong>STOP:</strong><br>Say <strong>'NO'</strong>. If they get mad, it proves they used you.",
                deep: "🛡️ <strong>SOVEREIGNTY PROTOCOL:</strong><br>1. <strong>Kill Nice Guy:</strong> Be real.<br>2. <strong>Audit:</strong> Given vs Received?<br>3. <strong>Cut:</strong> Revoke privileges.",
                healing: "🌿 <strong>HEALING LESSON:</strong><br>Kill the 'People Pleaser'. Your worth is not utility. Those who love you for WHO you are will stay. Reclaim your energy."
            },
            breakup: {
                quick: "🚫 <strong>URGENCY:</strong><br>Block everywhere. It's withdrawal, not love.",
                deep: "🛡️ <strong>DETOX PROTOCOL:</strong><br>1. <strong>No Contact:</strong> 30 days.<br>2. <strong>Hygiene:</strong> Change sheets.<br>3. <strong>Vent:</strong> Burn letter.",
                healing: "🌿 <strong>HEALING LESSON:</strong><br>A breakup is redirection. It is chemical withdrawal. Accept the chapter is closed. You are finding yourself."
            },
            cheated: {
                quick: "🛑 <strong>HEALTH:</strong><br>STD Check. Priority. No details.",
                deep: "🛡️ <strong>DIGNITY PROTOCOL:</strong><br>1. <strong>No Tears:</strong> Not in front of them.<br>2. <strong>No Compete:</strong> Never.<br>3. <strong>Exit:</strong> Walk away.",
                healing: "🌿 <strong>HEALING LESSON:</strong><br>Cheating reflects their void, not yours. You were enough; they were a bottomless bucket. You are the light they couldn't keep."
            },
            sad: {
                quick: "🚿 <strong>SHOCK:</strong><br>Cold shower. Move your body.",
                deep: "🛡️ <strong>DOPAMINE PROTOCOL:</strong><br>1. <strong>Sun:</strong> Walk outside.<br>2. <strong>Clean:</strong> One area.<br>3. <strong>Fuel:</strong> Protein.",
                healing: "🌿 <strong>HEALING LESSON:</strong><br>Sadness is a cloud; you are the sky. Do not fight it, but do not become it."
            },
            anxious: {
                quick: "🌬️ <strong>BREATHE:</strong><br>Inhale 4s, Hold 7s, Exhale 8s. Three times.",
                deep: "🛡️ <strong>GROUNDING PROTOCOL:</strong><br>1. <strong>See:</strong> 5 blue objects.<br>2. <strong>Touch:</strong> Texture.<br>3. <strong>Write:</strong> The fear.",
                healing: "🌿 <strong>HEALING LESSON:</strong><br>Anxiety is a future error. Return to the present. You are safe here and now."
            },
            lonely: {
                quick: "📞 <strong>CONTACT:</strong><br>Go public. Hear voices.",
                deep: "🛡️ <strong>CONNECTION PROTOCOL:</strong><br>1. <strong>Cut:</strong> Social media.<br>2. <strong>Help:</strong> Someone else.<br>3. <strong>Create:</strong> Art/Sport.",
                healing: "🌿 <strong>HEALING LESSON:</strong><br>Solitude is a laboratory. Build your inner empire. Be your own best friend."
            },
            tired: {
                quick: "😴 <strong>NAP:</strong><br>20 mins. No phone. Water.",
                deep: "🛡️ <strong>ENERGY PROTOCOL:</strong><br>1. <strong>Bio:</strong> Iron check.<br>2. <strong>Cut:</strong> Vampires.<br>3. <strong>Sleep:</strong> 10 PM.",
                healing: "🌿 <strong>HEALING LESSON:</strong><br>This tired is emotional. You carried too much. Put the bag down. Rest."
            },
            default: {
                quick: "⚠️ <strong>CLARIFY:</strong><br>Use keyword: 'Betrayed', 'Destroyed'.",
                deep: "🛡️ <strong>ANALYSIS:</strong><br>Complex situation. Simplify.",
                healing: "🌿 <strong>ADVICE:</strong><br>Confusion is normal. Give me a keyword to identify your pain."
            }
        }
    },

    // --- ARABIC ---
    ar: {
        ui: {
            crown: "👑 تاج البصيرة", badge: "🔒 خاص وآمن",
            title: "بكيت اليوم", subtitle: "أفرغ ما في قلبك. استقبل الحكمة.",
            nav_help: "🆘 طلب المساعدة", nav_chat: "🧠 الذكاء العصبي",
            btn_quick: "⚡ سريع", btn_deep: "🛡️ بروتوكول", btn_healing: "🌱 شفاء",
            btn_breathe: "🌬️ تنفس",
            chat_welcome: "أنا مستعد. لا شفقة، فقط حلول. ما هي المشكلة؟",
            
            tag_sad: "😢 حزين", tag_anxious: "😰 قلق", tag_lonely: "🌑 وحيد",
            tag_tired: "😴 متعب", tag_destroyed: "💔 مدمر",
            tag_betrayed: "🔪 مغدور", tag_used: "🧸 مستغل",
            replyLabel: "الحكمة:"
        },
        placeholders: ["أشعر أنني مدمر...", "لقد استغلوني...", "طعنوني في ظهري..."],
        
        responses: {
            destroyed: {
                quick: "🚑 <strong>طوارئ:</strong><br>توقف. وضع طيران. اشرب ماء. لا قرارات 48 ساعة.",
                deep: "🛡️ <strong>بروتوكول العنقاء:</strong><br>1. <strong>قبول:</strong> ماتت النسخة القديمة.<br>2. <strong>تطهير:</strong> ارمِ المكسور.<br>3. <strong>بداية:</strong> أكل ونوم.",
                healing: "🌿 <strong>درس الشفاء:</strong><br>أن تكون مدمراً هو بداية. الألم نار تحرق الأوهام. انهض، أنت العنقاء."
            },
            betrayed: {
                quick: "🔪 <strong>إسعافات:</strong><br>انزع السكين. اقطع العلاقة. لا تسأل لماذا.",
                deep: "🛡️ <strong>بروتوكول النزاهة:</strong><br>1. <strong>صمت:</strong> لا تظهر غضبك.<br>2. <strong>تحليل:</strong> اكتب العلامات الحمراء.<br>3. <strong>مسامحة:</strong> سامح نفسك.",
                healing: "🌿 <strong>درس الشفاء:</strong><br>الخيانة سمّهم. الوفاء لغة لا يفهمونها. خسرت طفيلياً. ندبتك رادارك."
            },
            used: {
                quick: "🛑 <strong>توقف:</strong><br>قل <strong>'لا'</strong>. غضبهم دليل استغلالهم.",
                deep: "🛡️ <strong>بروتوكول السيادة:</strong><br>1. <strong>اقتل اللطف:</strong> كن حقيقياً.<br>2. <strong>حساب:</strong> ماذا أخذت؟<br>3. <strong>قطع:</strong> اقطع الامتيازات.",
                healing: "🌿 <strong>درس الشفاء:</strong><br>اقتل 'المُرضي' ليولد 'السيد'. قيمتك ليست فائدتك. استعد طاقتك."
            },
            breakup: {
                quick: "🚫 <strong>طوارئ:</strong><br>حظر شامل. هذا انسحاب وليس حب.",
                deep: "🛡️ <strong>بروتوكول التعافي:</strong><br>1. <strong>قطع:</strong> 30 يوم.<br>2. <strong>نظافة:</strong> غير الأغطية.<br>3. <strong>حرق:</strong> رسالة غضب.",
                healing: "🌿 <strong>درس الشفاء:</strong><br>الانفصال توجيه للقدر. انسحاب كيميائي. اترك ما يرحل."
            },
            cheated: {
                quick: "🛑 <strong>صحة:</strong><br>فحص طبي. أولوية. لا تفاصيل.",
                deep: "🛡️ <strong>بروتوكول الكرامة:</strong><br>1. <strong>لا دموع:</strong> أمامهم.<br>2. <strong>لا مقارنة:</strong> أبداً.<br>3. <strong>رحيل:</strong> بشموخ.",
                healing: "🌿 <strong>درس الشفاء:</strong><br>الخيانة نقصهم. أنت النور الذي لم يستحقوه."
            },
            sad: {
                quick: "🚿 <strong>صدمة:</strong><br>دوش بارد. تحرك.",
                deep: "🛡️ <strong>بروتوكول الدوبامين:</strong><br>1. <strong>شمس:</strong> مشي.<br>2. <strong>ترتيب:</strong> مكان صغير.<br>3. <strong>أكل:</strong> بروتين.",
                healing: "🌿 <strong>درس الشفاء:</strong><br>الحزن سحابة وأنت السماء. سيمر."
            },
            anxious: {
                quick: "🌬️ <strong>تنفس:</strong><br>4-7-8. ثلاث مرات.",
                deep: "🛡️ <strong>بروتوكول التجذير:</strong><br>1. <strong>رؤية:</strong> 5 أشياء زرقاء.<br>2. <strong>لمس:</strong> قماش.<br>3. <strong>كتابة:</strong> الخوف.",
                healing: "🌿 <strong>درس الشفاء:</strong><br>القلق خطأ في حساب المستقبل. عد للحاضر. أنت آمن."
            },
            lonely: {
                quick: "📞 <strong>اتصال:</strong><br>اذهب لمكان عام.",
                deep: "🛡️ <strong>بروتوكول التواصل:</strong><br>1. <strong>قطع:</strong> سوشيال ميديا.<br>2. <strong>مساعدة:</strong> غيرك.<br>3. <strong>إبداع:</strong> فن/رياضة.",
                healing: "🌿 <strong>درس الشفاء:</strong><br>الوحدة بناء إمبراطورية. كن صديق نفسك."
            },
            tired: {
                quick: "😴 <strong>قيلولة:</strong><br>20 دقيقة. ماء.",
                deep: "🛡️ <strong>بروتوكول الطاقة:</strong><br>1. <strong>حديد:</strong> افحص.<br>2. <strong>قطع:</strong> الماصين.<br>3. <strong>نوم:</strong> 10 مساءً.",
                healing: "🌿 <strong>درس الشفاء:</strong><br>تعبك عاطفي. ضع الحقيبة. ارتح."
            },
            default: {
                quick: "⚠️ <strong>وضح:</strong><br>استخدم: 'مدمر'، 'مغدور'.",
                deep: "🛡️ <strong>تحليل:</strong><br>الوضع معقد. بسّط.",
                healing: "🌿 <strong>نصيحة:</strong><br>الغموض طبيعي. أعطني كلمة مفتاحية لأساعدك."
            }
        }
    }
};

// ============================================================
// 2. FONCTIONS UI & NAV
// ============================================================

function switchView(viewName) {
    document.querySelectorAll('.view-container').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    if (viewName === 'help') {
        document.getElementById('view-help').classList.add('active');
        document.querySelectorAll('.nav-item')[0].classList.add('active');
    } else {
        document.getElementById('view-chat').classList.add('active');
        document.querySelectorAll('.nav-item')[1].classList.add('active');
    }
}

function startBreathing() { document.getElementById("breathingOverlay").style.display = "flex"; }
function stopBreathing() { document.getElementById("breathingOverlay").style.display = "none"; }

function changeLanguage() {
    const selector = document.getElementById("languageSelector");
    currentLang = selector.value;
    document.body.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    
    const ui = translations[currentLang].ui;
    
    const updates = {
        '[data-i18n="crown"]': ui.crown,
        '[data-i18n="badge"]': ui.badge,
        '[data-i18n="title"]': ui.title,
        '[data-i18n="subtitle"]': ui.subtitle,
        '[data-i18n="nav_help"]': ui.nav_help,
        '[data-i18n="nav_chat"]': ui.nav_chat,
        '[data-i18n="btn_quick"]': ui.btn_quick,
        '[data-i18n="btn_deep"]': ui.btn_deep,
        '[data-i18n="btn_healing"]': ui.btn_healing,
        '[data-i18n="btn_breathe"]': ui.btn_breathe,
        '[data-i18n="chat_welcome"]': ui.chat_welcome 
    };

    for (let key in updates) {
        let el = document.querySelector(key);
        if(el) el.innerText = updates[key];
    }

    const tags = ["sad", "anxious", "lonely", "tired", "destroyed", "betrayed", "used"];
    tags.forEach(tag => {
        let el = document.querySelector(`[data-i18n="tag_${tag}"]`);
        if(el) el.innerText = ui["tag_" + tag];
    });

    setRandomPlaceholder();
}

function addTag(emotionKey) {
    const input = document.getElementById("userFeeling");
    const tagText = translations[currentLang].ui["tag_" + emotionKey];
    input.value = tagText.substring(2).trim() + " "; 
    input.focus();
}

function clearText() {
    document.getElementById("userFeeling").value = "";
    document.getElementById("replyArea").style.display = "none";
}

function setRandomPlaceholder() {
    const input = document.getElementById("userFeeling");
    const list = translations[currentLang].placeholders;
    input.placeholder = list[Math.floor(Math.random() * list.length)];
}

// ============================================================
// 3. MOTEUR DE DÉTECTION (Pour les boutons Page 1)
// ============================================================

function getEmotionKey(text) {
    const t = text.toLowerCase();
    
    if (t.includes("destroy") || t.includes("détruit") || t.includes("modamir") || t.includes("damar")) return "destroyed";
    if (t.includes("betray") || t.includes("trahi") || t.includes("ghadr") || t.includes("back") || t.includes("knife")) return "betrayed";
    if (t.includes("used") || t.includes("utilisé") || t.includes("profit") || t.includes("mustaghal") || t.includes("servi")) return "used";
    if (t.includes("break") || t.includes("rupture") || t.includes("ex") || t.includes("quit") || t.includes("anfasal")) return "breakup";
    if (t.includes("cheat") || t.includes("tromp") || t.includes("lie") || t.includes("menti") || t.includes("khan")) return "cheated";
    
    if (t.includes("sad") || t.includes("triste") || t.includes("pleur") || t.includes("cry") || t.includes("hazin")) return "sad";
    if (t.includes("anxi") || t.includes("stress") || t.includes("paniq") || t.includes("peur") || t.includes("qalaq")) return "anxious";
    if (t.includes("lonely") || t.includes("seul") || t.includes("alone") || t.includes("wahid")) return "lonely";
    if (t.includes("tired") || t.includes("fatigu") || t.includes("sleep") || t.includes("ta3ban")) return "tired";

    return "default";
}

function processFeeling(mode) {
    const input = document.getElementById("userFeeling");
    const replyArea = document.getElementById("replyArea");
    const replyText = document.getElementById("replyText");
    const text = input.value.trim();

    if (text === "") { alert("Ecrivez quelque chose..."); return; }

    const key = getEmotionKey(text);
    const dict = translations[currentLang].responses;
    
    const content = dict[key] ? dict[key][mode] : dict["default"][mode];

    replyText.innerHTML = `<strong>${translations[currentLang].ui.replyLabel}</strong><br><br>${content}`;
    replyArea.style.display = "block";
    replyArea.scrollIntoView({ behavior: "smooth" });
}

// ============================================================
// INITIALISATION
// ============================================================

window.onload = function() {
    switchView('help');
    setRandomPlaceholder();
    // Force la langue au démarrage pour sync HTML et JS
    changeLanguage(); 
};