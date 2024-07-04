import {
  // javascript,
  // typescript,
  // html,
  // css,
  // reactjs,
  // redux,
  // tailwind,
  // nodejs,
  // mongodb,
  // git,
  // figma,
  // docker,
  conexant,
  microsoft,
  snapdragon,
  // threejs,

} from "./assets";

// const technologies = [
//   "HTML 5", icon: html,},
//   "CSS 3", icon: css, },
//   "JavaScript", icon: javascript, },
//   "TypeScript", icon: typescript, },
//   "React JS", icon: reactjs, },
//   "Redux Toolkit", icon: redux, },
//   "Tailwind CSS", icon: tailwind, },
//   "Node JS", icon: nodejs, },
//   "MongoDB", icon: mongodb, },
//   "Three JS", icon: threejs, },
//   "git", icon: git, },
//   "figma", icon: figma, },
//   "docker", icon: docker, },
// ];

const experiences = [
  {
    title: "Technical Director, Secure Systems",
    company_name: "Qualcomm",
    icon: snapdragon,
    iconBg: "#112",
    date: "Oct 2017 - Dec 2023",
    points: [
      "Managed overall software delivery for Trustzone and the trusted execution environment on Qualcomm's Snapdragon processors.",
    ],
    detailed_points: [
      "Led a global team of 30+ engineers responsible for end-to-end delivery of Qualcomm's TrustZone software. The team was highly execution focused, and process optimization and robustness were key to success through scalability.",
      "Launched 20+ Snapdragon processors on Android, Windows, iOS, Embedded Linux, and Chrome OS.",
      "Reviewed and contributed to initiatives to convert critical code, including secure boot and the trusted-application framework, from C to Rust, reducing code size by 50% and increasing performance by 10%. Memory related defects (accounting for 80% of total, historically) were reduced to 0.",
      "Re-designed the continuous integration and delivery processes for Qualcomm's Trusted Execution Environment (QTEE). Increased code throughput and decreased latencies by 5x and reduced developer build times by 75%.",
      "Developed auditing and tracking infrastructure for static analysis reducing 'release impacting' events by >90%",
    ],
    languages: [
      "rust",
      "c++",
      "c",
      "lua",
      "python",
      "arm-asm",
    ],
  },
  {
    title: "Principal Engineer, Web Technologies",
    company_name: "Qualcomm",
    icon: snapdragon,
    iconBg: "#112",
    date: "May 2011 - Oct 2017",
    points: [
      "Developed the Chromium-based Snapdragon Web Engine (SWE) for mobile devices.",
      "Maintained the open-source 'Chromium for Snapdragon Web Engine (SWE)' project.",
      "Committer for WebKit open-source project.",
    ],
    detailed_points: [
      "Contributed >40 patches as a Committer for the WebKit open-source project (used by Chrome and Safari), including performance enhancements, tests, and bug fixes, to generate goodwill with open-source community.",
      "Worked with cross-organizational team to create process allowing contribution to open-source projects while reducing identified intellectual-property (IP) risk to near 0.",
      "Internal open-source reviewer, removing external review gates, lowering contribution latencies by 5-10x.",
      "Enabled key market requirements, specific to China, to the Android browser, resolving a feature gap required to launch Qualcomm’s Snapdragon devices in China. Resulting revenue upside was $50M+, near term. Alternate solutions, including outsourcing, all failed to meet the launch date (fiscal quarter) required.",
      "Designed and implemented the Sentinel system to automate monitoring and trigger cherry-picking security patches and CVEs to active release branches. This decreased critical response times from weeks to <24 hours.",
      "Increased existing unit test coverage by more than 50%.",
      "Quantified the impact of HW design decisions affecting key web benchmarks and typical use cases. Proposed hardware changes in cache sizes and instruction pipelining. The next processor performed >35% for those benchmarks.",
    ],
    languages: [
      "c++",
      "c",
      "lua",
      "python",
      "javascript",
    ],
  },
  {
    title: "Technical Lead, BREW",
    company_name: "Qualcomm",
    icon: snapdragon,
    iconBg: "#112",
    date: "Feb 2008 - May 2011",
    points: [
      "Technical lead for Display,",
      "... and Graphics,",
      "... and Image Decoders,",
      "... and the testing framework.",
    ],
    detailed_points: [
      "TBD"
    ],
    languages: [
      "c",
      "arm-asm",
    ],
  },
  {
    title: "Principal Engineer, Infotainment",
    company_name: "Conexant",
    icon: conexant,
    iconBg: "#112",   // "#383E56"
    date: "Dec 1996 - Oct 2004",
    points: [
      "Led team that developed and maintained drivers for broadcast TV capture cards",
      "Analog terrestrial (NTSC, PAL, NTSC-J)",
      "Digital terrestrial (ATSC)",
      "Digital satelite (DVB-S)",
    ],
    detailed_points: [
      "Directed software development for broadcast video and audio decoders, video encoders, and satellite products.",
      "Co-designed and implemented WDM Stream Class capture drivers for the Brooktree BT848, Rockwell Fusion 878, and Conexant CX23880 PCI DMA television video and audio capture chips.",
      "Co-designed and implemented an AVStream class driver for the Falcon CX23416 MPEG encoder TV capture system.",
      "Worked with Microsoft to find and fix bugs in the WDM Stream Class and AVStream Class.",
      "Designed and implemented DSP software signal recognition system to detect audio carriers and control signals for differentiation of mono, stereo, and dual language broadcasts for BTSC, EIAJ, and A2 (Zweiton).",
      "Provided input into IC design process for broadcast audio and video decoders based on experience with previous designs.",
      "Worked with team to identify and document a software process consistent with CMM level 3.",
      "Worked as technical lead on numerous projects involving developing software models, building system prototypes, bring- alive of new semiconductors (ICs), bring-alive of new boards, and developing production software systems.",
      "Virtually all projects involved certification through external organizations including Microsoft Windows Hardware Quality Labs (WHQL), CableLabs, Dolby, and Macrovision, and involved acceptance testing by an OEM such as HP, Sony, NEC, Dell, or Intel.",
      "Earned and maintained ISO 9001-2000 certification.",
    ],
    languages: [
      "c++",
      "c",
      "c#",
    ],
  },
  {
    title: "Windows NT Development Team",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#000",   // "#383E56"
    date: "Jun 1992 - Dec 1996",
    points: [
      "Developed and maintained essential display drivers",
      "Contributed to the GDI (rendering) engine",
      "Extensive performance analysis and tuning.",
    ],
    detailed_points: [
      "Software developer on all versions of Windows NT from Windows NT 3.1 through Windows 2000.",
      "Implemented GDI support for multiple monitors and remote displays.",
      "Developed and owned several of the shipped display drivers (Cirrus Logic, Matrox, Weitek, and Tseng Labs).",
      "Supported and maintained additional display drivers.",
      "Implemented initial DirectDraw support for many of the Windows NT display drivers.",
      "Ported user-mode display drivers to kernel-mode to improve performance.",
      "Sped up the already optimized VGA driver assembly code by 4x.",
      "Maintained and enhanced the Win32 API Profiler.",
    ],
    languages: [
      "c++",
      "c",
      "x86-asm",
      "mips-asm",
      "alpha-asm",
      "powerpc-asm",
    ],

  },
];

export { experiences };
