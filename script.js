// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener("DOMContentLoaded", function () {
  const tg = window.Telegram.WebApp;
  tg.ready();
  tg.expand();
  tg.setHeaderColor("#2c2c2e");
  tg.setBackgroundColor("#1c1c1d");

  const progressBar = document.getElementById("myBar");
  const loader = document.getElementById("page-loader");

  // 1. On lance l'animation de la barre après un tout petit délai
  setTimeout(() => {
    if (progressBar) {
      progressBar.style.width = "100%";
    }
  }, 100);

  const contactLinks = [
    {
      name: "TELEGRAM 🌐",
      url: "https://t.me/niiceplace91",
      id: "telegram",
      className: "telegram",
      text: "TELEGRAM 🌐",
    },
    {
      name: "WHATSAPP 💬",
      url: "https://wa.me/33745923730",
      id: "whatsapp",
      className: "whatsapp",
      text: "WHATSAPP 💬",
    },
  ];

  const appData = [
    // ============================================================
    // CATEGORIE 2 : HASH 🍫
    // ============================================================
    {
      id: "HASH",
      name: "🍩 HASH 🧸",
      type: "Hash",
      quality: "🍫 Hashish",
      image: "CategHash.png",
      products: [
        /* {
          id: "Papaya Sorbet 🍧",
          flag: "🇪🇸",
          name: "Papaya Sorbet 🍧",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "Hash",
          selectionType: "Hash",
          featured: true,
          image: "ProductPS.png",
          video: "VideoPS.mov",
          description:
            "🇪🇸 Papaya Sorbet 🇪🇸\n\nUne extraction premium au profil aromatique intensément fruité. Texture malléable et fondante, offrant une diffusion de saveurs exotiques douces et sucrées dès les premières notes.\n\n🍧 Arômes de fruits tropicaux et de papaye\n✨ Texture crémeuse et combustion propre\n🏆 Recommandé pour les connaisseurs à la recherche d'un profil terpénique exotique et marqué.",
          tarifs: [
            { weight: "5G", price: 50.0 },
            { weight: "20G", price: 180.0 },
            { weight: "50G", price: 400.0 },
            { weight: "100G", price: 650.0 },
          ],
        }, */
         {
          id: "Mario 🍄",
          flag: "🇪🇸",
          name: "Mario 🍄",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "🧽 Jaune Mousseux 🧽",
          selectionType: "🧽 Jaune Mousseux 🧽",
          featured: true,
          image: "ProductM.png",
          video: "VideoM.Mov",
          description:
            "🇪🇸 Moula 🇪🇸\n\nUn produit propre, accessible et efficace, avec une texture agréable et une odeur bien présente. Idéal pour ceux qui cherchent une valeur sûre sans se ruiner.\n\n🍫 Goût classique, bonne tenue, qualité régulière.\n💰 Très bon choix pour les petits comme les gros formats.",
          tarifs: [
            { weight: "1OG", price: 50.0 },
            { weight: "50G", price: 200.0 },
            { weight: "100G", price: 350.0 },
          ],
        },
        {
          id: "Forbiden fruit X Honey banana🍌 ",
          flag: "🇪🇸",
          name: "Forbiden fruit X Honey banana🍌",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "⚛️ Dry Sift ⚛️",
          selectionType: "⚛️ Dry ⚛️",
          featured: true,
          image: "ProductFFH.png",
          video: "VideoFFH.mov",
          description:
          "🇪🇸 Forbidden Fruit X Honey banana🍌 \n\nUne sélection au profil fruité et marqué. Belle texture, odeur sucrée et rendu premium, parfait pour ceux qui cherchent une sélection avec du caractère.\n\n🍓 Notes fruitées et gourmandes\n💎 Qualité bien travaillée\n🔥 Produit sélectionné pour son goût, son visuel et sa finition propre.",
          tarifs: [
            { weight: "5G", price: 60.0 },
            { weight: "25G", price: 200.0 },
          ],
        },
         /* {
          id: "Yellow melon",
          flag: "🇪🇸",
          name: "Yellow melon 🍈",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "⚛️ Dry 220/105u ⚛️",
          selectionType: "⚛️ Dry ⚛️",
          featured: true,
          image: "ProductYM.png",
          video: "VideoYM.mov",
          description:
          "🇪🇸 Yellow Melon 🍈 🇪🇸\n\nDry 220/105u avec un profil fruité, doux et légèrement sucré. Une sélection agréable, propre et parfumée, parfaite pour ceux qui aiment les notes melon et fruit jaune.\n\n🍈 Arômes fruités et sucrés\n✨ Texture propre et régulière\n💛 Une sélection douce avec une belle présence aromatique.",
          tarifs: [
            { weight: "5G", price: 60.0 },
          ],
        },
        {
          id: "banana Modified",
          flag: "🇪🇸",
          name: "Banana Modified 🍌",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "⚛️ Dry 220/105u ⚛️",
          selectionType: "⚛️ Dry ⚛️",
          featured: true,
          image: "ProductBM.png",
          video: "VideoBM.mov",
          description:
          "🇪🇸 Banana Modified 🍌 🇪🇸\n\nDry 220/105u au profil gourmand, avec des notes banane et une touche plus crémeuse. Texture agréable, odeur douce et rendu bien travaillé.\n\n🍌 Notes banane sucrées\n🍯 Profil rond et gourmand\n🏆 Une sélection originale pour ceux qui veulent changer des classiques.",
          tarifs: [
            { weight: "5G", price: 60.0 },
          ],
        },
        {
          id: "Alien cookies OG ",
          flag: "🇪🇸",
          name: "Alien cookies OG",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
           type: "⚛️ Dry 220/105u ⚛️",
           selectionType: "⚛️ Dry ⚛️",
          featured: true,
          image: "ProductACO.png",
          video: "VideoACO.mov",
          description:
          "🇪🇸 Alien Cookies OG 🇪🇸\n\nUne sélection Dry 220/105u propre et bien travaillée, avec un profil aromatique gourmand et légèrement épicé. Texture agréable, visuel soigné et odeur qui ressort bien à l’ouverture.\n\n🍪 Notes cookies douces et terreuses\n✨ Texture propre et facile à travailler\n🏆 Une valeur sûre pour ceux qui aiment les sélections classiques avec du goût.",
          tarifs: [
            { weight: "5G", price: 60.0 },
          ],
        },
         {
          id: "Honey Gas",
          flag: "🇪🇸",
          name: "Honey Gas 🍯",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "⚛️ Dry 220/105u ⚛️",
          selectionType: "⚛️ Dry ⚛️",
          featured: true,
          image: "ProductHG.png",
          video: "VideoHG.mov",
          description:
          "🇪🇸 Honey Gas 🍯 🇪🇸\n\nDry 220/105u avec un profil sucré et gas. Une sélection équilibrée entre douceur mielleuse et notes plus lourdes, avec une texture propre et une belle odeur.\n\n🍯 Arômes doux et gourmands\n⛽ Notes gas bien présentes\n✨ Bon choix pour ceux qui veulent du goût et une belle finition.",
          tarifs: [
            { weight: "5G", price: 60.0 },
          ],
        },
          {
          id: "Muel Fuel",
          flag: "🇪🇸",
          name: "Muel Fuel ⛽",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "⚛️ Dry 220/105u ⚛️",
          selectionType: "⚛️ Dry ⚛️",
          featured: true,
          image: "ProductMF.png",
          video: "VideoMF.mov",
          description:
          "🇪🇸 Muel Fuel ⛽ 🇪🇸\n\nDry 220/105u au profil plus gas et intense. Texture propre, odeur marquée et rendu visuel soigné, sélectionné pour ceux qui aiment les profils lourds.\n\n⛽ Notes gas dominantes\n🔥 Profil aromatique bien présent\n🏆 Produit simple, propre et efficace niveau goût.",
          tarifs: [
            { weight: "5G", price: 60.0 },
          ],
        },
        {
          id: "Dry Horchata x grappe gaz",
          flag: "🇪🇸",
          name: "Horchata x grappe gaz 🍇",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "Hash",
          selectionType: "⚛️ Dry ⚛️",
          featured: true,
          image: "ProductHGG.png",
          video: "VideoHGG.mov",
          description:
  "🇪🇸 Horchata x Grape Gas 🍇 🇪🇸\n\nUne sélection Dry au profil gourmand et fruité, avec des notes douces type horchata mélangées à un côté grape plus marqué. Texture propre, odeur agréable et rendu bien travaillé.\n\n🍇 Notes raisin et fruits sucrés\n🥛 Profil crémeux et gourmand\n🏆 Une sélection originale pour ceux qui aiment les goûts doux avec une belle présence aromatique.",
          tarifs: [
            { weight: "5G", price: 70.0 },
            { weight: "10G", price: 130.0 },
          ],
        },
         {
          id: "Forbidden fruit ",
          flag: "🇪🇸",
          name: "Forbidden fruit ⛔",
          farm: "💎 VVS TANGER 💎",
          promoEligible: true,
          type: "⚛️ Dry 220/105u ⚛️",
          selectionType: "⚛️ Dry ⚛️",
          featured: true,
          image: "ProductFF.png",
          video: "VideoFF.mov",
          description:
          "🇪🇸 Forbidden Fruit ⛔ 🇪🇸\n\nUne sélection VVS 220/105u au profil fruité et marqué. Belle texture, odeur sucrée et rendu premium, parfait pour ceux qui cherchent une sélection avec du caractère.\n\n🍓 Notes fruitées et gourmandes\n💎 Qualité VVS bien travaillée\n🔥 Produit sélectionné pour son goût, son visuel et sa finition propre.",
          tarifs: [
            { weight: "5G", price: 70.0 },
            { weight: "10G", price: 130.0 },
          ],
        }, */
         /* {
          id: "Lemon Schocker x Tazmania 🍋",
          flag: "🇪🇸",
          name: "Lemon Schocker x Tazmania 🍋",
          farm: "💎 VVS TANGER 💎",
          promoEligible: true,
          type: "⚡ Frozen Sift ⚡",
          selectionType: "⚡ Frozen Sift ⚡",
          featured: true,
          image: "ProductLST.png",
          video: "VideoLST.mov",
          description:
          "🇪🇸 Lemon Schocker x Tazmania 🍋 🇪🇸\n\nFrozen Sift 160/90u avec un profil citronné, frais et bien marqué. Une sélection propre, aromatique et travaillée, avec une belle intensité au nez.\n\n🍋 Notes citronnées et fraîches\n❄️ Qualité Frozen Sift\n💎 Produit premium pour les amateurs de profils fruités/acides.",
          tarifs: [
            { weight: "5G", price: 90.0 },
            { weight: "10G", price: 180.0 },
          ],
        }, */
         {
          id: "Fresh Frozen X 24K 🧊",
          flag: "🇪🇸",
          name: "Fresh Frozen X 24K 🧊",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "🍯 Frozen 160/73u 🍯",
          selectionType: "🍯 Frozen 160/73u 🍯",
          featured: true,
          image: "ProductF24.png",
          video: "VideoF24.mov",
          description:
          "",
          tarifs: [
            { weight: "5G", price: 80.0 },
            { weight: "10G", price: 150.0 },
          ],
        },
         {
          id: "Panna cotta ",
          name: "Panna cotta 🍮",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          customerFavorite: true,
          type: "Hash",
          selectionType: "🔮 Plasma Static 🔮",
          featured: true,
          image: "ProductPNC.png",
          video: "VideoPNC.mov",
          description:
              "🇪🇸 Panna Cotta 🍮 🇪🇸\n\nPlasma Static au profil doux, crémeux et gourmand. Une sélection premium avec une belle texture et une odeur sucrée qui rappelle les desserts vanillés.\n\n🍮 Notes dessert et crème\n🔮 Qualité Plasma Static\n✨ Produit bien fini, idéal pour les amateurs de profils doux et travaillés.",
          tarifs: [
            { weight: "5G", price: 120.0 },
            { weight: "10G", price: 220.0 },
          ],
        },
       /*  {
          id: "GRAPES N CREAM",
          flag: "🇪🇸",
          name: "GRAPES N CREAM 🍦",
          farm: "💎 VVS TANGER 💎",
          promoEligible: true,
          type: "💎 Static VVS 💎",
          selectionType: "💎 Static VVS 💎",
          featured: true,
          image: "ProductGNC.png",
          video: "VideoGNC.mov",
          description:
          "🇪🇸 Grapes N Cream 🍦 🇪🇸\n\nStatic VVS 160/73u avec un profil crémeux et fruité. Une sélection bien finie, avec une texture premium et une odeur douce qui rappelle les notes raisin/crème.\n\n🍇 Arômes fruités type grape\n🍦 Notes crémeuses et sucrées\n💎 Sélection Static VVS pour les amateurs de produits bien travaillés.",
          tarifs: [
            { weight: "5G", price: 120.0 },
            { weight: "10G", price: 220.0 },
          ],
        }, */
       /*  {
          id: "London Pound Cake",
          flag: "🇪🇸",
          name: "London Pound Cake 🍰",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "🔮 Plasma Static 🔮",
          selectionType: "🔮 Plasma Static 🔮",
          featured: true,
          image: "ProductLPC.png",
          video: "VideoLPC.mov",
          description:
          "🇪🇸 London Pound Cake 🍰 🇪🇸\n\nPlasma Static au profil gourmand, doux et légèrement pâtissier. Texture propre, aspect premium et belle présence aromatique dès l’ouverture.\n\n🍰 Notes cake sucrées et crémeuses\n⚡ Qualité Plasma Static\n🏆 Une sélection haut de gamme pour ceux qui aiment les profils doux et travaillés.",
          tarifs: [
            { weight: "5G", price: 120.0 },
            { weight: "10G", price: 200.0 },
          ],
        }, */
        /*  {
                            id: 'Honey Gas',
                            flag: '🇪🇸',
                            name: 'Honey Gas 220/105u 🍯',
                            farm: 'Nice\'Selection 🧞',
                            promoEligible: true,
                            type: 'Hash',
                            featured: true,
                            image:'ProductHHH.png',
                            video:'VideoH22.mov',
                            /* videos:['VideoH2.mov','VideoH3.mov'],
                            description: '🍯 Honey Gas 🍯\n\n🏜️ Dry 220/105u 🏜️\n\nUne sélection bien travaillée avec un profil sucré et gas, entre douceur mielleuse et notes plus lourdes en bouche. Texture propre, odeur marquée et rendu premium.\n\n🍯 Arômes gourmands\n⛽ Notes gas bien présentes\n🔥 Produit fait pour les connaisseurs qui veulent du goût et de la qualité.',                            
                            tarifs: [
                                { weight: '5G', price: 60.00 },
                                { weight: '1OG', price: 110.00 },         
                                { weight: '50G', price: 450.00 },
                                { weight: '100G', price: 800.00 },
                            ]
                    }, */
       /*  {
          id: "Olivette 🫒",
          flag: "🇺🇸",
          name: "🥭 Forbidden Fruit 🍓",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "🪬 Static 🪬",
          selectionType: "🪬 Static 🪬",
          featured: true,
          image: "ProductO.png",
          video: "VideoO.mov",
          description:
            "Olivette 🫒 \n 🪬 Static 🪬\n\nUne texture fraîche et travaillée, avec un rendu propre et une belle intensité aromatique. Produit sélectionné pour son aspect premium et son côté bien parfumé.\n\n❄️ Qualité Static\n🫒 Texture soignée\n🏆 Idéal pour ceux qui aiment les produits rares et bien finis.",
          tarifs: [{ weight: "1OG", price: 180.0 }],
        }, */
       /*  {
          id: "Frozen buffy 🇹🇭🇺🇸",
          flag: "🇺🇸",
          name: "Frozen buffy 🇹🇭🇺🇸",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          featured: true,
          type: "❄️ Frozen ❄️",
          selectionType: "❄️ Frozen ❄️",
          image: "ProductFB1.png",
          video: "VideoFB1.mp4", */
          /* image: 'ProductSift.jpg',
                            images: ['ProductSift.jpg','ProductTangier.jpg','ProductGrappe.jpg'],
                            videos: [
                                'VideoTangier.mp4', // Ta 1ère vidéo
                                'VideoGrappe.mp4', // Ta 1ère vidéo
                                'VideoSift.mov', // Ta 1ère vidéo
                                'VideoSift2.mov'  // Ta 2ème vidéo
                            ], */
         /*  description:
            "🇹🇭🇺🇸 Frozen Buffy 🇹🇭🇺🇸\n\n Une sélection frozen haut de gamme avec plusieurs saveurs disponibles. Produit très parfumé, texture premium et profil aromatique bien travaillé.\n\n🔥 Une gamme lourde pour ceux qui veulent du choix, du goût et une vraie qualité.",
          // 👇 NOUVELLE STRUCTURE
          variantTitle: "Saveurs Frozen ❄️ :",
          jars: [
            { name: "GRAPPE GAS", emoji: "🍇", colorClass: "style-grappe" },
            { name: "MELANCOTONE", emoji: "🍑", colorClass: "style-passion" },
            { name: "RS CHERRY", emoji: "🍮", colorClass: "style-red" },
            {
              name: "HANSOLO BURGER",
              emoji: "🍊",
              colorClass: "style-tangier",
            },
            { name: "ZUSHI X MINT", emoji: "💨💨", colorClass: "style-gmo" },
          ],

          tarifs: [
            { weight: "1OG", price: 200.0 },
            { weight: "20G", price: 300.0 },
            { weight: "50G", price: 700.0 },
            { weight: "100G", price: 1300.0 },
          ],
        }, */
      ],
    },
    // ============================================================
    // CATEGORIE 1 : BEUH 🌿
    // ============================================================
    {
      id: "BEUH",
      name: "💐 BEUH 💜",
      type: "Fleurs",
      quality: "🌿 Fleurs",
      image: "CategWeed.png",
      products: [
        {
          id: "Dark pineapple",
          flag: "🇺🇸",
          name: "Dark pineapple 🍍",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
                    type: "🌿 Weed 🌿",
          selectionType: "🌴 CALI 🌴",
          featured: true,
          image: "ProductDP.png",
          video: "VideoDP.mp4",
          description:
               "🍍🌴 DARK PINEAPPLE — NICE'SELECTION 🌴🍍\n\nUne sélection Cali au profil fruité, tropical et gourmand. Dark Pineapple se distingue par une belle intensité aromatique, mêlant la douceur de l’ananas mûr à une touche plus profonde et légèrement crémeuse, pour un rendu moderne et très agréable. 🇺🇸🔥\n\n👃 Profil aromatique :\n🍍 Ananas sucré et tropical\n🍬 Notes candy fruitées\n🍦 Fond doux et légèrement crémeux\n🌿 Nuance végétale propre\n🌙 Petite finition plus sombre et résineuse\n\n👅 Goût :\nEn bouche, Dark Pineapple développe une attaque fruitée et sucrée, avec une vraie présence tropicale. Le profil devient ensuite plus rond et gourmand, avec une finale propre, douce et légèrement résineuse qui reste bien en bouche. 😮‍💨🍍\n\n🌿 Qualité & sélection :\n💎 Sélection Cali premium\n✨ Profil fruité bien marqué\n☁️ Dégustation douce et parfumée\n🔥 Belle rondeur aromatique\n🧞 Sélection signée Nice'Selection\n\n🏆 Le verdict :\nUne variété parfaite pour les amateurs de profils tropicaux, sucrés et modernes. Dark Pineapple combine fraîcheur fruitée, rondeur gourmande et finition premium dans une sélection originale et très propre. 🍍🌴🔥",
          tarifs: [
            { weight: "4,5G", price: 50.0 },
          ],
        },
        {
          id: "pink runtz",
          flag: "🇺🇸",
          name: "🎀 Pink Runtz 🎀",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
                    type: "🌿 Weed 🌿",
          selectionType: "🌴 CALI 🌴",
          featured: true,
          image: "ProductPR.png",
          video: "VideoPR.mov",
          description:
               "🇺🇸 Pink Runtz 🎀 🇺🇸\n\nUne Cali au profil gourmand, fruité et sucré, avec une belle présence aromatique dès l’ouverture. Une sélection soignée qui mélange des notes candy et fruitées dans un profil doux et agréable.\n\n🎀 Notes fruitées et sucrées\n🍬 Profil candy et gourmand\n🌿 Fleurs bien présentées et sélectionnées avec soin\n✨ Une Cali idéale pour les amateurs de profils doux, parfumés et travaillés.",
          tarifs: [
            { weight: "4,5G", price: 50.0 },
          ],
        },
         /* {
          id: "biscotti banana",
          flag: "🇺🇸",
          name: "Biscotti banana 🍌",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
                    type: "🌿 Weed 🌿",
          selectionType: "🌴 CALI 🌴",
          featured: true,
          image: "ProductBB.png",
          video: "VideoBB.mov",
          description:
              "🇺🇸 Biscotti Banana 🍌 🇺🇸\n\nUne fleur au profil gourmand, entre notes biscuitées et touche banane sucrée. Belle présentation, odeur douce à l’ouverture et sélection agréable pour ceux qui aiment les profils fruités.\n\n🍌 Notes banane et biscuit\n🌿 Fleurs propres et bien présentées\n✨ Une sélection douce avec un bon rendu aromatique.",
          tarifs: [
            { weight: "4,5G", price: 50.0 },
          ],
        },
         {
          id: "raimbow sherbet 11",
          flag: "🇺🇸",
          name: "Raimbow sherbet 11 🪖",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
                    type: "🌿 Weed 🌿",
          selectionType: "🌴 CALI 🌴",
          featured: true,
          image: "ProductRS1.png",
          video: "VideoRS1.mov",
          description:
              "🇺🇸 Rainbow Sherbet 11 🪖 🇺🇸\n\nUne fleur au profil fruité et sucré, inspirée des notes sherbet. Belle structure, odeur fraîche et rendu visuel propre.\n\n🌈 Notes fruitées et légèrement acidulées\n🍬 Profil sucré et agréable\n🏆 Une sélection sympa pour ceux qui aiment les goûts doux et parfumés.",
          tarifs: [
            { weight: "4,5G", price: 50.0 },
          ],
        }, */
         {
          id: "Amnesia hollandaise 🇳🇱",
          flag: "🇳🇱",
          name: "Amnesia hollandaise 🇳🇱",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "🌿 Weed 🌿",
          selectionType: "🌿 Weed 🌿",
          featured: true,
          image: "ProductHO.png",
          video: "VideoHO.mov",
          description:
            "🇳🇱 Amnesia Hollandaise 🇳🇱\n\nL'incontournable classique des coffee shops. Une structure florale dense et résineuse, libérant un parfum terreux profond avec des notes acidulées et d'agrumes caractéristiques.\n\n🍋 Notes citronnées et boisées intenses\n🌿 Fleurs compactes et manucure soignée\n⚡️ Une valeur sûre garantissant une expérience optimale et un goût authentique.",
          tarifs: [
            { weight: "6G", price: 50.0 },
            { weight: "50G", price: 350.0 },
            { weight: "100G", price: 600.0 },
          ],
        },
       /*  {
          id: "Gold Dream Runtz🇺🇸🇹🇭",
          flag: "🇺🇸",
          name: "Gold Dream Runtz🇺🇸🇹🇭",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "🌿 Weed 🌿",
          selectionType: "🌿 Weed 🌿",
          featured: true,
          image: "ProductGDR.png",
          video: "VideoGDR.mov",
          description:
  "🇺🇸🇹🇭 Gold Dream Runtz 🇺🇸🇹🇭\n\nUne fleur au profil gourmand et fruité, avec une belle présence visuelle et une odeur douce dès l’ouverture. Sélection propre, bien manucurée et agréable pour ceux qui aiment les profils sucrés.\n\n💛 Notes fruitées et candy\n🌿 Fleurs soignées avec belle structure\n🏆 Une sélection premium au rendu propre et parfumé.",
          tarifs: [
            { weight: "4.5G", price: 50.0 },
            { weight: "50G", price: 450.0 },
            { weight: "100G", price: 800.0 },
          ],
        }, */
        /*   {
                            id: 'Sunset Shark 🦈',
                            flag: '🇺🇸',
                            name: 'Sunset Shark 🦈',
                            farm: 'Nice\'Selection 🧞',
                            promoEligible: true,
                            type: 'Weed',
                            featured: true,
                            image:'ProductUS1.png',
                            video:'VideuUS.mov',
                            description: '🇺🇸 Cali USA 🇺🇸\n\nUne fleur au profil bien marqué, avec une belle présence visuelle et une odeur qui ressort direct à l’ouverture. Texture propre, rendu premium et goût travaillé.\n\n💎 Sélection idéale pour ceux qui aiment les produits bien finis, parfumés et efficaces en bouche.\n🔥 Une valeur sûre pour les amateurs de qualité US.',                            
                            tarifs: [
                                { weight: '3.5G', price: 50.00 },               
                                { weight: '50G', price: 500.00 },
                            ]
                    }, */
        /*  {
                            id: 'Amnesia haze 🇪🇸',
                            flag: '🇪🇸',
                            name: 'Amnesia haze 🇪🇸',
                            farm: 'Nice\'Selection 🧞',
                            promoEligible: true,
                            type: 'Weed',
                            featured: true,
                            image:'ProductU.png',
                            video:'VideuU.mov',
                            description: '🇪🇸 Amnesia Haze 🇪🇸\n\nUn grand classique, frais et parfumé, avec des notes végétales, citronnées et légèrement épicées. Une fleur simple, efficace et agréable au quotidien.\n\n🌿 Belle odeur, bon goût, combustion propre.\n👌 Parfait pour ceux qui veulent un produit fiable avec un bon rapport qualité/prix.',                            tarifs: [
                                { weight: '5.5G', price: 50.00 },               
                                { weight: '50G', price: 350.00 },
                                { weight: '100G', price: 600.00 },
                            ]
                    }, */
      ],
    },
 
  ];

  /* {
                    id: '💥 PACK 600 💥',
                    flag: '🎁',
                    name: '💥 PACK 600 💥',
                    farm: '🚨 MEGA PACK 2026 📅',
                    promoEligible: false, // En général pas de code promo sur les packs déjà remisés
                    type: 'Pack',
                    image: '', // L'image du pack
                    video: '', // Tu peux mettre une vidéo de l'ensemble si tu as
    
                    // 'targetId' doit être l'ID EXACT du produit vers lequel tu veux aller
                    packContents: [
                        { name: '25g : Cali 🇨🇦💎', targetId: 'PurpleBud' },
                        { name: '20g : Frozen Sift 🫒❄️', targetId: 'Frozensift' },
                        { name: '20g : Fresh Frozen 🪵🧊', targetId: 'Buchettes' },
                    ],
                    
                    // Description formatée avec les sauts de ligne
                    description: 'Qualité lourde, terps ouverts à fond 🤤🌿🔥',
                    
                    tarifs: [
                        { weight: 'LE PACK 📦', price: 600.00 },
                    ]
                } */
  /*   {
                            id: '❄️ FRESH FROZEN 🔥',
                            flag: '🇲🇦',
                            name: '❄️ Fresh Frozen 🔥',
                            farm: '🏠 FROZEN NO FARMZ',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductP.jpg',
                            images: ['ProductP.jpg','ProductP1.jpg',],
                            videos: ['VideoP.mp4','VideoP1.mp4'],
                            description: '❄️🔥 FRESH FROZEN – SINGLE SOURCE – P420 🔥❄️ \n\n 🌱 Produit 100% Single Source \n ➡️ De la plante à l’extraction, maîtrise totale \n ❄️ Extraction Fresh Frozen pour garder tous les arômes & terpènes \n 💎 Qualité premium, goût intense, texture onctueuse \n\n 🧬 2 STRAINS DISPONIBLES : \n\n 🔬 GMO \n  ⛽🧄 Ultra puissant, gazzy, lourd en bouche \n 👉 Parfait pour les amateurs de sensations fortes \n\n 🍓 Lamponie \n 🍬 Fruité, sucré, notes de framboise \n 👉 Smooth, gourmand, super parfumé \n\n 💸🤝 Pas cher la team \n 🔥 On arrange MAX sur les prix \n 📦 Qualité au top, dispo limitée \n\n 🚀💨 Du vrai fire, pour les vrais connaisseurs 💨🚀',
                             // 👇 NOUVELLE STRUCTURE
                             variantTitle: 'Saveurs Frozen ❄️ :', 
                             jars: [
                                 { name: 'GMO', emoji: '🔬', colorClass: 'style-gmo' },
                                 { name: 'Lamponie', emoji: '🍓', colorClass: 'style-lampo' },
                             ],
 
                            tarifs: [
                                { weight: '10g', price: 100.00 },
                                { weight: '25g', price: 200.00 },
                                { weight: '50g', price: 300.00 },
                                { weight: '100g', price: 600.00 },
                            ]
                        },
                        {
                            id: 'Buchettes',
                            flag: '🇲🇦',
                            name: 'Buchettes 🪵',
                            farm: 'Singe Source ♻️',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductBuchettes.jpg',
                            videos: [
                                'VideoBuch.mov', // Ta 1ère vidéo
                                'VideoBuch2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🎄❄️ Exclu Uniquement chez nous Noël chez PISTACHIO420 🌿🔥\n\n ~ Extraction haut de gamme, arômes ultra frais✨ \n ~ texture propre et qualité premium 🥇 \n\n 🎄😮‍💨 Cette année, la bûche de Noël se déguste aussi en version Fresh Frozen ❄️🔥',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :', 
                            jars: [
                                { name: 'RS11', emoji: '💨💨', colorClass: 'style-purple' },
                                { name: 'I.C.C', emoji: '🍦🍦', colorClass: 'style-brown' },
                            ],

                            tarifs: [
                                { weight: '🪵x1', price: 130.00 },               
                                { weight: '🪵x2', price: 250.00 },
                                { weight: '🪵x4', price: 420.00 },


                            ]
                        },
                        {
                            id: 'Frozensift',
                            flag: '🇲🇦',
                            name: '🫒 Frozen sift ⚡️🏆',
                            farm: '🌾 No Farm 🌾',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSift.jpg',
                            images: ['ProductSift.jpg','ProductTangier.jpg','ProductGrappe.jpg'],
                            videos: [
                                'VideoTangier.mp4', // Ta 1ère vidéo
                                'VideoGrappe.mp4', // Ta 1ère vidéo
                                'VideoSift.mov', // Ta 1ère vidéo
                                'VideoSift2.mov'  // Ta 2ème vidéo
                            ],
                            description: '🏠 No FARMZ incroyable 🏆   \n Vous les connaissait déjà produit plus que satisfaisant 🥇\n  Sec pétante 🫡\n Défonce super présente ces pour les gros pec 🤓\n 130 chez nous 😋😋\n On me chuchote que sa les vend 170 en I.D.F 🤭🤭',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Saveurs Frozen ❄️ :',
                            jars: [
                                { name: 'POISON', emoji: '💀', colorClass: 'style-purple' },
                                { name: 'PANNACOTA', emoji: '🍮', colorClass: 'style-red' },
                                { name: 'TANGIER', emoji: '🍊', colorClass: 'style-tangier' },
                                { name: 'GRAPPE', emoji: '🍇', colorClass: 'style-grappe' },
                            ],

                            tarifs: [
                                { weight: '🫒x1', price: 130.00 },               
                                { weight: '🫒x3', price: 350.00 },
                                { weight: '🫒x5', price: 500.00 },
                            ]
                        },
                        
                        {
                            id: 'FrozenSource',
                            flag: '⚡️',
                            name: '🇲🇦Frozen Sift Hash ⚡️🌬️',
                            farm: 'LA SOURCE 🥇',
                            promoEligible: true,
                            type: 'Hash',
                            image: 'ProductSource.png',
                               images: [
                                'ProductSource.png',
                                'ProductSource2.jpg',
                            ],
                            videos: [
                                'VideoSource.mov', // Ta 1ère vidéo
                                'VideoSource2.mov'  // Ta 2ème vidéo
                            ],
                            description: '~ Saison 2026 🪐 \n La source 🏠 Nous à sortie un ❄️ magnifique 🔥 \n Le goût l’odeur tout et la 🏆 \n Juste les vidéo donne envie 😋',

                            // 👇 NOUVELLE STRUCTURE
                            variantTitle: 'Choisis ton goût 🥣 :',
                            jars: [
                                { name: 'Pink passion', emoji: '👛❤️‍🔥', colorClass: 'style-passion' },
                                { name: 'Water melon ', emoji: '🍈 💦', colorClass: 'style-melon' }
                            ],

                            tarifs: [
                                { weight: '10g', price: 130.00 },
                                { weight: '25g', price: 250.00 },
                                { weight: '50g', price: 370.00 },
                            ]
                        } */

  // --- VARIABLES D'ÉTAT ---
  let cart = [];
  let currentFilters = {
    searchTerm: "",
    quality: "all",
    farm: "all",
  };
  let currentView = "categories"; // 'categories', 'farms', ou 'products'
  let currentCategoryId = null; // Garde en mémoire la catégorie sélectionnée
  let currentFarmId = null; // Garde en mémoire la farm sélectionnée
  let appliedPromo = null; // Pour suivre le code promo
  let paymentMethod = "Espèce"; // Méthode de paiement par défaut
  let notificationTimeout = null; // Timer pour la notification panier
  let selectedFreeGift = ""; // Poche offerte choisie par le client
  let rouletteSpun = false; // Est-ce que la roulette a déjà été jouée
