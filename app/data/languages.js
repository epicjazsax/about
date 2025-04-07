import {
  c_and_cpp,
  python,
  javascript,
  code,
} from "../assets";

const proficiency_ratings = {
  "Novice": "Familiar with fundamental concepts, can write simple programs.",
  "Functional": "Familiar with core concepts, can tackle medium tasks.  Used on-demand, but not consistently",
  "Intermediate": "Comfortable with core concepts, can tackle more complex tasks.  Familiar with idiomatic code.",
  "Advanced": "Proficient, can handle challenging problems.",
  "Expert": "Fluent. Deep understanding of the language, including idiosyncracies.  Effective reviewer and mentor",
}

const languages = [
  {
    title: "Javascript",
    proficiency: "Advanced",
    icon: javascript,
    id: "javascript",
    desc: [
      `
A majority of my coding has been in Javascript, and while I may need to look up the occasional
syntax or brush up on a method I haven't thought about in months, this is the language I am most comfortable in.
      `,
    ]
  },
  {
    title: "CSS",
    proficiency: "Functional",
    icon: c_and_cpp,
    id: "c-and-cpp",
    desc: [
      `
I have spent some time with CSS and frameworks like Tailwind and TACHYONS as they relate to design
layouts, color palettes, et cetera, but have not yet done as deep a dive into the language as I have
with Javascript.
      `,
    ],
  },
  {
    title: "HTML",
    proficiency: "Functional",
    icon: javascript,
    id: "javascript",
    desc: [
      `
As with CSS, I have spent some time with HTML learning layouts and tags but have not yet really
dived deep enough to feel that I understand the full potential of the language.
      `,
    ]
  },
  {
    title: "Python",
    proficiency: "Novice",
    icon: python,
    id: "python",
    desc: [
      `
I started learning Python before beginning my Full-Stack Developer journey.
I enjoy the language and have done some small snippets in it, but haven't
dusted it off since I began learning Javascript
      `,
    ]
  },
//   {
//     title: "Other Languages",
//     proficiency: "Functional",
//     icon: code,
//     id: "other",
//     desc: [
//       `
// I've also used C#, Ruby, Lisp, HTML, CSS, Bash, Pascal, Ada,
// Awk, Make, Sed, Perl, PHP, and Basic.  I'm sure
// there are others, but I don't really consider myself proficient
// in any of these.  Basically, I can make them do what I need.
//       `,
//     ]
//   },
];

export { languages, proficiency_ratings };