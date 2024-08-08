import {
  conexant,
  microsoft,
  snapdragon,
  ucsd,
  valhalla,
  dod,
} from "../assets";

const experiences = [
  {
    title: "Technical Director, Secure Systems",
    company_name: "Qualcomm",
    icon: snapdragon,
    iconBg: "#112",
    date: "Oct 2017 - Dec 2023",
    summary: "Managed overall software delivery for Qualcomm's Trusted Execution Environment (QTEE).",
    points: [
      "Managed software delivery for our secure systems, including Qualcomm's Trusted Execution Environment (QTEE).",
    ],
    detailed_points: [
      "Led a global team of 30+ engineers responsible for end-to-end delivery of Qualcomm's Trusted Execution Environment (QTEE). The team was highly execution focused, and process optimization and robustness were key to success through scalability.",
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
    summary: "Led Qualcomm's WebCore team providing the browser rendering engine for Snapdragon devices, and contributing to WebKit.",
    points: [
      "Developed the Chromium-based Snapdragon Web Engine (SWE) for mobile devices.",
      "Maintained the open-source 'Chromium for Snapdragon Web Engine (SWE)' project.",
      "Committer for WebKit open-source project.",
    ],
    detailed_points: [
      "Contributed >40 patches as a Committer for the WebKit open-source project (used by Chrome and Safari), including performance enhancements, tests, and bug fixes, to generate goodwill with open-source community.",
      "Worked with cross-organizational team to create process allowing contribution to open-source projects while reducing identified intellectual-property (IP) risk to near 0.",
      "Internal open-source reviewer, removing external review gates, lowering contribution latencies by 5-10x.",
      "Enabled key market requirements, specific to China, to the Android browser, resolving a feature gap required to launch Qualcomm's Snapdragon devices in China. Resulting revenue upside was $50M+, near term. Alternate solutions, including outsourcing, all failed to meet the launch date (fiscal quarter) required.",
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
    title: "Technical Lead, BREW OS",
    company_name: "Qualcomm",
    icon: snapdragon,
    iconBg: "#112",
    date: "Feb 2008 - May 2011",
    summary: "Technical lead for Display, Graphics, Image Decoders, and the test framework.",
    points: [
      "Technical lead for Display,",
      "... and Graphics,",
      "... and Image Decoders,",
      "... and the testing framework.",
    ],
    detailed_points: [
      "Led the Graphics, Display, and Image Decoder teams.",
      "Designed a feature-rich overlay manager for BREW supporting transforms including scaling, clipping, rotation, color-key, and alpha-blending. It was multi-threaded and had full software implementations for all functionality, but also leveraged hardware support wherever available.",
      "Enabled automated documentation generation for 100% of our code.",
      "Led workshops for KDDI's KCP+ 'porting to BREW' analysis and resolved information requests. This secured $20M+ in application processor sales.",
      "Coordinated with the display hardware architecture group to optimize the overall pipeline.",
      "Implemented EGL, OpenGL, and OpenVG support in surface manager which enabled simple porting of hundreds of existing applications from other platforms.",
      "Implemented simulation support for OpenGL ES 2.0, increasing off-target test capability by 50-60%.",
    ],
    languages: [
      "c",
      "arm-asm",
    ],
  },
  {
    title: "Technical Lead, ASIC System Software",
    company_name: "Qualcomm",
    icon: snapdragon,
    iconBg: "#112",
    date: "Oct 2004 - Feb 2008",
    summary: "Led the System Performance and Windows BSP teams",
    points: [
      "System performance lead for MSM6550",
      "Windows Mobile BSP lead",
      "Security champion",
    ],
    detailed_points: [
      "Developed CPU and memory-bus profiling tools leveraging programmable logic analyzers and on-chip telemetry.",
      "Analyzed, tracked and reported on multiple performance characteristics to the executive team.",
      "Co-owned the MSM clock plan.",
      "Identified and characterized bug in the ARM L2 cache controller we were using, which led to ARM HW rev.",
      "Tuned clocks, caches, and bus controllers for performance/power tradeoffs.",
      "Managed builds and releases for the Qualcomm Windows Mobile platform.",
      "Implemented on-chip CPRM support (DRM for SD cards).",
      "Was the 4C entity adopter contact for Qualcomm.",
    ],
    languages: [
      "c",
      "arm-asm",
    ],
  },
  {
    title: "Principal Architect, Infotainment",
    company_name: "Conexant",
    icon: conexant,
    iconBg: "#112",   // "#383E56"
    date: "Dec 1996 - Oct 2004",
    summary: "Led the Digital Infotainment software team, managing capture drivers and tooling for analog terrestrial, digital terrestrial, and digital satelite products.",
    points: [
      "Led team that developed and maintained drivers for broadcast TV capture cards including BT848 and BT878",
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
    title: "Software Engineer, Windows NT GDI",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#000",   // "#383E56"
    date: "Jun 1992 - Dec 1996",
    summary: "Developed and maintained essential display drivers and contributed to the GDI (rendering) engine.",
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
  {
    title: "Bachelor's Degree, Computer Science",
    company_name: "UCSD",
    icon: ucsd,
    iconBg: "#fff",
    date: "Sep 1989 - Jun 1992",
    summary: "Additional Programs of Concentration (pseudo minors) in Psychology and Music",
    points: [
      "Computer Science",
      "Software Construction",
      "C++",
    ],
    detailed_points: [
      "Computer Architecture",
      "Data Structures and Algorithms",
      "Digital Logic",
      "Algorithm Analysis",
      "Discrete Mathematics",
      "Operating Systems",
      "Object Oriented Design",
      "Compiler Construction",
      "Software Engineering",

    ],
    languages: [
      "c++",
      "c",
      "asm",
      "prolog",
      "lisp",
      "fortran",
      "pascal",
    ],
  },
  {
    title: "Software Engineer, Firmware/BSP",
    company_name: "Valhalla Scientific",
    icon: valhalla,
    iconBg: "#fff",   // "#383E56"
    date: "Feb 1990 - Jun 1992",
    summary: "Developed and maintained control software for digital test equipment.",
    points: [
      "Worked 25-40 hours per week while attending UCSD",
      "Developed and maintained software for several electronic test systems",
      "Designed and developed software for a digital power spectrum analyzer.",
    ],
    detailed_points: [
      "Co-developed software and firmware for a Motorola 68000 host, a Motorola DSP56001 coprocessor, and an Analog Devices ADSP2101 coprocessor for a digital power spectrum analyzer.",
      "Developed a PC based simulator for our spectrum analyzer. We were able to test more than 75% of our code in the PC environment. This helped us deal with rapidly changing user interface requirements.",
      "Completed Motorola certification program for the DSP56001 microprocessor.",
      "Maintained firmware for several existing electronic test equipment systems.",
      "Assisted in design and debug of power-analyzer programmable logic devices (Altera PLDs).",
      "Designed and implemented control software for a digital high potential dielectric breakdown tester.",
      "Designed and implemented high performance/high resolution adaptive DAC control software system to maintain 1V resolution at 7KV under varying load conditions.",
      "Developed a graphic PC based simulator for the high voltage tester.",
      "Implemented communications protocols for RS-232 and GPIB IEEE.488.2 general purpose parallel bi-directional bus.",
    ],
    languages: [
      "c",
      "68k-asm",
    ],
  },
  // {
  //   title: "Engineering Assistant (Intern) - Code 54 (special projects)",
  //   company_name: "NAVELEX (DOD)",
  //   icon: dod,
  //   iconBg: "#fff",   // "#383E56"
  //   date: "Oct 1987 - Feb 1990",
  //   summary: "Problem solving in a team of troubleshooters.",
  //   points: [
  //     "Held a U.S. secret clearance.",
  //     "Solved whatever problems arose.",
  //     "██████ █████ ████.",
  //     "█████ and then ███████.",
  //   ],
  //   detailed_points: [
  //     "Held a U.S. secret clearance.",
  //     "Maintained document-control system for classified information.",
  //     "Built tooling to manipulate AutoCAD plot files to support new paper sizes.",
  //     "Implemented software to transfer encoded files from a DEC PDP-8 to PC and transcode to ASCII text.",
  //     "Redesigned database used to track technical feedback reports to optimize it significantly.",
  //     "The rest is classified..."
  //   ],
  //   languages: [
  //     "c",
  //     "pascal",
  //     "basic",
  //     "dbase",
  //   ],
  // },
];

export { experiences };
