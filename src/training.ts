export const trainingScheduleFull = [
  {
    id: "ПН",
    day: "ПОНЕДЕЛЬНИК",
    type: "HIGH-LOW СПЛИТ",
    sessions: [
      {
        time: "06:00 (Утро)",
        location: "УЛИЦА",
        cns: "LOW-CNS",
        cnsColor: "text-cyan-400 border-cyan-400 bg-cyan-400/10",
        supplements: "💊 В любое время: Креатин (1 ложка). 🥤 Днем или после вечернего зала: Протеин (1 порция).",
        exercises: [
          {
            title: "1. Penultimate Jab Drill",
            description: "Отработка низкого центра тяжести перед прыжком.",
            dosage: "3 сета х 5 раз на ногу",
            video: "https://www.youtube.com/watch?v=gH7i6Ngqryw"
          },
          {
            title: "2. Walk-throughs (Разбег и Стопор)",
            description: "Отработка маха рук и жесткой постановки стопора без прыжка.",
            dosage: "10 проходок",
            video: "https://www.youtube.com/watch?v=SUEtlrbbOVM"
          }
        ]
      },
      {
        time: "19:00 (Вечер)",
        location: "ЗАЛ",
        cns: "HIGH-CNS",
        cnsColor: "text-[#ccff00] border-[#ccff00] bg-[#ccff00]/10",
        supplements: "🎯 За 45-60 мин до зала: 15г Желатина + 50мг Вит С. ⚡ За 30-40 мин: Цитруллин (1 ложка). 🩸 За 20-30 мин: AAKG (3-4 капс).",
        exercises: [
          {
            title: "1. Overcoming Isometric Squat",
            description: "Максимальное давление грифом в ограничители рамы снизу вверх.",
            dosage: "4 сета х 5 сек",
            video: "https://www.youtube.com/shorts/fkJcZXZLrr4"
          },
          {
            title: "2. Трифазный Back Squat",
            description: "Присед с паузой 3 сек в нижней точке. 80-85% 1RM. (Праймер для DPE)",
            dosage: "3 сета х 3 повтора",
            video: "https://www.youtube.com/watch?v=STtJbdU6Yak"
          },
          {
            title: "3. Осцилляторный сплит-присед",
            description: "Быстрые пульсации в зоне смены направления.",
            dosage: "3 сета х 10 сек",
            video: "https://www.youtube.com/watch?v=nSdv4sCsYqI"
          }
        ]
      }
    ]
  },
  {
    id: "ВТ",
    day: "ВТОРНИК",
    type: "ПИК DPE",
    sessions: [
      {
        time: "06:00 (Утро)",
        location: "УЛИЦА",
        cns: "HIGH-CNS",
        cnsColor: "text-[#ccff00] border-[#ccff00] bg-[#ccff00]/10",
        supplements: "💊 В любое время: Креатин (1 ложка). 🥤 В течение дня: Протеин. 🩸 Днем (после обеда): AAKG (3 капс) для восстановления.",
        exercises: [
          {
            title: "1. Разминка + Pogo Jumps",
            description: "Прыжки за счет голеностопа, колени прямые. Короткий контакт.",
            dosage: "3 сета х 10 прыжков",
            video: "https://www.youtube.com/watch?v=j0nl5dWuqN4"
          },
          {
            title: "2. Максимальные прыжки (Данки)",
            description: "Синглы с разбега. Полный отдых между попытками (1.5-2 мин). Никакого утомления, только взрыв.",
            dosage: "6-8 синглов",
            video: "https://www.youtube.com/watch?v=uW6MXV5HhFw"
          }
        ]
      },
      {
        time: "19:00 (Вечер)",
        location: "ДОМА",
        cns: "LOW-CNS",
        cnsColor: "text-cyan-400 border-cyan-400 bg-cyan-400/10",
        supplements: "",
        exercises: [
          {
            title: "Полный отдых и регенерация",
            description: "Легкая растяжка дома (10 мин). Никаких осевых нагрузок.",
            dosage: "-",
            video: ""
          }
        ]
      }
    ]
  },
  {
    id: "СР",
    day: "СРЕДА",
    type: "ВОССТАНОВЛЕНИЕ И СУХОЖИЛИЯ",
    sessions: [
      {
        time: "06:00 (Утро)",
        location: "РЕГЕНЕРАЦИЯ",
        cns: "REST",
        cnsColor: "text-gray-400 border-gray-400 bg-gray-400/10",
        supplements: "💊 В любое время: Креатин (1 ложка). 🥤 Днем: Протеин. 🩸 Днем (по самочувствию): AAKG.",
        exercises: [
          {
            title: "Сон / Отдых",
            description: "Тренировка отменяется для сброса нейральной усталости.",
            dosage: "-",
            video: ""
          }
        ]
      },
      {
        time: "19:00 (Вечер)",
        location: "ЗАЛ",
        cns: "LOW-CNS",
        cnsColor: "text-cyan-400 border-cyan-400 bg-cyan-400/10",
        supplements: "🎯 За 45-60 мин до зала: 15г Желатина + 50мг Вит С.",
        exercises: [
          {
            title: "1. Румынская тяга (RDL)",
            description: "Строгий контроль опускания (эксцентрика).",
            dosage: "3 сета х 8-10 раз",
            video: "https://www.youtube.com/watch?v=FH8je3BCu0g"
          },
          {
            title: "2. Уступающая изометрия (Yielding)",
            description: "Удержание болгарского сплит-приседа внизу с гантелями.",
            dosage: "3 сета х 45 сек",
            video: "https://www.youtube.com/watch?v=qgD3wvKJd8Y"
          },
          {
            title: "3. Изометрия на икры",
            description: "Удержание веса стоя на носках. Цель — жесткость ахилла.",
            dosage: "3 сета х 45 сек",
            video: "https://www.youtube.com/watch?v=JUlGIqn7hYM"
          }
        ]
      }
    ]
  },
  {
    id: "ЧТ",
    day: "ЧЕТВЕРГ",
    type: "ПОДГОТОВКА",
    sessions: [
      {
        time: "06:00 (Утро)",
        location: "УЛИЦА",
        cns: "LOW-CNS",
        cnsColor: "text-cyan-400 border-cyan-400 bg-cyan-400/10",
        supplements: "💊 В любое время: Креатин (1 ложка). 🥤 Днем: Протеин.",
        exercises: [
          {
            title: "1. Экстенсивные Pogo Jumps",
            description: "Фокус на быстрый контакт с резиной площадки, высота минимальна.",
            dosage: "4 сета х 20 прыжков",
            video: "https://www.youtube.com/watch?v=Oy4GBFpMYtM"
          },
          {
            title: "2. Изометрические выпады",
            description: "Удержание позиции выпада без веса.",
            dosage: "2 сета х 30 сек",
            video: "https://www.youtube.com/watch?v=89sNU6fyftI"
          }
        ]
      },
      {
        time: "19:00 (Вечер)",
        location: "ЗАЛ",
        cns: "HIGH-CNS",
        cnsColor: "text-[#ccff00] border-[#ccff00] bg-[#ccff00]/10",
        supplements: "🎯 За 45-60 мин до зала: 15г Желатина + 50мг Вит С. ⚡ За 30-40 мин: Цитруллин. 🩸 За 20-30 мин: AAKG.",
        exercises: [
          {
            title: "1. Тяжелый полуприсед (Half Squat)",
            description: "Максимальная скорость вставания. 85-90% 1RM.",
            dosage: "3 сета х 2 повтора",
            video: "https://www.youtube.com/watch?v=UwiSs9l06Wk"
          },
          {
            title: "2. Осцилляторные дриллы на заднюю цепь",
            description: "Осцилляции в RDL или сплит-приседе (Праймер для DPE).",
            dosage: "3 сета х 10 сек",
            video: "https://www.youtube.com/shorts/QQnOiJH5Z6A"
          }
        ]
      }
    ]
  },
  {
    id: "ПТ",
    day: "ПЯТНИЦА",
    type: "ВТОРОЙ ПИК DPE",
    sessions: [
      {
        time: "06:00 (Утро)",
        location: "УЛИЦА",
        cns: "HIGH-CNS",
        cnsColor: "text-[#ccff00] border-[#ccff00] bg-[#ccff00]/10",
        supplements: "💊 В любое время: Креатин (1 ложка).",
        exercises: [
          {
            title: "1. Спринты на акселерацию",
            description: "Обучение ЦНС быстро рекрутировать моторные единицы.",
            dosage: "3 сета х 15 метров",
            video: ""
          },
          {
            title: "2. Максимальные прыжки (Данки)",
            description: "Синглы с агрессивным предпоследним шагом.",
            dosage: "5-6 синглов",
            video: "https://www.youtube.com/watch?v=uW6MXV5HhFw"
          }
        ]
      },
      {
        time: "19:00 (Вечер)",
        location: "ДОМА",
        cns: "REST",
        cnsColor: "text-gray-400 border-gray-400 bg-gray-400/10",
        supplements: "",
        exercises: [
          {
            title: "Свободное время",
            description: "Полный отдых.",
            dosage: "-",
            video: ""
          }
        ]
      }
    ]
  },
  {
    id: "СБ",
    day: "СУББОТА",
    type: "РЕГЕНЕРАЦИЯ",
    sessions: [
      {
        time: "Весь день",
        location: "ДОМА",
        cns: "REST",
        cnsColor: "text-gray-400 border-gray-400 bg-gray-400/10",
        supplements: "💊 Креатин (1 ложка). 🥤 Протеин. 🩸 AAKG (3 капс) для снятия забитости.",
        exercises: [
          {
            title: "Полный отдых",
            description: "Прогулки, массаж, восстановление.",
            dosage: "-",
            video: ""
          }
        ]
      }
    ]
  },
  {
    id: "ВСКР",
    day: "ВОСКРЕСЕНЬЕ",
    type: "ФРАНЦУЗСКИЙ КОНТРАСТ",
    sessions: [
      {
        time: "13:00 (Днем)",
        location: "ЗАЛ / УЛИЦА",
        cns: "HIGH-CNS",
        cnsColor: "text-[#ccff00] border-[#ccff00] bg-[#ccff00]/10",
        supplements: "🎯 За 45-60 мин: Желатин+Вит С. ⚡ Цитруллин. 🩸 AAKG. 🥤 После: Протеин.",
        exercises: [
          {
            title: "1. Тяжелый стимул: Overcoming Isometrics",
            description: "Давление в стену/пин-стойки.",
            dosage: "5 сек",
            video: "https://www.youtube.com/shorts/fkJcZXZLrr4"
          },
          {
            title: "2. High-Force Plyo: Depth Drop",
            description: "Спрыгивание в максимальный прыжок вверх.",
            dosage: "3 прыжка",
            video: "https://www.youtube.com/watch?v=a2B9ELcEx8M"
          },
          {
            title: "3. Speed-Strength: Broad Jump",
            description: "Прыжок в длину с места ИЛИ Trap Bar Jumps с легким весом.",
            dosage: "2 прыжка",
            video: "https://www.youtube.com/watch?v=GTjndpflm_I"
          },
          {
            title: "4. Accelerated Plyo: Pogo Jumps",
            description: "С экстремально коротким контактом.",
            dosage: "5 прыжков",
            video: "https://www.youtube.com/watch?v=j0nl5dWuqN4"
          }
        ]
      }
    ]
  }
];
