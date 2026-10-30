export interface FocusProfile {
  id: string;
  code: string;
  name: string;
  description: string;
  priorityTools: string[];
  quote: string;
}

export const FOCUS_PROFILES: FocusProfile[] = [
  {
    id: "scroller",
    code: "A",
    name: "The Scroller",
    description: "You repeatedly open social media, YouTube, messaging apps, or other feeds without a clear reason.",
    priorityTools: ["Phone Environment Redesign (Day 8)", "Distraction Delay Technique (Day 9)"],
    quote: "You pick up your phone to check the time and lose 40 minutes to reels."
  },
  {
    id: "avoider",
    code: "B",
    name: "The Avoider",
    description: "You know what needs to be done but repeatedly delay starting because the task feels difficult, vague, uncomfortable, or intimidating.",
    priorityTools: ["Task Breakdown Exercise (Day 3)", "Avoidance Pattern Worksheet (Day 4)"],
    quote: "The task feels too big, so facing it feels painful."
  },
  {
    id: "overthinker",
    code: "C",
    name: "The Overthinker",
    description: "You spend more time planning, researching, organizing, or preparing than actually doing the work.",
    priorityTools: ["Morning Clarity Check (Day 6)", "The 3-3-3 Sprint (Day 7)"],
    quote: "Endless tutorial watching and timetable making with zero actual execution."
  },
  {
    id: "task-switcher",
    code: "D",
    name: "The Task-Switcher",
    description: "You start one thing, check another, return to the first, then switch again without finishing anything.",
    priorityTools: ["Phone Environment Redesign (Day 8)", "Single-Task Sprints", "Distraction Delay (Day 9)"],
    quote: "Starting five things at once and ending the day with none of them finished."
  },
  {
    id: "inconsistent",
    code: "E",
    name: "The Inconsistent Worker",
    description: "You can have highly productive days but struggle to repeat them. Great on Monday, completely burned out by Wednesday.",
    priorityTools: ["Evening Reset (Day 17)", "Weekly Recalibration (Day 19)", "Minimum Viable Day", "Relapse Recovery (Day 18)"],
    quote: "Cycles of superhuman effort followed by weeks of abandoning the routine."
  }
];

export interface SprintPhase {
  phase: number;
  days: string;
  title: string;
  tagline: string;
  objective: string;
  keyDeliverable: string;
  sampleDays: {
    day: number | string;
    title: string;
    exercise: string;
    actionTime: string;
  }[];
}

