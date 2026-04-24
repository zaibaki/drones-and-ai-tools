export type Side = "ukraine" | "russia-iran" | "both";
export type DroneCategory = "loitering-munition" | "fpv" | "tactical-uav" | "strategic-uav" | "heavy-attack";

export interface Component {
  name: string;
  origin: string;
  function: string;
  notable?: string;
}

export interface Drone {
  id: string;
  name: string;
  alias: string;
  side: Side;
  category: DroneCategory;
  origin: string;
  operator: string;
  introduced: string;
  cost: string;
  weight: string;
  wingspan: string;
  length: string;
  speed: string;
  range: string;
  ceiling: string;
  payload: string;
  endurance: string;
  guidance: string;
  aiCapabilities: string[];
  components: Component[];
  tacticalRole: string;
  innovations: string[];
  limitations: string[];
  conflictUsage: string;
  imageSrc: string;
  imageCredit: string;
  color: string;
}

export interface AITool {
  id: string;
  name: string;
  developer: string;
  side: Side;
  type: string;
  deployedSince: string;
  cost: string;
  capability: string;
  keyFeatures: string[];
  technicalStack: string[];
  impact: string;
  limitations: string[];
  color: string;
}

export const drones: Drone[] = [
  {
    id: "shahed-136",
    name: "Shahed-136",
    alias: "Geranium-2 (Russian designation)",
    side: "russia-iran",
    category: "loitering-munition",
    origin: "Iran (HESA / Shahed Aviation Industries)",
    operator: "Russia, Iran, Houthis (Yemen)",
    introduced: "2021 (combat use from 2022)",
    cost: "$20,000–$50,000 per unit",
    weight: "~200 kg",
    wingspan: "2.5 m",
    length: "3.5 m",
    speed: "185 km/h cruise",
    range: "2,000–2,500 km",
    ceiling: "4,000 m",
    payload: "36–45 kg HE warhead",
    endurance: "~10–11 hours",
    guidance: "GPS/GLONASS + Inertial Navigation System (INS)",
    aiCapabilities: [
      "Basic INS dead-reckoning when GPS is jammed",
      "Newer variants (2024+): anti-jamming Nasir module",
      "Nvidia Jetson TX2 AI module found in wreckage (thermal vision)",
      "4G/LTE mid-flight course correction (2024 variants)",
      "Swarm-capable networking in latest batches",
    ],
    components: [
      { name: "MD-550 Piston Engine", origin: "Iran (reverse-engineered German civilian design)", function: "Propulsion — 4-cylinder, 2-stroke pusher prop" },
      { name: "GPS/GLONASS Receiver", origin: "Various (often Chinese/Russian)", function: "Primary navigation" },
      { name: "Inertial Navigation System", origin: "Iranian domestic", function: "Backup navigation under jamming" },
      { name: "Nasir Anti-Jamming Module", origin: "Iran", function: "EW resistance — deployed from late 2023", notable: "Allows navigation even when GPS signal is fully suppressed" },
      { name: "Nvidia Jetson TX2", origin: "USA (found in 2024 wreckage)", function: "AI processing for terminal guidance and target lock", notable: "Repurposed commercial AI module; subject of export-control investigations" },
      { name: "Thermal Vision Module", origin: "Unknown (found 2025)", function: "Night targeting — locks on heat signatures", notable: "Interconnected with other drones for shared sensor data" },
      { name: "Delta-Wing Airframe", origin: "Iran", function: "Low radar cross-section, slow glide profile" },
    ],
    tacticalRole: "Saturation strike against fixed infrastructure — power grids, substations, airfields, and civilian energy systems. Designed for mass production and volume employment rather than precision.",
    innovations: [
      "Cheapest long-range attack drone at scale ($20–50K vs $1M+ cruise missiles)",
      "Russia launched 4,000+ per month by late 2024",
      "Thermal-networked swarms sharing target data between units",
      "Turbojet variant (136B) extends range to 4,000 km",
      "Forced expensive Western interceptors ($2–4M each) against $20K drones",
    ],
    limitations: [
      "Subsonic and audible from several km — easy to track acoustically",
      "Low payload compared to cruise missiles",
      "Early variants GPS-jammable; dependent on GNSS",
      "High radar cross-section compared to stealth designs",
    ],
    conflictUsage: "Russia launched over 4,000 Shaheds per month by late 2024. Used in coordinated mass waves to overwhelm Ukrainian air defenses, targeting electrical infrastructure across the country. Iran also supplied to Houthi forces for Red Sea shipping attacks.",
    imageSrc: "/images/shahed136.jpg",
    imageCredit: "Wikimedia Commons / Ukrainian Armed Forces (CC BY 4.0)",
    color: "red",
  },
  {
    id: "lancet-3",
    name: "ZALA Lancet-3",
    alias: "Product 52",
    side: "russia-iran",
    category: "loitering-munition",
    origin: "Russia (ZALA Aero Group / Kalashnikov Concern)",
    operator: "Russian Armed Forces",
    introduced: "2019 (combat use from 2022)",
    cost: "~$35,000–$40,000 per unit",
    weight: "12 kg",
    wingspan: "1.6 m",
    length: "1.0 m",
    speed: "80–110 km/h cruise; up to 300 km/h terminal dive",
    range: "40 km",
    ceiling: "5,000 m",
    payload: "3 kg shaped-charge warhead (HE / fragmentation)",
    endurance: "~40 minutes",
    guidance: "Electro-optical + TV + AI autonomous target tracking",
    aiCapabilities: [
      "Nvidia Jetson TX2 — autonomous object detection and tracking",
      "AI can classify and prioritize target types (armor, artillery, radar)",
      "Autonomous terminal guidance — no operator link in final approach",
      "Pattern-of-life analysis to engage moving targets",
      "Experimental: loiter, identify, and queue for swarm attack",
    ],
    components: [
      { name: "Nvidia Jetson TX2 Module", origin: "USA (found in captured units)", function: "AI inference engine — runs target classification and tracking neural networks", notable: "Core of autonomous targeting; subject of US-Russia sanctions investigations" },
      { name: "Electro-Optical Camera (EO)", origin: "Russia / dual-use components", function: "Daytime visual target acquisition" },
      { name: "TV Guidance Unit", origin: "Russia", function: "Operator-in-loop terminal guidance fallback" },
      { name: "Electric Pusher Motor", origin: "Russia", function: "Low-acoustic signature propulsion" },
      { name: "X-shaped Airframe", origin: "Russia", function: "Compact folding design for field launch from tripod" },
      { name: "Western Electronics (82% by value)", origin: "USA, EU (found via OSINT forensics)", function: "Microcontrollers, voltage regulators, sensors — sourced via third-country intermediaries" },
    ],
    tacticalRole: "Precision loitering strike against high-value Ukrainian military assets — specifically artillery, air-defense radars, armored vehicles, and command posts. Designed for accuracy rather than saturation.",
    innovations: [
      "80% strike success rate — highest of any munition in this conflict",
      "Fully autonomous terminal phase with no RF emissions (unjammable)",
      "AI can be pre-programmed with target class priorities",
      "Compact 12 kg form factor — man-portable field launch",
      "New 2025 variant adds EW-resistant navigation and encrypted datalink",
    ],
    limitations: [
      "Short range (40 km) — requires forward launch positions",
      "Small warhead (3 kg) — limited against hardened targets",
      "Requires visual contrast for EO targeting in adverse weather",
      "Commercial AI chip supply chain vulnerable to sanctions",
    ],
    conflictUsage: "Over 2,000 Lancet strikes recorded by July 2024. Destroyed at least 698 confirmed targets with ~80% strike success rate. Primary targets: Buk/S-300 air defense systems, Gepard SPAAGs, M777 howitzers, Caesar SPGs.",
    imageSrc: "/images/lancet.jpg",
    imageCredit: "Wikimedia Commons (CC BY-SA 4.0)",
    color: "red",
  },
  {
    id: "bayraktar-tb2",
    name: "Bayraktar TB2",
    alias: "TB2",
    side: "ukraine",
    category: "tactical-uav",
    origin: "Turkey (Baykar Makina)",
    operator: "Ukraine, Turkey, Azerbaijan, Poland, 30+ nations",
    introduced: "2014 (combat use 2016; Ukraine from 2019)",
    cost: "~$5 million per unit",
    weight: "650 kg MTOW",
    wingspan: "12 m",
    length: "6.5 m",
    speed: "130 km/h cruise; 220 km/h max",
    range: "150 km operational radius",
    ceiling: "7,620 m (25,000 ft)",
    payload: "4× MAM-L smart micro-munitions (80 kg total)",
    endurance: "27 hours",
    guidance: "Electro-optical / Infrared (FLIR) + laser designator + GPS",
    aiCapabilities: [
      "Autonomous takeoff and landing (ATOL)",
      "Pre-programmed waypoint navigation",
      "AI-assisted target tracking with operator override",
      "Redundant triple-redundant flight control computers",
      "Moving target indication via EO/IR sensor fusion",
    ],
    components: [
      { name: "Rotax 912iS Engine", origin: "Austria", function: "100 hp fuel-injected piston engine — core propulsion" },
      { name: "Aselsan CATS EO/IR Turret", origin: "Turkey", function: "Stabilized camera, FLIR, laser rangefinder/designator" },
      { name: "MAM-L / MAM-C Smart Munitions", origin: "Turkey (Roketsan)", function: "Laser + INS guided micro-bombs — precision strike" },
      { name: "Baykar Triple-Redundant FCS", origin: "Turkey", function: "Flight control computers with hardware redundancy" },
      { name: "Wescam MX-15D", origin: "Canada (early variants)", function: "EO/IR sensor ball — later replaced by domestic Aselsan CATS" },
      { name: "KALE-HAVLAN Fuel System", origin: "Turkey", function: "Long-endurance fuel management" },
    ],
    tacticalRole: "Multi-role ISR and precision strike platform. Used for reconnaissance, artillery spotting, infrastructure strikes, and anti-armor operations. Operates at medium altitude beyond MANPAD range.",
    innovations: [
      "Proved affordable armed drones could defeat armored columns (Nagorno-Karabakh 2020)",
      "First drone to use a rotating loitering pattern for persistent surveillance",
      "Enabled Ukrainian Navy to coordinate sea-drone and air strikes",
      "Became an iconic symbol of asymmetric drone warfare",
      "Domestically Turkish — 93% domestic component ratio by 2022",
    ],
    limitations: [
      "Vulnerable to modern integrated air defense (lost many to Russian SAMs in 2022)",
      "Subsonic and relatively large radar cross-section",
      "Relegated to Black Sea reconnaissance by 2023 due to Russian AD threat",
      "Limited all-weather capability versus stealth drones",
    ],
    conflictUsage: "Devastated Russian armored columns in early 2022 (Kyiv offensive). Sank or disabled multiple Russian Black Sea Fleet vessels and supply trucks. After Russian AD adapted, shifted to ISR role over Black Sea. Over 36 units lost to Russian systems by 2023.",
    imageSrc: "/images/tb2.jpg",
    imageCredit: "Ukrainian Armed Forces / Wikimedia Commons (CC BY 4.0)",
    color: "blue",
  },
  {
    id: "fpv-ukraine",
    name: "Ukrainian FPV Drone",
    alias: "Mavic Bomber / Custom FPV",
    side: "ukraine",
    category: "fpv",
    origin: "Ukraine (200+ domestic manufacturers)",
    operator: "Ukrainian Armed Forces, volunteer units, territorial defense",
    introduced: "2022 (mass deployment from 2023)",
    cost: "$200–$500 per unit",
    weight: "0.5–2 kg",
    wingspan: "0.3–0.5 m (quad frame)",
    length: "0.3 m",
    speed: "Up to 160 km/h in FPV racing config",
    range: "3–10 km (video link dependent)",
    ceiling: "500 m typical",
    payload: "0.5–1.5 kg (RPG warhead, RKG-3 grenade, custom shaped charge)",
    endurance: "8–15 minutes",
    guidance: "FPV video link + AI-assisted terminal lock (The Fourth Law module)",
    aiCapabilities: [
      "The Fourth Law AI module ($70) — boosts hit rate from 20% to 80%",
      "AI terminal lock: operator designates target, AI guides final approach",
      "Works inside EW jamming zones — autonomous after designation",
      "Computer vision distinguishes vehicle types and tracks movement",
      "Swarmer platform: AI coordinates up to 25 FPV drones from single operator",
    ],
    components: [
      { name: "Custom Carbon/3D-Printed Frame", origin: "Ukraine / China", function: "Lightweight structural base — mass-producible in days" },
      { name: "Brushless Motors (2205–2306)", origin: "China (consumer)", function: "High-speed propulsion — adapted from racing drones" },
      { name: "DJI FPV Video Transmitter", origin: "China", function: "Low-latency FPV video link for operator view" },
      { name: "The Fourth Law AI Module", origin: "Ukraine", function: "Terminal AI guidance — locks target autonomously under jamming", notable: "$70 module boosting kill rate 4× — one of the most cost-effective AI weapons ever built" },
      { name: "RPG-7 / RKG-3 Warhead", origin: "Soviet-era / Ukrainian domestic", function: "Shaped-charge anti-armor warhead" },
      { name: "ArduPilot / Betaflight FC", origin: "Open source", function: "Flight control — open-source autopilot firmware" },
      { name: "LiPo Battery Pack", origin: "China (consumer)", function: "Power — 4S–6S lithium polymer" },
    ],
    tacticalRole: "Anti-personnel, anti-armor, trench clearing, vehicle destruction at close range. Complements artillery by killing targets in covered positions. Used in swarms for reconnaissance and coordinated strike.",
    innovations: [
      "Ukraine producing 200,000 FPV drones/month by early 2025",
      "$70 AI module (The Fourth Law) achieves 80% strike success vs 20% unguided",
      "Swarmer AI: single operator controls 7–25 drones simultaneously",
      "Open-source ArduPilot adapted for combat in weeks — not years",
      "3D-printed parts enable front-line repair and modification in hours",
    ],
    limitations: [
      "Short range and endurance — requires forward operator",
      "Vulnerable to FPV jamming and electronic countermeasures",
      "Weather-sensitive (wind, rain degrade control link)",
      "Operator still required until terminal phase with AI module",
    ],
    conflictUsage: "Ukraine deploying ~9,000 drones per day by 2025. FPVs account for the majority of frontline drone strikes. Used in every major offensive and defensive operation, including the 2024 Kursk incursion where FPV swarms suppressed Russian armor.",
    imageSrc: "/images/fpv-strike-01.jpg",
    imageCredit: "Ukrainian Ministry of Defense / Wikimedia Commons",
    color: "blue",
  },
  {
    id: "mohajer-6",
    name: "Mohajer-6",
    alias: "IRGC Multi-Mission UAV",
    side: "russia-iran",
    category: "tactical-uav",
    origin: "Iran (Qods Aviation / IRGC)",
    operator: "Iran, Russia (supplied), Ethiopia, Venezuela, Houthis",
    introduced: "2017",
    cost: "Estimated $1–2 million per unit",
    weight: "670 kg MTOW",
    wingspan: "10 m",
    length: "5.7 m",
    speed: "200 km/h max",
    range: "200 km operational radius",
    ceiling: "5,500 m",
    payload: "2× Qaem precision-guided bombs or Almas ATGM",
    endurance: "12 hours",
    guidance: "EO/IR + laser designator + GPS/GLONASS",
    aiCapabilities: [
      "Autonomous takeoff and landing",
      "Pre-programmed multi-waypoint mission execution",
      "EO/IR sensor fusion for target recognition",
      "Satellite datalink for beyond-line-of-sight control",
      "Automatic return-to-base on datalink loss",
    ],
    components: [
      { name: "Rotax 914 Engine", origin: "Austria (or Iranian copy)", function: "115 hp turbocharged piston engine" },
      { name: "Iranian Domestic EO/IR Pod", origin: "Iran (IRGC R&D)", function: "Day/night surveillance and targeting" },
      { name: "Qaem Precision Bomb", origin: "Iran", function: "Laser + INS guided glide bomb — anti-armor/personnel" },
      { name: "Almas ATGM", origin: "Iran", function: "Anti-tank guided missile — copies Israeli Spike design", notable: "Iran reverse-engineered Israeli Spike ATGM into Almas" },
      { name: "IRGC Satellite Datalink", origin: "Iran", function: "BLOS command — extends operational range beyond radio horizon" },
      { name: "Composite Airframe", origin: "Iran", function: "Glass-fiber/carbon composite reducing RCS and weight" },
    ],
    tacticalRole: "Persistent ISR and precision strike — longer-endurance complement to Shahed kamikaze platforms. Reusable multi-mission platform for reconnaissance, targeting, and direct strike against military assets.",
    innovations: [
      "Fully reusable — unlike single-use Shahed family",
      "Reverse-engineered Israeli Spike ATGM (Almas) — notable tech transfer",
      "Deployed across multiple theaters: Ukraine, Syria, Yemen, Ethiopia",
      "BLOS satellite control extends range beyond radio-line-of-sight",
      "12-hour endurance enables persistent area surveillance",
    ],
    limitations: [
      "Large visual and radar cross-section — vulnerable to air defenses",
      "Limited payload versus Turkish/US equivalents",
      "Relies on GPS/GLONASS — susceptible to jamming",
      "Spare parts and maintenance pipeline opaque due to sanctions",
    ],
    conflictUsage: "Supplied to Russia for operations in Ukraine and deployed by Iran in Syria. Used for battlefield ISR and precise strike against military convoys, command posts, and hardened positions. Also deployed by Houthi forces to direct maritime drone attacks in the Red Sea.",
    imageSrc: "/images/mohajer6.jpg",
    imageCredit: "Wikimedia Commons / IRGC (CC BY 4.0)",
    color: "red",
  },
];

