const posts = [
    {
        title: "Adversarial Attacks in Image Classification Models",
        content: "This paper explores the vulnerability of Convolutional Neural Networks (CNNs) and Deep Neural Networks (DNNs) to adversarial attacks using CIFAR-10 images.",
        githubLink: "https://github.com/yeojunh/Adversarial-Examples-DNN",
        picturePaths: ["assets/projects/adversarial-examples-DNN.png"],
        iconName: "SmartToyOutlined"
    },
    {
        title: "Microsoft Intern Hackathon Winner: WAiSTE",
        content: "WAiSTE is a waste management app that uses AI to sort items into their correct trash, recyclable, or compostable bins.\n\nWon 1st place overall and in sustainability category in the Intern Hackathon by building a recycling aid mobile app. We fine-tuned vision machine learning models to accurately categorize different types of waste using few-shot learning.",
        githubLink: "https://github.com/emmahuang03/trash-identifier",
        projectLink: "https://youtu.be/UVRtHoRf4_8?si=SZHf3vE6ljUjbSTG",
        picturePaths: ["assets/projects/waiste.png"],
        iconName: "RecyclingOutlined"
    },
    {
        title: "AI For Accessibility Hackathon 2nd Place: AmplifAI",
        content: "AmplifAI aims to solve communication difficulties caused by dysarthria by providing real-time speech augmentation and enhancement.\n\nWon second place of 32 teams at the hackathon with three judging rounds over three months.",
        githubLink: "https://github.com/yeojunh/amplifAI",
        projectLink: "https://technationcanada.ca/en/blog/driving-accessibility-innovation-through-technations-emerging-tech-challenges/",
        picturePaths: ["assets/projects/amplifai.png"],
        iconName: "HearingOutlined"
    },
    {
        title: "Real-time Livestream Fact Checker: Actually",
        content: "Actually helps you stay informed by fact checking your content in real-time. Give it a video or livestream of a debate, and Actually will transcribe, provide more context on the topic, analyze claims, and deliver instant fact-checks with citations through a React interface.\n\nI implemented the core AI pipeline, connecting Azure speech recognition model with fine-tuned Gemini 1.5 Pro prompts to generate structured fact-check results ready for citation processing.",
        githubLink: "https://github.com/ArsalaanAli/Eavesdrop",
        projectLink: "https://devpost.com/software/aktually",
        picturePaths: ["assets/projects/actually_logo.jpg", "assets/projects/actually.jpg"],
        iconName: "FactCheckOutlined"
    },
    {
        title: "Smart Kitchen Monitor: Dishwatcher",
        content: "You move out of your parents home and you realize that the dishes don’t clean themselves. Unfortunately, some of our roommates haven’t come to that conclusion yet. If only there was a way to track who leaves dishes and who cleans them up...\n\nOn the technical side, I developed the Python/Flask backend and engineered the computer vision components. By combining OpenCV and YOLO models with a prediction buffer, I developed reliable face and dish detection despite varying lighting and occlusion.",
        githubLink: "https://github.com/Lciappi/dishwatcher",
        projectLink: "https://devpost.com/software/dishwatcher",
        picturePaths: ["assets/projects/dishwatcher_logo.png", "assets/projects/dishwatcher_page.jpg"],
        iconName: "CountertopsOutlined"
    },
    {
        title: "Interactive 3D Rendering with Three.js",
        content: "This project creates a highly realistic 3D rendering of a helmet using Three.js. The rendering leverages physically based rendering (PBR) techniques to achieve lifelike materials and lighting effects.\n\n*interactive* - use your mouse to rotate and zoom the camera around the helmet 🏎️🏁",
        githubLink: "https://github.com/yeojunh/yeojunh.github.io/tree/main/public/threejs-graphics-project",
        embedPath: "/threejs-graphics-project/index.html",
        iconName: "DrawOutlined"
    },
];

export default posts;