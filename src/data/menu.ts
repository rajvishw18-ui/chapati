import paneerTikka from "@/assets/dishes/paneer-tikka.jpg";
import haraBharaKabab from "@/assets/dishes/hara-bhara-kabab.jpg";
import tandooriMushroom from "@/assets/dishes/tandoori-mushroom.jpg";
import dalMakhani from "@/assets/dishes/dal-makhani.jpg";
import paneerButterMasala from "@/assets/dishes/paneer-butter-masala.jpg";
import vegKolhapuri from "@/assets/dishes/veg-kolhapuri.jpg";
import butterNaan from "@/assets/dishes/butter-naan.jpg";
import gulabJamun from "@/assets/dishes/gulab-jamun.jpg";
import rasmalai from "@/assets/dishes/rasmalai.jpg";
import masalaChai from "@/assets/dishes/masala-chai.jpg";
import mangoLassi from "@/assets/dishes/mango-lassi.jpg";
import limeSoda from "@/assets/dishes/lime-soda.jpg";
import jeeraRice from "@/assets/dishes/jeera-rice.jpg";
import vegManchurian from "@/assets/dishes/veg-manchurian.jpg";
import masalaDosa from "@/assets/dishes/masala-dosa.jpg";
import greenSalad from "@/assets/dishes/green-salad.jpg";
import masalaPapad from "@/assets/dishes/masala-papad.jpg";
import thali from "@/assets/dishes/thali.jpg";
import chowMein from "@/assets/dishes/chow-mein.jpg";
import alooGobhi from "@/assets/dishes/aloo-gobhi.jpg";

export type Lang = "en" | "hi";
export type Diet = "veg" | "jain";
export type Variant = "half" | "full";
export type CategoryId =
  | "starter"
  | "indian"
  | "roti"
  | "thali"
  | "rice"
  | "chinese"
  | "southindian"
  | "papaddahi"
  | "salad"
  | "drink"
  | "sweets";

export type Localized = Record<Lang, string>;

export interface Review {
  name: string;
  rating: number;
  date: string;
  text: Localized;
}

export interface Dish {
  id: string;
  name: Localized;
  description: Localized;
  price: number;
  halfPrice?: number;
  category: CategoryId;
  diet: Diet;
  image: string;
  spice: 0 | 1 | 2 | 3;
  chefPick?: boolean;
  tags: string[];
  rating: number;
  ratingBreakdown: [number, number, number, number, number];
  /** Kitchen estimate in minutes, [min, max]. */
  prepTime: [number, number];
  reviews: Review[];
  combos: string[];

}

export const categories: { id: CategoryId; label: Localized }[] = [
  { id: "starter", label: { en: "Starters", hi: "स्टार्टर" } },
  { id: "indian", label: { en: "Indian", hi: "इंडियन" } },
  { id: "roti", label: { en: "Roti / Paratha", hi: "रोटी / पराठा" } },
  { id: "thali", label: { en: "Thali", hi: "थाली" } },
  { id: "rice", label: { en: "Rice", hi: "चावल" } },
  { id: "chinese", label: { en: "Chinese", hi: "चायनीज़" } },
  { id: "southindian", label: { en: "South Indian", hi: "साउथ इंडियन" } },
  { id: "papaddahi", label: { en: "Papad / Dahi", hi: "पापड़ / दही" } },
  { id: "salad", label: { en: "Salad", hi: "सलाद" } },
  { id: "drink", label: { en: "Drinks", hi: "पेय" } },
  { id: "sweets", label: { en: "Sweets", hi: "मिठाई" } },
];

const images: Record<string, string> = {
  paneerTikka,
  haraBharaKabab,
  tandooriMushroom,
  dalMakhani,
  paneerButterMasala,
  vegKolhapuri,
  butterNaan,
  gulabJamun,
  rasmalai,
  masalaChai,
  mangoLassi,
  limeSoda,
  jeeraRice,
  vegManchurian,
  masalaDosa,
  greenSalad,
  masalaPapad,
  thali,
  chowMein,
  alooGobhi,
};

