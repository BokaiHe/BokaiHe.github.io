// All site content lives here. Edit this file to update the profile, CV sections or projects.
// Every text field is { en, zh }. Profile/CV content comes from the user's CV; projects come from public GitHub repos.
window.SITE = {
  profile: {
    name: { en: 'Bokai He', zh: '何博楷' },
    photo: 'assets/profile.jpg?v=8',
    position: {
      en: 'M.S., Earth and Environmental Engineering · Columbia University',
      zh: '哥伦比亚大学 · 地球与环境工程硕士',
    },
    lede: {
      en: 'My research applies machine learning, remote sensing and uncertainty quantification to solar energy, flooding and ocean carbon. My main project develops probabilistic hyperspectral unmixing for tropical tree species. I also build interactive tools that make research results explorable.',
      zh: '我的研究将机器学习、遥感与不确定性量化应用于太阳能、洪涝与海洋碳。主要课题是面向热带树种的概率高光谱解混；我也把研究结果做成可交互探索的工具。',
    },
    interests: [
      { en: 'Remote sensing & hyperspectral unmixing', zh: '遥感与高光谱解混' },
      { en: 'Rooftop solar PV estimation', zh: '屋顶光伏估算' },
      { en: 'Uncertainty quantification & conformal prediction', zh: '不确定性量化与保形预测' },
      { en: 'Ocean carbon observing-system design', zh: '海洋碳观测系统设计' },
      { en: 'Flood monitoring', zh: '洪涝监测' },
      { en: 'Energy-system modeling & storage', zh: '能源系统建模与储能' },
    ],
    contact: [
      { label: 'bh2954@columbia.edu', href: 'mailto:bh2954@columbia.edu', kind: 'Email' },
      { label: 'linkedin.com/in/bokai-he-2230b3328', href: 'https://www.linkedin.com/in/bokai-he-2230b3328', kind: 'LinkedIn' },
      { label: 'github.com/BokaiHe', href: 'https://github.com/BokaiHe', kind: 'GitHub' },
    ],
    // Set to a path such as 'assets/CV_Bokai_He.pdf' once a final CV is ready.
    cv: null,
  },

  // Public repositories only. Descriptions come from each repository's README.
  projects: [
    {
      // Keep to approach, steps, conclusions and report figures; never show the algorithm itself
      // (objective, formulas, hyperparameters). Don't mention patent status until it is confirmed.
      id: 'plmm',
      featured: true,
      kicker: { en: 'Main research · in progress', zh: '主要研究 · 进行中' },
      title: { en: 'Probabilistic Hyperspectral Unmixing of Tropical Tree Species', zh: '热带树种的概率高光谱解混' },
      meta: { en: 'Graduate research · Columbia University · since Feb 2025', zh: '研究生科研 · 哥伦比亚大学 · 2025 年 2 月至今' },
      desc: {
        en: 'Estimating which tropical tree species make up a mixed hyperspectral pixel, and in what proportions, by treating each species’ spectrum as a distribution rather than a single fixed curve.',
        zh: '把每个树种的光谱看作一个分布而非一条固定曲线，估算混合高光谱像元中有哪些热带树种、各占多少。',
      },
      tags: ['Hyperspectral', 'Spectral unmixing', 'Uncertainty', 'PyTorch'],
      poster: 'plmm-workflow.jpg',
      contain: true,
      // Shown only on project.html?id=plmm.
      detail: {
        intro: {
          en: 'A single hyperspectral pixel often mixes several tree species. Rather than describing each species by one fixed spectrum, the model treats every species as a distribution — a mean spectrum plus wavelength-wise variability — and estimates the fraction of each species in a mixed pixel.',
          zh: '一个高光谱像元里往往混有多个树种。模型不再用一条固定光谱代表某个树种，而是把每个树种看作一个分布（平均光谱加逐波长变异），据此估算混合像元中各树种所占的比例。',
        },
        steps: [
          { en: 'Build a spectral library of 72 tropical tree species from Puerto Rico leaf measurements, describing each species by a mean spectrum and its variability.', zh: '基于波多黎各叶片测量构建 72 个热带树种的光谱库，每个树种用平均光谱及其变异描述。' },
          { en: 'Mix species at known proportions, recover the proportions with the algorithm, and score the result by abundance error.', zh: '按已知比例混合树种，用算法反演比例，并以丰度误差评估结果。' },
          { en: 'Validate progressively: synthetic spectra of increasing complexity, closely overlapping and sparse mixtures, then real leaf spectra.', zh: '逐级验证：从复杂度递增的合成光谱、高度重叠和稀疏混合，到真实叶片光谱。' },
          { en: 'Run controlled experiments that vary spectral similarity and measurement uncertainty one at a time.', zh: '开展控制变量实验，分别改变光谱相似度和测量不确定性。' },
          { en: 'Unmix all 2,556 species pairs in the library to map where unmixing succeeds or fails.', zh: '对光谱库中全部 2,556 个树种对进行解混，刻画成功与失败的边界。' },
        ],
        findings: [
          { en: 'Accounting for within-species variability makes abundance estimation more robust than fixed-spectrum approaches, and absent species are suppressed without prior knowledge.', zh: '考虑种内变异使丰度估计比固定光谱方法更稳健，并能在无先验的情况下抑制实际不存在的树种。' },
          { en: 'Spectral separability shows a threshold effect: below it, unmixing error rises sharply; the noisier the data, the more separability is needed.', zh: '光谱可分性存在阈值效应：低于阈值时误差急剧上升，数据噪声越大所需的可分性越高。' },
          { en: 'Measurement uncertainty and similarity interact rather than add: uncertainty is most damaging when species already look alike.', zh: '测量不确定性与相似度是交互而非简单叠加：物种本就相似时，不确定性的破坏最大。' },
          { en: 'Most species pairs in the real library are highly similar, so even moderate uncertainty can push error past acceptable levels — pointing to which wavelength regions best distinguish species as the next question.', zh: '真实光谱库中多数树种对高度相似，中等不确定性就可能使误差超出可接受范围；下一步关注哪些波段最能区分树种。' },
        ],
        figures: [
          {
            src: 'plmm-difficulty.jpg',
            caption: {
              en: 'Controlled experiments. Left: spectral similarity varies at fixed noise. Right: measurement uncertainty varies at fixed spectral shapes.',
              zh: '控制变量实验。左：固定噪声、改变光谱相似度；右：固定光谱形状、改变测量不确定性。',
            },
          },
          {
            src: 'plmm-all-pairs.jpg',
            caption: {
              en: 'Unmixing error for all 2,556 species pairs against spectral separability and measurement uncertainty.',
              zh: '全部 2,556 个树种对的解混误差，与光谱可分性和测量不确定性的关系。',
            },
          },
        ],
      },
    },
    {
      repo: 'nyc-solar-studio',
      featured: true,
      title: { en: 'NYC Solar Studio', zh: 'NYC Solar Studio 纽约屋顶光伏设计' },
      desc: {
        en: 'Design rooftop solar on NYC buildings with LoD2 models: pick a building on an aerial map, let an in-browser U-Net outline rooftop equipment, generate a panel layout, and estimate annual energy with shading from surrounding buildings.',
        zh: '基于 LoD2 建筑模型为纽约建筑设计屋顶光伏：在航拍地图上选楼，浏览器内 U-Net 自动识别屋顶设备，生成组件排布，并结合周边建筑遮挡估算年发电量。',
      },
      tags: ['Next.js', 'three.js', 'U-Net', 'ONNX Runtime Web'],
      demo: 'https://bokaihe.github.io/nyc-solar-studio/',
      poster: 'nyc-solar-studio.jpg',
      anim: 'nyc-solar-studio.webp',
    },
    {
      repo: 'rain-to-ponding',
      title: { en: 'Rain to Ponding', zh: 'Rain to Ponding 曼哈顿降雨积水' },
      desc: {
        en: 'An interactive 3D model of Manhattan showing where rainfall collects on the streets, how ponding grows during a storm, and how it compares with FloodNet sensor observations.',
        zh: '曼哈顿交互式 3D 模型：展示降雨在街道上的汇集位置、暴雨过程中积水如何扩展，并与 FloodNet 传感器实测对比。',
      },
      tags: ['3D', 'Surface flow', 'FloodNet'],
      demo: 'https://bokaihe.github.io/rain-to-ponding/',
      poster: 'rain-to-ponding.jpg',
      anim: 'rain-to-ponding.webp',
    },
    {
      repo: 'BESS-Twin',
      title: { en: 'BESS Twin', zh: 'BESS Twin 储能数字孪生' },
      desc: {
        en: 'An interactive digital twin of a renewable energy park — solar, wind, battery storage, grid and consumers — showing how a battery energy storage system operates through a day.',
        zh: '新能源园区交互式数字孪生（光伏、风电、电池储能、电网与用户），直观展示储能系统一天中的运行方式。',
      },
      tags: ['React', 'Vite', 'TypeScript', 'Three.js'],
      demo: 'https://bokaihe.github.io/BESS-Twin/',
      poster: 'bess-twin.jpg',
      anim: 'bess-twin.webp',
    },
    {
      repo: 'ocean-carbon-sampling',
      title: { en: 'Ocean Carbon Sampling', zh: 'Ocean Carbon Sampling 海洋碳采样' },
      desc: {
        en: 'A reproducible OSSE framework testing how the geometry of ocean-carbon sampling changes the error of machine-learning pCO₂ reconstructions.',
        zh: '可复现的 OSSE 框架：检验海洋碳观测的采样布局如何影响机器学习 pCO₂ 重建误差。',
      },
      tags: ['Python', 'OSSE', 'Machine learning', 'SOCAT'],
      demo: 'https://bokaihe.github.io/ocean-carbon-sampling/',
      demoLabel: { en: 'Research brief', zh: '研究简报' },
      poster: 'ocean-carbon-sampling.jpg',
    },
    {
      repo: 'ENSO-Storm-Atlas',
      title: { en: 'ENSO Storm Atlas', zh: 'ENSO Storm Atlas 厄尔尼诺飓风图集' },
      desc: {
        en: 'An interactive bilingual atlas of 979 North Atlantic storms (1950–2025) and how El Niño and La Niña shape their numbers, energy and tracks.',
        zh: '交互式中英双语图集：979 个北大西洋风暴（1950–2025），以及厄尔尼诺与拉尼娜如何影响其数量、能量和路径。',
      },
      tags: ['Python', 'Data visualization', 'Climate'],
      demo: 'https://bokaihe.github.io/ENSO-Storm-Atlas/',
      demoLabel: { en: 'Open atlas', zh: '打开图集' },
      poster: 'enso-storm-atlas.jpg',
      anim: 'enso-storm-atlas.gif',
    },
    {
      repo: 'sentinel2-water-segmentation',
      title: { en: 'Satellite Water Segmentation', zh: '卫星水体分割' },
      desc: {
        en: 'RGB vs RGB+NIR U-Net water segmentation on Sen1Floods11, applied to New York City Sentinel-2 imagery and compared with FloodNet ground observations.',
        zh: '在 Sen1Floods11 上对比 RGB 与 RGB+NIR U-Net 水体分割，并应用于纽约 Sentinel-2 影像、与 FloodNet 地面观测对比。',
      },
      tags: ['U-Net', 'Sentinel-2', 'Sen1Floods11'],
      poster: 'sentinel2-water-segmentation.png',
      contain: true,
    },
    {
      repo: 'Estimation-of-Rooftop-Solar-Photovoltaic-Potential-based-on-Deep-Learning',
      title: { en: 'Rooftop PV Potential with Deep Learning', zh: '基于深度学习的屋顶光伏潜力估算' },
      desc: {
        en: 'A U-Net trained on RGB and near-infrared imagery to find suitable rooftop areas, followed by slope, aspect and suitability scoring and energy and economic estimates.',
        zh: '用 RGB 与近红外影像训练 U-Net 识别适合安装的屋顶区域，再结合坡度、朝向等适宜性评分估算发电量与经济收益。',
      },
      meta: { en: 'With Pina Pi and Tiancheng Gu · Columbia University', zh: '与 Pina Pi、Tiancheng Gu 合作 · 哥伦比亚大学' },
      tags: ['U-Net', 'PyTorch', 'RGB + NIR'],
      poster: 'rooftop-pv-potential.jpg',
      extraLinks: [
        { label: { en: 'Poster (PDF)', zh: '海报 (PDF)' }, href: 'assets/projects/rooftop-pv-potential-poster.pdf' },
      ],
    },
  ],

  research: [
    {
      title: { en: 'Probabilistic Hyperspectral Unmixing', zh: '概率高光谱解混' },
      role: { en: 'Graduate Researcher · Columbia University', zh: '研究生研究员 · 哥伦比亚大学' },
      date: { en: 'Feb 2025 – present', zh: '2025.02 – 至今' },
      text: {
        en: 'A probabilistic linear mixing framework that models endmember spectral variability with wavelength-wise Gaussians in PyTorch, evaluated on roof-material spectra across RGB, RGB+SWIR and broader inputs against fixed-endmember and MESMA baselines.',
        zh: '在 PyTorch 中构建概率线性混合框架，用逐波长高斯分布表示端元光谱变异；在屋顶材料光谱上比较 RGB、RGB+SWIR 及更宽波段输入，并与固定端元和 MESMA 基线对比。',
      },
    },
    {
      title: { en: 'Rooftop PV Capacity Estimation and Uncertainty', zh: '屋顶光伏装机容量估算与不确定性' },
      role: { en: 'Independent research', zh: '独立研究' },
      date: { en: '2026', zh: '2026' },
      text: {
        en: 'DeepLabV3 segmentation ensembles, projected-area capacity estimation, quality-based abstention and split-conformal prediction under geographic shift; across 13 unseen departments, 0.270 kWp MAE and 89.74% coverage for nominal 90% intervals.',
        zh: '结合 DeepLabV3 分割集成、投影面积容量估算、基于质量的拒判与分割保形预测，应对地理分布偏移；在 13 个未见行政区上 MAE 为 0.270 kWp，名义 90% 区间覆盖率 89.74%。',
      },
    },
    {
      title: { en: 'Ocean Carbon Reconstruction and Observing-Network Design', zh: '海洋碳重建与观测网络设计' },
      role: { en: 'Columbia course project and independent extension', zh: '哥大课程项目及独立研究延伸' },
      date: { en: '2025 – 2026', zh: '2025 – 2026' },
      text: {
        en: 'Observing-system simulation experiments with CMIP6 fields and SOCAT observing support, comparing sampling strategies and gap-targeted augmentation of the existing network.',
        zh: '基于 CMIP6 场与 SOCAT 观测支撑开展观测系统模拟实验，比较不同采样策略以及对现有观测网络的补缺式扩充。',
      },
    },
    {
      title: { en: 'Ambient Temperature Bias in PV Performance', zh: '光伏性能中的环境温度偏差' },
      role: { en: 'Critical review', zh: '综述研究' },
      date: { en: '2026', zh: '2026' },
      text: {
        en: 'Synthesized 205 full-text articles on ambient-temperature representativeness, bias correction and propagation through PV thermal and electrical models.',
        zh: '综合 205 篇全文文献，梳理环境温度代表性、偏差校正及其在光伏热模型与电气模型中的传播。',
      },
    },
    {
      title: { en: 'Satellite Flood Monitoring with Sentinel-2 and NYC FloodNet', zh: 'Sentinel-2 与纽约 FloodNet 卫星洪涝监测' },
      role: { en: 'Research project', zh: '研究项目' },
      date: { en: '2026', zh: '2026' },
      text: {
        en: 'Adding NIR raised pooled water IoU from 0.37 to 0.72 on the Sen1Floods11 test split; applied to NYC, RGB+NIR detected 9 of 13 FloodNet-observed wet site-dates versus 1 of 13 for RGB.',
        zh: '在 Sen1Floods11 测试集上加入近红外使整体水体 IoU 从 0.37 提升到 0.72；应用于纽约时，RGB+NIR 检出 13 个 FloodNet 观测湿点中的 9 个，RGB 仅 1 个。',
      },
    },
  ],

  teaching: [
    {
      title: { en: 'Graduate Teaching Assistant · SUMA 5715 Intelligent Energy Systems', zh: '研究生助教 · SUMA 5715 智能能源系统' },
      role: { en: 'Columbia Climate School & School of Professional Studies', zh: '哥伦比亚大学气候学院 & 职业研究学院' },
      date: { en: 'Jan 2026 – May 2026', zh: '2026.01 – 2026.05' },
      text: {
        en: 'Supported Prof. Joe Hao on AI-driven energy-system optimization, battery energy storage and grid modernization: grading, office hours, code-level guidance and instructional materials on forecasting, battery dispatch and price arbitrage.',
        zh: '协助 Joe Hao 教授讲授 AI 驱动的能源系统优化、电池储能与电网现代化：批改作业、答疑、代码层面指导，并编写预测、电池调度与电价套利相关教学材料。',
      },
    },
  ],

  courseProjects: [
    { title: { en: 'Neural network parameterization of ocean vertical mixing', zh: '海洋垂直混合的神经网络参数化' }, date: '2025' },
    { title: { en: 'Hurricane track classification and AMO/ENSO analysis (team lead)', zh: '飓风路径分类与 AMO/ENSO 分析（组长）' }, date: '2025' },
    { title: { en: 'Wildfire burn-scar detection · IBM-NASA hackathon (team lead)', zh: '野火过火区检测 · IBM-NASA 黑客松（队长）' }, date: '2024' },
    { title: { en: 'Wind power integration and carbon tax · ISO New England', zh: '风电并网与碳税 · ISO New England' }, date: '2024' },
    { title: { en: 'Carbon management: CO₂ capture to ethanol techno-economics', zh: '碳管理：CO₂ 捕集制乙醇技术经济分析' }, date: '2024' },
  ],

  education: [
    {
      title: { en: 'MS in Earth and Environmental Engineering, Sustainable Energy track', zh: '地球与环境工程硕士，可持续能源方向' },
      role: { en: 'Columbia University · New York · GPA 3.95/4.0', zh: '哥伦比亚大学 · 纽约 · GPA 3.95/4.0' },
      date: { en: 'May 2026', zh: '2026.05' },
    },
    {
      title: { en: 'BSc in Environmental Science · ranked 1st of 46', zh: '环境科学理学学士 · 专业排名 1/46' },
      role: { en: 'Beijing Normal-Hong Kong Baptist University · Zhuhai · GPA 3.69/4.0', zh: '北师香港浸会大学 · 珠海 · GPA 3.69/4.0' },
      date: { en: 'Jun 2024', zh: '2024.06' },
    },
  ],

  // From the granted patent CN 116183967 B (certificate No. 8564306).
  patents: [
    {
      title: {
        en: 'Microbial Photoelectrochemical Characterization Device and Usage Method',
        zh: '微生物光电化学表征装置及使用方法',
      },
      // `self` marks which inventor to bold.
      inventors: {
        en: ['Ye, J.', 'Gao, Y.', 'He, B.', 'Gu, W.', 'Zhou, S.'],
        zh: ['叶捷', '高育森', '何博楷', '顾文智', '周顺桂'],
        self: 2,
      },
      meta: {
        en: 'Chinese Invention Patent ZL 2023 1 0145646.8 (CN 116183967 B) · Patentee: Fujian Agriculture and Forestry University · Filed Feb 21, 2023 · Granted Dec 9, 2025',
        zh: '中国发明专利 ZL 2023 1 0145646.8（CN 116183967 B）· 专利权人：福建农林大学 · 申请日 2023 年 2 月 21 日 · 授权公告日 2025 年 12 月 9 日',
      },
      desc: {
        en: 'A rotating multi-chamber sample cell with a transparent substrate electrode, combined with illumination, nitrogen supply and a scanning electrochemical microscope, so that several microbial samples can be scanned in turn while kept anaerobic.',
        zh: '由透明基底电极构成的可转动多腔体样品池，配合光照装置、氮气供气和扫描电化学显微镜，使多个微生物样品在厌氧状态下依次完成扫描测试。',
      },
      image: 'patent-device.jpg',
      links: [
        { label: { en: 'Google Patents', zh: 'Google Patents' }, href: 'https://patents.google.com/patent/CN116183967B/zh' },
        { label: { en: 'PDF', zh: '专利全文 PDF' }, href: 'assets/projects/CN116183967B.pdf' },
      ],
    },
  ],

  honors: [
    { en: 'First Class Academic Award, BNBU · 2022–23, 2023–24', zh: '北师港浸大一等学业奖 · 2022–23、2023–24' },
    { en: 'Second Class Academic Award, BNBU · 2020–21, 2021–22', zh: '北师港浸大二等学业奖 · 2020–21、2021–22' },
  ],

  skills: [
    { label: { en: 'Programming', zh: '编程' }, items: 'Python (NumPy, pandas, Matplotlib, scikit-learn, xarray, PyTorch, TensorFlow), R, SQL, Git, Jupyter' },
    { label: { en: 'Methods & GIS', zh: '方法与 GIS' }, items: { en: 'Image segmentation, spectral unmixing, uncertainty quantification, conformal prediction, spatial validation; QGIS, ArcGIS, CAD', zh: '图像分割、光谱解混、不确定性量化、保形预测、空间验证；QGIS、ArcGIS、CAD' } },
    { label: { en: 'Laboratory', zh: '实验' }, items: { en: 'ICP-OES, ICP-MS, GC-MS, HPLC, multi-parameter water quality monitoring', zh: 'ICP-OES、ICP-MS、GC-MS、HPLC、多参数水质监测' } },
  ],
};
