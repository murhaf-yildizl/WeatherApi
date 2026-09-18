import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    detection: {               
    order: ['navigator'],    //  يقرأ لغة المتصفح
    cacheUserLanguage: false,
    
  },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
        en:{
            translation:{
             'Agra':'Taj Mahal',
              max:"max",
              min:"min"  
            }
        }
        ,
      ar: {
    translation: {
     'Damascus':'دمشق', 
     'Baghdad':'بغداد',
     'Riyadh':'الرياض', 
     'Makkah al Mukarramah':'مكة المكرمة',
     'Doha':'الدوحة',
     'Dubai':'دبي',
     'Istanbul':'اسطنبول',   
     'Berlin':'برلين',
     'London':'لندن',
     'Washington':'واشنطن',
     'Moscow':'موسكو',
     'Rome':'روما',    
     "Jakarta":'جاكرتا',
     "Agra":'تاج محــل', 
      max:"العظمى",
      min:"الدنيا" ,

      // Thunderstorm
      "thunderstorm with light rain":   "عاصفة رعدية مع مطر خفيف",
      "thunderstorm with rain":         "عاصفة رعدية مع مطر",
      "thunderstorm with heavy rain":   "عاصفة رعدية مع مطر غزير",
      "light thunderstorm":             "عاصفة رعدية خفيفة",
      "thunderstorm":                   "عاصفة رعدية",
      "heavy thunderstorm":             "عاصفة رعدية شديدة",
      "ragged thunderstorm":            "عاصفة رعدية متقطعة",
      "thunderstorm with light drizzle":"عاصفة رعدية مع رذاذ خفيف",
      "thunderstorm with drizzle":      "عاصفة رعدية مع رذاذ",
      "thunderstorm with heavy drizzle":"عاصفة رعدية مع رذاذ كثيف",
      // Drizzle
      "light intensity drizzle":        "رذاذ خفيف",
      "drizzle":                        "رذاذ",
      "heavy intensity drizzle":        "رذاذ كثيف",
      "light intensity drizzle rain":   "مطر رذاذ خفيف",
      "drizzle rain":                   "مطر رذاذ",
      "heavy intensity drizzle rain":   "مطر رذاذ كثيف",
      "shower rain and drizzle":        "زخات مطر ورذاذ",
      "heavy shower rain and drizzle":  "زخات مطر كثيفة ورذاذ",
      "shower drizzle":                 "زخات رذاذ",
      // Rain
      "light rain":                     "مطر خفيف",
      "moderate rain":                  "مطر معتدل",
      "heavy intensity rain":           "مطر غزير",
      "very heavy rain":                "مطر شديد الغزارة",
      "extreme rain":                   "مطر استثنائي",
      "freezing rain":                  "مطر متجمد",
      "light intensity shower rain":    "زخات مطر خفيفة",
      "shower rain":                    "زخات مطر",
      "heavy intensity shower rain":    "زخات مطر غزيرة",
      "ragged shower rain":             "زخات مطر متقطعة",
      // Snow
      "light snow":                     "ثلج خفيف",
      "snow":                           "ثلج",
      "heavy snow":                     "ثلج كثيف",
      "sleet":                          "مطر جليدي",
      "light shower sleet":             "زخات جليدية خفيفة",
      "shower sleet":                   "زخات جليدية",
      "light rain and snow":            "مطر خفيف وثلج",
      "rain and snow":                  "مطر وثلج",
      "light shower snow":              "زخات ثلج خفيفة",
      "shower snow":                    "زخات ثلج",
      "heavy shower snow":              "زخات ثلج كثيفة",
      // Atmosphere
      "mist":                           "ضباب خفيف",
      "smoke":                          "دخان",
      "haze":                           "ضبابية",
      "sand/dust whirls":               "عواصف رملية",
      "fog":                            "ضباب",
      "sand":                           "عاصفة رملية",
      "dust":                           "غبار",
      "volcanic ash":                   "رماد بركاني",
      "squalls":                        "عواصف",
      "tornado":                        "إعصار",
      // Clear
      "clear sky":                      "سماء صافية",
      // Clouds
      "few clouds":                     "غيوم قليلة",
      "scattered clouds":               "غيوم متفرقة",
      "broken clouds":                  "غيوم متقطعة",
      "overcast clouds":                "غيوم كثيفة",
    }
  },

  tr: {
    translation: {
      'clear sky': "acik gokyuzu",
      'scattered clouds':'parcali bulutlu',
      max:"maks",
      min:"min"
    }
  }
    }
  });

export default i18n;