const categoryDescription: Record<CategoryId, Localized> = {
  starter: {
    en: "Fresh from the kadhai, served hot with green chutney.",
    hi: "कढ़ाई से सीधे गरम, हरी चटनी के साथ परोसा गया।",
  },
  indian: {
    en: "Slow-cooked in our house masala, best with tandoori roti or rice.",
    hi: "घर के मसाले में धीमी आँच पर पका, रोटी या चावल के साथ बढ़िया।",
  },
  roti: {
    en: "Baked to order in the tandoor and brushed with butter.",
    hi: "ऑर्डर पर तंदूर में सिकी और मक्खन लगी हुई।",
  },
  thali: {
    en: "A complete plate — sabzi, dal, roti, rice, salad and sweet.",
    hi: "पूरी थाली — सब्ज़ी, दाल, रोटी, चावल, सलाद और मिठाई।",
  },
  rice: {
    en: "Long-grain basmati, steamed light and fluffy.",
    hi: "लंबे दाने वाला बासमती, हल्का और खिला-खिला।",
  },
  chinese: {
    en: "Indo-Chinese, wok-tossed with garlic, chilli and soy.",
    hi: "इंडो-चायनीज़, लहसुन, मिर्च और सोया के साथ भुना।",
  },
  southindian: {
    en: "Crisp and light, served with sambar and coconut chutney.",
    hi: "कुरकुरा और हल्का, सांबर व नारियल चटनी के साथ।",
  },
  papaddahi: {
    en: "Cooling side to balance a spicy plate.",
    hi: "तीखे खाने के साथ ठंडक देने वाली साइड डिश।",
  },
  salad: {
    en: "Cut fresh on order with lemon and rock salt.",
    hi: "ऑर्डर पर ताज़ा काटा गया, नींबू और सेंधा नमक के साथ।",
  },
  drink: {
    en: "Brewed and served the way it should be.",
    hi: "जैसा बनना चाहिए, वैसा बना और परोसा गया।",
  },
  sweets: {
    en: "Made in-house every morning.",
    hi: "हर सुबह रसोई में ताज़ा बनाई गई।",
  },
};

const overrides: Record<string, Localized> = {
  "dal-tadka": {
    en: "Yellow lentils finished with a sizzling ghee, cumin and garlic tadka.",
    hi: "पीली दाल, ऊपर से घी, जीरा और लहसुन का चटकता तड़का।",
  },
  "kaju-paneer": {
    en: "Paneer and roasted cashews in a rich, mildly sweet white gravy.",
    hi: "पनीर और भुने काजू, गाढ़ी और हल्की मीठी सफ़ेद ग्रेवी में।",
  },
  "butter-paneer-masala": {
    en: "Soft paneer in a velvety tomato-cashew gravy finished with white butter.",
    hi: "मलाईदार टमाटर-काजू ग्रेवी में मुलायम पनीर, ऊपर सफ़ेद मक्खन।",
  },
  "malai-kofta": {
    en: "Paneer and potato dumplings resting in a creamy saffron gravy.",
    hi: "पनीर-आलू के कोफ्ते, मलाईदार केसरिया ग्रेवी में।",
  },
  "palak-paneer": {
    en: "Fresh spinach purée with cubes of home-set paneer.",
    hi: "ताज़ा पालक की प्यूरी में घर के बने पनीर के टुकड़े।",
  },
  "baigan-bharta": {
    en: "Fire-roasted aubergine mashed with onion, tomato and green chilli.",
    hi: "आग पर भुना बैंगन, प्याज़, टमाटर और हरी मिर्च के साथ।",
  },
  "butter-naan": {
    en: "Tandoor-baked leavened bread brushed generously with white butter.",
    hi: "तंदूर में सिकी नान, ऊपर से सफ़ेद मक्खन लगाकर परोसी गई।",
  },
  "daal-bati": {
    en: "Baked wheat batis crushed in ghee with panchmel dal and churma.",
    hi: "घी में चूरी हुई बाटी, पंचमेल दाल और चूरमे के साथ।",
  },
  "special-thali": {
    en: "Two sabzis, dal, rice, four rotis, salad, papad, dahi and a sweet.",
    hi: "दो सब्ज़ी, दाल, चावल, चार रोटी, सलाद, पापड़, दही और मिठाई।",
  },
  "masala-dosa": {
    en: "Crisp rice crêpe filled with spiced potato, sambar and chutney.",
    hi: "कुरकुरा दोसा, मसाला आलू भरकर, सांबर-चटनी के साथ।",
  },
  "masala-papad": {
    en: "Roasted papad topped with onion, tomato, coriander and chaat masala.",
    hi: "भुना पापड़, ऊपर प्याज़, टमाटर, धनिया और चाट मसाला।",
  },
  "gulab-jaamoon": {
    en: "Warm khoya dumplings soaked in cardamom-rose syrup.",
    hi: "इलायची-गुलाब की चाशनी में डूबे गरम खोया जामुन।",
  },
  chai: {
    en: "Assam tea brewed with ginger, cardamom and clove.",
    hi: "अदरक, इलायची और लौंग के साथ बनी असम की चाय।",
  },
  lassi: {
    en: "Thick sweet curd blended smooth and served chilled.",
    hi: "गाढ़ी मीठी दही की लस्सी, ठंडी परोसी गई।",
  },
};

