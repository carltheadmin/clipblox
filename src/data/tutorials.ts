/**
 * CLIPPER LEARNING CENTER — content
 * ---------------------------------
 * Add or edit lessons here; the dashboard, progress bars and lesson viewer
 * update automatically.
 *
 * NOTE: Lessons only contain general clipping guidance. Campaign-specific
 * rules, requirements, submission steps and payout details are intentionally
 * NOT written here — they live in the official Discord for each campaign.
 */

export interface Lesson {
  id: string;
  title: string;
  /** one–two sentence description shown on the lesson card and in the viewer */
  summary: string;
  /** key steps / takeaways shown as a numbered list in the viewer */
  points: string[];
  /** optional extra callout shown in the viewer */
  note?: string;
  /** show a "Join Discord" shortcut inside the lesson */
  discordCta?: boolean;
}

export interface Category {
  id: string;
  number: string;
  title: string;
  blurb: string;
  lessons: Lesson[];
}

export const CATEGORIES: Category[] = [
  {
    id: "getting-started",
    number: "01",
    title: "Getting Started",
    blurb: "Understand what clipping is, how ClipBlox works, and where to find your first campaign.",
    lessons: [
      {
        id: "gs-what-is-clipping",
        title: "What is clipping?",
        summary:
          "Clipping means taking the best moments from longer content and turning them into short, punchy videos made for short-form platforms.",
        points: [
          "A clip is a highlight: a funny moment, a big play, a strong reaction, or a key announcement.",
          "Clips are usually vertical (9:16) and built so viewers understand them within the first few seconds.",
          "Clippers help creators and brands reach new audiences on TikTok, Instagram Reels and YouTube Shorts.",
          "You don't need to be a professional editor to start — you need the basics and consistent practice.",
        ],
      },
      {
        id: "gs-how-clipblox-works",
        title: "How does ClipBlox work?",
        summary:
          "ClipBlox is a Roblox-focused clipping network that connects creators, clippers, and brands through short-form content.",
        points: [
          "Campaigns are announced in the official ClipBlox Discord server.",
          "Every campaign has its own rules and requirements, so read the announcement before you start.",
          "Clippers create and publish short-form videos that follow the campaign's guidelines.",
          "Submissions and payouts are handled according to each campaign's guidelines — not a one-size-fits-all rule.",
        ],
        note: "Campaign details are always shared in Discord, never assumed from other campaigns.",
        discordCta: true,
      },
      {
        id: "gs-join-discord",
        title: "How to join our Discord server",
        summary:
          "The Discord server is the heart of ClipBlox. It's where campaigns are announced and where you get help from the team.",
        points: [
          "Use any JOIN DISCORD button on this website — they all open the official invite.",
          "Accept the invite and complete any onboarding steps the server asks for.",
          "Read the rules and information channels first so you know how the community works.",
          "Find the announcements channel — that's where new campaigns appear.",
          "Use the ticket or support section whenever you need help from the team.",
        ],
        discordCta: true,
      },
      {
        id: "gs-find-campaigns",
        title: "How to find available campaigns",
        summary:
          "New clipping opportunities are announced through the official Discord. Learn where to look and how not to miss one.",
        points: [
          "Check the announcements channel in Discord regularly.",
          "Public campaigns are open to eligible members of the community.",
          "Private campaigns are shared with selected creators and qualified clippers, in the relevant private channels.",
          "Turn on notifications for announcements so you see new campaigns quickly.",
          "Read each campaign post fully before you begin working on anything.",
        ],
        discordCta: true,
      },
      {
        id: "gs-campaign-rules",
        title: "Understanding campaign rules and requirements",
        summary:
          "Each campaign sets its own rules. Knowing how to read them saves you time and re-edits.",
        points: [
          "Never assume one campaign's rules apply to another — read every announcement.",
          "Look for what content to use, which platforms to post on, formatting needs, and posting requirements.",
          "Note how and where the campaign wants submissions to be sent.",
          "If anything is unclear, ask the team in Discord before you post.",
        ],
        note: "ClipBlox doesn't list campaign requirements on this website. They're always in Discord.",
        discordCta: true,
      },
    ],
  },
  {
    id: "editing-basics",
    number: "02",
    title: "Video Editing Basics",
    blurb: "Learn how to pick great moments, hook viewers fast, and edit clean short-form videos.",
    lessons: [
      {
        id: "ed-choosing-moments",
        title: "Choosing the right moments to clip",
        summary:
          "The best clips start with the best moments. Learn to spot what makes viewers stop scrolling.",
        points: [
          "Look for peaks: surprises, funny reactions, big plays, or clear mini-stories.",
          "A good clip makes sense on its own, without needing the full video for context.",
          "Keep it tight — cut dead air, repeated points, and slow build-ups.",
          "Watch the source with notes or timestamps so strong moments are easy to find again.",
        ],
      },
      {
        id: "ed-hooks",
        title: "Creating engaging hooks",
        summary:
          "The hook is the first one to three seconds of your video. It decides whether people keep watching.",
        points: [
          "Open on the most interesting moment, a bold statement, or a question.",
          "Cut slow intros and start as close to the action as possible.",
          "Use short on-screen text to tell viewers why they should keep watching.",
          "Tease the payoff so viewers stay until the end.",
        ],
      },
      {
        id: "ed-editing-short-form",
        title: "Editing short-form videos",
        summary:
          "A simple, repeatable workflow helps you edit faster and keep your clips consistent.",
        points: [
          "Import your footage and trim it down to the key moment.",
          "Tighten the pacing by removing pauses and filler.",
          "Reframe to vertical so the important action stays in the center of the screen.",
          "Add polish — zooms, captions, sound — without overloading the clip.",
          "Beginner-friendly editors include CapCut; more advanced options include Premiere Pro and DaVinci Resolve.",
        ],
      },
      {
        id: "ed-subtitles",
        title: "Adding subtitles and captions",
        summary:
          "Many people watch with the sound off, so clear captions help your clip get understood.",
        points: [
          "Keep captions short, readable, and high-contrast against the video.",
          "Sync them with the speech so words appear exactly when they're said.",
          "Place text inside safe areas so app buttons and interface elements don't cover it.",
          "Highlight key words to add emphasis, and always proofread for spelling mistakes.",
        ],
      },
      {
        id: "ed-effects-audio",
        title: "Using transitions, sound effects, and background music",
        summary:
          "Effects and audio add energy — when used with intention. Less is usually more.",
        points: [
          "Use transitions to support the pacing, not to distract from it.",
          "Sound effects can emphasize big moments — keep them subtle and well-timed.",
          "Keep background music low enough that voices and game audio stay clear.",
          "Check each campaign's guidance on audio and music before you add it.",
        ],
        note: "What audio is allowed can differ by campaign — confirm in the campaign's Discord channel.",
      },
      {
        id: "ed-formatting",
        title: "Proper video formatting for TikTok, Instagram Reels, and YouTube Shorts",
        summary:
          "Export in a format every short-form platform handles well so your clip looks sharp everywhere.",
        points: [
          "Use vertical 9:16 framing — 1080×1920 is the commonly recommended resolution.",
          "Keep faces, text and key action away from the edges and the bottom of the screen.",
          "Export as MP4 for the widest compatibility.",
          "Platform limits and specs change, so check each platform's current guidelines before you publish.",
        ],
      },
    ],
  },
  {
    id: "publishing",
    number: "03",
    title: "Publishing Your Clips",
    blurb: "Prepare, upload, and caption your clips the right way — and follow campaign posting rules.",
    lessons: [
      {
        id: "pub-prepare",
        title: "How to prepare videos for publishing",
        summary:
          "A quick quality check before you post prevents mistakes you can't easily undo later.",
        points: [
          "Watch the full export on your phone, from start to finish.",
          "Check audio levels, captions, and spelling.",
          "Make sure the clip matches the campaign's requirements.",
          "Write your caption and hashtags ahead of time so posting is quick and clean.",
        ],
      },
      {
        id: "pub-upload",
        title: "How to upload clips correctly",
        summary:
          "Uploading is simple, but small details — like the right account and settings — matter.",
        points: [
          "Log into the correct account for the campaign before uploading.",
          "Upload the final exported file and choose a clear cover frame if the platform allows it.",
          "Double-check the visibility setting so the video is public.",
          "Wait until processing finishes and preview the post before moving on.",
        ],
      },
      {
        id: "pub-captions",
        title: "Understanding captions, hashtags, and descriptions",
        summary:
          "Good text around your video gives it context and helps the right viewers find it.",
        points: [
          "Use the caption to add context or reinforce your hook.",
          "Pick relevant hashtags that describe the content, rather than stuffing in unrelated ones.",
          "Include any hashtags, mentions or credits the campaign asks for.",
          "Keep descriptions honest and clear — don't mislead viewers about the content.",
        ],
      },
      {
        id: "pub-campaign-requirements",
        title: "Following campaign-specific posting requirements",
        summary:
          "Every campaign may ask for something different. Re-check the announcement right before you hit post.",
        points: [
          "Re-read the campaign post for required tags, accounts, platforms and wording.",
          "Make sure you're posting on the platforms the campaign actually allows.",
          "Save the link to every video you publish — you'll need it later.",
          "Not sure about something? Ask the team in Discord before posting.",
        ],
        note: "Campaign posting requirements are shared in Discord for each campaign.",
        discordCta: true,
      },
    ],
  },
  {
    id: "views-performance",
    number: "04",
    title: "Views, Submissions & Performance",
    blurb: "Submit your links, show your analytics, and understand how views and payouts are handled.",
    lessons: [
      {
        id: "vp-submit-links",
        title: "How to submit published video links",
        summary:
          "After publishing, your video link is how the team finds and reviews your work.",
        points: [
          "Copy the video's link directly from the platform after it's live.",
          "Open the link in a private or logged-out window to confirm it works and the video is public.",
          "Send it using the method described in that campaign's instructions.",
          "Keep your own record of every link you submit.",
        ],
        discordCta: true,
      },
      {
        id: "vp-analytics",
        title: "How to provide analytics screenshots",
        summary:
          "Analytics screenshots show the real performance of your video when a campaign asks for them.",
        points: [
          "Open the video's analytics page in the platform's app or dashboard.",
          "Take a clear, uncropped screenshot that shows the video and its numbers.",
          "Don't edit or alter screenshots in any way.",
          "Provide them in the format and place the campaign asks for.",
        ],
      },
      {
        id: "vp-verified-views",
        title: "Understanding verified views",
        summary:
          "Verified views are how campaigns confirm that view counts are real. How it works is defined per campaign.",
        points: [
          "Views are typically checked against the published video and its analytics.",
          "Real, organic views are what matter — avoid anything that artificially inflates numbers.",
          "What counts as a verified view is set by each campaign, so check the announcement.",
          "Ask the team in Discord if you want details about how verification works for a campaign.",
        ],
        note: "ClipBlox doesn't publish view-counting rules here — each campaign's rules are in Discord.",
        discordCta: true,
      },
      {
        id: "vp-tracking",
        title: "Tracking your video performance",
        summary:
          "Tracking what works helps you improve every clip you make.",
        points: [
          "Check each platform's analytics regularly after you post.",
          "Look at views, watch time, average percentage viewed, likes, comments and shares.",
          "Compare clips to see which hooks, topics and styles perform best.",
          "Keep a simple spreadsheet so you can spot patterns and improve over time.",
        ],
      },
      {
        id: "vp-payouts",
        title: "Understanding campaign payout guidelines",
        summary:
          "Payout guidelines are set per campaign and are not listed on this website.",
        points: [
          "Read the payout information in the campaign's announcement or channel.",
          "Note what's required for a submission to be eligible.",
          "If anything is unclear, open a ticket or ask the team in Discord.",
          "Rely on official ClipBlox announcements — not second-hand information.",
        ],
        note: "For payout details, always check the official Discord for the campaign you're working on.",
        discordCta: true,
      },
    ],
  },
];

export const ALL_LESSONS = CATEGORIES.flatMap((c, ci) =>
  c.lessons.map((l, li) => ({ lesson: l, categoryIndex: ci, lessonIndex: li }))
);

export const TOTAL_LESSONS = ALL_LESSONS.length;