export const aiTools: AITool[] = [
  {
    id: "swarmer",
    name: "Swarmer",
    developer: "Ukrainian domestic startup",
    side: "ukraine",
    type: "Autonomous Drone Swarm Coordination Platform",
    deployedSince: "2023",
    cost: "Software license — classified",
    capability: "Enables a single operator to command up to 25 drones simultaneously using AI mission planning and real-time coordination.",
    keyFeatures: [
      "Single-operator control of 7–25 simultaneous drones",
      "AI-generated attack routing — avoids known air defense positions",
      "Target designation by operator, autonomous execution by AI",
      "Real-time swarm de-confliction (prevents drones colliding mid-flight)",
      "Mission planning with terrain-following low-altitude profiles",
      "Works with FPV, Mavic, and custom platform types",
    ],
    technicalStack: [
      "Computer vision for target classification",
      "Mesh networking between drone agents",
      "Encrypted RF / video links",
      "Edge AI inference on drone flight controllers",
      "Cloud mission planning with field-deployable ground station",
    ],
    impact: "Used in over 100 confirmed combat missions. Enables one soldier to do the work of 7–25 drone operators. A single Swarmer mission destroyed an entire Russian artillery battery in one coordinated strike.",
    limitations: [
      "Effective range capped by video/command link distance",
      "Still requires human operator to initiate engagement",
      "Dependent on drone availability and weather",
    ],
    color: "blue",
  },
  {
    id: "palantir-brave1",
    name: "Palantir Brave1 Dataroom",
    developer: "Palantir Technologies + Ukraine MoD",
    side: "ukraine",
    type: "AI Training Platform for Drone Interception",
    deployedSince: "2025",
    cost: "Commercial partnership — classified",
    capability: "A shared AI training infrastructure that lets Ukrainian defense companies train and validate neural networks for interceptor drones using real battlefield data from the war.",
    keyFeatures: [
      "Secure access to real Ukrainian battlefield sensor data (since 2022)",
      "AI model training for target detection, classification, and interception",
      "Shared infrastructure — multiple companies train on same dataset",
      "Models validated against real Shahed and Lancet trajectories",
      "Enables interceptor drones to autonomously neutralize incoming threats",
      "Part of Brave1 — Ukraine's defense tech innovation ecosystem",
    ],
    technicalStack: [
      "Palantir AIP (Artificial Intelligence Platform)",
      "Federated ML training across defense companies",
      "Secure data enclave — classified battlefield sensor feeds",
      "Computer vision model validation pipeline",
      "NATO-compatible secure cloud architecture",
    ],
    impact: "Collapses the sensor-to-shooter loop for air defense. Trains AI models that let interceptor drones lock onto Shaheds autonomously — eliminating the need for human guidance at terminal phase. Expands Ukraine's capacity to defend against 4,000+ monthly Shahed attacks.",
    limitations: [
      "Data quality dependent on sensor coverage at front",
      "Training lag — models need time to adapt to new drone variants",
      "Commercial AI infrastructure in a sovereign defense context raises classification concerns",
    ],
    color: "blue",
  },
  {
    id: "fourth-law",
    name: "The Fourth Law AI Module",
    developer: "The Fourth Law (Ukrainian startup)",
    side: "ukraine",
    type: "Terminal AI Guidance Module for FPV Drones",
    deployedSince: "2023",
    cost: "$70 per unit",
    capability: "A $70 AI chip that attaches to any FPV drone and autonomously guides it to a designated target in the terminal phase — even inside Russian electronic warfare jamming zones where the operator's signal is cut.",
    keyFeatures: [
      "Operator designates target from outside EW jamming zone",
      "AI locks on and guides autonomously through the jamming bubble",
      "Boosts FPV strike success rate from 20% to 80%",
      "Works with any FPV platform — plug-and-play",
      "Computer vision distinguishes vehicle types for targeting accuracy",
      "No RF emissions in terminal phase — cannot be jammed",
    ],
    technicalStack: [
      "Edge AI inference on custom ASIC / embedded processor",
      "Computer vision (object detection + tracking)",
      "Inertial measurement unit (IMU) for autonomous attitude control",
      "Encrypted terminal guidance algorithm",
      "Compatible with standard FPV flight controller hardware",
    ],
    impact: "One of the most cost-effective AI weapons ever deployed. A $70 module quadruples strike effectiveness against Russian armor. Enables Ukraine to penetrate Russian EW bubbles that previously protected armored vehicles from FPV attacks. Thousands deployed by 2024.",
    limitations: [
      "Final approach targeting relies on visual contrast — limited in smoke/dust",
      "Short range — only activates in terminal phase",
      "Countermeasures emerging: smoke screens, active laser dazzlers",
    ],
    color: "blue",
  },
  {
    id: "nvidia-jetson-tx2",
    name: "Nvidia Jetson TX2",
    developer: "Nvidia (USA) — repurposed in Russian/Iranian systems",
    side: "russia-iran",
    type: "Commercial AI Compute Module (weaponized)",
    deployedSince: "Found in Lancet-3 (2022) and Shahed variants (2024)",
    cost: "~$400–$600 per module (commercial)",
    capability: "A commercial embedded AI computer designed for autonomous vehicles and robots — found inside Russian Lancet-3 drones and advanced Shahed variants, powering target recognition and autonomous terminal guidance.",
    keyFeatures: [
      "256-core Pascal GPU for real-time neural network inference",
      "8 GB LPDDR4 memory — runs classification models on-drone",
      "Autonomous object detection and tracking without operator",
      "Thermal camera integration — night targeting capability",
      "Runs on standard edge AI frameworks (TensorRT, ROS)",
      "Enables Lancet to autonomously seek and engage targets",
    ],
    technicalStack: [
      "Nvidia Pascal GPU (256 CUDA cores)",
      "Denver 2 + ARM Cortex-A57 CPU",
      "TensorRT inference engine",
      "Custom ZALA Aero target-classification neural networks",
      "Thermal + EO sensor fusion pipeline",
    ],
    impact: "Transforms commercial AI hardware into autonomous weapon guidance. The Lancet-3's 80% strike rate is directly attributed to Jetson-powered target tracking. The module was found in 82% of examined Russian loitering munitions — all from US/EU-origin companies. Subject of active US export-control enforcement.",
    limitations: [
      "Commercial component — subject to Western sanctions and supply chain disruption",
      "Requires specialized software integration for weapons use",
      "Power-hungry relative to purpose-built mil chips",
      "Increasingly difficult to procure as export controls tighten",
    ],
    color: "red",
  },
  {
    id: "ardupilot",
    name: "ArduPilot",
    developer: "ArduPilot Community (Open Source)",
    side: "both",
    type: "Open-Source Autonomous Flight Control Firmware",
    deployedSince: "2007 (weaponized use from 2022)",
    cost: "$0 (open source)",
    capability: "The world's most widely used open-source autopilot firmware — originally for hobbyist drones, now running on Ukrainian combat drones and even found in components of Russian drone supply chains.",
    keyFeatures: [
      "Full autonomous waypoint navigation",
      "Terrain-following low-altitude profiles for radar evasion",
      "Support for fixed-wing, multi-rotor, VTOL, and boat platforms",
      "Return-to-home, loiter, and autonomous land modes",
      "Used in Ukraine's mass strike on Russian strategic bomber bases",
      "Community-updated — new countermeasure evasion tactics added in days",
    ],
    technicalStack: [
      "C++ flight controller code running on ARM Cortex microcontrollers",
      "Mission Planner / QGroundControl for ground station",
      "MAVLink protocol for ground-to-drone communication",
      "Supports GPS, optical flow, barometric, and compass sensors",
      "Runs on Pixhawk, Cube, and custom hardware",
    ],
    impact: "Powered Ukraine's June 2025 long-range strike that destroyed one-third of Russia's strategic long-range bomber fleet. Open-source nature means any vulnerability fix or new evasion tactic reaches thousands of operators globally within hours. Zero procurement cost vs. proprietary military equivalents.",
    limitations: [
      "Not EW-hardened by default — RF links can be jammed",
      "Open-source means adversaries can also study and counter it",
      "GPS-dependent base behavior — INS fallback limited",
    ],
    color: "blue",
  },
];