const reviewPool: Review[] = [
  {
    name: "Ananya S.",
    rating: 5,
    date: "12 Jun 2026",
    text: {
      en: "Fresh, hot and generous portions. Exactly what we wanted.",
      hi: "ताज़ा, गरम और भरपूर मात्रा। बिल्कुल वैसा ही जैसा चाहिए था।",
    },
  },
  {
    name: "Rohit M.",
    rating: 4,
    date: "3 Jun 2026",
    text: {
      en: "Good taste and very reasonable for the price.",
      hi: "स्वाद अच्छा और दाम के हिसाब से बहुत सही।",
    },
  },
  {
    name: "Meera J.",
    rating: 5,
    date: "8 Jun 2026",
    text: {
      en: "Home-style cooking, not oily at all. Family loved it.",
      hi: "घर जैसा खाना, बिल्कुल भी तैलीय नहीं। परिवार को बहुत पसंद आया।",
    },
  },
  {
    name: "Kabir N.",
    rating: 4,
    date: "14 Jun 2026",
    text: {
      en: "Served quickly even when the hall was full.",
      hi: "हॉल भरा होने पर भी जल्दी परोसा गया।",
    },
  },
  {
    name: "Hetal D.",
    rating: 5,
    date: "5 Jun 2026",
    text: {
      en: "Half plate is enough for one, full plate easily feeds two.",
      hi: "हाफ प्लेट एक के लिए काफ़ी, फुल प्लेट में दो लोग आराम से।",
    },
  },
  {
    name: "Ravi L.",
    rating: 4,
    date: "9 Jun 2026",
    text: {
      en: "Spice level is just right. Would order again.",
      hi: "तीखापन एकदम सही। दोबारा ज़रूर मंगवाएँगे।",
    },
  },
];

/** [id, en, hi, category, halfPrice(0 = none), fullPrice, diet, imageKey, spice] */
type Raw = [
  string,
  string,
  string,
  CategoryId,
  number,
  number,
  Diet,
  string,
  0 | 1 | 2 | 3,
];

