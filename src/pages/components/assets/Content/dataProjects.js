// let variables = ["id", "ProjectsName", "keyName", "certificateTitle","certificateType","forProjects"];
// let keyValue,
//   projectTitle,
//   projectType,
//   imageName,
//   description,
//   imagePath,
//   hrefLink;







// {PlacesVisited.map((keyItem) => {
//   let keyValue,
//     city,
//     country,
//     images,
//     imageBasePath,
//     description,
//     imageName,
//     reviews;
//   ({
//     keyValue,
//     city,
//     country,
//     images,
//     imageBasePath,
//     description,
//     imageName,
//     reviews
//   } = keyItem);
//   // const valOfKey = `"projectsmade" - ${keyValue}`; // Combine id with keyName

//   return (
//     <div class="place-info">
//             <h2>City, Country</h2>
//             <p>description</p>
//     </div>
//   );
//   //   }
//   //   return null; // Return null for non-"home" items
// })}


















let noOfProjects = 1;

const projectsmade = [
  {
    keyValue: noOfProjects++,
    projectTitle: "Answer Correct Sum",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Answer Correct Sum",
    description: "Answer the correct sum for 2 two-digit numbers...",
    // imagePath: "./assets/image/Projects/Web Development/"+{imageName}+".jpg",
    imagePath: "./assets/image/Projects/Web Development/Answer Correct Sum.jpg",
    hrefLink:
      "/Projects/" +
      "Answer Correct Sum" +
      "/" +
      "Answer Correct Sum" +
      ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Bomb Defuser",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Bomb Defuser",
    description: "Defuse the BOMB before it blast.",
    imagePath: "./assets/image/Projects/Web Development/Bomb Defuser.jpg",
    hrefLink: "/Projects/" + "Bomb Defuser" + "/" + "Bomb Defuser" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Book Search",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Book Search",
    description: "Search your favourite Book on-the-go.",
    imagePath: "./assets/image/Projects/Web Development/Book Search.jpg",
    hrefLink: "/Projects/" + "Book Search" + "/" + "Book Search" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Bookmark Maker",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Bookmark Maker",
    description: "Bookmark your favourite Websites on-the-go.",
    imagePath: "./assets/image/Projects/Web Development/Bookmark Maker.jpg",
    hrefLink:
      "/Projects/" + "Bookmark Maker" + "/" + "Bookmark Maker" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Button Maker",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Button Maker",
    description:
      "Customize your Button based on color, padding and font size...",
    imagePath: "./assets/image/Projects/Web Development/Button Maker.jpg",
    hrefLink: "/Projects/" + "Button Maker" + "/" + "Button Maker" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Color Picker",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Color Picker",
    description: "Pick any color to change the background color...",
    imagePath: "./assets/image/Projects/Web Development/Color Picker.jpg",
    hrefLink: "/Projects/" + "Color Picker" + "/" + "Color Picker" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Country Population Search Page",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Country Population Search Page",
    description: "Show Population of Country",
    imagePath:
      "./assets/image/Projects/Web Development/Country Population Search Page.jpg",
    hrefLink:
      "/Projects/" +
      "Country Population Search Page" +
      "/" +
      "Country Population Search Page" +
      ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Custom Range Counter",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Custom Range Counter",
    description: "Enter your custom range(in seconds) to start the Time Count.",
    imagePath:
      "./assets/image/Projects/Web Development/Custom Range Counter.jpg",
    hrefLink:
      "/Projects/" +
      "Custom Range Counter" +
      "/" +
      "Custom Range Counter" +
      ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Know Fact About a Number",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Know Fact About a Number",
    description: "Give a number to input and get Interesting Facts about it.",
    imagePath:
      "./assets/image/Projects/Web Development/Know Fact About a Number.jpg",
    hrefLink:
      "/Projects/" +
      "Know Fact About a Number" +
      "/" +
      "Know Fact About a Number" +
      ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Random Color Generator",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Random Color Generator",
    description:
      "Generate random background color by clicking on the button...",
    imagePath:
      "./assets/image/Projects/Web Development/Random Color Generator.jpg",
    hrefLink:
      "/Projects/" +
      "Random Color Generator" +
      "/" +
      "Random Color Generator" +
      ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Random Joke Generator",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Random Joke Generator",
    description: "Generate random jokes whenever you want to laugh",
    imagePath:
      "./assets/image/Projects/Web Development/Random Joke Generator.jpg",
    hrefLink:
      "/Projects/" +
      "Random Joke Generator" +
      "/" +
      "Random Joke Generator" +
      ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Seasons Switcher",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Seasons Switcher",
    description: "Switch between the seasons according to your mood...",
    imagePath: "./assets/image/Projects/Web Development/Seasons Switcher.jpg",
    hrefLink:
      "/Projects/" + "Seasons Switcher" + "/" + "Seasons Switcher" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Select Your Pet",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Select Your Pet",
    description:
      "Select Your Pet according to your liking...though I like them all :-)",
    imagePath: "./assets/image/Projects/Web Development/Select Your Pet.jpg",
    hrefLink:
      "/Projects/" + "Select Your Pet" + "/" + "Select Your Pet" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Sizing an Image",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Sizing an Image",
    description: "Increase or Decrease the size of the image...",
    imagePath: "./assets/image/Projects/Web Development/Sizing an Image.jpg",
    hrefLink:
      "/Projects/" + "Sizing an Image" + "/" + "Sizing an Image" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Speed Typing Test",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Speed Typing Test",
    description: "Test your Typing Speed with a Game",
    imagePath: "./assets/image/Projects/Web Development/Speed Typing Test.jpg",
    hrefLink:
      "/Projects/" + "Speed Typing Test" + "/" + "Speed Typing Test" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Tabs",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Tabs",
    description:
      "Get description of the places by clicking on the tab of the place you like to get info...",
    imagePath: "./assets/image/Projects/Web Development/Tabs.jpg",
    hrefLink: "/Projects/" + "Tabs" + "/" + "Tabs" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Time Converter",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Time Converter",
    description: "Converts Hours and minutes into Seconds",
    imagePath: "./assets/image/Projects/Web Development/Time Converter.jpg",
    hrefLink:
      "/Projects/" + "Time Converter" + "/" + "Time Converter" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Tip Calculator",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Tip Calculator",
    description:
      "Calculate the tip to be paid based on the percentage amount you set on the bill...",
    imagePath: "./assets/image/Projects/Web Development/Tip Calculator.jpg",
    hrefLink:
      "/Projects/" + "Tip Calculator" + "/" + "Tip Calculator" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "To Do List",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "To Do List",
    description: "Make your own To-do Items list...",
    imagePath: "./assets/image/Projects/Web Development/To Do List.jpg",
    hrefLink: "/Projects/" + "To Do List" + "/" + "To Do List" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Toggle Like and Unlike",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Toggle Like and Unlike",
    description: "Click on the Like Button to make this cute dog Happy...",
    imagePath:
      "./assets/image/Projects/Web Development/Toggle Like and Unlike.jpg",
    hrefLink:
      "/Projects/" +
      "Toggle Like and Unlike" +
      "/" +
      "Toggle Like and Unlike" +
      ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Traffic Light",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Traffic Light",
    description:
      "Click on the desired buttonn to change the traffic light accordingly...",
    imagePath: "./assets/image/Projects/Web Development/Traffic Light.jpg",
    hrefLink: "/Projects/" + "Traffic Light" + "/" + "Traffic Light" + ".html",
  },
  {
    keyValue: noOfProjects++,
    projectTitle: "Wikipedia Search Application",
    projectType: "Web Development",
    forProjects: "Full Stack Web Development",
    imageName: "Wikipedia Search Application",
    description: "Integrated Wikipedia Search with an api",
    imagePath:
      "./assets/image/Projects/Web Development/Wikipedia Search Application.jpg",
    hrefLink:
      "/Projects/" +
      "Wikipedia Search Application" +
      "/" +
      "Wikipedia Search Application" +
      ".html",
  },
  // {
  //   keyValue: noOfProjects++,
  //   projectTitle: "",
  //   projectType: "Web Development",
  //   forProjects: "Full Stack Web Development",
  //   imageName: "",
  //   description: "",
  //   imagePath: "./assets/image/Projects/Web Development/.jpg",
  //   hrefLink: "/Projects/" + "" + "/" + "" + ".html",
  // },
];

export { projectsmade };
