const posts = [    
    {
        postId: 1, 
        title: "Adversarial Attacks in Image Classification Models",
        content: "This paper explores the vulnerability of Convolutional Neural Networks (CNNs) and Deep Neural Networks (DNNs) to adversarial attacks using CIFAR-10 images. It evaluates the performance of adversarial training methods, revealing that while the original ResNet50 model performs best on unaltered data, it struggles with adversarial attacks.\n\nThe findings show an improved robustness of defense mechanisms even with small underfit models and this study overall will inform strategies to better defend DNNs from adversarial attacks.",
        date: "Mar. - Apr. 2024",
        githubLink: "https://github.com/yeojunh/Adversarial-Examples-DNN",
        picturePath: "assets/projects/adversarial-examples-DNN.png",
        iconName: "SmartToyOutlined"
    },
    {
        postId: 2, 
        title: "Microsoft Intern Hackathon Winner: WAiSTE",
        content: "Won 1st place overall and in sustainability category in the Intern Hackathon by building a recycling aid mobile app. We fine-tuned vision machine learning models to accurately categorize different types of waste using few-shot learning.",
        date: "Jul. 2023",
        githubLink: "https://github.com/yeojunh/amplifAI",
        picturePath: "assets/projects/waiste.png",
        iconName: "RecyclingOutlined"
    },
    {
        postId: 3, 
        title: "AI For Accessibility Hackathon 2nd Place: AmplifAI",
        content: "AmplifAI aims to solve communication difficulties caused by dysarthria by providing real-time speech augmentation and enhancement. This tool uses AI to correct pronunciations and clarify their words based on personalized speech patterns.\n\nWon second place of 32 teams at the hackathon with three judging rounds over three months. Incorporated natural language processing and few-shot fine tuning techniques in Python and Azure Machine Learning.",
        date: "Jan. - Mar. 2023",
        githubLink: "https://github.com/yeojunh/amplifAI",
        projectLink: "https://technationcanada.ca/en/blog/driving-accessibility-innovation-through-technations-emerging-tech-challenges/",
        picturePath: "assets/projects/amplifai.png",
        iconName: "HearingOutlined"
    },
    {
        postId: 4, 
        title: "Typing Application",
        content: "This was one of my first projects. I created a typing practice application that measures the user's typing speed and accuracy. The user will be able to track their previous typing test records for typing speed and accuracy. The typing speed will be calculated in words per minute (wpm), and accuracy will be based on the percentage of words typed correctly.\n\nIt featured quotes from our favourite CS prof, Gregor!",
        date: "Jul. 2021",
        githubLink: "https://github.com/yeojunh/TypingApplication",
        projectLink: "https://www.youtube.com/watch?v=YOEfrQMywzY",
        picturePath: "assets/projects/typing-application.png",
        iconName: "KeyboardOutlined"
    },
];

export default posts;