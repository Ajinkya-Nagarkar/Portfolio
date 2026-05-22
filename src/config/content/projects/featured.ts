export const featuredProjects = [
    {
        title: "Evidence-Based RAG for Multi-Hop Q&A",
        tech: ["Python", "FAISS", "BM25", "HuggingFace", "NLI", "HotpotQA"],
        description: "Built a hallucination-resistant multi-hop QA system over 7,405 HotpotQA examples. Combined hybrid BM25+FAISS retrieval with fuzzy title matching and cross-encoder reranking to surface the right evidence across chained reasoning steps. Improved Joint F1 from 19.6% to 43.2% zero-shot. Added NLI-based verification and citation grounding to eliminate hallucinated references — achieving BERTScore F1 of 94.3%.",
        links: { github: "#", external: "#" },
        image: "/rag.png",
    },
    {
        title: "Fungi Image Classification via Transfer Learning",
        tech: ["Python", "PyTorch", "ResNet", "EfficientNet", "DenseNet", "CNN"],
        description: "Systematically benchmarked five pretrained CNN architectures (ResNet50, ResNet101, EfficientNetB0, VGG16, DenseNet201) as feature extractors for 5-class fungi classification. Applied aggressive augmentation with L2 regularization, batch normalization, and early stopping. ResNet101 achieved top test accuracy at 69.2% (F1: 66.4%); DenseNet201 led on AUC at 90.0%, with all architectures exceeding 85% AUC.",
        links: { github: "#", external: "#" },
        image: "",
    },
    {
        title: "Honeypot System using LLM Interaction Modeling",
        tech: ["Python", "ChatGPT", "Cybersecurity", "IoT", "IEEE Publication"],
        description: "Published at IEEE ICCUBEA-23. Developed a ChatGPT-powered honeypot that simulates vulnerable systems to deceive attackers and profile their tactics. The system dynamically responds to attacker commands, enabling automated collection of threat intelligence on adversarial behavior patterns.",
        links: { github: "#", external: "https://ieeexplore.ieee.org/document/10392228" },
        image: "/Honeypot.png",
    },
    {
        title: "Crypto Wallet for Farmers",
        tech: ["Raspberry Pi", "Blockchain", "CBDC", "Biometrics", "Indian Patent"],
        description: "Co-invented a Raspberry Pi-based hardware crypto wallet with fingerprint biometrics and CBDC support, enabling direct government subsidy disbursement to digitally illiterate rural farmers. Registered with the Indian Patent Office.",
        links: { github: "#", external: "https://patentscope.wipo.int/search/en/detail.jsf?docId=IN438211516" },
        image: "/Wallet.png",
    },
];