const raw: Raw[] = [
  // Starters
  ["paneer-pakoda", "Paneer Pakoda", "पनीर पकोड़ा", "starter", 0, 80, "veg", "paneerTikka", 1],
  ["veg-pakoda", "Veg Pakoda", "वेज पकोड़ा", "starter", 0, 60, "veg", "haraBharaKabab", 1],
  ["tamatar-soup", "Tamatar Soup", "टमाटर सूप", "starter", 0, 60, "jain", "vegKolhapuri", 0],
  ["manchau-soup", "Manchau Soup", "मंचाऊ सूप", "starter", 0, 80, "veg", "vegManchurian", 1],
  ["paneer-tikka", "Paneer Tikka", "पनीर टिक्का", "starter", 0, 180, "veg", "paneerTikka", 2],
  ["tandoori-mushroom", "Tandoori Mushroom", "तंदूरी मशरूम", "starter", 0, 160, "veg", "tandooriMushroom", 1],

  // Indian
  ["dal-tadka", "Dal Tadka", "दाल तड़का", "indian", 60, 90, "veg", "dalMakhani", 1],
  ["kaju-kari", "Kaju Kari", "काजू करी", "indian", 120, 180, "veg", "paneerButterMasala", 1],
  ["dal-fry", "Dal Fry", "दाल फ्राई", "indian", 50, 80, "veg", "dalMakhani", 1],
  ["aloo-matar", "Aloo Matar", "आलू मटर", "indian", 60, 90, "veg", "alooGobhi", 1],
  ["aloo-masala", "Aloo Masala", "आलू मसाला", "indian", 60, 90, "veg", "alooGobhi", 1],
  ["aloo-gobhi", "Aloo Gobhi", "आलू गोभी", "indian", 60, 90, "veg", "alooGobhi", 1],
  ["aloo-tamatar", "Aloo Tamatar", "आलू टमाटर", "indian", 60, 90, "veg", "alooGobhi", 1],
  ["aloo-chole", "Aloo Chole", "आलू छोले", "indian", 60, 90, "veg", "vegKolhapuri", 2],
  ["kaju-paneer", "Kaju Paneer", "काजू पनीर", "indian", 150, 180, "veg", "paneerButterMasala", 1],
  ["dum-aloo", "Dum Aloo", "दम आलू", "indian", 70, 100, "veg", "alooGobhi", 2],
  ["bhindi-fry", "Bhindi Fry", "भिंडी फ्राई", "indian", 60, 90, "veg", "vegKolhapuri", 1],
  ["bhindi-maala", "Bhindi Maala", "भिंडी माला", "indian", 60, 90, "veg", "vegKolhapuri", 1],
  ["aloo-palak", "Aloo Palak", "आलू पालक", "indian", 60, 90, "veg", "vegKolhapuri", 1],
  ["mix-veg", "Mix Veg", "मिक्स वेज", "indian", 80, 120, "veg", "vegKolhapuri", 1],
  ["chana-masala", "Chana Masala", "चना मसाला", "indian", 60, 90, "veg", "vegKolhapuri", 2],
  ["baigan-bharta", "Baigan Bharta", "बैंगन भरता", "indian", 60, 90, "veg", "vegKolhapuri", 2],
  ["palak-paneer", "Palak Paneer", "पालक पनीर", "indian", 100, 140, "veg", "paneerButterMasala", 1],
  ["sev-bhaji", "Sev Bhaji", "सेव भाजी", "indian", 60, 100, "veg", "vegKolhapuri", 2],
  ["sev-tamatar", "Sev Tamatar", "सेव टमाटर", "indian", 60, 90, "veg", "vegKolhapuri", 2],
  ["matar-paneer", "Matar Paneer", "मटर पनीर", "indian", 80, 120, "veg", "paneerButterMasala", 1],
  ["paneer-masala", "Paneer Masala", "पनीर मसाला", "indian", 80, 120, "veg", "paneerButterMasala", 2],
  ["butter-paneer-masala", "Butter Paneer Masala", "बटर पनीर मसाला", "indian", 100, 140, "veg", "paneerButterMasala", 1],
  ["kadai-paneer", "Kadai Paneer", "कड़ाही पनीर", "indian", 100, 140, "veg", "paneerButterMasala", 2],
  ["paneer-korma", "Paneer Korma", "पनीर कोरमा", "indian", 100, 140, "veg", "paneerButterMasala", 1],
  ["malai-kofta", "Malai Kofta", "मलाई कोफ्ता", "indian", 100, 150, "veg", "paneerButterMasala", 1],
  ["paneer-kofta", "Paneer Kofta", "पनीर कोफ्ता", "indian", 100, 150, "veg", "paneerButterMasala", 1],
  ["paneer-tikka-masala", "Paneer Tikka Masala", "पनीर टिक्का मसाला", "indian", 100, 150, "veg", "paneerTikka", 2],
  ["paneer-pansanda", "Paneer Pansanda", "पनीर पसंदा", "indian", 120, 150, "veg", "paneerButterMasala", 1],
  ["paneer-do-pyaza", "Paneer Do Pyaza", "पनीर दो प्याज़ा", "indian", 100, 140, "veg", "paneerButterMasala", 2],
  ["paneer-bhurji", "Paneer Bhurji", "पनीर भुर्जी", "indian", 100, 150, "veg", "paneerTikka", 2],
  ["paneer-chole", "Paneer Chole", "पनीर छोले", "indian", 80, 120, "veg", "vegKolhapuri", 2],
  ["matar-masala", "Matar Masala", "मटर मसाला", "indian", 80, 120, "veg", "vegKolhapuri", 1],
  ["saahi-paneer", "Saahi Paneer", "शाही पनीर", "indian", 100, 120, "veg", "paneerButterMasala", 1],
  ["chili-paneer", "Chili Paneer", "चिली पनीर", "indian", 100, 140, "veg", "paneerTikka", 3],
  ["kashmiri-dum-aalu", "Kashmiri Dum Aalu", "कश्मीरी दम आलू", "indian", 80, 120, "veg", "alooGobhi", 2],
  ["paneer-chatpata", "Paneer Chatpata", "पनीर चटपटा", "indian", 80, 120, "veg", "paneerTikka", 3],
  ["paneer-jampuri", "Paneer Jampuri", "पनीर जामपुरी", "indian", 80, 120, "veg", "paneerButterMasala", 2],
  ["paneer-labavda", "Paneer Labavda", "पनीर लबाबदार", "indian", 100, 150, "veg", "paneerButterMasala", 2],
  ["haandi-paneer", "Haandi Paneer", "हांडी पनीर", "indian", 100, 140, "veg", "paneerButterMasala", 2],
  ["paneer-bundelkhandi", "Paneer Bundelkhandi", "पनीर बुंदेलखंडी", "indian", 80, 140, "veg", "paneerButterMasala", 3],

  // Roti / Paratha
  ["sada-roti", "Sada Roti", "सादा रोटी", "roti", 0, 7, "jain", "butterNaan", 0],
  ["tandoori-roti", "Tandoori Roti", "तंदूरी रोटी", "roti", 0, 8, "jain", "butterNaan", 0],
  ["tandoori-roti-butter", "Tandoori Roti Butter", "तंदूरी रोटी बटर", "roti", 0, 10, "jain", "butterNaan", 0],
  ["sada-roti-butter", "Sada Roti Butter", "सादा रोटी बटर", "roti", 0, 8, "jain", "butterNaan", 0],
  ["missi-roti", "Missi Roti", "मिस्सी रोटी", "roti", 0, 30, "veg", "butterNaan", 1],
  ["butter-naan", "Butter Naan", "बटर नान", "roti", 0, 40, "veg", "butterNaan", 0],
  ["laksha-paratha", "Laksha Paratha", "लच्छा पराठा", "roti", 0, 40, "veg", "butterNaan", 0],
  ["aloo-paratha", "Aloo Paratha", "आलू पराठा", "roti", 0, 40, "veg", "butterNaan", 1],
  ["paneer-paratha", "Paneer Paratha", "पनीर पराठा", "roti", 0, 80, "veg", "butterNaan", 1],
  ["pyaj-paratha", "Pyaj Paratha", "प्याज़ पराठा", "roti", 0, 60, "veg", "butterNaan", 1],
  ["gobhi-paratha", "Gobhi Paratha", "गोभी पराठा", "roti", 0, 50, "veg", "butterNaan", 1],
  ["mix-paratha", "Mix Paratha", "मिक्स पराठा", "roti", 0, 60, "veg", "butterNaan", 1],

  // Thali
  ["sada-thali", "Sada Thali", "सादा थाली", "thali", 0, 80, "veg", "thali", 1],
  ["special-thali", "Special Thali", "स्पेशल थाली", "thali", 0, 150, "veg", "thali", 1],
  ["paneer-thali", "Paneer Thali", "पनीर थाली", "thali", 0, 100, "veg", "thali", 1],
  ["daal-bati", "Daal Bati", "दाल बाटी", "thali", 0, 100, "veg", "thali", 1],

  // Rice
  ["sada-rice", "Sada Rice", "सादा चावल", "rice", 30, 50, "jain", "jeeraRice", 0],
  ["jeera-rice", "Jeera Rice", "जीरा राइस", "rice", 40, 60, "jain", "jeeraRice", 0],
  ["matar-pulav", "Matar Pulav", "मटर पुलाव", "rice", 60, 80, "veg", "jeeraRice", 1],
  ["veg-pulav", "Veg Pulav", "वेज पुलाव", "rice", 60, 80, "veg", "jeeraRice", 1],
  ["fried-rice", "Fried Rice", "फ्राइड राइस", "rice", 70, 100, "veg", "jeeraRice", 1],
  ["paneer-fried-rice", "Paneer Fried Rice", "पनीर फ्राइड राइस", "rice", 70, 110, "veg", "jeeraRice", 1],

  // Chinese
  ["veg-manchurian-dry", "Veg Manchurian Dry", "वेज मंचूरियन ड्राई", "chinese", 0, 100, "veg", "vegManchurian", 2],
  ["veg-manchurian-gravy", "Veg Manchurian Gravy", "वेज मंचूरियन ग्रेवी", "chinese", 0, 120, "veg", "vegManchurian", 2],
  ["chow-mein", "Chow Mein", "चाउमीन", "chinese", 0, 60, "veg", "chowMein", 2],
  ["hakka-noddles", "Hakka Noodles", "हक्का नूडल्स", "chinese", 0, 60, "veg", "chowMein", 2],
  ["chilli-potato", "Chilli Potato", "चिल्ली पोटैटो", "chinese", 0, 100, "veg", "vegManchurian", 3],
  ["honey-chilli-potato", "Honey Chilli Potato", "हनी चिल्ली पोटैटो", "chinese", 0, 120, "veg", "vegManchurian", 2],
  ["finger-chips", "Finger Chips", "फिंगर चिप्स", "chinese", 0, 50, "veg", "vegManchurian", 0],
  ["masala-maggi", "Masala Maggi", "मसाला मैगी", "chinese", 0, 40, "veg", "chowMein", 1],
  ["butter-maggi", "Butter Maggi", "बटर मैगी", "chinese", 0, 60, "veg", "chowMein", 1],

  // South Indian
  ["masala-dosa", "Masala Dosa", "मसाला दोसा", "southindian", 0, 100, "veg", "masalaDosa", 1],
  ["onion-dosa", "Onion Dosa", "प्याज़ दोसा", "southindian", 0, 100, "veg", "masalaDosa", 1],
  ["paneer-dosa", "Paneer Dosa", "पनीर दोसा", "southindian", 0, 120, "veg", "masalaDosa", 1],
  ["idli", "Idli", "इडली", "southindian", 0, 60, "jain", "masalaDosa", 0],

  // Papad / Dahi
  ["papad-dry", "Papad Dry", "पापड़ ड्राई", "papaddahi", 0, 10, "jain", "masalaPapad", 0],
  ["papad-fry", "Papad Fry", "पापड़ फ्राई", "papaddahi", 0, 15, "jain", "masalaPapad", 0],
  ["dahi", "Dahi", "दही", "papaddahi", 0, 30, "jain", "greenSalad", 0],
  ["bundi-rayta", "Bundi Rayta", "बूंदी रायता", "papaddahi", 0, 50, "veg", "greenSalad", 0],
  ["veg-rayta", "Veg Rayta", "वेज रायता", "papaddahi", 0, 60, "veg", "greenSalad", 0],
  ["chansh", "Chhachh", "छाछ", "papaddahi", 0, 40, "jain", "mangoLassi", 0],
  ["masala-papad", "Masala Papad", "मसाला पापड़", "papaddahi", 0, 30, "veg", "masalaPapad", 1],

  // Salad
  ["onion-salad", "Onion Salad", "प्याज़ सलाद", "salad", 0, 30, "veg", "greenSalad", 0],
  ["green-salad", "Green Salad", "ग्रीन सलाद", "salad", 0, 40, "jain", "greenSalad", 0],
  ["kachumar-salad", "Kachumar Salad", "कचूमर सलाद", "salad", 0, 50, "veg", "greenSalad", 0],

  // Drinks
  ["chai", "Chai", "चाय", "drink", 0, 20, "jain", "masalaChai", 0],
  ["coffee", "Coffee", "कॉफ़ी", "drink", 0, 30, "jain", "masalaChai", 0],
  ["lassi", "Lassi", "लस्सी", "drink", 0, 50, "jain", "mangoLassi", 0],
  ["lime-soda", "Fresh Lime Soda", "फ्रेश लाइम सोडा", "drink", 0, 40, "jain", "limeSoda", 0],

  // Sweets
  ["rasgulla", "Rasgulla", "रसगुल्ला", "sweets", 0, 20, "veg", "rasmalai", 0],
  ["gulab-jaamoon", "Gulab Jamun", "गुलाब जामुन", "sweets", 0, 15, "veg", "gulabJamun", 0],
];

