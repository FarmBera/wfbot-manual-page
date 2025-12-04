import { COMMON, SUB } from "./common";
import { htags, tw } from "../style/tailwind";

import { H2, P, A, NOTE, BOLD, H3 } from "../ui/CustomElements";
import TipTime from "../components/TipTime";
import DocImage from "../components/DocImage";
import ContactMe from "../components/ContactAdmin";

const IMG_PATH = "/imgko/";
const IMG_EXT = ".webp";

export const uiTextsEn = {
  // common UI
  docTitle: "Usage Guide",
  searchPlaceholder: "Search... is currently unavailable",
  contents: "Contents",
  next: "Next",
  footerMsg: "End of Documents",
  copyright: `© ${COMMON.year} ${COMMON.company}`,

  picEx: "Content Example",

  // tiptime: {
  //   title: "시간 확인 꿀팁",
  //   text: "텍스트에 마우스를 가져다 놓으면 정확한 종료 날짜 & 시간이 표시됩니다!",
  // },

  // 1. 소개 섹션
  intro: {
    id: "intro",
    title: "1. Introduction",
    welcomeTitle: <>Welcome to the '{COMMON.nameEn}' Guide!</>,
    welcomeDesc: (
      <>
        {/* This document explains how to use <strong>{COMMON.name}</strong>. */}
        You can quickly navigate to the desired information using the Table of
        Contents on the left.
      </>
    ),
    foot: (
      <>
        <NOTE
          color="yellow"
          icon="info"
          title="Notify"
          text={
            <p>
              This document is currently in Beta Version.
              <br />
              Please understand that there may be typos.
            </p>
          }
        />
        <NOTE
          color="red"
          icon="alert"
          title="Translation Alert"
          text={
            <p>
              Mistakes may have occurred during the translation process.
              <br />
              Please bear with us if there are any typos or awkward phrasing.
            </p>
          }
        />
      </>
    ),
  },
  // 2. 주요 기능 섹션
  features: {
    d: "features",
    title: "2. So, what does this bot do?",
    mainTitle: "Let's check the key points quickly!",
    items: [
      {
        title: "Real-time Warframe Content Check on Discord",
        desc: "You can check in-game Warframe content using commands.",
        subDesc: "(Baro Ki'Teer status, Sorties, Invasions, Alerts, etc.)",
      },
      {
        title: "Real-time Content Notifications",
        desc: (
          <>
            Is checking manually all you can do?
            <br />
            It sends real-time messages whenever new content is updated! With
            the same layout you see in the commands!
          </>
        ),
      },
      {
        title: "Market Search Function",
        desc: (
          <>
            <p className="text-lg">
              You log into the market every time to search???
            </p>
            <br />
            With this bot, you can easily search for prices directly on Discord.
            No need to visit the Warframe Market website every time!
            <br />
            <br />
            Also, since we provide a link to the market in the search results,
            you can go directly to the market if you want!
          </>
        ),
        subDesc: "",
      },
      {
        title: "Party Recruitment System",
        desc: (
          <>
            Was it hard to DM party members every time?
            <br />
            Now you can conveniently recruit parties with simple commands and a
            management system.
          </>
        ),
      },
      {
        title: "Item Trading System",
        desc: (
          <>
            Item trading felt difficult, how to check prices, and what to do...
            <br />
            <br />
            <p className="text-lg">Don't be afraid anymore!</p>
            <br />
            With the automatic pricing feature based on Warframe Market, even
            beginners can conveniently post trade listings with simple commands
            without worrying about prices.
          </>
        ),
      },
    ],
  },
  // 3. Manual Section
  manual: {
    id: "manual",
    title: "3. Commands for Warframe Content",
    mainTitle: "All Commands List",
    list: [
      {
        id: SUB.HELP,
        title: "help",
        desc: "You can check available commands and related help.",
        image: `${IMG_PATH}help1${IMG_EXT}`,
        width: "80%",
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Help+Command",
        head: (
          <>
            <P text="It shows a link to the web page you are currently viewing." />
          </>
        ),
      },
      {
        id: SUB.ANNOUNCEMENT,
        title: "announcements",
        desc: "You can check bot announcements.",
        image: `${IMG_PATH}announcement${IMG_EXT}`,
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Announcement",
      },
      {
        id: SUB.PATCHNOTE,
        title: "patch-note",
        desc: "You can check the recent update/patch history of the bot.",
        image: `${IMG_PATH}patchnote${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Patch+Note",
        head: <P text="You can check newly updated content, bug fixes, etc." />,
      },
      {
        id: SUB.PRIVACY,
        title: "privacy-policy",
        desc: "Displays important information regarding the bot's privacy policy.",
        image: `${IMG_PATH}privacy-policy${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Privacy",
        foot: (
          <>
            <p>
              For more details, please check the{" "}
              <strong>Terms of Service / Privacy Policy</strong> section in the
              table of contents on the left.
            </p>
          </>
        ),
      },
      {
        id: SUB.ALERTS,
        title: "alerts",
        desc: "You can check currently active Alert missions.",
        image: `${IMG_PATH}alerts${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Alerts",
        head: (
          <>
            <p className={htags.pTag}>
              It displays the list of obtainable rewards first. Then it displays
              the information below.
            </p>
            <ul className={htags.ulTag}>
              <li>Mission Type - Node (Location)</li>
              <li>Mission Info (Enemy level, Wave count, etc.)</li>
              <li>Time remaining until end</li>
            </ul>
            <TipTime sampleTime="in 4 days" />
          </>
        ),
      },
      {
        id: SUB.NEWS,
        title: "news",
        desc: "You can check the latest Warframe news.",
        image: `${IMG_PATH}news${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=News",
        head: (
          <>
            <p className={htags.pTag}>
              Clicking the blue text takes you directly to the corresponding
              announcement.
            </p>
          </>
        ),
      },
      {
        id: SUB.SORTIE,
        title: "sortie",
        desc: "You can check today's Sortie missions.",
        image: `${IMG_PATH}sortie${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Sortie",
        head: (
          <>
            <p className={htags.pTag}>
              You can simply check the time remaining, which node it is on, and
              what the modifiers are.
            </p>
          </>
        ),
      },
      {
        id: SUB.ARCHONHUNT,
        title: "archonhunt",
        desc: "You can check this week's Archon mission list and the Shard you can obtain.",
        image: `${IMG_PATH}archonhunt${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Archon+Hunt",
        head: (
          <>
            <NOTE
              color="green"
              icon="tip"
              title="Tip"
              text="The color of the strip on the left changes depending on the type of Shard you can get, so you can intuitively check which Shard is available!"
            />
          </>
        ),
      },
      {
        id: SUB.VOIDTRADERS,
        title: "whenbaro",
        desc: "You can check the current status of Baro Ki'Teer.",
        image: `${IMG_PATH}voidtraders${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Void+Trader",
        head: (
          <>
            <P text="It tells you if he has arrived, and when/where he will appear." />
          </>
        ),
        foot: (
          <>
            <P text="If Baro Ki'Teer has arrived, it appears as below." />
            <DocImage
              src={`${IMG_PATH}voidtraders-activated${IMG_EXT}`}
              alt="Image when Baro Ki'Teer arrived"
              caption="Content displayed when Baro Ki'Teer has arrived"
            />
          </>
        ),
      },
      {
        id: SUB.VOIDTRADERSITEM,
        title: "baro-items",
        desc: "You can check the list of items Baro Ki'Teer is selling.",
        image: `${IMG_PATH}voidtraders-item-yes${IMG_EXT}`,
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Void+Trader+Items",
        foot: (
          <>
            <P text="If Baro Ki'Teer has not arrived, it is displayed as below." />
            <DocImage
              src={`${IMG_PATH}voidtraders-item-no${IMG_EXT}`}
              alt="Baro Ki'Teer not arrived"
              caption="When Ki'Teer has not arrived"
            />
          </>
        ),
      },
      {
        id: SUB.STEELPATH,
        title: "steelpathreward",
        desc: "You can check Teshin's Steel Essence weekly exchange items.",
        image: `${IMG_PATH}steelpath${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Steel+Path",
      },
      {
        id: SUB.FISSURES,
        title: "voidfissures",
        desc: "Shows a list of currently active Relic nodes (Void Fissures) that can be cleared quickly (e.g., Exterminate, Capture, etc.).",
        image: `${IMG_PATH}fissures${IMG_EXT}`,
        width: "50%",
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Fissures",
      },
      {
        id: SUB.CALENDAR,
        title: "hexcalendar",
        desc: "[Beta] You can check this week's Hex Calendar tasks/rewards list.",
        image: `${IMG_PATH}calendar${IMG_EXT}`,
        width: "50%",
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Calendar",
        head: (
          <>
            <P text="This command is currently under improvement, so readability may be poor or some information may not be displayed." />
          </>
        ),
      },
      {
        id: SUB.DAILYDEALS,
        title: "dailydeals",
        desc: "You can check today's special deal items offered by Darvo.",
        image: `${IMG_PATH}dailydeals${IMG_EXT}`,
        width: "50%",
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Daily+Deals",
      },
      {
        id: SUB.INVASIONS,
        title: "invasions",
        desc: "You can check the list of currently active Invasion missions.",
        image: `${IMG_PATH}invasions${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Invasions",
        foot: (
          <div>
            <P text="(Subsequent content is omitted due to the large amount of information displayed. When actually used, all invasion nodes are displayed.)" />
          </div>
        ),
      },
      {
        id: SUB.MARKET_SEARCH,
        title: "market-search",
        desc: (
          <>
            <P text="You can search for desired items on 'Warframe Market' to find the cheapest listings." />
            <P text="Clicking on the blue item name takes you to the market search results for that item." />
          </>
        ),
        image: `${IMG_PATH}market-search-result${IMG_EXT}`,
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Market+Search",
        foot: (
          <>
            <P text="How to use the Market Search command:" />
            <ol className={htags.olTag}>
              <li>
                Type <strong>/market-search</strong> in the search bar and
                select the command.
              </li>
              <li>
                Enter the item you want to search for in the{" "}
                <strong>item_name</strong> part.
              </li>
            </ol>
            <DocImage src={`${IMG_PATH}market-search-searching${IMG_EXT}`} />
            <p className={htags.pTag}>
              It supports auto-complete, so you can search for items easily.
            </p>
            <NOTE
              color="yellow"
              icon="alert"
              title="Notice"
              text={
                <>
                  There may be some items that are not translated.
                  <br />
                  If there is an item that cannot be searched, please{" "}
                  <ContactMe />
                </>
              }
            />
          </>
        ),
      },
      {
        id: SUB.PARTY_CREATE,
        title: "create-party",
        desc: "Creates a new party recruitment post. (For general games)",
        foot: (
          <div>
            <p className={htags.pTag}>
              For more details, please refer to the{" "}
              <strong>4. Party Recruitment Function</strong> section in the
              sidebar menu. (Link inserted)
            </p>
          </div>
        ),
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Create+Party",
      },
      {
        id: SUB.TRADE_CREATE,
        title: "trade",
        desc: "Creates a new trade post. (Warframe items only)",
        foot: (
          <div>
            <p className={htags.pTag}>
              For more details, please refer to the{" "}
              <strong>5. Trade Function</strong> section in the sidebar menu.
              (Link inserted)
            </p>
          </div>
        ),
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Create+Trade",
      },
      {
        id: SUB.EVENTS,
        title: "events",
        desc: "[Beta] You can check the list of currently ongoing regular events (Thermia, Fomorian, etc.).",
        image: `${IMG_PATH}events${IMG_EXT}`,
        imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Events",
      },
      {
        id: SUB.DUVIRI_WF,
        title: "circuit-warframe",
        desc: "Checks the list of Warframe for this week's Duviri Circuit.",
        image: `${IMG_PATH}circuit-warframe${IMG_EXT}`,
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Duviri+Warframe",
      },
      {
        id: SUB.DUVIRI_INC,
        title: "circuit-incarnon",
        desc: "Checks the list of Incarnon for this week's Duviri Circuit.",
        image: `${IMG_PATH}circuit-incarnon${IMG_EXT}`,
        imagealt:
          "https://placehold.co/600x300/e2e8f0/64748b?text=Duviri+Incarnon",
      },
    ],
  },
  // 4. Party Section
  party: {
    id: "party",
    title: "4. Party Recruitment Function",
    mainTitle: "Party Recruitment Commands",
    list: [
      // Party Function Overview
      {
        id: "party-intro",
        title: "Function Overview",
        desc: (
          <>
            <P text="You can easily create a party recruitment post." />
            <P text="This is targeted to all general games, so you can recruit for other games as well as Warframe." />
            <P text="Easily recruit people to play with!" />
          </>
        ),
        // image: ...
      },
      // Precautions before use
      {
        id: "party-warning",
        title: (
          <span className={tw.txt.red}>
            [Must Read] Precautions Before Using the Function
          </span>
        ),
        desc: "We will guide you through the instructions before using this feature.",
        foot: (
          <div>
            <ul className={htags.ulTag}>
              <li>
                The content entered when creating or modifying a party is public
                to everyone.{" "}
                <strong>
                  Please do not enter sensitive personal information.
                </strong>
              </li>
              <li>
                <strong>Server rules apply equally.</strong> If inappropriate
                words are used, the post will be automatically deleted, and you
                will be sanctioned or punished according to server rules.
              </li>
              <li>
                Server rules can be checked{" "}
                <A text="here" href={process.env.REACT_APP_SERVER_RULE} />.
              </li>
            </ul>
            <p>
              If caught violating prohibitions, as it may harm others, the
              person involved will have their 'In-game Nickname' publicly
              revealed in the Clan Server and receive a warning.
            </p>
            <br />
            <p>
              <strong>(3 Warnings, then Permanent Ban from Clan)</strong>
            </p>
          </div>
        ),
      },
      // (1) Check Party Info
      {
        id: "party-list",
        title: "(1) Checking Party Info",
        desc: "Describes how to check created party information.",
        foot: (
          <>
            <p className={htags.pTag}>
              Go to the{" "}
              <strong className={tw.txt.sky}>
                Party Recruitment (파티모집)
              </strong>{" "}
              channel in the{" "}
              <strong className={tw.txt.sky}>Daily Channels (일상채널)</strong>{" "}
              category to see a list of all active parties.
            </p>
            <DocImage
              src={`${IMG_PATH}party-listing${IMG_EXT}`}
              caption="Party List Example"
            />
            <p className={htags.pTag}>
              You can select a created thread to view the party recruitment
              post.
            </p>
          </>
        ),
      },
      // (2) Join/Leave Party
      {
        id: "party-join-leave",
        title: "(2) Joining/Leaving a Party",
        desc: "Introduces how to participate in a party.",
        foot: (
          <>
            <h4 className={htags.H4}>It's not difficult!</h4>
            <p className={htags.pTag}>
              Just press the green{" "}
              <span className={`${tw.txt.green} font-extrabold`}>Join</span>{" "}
              button to join the party!
            </p>
            <P />
            <h4 className={htags.H4}>Leaving a Party</h4>{" "}
            <p className={htags.pTag}>
              Press the red{" "}
              <span className={`${tw.txt.red} font-extrabold`}>Leave</span>{" "}
              button to leave.
            </p>
            <DocImage
              src={`${IMG_PATH}party-article${IMG_EXT}`}
              caption="Party Post Example"
            />
            <NOTE
              color="yellow"
              icon="tip"
              title="Notice"
              text="Button layout may vary depending on Discord app screen size."
            />
            {/* <p>
              To prevent accidental clicks, pressing the{" "}
              <span className={`font-extrabold`}>Join</span> button will display an additional message asking if you really want to join.{" "}
            </p>
            <DocImage
              src={`${IMG_PATH}party-confirm-join${IMG_EXT}`}
              // maxWidth="100%"
              caption="Party Join Confirmation Message"
            />
            <p>
              You must press the <span className={`${tw.txt.green} font-extrabold`}>
                Yes (Proceed)
              </span>{" "}
              button to actually join the party.
            </p> */}
          </>
        ),
      },
      // (3) Creating a Party
      {
        id: "party-how-create",
        title: "(3) Creating a Party",
        desc: "How to create a party recruitment post.",
        foot: (
          <>
            <h4 className={htags.H4}>
              You can create a party using the <strong>/create-party</strong>{" "}
              command.
            </h4>
            <ul className={htags.ulTag}>
              <li>Type the / symbol in the chat input to use commands. </li>
              <ul className={htags.ulTag}>
                <li>
                  The / key is located just to the left of the Right-Shift key.{" "}
                </li>
              </ul>
              <li>Then search for 'create-party' and select the command.</li>
            </ul>
            <DocImage
              src={`${IMG_PATH}party-cmd0${IMG_EXT}`}
              alt="Command Search Result"
              caption="Command Search Result"
            />
            <h4 className={htags.H4}>
              There are a total of 4 input fields. <br />
            </h4>
            <ul className={htags.ulTag}>
              <li>
                <span className={htags.graveTag}>title</span>: Recruitment post
                title
              </li>
              <li>
                <span className={htags.graveTag}>game_type</span>: Name of the
                game to play (Warframe, League of Legends, PUBG, etc.)
              </li>
              <li>
                [Optional]{" "}
                <span className={htags.graveTag}>number_of_user</span>: Number
                of recruits
              </li>
              <ul className={htags.ulTag}>
                <li>
                  This number{" "}
                  <strong>includes the Party Leader (yourself)</strong>.
                </li>
                <li>
                  <strong>Default is 4</strong>. (Warframe max party size is 4)
                </li>
                <li>
                  Can be set up to a <strong>maximum of 20</strong>.
                </li>
              </ul>
              <li>
                [Optional] <span className={htags.graveTag}>description</span>:
                Detailed description of the recruitment post, etc.
              </li>
            </ul>
            <h4 className={htags.H4}>Please fill in the desired content.</h4>
            (There are hints at the top telling you what to put in)
            <DocImage
              src={`${IMG_PATH}party-cmd-input${IMG_EXT}`}
              maxWidth="100%"
              caption="Please fill in the desired content."
            />
            After inputting, press Enter to send, and a public thread and
            recruitment post will be created in the{" "}
            <strong>'Party Recruitment' (파티모집)</strong> channel.
            <DocImage
              src={`${IMG_PATH}party-created${IMG_EXT}`}
              maxWidth="100%"
              caption="Party Creation Complete Message"
            />
            Clicking the blue background link will take you directly to that
            recruitment post.
            <br />
            Or please go to the Party Recruitmen (파티모집) channel directly.
          </>
        ),
      },
      // (4) Edit Party Info
      {
        id: "party-edit",
        title: "(4) Editing Party Info",
        desc: "The features introduced in this section can only be used by the Party Leader (the person who created the party).",
      },
      // (4-1) Edit Member Count
      {
        id: "party-edit-member",
        title: "(4-1) Edit Member Count",
        foot: (
          <>
            <p className={htags.pTag}>
              Click the <BOLD text="Edit Capacity" /> button to modify the
              recruitment limit.
            </p>
            <ul className={htags.ulTag}>
              <li>
                This number{" "}
                <strong>includes the Party Leader (yourself)</strong>.
              </li>
              <li>
                Can be set between <strong>2 ~ 20</strong>.
              </li>
              <li>
                If a non-numeric value is entered, the{" "}
                <strong>default of 4</strong> is automatically set. <br />
                (Warframe max party size is 4)
              </li>
            </ul>
            <P text="Clicking the Edit Capacity button displays the following window." />
            <p className={htags.pTag}>
              Enter the desired number and press{" "}
              <strong className={`${tw.txt.sky}`}>Send</strong>.
            </p>
            <DocImage
              src={`${IMG_PATH}party-nop${IMG_EXT}`}
              caption="Edit Capacity Popup"
            />
          </>
        ),
      },
      // (4-2) Edit Post
      {
        id: "party-edit-article",
        title: "(4-2) Edit Post",
        desc: "This feature is for correcting incorrectly entered content.",
        foot: (
          <>
            <p className={htags.pTag}>Editable items are as follows:</p>
            <ul className={htags.ulTag}>
              <li>Post Title</li>
              <li>Game Name</li>
              <li>Description</li>
            </ul>
            <p className={htags.pTag}>
              Clicking the Edit Post button displays the following window.
            </p>
            <DocImage
              src={`${IMG_PATH}party-mod1${IMG_EXT}`}
              caption="Edit Post Popup"
            />
            <p className={htags.pTag}>
              After modifying the desired items, press the{" "}
              <strong className={`${tw.txt.sky} ${tw.bold.eb}`}>Send</strong>{" "}
              button to update the items.
            </p>
            <DocImage
              src={`${IMG_PATH}party-mod2${IMG_EXT}`}
              caption="Edit Post"
            />
            <DocImage
              src={`${IMG_PATH}party-mod3-result${IMG_EXT}`}
              caption="Edit Result"
            />
          </>
        ),
      },
      // (4-3) Toggle Recruitment Status
      {
        id: "party-change",
        title: "(4-3) Toggle Recruitment Status",
        desc: "You can toggle the recruitment status of the post.",
        foot: (
          <>
            <p className={htags.pTag}>
              Pressing the Complete Recruitment button changes the post to{" "}
              <strong>Recruitment Complete</strong> status as shown below.
            </p>
            <DocImage
              src={`${IMG_PATH}party-toggle${IMG_EXT}`}
              caption="Recruitment Complete Status"
            />

            <p className={htags.pTag}>In Recruitment Complete status:</p>
            <ul className={htags.ulTag}>
              <li>
                <strong>Party members cannot join.</strong>
              </li>
              <li>
                <strong>Capacity cannot be edited.</strong>
              </li>
            </ul>
            <p className={htags.pTag}>
              Pressing the{" "}
              <strong className={`${tw.txt.green}`}>
                Activate Recruitment
              </strong>{" "}
              button can change the post status back to "Recruiting".{" "}
            </p>
          </>
        ),
      },
      // (4-4) Call Party Members
      {
        id: "party-call",
        title: "(4-4) Call Party Members",
        desc: "Sends a notification to party members.",
        foot: (
          <>
            <p className={htags.pTag}>
              Mentions all currently joined party members.
              <br />A message calling all party members is sent to the thread
              where the recruitment post was created.
            </p>
            <p className={htags.pTag}>
              Usage examples: Departure notification, important notices to all
              users, etc.
            </p>
            <DocImage
              src={`${IMG_PATH}party-call-result${IMG_EXT}`}
              maxWidth="75%"
              caption="Party Call Message Example"
            />
            <p className={htags.pTag}>
              To prevent excessive use, a 15-minute cooldown applies after one
              use.
              <br /> If this feature is abused (e.g., spamming notifications),
              the bot may analyze usage patterns and automatically blacklist or
              sanction the user.
              <br />
              We also continuously receive reports of abuse from users. Abuse
              may result in sanctions.
            </p>
            <p className={htags.pTag}>Please use with caution.</p>
          </>
        ),
      },
      // (4-5) Kick Party Member
      {
        id: "party-kick",
        title: "(4-5) Kick Party Member",
        desc: "Selects a specific party member to forcibly remove.",
        foot: (
          <>
            <NOTE
              color="red"
              icon="alert"
              title="Warning"
              text={
                <div>
                  <div className={htags.pTag}>
                    <strong>
                      This feature is designed to resolve situations where a
                      party member cannot leave the party themselves despite
                      notifying in advance that they cannot attend due to
                      personal reasons.
                    </strong>
                  </div>
                  <div className={htags.pTag}>
                    <strong className={tw.txt.red}>
                      Inappropriate use, such as forcibly removing party members
                      without notice, is prohibited.
                    </strong>
                  </div>
                  <div className={htags.pTag}>
                    We continuously receive reports of abuse from users. Abuse
                    may result in sanctions.
                  </div>
                </div>
              }
            />
            <br />
            <p className={htags.pTag}>
              Clicking the button displays the message below.
            </p>
            <p className={htags.pTag}>
              Clicking <strong>Select party member to kick</strong> (dropdown
              menu) allows you to select the member you want to remove.
            </p>
            <DocImage
              src={`${IMG_PATH}party-kick-select${IMG_EXT}`}
              caption="Kick Dropdown Example"
            />
            <NOTE
              color="orange"
              icon="alert"
              title="Caution"
              text={
                <>
                  Clicking a party member to kick removes them immediately.{" "}
                  <br />
                  Please be careful not to click by mistake!
                </>
              }
            />
          </>
        ),
      },
      // (4-6) End Recruitment
      {
        id: "party-exit",
        title: "(4-6) End Recruitment",
        desc: "Permanently ends the party recruitment. (Converts the post to inactive status)",
        foot: (
          <>
            <p className={htags.pTag}>
              Clicking the <strong>End Recruitment</strong> button displays a
              confirmation button to prevent mistakes.
            </p>
            <DocImage
              src={`${IMG_PATH}party-confirm-delete${IMG_EXT}`}
              caption="After clicking End Recruitment button"
            />
            <p className={htags.pTag}>
              Clicking the <strong>Yes (Proceed)</strong> button permanently
              ends the recruitment.
            </p>

            <p className={htags.pTag}>
              It deactivates the post as shown in the photo below, rather than
              deleting the entire post. (Similar to an archive)
            </p>
            <DocImage
              src={`${IMG_PATH}party-deleted${IMG_EXT}`}
              caption="After clicking End Recruitment button"
            />
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <NOTE
              color="orange"
              icon="alert"
              title="Caution"
              text="The end action cannot be undone."
            />
          </>
        ),
      },
    ],
  },
  // 5. Trade Section
  trade: {
    id: "trade",
    title: "5. Trade Function",
    mainTitle: "Trade Commands",
    list: [
      // trade intro
      {
        id: "trade-create",
        title: "Trade Function Overview",
        desc: "Explains how to use the trade function.",
        // foot: <P text="Trade items are limited to Warframe items. (Trading items from other games is prohibited)" />,
      },
      // trade warnings
      {
        id: "trade-warning",
        title: (
          <span className={tw.txt.red}>
            [Must Read] Precautions Before Using the Function
          </span>
        ),
        desc: "We will guide you through the instructions before using the function.",
        foot: (
          <div>
            <ul className={htags.ulTag}>
              <li>
                The trade function is{" "}
                <span className="text-red-500 font-bold">
                  limited to Warframe items
                </span>
                . (Items from other games are prohibited)
              </li>
              <li>
                All{" "}
                <span className="text-blue-500 font-bold">trade prices</span>
                are based on{" "}
                <span className="text-green-600 font-bold">
                  real-time prices on Warframe Market.
                </span>
              </li>
              {/* detailed description */}
              <ul className={htags.ulTag}>
                <li>
                  However, targeting specific users who are unaware of Warframe
                  Market prices and{" "}
                  <span className="text-red-500 font-semibold">
                    listing items at a{" "}
                    <span className="font-extrabold">very</span> high price
                    compared to the market price is prohibited
                  </span>
                  .
                </li>
                <li>
                  For those who are not familiar with market prices, we provide
                  a shortcut link to check the{" "}
                  <span className="text-blue-500">Warframe Market</span> search
                  results for the posted item. (Clicking the{" "}
                  <span className="text-blue-600 font-bold underline">
                    blue link text
                  </span>
                  in the trade post takes you to the market search results.)
                </li>
                <li>
                  Also, since we have built-in a feature that automatically sets
                  the price based on real-time market prices when you post a
                  trade, please refer to it.
                </li>
              </ul>
              <li>
                The currency corresponding to the item being traded does not
                necessarily have to be{" "}
                <span className="font-bold">[Platinum]</span>, and this depends
                entirely on the seller's decision.
              </li>
              <ul className={htags.ulTag}>
                <li>
                  However,{" "}
                  <span className="text-red-500 font-bold">
                    transactions with real money are prohibited
                  </span>
                  .
                </li>
                <li className="text-red-500 font-bold">
                  If caught trading with real money, you will be permanently
                  banned from the clan without warning.
                </li>
                <li>
                  Real money trading and attempts are subject to sanctions under
                  the Warframe End User License Agreement (EULA). <br />
                  If caught, DE may permanently ban the account.
                </li>
              </ul>
            </ul>
            <P text='If caught violating the above prohibitions, as it may harm others, the person involved will have their "In-game Nickname" publicly revealed in the Clan Server and receive a warning.' />
            <p className="text-lg font-bold">
              (3 Warnings, then Permanent Ban from Clan)
            </p>
          </div>
        ),
      },
      // do trade
      {
        id: "trade-request",
        title: "(1) Requesting Trade",
        desc: "How to request a trade on a posted trade article.",
        foot: (
          <>
            <h4 className={htags.H4}>It's not difficult!</h4>
            <p className={htags.pTag}>
              Please press the purple <strong>Trade</strong> button on the trade
              post.
            </p>
            <P text="Pressing the button sends a mention notification to the trade post creator." />
            <P text="Then you can freely chat and trade in the thread." />
            <NOTE
              color="blue"
              icon="tip"
              title="Tip"
              text={
                <>
                  If you hover your mouse over the whisper and party invite
                  commands at the bottom of the post, a copy button will appear
                  on the right.
                  <br />
                  <br />
                  Copy it, then paste it into the Warframe chat to use the
                  whisper and party invite functions.
                </>
              }
            />
            <DocImage
              src={`${IMG_PATH}trade-created${IMG_EXT}`}
              maxWidth="90%"
              caption="Trade Post Example"
            />
            <p className={htags.pTag}></p>
          </>
        ),
      },
      // create trade
      {
        id: "trade-how-create",
        title: "(2) Creating Trade Post",
        desc: "",
        foot: (
          <>
            <p className={htags.pTag}>
              Type <strong>/trade</strong> in the chat window to search for and
              select the trade command.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-cmd1${IMG_EXT}`}
              maxWidth="90%"
              caption="Search for trade command in chat"
            />
            <p className={htags.pTag}>The input fields are as follows.</p>
            <ul className={htags.ulTag}>
              <li>
                <span className={htags.graveTag}>trade_type</span>: Trade type.
                (Select Sell/Buy)
              </li>
              <li>
                <span className={htags.graveTag}>item_name</span>: Item name to
                Sell/Buy (Searchable for items sold in the market)
              </li>
              <li>
                <span className={htags.graveTag}>game_nickname</span>:
                Automatically set based on user nickname.
                {/* Warframe nickname (Not Discord nickname!) */}
              </li>
              {/* <ul className={htags.ulTag}>
                <li>
                  It is used for whisper and party invite commands, so please enter it correctly!
                </li>
              </ul> */}
              <li>
                <span className={htags.graveTag}>item_rank</span>: [Optional] If
                the item has a rank, such as an Arcane, enter the rank of the
                item to trade.
              </li>
              <li>
                <span className={htags.graveTag}>price</span>: [Optional] Price
                per unit
              </li>
              <ul className={htags.ulTag}>
                <li>
                  If left blank, it is automatically set to a reasonable price
                  based on the market lowest price.
                </li>
              </ul>
              <li>
                <span className={htags.graveTag}>quantity</span>: [Optional]
                Item quantity. (Default is 1.)
              </li>
            </ul>
            <DocImage
              src={`${IMG_PATH}trade-cmd${IMG_EXT}`}
              maxWidth="80%"
              caption="Content that can be entered in the trade command"
            />
            <DocImage
              src={`${IMG_PATH}trade-input-ing${IMG_EXT}`}
              maxWidth="100%"
              caption="Enter desired content"
            />
            <p className={htags.pTag}>
              After entering the desired content and pressing Enter to send, a
              trade post is created with the message below.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-created1${IMG_EXT}`}
              maxWidth="100%"
              caption="Trade post creation complete message"
            />
            <p className={htags.pTag}>
              Clicking the blue link takes you to the corresponding thread
              (trade post). <br />
              (Or please go to the trade channel directly.)
            </p>
            <p className={htags.pTag}>
              In the trade channel, you can select the desired thread to check
              the trade post.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-${IMG_EXT}`}
              caption="Trade Post List Example"
            />
          </>
        ),
      },
      // edit trade article
      {
        id: "trade-edit",
        title: "(3) Trade Post Related",
        desc: "Introduces features available in trade posts.",
        foot: (
          <>
            <p className={htags.pTag}>Trade posts look like this:</p>
            <DocImage
              src={`${IMG_PATH}trade-created${IMG_EXT}`}
              maxWidth="80%"
              caption="Trade Post Example"
            />
            <p className={htags.pTag}>
              Descriptions for each button are as follows.
            </p>
            <ul className={htags.ulTag}>
              <li>Trade: Sends a trade request message to the other party.</li>
              <li>* Change Qty: Can change the sales quantity.</li>
              <li>* Edit Price: Can modify the item price.</li>
              <li>* Change Nickname: Can modify the game nickname.</li>
              <li>* End Trade: Converts the post to archive status.</li>
            </ul>
            <p className={htags.pTag}>
              (* marked items are only available to the trade post creator.)
            </p>
            {/* <DocImage src={`${IMG_PATH}trade-${IMG_EXT}`} caption="" />
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p> */}
          </>
        ),
      },
      // edit qty
      {
        id: "trade-edit-qty",
        title: "Change Quantity",
        desc: "Button used to change quantity.",
        foot: (
          <>
            <p className={htags.pTag}>
              Clicking the <strong>Change Qty</strong> button on the trade post
              displays the window below.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-mod-num${IMG_EXT}`}
              caption="Change Quantity Popup"
            />
            <p className={htags.pTag}>
              Enter the quantity you want to change and press the{" "}
              <strong>Send</strong> button.
            </p>
            <p className={htags.pTag}>
              If a non-numeric value is entered, it is automatically set to 1.
            </p>
          </>
        ),
      },
      // edit price
      {
        id: "trade-edit-price",
        title: "Edit Price",
        desc: "Button used to modify price.",
        foot: (
          <>
            <p className={htags.pTag}>
              Clicking the <strong>Edit Price</strong> button on the post
              displays the window below.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-mod-price${IMG_EXT}`}
              caption="Edit Price Popup"
            />
            <p className={htags.pTag}>
              Then, enter the price you want to change and press{" "}
              <strong>Send</strong>.
            </p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
          </>
        ),
      },
      // edit nickname
      {
        id: "trade-edit-nick",
        title: "Change Nickname",
        desc: "Button used to modify nickname.",
        foot: (
          <>
            <p className={htags.pTag}>
              Clicking the <strong>Change Nickname</strong> button on the post
              displays the window below.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-nickname${IMG_EXT}`}
              caption="Change Nickname Popup"
            />
            <p className={htags.pTag}>
              Enter the nickname you want to modify and press the{" "}
              <strong>Send</strong> button.
            </p>
            <p className={htags.pTag}>
              The entered nickname is used when copying whisper commands and
              invite commands, so please enter it accurately.
            </p>
          </>
        ),
      },
      // finish trade
      {
        id: "trade-exit",
        title: "End Trade",
        desc: "Button used when the trade is complete and the trade post needs to be taken down.",
        foot: (
          <>
            <p className={htags.pTag}>
              (End Trade is only available to the trade post creator.)
            </p>
            <p className={htags.pTag}>
              Clicking the <strong>End Trade</strong> button asks for
              confirmation to really take down the post.
            </p>
            <DocImage
              src={`${IMG_PATH}trade-confirm-close${IMG_EXT}`}
              caption="after clicking End Trade button"
            />
            <p className={htags.pTag}>
              Clicking the <strong>Yes (End)</strong> button converts the trade
              post to archive status. <br /> (It is not completely deleted.)
            </p>
            <DocImage
              src={`${IMG_PATH}trade-deleted${IMG_EXT}`}
              caption="After clicking confirm button"
            />
            <NOTE
              color="orange"
              icon="alert"
              title="Caution"
              text="As stated in the guidance, all buttons become inactive, so the post cannot be modified or reactivated."
            />
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
            <p className={htags.pTag}></p>
          </>
        ),
      },
    ],
  },
  // 6. FAQ Section
  troubleshooting: {
    id: "faq",
    title: "Frequently Asked Questions (FAQ)",
    list: [
      // Interaction Error
      {
        q: `Interaction error appears when pressing a button or using a command`,
        a: (
          <>
            <ol className={`${htags.olTag} ${tw.txt.dim}`}>
              <li>
                Check if <strong>{COMMON.nameEn} Bot</strong> is{" "}
                <strong>Online</strong>.
              </li>
              <ul className={`${htags.ulTag} ${tw.txt.dim}`}>
                <li>
                  If it is <strong>under maintenance</strong>, it cannot be used
                  until maintenance is over.
                </li>
                <li>
                  If the bot is offline, <ContactMe />
                </li>
              </ul>
              <li>
                If you <strong>confirmed it is online</strong>
                <ul className={`${htags.ulTag} ${tw.txt.dim}`}>
                  <li>
                    For desktop and web environments, press Ctrl + R to refresh
                    the Discord app.
                  </li>
                  <li>(For macOS environment, cmd + R)</li>
                  <li>
                    For mobile environment, close the Discord app and restart
                    it.
                  </li>
                </ul>
              </li>
            </ol>
            {/* <br /> */}
          </>
        ),
      },
      // Application Response Error
      {
        q: (
          <span>
            'The application did not respond' message appears and
            commands/buttons do not work.
            <br />
            Or the bot thinks for too long (e.g., 'Thinking' message for more
            than 1 minute)
          </span>
        ),
        a: (
          <>
            An unexpected error occurred during processing, so the function is
            not working.
            <br />
            <ContactMe />
          </>
        ),
      },
      // Kicked from party without notice
      {
        q: `I was forcibly removed from the party without any notice/announcement`,
        a: (
          <>
            <strong>Please contact the Party Leader first.</strong> There is a
            possibility it was a mistake.
            <br />
            <br /> If you cannot contact the Party Leader, it can be{" "}
            <strong>judged as abuse</strong>.
            <br />
            <ContactMe />
            <br />
            After internal meetings with the executives, warnings/sanctions for
            abuse will be taken against the Party Leader.
          </>
        ),
      },
      // Continuous Notifications
      {
        q: `A specific user is spamming notifications using the alert system of party or trade posts`,
        a: (
          <>
            Spamming notifications is a violation of this Discord bot's terms of
            service.
            <br />
            <ContactMe />
            If a report is received, we will take action after internal review
            and meetings with executives.
            <br />
            (Attaching chat screenshots is even better.)
          </>
        ),
      },
      // Add Private Server
      {
        q: "I want to add the bot to my private server",
        a: (
          <>
            This feature is built for the Korea Warframe server. <br />
            If you want to add it to a private server, you can use it by paying
            a fee.
            <br />
            Since the fee depends on the server scale, if you want a
            consultation, <ContactMe />
          </>
        ),
      },
      {
        q: "If you have any other questions or inquiries?",
        a: <ContactMe />,
      },
    ],
  },
  // 7. Terms of Service
  terms: {
    id: "tos",
    title: "Terms of Service",
    desc: (
      <>
        <H2 text="Purpose" />
        <P text='These terms aim to define the rights, obligations, and responsibilities between the "Server Administrator who have nickname: Cat" executives (hereinafter "Operator") providing the service and the user in using all functions, content, and websites provided by the Warframe Utility Bot (tentative name, hereinafter "Service").' />
        <P text="By adding the bot to a server or using its functions, the user is deemed to agree to these terms." />
        <H2 text="Effectiveness and Modification of Terms" />
        <ul className={htags.ulTag}>
          <li>These terms apply to all users using the Service.</li>
          <li>
            The Operator may revise the terms within the scope that does not
            violate relevant laws if necessary.
          </li>
          <li>
            If the terms are changed, they will be announced in advance through
            Discord bot announcements or the support server.
          </li>
          <li>
            If the user continues to use the Service after the changed terms are
            announced, they are deemed to have agreed to the changes. If not
            agreed, User should be stop using this service.
          </li>
        </ul>
        <H2 text="Provision and Change of Service" />
        <ul className={htags.ulTag}>
          <li>
            The Operator provides various functions for user convenience within
            the Discord platform.
          </li>
          <li>
            The Operator may change or suspend all or part of the Service in the
            event of unavoidable reasons such as maintenance, Discord API policy
            changes, or force majeure.
          </li>
          <li>
            The Operator is not responsible for any damages to the user caused
            by the change or suspension of the Service and does not provide
            separate compensation.
          </li>
        </ul>
        <H2 text="Obligations of User" />
        <ul className={htags.ulTag}>
          <li>
            Users must comply with Discord's Terms of Service and Community
            Guidelines.
          </li>
          <li>
            Users must use the Service only for legal purposes and are
            prohibited from doing the following:
          </li>
          <ul className={htags.ulTag}>
            <li>
              Acts that cause discomfort to others such as flooding, spamming,
              advertising using the bot
            </li>
            <li>
              Accessing or using the Service outside the intended scope of use
              (according to the Operator's independent judgment)
            </li>
            <li>
              Commercially using the Service without the Operator's prior
              permission
            </li>
            <li>Using the Service illegally</li>
            <li>
              Exploiting bugs or vulnerabilities of the Service or distributing
              them
            </li>
            <li>
              Other acts that violate relevant laws or interfere with Service
              operation
            </li>
          </ul>
        </ul>
        <li>
          If a bug or security vulnerability is discovered during Service use,
          the user must immediately report it to the Operator and must not
          exploit it.
        </li>
        <li>
          In case of violation of the above obligations, the Operator may
          restrict or permanently ban the user's Service use without prior
          notice.
        </li>
        <H2 text="Privacy Protection" />
        <P text="The Operator collects data to provide better service." />
        <P text="Collected information is not used for purposes other than Service operation and is not provided to third parties except when required by law." />

        <p className={htags.pTag}>
          Details follow the separately notified <strong>Privacy Policy</strong>
          .
          <br />
          Please click the Privacy Policy in the left sidebar to check. (On
          mobile, you can navigate through the top right menu button.)
        </p>

        <H2 text="Limitation of Liability (Indemnification)" />
        <ul className={htags.ulTag}>
          <li>
            The Operator is not responsible for cases where the Service cannot
            be provided due to force majeure such as natural disasters, Discord
            platform failures, or communication network failures.
          </li>
          <li>
            The Operator is not responsible for Service usage obstacles or data
            loss caused by the user's fault.
          </li>
          <li>
            The Operator is not responsible for the loss of expected profits
            from using the Service or damages caused by materials obtained
            through the Service unless there is intentional or gross negligence
            by the Operator.
          </li>
        </ul>

        <H2 text="Copyright" />
        <ul className={htags.ulTag}>
          <li>
            Copyright and intellectual property rights for functions, codes,
            designs, etc., provided by the Service belong to the Operator.
          </li>
          <li>
            However, data, images, trademarks, etc., related to the game
            (Warframe) displayed within the Service belong to the respective
            copyright holders (Digital Extremes).
          </li>
          <li>
            Users may not use information obtained using the Service for
            commercial purposes or distribute it to third parties without the
            Operator's consent.
          </li>
        </ul>

        <H2 text="Links" />
        <P text="If links to external websites and resources provided by third parties are included in the Service, these links are provided for user convenience. The Operator does not control the content or policies of such external sites and is not responsible for any problems arising from the user's use thereof." />

        <H2 text="Usage Restriction and Age Compliance" />
        <P text="This Service is intended for users aged 14 or older. Children under 14 cannot use the Service, and Service use may be restricted if such fact is confirmed." />

        <H2 text="Governing Law and Jurisdiction" />
        <P text="The interpretation of these terms and disputes shall follow the laws of the Republic of Korea, and if a lawsuit is filed regarding Service use, it shall follow the competent court under the Civil Procedure Act." />

        <H2 text="Addendum" />
        <P text="These Terms of Service may be added, deleted, or modified according to changes in laws and policies." />
        <P text="If there are changes, they will be announced through Discord bot announcements or the official support server 7 days before enforcement." />
        <ul className={htags.ulTag}>
          <li>Announcement Date: December 4, 2025</li>
          <li>Effective Date: December 5, 2025</li>
        </ul>
      </>
    ),
  },
  // 8. Privacy Policy
  privacy: {
    id: "privacy",
    title: "Privacy Policy",
    desc: (
      <>
        <P text="'Server Administrator who have nickname: Cat' (hereinafter 'Operator') operating the Warframe Utility Bot (tentative name, hereinafter 'Service') values the user's personal information and does its best to protect the user's personal information." />
        <P text="By using the bot, you are deemed to agree to this Privacy Policy. If you do not agree, you must stop using the bot." />

        <H2 text="Items of Personal Information Collected" />
        <P text="The Operator collects the following minimum information for smooth service provision and problem resolution." />
        <ul className={htags.ulTag}>
          <li>
            <strong>User Identification Information</strong>: Discord User ID,
            Nickname
          </li>
          <li>
            <strong>Usage Environment Information</strong>: Name and ID of the
            server (Guild) where the command was used, Channel Name and ID
          </li>
          <li>
            <strong>Service Usage Records</strong>: Commands used, data entered
            through pop-ups (Modals), error logs
          </li>
        </ul>

        <H2 text="Collection Method" />
        <P text="Automatically generated and collected during bot usage" />

        <H2 text="Purpose of Collection and Use of Personal Information" />
        <P text="Collected information is not used for purposes other than the following, and prior consent will be sought if the purpose changes." />

        <ol className={htags.olTag}>
          <li>
            <strong>Service Provision and Function Execution</strong>: Providing
            core bot functions and user identification
          </li>
          <li>
            <strong>Error Resolution and Technical Support</strong>: Tracking
            errors and bugs occurring during service use, responding to user
            inquiries
          </li>
          <li>
            <strong>Service Improvement</strong>: Identifying preferred
            functions through usage statistics analysis to improve existing
            functions or use as data for new function development
          </li>
        </ol>

        <H2 text="Personal Information Retention Period" />
        <P text="In principle, the user's personal information is destroyed without delay once the purpose of collection and use is achieved. However, the following information is retained for the period specified below for the following reasons." />
        <ul className={htags.ulTag}>
          <li>
            <strong>Retained Items</strong>: Service usage records and log data
          </li>
          <li>
            <strong>Retention Period</strong>: Maximum 1 year from collection
            date
          </li>
          <li>
            <strong>Retention Reason</strong>: Securing statistical data for
            preventing service abuse and improving functions
          </li>
          <li>
            <strong>Upon Service Termination</strong>: If the bot service
            termination is confirmed, all collected information will be
            immediately destroyed upon service termination.
          </li>
        </ul>
        <P text="However, if retention is necessary under relevant laws, the Operator retains the information for a certain period set by the relevant laws." />

        <H2 text="Destruction Procedure and Method of Information" />
        <P text="When the time for personal information destruction arrives, it is destroyed by the following methods." />
        <ul className={htags.ulTag}>
          <li>
            <strong>Procedure</strong>: Personal information for which the
            retention period has elapsed or the processing purpose has been
            achieved is safely destroyed according to internal policies.
          </li>
          <li>
            <strong>Electronic File Form</strong>: Permanently deleted using
            technical methods that cannot be restored or regenerated.
          </li>
        </ul>

        <H2 text="Provision of Personal Information to Third Parties" />
        <P text="The Operator does not, in principle, provide the user's personal information externally. However, the following cases are exceptions." />
        <ul className={htags.ulTag}>
          <li>When the user has agreed in advance</li>
          <li>
            When requested by investigation agencies in accordance with
            procedures and methods prescribed by laws for investigation purposes
            or under the provisions of laws
          </li>
        </ul>

        <H2 text="User Rights and How to Exercise Them" />
        <P text="Users can view their registered personal information or request deletion at any time." />
        <ul className={htags.ulTag}>
          <li>
            <strong>How to Exercise Rights</strong>: Request via email or
            official support server through writing, chat, etc.
          </li>
          <li>
            <strong>Requestable Matters</strong>: Personal information access,
            correction, deletion, suspension of processing
          </li>
        </ul>

        <H2 text="Measures to Ensure Safety of Personal Information" />
        <P text="The Operator takes the following measures to ensure the safety of personal information." />
        <ol className={htags.ulTag}>
          <li>
            <strong>Administrative Measures</strong>: Minimizing the number of
            personnel with access to personal information to Operators.
          </li>
          <li>
            <strong>Technical Measures</strong>:
          </li>
          <ul className={htags.ulTag}>
            <li>
              Stored data is kept in storage devices with OS (Operating System)
              level encryption technology applied.
            </li>
            <li>
              Encrypted communication protocols are used during external
              transmission.
            </li>
            <li>
              Systems are protected from hacking or viruses through regular
              software updates.
            </li>
          </ul>
        </ol>

        <H2 text="Personal Information Protection Officer and Contact" />
        <P text="Please contact the channel below for all personal information protection-related complaints occurring during service use." />
        <ul className={htags.ulTag}>
          <li>
            Officer: Executive(Server Administrator) with nickname{" "}
            <strong>Cat</strong> (Founding Clan Role)
          </li>
          <li>Email: {process.env.REACT_APP_CONTACT_EMAIL}</li>
          <li>
            <A
              href={process.env.REACT_APP_SUPPORT_SERVER}
              text="Discord Support Server"
            />{" "}
            Shortcut
          </li>
        </ul>

        <H2 text="Changes to Privacy Policy" />
        <P text="This Privacy Policy may be added, deleted, or modified according to changes in laws, policies, or security technologies. If there are changes, they will be announced through Discord bot announcements or the official support server 7 days before enforcement." />
        <ul className={htags.ulTag}>
          <li>Announcement Date: December 4, 2025</li>
          <li>Effective Date: December 5, 2025</li>
        </ul>
      </>
    ),
  },
  // 9. Legal Notice
  contact: {
    id: "contact",
    title: "Need Help?",
    foot: (
      <>
        {/* <H3 text="You can contact us in the following situations." /> */}
        <ul className={htags.ulTag}>
          <li>Report Abuse</li>
          <li>Report Bug</li>
          <li>Other Bot Inquiries/Suggestions</li>
        </ul>

        <H3 text="How to Contact" />
        <P text="Please choose one of the methods below to contact the person in charge." />
        <ul className={htags.ulTag}>
          <li>
            Submit to{" "}
            <A
              href={process.env.REACT_APP_SUPPORT_SERVER}
              text="Official Support Server"
            />
            <br />
            <span className={tw.txt.dark}>
              (Clicking the blue text takes you to the support server invite.)
            </span>
          </li>
          {/* <li>
            Use the <strong className={htags.graveTag}>/inquiry</strong> command
            to submit an inquiry
          </li> */}
        </ul>
        <P text="If you need to attach image files such as screenshots, please submit them on the official support server." />
        <P text="Feedback is always welcome." />
        <NOTE
          color="red"
          icon="alert"
          title="Notice"
          text={
            <ul>
              <li>
                In the case of <strong>User Reporting</strong>,{" "}
                <strong>
                  reception is only possible with specific reasons
                </strong>
                .
              </li>
              <li>
                If there is no clear evidence such as screenshots, sanctions may
                not be imposed even if a report is filed.
              </li>
            </ul>
          }
        />
      </>
    ),
  },
};
