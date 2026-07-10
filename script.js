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
        {
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
        },
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
          id: "Yellow melon",
          flag: "🇪🇸",
          name: "Yellow melon 🍈",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          type: "⚛️ Dry 220/105u ⚛️",
          selectionType: "⚛️ Dry 220/105u ⚛️",
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
          selectionType: "⚛️ Dry 220/105u ⚛️",
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
           selectionType: "⚛️ Dry 220/105u ⚛️",
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
          selectionType: "⚛️ Dry 220/105u ⚛️",
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
          selectionType: "⚛️ Dry 220/105u ⚛️",
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
          id: "Forbidden fruit ",
          flag: "🇪🇸",
          name: "Forbidden fruit ⛔",
          farm: "💎 VVS TANGER 💎",
          promoEligible: true,
          type: "⚛️ Dry 220/105u ⚛️",
          selectionType: "⚛️ Dry 220/105u ⚛️",
          featured: true,
          image: "ProductFF.png",
          video: "VideoFF.mov",
          description:
          "🇪🇸 Forbidden Fruit ⛔ 🇪🇸\n\nUne sélection VVS 220/105u au profil fruité et marqué. Belle texture, odeur sucrée et rendu premium, parfait pour ceux qui cherchent une sélection avec du caractère.\n\n🍓 Notes fruitées et gourmandes\n💎 Qualité VVS bien travaillée\n🔥 Produit sélectionné pour son goût, son visuel et sa finition propre.",
          tarifs: [
            { weight: "5G", price: 70.0 },
            { weight: "10G", price: 130.0 },
          ],
        },
         {
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
        },
        {
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
        },
        {
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
        },
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
        {
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
        },
        {
          id: "Frozen buffy 🇹🇭🇺🇸",
          flag: "🇺🇸",
          name: "Frozen buffy 🇹🇭🇺🇸",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          featured: true,
          type: "❄️ Frozen ❄️",
          selectionType: "❄️ Frozen ❄️",
          image: "ProductFB1.png",
          video: "VideoFB1.mp4",
          /* image: 'ProductSift.jpg',
                            images: ['ProductSift.jpg','ProductTangier.jpg','ProductGrappe.jpg'],
                            videos: [
                                'VideoTangier.mp4', // Ta 1ère vidéo
                                'VideoGrappe.mp4', // Ta 1ère vidéo
                                'VideoSift.mov', // Ta 1ère vidéo
                                'VideoSift2.mov'  // Ta 2ème vidéo
                            ], */
          description:
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
        },
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
        {
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
        },
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

    {
      id: "BLANCHE",
      name: "🔌 BLANCHE ☣️",
      type: "Blanche",
      quality: "🤍 Spécial",
      image: "CategBlanche.png",
      products: [
        {
          id: "Cc 🇨🇴",
          flag: "🇨🇴",
          name: "Cc 🇨🇴",
          farm: "Nice'Selection 🧞",
          promoEligible: true,
          featured: true,
          type: "Hash",
          image: "ProductC.png",
          video: "VideoC.mov",
          description:
            "Produit spécial disponible selon arrivage.\n\n📲 Pour plus d’informations, passe en privé.",
          tarifs: [
            { weight: "1c", price: 60.0 },
            { weight: "3c", price: 160.0 },
            { weight: "5c", price: 250.0 },
            { weight: "11c", price: 500.0 },
          ],
        },
      ], // Les produits s'insèrent directement ici
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

    appData.forEach((category) => {
      let productsInCategory = [];

      // Cas catégorie simple avec products directement
      if (category.products) {
        productsInCategory = category.products.map((product) => ({
          product,
          category,
        }));
      }

      // Cas ancien système avec farms
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

      const filteredProducts = productsInCategory.filter(
        ({ product, category }) => {
          const productName = product.name ? product.name.toLowerCase() : "";
          const productFarm = product.farm ? product.farm.toLowerCase() : "";
          const categoryName = category.name ? category.name.toLowerCase() : "";

          const searchMatch =
            searchTerm === "" ||
            productName.includes(searchTerm) ||
            productFarm.includes(searchTerm) ||
            categoryName.includes(searchTerm);

          let selectMatch = true;

// Sélection du chef = tous les produits mis en avant
if (currentFilters.quality === "chef") {
  selectMatch = product.featured === true;
}

// Filtre par type : Dry, VVS, Static VVS, Frozen Sift, Fleurs...
else if (currentFilters.quality !== "all") {
  selectMatch = product.selectionType === currentFilters.quality;
}

return searchMatch && selectMatch;
        },
      );

      if (filteredProducts.length === 0) return;

      hasResults = true;

      const section = document.createElement("section");
      section.className = `home-category-section category-${category.id}`;

      section.innerHTML = `
            <h2 class="home-category-title">${category.name}</h2>
            <div class="home-products-grid"></div>
        `;

      const grid = section.querySelector(".home-products-grid");

      filteredProducts.forEach(({ product }) => {
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

        let imgHTML = "";
        if (product.image && product.image !== "") {
          imgHTML = `<img src="${product.image}" alt="${product.name}">`;
        }

        const firstPrice =
          product.tarifs && product.tarifs.length > 0
            ? product.tarifs[0].price.toFixed(2)
            : "0.00";

        const mediaHTML = product.image
          ? `<div class="product-media"><img src="${product.image}" alt="${product.name}"></div>`
          : `<div class="product-media product-media-empty"></div>`;

        card.innerHTML = `
    ${mediaHTML}
    <div class="info">
        <div class="name">${product.name} ${flagHTML}</div>
        <div class="farm">${product.farm}</div>
        <div class="price">${typeof product.tarifs[0].price === "number" ? product.tarifs[0].price.toFixed(2) + "€" : product.tarifs[0].price}</div>
    </div>
`;

        grid.appendChild(card);
      });

      productListContainer.appendChild(section);
    });

    if (!hasResults) {
      productListContainer.innerHTML =
        '<p class="no-results">Aucun produit trouvé.</p>';
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
            ${packLinksHTML} ${descriptionHTML}
                        ${variantsHTML}
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid-container">${tarifsHTML}</div>
        `;

    showPage("page-product");

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
    const total = getCartTotal();

    if (total < 100) {
        const missing = 100 - total;

        rouletteSpun = false;
        rouletteWon = false;

        return `
            <div class="roulette-alert">
                🎰 Roulette débloquée dès 100€ d'achat.<br>
                Il manque encore ${missing.toFixed(2)}€.
            </div>
        `;
    }

    if (rouletteSpun) {
        return `
            <div class="roulette-box">
                <h4>🎰 Roulette pour les commandes a plus de 100€</h4>
                <div class="roulette-wheel">🎁</div>

                <div class="roulette-result">
                    ${rouletteWon 
                        ? `✅ Bravo, tu as gagné :<br>${roulettePrizeLabel}` 
                        : `❌ Dommage, pas gagné cette fois.`}
                </div>
            </div>
        `;
    }

    return `
        <div class="roulette-box">
            <h4>🎰 Roulette débloquée</h4>
            <p>1 chance sur 3 de gagner un cadeau offert</p>

            <div id="roulette-wheel" class="roulette-wheel">🎁</div>

            <button id="roulette-spin-btn" class="roulette-btn" type="button">
                Lancer la roulette
            </button>
        </div>
    `;
}

function spinRewardRoulette() {
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
}

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

  init();
});