const chefPicks = new Set([
  "butter-paneer-masala",
  "special-thali",
  "dal-tadka",
  "masala-dosa",
  "malai-kofta",
  "daal-bati",
]);

const comboByCategory: Record<CategoryId, string[]> = {
  starter: ["masala-chai-placeholder", "lassi", "green-salad"],
  indian: ["butter-naan", "jeera-rice", "lassi"],
  roti: ["dal-tadka", "butter-paneer-masala", "dahi"],
  thali: ["masala-papad", "lassi", "gulab-jaamoon"],
  rice: ["dal-tadka", "bundi-rayta", "papad-fry"],
  chinese: ["chow-mein", "veg-manchurian-gravy", "lime-soda"],
  southindian: ["chai", "coffee", "green-salad"],
  papaddahi: ["dal-tadka", "sada-rice", "tandoori-roti"],
  salad: ["butter-naan", "dal-tadka", "chhachh-placeholder"],
  drink: ["masala-papad", "veg-pakoda", "gulab-jaamoon"],
  sweets: ["chai", "lassi", "special-thali"],
};

const ratingSet: [number, [number, number, number, number, number]][] = [
  [4.7, [182, 44, 9, 3, 1]],
  [4.5, [140, 51, 14, 5, 2]],
  [4.4, [96, 40, 12, 4, 1]],
  [4.6, [204, 60, 11, 3, 1]],
  [4.3, [88, 42, 14, 5, 2]],
  [4.8, [230, 40, 7, 2, 1]],
];