export const SPRINT_PHASES: SprintPhase[] = [
  {
    phase: 1,
    days: "Days 1–5",
    title: "PHASE 1 — DIAGNOSE",
    tagline: "Build the self-awareness that makes everything else work.",
    objective: "Understand why you are actually stuck. Map your distraction patterns and see where your time actually goes without judgment.",
    keyDeliverable: "Your Personal Baseline & Avoidance Map",
    sampleDays: [
      {
        day: 1,
        title: "The Distraction Cost Calculator",
        exercise: "Calculate hours lost per week, month, and year to specific feeds (TikTok, YouTube, X, WhatsApp). Confront what you could have built.",
        actionTime: "10 mins"
      },
      {
        day: 2,
        title: "Map Your Danger Times",
        exercise: "Map your 3 highest-risk times (morning phone grab, 2–4pm slump, late night) and identify the real emotional trigger behind each.",
        actionTime: "10 mins"
      },
      {
        day: 3,
        title: "The Task Breakdown Exercise",
        exercise: "Procrastination comes from vagueness, not laziness. Break your avoided project into tiny 15-to-30-minute visible micro-actions.",
        actionTime: "15 mins"
      },
      {
        day: 4,
        title: "Understand Your Avoidance Pattern",
        exercise: "Write honest sentences: 'I use [distraction] when I should be [task] because [real reason].' Name what you are running from.",
        actionTime: "10 mins"
      }
    ]
  },
  {
    phase: 2,
    days: "Days 6–16",
    title: "PHASE 2 — APPLY",
    tagline: "Follow the daily system. Do the work. Build new attention patterns one day at a time.",
    objective: "Implement the Daily Reset Protocol: a 2-minute morning clarity check before your phone, 33-minute focused work sprints, and a 5-minute evening reset.",
    keyDeliverable: "The 3-3-3 Work Sprint & Phone Redesign",
    sampleDays: [
      {
        day: 6,
        title: "The Morning Clarity Check",
        exercise: "Write 3 things before opening your phone: #1 task, why it matters, when you will do it. Decide your priority before the world decides for you.",
        actionTime: "2 mins"
      },
      {
        day: 7,
        title: "Your First 3-3-3 Sprint",
        exercise: "The engine of the system: 33 minutes of single-task work. Phone in another room. Short enough to start without motivation, long enough for real work.",
        actionTime: "33 mins"
      },
      {
        day: 8,
        title: "The Phone Environment Redesign",
        exercise: "Delete TikTok during sprints, move social apps to page 3, turn off all notifications except calls, charge phone outside your bedroom.",
        actionTime: "15 mins"
      },
      {
        day: 9,
        title: "The Distraction Delay Technique",
        exercise: "Write down the urge: 'Wanted to check Instagram at 3:04pm.' Wait 10 minutes before acting. Insert agency between urge and action.",
        actionTime: "Real-time"
      }
    ]
  },
  {
    phase: 3,
    days: "Days 17–21",
    title: "PHASE 3 — LOCK IN",
    tagline: "Build habits that survive real life — bad weeks, low energy, power outages, and family pressure.",
    objective: "Learn to handle relapse days without spiraling. Lock in the Minimum Viable Day and build a system you will continue using for months.",
    keyDeliverable: "Your Personal Focus System & Quick Reference Card",
    sampleDays: [
      {
        day: 17,
        title: "The Evening Reset Ritual",
        exercise: "5 minutes before bed: 1 thing completed, 1 thing that pulled you off track, #1 task for tomorrow, phone charging outside your bedroom.",
        actionTime: "5 mins"
      },
      {
        day: 18,
        title: "How to Handle Relapse Days",
        exercise: "The Relapse Recovery Protocol: Do not spiral. Do not try to catch up with 6 sprints. Write 1 honest sentence on trigger and do 1 sprint same day.",
        actionTime: "10 mins"
      },
      {
        day: 19,
        title: "The Weekly Recalibration",
        exercise: "Every Sunday for 15 minutes: Review completed sprints, select the #1 weekly outcome, chunk it into daily actions, and block sprint calendar times.",
        actionTime: "15 mins"
      },
      {
        day: 20,
        title: "Expanding Your Capacity",
        exercise: "Progress naturally from 33-minute sprints (Weeks 1–3) to 45-minute sessions (Weeks 4–6) to 60–90 minute deep work (Weeks 7–12).",
        actionTime: "Ongoing"
      }
    ]
  }
];

export interface RealEnvironmentTip {
  situation: string;
  protocol: string[];
}

export const REAL_ENVIRONMENTS: RealEnvironmentTip[] = [
  {
    situation: "IF YOUR HOME IS NOISY",
    protocol: [
      "Identify the quietest predictable window you have (early morning or late night).",
      "Tell people around you when you are unavailable, when possible.",
      "Use headphones or earplugs if they genuinely help.",
      "Choose tasks that tolerate noise for noisy periods, and reserve demanding deep work for quiet windows."
    ]
  },
  {
    situation: "IF POWER OR INTERNET IS UNRELIABLE",
    protocol: [
      "Download required materials, PDFs, tutorials, or code docs before your focus session.",
      "Keep an offline task list for work that does not require an active internet connection.",
      "Charge essential devices immediately when power is available.",
      "Never let a technical interruption or power cut automatically become an excuse for a social media scroll session."
    ]
  },
  {
    situation: "IF FAMILY OR OTHER RESPONSIBILITIES INTERRUPT YOU",
    protocol: [
      "Plan focus windows around predictable responsibilities instead of pretending interruptions will never happen.",
      "Use shorter minimum sprints (10-minute Minimum Viable Day) when necessary.",
      "When interrupted, write down the exact next action on paper before switching tasks so returning is effortless."
    ]
  },
  {
    situation: "IF YOUR SCHEDULE CHANGES CONSTANTLY",
    protocol: [
      "Do not build your system around a rigid clock.",
      "Anchor your Morning Clarity Check to the beginning of your active day, whenever you wake up.",
      "Schedule your 33-minute sprint around the most realistic available window in your actual day."
    ]
  }
];