let rouletteWon = false; // Résultat de la roulette
const roulettePrizeLabel = "🎁 Packet Philip Moris Offert"; // Lot affiché si le client gagne

  // --- DÉFINIS TES CODES PROMO ICI ---
  const validPromoCodes = {
    ACTUPLUG33: {
      type: "fixed", // 'percent' (pourcentage) ou 'fixed' (fixe)
      value: 10, // 20%
      appliesTo: "eligible", // 'eligible' (articles marqués) ou 'all' (tout le panier)
      cumulative: false, // <-- AJOUTE CETTE LIGNE
    },
    BACKPACK10: {
      type: "fixed", // 'percent' (pourcentage) ou 'fixed' (fixe)
      value: 10, // 20%
      appliesTo: "eligible", // 'eligible' (articles marqués) ou 'all' (tout le panier)
      cumulative: false, // <-- AJOUTE CETTE LIGNE
    },
    /*  "WELCOME5": {
             type: 'percent',   // 20%
             value: 20,        // 20%
             appliesTo: 'all' // S'applique à tout
         } */
    // Ajoute d'autres codes ici

    // ADD CUMULABLE FONCTION POUR PLUTARD
  };

  // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
  const pages = document.querySelectorAll(".page");
  const productListContainer = document.getElementById("product-list");
  const loaderPage = document.getElementById("page-loader");

  const filterContainer = document.querySelector(".filters");

  // --- NOUVEAUX SÉLECTEURS POUR CHAQUE FILTRE ---
  const searchFilterWrapper =
    document.getElementById("search-filter").parentElement;
  const qualityFilterWrapper =
    document.getElementById("quality-filter").parentElement;
  const farmFilterWrapper =
    document.getElementById("farm-filter").parentElement;
  // --- FIN NOUVEAUX SÉLECTEURS ---

  // --- HELPER : TROUVER UN PRODUIT PAR SON ID ---
  function getProductById(productId) {
    for (const category of appData) {
      // 1. Cherche dans les produits directs (Nouveau cas)
      if (category.products) {
        const product = category.products.find((p) => p.id === productId);
        if (product) return product;
      }

      // 2. Cherche dans les farms (Ancien cas)
      if (category.farms) {
        for (const farm of category.farms) {
          const product = farm.products.find((p) => p.id === productId);
          if (product) return product;
        }
      }
    }
    return undefined; // Non trouvé
  }

  // --- NAVIGATION ---
  function showPage(pageId) {
     document.querySelectorAll('video').forEach(video => {
            video.pause();
        });

    pages.forEach((p) => p.classList.remove("active"));
    // S'assure que la page existe avant de l'activer
    const page = document.getElementById(pageId);
    if (page) {
      page.classList.add("active");
    }

    // --- GESTION AUTOMATIQUE DES BOUTONS NAV ---
    const homeNav = document.getElementById("nav-menu");
    const infoNav = document.getElementById("nav-info"); // On ajoute l'info
    const contactNav = document.getElementById("nav-contact");
    const avisNav = document.getElementById("nav-avis"); // <-- AJOUT ICI
    const cartNav = document.getElementById("nav-cart");

    // On reset tout
    homeNav.classList.remove("active");
    infoNav.classList.remove("active");
    contactNav.classList.remove("active");
    if (avisNav) avisNav.classList.remove("active"); // <-- AJOUT ICI
    if (cartNav) cartNav.classList.remove("active");

    // On active le bon
    if (pageId === "page-contact") {
      contactNav.classList.add("active");
    } else if (pageId === "page-info") {
      infoNav.classList.add("active");
    } else if (pageId === "page-cart" || pageId === "page-confirmation") {
      if (cartNav) cartNav.classList.add("active");
    } else if (pageId === "page-avis") {
      if (avisNav) avisNav.classList.add("active");
    } else {
      homeNav.classList.add("active");
    }
  }

  // --- LOGIQUE D'AFFICHAGE ---

  // --- MODIFIÉ : renderHomePage ---

  function renderHomePage() {
    // Toujours afficher les filtres
    filterContainer.style.display = "flex";

    // On enlève les anciens boutons retour si jamais ils existent
    const existingBackBtnCat = filterContainer.querySelector(
      ".back-to-categories-btn",
    );
    if (existingBackBtnCat) existingBackBtnCat.remove();

    const existingBackBtnFarm =
      filterContainer.querySelector(".back-to-farms-btn");
    if (existingBackBtnFarm) existingBackBtnFarm.remove();

    // Sur l'accueil : recherche + sélection du chef
    searchFilterWrapper.style.display = "flex";
    qualityFilterWrapper.style.display = "flex";

    // On cache le filtre farm sur l'accueil
    farmFilterWrapper.style.display = "none";

    // La grande grille contient des sections
    productListContainer.style.gridTemplateColumns = "1fr";
    productListContainer.style.gap = "25px";

    // Affiche tous les produits directement avec séparation
    renderCategoryList();
  }

  // --- FONCTION MODIFIÉE : Filtre intelligent par Sous-Catégorie ---
  function updateFarmFilter(categoryId, subCategoryId = null) {
    const category = appData.find((c) => c.id === categoryId);
    const farmFilter = document.getElementById("farm-filter");

    if (!category) return;

    let availableFarms = [];

    // CAS 1 : On est dans une sous-catégorie précise (ex: Cali USA)
    if (subCategoryId && category.farms) {
      const subCategory = category.farms.find((f) => f.id === subCategoryId);
      if (subCategory) {
        subCategory.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }
    // CAS 2 : On est dans une catégorie globale ou simple (ex: Packs Noel ou tout voir)
    else {
      if (category.farms) {
        // Si c'est une catégorie à tiroirs, on prend tout
        category.farms.forEach((sub) => {
          sub.products.forEach((p) => {
            if (p.farm) availableFarms.push(p.farm);
          });
        });
      } else if (category.products) {
        // Si c'est une catégorie simple
        category.products.forEach((p) => {
          if (p.farm) availableFarms.push(p.farm);
        });
      }
    }

    // 2. On enlève les doublons
    const uniqueFarms = ["all", ...new Set(availableFarms)];

    // 3. On génère le HTML
    const currentValue = currentFilters.farm;

    farmFilter.innerHTML = uniqueFarms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. On remet la valeur si elle existe toujours
    if (uniqueFarms.includes(currentValue)) {
      farmFilter.value = currentValue;
    } else {
      farmFilter.value = "all";
      currentFilters.farm = "all";
    }
  }

function renderCategoryList() {
    productListContainer.innerHTML = "";

    const searchTerm = currentFilters.searchTerm.toLowerCase().trim();
    let hasResults = false;

    function createProductCard(product) {
        const card = document.createElement("div");
        card.className = "product-card product-item-card";
        card.dataset.productId = product.id;

        if (product.type === "Pack" || product.id === "PackNoel2025") {
            card.classList.add("full-width");
        }

        if (product.clickable === false) {
            card.classList.add("unclickable");
        }

        const flagHTML = product.flag
            ? `<span class="product-flag">${product.flag}</span>`
            : "";

        const mediaHTML = product.image
            ? `<div class="product-media"><img src="${product.image}" alt="${product.name}"></div>`
            : `<div class="product-media product-media-empty"></div>`;

        const firstTarif = product.tarifs && product.tarifs.length > 0
            ? product.tarifs[0]
            : null;

        const priceHTML = firstTarif && typeof firstTarif.price === "number"
            ? firstTarif.price.toFixed(2) + "€"
            : "";

            const favoriteBadgeHTML = product.customerFavorite === true
    ? `<div class="customer-favorite-badge">❤️ PRÉFÉRÉ DES CLIENTS</div>`
    : "";

        card.innerHTML = `
    ${mediaHTML}
    ${favoriteBadgeHTML}

    <div class="info">
        <div class="name">${product.name} ${flagHTML}</div>
        <div class="farm">${product.farm}</div>
        <div class="price">${priceHTML}</div>
    </div>
`;

        return card;
    }

    appData.forEach((category) => {
        let productsInCategory = [];

        if (category.products) {
            productsInCategory = category.products.map((product) => ({
                product,
                category,
            }));
        }

        if (category.farms) {
            category.farms.forEach((farm) => {
                farm.products.forEach((product) => {
                    productsInCategory.push({
                        product,
                        category,
                        farm,
                    });
                });
            });
        }

        const filteredProducts = productsInCategory.filter(({ product, category }) => {
            const productName = product.name ? product.name.toLowerCase() : "";
            const productFarm = product.farm ? product.farm.toLowerCase() : "";
            const categoryName = category.name ? category.name.toLowerCase() : "";
            const selectionType = product.selectionType ? product.selectionType.toLowerCase() : "";

            const searchMatch =
                searchTerm === "" ||
                productName.includes(searchTerm) ||
                productFarm.includes(searchTerm) ||
                categoryName.includes(searchTerm) ||
                selectionType.includes(searchTerm);

            let selectMatch = true;

            if (currentFilters.quality === "chef") {
                selectMatch = product.featured === true;
            } else if (currentFilters.quality !== "all") {
                selectMatch = product.selectionType === currentFilters.quality;
            }

            return searchMatch && selectMatch;
        });

        if (filteredProducts.length === 0) return;

        hasResults = true;

        const section = document.createElement("section");
        section.className = `home-category-section category-${category.id}`;

        // ✅ BLANCHE / CC uniquement : affichage normal sans séparation
          if (category.id !== "HASH" && category.id !== "BEUH") {
            section.innerHTML = `
                <h2 class="home-category-title">${category.name}</h2>
                <div class="home-products-grid"></div>
            `;

            const grid = section.querySelector(".home-products-grid");

            filteredProducts.forEach(({ product }) => {
                grid.appendChild(createProductCard(product));
            });

            productListContainer.appendChild(section);
            return;
        }

        // ✅ HASH et BEUH : affichage séparé par selectionType
        section.innerHTML = `
            <h2 class="home-category-title">${category.name}</h2>
            <div class="home-selection-groups"></div>
        `;

        const groupsContainer = section.querySelector(".home-selection-groups");
        const groupedProducts = {};

        filteredProducts.forEach(({ product }) => {
            const groupName = product.selectionType || product.type || "Autres";

            if (!groupedProducts[groupName]) {
                groupedProducts[groupName] = [];
            }

            groupedProducts[groupName].push(product);
        });

        Object.keys(groupedProducts).forEach((groupName) => {
    const groupBlock = document.createElement("div");
    groupBlock.className = "selection-group-block";

    // Transforme le nom de la séparation en classe CSS propre
    const groupClass = groupName
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    groupBlock.classList.add(`group-${groupClass}`);

    groupBlock.innerHTML = `
        <h3 class="selection-group-title">${groupName}</h3>
        <div class="home-products-grid"></div>
    `;

            const grid = groupBlock.querySelector(".home-products-grid");

            groupedProducts[groupName].forEach((product) => {
                grid.appendChild(createProductCard(product));
            });

            groupsContainer.appendChild(groupBlock);
        });

        productListContainer.appendChild(section);
    });

    if (!hasResults) {
        productListContainer.innerHTML = '<p class="no-results">Aucun produit trouvé.</p>';
    }
}
  // --- NOUVELLE FONCTION ---
  // Affiche la liste des FARMS pour une catégorie
  // --- FONCTION MODIFIÉE : Affichage liste bouton ---
  function renderFarmList(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }

    const farms = category.farms;

    // On change le style de la grille pour avoir une seule colonne (liste verticale)
    productListContainer.style.gridTemplateColumns = "1fr";
    productListContainer.style.gap = "10px"; // Espacement entre les boutons

    productListContainer.innerHTML = "";
    if (farms.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucune farm trouvée.</p>';
      return;
    }

    farms.forEach((farm) => {
      const btn = document.createElement("div");
      // On change la classe pour ne plus utiliser le style "card"
      btn.className = "farm-list-btn";
      btn.dataset.farmId = farm.id;

      if (farm.clickable === false) {
        btn.classList.add("unclickable");
      }

      const productCount = farm.products.length;
      const countText = productCount > 0 ? `${productCount} prod.` : "";

      // Structure : Icone | Nom + Badge | Flèche
      btn.innerHTML = `
            <div class="farm-btn-left">
                
                <div class="farm-btn-info">
                    <span class="farm-btn-title">${farm.name}</span>
                    <span class="farm-btn-subtitle">${farm.badgeText || countText}</span>
                </div>
            </div>
            <div class="farm-btn-right">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6e6e73" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        `;
      productListContainer.appendChild(btn);
    });
  }

  // Affiche la liste des PRODUITS (Version corrigée : Pleine largeur + Sans image vide)
  function renderProductListSimple(categoryId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category || !category.products) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à cette catégorie.</p>';
      return;
    }

    // Mise à jour du filtre farm intelligent
    if (typeof updateFarmFilter === "function") updateFarmFilter(categoryId);

    // On filtre le tableau products
    const filteredProducts = category.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;
      return searchMatch && farmMatch;
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // --- 1. LOGIQUE PLEINE LARGEUR ---
      // Si c'est un Pack, on ajoute la classe spéciale
      if (product.type === "Pack" || product.id === "PackNoel2025") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) card.classList.add("unclickable");

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      // --- 2. LOGIQUE IMAGE (On affiche seulement si elle existe) ---
      let imgHTML = "";
      if (product.image && product.image !== "") {
        imgHTML = `<img src="${product.image}" alt="${product.name}">`;
      }

      card.innerHTML = `
            ${imgHTML}
            <div class="info">
                <div class="name">${product.name} ${flagHTML}</div>
                <div class="farm">${product.farm}</div> 
                <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
            </div>
        `;
      productListContainer.appendChild(card);
    });
  }
  // Affiche la liste des PRODUITS pour une farm
  function renderProductList(categoryId, farmId) {
    const category = appData.find((c) => c.id === categoryId);
    if (!category) {
      productListContainer.innerHTML =
        '<p class="no-results">Catégorie non trouvée.</p>';
      return;
    }
    const farm = category.farms.find((f) => f.id === farmId);
    if (!farm) {
      productListContainer.innerHTML =
        '<p class="no-results">Farm non trouvée.</p>';
      return;
    }
    const filteredProducts = farm.products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(currentFilters.searchTerm.toLowerCase());
      // On a supprimé 'qualityMatch'. Le choix de la catégorie suffit.
      const farmMatch =
        currentFilters.farm === "all" || product.farm === currentFilters.farm;

      return searchMatch && farmMatch; // On retourne sans le qualityMatch
    });

    productListContainer.innerHTML = "";
    if (filteredProducts.length === 0) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
      return;
    }

    filteredProducts.forEach((product) => {
      const card = document.createElement("div");
      card.className = "product-card product-item-card";
      card.dataset.productId = product.id;

      // Si c'est le Pack de Noël (vérifie bien que l'ID est correct), on met la classe large
      if (product.id === "PackNoel2025" || product.type === "Pack") {
        card.classList.add("full-width");
      }

      if (product.clickable === false) {
        card.classList.add("unclickable");
      }

      let flagHTML = product.flag
        ? `<span class="product-flag">${product.flag}</span>`
        : "";

      card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name} ${flagHTML}</div>
                    <div class="farm">${product.farm}</div>
                    <div class="price">${product.tarifs[0].price.toFixed(2)}€</div>
                </div>
            `;
      productListContainer.appendChild(card);
    });
  }

  // Affiche la page de détail d'un produit
  function renderProductPage(productId) {
    const product = getProductById(productId);
    if (!product) return;

    document.getElementById("product-page-title").innerText = product.name;
    const detailsContainer = document.getElementById("product-details-content");

    // --- 1. GESTION INTELLIGENTE DES MÉDIAS ---
    let galleryHTML = "";
    let hasMedia = false;

    // Images
    let mediaItems = [];
    if (product.images && product.images.length > 0) {
      mediaItems = product.images;
    } else if (product.image && product.image !== "") {
      mediaItems = [product.image];
    }

    if (mediaItems.length > 0) {
      hasMedia = true;
      galleryHTML += mediaItems
        .map(
          (imgSrc) => `
                <div class="gallery-item"><img src="${imgSrc}" alt="${product.name}"></div>
            `,
        )
        .join("");
    }

    // Vidéos
    if (product.videos && product.videos.length > 0) {
      hasMedia = true;
      product.videos.forEach((videoSrc) => {
        galleryHTML += `
                    <div class="gallery-item">
                        <video controls playsinline poster="${product.image || ""}">
                            <source src="${videoSrc}" type="video/mp4">
                        </video>
                    </div>`;
      });
    } else if (product.video && product.video !== "") {
      hasMedia = true;
      galleryHTML += `
                <div class="gallery-item">
                    <video controls playsinline poster="${product.image || ""}">
                        <source src="${product.video}" type="video/mp4">
                    </video>
                </div>`;
    }

    // --- 2. LE RESTE (OPTIONS, DESCRIPTION, TARIFS) ---

    // --- GESTION DU CONTENU PACK (Liens internes) ---
    let packLinksHTML = "";
    if (product.packContents && product.packContents.length > 0) {
      const links = product.packContents
        .map(
          (item) => `
            <div class="pack-item-btn" data-target-id="${item.targetId}">
                <span>${item.name}</span>
                <span class="pack-arrow">›</span>
            </div>
        `,
        )
        .join("");

      packLinksHTML = `
            <div class="pack-content-container">
                <div style="color:#8e8e93; font-size:0.9rem; margin-bottom:5px;">📦 CONTENU DU PACK :</div>
                ${links}
            </div>
        `;
    }
    let variantsHTML = "";
    if (product.jars && product.jars.length > 0) {
      const buttonsHTML = product.jars
        .map(
          (jar, index) => `
                <div class="variant-btn ${index === 0 ? "active " + jar.colorClass : ""}" 
                     data-name="${jar.name} ${jar.emoji}" 
                     data-color-class="${jar.colorClass}">
                    <span class="emoji">${jar.emoji}</span>
                    <span class="text">${jar.name}</span>
                </div>
            `,
        )
        .join("");
      variantsHTML = `<div class="variant-selector-container"><div class="variant-title">${product.variantTitle || "Choisir une option :"}</div><div class="variant-grid">${buttonsHTML}</div></div>`;
    } else if (product.options && product.options.length > 0) {
      variantsHTML = `<div class="product-options-container" style="margin-bottom: 15px;"><label style="color: #8e8e93; font-size: 0.9rem; margin-bottom: 5px; display:block;">Choisir :</label><select id="product-variant-select" style="width: 100%; padding: 12px; border-radius: 8px; background: #2c2c2e; color: white; border: 1px solid #3a3a3c;">${product.options.map((opt) => `<option value="${opt}">${opt}</option>`).join("")}</select></div>`;
    }

    let tarifsHTML = product.tarifs
      .map(
        (tarif) => `
            <div class="tarif-item">
                <div class="box-tarif">
                    <div class="tarif-wieght">${tarif.weight}</div>
                    <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
        `,
      )
      .join("");

    let descriptionHTML = product.description
      ? `<p class="product-description">${product.description.replace(/\n/g, "<br>")}</p>`
      : "";

    const oldVideo = document.querySelector("#page-product .product-video");
    if (oldVideo) oldVideo.style.display = "none";

    // --- 3. INJECTION (On cache la galerie si pas de média) ---
    detailsContainer.innerHTML = `
            ${hasMedia ? `<div class="product-gallery-wrapper">${galleryHTML}</div>` : ""}
            ${hasMedia ? `<div class="gallery-counter">Swipe pour voir la video➡️</div>` : ""} 

            <div class="name" style="margin-top: ${hasMedia ? "0" : "20px"}">${product.name}</div>
            <div class="farm">${product.farm}</div>
            <div class="product-review-box">
              <div id="product-reviews-average">⭐ Chargement des avis…</div>
              <div id="product-reviews-snippet" class="product-review-snippet"></div>
              <button type="button" id="product-reviews-open">⭐ Voir / donner un avis</button>
            </div>
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;

    showPage("page-product");
    document.getElementById('product-reviews-open').addEventListener('click', () => openReviews('product', product.id));
    refreshProductReviewBox(product);

    // Réattache les événements (pour les variantes de couleurs)
    if (product.jars && product.jars.length > 0) {
      const variantBtns = document.querySelectorAll(".variant-btn");
      const cartBtns = document.querySelectorAll(".add-to-cart-btn");
      const updateCartButtonsColor = (colorClass) => {
        cartBtns.forEach((btn) => {
          btn.classList.remove(
            "style-purple",
            "style-red",
            "style-green",
            "style-yellow",
            "style-orange",
            "style-brown",
            "style-passion",
            "style-melon",
            // 👇 J'ai ajouté tes nouvelles ici :
            "style-gmo",
            "style-lampo",
            "style-tangier",
            "style-grappe",
          );
          if (colorClass) btn.classList.add(colorClass);
        });
      };
      updateCartButtonsColor(product.jars[0].colorClass);
      variantBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          variantBtns.forEach((b) => {
            b.classList.remove("active");
            const color = b.dataset.colorClass;
            b.classList.remove(color);
          });
          this.classList.add("active");
          this.classList.add(this.dataset.colorClass);
          updateCartButtonsColor(this.dataset.colorClass);
          if (window.Telegram.WebApp.HapticFeedback)
            window.Telegram.WebApp.HapticFeedback.selectionChanged();
        });
      });
    }
  }

  // Met à jour l'affichage du panier (CORRIGÉ : Cache l'image si vide)
  function renderCart() {
    const cartContainer = document.getElementById("cart-items-container");
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Votre panier est vide.</p>";
      document.getElementById("cart-total-price").innerText = "0.00€";
      updateCartCount();
      return;
    }

    cartContainer.innerHTML = cart
      .map(
        (item) => `
    <div class="cart-item">
        ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}
        
        <div class="item-details">
            <div class="name">${item.name}</div>
            <div class="gram">${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
            <div class="price">${item.totalPrice.toFixed(2)}€</div>
        </div>

        <div class="quantity-selector">
            <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
            <span class="quantity">${item.quantity}</span>
            <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
        </div>
    </div>
`,
      )
      .join("");

    cartContainer.insertAdjacentHTML("beforeend", getFreeGiftHTML());
    cartContainer.insertAdjacentHTML("beforeend", getRouletteHTML());

    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total-price").innerText =
      `${total.toFixed(2)}€`;
    updateCartCount();
  }

  // Affiche la page de confirmation (VERSION WHATSAPP DIRECT)
  function renderConfirmation() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // --- Logique de calcul des prix (inchangée) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;
    // --- Fin calcul ---

    // Mise à jour du résumé
    document.getElementById("confirmation-items-count").innerText =
      `${totalItems} article${totalItems > 1 ? "s" : ""}`;
    document.getElementById("confirmation-total-price").innerText =
      `${totalPrice.toFixed(2)}€`;

    // Liste des articles
    const itemsList = document.getElementById("confirmation-items-list");
    itemsList.innerHTML = cart
      .map(
        (item, index) => `
         <div class="cart-item">
            ${item.image ? `<img src="${item.image}" alt="${item.name}">` : ""}

            <div class="item-details">
                <div>${index + 1}. ${item.name}</div>
                <div>Quantité: ${item.quantity}x ${item.weight}</div>
                <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
            </div>
        </div>
    `,
      )
      .join("");

      if (canChooseFreeGift() && selectedFreeGift) {
    itemsList.insertAdjacentHTML('beforeend', `
        <div class="cart-item">
            <div class="item-details" style="background: linear-gradient(180deg, #ffcc00, #ff6900); color: #000;">
                <div><strong>🎁 Pochette offerte</strong></div>
                <div>Choix : ${selectedFreeGift}</div>
                <div>Prix : 0.00€</div>
            </div>
        </div>
    `);

    if (rouletteWon) {
    itemsList.insertAdjacentHTML("beforeend", `
        <div class="cart-item">
            <div class="item-details" style="background: linear-gradient(180deg, #111, #ffcc00); color: #000;">
                <div><strong>🎰 Roulette pour les commandes a plus de 100€</strong></div>
                <div>Résultat : ${roulettePrizeLabel}</div>
                <div>Prix : 0.00€</div>
            </div>
        </div>
    `);
}
}

    // UI Promo
    const promoInputContainer = document.getElementById(
      "promo-input-container",
    );
    const promoAppliedContainer = document.getElementById(
      "promo-applied-container",
    );
    if (appliedPromo) {
      promoInputContainer.style.display = "none";
      promoAppliedContainer.style.display = "flex";
      document.getElementById("promo-applied-text").innerText =
        `Code "${appliedPromo}" appliqué !`;
    } else {
      promoInputContainer.style.display = "flex";
      promoAppliedContainer.style.display = "none";
      document.getElementById("promo-code-input").value = "";
    }

    // UI Paiement
    document.querySelectorAll(".payment-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.method === paymentMethod);
    });

    // Résumé final
    const summaryContainer = document.getElementById("confirmation-summary");
    let summaryHTML = `
        <div class="summary-line">
            <span>Sous-total:</span>
            <span>${subTotal.toFixed(2)}€</span>
        </div>
    `;
    if (discount > 0) {
      summaryHTML += `
        <div class="summary-line discount">
            <span>Réduction:</span>
            <span>-${discount.toFixed(2)}€</span>
        </div>
        `;
    }
    summaryHTML += `
        <div class="summary-line total">
            <span>💰 Total final:</span>
            <span>${totalPrice.toFixed(2)}€</span>
        </div>
    `;
    summaryContainer.innerHTML = summaryHTML;

    showPage("page-confirmation");
  }
  // Affiche la page de contact (inchangé)
  function renderContactPage() {
    const linksContainer = document.getElementById("contact-links-container");
    linksContainer.innerHTML = contactLinks
      .map(
        (link) => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        
            <span>${link.text}</span>
        </a>
        `,
      )
      .join("");
  }

  // Met à jour le compteur du panier (inchangé)
  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Ancien compteur panier, si tu l'as encore ailleurs dans le site
    document.querySelectorAll(".cart-count").forEach((count) => {
      count.textContent = totalItems;
      count.style.display = totalItems > 0 ? "flex" : "none";
    });

    // Nouveau bouton panier dans la navbar
    const navCartSvg = document.getElementById("nav-cart-svg");
    const navCartNumber = document.getElementById("nav-cart-number");

    if (navCartSvg && navCartNumber) {
      if (totalItems > 0) {
        navCartSvg.style.display = "none";
        navCartNumber.style.display = "flex";
        navCartNumber.textContent = totalItems > 99 ? "99+" : totalItems;
      } else {
        navCartSvg.style.display = "block";
        navCartNumber.style.display = "none";
        navCartNumber.textContent = "0";
      }
    }
  }

  // --- MODIFIÉ : populateFilters ---
  function populateFilters() {
    const searchFilter = document.getElementById("search-filter");
    const qualityFilter = document.getElementById("quality-filter");
    const farmFilter = document.getElementById("farm-filter");

    // 1. On récupère TOUS les produits de l'app pour trouver toutes les farms
    const allNestedProducts = [];
    appData.forEach((category) => {
      if (category.farms) {
        category.farms.forEach((farm) =>
          allNestedProducts.push(...farm.products),
        );
      } else if (category.products) {
        allNestedProducts.push(...category.products);
      }
    });

    const selectionTypes = [
  ...new Set(
    allNestedProducts
      .map((product) => product.selectionType)
      .filter((type) => type && type.trim() !== "")
  ),
];

const typeOptions = selectionTypes
  .map((type) => {
    return `<option value="${type}">${type}</option>`;
  })
  .join("");

qualityFilter.innerHTML = `
    <option value="all">⭐ TOUT VOIR</option>
    <option value="chef">🔥 SÉLECTION DU CHEF</option>
    ${typeOptions}
`;

    // 3. On remplit le filtre FARM (Pour la page produits)
    // On récupère la propriété 'farm' de chaque produit
    const productFarms = allNestedProducts.map((p) => p.farm).filter((f) => f); // Garde seulement si une farm est définie
    const farms = ["all", ...new Set(productFarms)];

    farmFilter.innerHTML = farms
      .map(
        (farm) =>
          `<option value="${farm}">${farm === "all" ? "👨‍🌾  -  Toutes les farms" : farm}</option>`,
      )
      .join("");

    // 4. Les écouteurs d'événements
    searchFilter.addEventListener("input", (e) => {
      currentFilters.searchTerm = e.target.value;
      renderHomePage();
    });

    qualityFilter.addEventListener("change", (e) => {
      currentFilters.quality = e.target.value;
      renderHomePage();
    });

    farmFilter.addEventListener("change", (e) => {
      currentFilters.farm = e.target.value;
      renderHomePage();
    });
  }

  // --- NOTIFICATION (inchangé) ---
  function showNotification(message) {
    const notification = document.getElementById("notification-toast");
    if (!notification) return;

    clearTimeout(notificationTimeout);

    notification.classList.remove("show");
    notification.innerHTML = "";
    void notification.offsetWidth;

    notification.textContent = message;
    notification.classList.add("show");

    notificationTimeout = setTimeout(() => {
      notification.classList.remove("show");
      notification.innerHTML = "";
    }, 3000);
  }

  function showStartPromoPopup() {
    const popup = document.getElementById("start-promo-popup");
    const closeBtn = document.getElementById("start-promo-close");

    if (!popup) return;

    popup.classList.add("show");

    if (closeBtn) {
      closeBtn.onclick = function () {
        popup.classList.remove("show");
      };
    }

    popup.onclick = function (e) {
      if (e.target === popup) {
        popup.classList.remove("show");
      }
    };
  }

  function getTotalPochettesCount() {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  function canChooseFreeGift() {
    return getTotalPochettesCount() >= 4;
  }

  function getFreeGiftHTML() {
    if (!canChooseFreeGift()) {
      selectedFreeGift = "";

      return `
            <div class="free-gift-alert">
                🎁 Offre : ajoute 4 pochettes au panier pour choisir 1 poche offerte.
            </div>
        `;
    }

    return `
        <div class="free-gift-box">
            <h4>🎁 Offre débloquée</h4>
            <p>4 pochettes achetées = 1 poche de votre choix offerte</p>

            <select id="free-gift-select" class="free-gift-select">
                <option value="">Choisir ma poche offerte</option>
                <option value="Beuh " ${selectedFreeGift === "Beuh" ? "selected" : ""}>🌿 Beuh</option>
                <option value="Cali" ${selectedFreeGift === "Cali" ? "selected" : ""}>🇺🇸 Cali</option>
                <option value="Mousseux" ${selectedFreeGift === "Mousseux" ? "selected" : ""}>🧸 Mousseux</option>
                <option value="Dry" ${selectedFreeGift === "Dry" ? "selected" : ""}>🍫 Dry</option>
            </select>
        </div>
    `;
  }

  function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.totalPrice, 0);
}

function canShowRoulette() {
    return getCartTotal() >= 100;
}

function getRouletteHTML() {
    return `
        <div class="roulette-box roulette-disabled">
            <h4>🎰 Roulette cadeau</h4>

            <div class="roulette-wheel roulette-wheel-disabled">
                🔒
            </div>

            <div class="roulette-result">
                Roulette indisponible pour le moment
            </div>

            <p class="roulette-disabled-text">
                Elle sera bientôt de retour 🎁
            </p>

            <button class="roulette-btn" type="button" disabled>
                Indisponible
            </button>
        </div>
    `;
}


function spinRewardRoulette() {
    showNotification("🔒 Roulette indisponible pour le moment.");
}

/* function spinRewardRoulette() {
    if (!canShowRoulette() || rouletteSpun) return;

    const wheel = document.getElementById("roulette-wheel");
    if (wheel) {
        wheel.classList.add("spin");
    }

    setTimeout(() => {
        rouletteWon = true;
        rouletteSpun = true;

        renderCart();

        if (rouletteWon) {
            showNotification("🎁 Bravo, tu as gagné un packet de cigarette  !");
            tg.HapticFeedback.notificationOccurred("success");
        } else {
            showNotification("🎰 Dommage, pas gagné cette fois.");
            tg.HapticFeedback.notificationOccurred("warning");
        }
    }, 1000);
} */

  // --- LOGIQUE DU PANIER ---

  // Ajoute le paramètre 'variant' à la fin
  function addToCart(productId, weight, price, variant = null) {
    // L'ID du panier doit inclure la variante pour différencier (ex: 10g Gelato vs 10g Papaya)
    const cartItemId = `${productId}-${weight}-${variant ? variant.replace(/\s+/g, "") : "default"}`;

    const existingItem = cart.find((item) => item.id === cartItemId);
    const product = getProductById(productId);

    // On prépare le nom à afficher (ex: "120u (Papaya Bomb)")
    const displayName = variant
      ? `${product.name} \n👉 ${variant}`
      : product.name;

    if (existingItem) {
      existingItem.quantity++;
      existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
    } else {
      cart.push({
        id: cartItemId,
        productId: productId,
        name: displayName, // On utilise le nom avec la variante
        image: product.image,
        weight: weight,
        quantity: 1,
        unitPrice: price,
        totalPrice: price,
        variant: variant, // On garde la variante en mémoire si besoin
      });
    }
    renderCart();
    tg.HapticFeedback.notificationOccurred("success");
    showNotification("✅ Produit ajouté au panier !");
  }
  // updateQuantity (inchangé)
  function updateQuantity(cartItemId, action) {
    const item = cart.find((i) => i.id === cartItemId);
    if (!item) return;

    if (action === "increase") {
      item.quantity++;
    } else if (action === "decrease") {
      item.quantity--;
    }

    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.id !== cartItemId);
    } else {
      item.totalPrice = item.quantity * item.unitPrice;
    }
    renderCart();
  }

  // --- SUIVI PARRAINAGE (code opaque attribué par Telegram /start) ---
  const npClientCode = new URLSearchParams(window.location.search).get('np_client') || '';
  const npClientValid = /^NC-[A-Za-z0-9_-]{18,48}$/.test(npClientCode);
  let npOrderReference = null;
  function getNpOrderReference() {
    if (npOrderReference) return npOrderReference;
    const bytes = new Uint8Array(6);
    window.crypto.getRandomValues(bytes);
    npOrderReference = 'NP-' + Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
    return npOrderReference;
  }

  // --- FORMATAGE DU MESSAGE WHATSAPP (STYLE PRO & EMOJIS) ---
  function formatOrderMessage() {
    // --- 1. CALCULS (Inchangés) ---
    let subTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    let discount = 0;
    let discountableAmount = 0;

    if (appliedPromo) {
      const promo = validPromoCodes[appliedPromo];
      if (promo.appliesTo === "eligible") {
        cart.forEach((item) => {
          const product = getProductById(item.productId);
          if (product && product.promoEligible) {
            discountableAmount += item.totalPrice;
          }
        });
      } else {
        discountableAmount = subTotal;
      }
      if (promo.type === "percent") {
        discount = (discountableAmount * promo.value) / 100;
      } else {
        discount = promo.value;
      }
    }
    if (discount > subTotal) discount = subTotal;
    const totalPrice = subTotal - discount;

    // --- 2. CONSTRUCTION DU MESSAGE (NOUVEAU DESIGN) ---

    // En-tête
    let message = "*🛒 DÉTAIL DE LA COMMANDE:*\n\n";

    // Boucle sur les articles
    cart.forEach((item, index) => {
      // On nettoie le nom (enlève les sauts de ligne techniques si variante)
      // On met en majuscules pour faire comme sur ta capture
      let cleanName = item.name.replace(/\n/g, " ").toUpperCase();

      // Ligne 1 : Numéro + Nom du produit (en Gras *)
      message += `*${index + 1}. ${cleanName}*\n`;

      // Ligne 2 : Quantité
      message += `• Quantité: ${item.quantity}x ${item.weight}\n`;

      // Ligne 3 : Prix unitaire
      message += `• Prix unitaire: ${item.unitPrice.toFixed(2)}€\n`;

      // Ligne 4 : Total de la ligne
      message += `• Total: ${item.totalPrice.toFixed(2)}€\n\n`;
    });

    if (canChooseFreeGift() && selectedFreeGift) {
    message += `*🎁 POCHETTE OFFERTE*\n`;
    message += `• Choix: ${selectedFreeGift}\n`;
    message += `• Prix: 0.00€\n\n`;
    }

    if (rouletteWon) {
    message += `*🎰 ROULETTE \n`;
    message += `• Résultat: ${roulettePrizeLabel}\n`;
    message += `• Prix: 0.00€\n\n`;
}

    // Résumé financier
    // Si promo, on affiche le détail, sinon juste le total
    if (discount > 0) {
      message += `Sous-total: ${subTotal.toFixed(2)}€\n`;
      message += `Réduction (${appliedPromo}): -${discount.toFixed(2)}€\n`;
      message += `\n*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    } else {
      message += `*💰 TOTAL: ${totalPrice.toFixed(2)}€*\n`;
    }

    // Pied de page
    // Pied de page
    const addressInput = document.getElementById("customer-address");
    const customerAddress = addressInput ? addressInput.value.trim() : "";

    message += `\n📍 Adresse : ${customerAddress}\n`;
    message += `💳 Paiement : ${paymentMethod}`;

    // Code pour relier manuellement une commande WhatsApp à son compte.
    message += `\n\n🧾 Référence commande : ${getNpOrderReference()}`;
    if (npClientValid) {
      message += `\n🔖 Code client Nice Place : ${npClientCode}`;
    } else {
      message += '\n⚠️ Suivi parrainage inactif : ouvrir le Shop via /start du bot.';
    }
    message += '\nℹ️ Parrainage validé uniquement après confirmation de commande.';

    return message;
  }
  // --- NOUVELLE FONCTION POUR COPIER DANS LE PRESSE-PAPIERS ---
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      // API moderne et sécurisée
      navigator.clipboard.writeText(text).then(
        () => {
          showNotification("✅ Commande copiée ! Colle-la dans le chat.");
          tg.HapticFeedback.notificationOccurred("success");
        },
        (err) => {
          showNotification("❌ Erreur en copiant le message");
        },
      );
    } else {
      // Ancien fallback (pour certains navigateurs)
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed"; // Hors de l'écran
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        showNotification("✅ Commande copiée ! Colle-la dans le chat.");
        tg.HapticFeedback.notificationOccurred("success");
      } catch (err) {
        showNotification("❌ Erreur en copiant le message");
      }
      document.body.removeChild(textArea);
    }
  }

  // --- WHATSAPP CONTACT SAFE ---
  const WHATSAPP_NUMBER = "33745923730"; // Remplace par ton numéro, sans + ni espace

  function openWhatsAppContact() {
    const message = formatOrderMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    if (window.Telegram && window.Telegram.WebApp) {
      tg.openLink(whatsappUrl);
    } else {
      window.open(whatsappUrl, "_blank");
    }
  }

  // --- GESTION PAGE AVIS ---

  // 1. Bouton vers le canal Potato
  const btnChannel = document.getElementById("btn-open-channel");
  if (btnChannel) {
    btnChannel.addEventListener("click", function () {
      // Remplace par ton vrai lien de canal
      const channelLink = "https://dympt.org/RetourP420";

      // Ouvre le lien via Telegram
      tg.openLink(channelLink);
    });
  }

  // 2. (Optionnel) Zoom sur l'image quand on clique dessus
  window.openImage = function (imgElement) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("img-in-modal");

    modal.style.display = "flex";
    modalImg.src = imgElement.src;
    tg.BackButton.show(); // Affiche le bouton retour natif

    // Clic pour fermer
    modal.onclick = function () {
      modal.style.display = "none";
      tg.BackButton.hide(); // Cache le bouton retour
    };

    // Gestion du bouton retour physique/natif Telegram
    tg.onEvent("backButtonClicked", function () {
      modal.style.display = "none";
      tg.BackButton.hide();
    });
  };


  function validateCustomerAddress() {
    const addressInput = document.getElementById('customer-address');
    const addressError = document.getElementById('address-error');

    if (!addressInput) return true;

    const address = addressInput.value.trim();

    if (address.length < 5) {
        if (addressError) {
            addressError.style.display = 'block';
        }

        addressInput.style.border = '2px solid #ff5252';
        addressInput.focus();

        showNotification('📍 Merci de remplir ton adresse avant de commander.');

        if (window.Telegram && window.Telegram.WebApp && tg.HapticFeedback) {
            tg.HapticFeedback.notificationOccurred('error');
        }

        return false;
    }

    if (addressError) {
        addressError.style.display = 'none';
    }

    addressInput.style.border = '1px solid #ff6900';

    return true;
}
  // --- GESTION DES ÉVÉNEMENTS ---

  // Clics sur la barre de navigation
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      const pageId = item.dataset.page;
      if (!pageId) return;

      // Les lignes gérant la classe 'active' ont été supprimées
      // showPage(pageId) s'en occupe maintenant.

      if (pageId === "page-contact") {
        renderContactPage();
      }

      if (pageId === "page-home") {
        currentView = "categories";
        currentCategoryId = null;
        // On reset TOUS les filtres
        currentFilters.searchTerm = "";
        currentFilters.quality = "all";
        currentFilters.farm = "all";
        document.getElementById("search-filter").value = "";
        document.getElementById("quality-filter").value = "all";
        document.getElementById("farm-filter").value = "all";

        renderHomePage();
      }

      if (pageId === "page-cart") {
        renderCart();
      }

      showPage(pageId);
    });
  });

  document.addEventListener("change", function (e) {
    if (e.target && e.target.id === "free-gift-select") {
      selectedFreeGift = e.target.value;

      if (selectedFreeGift) {
        showNotification(`🎁 Pochette offerte choisie : ${selectedFreeGift}`);
      }
    }
  });

  // Clics sur le reste de la page
  document.body.addEventListener("click", async function (e) {
    const target = e.target;

    const rouletteBtn = target.closest("#roulette-spin-btn");
if (rouletteBtn) {
    spinRewardRoulette();
    return;
}

    // Gère l'accordéon sur la page contact
    const accordionHeader = target.closest(".accordion-header");
    if (accordionHeader) {
      const accordionItem = accordionHeader.parentElement;

      // On ferme les autres items
      document
        .querySelectorAll("#page-info .accordion-item.active")
        .forEach((item) => {
          if (item !== accordionItem) {
            item.classList.remove("active");
          }
        });

      // On ouvre/ferme l'item cliqué
      accordionItem.classList.toggle("active");
      return; // On arrête là pour ne pas déclencher d'autres clics
    }

    // 1. Clic sur une carte CATÉGORIE
    const categoryCard = target.closest(".category-card");
    if (categoryCard) {
      const category = appData.find(
        (c) => c.id === categoryCard.dataset.categoryId,
      );

      if (category.products) {
        // Si la catégorie a des produits directement (pas de sous-catégorie)
        currentView = "simple_products"; // <-- NOUVEL ÉTAT
        currentCategoryId = category.id;
      } else if (category.farms) {
        // Si la catégorie a des farms
        currentView = "farms";
        currentCategoryId = category.id;
      } else {
        return; // Ne fait rien si la catégorie est vide
      }

      // On reset les filtres et on lance la page
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }
    // 2. MODIFIÉ : Clic sur un BOUTON FARM (Anciennement "carte farm")
    const farmBtn = target.closest(".farm-list-btn"); // <-- J'ai changé le nom de la classe ici
    if (farmBtn) {
      if (farmBtn.classList.contains("unclickable")) {
        return;
      }

      currentView = "products";
      currentFarmId = farmBtn.dataset.farmId;

      // On reset les filtres
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";

      renderHomePage();
      return;
    }
    // 3. Clic sur une carte PRODUIT
    const productCard = target.closest(".product-item-card");
    if (productCard) {
      if (productCard.classList.contains("unclickable")) {
        return;
      }
      renderProductPage(productCard.dataset.productId);
      return;
    }

    // 4. NOUVEAU : Clic sur le bouton "Retour" (vers Catégories)
    if (target.closest(".back-to-categories-btn")) {
      currentView = "categories";
      currentCategoryId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // 5. NOUVEAU : Clic sur le bouton "Retour" (vers Farms)
    if (target.closest(".back-to-farms-btn")) {
      currentView = "farms";
      currentFarmId = null;
      currentFilters.searchTerm = "";
      document.getElementById("search-filter").value = "";
      renderHomePage();
      return;
    }

    // Clic sur "Appliquer" le code promo
    if (target.closest("#apply-promo-btn")) {
      const input = document.getElementById("promo-code-input");
      const code = input.value.toUpperCase(); // Mets en majuscule

      if (validPromoCodes[code]) {
        appliedPromo = code;
        tg.HapticFeedback.notificationOccurred("success");
        showNotification("✅ Code promo appliqué !");
      } else {
        appliedPromo = null; // Reset au cas où
        tg.HapticFeedback.notificationOccurred("error");
        showNotification("❌ Code promo invalide.");
      }
      renderConfirmation(); // Met à jour la page de confirmation
    }

    // Clic sur "Supprimer" le code promo
    if (target.closest("#remove-promo-btn")) {
      appliedPromo = null;
      showNotification("Code promo retiré.");
      renderConfirmation(); // Met à jour la page
    }

    // Clic sur un bouton de paiement
    if (target.closest(".payment-btn")) {
      paymentMethod = target.closest(".payment-btn").dataset.method;
      // Pas besoin de rafraîchir toute la page, juste les boutons
      document.querySelectorAll(".payment-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.method === paymentMethod);
      });
    }

    // Clic sur "Ajouter au panier"
    if (target.closest(".add-to-cart-btn")) {
      const btn = target.closest(".add-to-cart-btn");

      let selectedVariant = null;

      // CAS 1 : Nouveau système (Boutons JARs)
      const activeVariantBtn = document.querySelector(".variant-btn.active");
      if (activeVariantBtn) {
        selectedVariant = activeVariantBtn.dataset.name;
      }
      // CAS 2 : Ancien système (Select) - Fallback
      else {
        const variantSelect = document.getElementById("product-variant-select");
        if (variantSelect) {
          selectedVariant = variantSelect.value;
        }
      }

      addToCart(
        btn.dataset.productId,
        btn.dataset.weight,
        parseFloat(btn.dataset.price),
        selectedVariant,
      );
    }

    // Clic sur les boutons de quantité
    if (target.closest(".quantity-btn")) {
      const btn = target.closest(".quantity-btn");
      updateQuantity(btn.dataset.id, btn.dataset.action);
    }

    // Clic sur le bouton "fermer"
    if (target.closest(".close-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur "Continuer les achats"
    if (target.closest("#cart-continue-shopping")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur les boutons "retour" (des pages produits, panier...)
    if (target.closest(".back-button")) {
      showPage("page-home");
      // La gestion des classes 'active' est maintenant dans showPage
    }

    // Clic sur le bouton du panier
    if (target.closest("#home-cart-button")) {
      renderCart();
      showPage("page-cart");
    }

    // Clic sur "Commander"
    if (target.closest("#checkout-button")) {
      if (canChooseFreeGift() && !selectedFreeGift) {
        showNotification("🎁 Choisis ta pochette offerte avant de valider.");
        return;
      }

      // Nouvelle tentative de commande : une nouvelle référence unique est créée.
      npOrderReference = null;
      renderConfirmation();
    }

    // Clic sur "Modifier"
    if (target.closest("#confirmation-modify-order")) {
      showPage("page-cart");
    }
    // Clic sur WhatsApp
    if (target.closest('#confirm-whatsapp')) {
    if (!validateCustomerAddress()) {
        showPage('page-cart');
        return;
    }

    openWhatsAppContact();
    return;
}

    // Clic sur un produit DANS un Pack
    if (target.closest(".pack-item-btn")) {
      const btn = target.closest(".pack-item-btn");
      const targetId = btn.dataset.targetId;

      // On charge la page du produit ciblé
      renderProductPage(targetId);
      return;
    }
  });

  // --- INITIALISATION DE L'APP ---
  function init() {
    setTimeout(() => {
      populateFilters();
      renderHomePage();
      updateCartCount();

      // Cache le loader et affiche la home
      showPage("page-home");

      // Affiche la popup promo juste après le chargement
      setTimeout(() => {
        showStartPromoPopup();
      }, 400);
    }, 3000);
  }

  // AVIS AUTOMATIQUES : SQLite sur VPS, lecture HTTPS, modération Telegram.
  // Les trois faux commentaires de démonstration sont volontairement retirés.
  // PREVISUALISATION : fusion avec les vrais avis uniquement lorsque ?avis_test=1.
  // Aucune modification de la base SQLite ni de l'API publique.
  const REVIEWS_TEST_PREVIEW = new URLSearchParams(window.location.search).get('avis_test') === '1';
  const REVIEWS_TEST_ENTRIES = [{"nickname":"Lalou_95","rating":5,"comment":"J'ai commencé avec une petite commande pour essayer, ça s'est bien passé. Je suis revenue depuis.","date":"19/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Valentin_p","rating":5,"comment":"Une expérience simple, claire et agréable. Parfait pour moi.","date":"19/10/2026","is_demo":true,"origin":"demo"},{"nickname":"NadègeD","rating":5,"comment":"La première fois, j'étais un peu perdue avec toutes les références. Ils m'ont aidée à faire le tri.","date":"18/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Leïla_27","rating":5,"comment":"Pour moi c'est surtout la présentation des produits et la clarté des infos qui font la différence.","date":"18/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Amel_78","rating":5,"comment":"Ça fait des années que je passe par la même personne. Je suis pénible sur mes choix et pourtant on prend encore le temps de me conseiller.","date":"13/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Emma.sdn","rating":5,"comment":"La première commande s'est bien passée et la deuxième aussi, du coup me voilà en train de laisser un avis 😄","date":"11/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Cassandra7","rating":4,"comment":"J'ai envoyé trois amis, ils m'ont tous fait un retour positif sur l'accueil. Ça fait plaisir.","date":"08/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Rosie_75","rating":5,"comment":"Les descriptions sont claires et les échanges sont directs, je préfère largement ça.","date":"06/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Nadouchka","rating":5,"comment":"Cliente depuis trois mois environ, communication toujours au top. Même quand je pose mille questions on me répond correctement 😂","date":"06/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Celia_m","rating":4,"comment":"Le plus appréciable c'est le respect des horaires annoncés. Ça évite d'attendre toute la soirée.","date":"06/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Leya_75","rating":4,"comment":"Bonne découverte, bon accueil et petit cadeau inattendu. Ça donne envie de revenir.","date":"05/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Alya_75","rating":4,"comment":"Depuis le printemps je fais confiance à cette équipe. Horaires respectés, échanges agréables, c'est tout ce que je demande.","date":"05/10/2026","is_demo":true,"origin":"demo"},{"nickname":"BibiPoulette","rating":5,"comment":"C'était plutôt rapide pour ma zone, commande conforme et échanges efficaces. Aucun souci.","date":"03/10/2026","is_demo":true,"origin":"demo"},{"nickname":"Kiki__91","rating":5,"comment":"Depuis le temps que je suis cliente, je sais que je peux poser mes questions sans qu'on me prenne de haut.","date":"03/10/2026","is_demo":true,"origin":"demo"},{"nickname":"sunny.coco","rating":4,"comment":"La quantité et la présentation étaient conformes aux informations fournies, c'est important.","date":"27/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Fifou.91","rating":5,"comment":"J'ai découvert grâce à un groupe d'amies. Bon accueil et choix varié, je comprends leur enthousiasme.","date":"26/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Mélanie33","rating":5,"comment":"Le choix change souvent, je regarde les nouvelles références presque par curiosité maintenant.","date":"25/09/2026","is_demo":true,"origin":"demo"},{"nickname":"ThomasK","rating":4,"comment":"J'ai été surprise par la rapidité de la réponse. Tout était clair.","date":"24/09/2026","is_demo":true,"origin":"demo"},{"nickname":"l0ul0u_75","rating":5,"comment":"La présentation était soignée, les infos faciles à comprendre et le choix assez large. Merci !","date":"24/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Tarek95","rating":4,"comment":"J'ai testé après avoir vu passer le lien chez des amis. Pas déçue.","date":"24/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Momo150","rating":5,"comment":"J'étais pressée et ils m'ont dit franchement ce qui était possible. J'aime cette honnêteté.","date":"21/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Lili_93","rating":5,"comment":"Première commande aujourd'hui, reçue en à peu près 50 min. Je connaissais pas du tout et franchement belle surprise, tout était nickel. Le petit cadeau en plus m'a fait sourire 😭","date":"19/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Lison03","rating":5,"comment":"Ça faisait longtemps que je n'avais pas trouvé un échange aussi simple. Merci pour l'écoute.","date":"19/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Manondu91","rating":5,"comment":"Au début j'étais un peu sceptique, je connaissais personne ici. Finalement tout s'est très bien passé, merci pour la patience.","date":"18/09/2026","is_demo":true,"origin":"demo"},{"nickname":"YacineM","rating":5,"comment":"Mes amies n'arrêtaient pas de m'en parler, j'ai enfin tenté. Très bonne expérience.","date":"17/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Sarah_tk","rating":5,"comment":"Premier passage aujourd'hui. J'ai surtout apprécié la gentillesse et le fait de tout vérifier avec moi.","date":"17/09/2026","is_demo":true,"origin":"demo"},{"nickname":"ArnaudV","rating":5,"comment":"Une boutique que je garde dans mes favoris pour l'accueil et la variété.","date":"16/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Tess93","rating":5,"comment":"Service fluide, bon échange et délai cohérent avec ce qui avait été annoncé.","date":"14/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Maëlys_95","rating":5,"comment":"Très bonne surprise pour une première commande, exactement ce que j'espérais côté organisation.","date":"11/09/2026","is_demo":true,"origin":"demo"},{"nickname":"NawelB","rating":5,"comment":"J'ai connu le shop grâce au bouche-à-oreille et j'en ai parlé autour de moi. Bonne expérience personnelle.","date":"09/09/2026","is_demo":true,"origin":"demo"},{"nickname":"sandy.prv","rating":5,"comment":"J'ai bien aimé le fait de pouvoir poser mes questions et d'avoir des réponses franches, sans discours commercial interminable.","date":"08/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Mehdi_95","rating":5,"comment":"Très bonne communication et choix assez large, c'est ce que je recherchais.","date":"06/09/2026","is_demo":true,"origin":"demo"},{"nickname":"Enzo__78","rating":5,"comment":"Une amie me l'avait conseillé pour le choix. Le catalogue est effectivement bien fourni.","date":"05/09/2026","is_demo":true,"origin":"demo"},{"nickname":"sasa.k","rating":4,"comment":"Je suis une habituée assez difficile à satisfaire, mais on me propose souvent des nouveautés intéressantes.","date":"05/09/2026","is_demo":true,"origin":"demo"},{"nickname":"SamiaJ","rating":4,"comment":"Une petite erreur dans la préparation, mais corrigée rapidement. Je laisse 4 étoiles parce que le SAV a été sérieux.","date":"02/09/2026","is_demo":true,"origin":"demo"},{"nickname":"mimi.pamplemousse","rating":5,"comment":"Mon cousin m'avait donné le contact, j'ai ensuite envoyé le lien à mes potes. Tout le monde m'a dit que l'accueil était cool.","date":"31/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Océane_B","rating":4,"comment":"Très bon contact dans l'ensemble. Une petite confusion au départ, réglée rapidement et sans prise de tête.","date":"31/08/2026","is_demo":true,"origin":"demo"},{"nickname":"nuitcalme","rating":4,"comment":"Une bonne surprise, l'équipe a été agréable même en période chargée.","date":"29/08/2026","is_demo":true,"origin":"demo"},{"nickname":"LaPetiteEtoile","rating":4,"comment":"Rien d'extraordinaire à raconter, juste un service qui fait ce qu'il annonce et qui le fait bien. Ça me va très bien.","date":"27/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Yous_91","rating":5,"comment":"Le rendez-vous était simple à organiser. J'ai apprécié qu'on confirme tout clairement.","date":"27/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Sam_93","rating":4,"comment":"Le délai n'était pas parfait cette fois, mais on m'a prévenu en avance. C'est appréciable.","date":"27/08/2026","is_demo":true,"origin":"demo"},{"nickname":"LeQuotidien","rating":5,"comment":"Bonne disponibilité, réponses claires et catalogue riche. Top pour moi.","date":"26/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Khalil77","rating":5,"comment":"Commande reçue en environ 50 minutes, tout était conforme à ce qu'on m'avait annoncé.","date":"25/08/2026","is_demo":true,"origin":"demo"},{"nickname":"CherryMoon","rating":5,"comment":"J'ai mis du temps à me décider, merci pour votre patience 😅","date":"24/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Maureen.N","rating":5,"comment":"Je suis tombé dessus par hasard, et l'expérience s'est bien passée du début à la fin.","date":"23/08/2026","is_demo":true,"origin":"demo"},{"nickname":"rue_des_lilas","rating":5,"comment":"Tout a été fait avec sérieux, de la prise de contact au suivi.","date":"21/08/2026","is_demo":true,"origin":"demo"},{"nickname":"bonsoirlesgens","rating":5,"comment":"La personne m'a proposé plusieurs options selon mes préférences. Très bon échange.","date":"21/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Malik.13","rating":5,"comment":"Les références changent, mais la qualité de l'accueil reste la même. Ça me plaît.","date":"20/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Hugo.22","rating":5,"comment":"Une première expérience agréable, la personne a bien vérifié les détails avec moi.","date":"18/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Sophie012","rating":5,"comment":"La personne a pris le temps de me guider malgré mes changements d'avis. Respect pour la patience 😂","date":"17/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Sabrina_v","rating":4,"comment":"Ça faisait longtemps que je cherchais une boutique avec autant de choix. Je reviendrai regarder les nouveautés.","date":"16/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Eva_lys","rating":4,"comment":"J'apprécie qu'on ne me force pas la main et qu'on me laisse réfléchir. C'est bête mais c'est rare.","date":"16/08/2026","is_demo":true,"origin":"demo"},{"nickname":"LinaSoleil","rating":4,"comment":"Le service était agréable, mais j'ai attendu un petit peu plus longtemps que ce que j'imaginais. Rien de dramatique, bonne expérience quand même.","date":"15/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Steph_du_91","rating":4,"comment":"Coup de cœur pour l'accueil, vraiment chaleureux sans être envahissant. Continuez comme ça.","date":"11/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Imane_92","rating":5,"comment":"J'ai eu une petite question après coup, et on m'a répondu sans me renvoyer d'un côté à l'autre.","date":"11/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Seb_T","rating":5,"comment":"Première commande très satisfaisante, je retiens surtout la ponctualité et la simplicité.","date":"10/08/2026","is_demo":true,"origin":"demo"},{"nickname":"RiriRose","rating":5,"comment":"J'ai testé une fois, puis deux, maintenant j'ai perdu le compte 😂 Toujours bien accueillie.","date":"09/08/2026","is_demo":true,"origin":"demo"},{"nickname":"noemie.e","rating":5,"comment":"C'est mon amie qui m'a poussée à tester, elle avait raison. J'ai envoyé le lien à ma sœur dans la foulée.","date":"07/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Wendy_94","rating":5,"comment":"J'adore quand les gens sont patients avec moi parce que j'hésite énormément 😭 Merci pour les conseils.","date":"05/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Roxane78","rating":5,"comment":"J'ai recommandé le shop à deux collègues, elles m'ont toutes les deux remerciée. Je crois que j'ai fait des heureuses 😄","date":"04/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Fares_C","rating":5,"comment":"J'ai eu besoin de décaler au dernier moment, l'équipe a été compréhensive.","date":"04/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Marwa.94","rating":5,"comment":"J'en ai parlé à mes copines et elles ont voulu voir le catalogue direct 😂","date":"04/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Julie_77","rating":5,"comment":"Pas déçue du tout. Les échanges étaient fluides et les délais annoncés assez justes.","date":"04/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Myriam_m","rating":4,"comment":"J'ai mis 4 étoiles parce que j'ai dû relancer une fois pour l'horaire, mais le reste était très bien.","date":"03/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Yaya.lune","rating":5,"comment":"Commandé en fin d'aprem, arrivé plus vite que prévu. J'ai vraiment apprécié qu'on me tienne au courant.","date":"03/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Tania93","rating":5,"comment":"Grosse journée pour moi, et tout a été réglé rapidement. Merci pour l'efficacité.","date":"02/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Zaza__75","rating":5,"comment":"Ça fait des mois que je reviens et je garde le même avis : on sait à quoi s'attendre, et c'est rassurant.","date":"01/08/2026","is_demo":true,"origin":"demo"},{"nickname":"Nono_love","rating":5,"comment":"J'en ai parlé à un pote qui cherchait un bon suivi, il m'a dit merci le lendemain. Voilà voilà.","date":"31/07/2026","is_demo":true,"origin":"demo"},{"nickname":"HichamK","rating":5,"comment":"Première fois que je commande ici, petite surprise en plus, vraiment sympa.","date":"30/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Titou59","rating":5,"comment":"L'équipe a été très agréable et la petite attention m'a fait plaisir, merci !","date":"30/07/2026","is_demo":true,"origin":"demo"},{"nickname":"parisienne.x","rating":5,"comment":"Première fois pour moi et sûrement pas la dernière si ça continue comme ça.","date":"28/07/2026","is_demo":true,"origin":"demo"},{"nickname":"clem_k","rating":4,"comment":"Habituée depuis quelques mois et toujours un petit mot sympa. Ça fait la différence à mes yeux.","date":"28/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Jules_75","rating":4,"comment":"Bonne première fois pour moi, un peu de stress inutile finalement 😅","date":"26/07/2026","is_demo":true,"origin":"demo"},{"nickname":"AyaNour","rating":4,"comment":"Un grand merci pour le petit extra dans la pochette, j'étais pas au courant et ça fait toujours plaisir.","date":"26/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Flora_91","rating":5,"comment":"Toujours un bonjour et une réponse polie, même quand il y a du monde. Pour moi ça compte beaucoup.","date":"26/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Shana_78","rating":5,"comment":"Bon accueil, grande variété de choix, et un détail sympa glissé dans la pochette. J'ai apprécié.","date":"26/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Flo-77","rating":5,"comment":"Pas mal de choix, mais justement j'ai apprécié qu'on m'aide à m'y retrouver.","date":"25/07/2026","is_demo":true,"origin":"demo"},{"nickname":"A2M_91","rating":5,"comment":"J'ai apprécié la petite pochette offerte, un geste simple mais qui m'a fait sourire.","date":"24/07/2026","is_demo":true,"origin":"demo"},{"nickname":"fanny.x","rating":5,"comment":"J'ai commandé à l'heure du rush, je pensais attendre beaucoup plus. Finalement c'était géré correctement.","date":"21/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Cindy_L","rating":4,"comment":"La livraison a mis un peu de temps mais j'avais été prévenue, donc je préfère ça à une promesse impossible.","date":"20/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Morgane_29","rating":4,"comment":"Vraiment merci pour le suivi ! Je savais où ça en était et je n'ai pas eu besoin de relancer.","date":"17/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Siham_93","rating":5,"comment":"J'ai fait découvrir le shop à ma coloc, elle a adoré le choix. Maintenant on regarde les nouveautés ensemble.","date":"14/07/2026","is_demo":true,"origin":"demo"},{"nickname":"AxelleP","rating":5,"comment":"J'aime surtout la diversité du catalogue et les descriptions qui m'aident à faire mon choix.","date":"12/07/2026","is_demo":true,"origin":"demo"},{"nickname":"JojoLeGrand","rating":5,"comment":"Les avis de mes potes m'avaient intriguée, je me suis fait mon propre avis : bien reçu et bien accompagnée.","date":"12/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Jade.vibes","rating":5,"comment":"Ça fait bientôt un an que je suis cliente. À chaque fois on me propose des nouveautés à découvrir, j'adore le choix.","date":"10/07/2026","is_demo":true,"origin":"demo"},{"nickname":"MarcoL","rating":5,"comment":"Bonne première impression, catalogue varié et réponses rapides aux questions.","date":"06/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Yasmine_d","rating":5,"comment":"Une amie m'a passé le contact, franchement je suis contente d'avoir essayé. Je reviendrai.","date":"05/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Cloclo_v","rating":5,"comment":"Je suis venue sur les conseils de ma cousine, et j'ai eu exactement le service qu'elle m'avait décrit.","date":"04/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Amine_R","rating":5,"comment":"Livraison assez rapide ce jour-là et échanges courtois. Je recommande l'accueil.","date":"04/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Soso91","rating":4,"comment":"J'ai testé ailleurs entre-temps mais je suis revenue ici pour le sérieux. J'aime quand c'est simple et sans histoires.","date":"03/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Hanane.B","rating":4,"comment":"Je reviens depuis plusieurs mois pour une raison simple : c'est régulier et agréable.","date":"03/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Nathy_95","rating":4,"comment":"On m'avait dit que l'accueil était bon, je confirme. Les échanges sont naturels, pas robotisés.","date":"02/07/2026","is_demo":true,"origin":"demo"},{"nickname":"Adèle_z","rating":5,"comment":"Un ami m'avait recommandé d'essayer, ça s'est vraiment bien passé. Je lui dois un merci.","date":"01/07/2026","is_demo":true,"origin":"demo"},{"nickname":"tiffany95","rating":4,"comment":"Ça faisait 3-4 mois que mes amis m'en parlaient. J'ai enfin essayé et j'aurais dû le faire avant 😂","date":"29/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Leonie.l","rating":5,"comment":"Je conseille surtout pour la communication, les réponses sont claires et il n'y a pas de mauvaises surprises.","date":"29/06/2026","is_demo":true,"origin":"demo"},{"nickname":"LaëtitiaR","rating":4,"comment":"On sent que le catalogue change régulièrement, j'aime bien pouvoir découvrir autre chose à chaque visite.","date":"27/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Samira.22","rating":5,"comment":"Je laisse rarement cinq étoiles, mais là l'organisation et le soin étaient au rendez-vous.","date":"27/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Coco_M","rating":5,"comment":"Je l'ai conseillé à une amie qui hésitait, elle m'a confirmé que tout s'était bien passé.","date":"26/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Lola-130","rating":5,"comment":"La ponctualité était au rendez-vous et le contact facile. Pour ma première expérience, c'est validé.","date":"25/06/2026","is_demo":true,"origin":"demo"},{"nickname":"celine.d","rating":5,"comment":"Très bonne première impression, petit échange sympa et respect de ce qui avait été convenu. C'est appréciable.","date":"24/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Rayan.94","rating":5,"comment":"Ça se passe toujours bien depuis plusieurs mois, et le contact reste humain. C'est important.","date":"23/06/2026","is_demo":true,"origin":"demo"},{"nickname":"DjoK","rating":5,"comment":"Le petit geste offert était inattendu. Ça rend l'expérience encore plus sympa.","date":"22/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Adrien.fr","rating":5,"comment":"Premier essai réussi, tout s'est déroulé comme convenu. Je suis contente.","date":"22/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Lilou_k","rating":5,"comment":"Je pensais que ça allait être compliqué pour mon secteur, mais ça s'est organisé facilement.","date":"22/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Raphou75","rating":5,"comment":"La diversité est chouette, il y a toujours quelque chose que je n'avais pas remarqué avant.","date":"21/06/2026","is_demo":true,"origin":"demo"},{"nickname":"AnaisParis","rating":5,"comment":"Large choix, j'ai pu comparer tranquillement avant de me décider. Pas cette impression qu'on veut absolument te pousser à prendre quelque chose.","date":"20/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Mimi37","rating":5,"comment":"Le petit supplément offert m'a surprise. Pas nécessaire, mais franchement sympa comme geste.","date":"20/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Maxou_02","rating":5,"comment":"J'ai trouvé les infos précises et le déroulement très simple. Merci.","date":"19/06/2026","is_demo":true,"origin":"demo"},{"nickname":"KarimDB","rating":5,"comment":"J'étais conseillée par une amie et j'ai été aussi bien reçue qu'elle me l'avait dit.","date":"17/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Madoxx","rating":5,"comment":"Le premier contact a été très sympa. Livraison en moins d'une heure dans mon cas, franchement contente.","date":"16/06/2026","is_demo":true,"origin":"demo"},{"nickname":"JustineL","rating":4,"comment":"Ça fait maintenant quatre mois que je passe ici et je suis toujours aussi contente. Jamais eu de mauvaise surprise.","date":"15/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Ines__b","rating":5,"comment":"Première expérience parfaite pour moi, on m'a bien expliqué les différentes options sans me presser. Très cool.","date":"15/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Dounia_m","rating":5,"comment":"Dix ans qu'on se connaît, et il trouve encore des nouveautés à me montrer, ça devient une tradition 😂 Toujours à l'écoute.","date":"14/06/2026","is_demo":true,"origin":"demo"},{"nickname":"LePetitFlo","rating":4,"comment":"J'ai connu mieux pour la vitesse une autre fois, mais ici la communication rattrape largement.","date":"14/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Reda_77","rating":5,"comment":"Ça fait des années que je suis fidèle et je trouve encore de nouvelles choses à découvrir.","date":"11/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Dylan_fr","rating":5,"comment":"Je suis client de longue date et je retrouve cette même disponibilité à chaque fois.","date":"11/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Guigui92","rating":5,"comment":"Je suis revenue après un premier essai et le service a été tout aussi bon.","date":"10/06/2026","is_demo":true,"origin":"demo"},{"nickname":"NanaBinks","rating":5,"comment":"Merci pour le petit geste glissé avec ma commande ! Pas obligatoire du tout donc c'est encore plus sympa.","date":"09/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Nessou77","rating":5,"comment":"J'ai testé pour la première fois après en avoir entendu parler par une copine. Réponse rapide, échanges simples et super bonne première impression.","date":"09/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Laura.L","rating":4,"comment":"Pas mal du tout ! Un peu de retard cette fois-ci mais un message pour prévenir, donc aucun problème.","date":"08/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Jay_v","rating":5,"comment":"Merci encore pour la gentillesse et les explications, je me suis sentie bien accueillie.","date":"08/06/2026","is_demo":true,"origin":"demo"},{"nickname":"cloudnine_92","rating":5,"comment":"Je suis cliente depuis un moment et j'apprécie cette régularité, ça rassure.","date":"08/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Elea_p","rating":4,"comment":"Les filles, si vous hésitez comme moi pendant vingt minutes, ils ont la patience d'un ange 😭","date":"07/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Theo__91","rating":5,"comment":"On m'a annoncé un délai, il a été respecté, et tout était conforme.","date":"07/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Nora_Paris","rating":5,"comment":"Ça fait plusieurs mois que je reviens et je n'ai pas envie de changer mes habitudes tant que ça se passe comme ça.","date":"06/06/2026","is_demo":true,"origin":"demo"},{"nickname":"JulietteL","rating":5,"comment":"Je suis assez exigeante sur le suivi, et là j'ai trouvé le service vraiment réactif. Bonne surprise.","date":"04/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Farah_95","rating":5,"comment":"Merci au livreur, très poli et super ponctuel. C'était ma première commande et sûrement pas ma dernière.","date":"04/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Manou_06","rating":5,"comment":"J'ai aimé le fait d'avoir plusieurs options et de ne pas devoir tout décider dans la précipitation.","date":"02/06/2026","is_demo":true,"origin":"demo"},{"nickname":"Phil_75","rating":4,"comment":"Des mois que je passe ici et j'ai jamais eu à courir après une réponse.","date":"01/06/2026","is_demo":true,"origin":"demo"},{"nickname":"LydiaV","rating":4,"comment":"Je cherchais surtout du sérieux, et le contact m'a rassurée. Merci pour cette première commande.","date":"31/05/2026","is_demo":true,"origin":"demo"},{"nickname":"NabilT","rating":5,"comment":"Je reviens surtout parce que le service ne change pas d'une fois à l'autre.","date":"28/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Dina_S","rating":4,"comment":"La variété des références est vraiment sympa, y a de quoi découvrir sans se perdre dans les descriptions.","date":"28/05/2026","is_demo":true,"origin":"demo"},{"nickname":"petitnuage","rating":4,"comment":"J'ai recommandé à mon frère et je pense qu'il va revenir lui aussi.","date":"24/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Nassim-75","rating":5,"comment":"Cliente habituée, je retrouve toujours une équipe attentive et réactive.","date":"23/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Blandine_B","rating":5,"comment":"J'ai comparé plusieurs endroits et je préfère clairement la clarté des infos ici.","date":"22/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Ali_b","rating":5,"comment":"J'ai passé le lien à ma sœur après mon passage, elle voulait découvrir aussi.","date":"21/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Sarah_mrt","rating":5,"comment":"Bon bah premier essai validé de mon côté 😂 C'était bien présenté, rien à redire sur la quantité et j'ai apprécié les petites attentions.","date":"21/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Elodie_c","rating":5,"comment":"Super expérience aujourd'hui, la personne au téléphone a été adorable. Ça change la journée.","date":"19/05/2026","is_demo":true,"origin":"demo"},{"nickname":"lena_g","rating":5,"comment":"Je suis cliente depuis plusieurs années et j'ai toujours eu un service correct. On sent qu'il y a un vrai suivi.","date":"19/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Mariam75","rating":5,"comment":"Je suis très satisfaite de ma première commande, je reviendrai regarder les nouveautés.","date":"19/05/2026","is_demo":true,"origin":"demo"},{"nickname":"NinaF","rating":5,"comment":"Ça fait plaisir de voir une équipe qui répond même quand on se trompe dans une référence. Pro et sympa.","date":"18/05/2026","is_demo":true,"origin":"demo"},{"nickname":"BilalM","rating":5,"comment":"C'est ma deuxième commande, tout aussi fluide que la première. Je reviendrai sûrement.","date":"18/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Fatou_x","rating":5,"comment":"J'en ai parlé à mon frère parce qu'il cherchait une boutique avec un vrai suivi. Il a eu une bonne expérience aussi.","date":"17/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Louanne92","rating":4,"comment":"Quelques minutes de retard mais rien de sérieux. En revanche très bonne communication.","date":"17/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Yanis95","rating":4,"comment":"Honnêtement une bonne expérience, même si j'aurais aimé avoir un créneau plus précis.","date":"16/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Maelys.m","rating":5,"comment":"Livraison proprement organisée et personne très courtoise. Rien à redire sur cette première fois.","date":"15/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Kamel_94","rating":5,"comment":"Quel plaisir d'avoir un vrai échange plutôt qu'un message automatique. Merci !","date":"15/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Nico.r","rating":5,"comment":"J'avais besoin de conseils pour choisir et j'ai eu des réponses adaptées, pas un discours tout fait.","date":"13/05/2026","is_demo":true,"origin":"demo"},{"nickname":"ZohraB","rating":5,"comment":"Je passe rarement laisser des notes, mais là j'ai trouvé tout le monde accueillant et disponible.","date":"13/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Chloé-91","rating":5,"comment":"J'avais un peu de mal à choisir, on a pris le temps de m'expliquer les différentes variétés, j'ai apprécié.","date":"11/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Aicha_L","rating":5,"comment":"Service efficace et agréable, et l'emballage était bien pensé. Merci l'équipe.","date":"10/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Lauu_94","rating":4,"comment":"Deux amies ont essayé après moi, et maintenant on s'échange nos découvertes. Super variété de choix.","date":"09/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Ludo.P","rating":5,"comment":"J'ai déjà commandé plusieurs fois, c'est toujours géré sans complication.","date":"08/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Kelly.D","rating":5,"comment":"Merci beaucoup pour l'attention, le petit cadeau n'était pas prévu et j'ai trouvé ça adorable.","date":"08/05/2026","is_demo":true,"origin":"demo"},{"nickname":"camille.r","rating":4,"comment":"Je suis passée par recommandation, je comprends mieux pourquoi maintenant 😅 Tout était propre et bien organisé.","date":"05/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Bapt_77","rating":4,"comment":"Je laisse quatre étoiles uniquement parce que le créneau était un peu large, sinon parfait.","date":"05/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Elo190","rating":5,"comment":"Je suis passée plusieurs fois, jamais eu besoin de faire un long message pour être comprise.","date":"05/05/2026","is_demo":true,"origin":"demo"},{"nickname":"cha_aa","rating":5,"comment":"Première fois que je laisse un avis quelque part, mais là je voulais le dire : bon accueil et livraison sans prise de tête.","date":"03/05/2026","is_demo":true,"origin":"demo"},{"nickname":"maeva972","rating":5,"comment":"Livraison correcte, juste la communication qui pourrait être un peu plus précise sur l'horaire. Sinon l'accueil était bien.","date":"02/05/2026","is_demo":true,"origin":"demo"},{"nickname":"princesse_m","rating":5,"comment":"Franchement les explications sont plus utiles que les longs messages copiés-collés qu'on voit parfois. Merci.","date":"02/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Clara_bzh","rating":4,"comment":"Je suis quelqu'un qui aime bien tout préparer à l'avance, et j'ai trouvé les infos faciles à obtenir.","date":"01/05/2026","is_demo":true,"origin":"demo"},{"nickname":"Margot.tt","rating":5,"comment":"Le choix est vraiment large, j'aime bien avoir plusieurs références plutôt qu'un catalogue toujours identique.","date":"29/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Loic_B","rating":5,"comment":"J'ai fait passer le contact à deux amis, ils ont apprécié aussi. Merci !","date":"28/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Melek_93","rating":5,"comment":"L'expérience était fluide du premier message jusqu'à la livraison. Simple et efficace.","date":"27/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Alexis.G","rating":5,"comment":"Bonne ambiance dans les échanges, sérieux dans la préparation. Pour moi c'est un bon équilibre.","date":"26/04/2026","is_demo":true,"origin":"demo"},{"nickname":"PaulineM","rating":5,"comment":"Merci pour la disponibilité. Même en posant des questions tard, j'ai eu une réponse le lendemain matin.","date":"26/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Ilyes.b","rating":5,"comment":"Première expérience vraiment positive, bonne organisation du début à la fin.","date":"25/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Naya_L","rating":5,"comment":"Une connaissance m'a transmis le lien et je l'ai transmis à mon tour, ça s'est bien passé.","date":"23/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Mathouuuu","rating":5,"comment":"C'était ma troisième fois, et je commence à avoir mes petites habitudes. Service toujours agréable.","date":"20/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Maya_77","rating":5,"comment":"J'ai retrouvé mes habitudes ici parce que tout est clair, de la sélection jusqu'à la remise.","date":"20/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Lou2Paris","rating":5,"comment":"Ancienne cliente ici, je connais bien le fonctionnement. Ce que j'apprécie le plus c'est la régularité.","date":"19/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Melooow","rating":4,"comment":"Quatre mois que je reviens de temps en temps, et vraiment rien à voir avec les expériences compliquées que j'ai pu avoir ailleurs.","date":"18/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Mima_94","rating":4,"comment":"Ça fait presque un an que je reviens et je suis toujours contente du suivi.","date":"16/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Carole_91","rating":4,"comment":"J'ai eu un changement de programme de dernière minute et ils ont réussi à s'adapter. Merci encore !","date":"16/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Melissa.t","rating":5,"comment":"J'ai essayé pour voir et j'ai été agréablement surprise par le soin apporté aux détails.","date":"15/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Mina.R","rating":5,"comment":"Je commande rarement sur de nouveaux shops mais là j'ai tenté. Franchement le suivi était clair du début à la fin, ça change.","date":"13/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Kenza_k","rating":4,"comment":"Petit retour après plusieurs passages : de mon côté ça reste constant, et c'est exactement ce que je cherche.","date":"12/04/2026","is_demo":true,"origin":"demo"},{"nickname":"chacha.92","rating":4,"comment":"Je n'ai rien à redire sur le service, seulement un emballage un peu volumineux à mon goût.","date":"12/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Zoé_d","rating":5,"comment":"Merci à la personne qui a pris le temps de me répondre alors que je posais cent questions.","date":"12/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Omar_91","rating":4,"comment":"On voit qu'ils prennent le temps de répondre, même pour les petites questions.","date":"10/04/2026","is_demo":true,"origin":"demo"},{"nickname":"NinaPetale","rating":5,"comment":"J'ai apprécié les détails donnés avant de commander. Pas de mauvaise surprise pour ma part.","date":"08/04/2026","is_demo":true,"origin":"demo"},{"nickname":"Mika92","rating":5,"comment":"Toujours aussi contente après plusieurs passages. Les infos sont précises et les réponses rapides.","date":"07/04/2026","is_demo":true,"origin":"demo"},{"nickname":"LénaMarie","rating":5,"comment":"Première expérience rassurante, tout était expliqué et j'ai été tenue au courant.","date":"07/04/2026","is_demo":true,"origin":"demo"}];
  const REVIEWS_TEST_SCORE = REVIEWS_TEST_ENTRIES.reduce((sum, review) => sum + review.rating, 0);
  const REVIEWS_API_URL = "https://api.niiceplaace.pro";
  if (REVIEWS_TEST_PREVIEW) {
    const badge = document.createElement('span');
    badge.className = 'reviews-test-chip';
    badge.textContent = 'TEST';
    const launch = document.getElementById('reviews-open');
    if (launch) launch.insertBefore(badge, launch.querySelector('#reviews-average'));
    const notice = document.createElement('div');
    notice.className = 'reviews-test-notice';
    notice.textContent = '🧪 SIMULATION : 183 avis fictifs + avis clients réels. Ces avis ne sont pas publiés et ne modifient pas la note publique.';
    const heading = document.getElementById('reviews-heading');
    if (heading) heading.insertAdjacentElement('afterend', notice);
  }

  function withTestReviews(data, type, productId) {
    if (!REVIEWS_TEST_PREVIEW || type !== 'shop' || productId) return data;
    const originals = Array.isArray(data.reviews) ? data.reviews : [];
    const realCount = Math.max(0, Number(data.count) || 0);
    const realAverage = realCount > 0 ? Number(data.average) || 0 : 0;
    const total = realCount + REVIEWS_TEST_ENTRIES.length;
    return {
      ...data,
      reviews: [...originals, ...REVIEWS_TEST_ENTRIES],
      count: total,
      average: total ? Math.round((realAverage * realCount + REVIEWS_TEST_SCORE) / total * 10) / 10 : null,
      simulation: true
    };
  }

  const reviewsModal = document.getElementById('reviews-modal');
  const reviewsList = document.getElementById('reviews-list');
  const reviewsSummary = document.getElementById('reviews-summary');
  const reviewStatus = document.getElementById('review-status');
  const reviewForm = document.getElementById('reviews-form');
  const productSelect = document.getElementById('reviews-product-select');
  let activeReviewType = 'shop';

  function reviewEl(tag, className, value) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (value !== undefined && value !== null) el.textContent = String(value);
    return el;
  }
  function getAllReviewableProducts() {
    const result = new Map();
    appData.forEach(cat => {
      (cat.products || []).forEach(product => result.set(product.id, product));
      (cat.farms || []).forEach(farm =>
        (farm.products || []).forEach(product => result.set(product.id, product)));
    });
    return Array.from(result.values());
  }
  // Les identifiants correspondent exactement aux IDs de appData.
  productSelect.append(new Option('Tous les produits', ''));
  getAllReviewableProducts().forEach(product =>
    productSelect.append(new Option(product.name, product.id)));

  async function getReviews(type, productId = '') {
    const qs = new URLSearchParams({type});
    if (type === 'product' && productId) qs.set('product_id', productId);
    const response = await fetch(`${REVIEWS_API_URL}/api/reviews?${qs}`, {cache:'no-store'});
    if (!response.ok) throw new Error('API HTTP ' + response.status);
    const data = await response.json();
    return withTestReviews(data, type, productId);
  }
  const REVIEWS_VISIBLE_COUNT = 7;
  const reviewsFade = document.getElementById('reviews-fade');
  const reviewsMore = document.getElementById('reviews-more');
  let allReviewRows = [];
  let reviewsExpanded = false;

  function displayReviewRows(rows, reset = true) {
    if (reset) {
      allReviewRows = Array.isArray(rows) ? rows : [];
      reviewsExpanded = false;
    }
    reviewsList.replaceChildren();
    const reviewRows = allReviewRows;
    const hasMore = reviewRows.length > REVIEWS_VISIBLE_COUNT;
    const visibleRows = reviewsExpanded ? reviewRows : reviewRows.slice(0, REVIEWS_VISIBLE_COUNT);
    reviewsMore.hidden = !hasMore;
    reviewsFade.hidden = !hasMore || reviewsExpanded;
    reviewsMore.setAttribute('aria-expanded', String(reviewsExpanded));
    reviewsMore.innerHTML = reviewsExpanded
      ? 'Voir moins <span class="reviews-more-arrow" aria-hidden="true">↓</span>'
      : `Voir plus (${reviewRows.length - REVIEWS_VISIBLE_COUNT}) <span class="reviews-more-arrow" aria-hidden="true">↓</span>`;
    if (!reviewRows.length) {
      reviewsList.append(reviewEl('p', '', 'Aucun avis publié pour le moment.'));
      return;
    }
    visibleRows.forEach(r => {
      const rating = Math.max(1, Math.min(5, Number(r.rating) || 1));
      const el = reviewEl('div', 'review-entry');
      if (activeReviewType === 'product') {
        el.append(reviewEl('div','',`📦 ${r.product_name || r.product_id || 'Produit'}`));
      }
      el.append(
        reviewEl('strong', '', (r.is_demo ? '🧪 [TEST] ' : '') + (r.nickname || 'Client')),
        reviewEl('div','review-stars', '★'.repeat(rating) + '☆'.repeat(5-rating)),
        reviewEl('p','',r.comment || ''),
        reviewEl('small','',r.is_demo ? `${r.date || ''} · Avis fictif de simulation` : (r.origin === 'admin' ? `${r.date || ''} · Ajouté par l’équipe` : (r.date || '')))
      );
      reviewsList.append(el);
    });
  }
  reviewsMore.addEventListener('click', () => {
    reviewsExpanded = !reviewsExpanded;
    displayReviewRows(allReviewRows, false);
    if (!reviewsExpanded) {
      document.querySelector('.reviews-list-title')?.scrollIntoView({block:'nearest', behavior:'smooth'});
    }
  });
  async function refreshShopReviewBadge() {
    try {
      const data = await getReviews('shop');
      document.getElementById('reviews-average').textContent = data.count && data.average != null
        ? `${Number(data.average).toFixed(1)}/5${data.simulation ? ' 🧪' : ''}` : '—';
    } catch (error) {
      console.warn('Impossible de charger la note shop', error);
      document.getElementById('reviews-average').textContent = '—';
    }
  }
  async function loadReviews() {
    const type = activeReviewType;
    const productId = type === 'product' ? productSelect.value : '';
    reviewsSummary.textContent = 'Chargement des avis…';
    reviewsList.replaceChildren();
    reviewsFade.hidden = true;
    reviewsMore.hidden = true;
    try {
      const data = await getReviews(type, productId);
      if (activeReviewType !== type || (type === 'product' && productSelect.value !== productId)) return;
      const name = type === 'shop' ? 'avis clients' : 'avis produits';
      reviewsSummary.textContent = data.count && data.average != null
        ? `${data.simulation ? '🧪 SIMULATION · ' : ''}⭐ ${Number(data.average).toFixed(1)}/5 · ${data.count} ${name}` : 'Aucun avis publié pour le moment';
      displayReviewRows(data.reviews || []);
    } catch (error) {
      console.error(error);
      reviewsSummary.textContent = '❌ Impossible de charger les avis pour le moment.';
      reviewsList.replaceChildren();
      reviewsFade.hidden = true;
      reviewsMore.hidden = true;
    }
  }
  function selectReviewTab(type) {
    activeReviewType = type;
    document.getElementById('reviews-tab-shop').classList.toggle('active', type === 'shop');
    document.getElementById('reviews-tab-product').classList.toggle('active', type === 'product');
    document.getElementById('review-filter-wrap').hidden = type !== 'product';
    document.getElementById('reviews-form-title').textContent = type === 'shop'
      ? 'Donner mon avis sur le shop' : 'Donner mon avis sur un produit';
    reviewStatus.textContent = '';
    loadReviews();
  }
  function openReviews(type='shop', productId='') {
    productSelect.value = productId || '';
    reviewsModal.hidden = false;
    selectReviewTab(type);
  }
  document.getElementById('reviews-open').addEventListener('click', () => openReviews('shop'));
  document.getElementById('reviews-close').addEventListener('click', () => {reviewsModal.hidden = true;});
  reviewsModal.addEventListener('click', e => { if (e.target === reviewsModal) reviewsModal.hidden = true; });
  document.getElementById('reviews-tab-shop').addEventListener('click', () => selectReviewTab('shop'));
  document.getElementById('reviews-tab-product').addEventListener('click', () => selectReviewTab('product'));
  productSelect.addEventListener('change', loadReviews);

  async function refreshProductReviewBox(product) {
    const ratingEl = document.getElementById('product-reviews-average');
    const snippetEl = document.getElementById('product-reviews-snippet');
    if (!ratingEl || !snippetEl) return;
    try {
      const data = await getReviews('product', product.id);
      if (!ratingEl.isConnected) return;
      ratingEl.textContent = data.count && data.average != null
        ? `⭐ ${Number(data.average).toFixed(1)}/5 · ${data.count} avis` : '⭐ Aucun avis sur ce produit';
      const recent = (data.reviews || []).slice(0,2);
      snippetEl.textContent = recent.map(r => `${r.nickname} : ${r.comment}`).join('\n');
    } catch(error) {
      ratingEl.textContent = 'Avis momentanément indisponibles';
      console.warn(error);
    }
  }

  reviewForm.addEventListener('submit', async e => {
    e.preventDefault();
    const telegram = window.Telegram?.WebApp;
    const button = document.getElementById('review-send');
    const rating = Number(document.getElementById('review-rating').value);
    const comment = document.getElementById('review-comment').value.trim();
    const product = activeReviewType === 'product' ? getProductById(productSelect.value) : null;
    if (activeReviewType === 'product' && !product) {
      reviewStatus.textContent = '❌ Choisis d’abord un produit.';
      return;
    }
    if (!Number.isInteger(rating) || rating < 1 || rating > 5 || comment.length < 10 || comment.length > 700) {
      reviewStatus.textContent = '❌ Choisis une note et un commentaire de 10 à 700 caractères.';
      return;
    }
    if (!telegram) {
      reviewStatus.textContent = '❌ Ouvre la boutique depuis Telegram pour envoyer un avis.';
      return;
    }
    const payload = {
      type:'review_submission', reviewType:activeReviewType,
      productId: product ? product.id : null,
      productName: product ? product.name : null,
      rating, comment
    };
    button.disabled = true;
    reviewStatus.textContent = '📤 Envoi pour validation…';
    try {
      if (telegram.initData) {
        const response = await fetch(`${REVIEWS_API_URL}/api/reviews`, {
          method:'POST', headers:{'Content-Type':'application/json'},
          body:JSON.stringify({...payload, initData:telegram.initData})
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || `HTTP ${response.status}`);
        reviewStatus.textContent = '✅ Avis reçu ! Il apparaîtra après validation par l’équipe.';
        reviewForm.reset();
      } else if (typeof telegram.sendData === 'function') {
        // Clavier /start : initData vide, sendData est la méthode officielle.
        const text = JSON.stringify(payload);
        if (new TextEncoder().encode(text).length > 4096) throw new Error('Avis trop long');
        reviewStatus.textContent = '📤 Envoi via Telegram…';
        telegram.sendData(text);
      } else {
        throw new Error('Ouvre la mini-app depuis le bouton du bot Telegram.');
      }
    } catch (error) {
      reviewStatus.textContent = '❌ ' + (error.message || 'Envoi impossible');
    } finally { button.disabled = false; }
  });
  // Lien de parrainage : uniquement la commande du bot est nécessaire.
  const referralLink = document.getElementById('referral-link');
  referralLink.addEventListener('click', async e => {
    e.preventDefault();
    try {
      const response = await fetch(`${REVIEWS_API_URL}/api/config`);
      const config = await response.json();
      if (config.botUsername) {
        window.Telegram?.WebApp?.openTelegramLink(`https://t.me/${config.botUsername}`);
        alert('Dans le bot, envoie /parrainage pour recevoir ton lien personnel.');
      } else {
        alert('Envoie /parrainage à ton bot Nice Place dans Telegram.');
      }
    } catch { alert('Envoie /parrainage au bot Nice Place pour recevoir ton lien personnel.'); }
  });
  refreshShopReviewBadge();
  init();
});
