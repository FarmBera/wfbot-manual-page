import {COMMON, SUB} from "./common";
import {htags, tw} from "../style/tailwind";

import {A, BOLD, H2, H3, NOTE, P} from "../ui/CustomElements";
// import TipTime from "../components/TipTime";
import DocImage from "../components/DocImage";
import {ContactMe} from "../components/ContactAdmin";

const IMG_PATH = "/imgko/";
const IMG_EXT = ".webp";

export const uiTextsEn = {
  // common UI
  docTitle: <span>{COMMON.nameEn} Home</span>,
  searchPlaceholder: "Search functionality coming soon...",
  contents: "Table of Contents",
  next: "Next",
  footerMsg: "End of document.",
  donate: "☕️ Support the Developer",
  copyright: (<>
    (C) {COMMON.year}. {COMMON.company}. All rights reserved.<br/>
    Warframe art and related data are copyrighted by Digital Extremes Ltd.
  </>),
  picEx: "Example",

  // 1. Introduction Section
  intro: {
    id: "intro", title: "1. Introduction", welcomeTitle: (<>
      Welcome to the <strong className={`${tw.txt.blue}`}>{COMMON.nameEn}</strong> Bot Homepage!
    </>), welcomeDesc: (<>
      {/* This document explains how to use <strong>{COMMON.name}</strong>. */}
      Use the Table of Contents on the left to navigate quickly. <br/>
      Sections 3, 4, and 5 cover how to use the bot commands.
    </>), imgDesc: `Thanks for visiting, meow!`, foot: '', note: "",
  },

  // 2. Features Section
  features: {
    id: "features",
    title: "2. So, what does this bot do?",
    mainTitle: "Key Features at a Glance",
    head: (<P text="It provides real-time Warframe content updates and convenient utility features for your server."/>),
    items: [{
      title: "Real-time Warframe Content",
      desc: "Check in-game world state using simple commands.",
      subDesc: "(Baro Ki'Teer status, Sorties, Invasions, Alerts, etc.)",
    }, {
      title: "Real-time Notifications", desc: (<>
        Get instant notifications whenever new content or alerts are updated.
      </>),
    }, {
      title: "Market Search", desc: (<>
        Tired of opening the browser every time to check market prices?<br/><br/>
        You can easily search for item prices directly within Discord. No need to visit the Warframe Market website for
        every little thing!<br/>
      </>), subDesc: "Search results include a direct link to the Market page if you need more details.",
    }, {
      title: "Server LFG (Party) System", desc: (<>
        Is it hard to DM everyone to gather a squad? <br/><br/>
        Use simple commands and our management system to recruit party members easily.
      </>),
    }, {
      title: "Server Trading System", desc: (<>
        Easily buy and sell items within your guild/server using our command system.<br/><br/>
        It includes an automatic pricing feature based on real-time Market data, so even beginners can list items
        without worrying about pricing errors.
      </>),
    },],
  },

  // 3. Manual (Commands) Section
  manual: {
    id: "manual", title: "3. Commands", mainTitle: "Command List", list: [{
      id: SUB.HELP,
      title: "help",
      desc: "Check available commands and usage guides.",
      image: `${IMG_PATH}help1${IMG_EXT}`,
      width: "60%",
      head: (<>
        {/* <P text="Shows a link to the web page you are currently viewing." /> */}
      </>),
    }, {
      id: SUB.ANNOUNCEMENT,
      title: "announcements",
      desc: "Check the latest bot announcements.",
      image: `${IMG_PATH}announcement${IMG_EXT}`,
    }, {
      id: SUB.PATCHNOTE,
      title: "patch-note",
      desc: "View the recent update history and patch notes for the bot.",
      image: `${IMG_PATH}patchnote${IMG_EXT}`,
      head: (<P text="See what's new, bug fixes, and improvements."/>),
    }, {
      id: SUB.PRIVACY,
      title: "privacy-policy",
      desc: "Read the Privacy Policy for this bot.",
      image: `${IMG_PATH}privacy-policy${IMG_EXT}`,
      foot: (<>
        <p> For more details, please check the <strong>Terms of Service / Privacy Policy</strong> section in the
          sidebar. </p>
        <p>Click the button to view the full legal text. (Opens an external page)</p>
      </>),
    }, {
      id: SUB.ALERTS,
      title: "alerts",
      desc: "Check currently active Alert missions.",
      image: `${IMG_PATH}alerts${IMG_EXT}`,
      head: (<>
        <p className={htags.pTag}> Displays the following information for Alerts:</p>
        <ul className={htags.ulTag}>
          <li>Mission Type - Node (Location)</li>
          <li>Mission Info (Enemy Level, Wave count, etc.)</li>
          <li>Time remaining</li>
        </ul>
        {/* <TipTime sampleTime="in 4 days" /> */}
      </>),
    }, {
      id: SUB.NEWS,
      title: "news",
      desc: "Get the latest official Warframe news.",
      image: `${IMG_PATH}news${IMG_EXT}`,
      head: (<>
        <p className={htags.pTag}>Click the blue text to jump directly to the official news post.</p>
      </>),
    }, {
      id: SUB.CETUSCYCLE,
      title: "cetus-cycle",
      desc: "Check the current Day/Night cycle for Cetus, Earth.",
      image: `${IMG_PATH}cetus${IMG_EXT}`,
      width: '50%',
    }, {
      id: SUB.SORTIE,
      title: "sortie",
      desc: "Check today's Sortie missions.",
      image: `${IMG_PATH}sortie${IMG_EXT}`,
      head: (<>
        <p className={htags.pTag}>Quickly see the time remaining, mission nodes, and modifiers/hazards.</p>
      </>),
    }, {
      id: SUB.ARCHONHUNT,
      title: "archonhunt",
      desc: "View this week's Archon Hunt missions and the reward Shard.",
      image: `${IMG_PATH}archonhunt${IMG_EXT}`,
      head: (<>
        <NOTE color="green" icon="tip" title="Tip"
              text="The color of the stripe on the left changes based on the available Archon Shard, so you can tell what you'll get at a glance!"/>
      </>),
    }, {
      id: SUB.VOIDTRADERS,
      title: "whenbaro",
      desc: "Check the status of Baro Ki'Teer.",
      image: `${IMG_PATH}voidtraders${IMG_EXT}`,
      head: (<><P text="Tells you if he is here, or when and where he will arrive."/></>),
      foot: (<>
        <P text="If Baro Ki'Teer has arrived, it will look like this:"/>
        <DocImage src={`${IMG_PATH}voidtraders-activated${IMG_EXT}`} caption="Display when Baro is active"/>
      </>),
    }, {
      id: SUB.VOIDTRADERSITEM,
      title: "baro-items",
      desc: "View the inventory list Baro Ki'Teer is currently selling.",
      image: `${IMG_PATH}voidtraders-item-yes${IMG_EXT}`,
      foot: (<>
        <P text="If Baro hasn't arrived yet, it will appear like this:"/>
        <DocImage src={`${IMG_PATH}voidtraders-item-no${IMG_EXT}`} caption="When Baro is inactive"/>
      </>),
    }, {
      id: SUB.STEELPATH,
      title: "steelpathreward",
      desc: "Check Teshin's weekly Steel Essence offerings.",
      image: `${IMG_PATH}steelpath${IMG_EXT}`,
    }, {
      id: SUB.FISSURES,
      title: "voidfissures",
      desc: "List active Void Fissure missions that are quick to clear (e.g., Exterminate, Capture).",
      image: `${IMG_PATH}fissures${IMG_EXT}`,
    }, {
      id: SUB.DEEPARCHIMEDEA,
      title: "eeparchimedea",
      desc: "Check this week's Deep Archimedea missions and modifiers.",
      image: `${IMG_PATH}deep${IMG_EXT}`,
    }, {
      id: SUB.TEMPORALARCHIMEDEA,
      title: "temporalarchimedea",
      desc: "Check this week's Temporal Archimedea missions and details.",
      image: `${IMG_PATH}temporal${IMG_EXT}`,
    }, {
      id: SUB.DUVIRICYCLE,
      title: "duviricycle",
      desc: "Check the current emotional state (Spiral) of Duviri.",
      image: `${IMG_PATH}duviri${IMG_EXT}`,
      width: "50%",
    }, {
      id: SUB.CALENDAR,
      title: "hexcalendar",
      desc: "[Beta] Check this week's Hex Calendar tasks and rewards.",
      image: `${IMG_PATH}calendar${IMG_EXT}`,
      width: "50%",
      head: (<><P text="This command is under improvement. Some information might be displayed incorrectly."/></>),
    }, {
      id: SUB.CAMBIONCYCLE,
      title: "cambion-cycle",
      desc: "Check the current Vome/Fass cycle for Cambion Drift, Deimos.",
      image: `${IMG_PATH}cambion${IMG_EXT}`,
      width: "50%",
    }, {
      id: SUB.DAILYDEALS,
      title: "dailydeals",
      desc: "Check Darvo's daily deal item.",
      image: `${IMG_PATH}dailydeals${IMG_EXT}`,
      width: "50%",
    }, {
      id: SUB.INVASIONS,
      title: "invasions",
      desc: "List active Invasions with special rewards (Forma, Reactors/Catalysts, etc.).",
      image: `${IMG_PATH}invasions${IMG_EXT}`,
    }, {
      id: SUB.VALLISCYCLE,
      title: "vallis-cycle",
      desc: "Check the current Warm/Cold cycle for Orb Vallis, Venus.",
      image: `${IMG_PATH}vallis${IMG_EXT}`,
      width: "50%",
    }, {
      id: SUB.MARKET_SEARCH, title: "market-search", desc: (<>
        <P text="Search for items on 'Warframe Market' to find the best deals."/>
        <P text="Clicking the item name in blue will take you directly to the market search result page."/>
      </>), image: `${IMG_PATH}market-search-result${IMG_EXT}`, foot: (<>
        <NOTE color="yellow" icon="alert" title="Notice"
              text={<>If an item doesn't appear in the search results, please <ContactMe/></>}
        />
      </>),
    }, {
      id: SUB.PARTY_CREATE,
      title: "create-party",
      desc: "Create a new LFG (Looking For Group) post. (For any game)",
      foot: (<div>
        <p className={htags.pTag}> For details, please refer to <strong>4. Party Recruitment</strong> in the sidebar.
        </p>
      </div>),
    }, {
      id: SUB.TRADE_CREATE,
      title: "trade",
      desc: "Create a trade listing in the server's trade channel. (Warframe items only)",
      foot: (<div>
        <p className={htags.pTag}> For details, please refer to <strong>5. Trading System</strong> in the sidebar.</p>
      </div>),
    }, {
      id: SUB.EVENTS,
      title: "event",
      desc: "[Beta] Check currently active recurring events (Thermia Fractures, Fomorians, etc.).",
      image: `${IMG_PATH}events${IMG_EXT}`,
      imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Events",
    }, {
      id: SUB.DUVIRI_WF,
      title: "circuit-warframes",
      desc: "Check which Warframes are available in the Duviri Normal Circuit this week.",
      image: `${IMG_PATH}circuit-warframe${IMG_EXT}`,
      imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Duviri+Warframe",
    }, {
      id: SUB.DUVIRI_INC,
      title: "circuit-incarnons",
      desc: "Check which Incarnon Adapters are available in the Steel Path Circuit this week.",
      image: `${IMG_PATH}circuit-incarnon${IMG_EXT}`,
      imagealt: "https://placehold.co/600x300/e2e8f0/64748b?text=Duviri+Incarnon",
    }, {
      id: "cmd-descendia",
      title: "descendia",
      desc: "[Beta] Fetch this week's Descendia missions and challenges.",
      foot: (<>
        {/* <p className={htags.pTag}></p> */}
        <NOTE color="yellow" icon="alert" title="Notice"
              text="This command is currently in Beta. Some text may not be fully translated."/>
        <DocImage src={`${IMG_PATH}descendia${IMG_EXT}`} caption="/descendia command example"/>
      </>),
    }, {
      id: "cmd-steel-incursion", title: "steelpath-incursion", desc: "Check today's Steel Path Incursions.", foot: (<>
        <DocImage src={`${IMG_PATH}steel-incursion${IMG_EXT}`} caption="/sp-incursion command example"/>
      </>),
    }, {
      id: "cmd-arbitration", title: "arbitration", desc: "Check the current Arbitration mission type.", foot: (<>
        <DocImage src={`${IMG_PATH}arbitration${IMG_EXT}`} maxWidth="50%" caption="/arbitration command example"/>
      </>),

    }, {
      id: "cmd-complain",
      title: "contact-us",
      desc: "Submit inquiries or reports to the server staff. (User reports, questions, etc.)",
      foot: (<>
        <H2 text={'Please check the following before submitting.'}/>
        <p className={htags.pTag}>
          <strong>This feature is for contacting the specific server's administrators.</strong><br/>
          <span
            className={`${tw.txt.orange} ${tw.bold.eb}`}>If you have inquiries about the BOT itself, please <ContactMe/></span>
        </p>
        <ul className={htags.ulTag}>
          <li>Once submitted, the content cannot be edited. Please write carefully.</li>
          {/*<li>Server rules apply to these submissions.</li>*/}
          <li>Reports must include specific evidence. False reporting may lead to penalties.</li>
        </ul>
        <DocImage src={`${IMG_PATH}complain${IMG_EXT}`} caption="/contact command example" maxWidth='60%'/>
      </>),
    },],
  },

  // 4. Party Section
  party: {
    id: "party", title: "4. Party Recruitment", mainTitle: "Party Commands", list: [// Party Overview
      {
        id: "party-intro", title: "Overview", desc: (<>
          <P text="Easily create LFG (Looking For Group) posts."/>
          <P text="It supports general gaming, so you can recruit for Warframe as well as other games."/>
          <P text="Gather your squad effortlessly!"/>
        </>), // image: ...
      }, {// Warnings
        id: "party-warning",
        title: <span className={tw.txt.red}>[Must Read] Usage Guidelines</span>,
        desc: "Please read before using the party system.", //
        foot: (<div>
          <ul className={htags.ulTag}>
            <li>If there is no activity (joins/leaves, status changes) for <strong>30 days</strong>, the recruitment
              will <strong>automatically end</strong>.
            </li>
            <li>Information entered when creating/editing a party is public. <strong>Do not enter sensitive personal
              information.</strong></li>
            <li><strong>Server rules apply.</strong> Inappropriate language will result in automatic deletion and
              penalties according to server rules.
            </li>
            <li>You can check the server rules <A text="here." href={process.env.REACT_APP_SERVER_RULE}/></li>
          </ul>
          <P
            text="Violators caught breaking these rules may have their 'In-game Nickname' publicly shamed in the server and receive a warning to prevent harm to others."/>
          <P/>
          <ul className={htags.ulTag}>
            <li>Accumulated warnings may lead to a ban from the clan/server.</li>
            <li>In serious cases, an immediate permanent ban may be issued with the consensus of the administration.
            </li>
          </ul>
          {/*<p><strong>(3 Warnings = Permanent Ban)</strong></p>*/}
        </div>),
      }, {
        id: "party-list", title: "(1) Checking Party Info", desc: "How to check created party listings.", foot: (<>
          <p className={htags.pTag}>
            Go to the <strong className={tw.txt.sky}>Party-Recruitment</strong> channel under the <strong
            className={tw.txt.sky}>General</strong> category
            to see all active parties.
          </p>
          <DocImage src={`${IMG_PATH}party-listing${IMG_EXT}`} caption="Example of party list"/>
          <P text='Select a created thread to view the recruitment details.'/>
        </>),
      }, {
        id: "party-join-leave", title: "(2) Joining/Leaving", desc: "How to join or leave a party.", foot: (<>
          <DocImage src={`${IMG_PATH}party-article${IMG_EXT}`} caption="Party post example"/>
          <NOTE color="yellow" icon="tip" title="Tip"
                text="Button layout may vary depending on your Discord app screen size."/>
          <P/>
          <h4 className={htags.H4}>Joining a Party</h4>
          <p className={htags.pTag}>
            Click the green <span className={`${tw.txt.green} font-extrabold`}>Join</span> button to join the party.</p>
          <p>When the confirmation prompt appears, click <span className={`${tw.txt.green} font-extrabold`}>Yes (Proceed)</span> to
            confirm.</p>
          <DocImage src={`${IMG_PATH}party-confirm-join${IMG_EXT}`} caption="Join confirmation message"/>

          <h4 className={htags.H4}>Leaving a Party</h4>
          <p className={htags.pTag}> Click the red <span className={`${tw.txt.red} font-extrabold`}>Leave</span> button
            to leave the party.</p>
        </>),
      }, {
        id: "party-how-create", title: "(3) Creating a Party", desc: "How to create a recruitment post.", foot: (<>
          <h4 className={htags.H4}>Use the <strong>/create-party</strong> command. </h4>
          <ul className={htags.ulTag}>
            <li>Type the <code>/</code> character in the chat bar to use commands.</li>
            <ul className={htags.ulTag}>
              <li>(The slash key is usually near the right Shift key.)</li>
            </ul>
            <li>Search for 'party' or 'create' and select the command.</li>
          </ul>
          <DocImage src={`${IMG_PATH}party-cmd0${IMG_EXT}`} alt="Command search result"
                    caption="Command search result"/>
          <h4 className={htags.H4}> There are 5 input fields available. <br/></h4>
          <ul className={htags.ulTag}>
            <li><span className={htags.graveTag}>title</span>: Title of your post</li>
            <li><span className={htags.graveTag}>game_name</span>: Name of the game (Warframe, LoL, Apex, etc.)</li>
            <li>[Optional] <span className={htags.graveTag}>start_time</span>: When the party starts (Default: TBD)</li>
            <li>[Optional] <span className={htags.graveTag}>member_count</span>: Total number of members</li>
            <ul className={htags.ulTag}>
              <li><strong>Default: 4</strong> (Standard Warframe squad size)</li>
              <li>Includes <strong>the leader (you)</strong>.</li>
              <li><strong>Max 20</strong> members allowed.</li>
            </ul>
            <li>[Optional] <span className={htags.graveTag}>description</span>: Detailed description, requirements, etc.
            </li>
          </ul>
          <h4 className={htags.H4}>Fill in the desired information.</h4>
          (Guides appear above the fields to help you)
          <DocImage src={`${IMG_PATH}party-cmd-input${IMG_EXT}`} maxWidth="100%" caption="Fill in the details."/>
          Press Enter to send. A public thread and recruitment post will be created in
          the <strong>'party-recruitment'</strong> channel.
          <DocImage src={`${IMG_PATH}party-created${IMG_EXT}`} maxWidth="80%" caption="Creation completion message"/>
          Click the blue link to jump directly to your post, or go to the channel manually.
          <DocImage src={`${IMG_PATH}party-created2${IMG_EXT}`} maxWidth="80%" caption="Created Party Thread"/>
        </>),
      }, {
        id: "party-edit",
        title: "(4) Editing Party Info",
        desc: "These features are only available to the Party Leader (Creator).",
      }, {
        id: "party-edit-member", title: "(4-1) Edit Capacity", foot: (<>
          <p className={htags.pTag}><BOLD text="Edit Capacity"/> button allows you to change the max number of members.
          </p>
          <ul className={htags.ulTag}>
            <li>Includes <strong>the leader (you)</strong>.</li>
            <li>Can be set between <strong>2 ~ 20</strong>.</li>
            <li>If a non-number is entered, it defaults to <strong>4</strong>.</li>
          </ul>
          <P text="Clicking the button shows this modal:"/>
          <p className={htags.pTag}> Enter the new number and click <strong className={`${tw.txt.sky}`}>Submit</strong>.
          </p>
          <DocImage src={`${IMG_PATH}party-nop${IMG_EXT}`} caption="Capacity edit modal"/>
        </>),
      }, {
        id: "party-edit-article", title: "(4-2) Edit Post", desc: "Fix typos or update information.", foot: (<>
          <p className={htags.pTag}>You can modify:</p>
          <ul className={htags.ulTag}>
            <li>Title</li>
            <li>Game Name</li>
            <li>Description</li>
          </ul>
          <P text='Clicking the Edit Post button shows this modal:'/>
          <DocImage src={`${IMG_PATH}party-mod1${IMG_EXT}`} caption="Post edit modal"/>
          <p className={htags.pTag}>
            Update the fields and click <strong className={`${tw.txt.sky} ${tw.bold.eb}`}>Submit</strong>.
          </p>
          <DocImage src={`${IMG_PATH}party-mod2${IMG_EXT}`} caption="Editing..."/>
          <DocImage src={`${IMG_PATH}party-mod3-result${IMG_EXT}`} caption="Edit result"/>
        </>),
      }, {
        id: "party-change-departure",
        title: "(4-3) Change Start Time",
        desc: "Update the departure/start time.",
        foot: (<>
          <p className={htags.pTag}>
            Click <strong>Change Time</strong> to open the input modal.<br/>
            You can type the time in natural language (e.g., "in 1 hour", "8 PM EST").<br/>
          </p>
          <DocImage src={`${IMG_PATH}party-departure${IMG_EXT}`} caption="Recruitment complete state"/>
        </>),
      }, {
        id: "party-change",
        title: "(4-4) Toggle Status",
        desc: "Switch the recruitment status between Open and Closed.",
        foot: (<>
          <p className={htags.pTag}>
            Clicking <strong>Close Recruitment</strong> changes the status to <strong>Closed/Full</strong>.
          </p>
          <DocImage src={`${IMG_PATH}party-toggle${IMG_EXT}`} caption="Closed state"/>
          <p className={htags.pTag}>In the Closed state:</p>
          <ul className={htags.ulTag}>
            <li><strong>New members cannot join.</strong></li>
            <li><strong>Capacity cannot be edited.</strong></li>
          </ul>
          <p className={htags.pTag}>
            Click <strong className={`${tw.txt.green}`}>Reopen</strong> to switch back to "Recruiting".
          </p>
        </>),
      }, {
        id: "party-call",
        title: "(4-5) Mention Members",
        desc: "Send a notification ping to all party members.",
        foot: (<>
          <p className={htags.pTag}>
            Mentions everyone currently in the party. <br/>
            A message pinging all members will be sent in the thread.
          </p>
          <p className={htags.pTag}>Usage examples: "We are starting now!", "Check this announcement", etc.</p>
          <DocImage src={`${IMG_PATH}party-call-result${IMG_EXT}`} maxWidth="75%" caption="Mention example"/>
          <p className={htags.pTag}>
            There is a 15-minute cooldown to prevent spam.<br/>
            Abusing this feature (e.g., notification spam) may lead to automatic blacklisting by the bot and
            penalties. <br/>
            We take abuse reports seriously.
          </p>
          <p className={htags.pTag}>Please use responsibly.</p>
        </>),
      }, {
        id: "party-kick",
        title: "(4-6) Kick Member",
        desc: "Forcefully remove a specific member from the party.",
        foot: (<>
          <NOTE color="red" icon="alert" title="Warning" text={<div>
            <div className={htags.pTag}><strong>
              This feature is intended for situations where a member cannot attend but forgets to leave the party
              themselves.
            </strong></div>
            <div className={htags.pTag}><strong className={tw.txt.red}>Do not use this to kick members without notice or
              reason.</strong>
            </div>
            <div className={htags.pTag}> Abuse of this feature may result in penalties.</div>
          </div>}
          />
          <br/>
          <P text='Clicking the button shows the following menu:'/>
          <p className={htags.pTag}>Select the member you wish to remove from the <strong>Select member to
            kick</strong> dropdown. </p>
          <DocImage src={`${IMG_PATH}party-kick-select${IMG_EXT}`} caption="Kick dropdown example"/>
          <NOTE color="orange" icon="alert" title="Caution!" text={<div>
            Selecting a member immediately removes them. <br/>Be careful not to click the wrong person!
          </div>}/>
        </>),
      }, {
        id: "party-exit",
        title: "(4-7) End Recruitment",
        desc: "Permanently end the party recruitment. (Archives the post)",
        foot: (<>
          <p className={htags.pTag}>
            Clicking <strong>End Party</strong> will ask for confirmation to prevent accidents.
          </p>
          <DocImage src={`${IMG_PATH}party-confirm-delete${IMG_EXT}`} caption="Confirmation prompt"/>
          <p className={htags.pTag}>Clicking <strong>Yes (Proceed)</strong> permanently ends the recruitment. </p>
          <P text='This disables the post and archives it, as shown below (it does not delete the thread entirely).'/>
          <DocImage src={`${IMG_PATH}party-deleted${IMG_EXT}`} maxWidth='50%' caption="Archived post"/>
          <NOTE color="orange" icon="alert" title="Caution!" text="This action cannot be undone."/>
        </>),
      },],
  },
  trade: {
    id: "trade", title: "5. Trading System", mainTitle: "Trade Commands", list: [// trade warnings
      {
        id: "trade-warning",
        title: <span className={tw.txt.red}>[Must Read] Usage Guidelines</span>,
        desc: "Please read before trading.",
        foot: (<div>
          {/* <NOTE color="yellow" icon="alert" title="Notice" ... /> */}
          <ul className={htags.ulTag}>
            <li>Trading is limited to <span className={tw.txt.yellow}>Warframe items only</span>. (No other game items)
            </li>
            <li> All prices are based on <span className="font-bold">Real-time Warframe Market values</span>.</li>
            {/* detailed description */}
            <ul className={htags.ulTag}>
              <li>Listing items at <span className="font-extrabold">excessively</span> high prices to scam users unaware
                of market values is <span className={`${tw.txt.yellow}`}>strictly prohibited</span>.
              </li>
              <li>
                To protect beginners, we provide a direct link to the <strong>Warframe Market</strong> search results
                for the listed item. (Click the <strong>blue link</strong> in the trade post).
              </li>
            </ul>
            <li>
              The currency does not necessarily have to be <span className="font-bold">[Platinum]</span>; it is up to
              the seller.
            </li>
            <ul className={htags.ulTag}>
              <li>
                However, <span
                className={`${tw.txt.red} ${tw.bold.eb}`}>Real Money Trading (RMT) is strictly prohibited</span>.
                <span className={`${tw.txt.red} ${tw.bold.b}`}>(Immediate permanent ban if caught)</span>
              </li>
              <li>
                According to the <A href="https://www.warframe.com/eula#virtualGoods" text="Warframe EULA"/>{" "}
                <strong>Section 9 - Virtual Goods</strong>,{" "}
                <strong>buying/selling items for real-world currency is prohibited</strong>.
                If caught, DE may <strong>permanently ban</strong> your Warframe account.
              </li>
            </ul>
          </ul>
          <P text='Violators will be publicly shamed in the server and warned.'/>
          <P text="Serious offenses may result in an immediate permanent ban."/>
        </div>),
      }, {
        id: "trade-request", title: "(1) Requesting a Trade", desc: "How to buy/trade for a listed item.", foot: (<>
          <DocImage src={`${IMG_PATH}trade-created${IMG_EXT}`} maxWidth="90%" caption="Trade post example"/>
          <NOTE color="blue" icon="tip" title="Tip" text={<>
            Hover over the Whisper/Invite command at the bottom of the post to see a Copy button.<br/>
            Copy and paste it into the in-game chat to easily contact the seller.
          </>}/>
          <P/>
          <h4 className={htags.H4}>Click the purple <strong>Trade</strong> button on the post.</h4>
          <DocImage src={`${IMG_PATH}trade-confirm${IMG_EXT}`} maxWidth="60%" caption="Confirmation"/>
          <P text="Confirming sends a notification ping to the seller."/>
          <DocImage src={`${IMG_PATH}trade-requested${IMG_EXT}`} maxWidth="70%" caption="Trade request sent"/>
          <P text="You can then discuss the trade details in the thread."/>
          <P text="The seller can use the invite command provided in the request message."/>
        </>),
      }, {
        id: "trade-how-create", title: "(2) Creating a Trade Post", desc: "", foot: (<>
          <p className={htags.pTag}> Type <strong>/trade</strong> in the chat to search for the command. </p>
          <DocImage src={`${IMG_PATH}trade-cmd1${IMG_EXT}`} maxWidth="50%" caption="Searching for command"/>
          <p className={htags.pTag}>Input fields:</p>
          <ul className={htags.ulTag}>
            <li><span className={htags.graveTag}>trade_type</span>: Sell or Buy.</li>
            <li><span className={htags.graveTag}>item_name</span>: Name of the item (Searchable from Warframe Market
              database)
            </li>
            <li>
              <span className={htags.graveTag}>item_rank</span>: [Optional] Rank of the item (for Mods/Arcanes).
            </li>
            <li><span className={htags.graveTag}>price</span>: [Optional] Price per unit.</li>
            <ul className={htags.ulTag}>
              <li> If left empty, it automatically sets a reasonable price based on the lowest Market listing.</li>
            </ul>
            <li><span className={htags.graveTag}>quantity</span>: [Optional] Number of items. (Default: 1)</li>
          </ul>
          <P
            text="The built-in auto-pricing feature helps you list items quickly without checking the market manually."/>
          <DocImage src={`${IMG_PATH}trade-cmd${IMG_EXT}`} maxWidth="80%" caption="Input fields"/>
          <DocImage src={`${IMG_PATH}trade-input-ing${IMG_EXT}`} maxWidth="90%" caption="Entering data"/>
          <P text='Press Enter to create the listing.'/>
          <DocImage src={`${IMG_PATH}trade-created1${IMG_EXT}`} maxWidth="90%" caption="Listing created"/>
          <NOTE color='yellow' icon='info' title='Price set to 0 Platinum?'
                text='This happens if no players are currently online selling that item. Please use the Edit Price button to set it manually.'/>
          <P/>
          <p className={htags.pTag}>Click the blue link or go to the trade channel to view your post.</p>
        </>),
      }, {
        id: "trade-edit", title: "(3) Managing Trade Posts", desc: "Features available on the trade post.", foot: (<>
          <P text='A trade post looks like this:'/>
          <DocImage src={`${IMG_PATH}trade-created${IMG_EXT}`} maxWidth="80%" caption="Trade post example"/>
          <P text='Button descriptions:'/>
          <ul className={htags.ulTag}>
            <li><strong>Trade</strong>: Sends a trade request to the owner.</li>
            <li><strong>Edit Qty*</strong>: Change the quantity.</li>
            <li><strong>Edit Price*</strong>: Change the price.</li>
            <li><strong>Edit Nick*</strong>: Update your in-game nickname.</li>
            <li><strong>Close*</strong>: Archive/Close the trade listing.</li>
          </ul>
          <P text='(* marked buttons are for the owner only)'/>
        </>),
      }, {
        id: "trade-edit-qty", title: "(3-1) Edit Quantity", desc: "Change the number of items.", foot: (<>
          <p className={htags.pTag}> Click <strong>Edit Qty</strong> to open the modal. </p>
          <DocImage src={`${IMG_PATH}trade-mod-num${IMG_EXT}`} caption="Quantity modal"/>
          <p className={htags.pTag}> Enter the new quantity and click <strong>Submit</strong>. </p>
          <P text='Non-numeric values will default to 1.'/>
        </>),
      }, {
        id: "trade-edit-price", title: "(3-2) Edit Price", desc: "Change the price.", foot: (<>
          <p className={htags.pTag}>Click <strong>Edit Price</strong> to open the modal.</p>
          <DocImage src={`${IMG_PATH}trade-mod-price${IMG_EXT}`} caption="Price modal"/>
          <p className={htags.pTag}>Enter the new price and click <strong>Submit</strong>.</p>
        </>),
      }, {
        id: "trade-edit-rank", title: "(3-3) Edit Rank", desc: "Change the item rank.", foot: (<>
          <p className={htags.pTag}>Click <strong>Edit Rank</strong> to open the modal.</p>
          <DocImage src={`${IMG_PATH}trade-mod-rank${IMG_EXT}`} caption="Rank modal"/>
          <p className={htags.pTag}>Enter the rank and click <strong>Submit</strong>.</p>
        </>),
      }, {
        id: "trade-exit", title: "(3-4) Close Trade", desc: "Mark the trade as complete/closed.", foot: (<>
          <P text='(Owner only)'/>
          <p className={htags.pTag}>Clicking <strong>Close</strong> will ask for confirmation.</p>
          <DocImage src={`${IMG_PATH}trade-confirm-close${IMG_EXT}`} caption="Confirmation"/>
          <p className={htags.pTag}>
            Clicking <strong>Yes (Close)</strong> will archive the post. <br/> (It is not fully deleted from the channel
            history.)
          </p>
          <DocImage src={`${IMG_PATH}trade-deleted${IMG_EXT}`} caption="Closed trade"/>
          <NOTE color="orange" icon="alert" title="Note"
                text="Once closed, buttons are disabled and the post cannot be reactivated."/>
        </>),
      },],
  },
  troubleshooting: {
    id: "faq", title: "FAQ / Troubleshooting", list: [// Interaction failed
      {
        q: `"This command is deprecated... try again later."`, a: (<>
          <ul className={`${htags.ulTag} ${tw.txt.dim}`}>
            <li>On Desktop/Web: Press <strong>Ctrl + R</strong> (or <strong>Cmd + R</strong> on macOS) to reload
              Discord.
            </li>
            <li>On Mobile: Completely close and restart the Discord app.</li>
          </ul>
        </>),
      }, // Application did not respond
      {
        q: (<>
          <span>If you encounter the following issues:</span>
          <ul className={`${htags.ulTag} pt-3`}>
            <li>"The application did not respond"</li>
            <li>"Interaction failed"</li>
            <li>Bot is stuck "Thinking..." for over a minute</li>
          </ul>
        </>), a: (<>
          <ul className={`${htags.olTag} ${tw.txt.dim}`}>
            <li>Check if <strong>{COMMON.nameEn}</strong> is <strong>Online</strong>.</li>
            <ul className={`${htags.ulTag} ${tw.txt.dim}`}>
              <li>If the status says <strong>"Maintenance"</strong> with a Do Not Disturb icon, please wait until
                maintenance is over.
              </li>
              <li>If the bot is Offline, please <ContactMe/></li>
            </ul>
            <li>Try reloading Discord as mentioned above.</li>
            <li>If the issue persists, it may be an unexpected server error.<br/><ContactMe/></li>
          </ul>
        </>),
      }, {
        q: "Can I add this bot to my personal server?", a: (<>
          This bot is a feature exclusively available on the '{process.env.REACT_APP_SERVER_NAME}' server and cannot be
          used on other servers.
        </>),
      }, {
        q: "Have other questions?", a: <ContactMe/>,
      },],
  },

  // 7. Terms of Service
  terms: {
    id: "tos", title: "Terms of Service", desc: (<>
      <H2 text="Purpose"/>
      <p>These Terms of Service ("Terms") govern the relationship between {COMMON.company} ("Operator"), the provider of
        the {COMMON.nameEn} service ("Service"), and the user.
      </p>
      <P text="By adding this bot to a server or using its features, you agree to these Terms."/>
      <H2 text="Effect and Changes"/>
      <ul className={htags.ulTag}>
        <li>These Terms apply to all users of the Service.</li>
        <li>The Operator may amend these Terms within the scope of applicable laws.</li>
        <li>Changes will be notified via Bot Announcements or the Support Server.</li>
        <li>Continued use of the Service after changes constitutes acceptance of the new Terms.</li>
      </ul>
      <H2 text="Service Provision"/>
      <ul className={htags.ulTag}>
        <li>The Operator provides various convenience features within the Discord platform.</li>
        <li>The Service may be modified or suspended due to maintenance, Discord API policy changes, or force majeure.
        </li>
        <li>The Operator is not liable for damages arising from service changes or suspension.</li>
      </ul>
      <H2 text="User Obligations"/>
      <ul className={htags.ulTag}>
        <li>Users must comply with Discord's Terms of Service and Community Guidelines.</li>
        <li>Users must use the Service for legal purposes only. The following are prohibited:</li>
        <ul className={htags.ulTag}>
          <li>Spamming, advertising, or harassment using the bot.</li>
          <li>Accessing the Service outside of its intended scope.</li>
          <li>Commercial use without prior permission.</li>
          <li>Illegal activities.</li>
          <li>Exploiting bugs or vulnerabilities.</li>
        </ul>
        <li>Users must report bugs immediately and not exploit them.</li>
        <li>Violation of these obligations may result in a ban from the Service.</li>
      </ul>
      <H2 text="Privacy"/>
      <P text="We collect data to provide better service."/>
      <P text="Collected info is not used for other purposes or shared with third parties unless required by law."/>
      <p className={htags.pTag}> For details, please refer to the <strong>Privacy Policy</strong>. <br/>
        Check the sidebar for the full Privacy Policy text.
      </p>
      <H2 text="Limitation of Liability"/>
      <ul className={htags.ulTag}>
        <li>The Operator is not liable for service interruptions due to force majeure, game server maintenance, or
          Discord platform issues.
        </li>
        <li>The Operator is not liable for data loss caused by user negligence.</li>
        <li>The Operator is not liable for disputes between users.</li>
        <li>The Trading features are tools for convenience. The actual transaction is the responsibility of the users.
        </li>
        <ul className={htags.ulTag}>
          <li>Users bear full responsibility for trades made through the Service.</li>
          <li>The Operator is not responsible for scams, in-game losses, or financial damages unless caused by
            intentional misconduct or gross negligence of the Operator.
          </li>
          <li>The Operator is not liable for account penalties (bans) resulting from violations of the game's EULA.</li>
        </ul>
      </ul>
      <H2 text="Copyright"/>
      <P text="See the 'Legal & Copyright' section for details."/>
      <H2 text="Links"/>
      <P
        text="The Service may contain links to third-party websites. The Operator does not control these sites and is not responsible for their content."/>
      <H2 text="Age Requirement"/>
      <P
        text="This Service is intended for users 13 years of age or older. Users under 13 are not permitted to use the Service."/>

      <H2 text="Governing Law"/>
      <P
        text="These Terms are governed by the laws of the Republic of Korea. Any disputes shall be subject to the jurisdiction of the competent courts under the Civil Procedure Act."/>
      <H2 text="Addendum"/>
      <P text="These Terms may be updated according to changes in laws or policies."/>
      <ul className={htags.ulTag}>
        <li>Announcement Date: Dec 4, 2025</li>
        <li>Effective Date: Dec 10, 2025</li>
        <li>Last Revised: Dec 24, 2025</li>
      </ul>
    </>),
  },

  // 8. Privacy Policy
  privacy: {
    id: "privacy", title: "Privacy Policy", desc: (<>
      <p>
        {COMMON.company} ("Operator"), operating the {COMMON.nameEn} ("Service"), values your privacy and is committed
        to
        protecting your personal information.
      </p>
      <P text="By using the bot, you agree to this Privacy Policy."/>

      <H2 text="Items Collected"/>
      <P text="We collect the following info to provide services and solve issues:"/>
      <ul className={htags.ulTag}>
        <li><strong>User Identification</strong>: Discord User ID, Nickname</li>
        <li><strong>Environment Info</strong>: Server (Guild) Name/ID, Channel Name/ID where commands are used.</li>
        <li><strong>Usage Logs</strong>: Used commands, data entered via Modals, error logs.</li>
      </ul>

      <H2 text="Collection Method"/>
      <P text="Automatically collected during bot usage."/>

      <H2 text="Purpose of Collection"/>
      <ol className={htags.olTag}>
        <li><strong>Service Provision</strong>: Core features and user identification.</li>
        <li><strong>Support & Debugging</strong>: Tracking bugs and responding to inquiries.</li>
        <li><strong>Improvement</strong>: Analyzing usage statistics to improve features.</li>
        <li><strong>Security</strong>: Identifying banned users.</li>
      </ol>

      <H2 text="Retention Period"/>
      <P
        text="Personal information is destroyed immediately once the purpose is achieved, with the following exceptions:"/>
      <ul className={htags.ulTag}>
        <li><strong>Items</strong>: Usage logs and records.</li>
        <li><strong>Period</strong>: Up to 1 year.</li>
        <li><strong>Reason</strong>: Statistics for improvement and prevention of abuse.</li>
        <li><strong>Service Termination</strong>: All data is destroyed upon the termination of the Service.</li>
      </ul>
      <P text="Information on banned users may be retained until the Service ends."/>

      <H2 text="Destruction Method"/>
      <ul className={htags.ulTag}>
        <li><strong>Procedure</strong>: Data is safely destroyed after the retention period.</li>
        <li><strong>Method</strong>: Permanent deletion using technical methods that make recovery impossible.</li>
      </ul>

      <H2 text="Third-Party Provision"/>
      <P
        text="We do not provide personal info to third parties, except when required by law or investigative agencies."/>

      <H2 text="User Rights"/>
      <P text="Users may request to view or delete their personal information at any time."/>
      <ul className={htags.ulTag}>
        <li><strong>How to Request</strong>: Contact via email or the Support Server.</li>
        <li><strong>Scope</strong>: Access, correction, deletion, or suspension of processing.</li>
      </ul>

      <H2 text="Security Measures"/>
      <ol className={htags.ulTag}>
        <li><strong>Administrative</strong>: Access is limited to the Operator.</li>
        <li><strong>Technical</strong>: Data encryption, encrypted communication, and regular security updates.</li>
      </ol>

      <H2 text="Contact Info"/>
      <P text="For privacy-related inquiries:"/>
      <ul className={htags.ulTag}>
        <li>Responsible: {COMMON.company}</li>
        <li>Email: <A href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}
                      text={process.env.REACT_APP_CONTACT_EMAIL}/>
        </li>
        {/*<li><A href={process.env.REACT_APP_SUPPORT_SERVER} text={`${COMMON.nameEn} Discord Support Server`}/></li>*/}
      </ul>

      <H2 text="Changes to Policy"/>
      <P
        text="This policy may be updated. Changes will be notified 7 days in advance via Bot Announcements."/>
      <ul className={htags.ulTag}>
        <li>Announcement Date: Dec 4, 2025</li>
        <li>Effective Date: Dec 10, 2025</li>
        <li>Last Revised: Dec 24, 2025</li>
      </ul>
    </>),
  },

  // 9. Legal & Copyright
  legal: {
    id: "legal", title: "Legal & Copyright", desc: (<>
      <H3 text="Operator Rights"/>
      <p>The copyright for the source code, database structure, and website design of {COMMON.nameEn} belongs to the
        developer, {COMMON.company}.
      </p>
      <p>Users may not copy, modify, or distribute the code without written permission.
        (Open-source components follow their respective licenses.)
      </p>
      <H3 text="Third-Party Content"/>
      <p>All intellectual property rights regarding <strong>Warframe</strong> (art, logos, text, data) belong
        to <strong>Digital Extremes Ltd.</strong>
      </p>
      <p><strong>Warframe©</strong> is a registered trademark of Digital Extremes Ltd.
        Images and content used in this service are for informational purposes only, with no intent to infringe on
        copyright.
      </p>

      <H3 text="Unofficial Fan Project Notice"/>
      <p>This service is an <strong>Unofficial</strong> project created by a fan.
        <strong>'{COMMON.nameEn}'</strong> is not affiliated with, endorsed, sponsored, or approved by Digital Extremes
        Ltd.
        Information provided may differ from the actual game due to updates.
      </p>
    </>),
  },
  contact: {
    id: "contact", title: "Need Help?", foot: (<>
      <ul className={htags.ulTag}>
        <li>If the FAQ didn't solve your problem</li>
        <li>Reporting abusive users</li>
        <li>Bug reports</li>
        <li>Suggestions & Feedback</li>
      </ul>

      <H3 text="How to Contact"/>
      <P text="Please contact us via:"/>
      <ul className={htags.ulTag}>
        <li>
          <A href={process.env.REACT_APP_SUPPORT_SERVER} text="Discord Support Server"/> <br/>
          <span className={tw.txt.dark}>(Click the blue text to join the server.)</span>
        </li>
        <li>Email: <A href={`mailto:${process.env.REACT_APP_CONTACT_EMAIL}`}
                      text={process.env.REACT_APP_CONTACT_EMAIL}/>
          <br/>
          <span className={tw.txt.dark}>(Click the blue text to send email.)</span>
        </li>
      </ul>
      <P text="Feedback is Always Welcome!"/>
      <NOTE color='orange' icon='alert' title="We do not accept inquiries via private DM."
            text={<>
              Direct Messages (DM) may be missed or delayed.<br/>
              For quick and accurate responses, please use the contact methods listed above for all inquiries and bug
              reports.
            </>}/>
      <NOTE color="red" icon="alert" title="About Reporting Users" text={<>
        <strong>User reports</strong> require <strong>specific evidence</strong>.<br/>
        Without proof (e.g., screenshots), we may not be able to take action.
      </>}
      />
    </>),
  },
};