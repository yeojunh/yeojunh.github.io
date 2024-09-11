const posts = [    
    {
        title: "Adversarial Attacks in Image Classification Models",
        content: "This paper explores the vulnerability of Convolutional Neural Networks (CNNs) and Deep Neural Networks (DNNs) to adversarial attacks using CIFAR-10 images. It evaluates the performance of adversarial training methods, revealing that while the original ResNet50 model performs best on unaltered data, it struggles with adversarial attacks.\n\nThe findings show an improved robustness of defense mechanisms even with small underfit models and this study overall will inform strategies to better defend DNNs from adversarial attacks.",
        date: "Mar. - Apr. 2024",
        githubLink: "https://github.com/yeojunh/Adversarial-Examples-DNN",
        picturePath: "assets/projects/adversarial-examples-DNN.png",
        iconName: "SmartToyOutlined"
    },
    {
        title: "Interactive 3D Rendering with Three.js",
        content: "This project creates a highly realistic 3D rendering of a helmet using Three.js. The rendering leverages physically based rendering (PBR) techniques to achieve lifelike materials and lighting effects. The helmet model is enhanced with various textures, including albedo, ambient occlusion, emissive lighting, metal roughness, and normal maps.\n\nUse your mouse to rotate and zoom the camera around the helmet 🏎️🏁",
        date: "Mar. 2024",
        githubLink: "https://github.com/yeojunh/yeojunh.github.io/tree/main/public/threejs-graphics-project",
        embedPath: "/threejs-graphics-project/index.html",
        iconName: "DrawOutlined"
    },
    {
        title: "Minecraft Mod with Java and Forge",
        content: "Ever wanted to add your cat to Minecraft? Or wanted to sip a cup of coffee and gain movement boost? Or dive into the world of Pandora from the Borderlands series and have your companion CL4P-TP by your side... as a complete set of building blocks?\n\nIf you can get past my horrible building skills - the mod is implemented in Java using the Minecraft Forge modding platform. GitHub repo coming soon!",
        date: "May 2024",
        picturePath: "assets/projects/mc-mod.png",
        iconName: "SportsEsportsOutlined"
    },
    {
        title: "Microsoft Intern Hackathon Winner: WAiSTE",
        content: "WAiSTE is a waste management app that uses AI to sort items into their correct trash, recyclable, or compostable bins. Our app innovatively minimizes misplaced garbage by allowing users to simply use their phones to make a meaningful impact regardless of background or expertise.\n\nWon 1st place overall and in sustainability category in the Intern Hackathon by building a recycling aid mobile app. We fine-tuned vision machine learning models to accurately categorize different types of waste using few-shot learning.",
        date: "Jul. 2023",
        githubLink: "https://github.com/emmahuang03/trash-identifier",
        picturePath: "assets/projects/waiste.png",
        iconName: "RecyclingOutlined"
    },
    {
        title: "AI For Accessibility Hackathon: AmplifAI",
        content: "AmplifAI aims to solve communication difficulties caused by dysarthria by providing real-time speech augmentation and enhancement. This tool uses AI to correct pronunciations and clarify their words based on personalized speech patterns.\n\nWon second place of 32 teams at the hackathon with three judging rounds over three months. Incorporated natural language processing and few-shot fine tuning techniques in Python and Azure Machine Learning.",
        date: "Jan. - Mar. 2023",
        githubLink: "https://github.com/yeojunh/amplifAI",
        projectLink: "https://technationcanada.ca/en/blog/driving-accessibility-innovation-through-technations-emerging-tech-challenges/",
        picturePath: "assets/projects/amplifai.png",
        iconName: "HearingOutlined"
    },
];

export default posts;