export interface DifferentiationItem {
  category: string;
  typicalProblem: string;
  manualDifference: string;
}

export const DIFFERENTIATION_DATA: DifferentiationItem[] = [
  {
    category: "Motivation Videos & Cold Showers",
    typicalProblem: "Gives you a 2-hour burst of emotional hype that completely evaporates the moment fatigue or confusion sets in.",
    manualDifference: "Zero motivation cheerleading. Eliminates procrastination not by force, but by design: small chunks, clear next actions, and pre-committed rules."
  },
  {
    category: "Complex Productivity Apps & Notion Setups",
    typicalProblem: "Turns into 'procrastination through organizing': spending hours setting up aesthetic timetables, databases, and color codes instead of actually doing the work.",
    manualDifference: "100% tool-agnostic. Requires zero software. Works in a simple PDF, on a sheet of paper beside your desk, or in a physical notebook."
  },
  {
    category: "Extreme 'Dopamine Detoxes'",
    typicalProblem: "Requires unrealistic monastic isolation (no screens, no music, no messaging) that immediately shatters the minute you return to real work, Slack, or family.",
    manualDifference: "Built for real life. Teaches focus inside imperfect conditions—with WhatsApp, with noisy homes, with power cuts, with family duties, and real deadlines."
  },
  {
    category: "Heavy 400-Page Academic Books",
    typicalProblem: "Fills hundreds of pages with laboratory rat studies and neuroscience theory, but leaves you stranded at 2:30 PM with 20 open tabs.",
    manualDifference: "A direct, 30-page tactical field protocol. Each day takes 10–15 minutes. Includes exact worksheets, danger maps, and quick reference cards."
  },
  {
    category: "Rigid 'Streak' Habit Systems",
    typicalProblem: "Assumes you are a robot with 100% daily energy. Missing one single day triggers shame, self-blame, and a complete downward spiral.",
    manualDifference: "Setback-hardened architecture. Includes the 'Relapse Recovery Protocol' and 'Minimum Viable Day' specifically designed for bad days."
  }
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What exactly is Reclaim Your Focus?",
    answer: "It is a practical 21-day digital protocol I designed specifically for young people who struggle with starting over. It is not an academic textbook or video course. It is my 30-page tactical field manual filled with specific daily exercises, worksheets, focus profiles, and recovery protocols you apply during your actual workday."
  },
  {
    question: "How much time does each day require?",
    answer: "Between 10 and 15 minutes. You read a short, direct explanation, fill out that day's worksheet (e.g. Distraction Cost Calculator, Danger Time Map, or Task Breakdown), and apply the single action to whatever real project, study, or skill you are working on."
  },
  {
    question: "What is the 3-3-3 Sprint?",
    answer: "It is the core engine of the system introduced on Day 7: 33 minutes of completely focused, single-task work with your phone in another room. It is short enough to start even when you have zero motivation, but long enough to make meaningful progress. You eventually build upward to two sprints per day."
  },
  {
    question: "Will this work if I have noisy roommates, erratic power, or unstable internet?",
    answer: "Yes. The guide includes a dedicated 'Focus in Imperfect Environments' playbook specifically addressing noisy homes, power outages, spotty internet, and family interruptions. It was built and tested under real, chaotic everyday conditions—not inside an insulated, ideal bubble."
  },
  {
    question: "What happens if I miss a day or have a terrible relapse day?",
    answer: "You do not restart the program from Day 1. The guide explicitly includes the Relapse Recovery Protocol (Day 18) and the Minimum Viable Day rule. Missing a day does not mean the system is broken; progress comes from restarting fast rather than keeping a fragile perfect streak."
  },
  {
    question: "What is the price, and how does the 30-day guarantee work?",
    answer: "The price is a one-time payment of $5.20 (₦6,900 Naira). There are no recurring fees or subscriptions. If you try the 21-day protocol and feel it didn't give you a practical system you can actually maintain, simply reply to your receipt email within 30 days for a full 100% refund. No questions asked."
  },
  {
    question: "What format will I receive upon checkout?",
    answer: "You will receive an immediate download link for the complete 30-page digital PDF edition of Reclaim Your Focus, printable worksheets, and the 1-Page Quick Reference Card for your desk."
  }
];
