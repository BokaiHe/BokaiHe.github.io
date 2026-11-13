// All site content lives here. Edit this file to update the profile, CV sections or projects.
// Every text field is { en, zh }. Content mirrors CV v19 (research first, no web-stack details). Project cards are public repos only.
window.SITE = {
  profile: {
    name: { en: 'Bokai He', zh: '何博楷' },
    photo: 'assets/profile.jpg?v=8',
    position: {
      en: 'M.S., Earth and Environmental Engineering · Columbia University',
      zh: '哥伦比亚大学 · 地球与环境工程硕士',
    },
    lede: {
      en: 'I work on remote sensing and environmental machine learning, with a focus on uncertainty and on whether models still hold when the place or the data change. My main project was probabilistic hyperspectral unmixing of tropical tree species; other work covers rooftop solar capacity, urban flooding and ocean carbon observing design.',
      zh: '我的研究方向是遥感与环境机器学习，关注不确定性，以及模型换了地点或数据之后是否依然可靠。主要课题是热带树种的概率高光谱解混；其他工作涉及屋顶光伏容量、城市洪涝和海洋碳观测设计。',
    },
    interests: [
      { en: 'Remote sensing & environmental machine learning', zh: '遥感与环境机器学习' },
      { en: 'Hyperspectral unmixing', zh: '高光谱解混' },
      { en: 'Uncertainty quantification & spatial generalization', zh: '不确定性量化与空间泛化' },
      { en: 'Geospatial assessment of renewable energy', zh: '可再生能源的地理空间评估' },
      { en: 'Urban flood monitoring', zh: '城市洪涝监测' },
      { en: 'Ocean carbon observing-system design', zh: '海洋碳观测系统设计' },
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
      kicker: { en: 'Main research', zh: '主要研究' },
      title: { en: 'Probabilistic Hyperspectral Unmixing of Tropical Tree Species', zh: '热带树种的概率高光谱解混' },
      meta: { en: 'Graduate research · Columbia University · Feb 2025 – Aug 2026 · Advisor: Dr. Conrad M. Albrecht', zh: '研究生科研 · 哥伦比亚大学 · 2025.02 – 2026.08 · 导师：Dr. Conrad M. Albrecht' },
      desc: {
        en: 'Estimating which tropical tree species make up a mixed hyperspectral pixel, and in what proportions, by treating each species’ spectrum as a distribution rather than a single fixed curve.',
        zh: '把每个树种的光谱看作一个分布而非一条固定曲线，估算混合高光谱像元中有哪些热带树种、各占多少。',
      },
      tags: ['Hyperspectral', 'Spectral unmixing', 'Uncertainty', 'EnMAP', 'NumPy'],
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
      repo: 'sentinel2-water-segmentation',
      title: { en: 'Satellite Water Segmentation for Flood Monitoring', zh: '卫星水体分割与洪涝监测' },
      meta: { en: 'Independent research · Columbia University · 2026', zh: '独立研究 · 哥伦比亚大学 · 2026' },
      desc: {
        en: 'Does near-infrared help a U-Net find water? On Sen1Floods11, adding NIR raised water IoU from 0.37 to 0.72. Applied to NYC Sentinel-2 imagery, RGB+NIR detected water at 9 of 13 FloodNet-observed wet site–dates versus 1 for RGB.',
        zh: '近红外能否帮助 U-Net 识别水体？在 Sen1Floods11 上，加入近红外使水体 IoU 从 0.37 提高到 0.72。应用到纽约 Sentinel-2 影像时，在 13 个 FloodNet 观测到积水的站点-日期中，RGB+NIR 检出 9 个，RGB 只有 1 个。',
      },
      tags: ['U-Net', 'Sentinel-2', 'Sen1Floods11', 'FloodNet'],
      poster: 'sentinel2-water-segmentation.png',
      contain: true,
    },
    {
      repo: 'rain-to-ponding',
      title: { en: 'Rain to Ponding: Manhattan Street Ponding', zh: 'Rain to Ponding：曼哈顿街道积水' },
      meta: { en: 'Independent research · Columbia University · 2026', zh: '独立研究 · 哥伦比亚大学 · 2026' },
      desc: {
        en: 'Where does rainfall collect on Manhattan streets? A local-inertia surface-flow model on a 5 m grid (NOAA terrain, building footprints, drainage capacity) placed ponding within 10 m of 4 of 5 FloodNet sensors but underestimated depth (e.g., 8.0 vs 22.7 cm).',
        zh: '降雨会在曼哈顿哪些街道积水？基于 5 m 网格的 local-inertia 地表流模型（NOAA 地形、建筑轮廓、排水能力）在 5 个 FloodNet 传感器中的 4 个 10 m 范围内算出了积水，但低估了水深（如 8.0 cm 对实测 22.7 cm）。',
      },
      tags: ['Surface-flow model', 'Urban flooding', 'FloodNet'],
      demo: 'https://bokaihe.github.io/rain-to-ponding/',
      poster: 'rain-to-ponding.jpg',
      anim: 'rain-to-ponding.webp',
    },
    {
      repo: 'nyc-solar-studio',
      title: { en: 'NYC Solar Studio: 3D Rooftop PV Layout and Yield', zh: 'NYC Solar Studio：三维屋顶光伏排布与发电量' },
      meta: { en: 'Course project and independent extension · Columbia University · 2026', zh: '课程项目与独立延伸 · 哥伦比亚大学 · 2026' },
      desc: {
        en: 'Extends rooftop PV assessment to NYC LoD2 3D buildings: a U-Net detects rooftop obstacles (pixel F1 0.43, object recall 0.49 against LiDAR-derived labels), layouts respect setbacks and shading from neighbors within 200 m, and per-panel annual energy uses typical-year weather (about 1,360 kWh/kWp for an unshaded panel).',
        zh: '把屋顶光伏评估扩展到纽约 LoD2 三维建筑：U-Net 识别屋顶障碍物（以 LiDAR 生成的标签为参照，像素 F1 0.43，目标召回 0.49）；排布考虑退界和 200 m 内邻楼遮挡；按典型气象年估算每块组件的年发电量（无遮挡时约 1,360 kWh/kWp）。',
      },
      tags: ['LoD2', 'U-Net', 'Shading', 'PV yield'],
      demo: 'https://bokaihe.github.io/nyc-solar-studio/',
      poster: 'nyc-solar-studio.jpg',
      anim: 'nyc-solar-studio.webp',
    },
    {
      repo: 'Estimation-of-Rooftop-Solar-Photovoltaic-Potential-based-on-Deep-Learning',
      title: { en: 'Rooftop PV Potential with Deep Learning', zh: '基于深度学习的屋顶光伏潜力估算' },
      meta: { en: 'Course project · Columbia University · with Pina Pi and Tiancheng Gu · 2024', zh: '课程项目 · 哥伦比亚大学 · 与 Pina Pi、Tiancheng Gu 合作 · 2024' },
      desc: {
        en: 'A U-Net on RGB and near-infrared imagery segments rooftops (IoU 0.61, precision 0.79); roof slope, aspect and suitability scoring then give PV potential, annual energy and economic benefit.',
        zh: '用 RGB 与近红外影像训练 U-Net 分割屋顶（IoU 0.61，精确率 0.79），再结合坡度、朝向和适宜性评分估算光伏潜力、年发电量和经济收益。',
      },
      tags: ['U-Net', 'RGB + NIR', 'PV potential'],
      poster: 'rooftop-pv-potential.jpg',
      extraLinks: [
        { label: { en: 'Poster (PDF)', zh: '海报 (PDF)' }, href: 'assets/projects/rooftop-pv-potential-poster.pdf' },
      ],
    },
    {
      repo: 'ocean-carbon-sampling',
      title: { en: 'Ocean Carbon Sampling', zh: '海洋碳采样与观测网络设计' },
      meta: { en: 'Course project and independent extension · Columbia University · Prof. Galen McKinley · 2025–2026', zh: '课程项目与独立延伸 · 哥伦比亚大学 · Prof. Galen McKinley · 2025–2026' },
      desc: {
        en: 'Does where we measure ocean CO₂ change reconstruction error? In simulation experiments with CMIP6 truth and SOCAT observing support, historical-density sampling raised MAE by 27.3% versus random at 5,000 samples; adding 1,000 gap-targeted observations cut RMSE by 3.126 µatm, 0.462 µatm more than random additions.',
        zh: '观测位置会影响海洋 CO₂ 重建误差吗？以 CMIP6 为真值、SOCAT 为采样格局的模拟实验中，5,000 个样本时按历史观测密度采样比随机采样的 MAE 高 27.3%；补充 1,000 个空白区观测使 RMSE 降低 3.126 µatm，比随机补充多降 0.462 µatm。',
      },
      tags: ['OSSE', 'CMIP6', 'SOCAT', 'Gradient boosting'],
      demo: 'https://bokaihe.github.io/ocean-carbon-sampling/',
      demoLabel: { en: 'Research brief', zh: '研究简报' },
      poster: 'ocean-carbon-sampling.jpg',
    },
    {
      repo: 'ENSO-Storm-Atlas',
      title: { en: 'North Atlantic Hurricanes and ENSO', zh: '北大西洋飓风与 ENSO' },
      meta: { en: 'Course project (team lead) and independent extension · Columbia University · Prof. Galen McKinley · 2025–2026', zh: '课程项目（组长）与独立延伸 · 哥伦比亚大学 · Prof. Galen McKinley · 2025–2026' },
      desc: {
        en: 'How do El Niño and La Niña change Atlantic storms? With whole-season permutation tests on 979 IBTrACS storms, La Niña seasons averaged 16.1 named storms per year versus 11.0 in El Niño seasons (1966–2025), and the track-centroid shift splits into type-mix and within-type parts.',
        zh: '厄尔尼诺和拉尼娜如何改变大西洋风暴？对 979 个 IBTrACS 风暴按整季做置换检验，1966–2025 年拉尼娜季平均每年 16.1 个命名风暴，厄尔尼诺季 11.0 个；路径中心偏移可分解为类型构成变化和类型内部位移。',
      },
      tags: ['IBTrACS', 'Permutation tests', 'Clustering', 'Climate'],
      demo: 'https://bokaihe.github.io/ENSO-Storm-Atlas/',
      demoLabel: { en: 'Open atlas', zh: '打开图集' },
      poster: 'enso-storm-atlas.jpg',
      anim: 'enso-storm-atlas.gif',
    },
    {
      repo: 'BESS-Twin',
      title: { en: 'BESS Twin: Battery Storage Dispatch Simulation', zh: 'BESS Twin：储能调度模拟' },
      meta: { en: 'Started during the teaching assistantship · Columbia University · 2026', zh: '助教期间开始开发 · 哥伦比亚大学 · 2026' },
      desc: {
        en: 'A minute-resolution simulation of a renewable energy park built to show how battery storage operates: peak shaving first, periodic state of charge, and separate accounting of unserved energy and curtailment so that design comparisons stay fair.',
        zh: '按分钟模拟新能源园区，用来展示储能如何运行：优先削峰，保持周期性荷电状态，并把缺电量和弃电分开统计，使不同设计方案的对比公平。',
      },
      tags: ['Battery storage', 'Dispatch', 'Energy systems'],
      demo: 'https://bokaihe.github.io/BESS-Twin/',
      poster: 'bess-twin.jpg',
      anim: 'bess-twin.webp',
    },
  ],

  research: [
    {
      title: { en: 'Uncertainty-Aware Probabilistic Hyperspectral Unmixing', zh: '考虑不确定性的概率高光谱解混' },
      role: { en: 'Graduate research · Columbia University · Advisor: Dr. Conrad M. Albrecht', zh: '研究生科研 · 哥伦比亚大学 · 导师：Dr. Conrad M. Albrecht' },
      date: { en: 'Feb 2025 – Aug 2026', zh: '2025.02 – 2026.08' },
      text: {
        en: 'Probabilistic linear mixing with wavelength-wise Gaussian endmembers (NumPy); 72-species tropical tree library and EnMAP crown spectra; across all 2,556 species pairs, spectral separability and measurement uncertainty jointly determine reliability. Extended to roof materials: added SWIR bands reduced recovery error, while MESMA kept lower mean error.',
        zh: '用逐波长高斯分布表示端元的概率线性混合模型（NumPy）；72 个热带树种光谱库与 EnMAP 树冠光谱；在全部 2,556 个树种对上，光谱可分性和测量不确定性共同决定解混是否可靠。延伸到屋顶材料：加入 SWIR 降低了恢复误差，MESMA 平均误差仍更低。',
      },
    },
    {
      title: { en: 'Uncertainty-Aware Rooftop PV Capacity Estimation under Spatial Shift', zh: '空间偏移下考虑不确定性的屋顶光伏容量估算' },
      role: { en: 'Independent research · Columbia University', zh: '独立研究 · 哥伦比亚大学' },
      date: { en: 'Jan 2026 – Aug 2026', zh: '2026.01 – 2026.08' },
      text: {
        en: 'BDAPPV (France): DeepLabV3 ensemble, projected-area capacity, quality-based abstention and split-conformal intervals. Across 13 unseen departments, 0.270 kWp MAE and 89.74% coverage for nominal 90% intervals (3.5% abstained), but only 83% for 4–9 kWp and 42% for 9–36 kWp systems.',
        zh: '法国 BDAPPV 数据：DeepLabV3 集成分割、投影面积换算容量、按质量拒判、分割保形区间。在 13 个未见过的省份上 MAE 0.270 kWp，90% 区间覆盖率 89.74%（拒判 3.5%），但 4–9 kWp 只有 83%，9–36 kWp 只有 42%。',
      },
    },
    {
      title: { en: 'NYC Urban Flooding: Satellite Water Detection and Street-Ponding Modeling', zh: '纽约城市洪涝：卫星水体识别与街道积水建模' },
      role: { en: 'Independent research · Columbia University', zh: '独立研究 · 哥伦比亚大学' },
      date: { en: 'Jan 2026 – Aug 2026', zh: '2026.01 – 2026.08' },
      text: {
        en: 'Adding NIR raised water IoU from 0.37 to 0.72 on Sen1Floods11; in NYC, RGB+NIR detected 9 of 13 FloodNet-observed wet site–dates versus 1 for RGB. A 5 m local-inertia flow model placed ponding near 4 of 5 sensors but underestimated depth.',
        zh: '在 Sen1Floods11 上加入近红外使水体 IoU 从 0.37 提高到 0.72；在纽约，RGB+NIR 检出 13 个 FloodNet 积水站点-日期中的 9 个，RGB 只有 1 个。5 m 网格的 local-inertia 地表流模型在 5 个传感器中的 4 个附近算出积水，但低估了水深。',
      },
    },
    {
      title: { en: 'Rooftop Solar Potential: From Segmentation to 3D Layout and Yield', zh: '屋顶太阳能潜力：从分割到三维排布与发电量' },
      role: { en: 'Course project and independent extension · Columbia University', zh: '课程项目与独立延伸 · 哥伦比亚大学' },
      date: { en: 'Sep 2024 – 2026', zh: '2024.09 – 2026' },
      text: {
        en: 'Course U-Net for RGB+NIR rooftop segmentation (IoU 0.61); extended to NYC LoD2 buildings with LiDAR-labeled obstacle detection, shading-aware layouts and per-panel annual energy (~1,360 kWh/kWp unshaded).',
        zh: '课程项目中用 RGB+NIR 训练 U-Net 分割屋顶（IoU 0.61）；之后扩展到纽约 LoD2 建筑，用 LiDAR 自动标签训练障碍物识别，考虑遮挡排布组件并估算每块组件的年发电量（无遮挡约 1,360 kWh/kWp）。',
      },
    },
    {
      title: { en: 'Ocean Surface CO₂ Reconstruction and Observing-Network Design', zh: '海洋表层 CO₂ 重建与观测网络设计' },
      role: { en: 'Course project and independent extension · Columbia University · Prof. Galen McKinley', zh: '课程项目与独立延伸 · 哥伦比亚大学 · Prof. Galen McKinley' },
      date: { en: 'Feb 2025 – Aug 2026', zh: '2025.02 – 2026.08' },
      text: {
        en: 'Simulation experiments with CMIP6 truth and SOCAT observing support: historical-density sampling raised MAE by 27.3% versus random; 1,000 gap-targeted additions cut RMSE by 3.126 µatm, 0.462 µatm more than random additions.',
        zh: '以 CMIP6 为真值、SOCAT 为采样格局的模拟实验：按历史观测密度采样比随机采样的 MAE 高 27.3%；补充 1,000 个空白区观测使 RMSE 降低 3.126 µatm，比随机补充多降 0.462 µatm。',
      },
    },
    {
      title: { en: 'Off-Site Ambient Temperature Bias in PV Performance Estimation', zh: '光伏性能估算中的场外环境温度偏差' },
      role: { en: 'Independent review · Columbia University', zh: '独立综述 · 哥伦比亚大学' },
      date: { en: 'Jan 2026 – Aug 2026', zh: '2026.01 – 2026.08' },
      text: {
        en: 'Semi-systematic review of 205 full texts; found no support for a universal station-distance threshold or globally superior temperature product, and proposed a layered framework linking representativeness, thermal–electrical propagation, correction and validation. Review manuscript prepared.',
        zh: '对 205 篇全文的半系统性综述；现有证据不支持通用的站点距离阈值或全球最优温度产品，并提出把代表性、热—电传播、校正和验证串起来的分层框架。已写成综述稿件。',
      },
    },
    {
      title: { en: 'North Atlantic Hurricane Tracks and ENSO', zh: '北大西洋飓风路径与 ENSO' },
      role: { en: 'Course project (team lead) and independent extension · Columbia University · Prof. Galen McKinley', zh: '课程项目（组长）与独立延伸 · 哥伦比亚大学 · Prof. Galen McKinley' },
      date: { en: 'Feb 2025 – Aug 2026', zh: '2025.02 – 2026.08' },
      text: {
        en: 'Course team found about 59% higher Category 3–5 frequency in warm AMO phases. Independent rebuild on 979 storms: 16.1 vs 11.0 named storms per year in La Niña vs El Niño seasons (1966–2025), with the track shift decomposed into type-mix and within-type parts.',
        zh: '课程小组发现 AMO 暖相位时 3–5 级飓风频率约高 59%。独立重做 979 个风暴的分析：1966–2025 年拉尼娜季每年 16.1 个命名风暴，厄尔尼诺季 11.0 个，并把路径偏移分解为类型构成和类型内部两部分。',
      },
    },
  ],

  teaching: [
    {
      title: { en: 'Graduate Teaching Assistant · SUMA 5715 Intelligent Energy Systems', zh: '研究生助教 · SUMA 5715 智能能源系统' },
      role: { en: 'Columbia Climate School & School of Professional Studies', zh: '哥伦比亚大学气候学院 & 职业研究学院' },
      date: { en: 'Jan 2026 – May 2026', zh: '2026.01 – 2026.05' },
      text: {
        en: 'Supported Prof. Joe Hao on AI-driven energy-system optimization, battery energy storage and grid modernization: grading, office hours, code-level guidance and instructional materials on forecasting, battery dispatch and price arbitrage. Started a minute-resolution battery storage simulation (BESS Twin) during the assistantship and developed it further afterward.',
        zh: '协助 Joe Hao 教授讲授 AI 驱动的能源系统优化、电池储能与电网现代化：批改作业、答疑、代码层面指导，并编写预测、电池调度与电价套利相关教学材料。助教期间开始开发按分钟模拟的储能平台（BESS Twin），之后继续完善。',
      },
    },
  ],

  courseProjects: [
    { title: { en: 'Neural network parameterization of ocean vertical mixing (deep-layer MAE −30%; correlation 0.62 → 0.85)', zh: '海洋垂直混合的神经网络参数化（深层 MAE 降 30%，相关系数 0.62 → 0.85）' }, date: '2025' },
    { title: { en: 'Wildfire burn-scar segmentation with the Prithvi foundation model · Columbia–IBM–DLR hackathon, team lead (burned-class IoU 0.75)', zh: '基于 Prithvi 基础模型的野火过火区分割 · Columbia–IBM–DLR 黑客松，队长（过火区 IoU 0.75）' }, date: '2024' },
    { title: { en: 'Energy-system and carbon-management modeling: wind integration and carbon tax in ISO New England; CO₂ capture to ethanol', zh: '能源系统与碳管理建模：ISO New England 风电并网与碳税；CO₂ 捕集制乙醇' }, date: '2024' },
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
    { label: { en: 'Methods & GIS', zh: '方法与 GIS' }, items: { en: 'Image segmentation, spectral unmixing, uncertainty quantification, conformal prediction, spatial validation, observing-system simulation; QGIS, ArcGIS, CAD', zh: '图像分割、光谱解混、不确定性量化、保形预测、空间验证、观测系统模拟；QGIS、ArcGIS、CAD' } },
    { label: { en: 'Laboratory', zh: '实验' }, items: { en: 'ICP-OES, ICP-MS, GC-MS, HPLC, multi-parameter water quality monitoring', zh: 'ICP-OES、ICP-MS、GC-MS、HPLC、多参数水质监测' } },
  ],
};