export const comparisonData = {
  categories: ["Cost per unit", "Range", "Payload", "AI level", "Production rate", "Strike accuracy", "Survivability", "Countermeasure resistance"],
  systems: [
    {
      name: "Shahed-136",
      side: "russia-iran" as Side,
      scores: {
        "Cost per unit": 9,
        "Range": 9,
        "Payload": 5,
        "AI level": 4,
        "Production rate": 10,
        "Strike accuracy": 4,
        "Survivability": 3,
        "Countermeasure resistance": 4,
      },
    },
    {
      name: "Lancet-3",
      side: "russia-iran" as Side,
      scores: {
        "Cost per unit": 8,
        "Range": 3,
        "Payload": 3,
        "AI level": 9,
        "Production rate": 6,
        "Strike accuracy": 9,
        "Survivability": 5,
        "Countermeasure resistance": 8,
      },
    },
    {
      name: "Bayraktar TB2",
      side: "ukraine" as Side,
      scores: {
        "Cost per unit": 3,
        "Range": 6,
        "Payload": 7,
        "AI level": 6,
        "Production rate": 4,
        "Strike accuracy": 8,
        "Survivability": 4,
        "Countermeasure resistance": 5,
      },
    },
    {
      name: "Ukrainian FPV + AI",
      side: "ukraine" as Side,
      scores: {
        "Cost per unit": 10,
        "Range": 2,
        "Payload": 3,
        "AI level": 7,
        "Production rate": 10,
        "Strike accuracy": 8,
        "Survivability": 2,
        "Countermeasure resistance": 6,
      },
    },
    {
      name: "Mohajer-6",
      side: "russia-iran" as Side,
      scores: {
        "Cost per unit": 5,
        "Range": 7,
        "Payload": 6,
        "AI level": 5,
        "Production rate": 4,
        "Strike accuracy": 7,
        "Survivability": 5,
        "Countermeasure resistance": 4,
      },
    },
  ],
};