/** Kitchen prep estimates in minutes by section. */
const prepByCategory: Record<CategoryId, [number, number]> = {
  starter: [10, 18],
  indian: [15, 20],
  roti: [5, 10],
  thali: [20, 25],
  rice: [12, 18],
  chinese: [12, 18],
  southindian: [10, 15],
  papaddahi: [4, 8],
  salad: [5, 8],
  drink: [3, 6],
  sweets: [3, 6],
};

export const dishes: Dish[] = raw.map(
  ([id, en, hi, category, half, full, diet, imageKey, spice], index) => {
    const [rating, ratingBreakdown] = ratingSet[index % ratingSet.length];
    const combos = comboByCategory[category].filter((c) => c !== id && !c.includes("placeholder"));
    return {
      id,
      name: { en, hi },
      description: overrides[id] ?? categoryDescription[category],
      price: full,
      halfPrice: half > 0 ? half : undefined,
      category,
      diet,
      image: images[imageKey],
      spice,
      chefPick: chefPicks.has(id) || undefined,
      tags: en.toLowerCase().split(" ").concat(category),
      rating,
      ratingBreakdown,
      prepTime: prepByCategory[category],
      reviews: [reviewPool[index % reviewPool.length], reviewPool[(index + 3) % reviewPool.length]],

      combos: combos.slice(0, 3),
    };
  },
);

export const getDish = (id: string) => dishes.find((d) => d.id === id);

export const priceOf = (dish: Dish, variant: Variant) =>
  variant === "half" && dish.halfPrice ? dish.halfPrice : dish.price;

export const formatPrice = (value: number) =>
  `₹${value.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

export const hotel = {
  name: "Chapati.com",
  kind: { en: "Hotel & Restaurant", hi: "होटल एवं रेस्टोरेंट" },
  facilities: {
    en: ["Hotel rooms", "Party hall", "Meeting hall", "Marriage garden"],
    hi: ["होटल रूम", "पार्टी हॉल", "मीटिंग हॉल", "मैरिज गार्डन"],
  },
  phones: ["+91 91314 73516", "+91 96693 17501", "+91 70008 66838"],
};
