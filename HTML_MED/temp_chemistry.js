
// ===== 试剂分类标签 =====
var CAT_LABELS = {
  med:{name:'医药',icon:'💊',badge:'badge-cat-med'},
  med2:{name:'二类药',icon:'⚠️',badge:'badge-cat-med2'},
  tox:{name:'毒素',icon:'☠️',badge:'badge-cat-tox'},
  pyro:{name:'火工',icon:'🔥',badge:'badge-cat-pyro'},
  drug:{name:'管控药品',icon:'🌿',badge:'badge-cat-drug'},
  food:{name:'食物',icon:'🍞',badge:'badge-cat-food'},
  gas:{name:'气体',icon:'💨',badge:'badge-cat-gas'},
  base:{name:'基础',icon:'🧪',badge:'badge-cat-base'},
  react:{name:'反应剂',icon:'🔄',badge:'badge-cat-react'},
  fert:{name:'肥料',icon:'🌱',badge:'badge-cat-fert'},
  mater:{name:'材料',icon:'🧱',badge:'badge-cat-mater'},
  bio:{name:'生物',icon:'🧬',badge:'badge-cat-bio'},
  other:{name:'其他',icon:'📦',badge:'badge-cat-other'}
};

// ===== 筛选组定义 =====
var FILTER_GROUPS = [
  {
    key:'cat',title:'试剂分类',icon:'🧪',cssClass:'tag-b',
    options:[
      {id:'med',n:'医药'},{id:'med2',n:'二类药'},{id:'tox',n:'毒素'},
      {id:'pyro',n:'火工'},{id:'drug',n:'管控药品'},{id:'food',n:'食物'},
      {id:'gas',n:'气体'},{id:'base',n:'基础'},{id:'react',n:'反应剂'},
      {id:'fert',n:'肥料'},{id:'mater',n:'材料'},{id:'bio',n:'生物'},
      {id:'other',n:'其他'}
    ]
  },
  {
    key:'effect',title:'效果类型',icon:'💊',cssClass:'tag-g',
    options:[
      {id:'治体表伤',n:'治体表伤'},{id:'治烧伤',n:'治烧伤'},{id:'治中毒',n:'治中毒'},
      {id:'治缺氧',n:'治缺氧'},{id:'治脑损',n:'治脑损'},{id:'治器官',n:'治器官'},
      {id:'解毒',n:'解毒'},{id:'兴奋',n:'兴奋'},{id:'镇静',n:'镇静'},
      {id:'致幻',n:'致幻'},{id:'抗组胺',n:'抗组胺'},{id:'抗辐射',n:'抗辐射'},
      {id:'抗感染',n:'抗感染'},{id:'冷冻',n:'冷冻'},{id:'加热',n:'加热'},
      {id:'止血',n:'止血'}
    ]
  },
  {
    key:'danger',title:'危险特性',icon:'⚠️',cssClass:'tag-r',
    options:[
      {id:'爆炸',n:'爆炸'},{id:'燃烧',n:'燃烧'},{id:'剧毒',n:'剧毒'},
      {id:'过量',n:'可过量'},{id:'成瘾',n:'成瘾性'},{id:'熔穿',n:'熔穿'},
      {id:'假死',n:'假死'},{id:'致聋',n:'致聋'},{id:'流血',n:'流血'}
    ]
  },
  {
    key:'temp',title:'反应温度',icon:'🌡️',cssClass:'tag-y',
    options:[
      {id:'冷反应',n:'冷反应'},{id:'常温',n:'常温'},{id:'高温',n:'高温(300+)'},
      {id:'极高温',n:'极高温(600+)'},{id:'窄温区',n:'窄温区'}
    ]
  }
];

// ===== 试剂数据 =====
var CHEMICALS = [
// ========== 基础化学试剂 ==========
{n:'水',en:'Water',cat:'base',color:'#AAAAAA77',ph:7,od:0,meta:1,desc:'由氢和氧组成的化学物质。可灭火、清洗酸、治疗肝脏、恢复血液、醒酒',effects:['灭火','清洗酸','恢复血液0.1/tick','醒酒','接触史莱姆造成伤害'],recipe:null,tags:[]},
{n:'盐水',en:'Saltwater',cat:'base',color:'#aaaaaa9d',ph:7,od:0,meta:1,desc:'水但咸的。可作为简易伤口外用药',effects:['止血','消毒','抗感染'],recipe:{r:[['盐水',2],['糖',1]],temp:'常温',ph_range:'-',purity:0,note:'盐+水混合'},tags:['解毒','止血']},
{n:'圣水',en:'Holy Water',cat:'base',color:'#E0E8EF',ph:7.5,od:0,meta:1,desc:'被神灵祝福的水。代谢25秒后(10u)开始祛除邪教。对邪恶特质生物造成伤害',effects:['祛除邪教','对邪恶生物伤害'],recipe:null,tags:[]},
{n:'血液',en:'Blood',cat:'base',color:'#C80000',ph:7.4,od:0,meta:12.5,desc:'悬浮在血浆中的血细胞。携带DNA/血型数据',effects:['携带DNA数据','植物增加害虫'],recipe:null,tags:['流血']},
{n:'糖',en:'Sugar',cat:'base',color:'#FFFFFF',ph:7,od:120,meta:5,desc:'蔗糖。白色无味结晶粉末。过量进入高血糖休克',effects:['过量时高血糖休克(睡眠20秒)','可能引起过敏'],recipe:null,tags:['过量']},
{n:'盐',en:'Salt',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'氯化钠',effects:['基础化学原料'],recipe:{r:[['钠',1],['氯',1]],temp:'常温',ph_range:'-',purity:0,note:'钠+氯'},tags:[]},
{n:'煤油',en:'Welding Fuel',cat:'base',color:'#2e2e2e',ph:7,od:0,meta:1,desc:'焊接燃料，基础有机化合物',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'碳',en:'Carbon',cat:'base',color:'#1c1c1c',ph:7,od:0,meta:1,desc:'基础元素，用于多种合成',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'氢',en:'Hydrogen',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'基础元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'氧',en:'Oxygen',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'基础元素，生命必需',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'氮',en:'Nitrogen',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'基础元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'氯',en:'Chlorine',cat:'base',color:'#FFFF00',ph:7,od:0,meta:1,desc:'基础元素，有毒',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'氟',en:'Fluorine',cat:'base',color:'#FFFF00',ph:7,od:0,meta:1,desc:'基础元素，极活泼',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'汞',en:'Mercury',cat:'base',color:'#888888',ph:7,od:0,meta:1,desc:'液态金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'锂',en:'Lithium',cat:'base',color:'#AAAAAA',ph:7,od:0,meta:1,desc:'碱金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'铝',en:'Aluminium',cat:'base',color:'#AAAAAA',ph:7,od:0,meta:1,desc:'金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'铁',en:'Iron',cat:'base',color:'#AAAAAA',ph:7,od:0,meta:1,desc:'金属元素',effects:['基础化学原料','可治愈某些疾病'],recipe:null,tags:[]},
{n:'铜',en:'Copper',cat:'base',color:'#b87333',ph:7,od:0,meta:1,desc:'金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'银',en:'Silver',cat:'base',color:'#D3D3D3',ph:7,od:0,meta:1,desc:'贵金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'金',en:'Gold',cat:'base',color:'#FFD700',ph:7,od:0,meta:1,desc:'贵金属元素，可作催化剂',effects:['基础化学原料','催化剂'],recipe:null,tags:[]},
{n:'磷',en:'Phosphorus',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'非金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'钾',en:'Potassium',cat:'base',color:'#AAAAAA',ph:7,od:0,meta:1,desc:'碱金属元素，遇水爆炸',effects:['遇水爆炸'],recipe:null,tags:['爆炸']},
{n:'镭',en:'Radium',cat:'base',color:'#00FF00',ph:7,od:0,meta:1,desc:'放射性元素',effects:['放射性'],recipe:null,tags:[]},
{n:'碘',en:'Iodine',cat:'base',color:'#4B0082',ph:7,od:0,meta:1,desc:'非金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'硫',en:'Sulfur',cat:'base',color:'#FFFF00',ph:7,od:0,meta:1,desc:'非金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'硅',en:'Silicon',cat:'base',color:'#888888',ph:7,od:0,meta:1,desc:'非金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'钠',en:'Sodium',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'碱金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'溴',en:'Bromine',cat:'base',color:'#8B0000',ph:7,od:0,meta:1,desc:'非金属元素',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'铀',en:'Uranium',cat:'base',color:'#4B0082',ph:7,od:0,meta:1,desc:'放射性元素',effects:['放射性'],recipe:null,tags:[]},
{n:'铅',en:'Lead',cat:'base',color:'#888888',ph:7,od:0,meta:1,desc:'重金属元素，有毒',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'乙醇',en:'Ethanol',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'酒精',effects:['基础化学原料','醒酒'],recipe:null,tags:[]},
{n:'酸',en:'Sulfuric Acid',cat:'base',color:'#FFFF00',ph:0,od:0,meta:1,desc:'硫酸，强酸',effects:['腐蚀','基础化学原料'],recipe:null,tags:['燃烧']},
{n:'氨',en:'Ammonia',cat:'base',color:'#00FF00',ph:11,od:0,meta:1,desc:'氨气溶于水',effects:['基础化学原料','有效肥料'],recipe:{r:[['氢',3],['氮',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'碱液',en:'Lye',cat:'base',color:'#FFFFFF',ph:14,od:0,meta:1,desc:'氢氧化钠',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'灰',en:'Ash',cat:'base',color:'#888888',ph:7,od:0,meta:1,desc:'灰烬',effects:['基础化学原料'],recipe:null,tags:[]},
{n:'苯酚',en:'Phenol',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'重要有机化工原料',effects:['基础化学原料'],recipe:{r:[['煤油',1],['碳',1],['氢',1],['水',3],['氯',3]],temp:'加热',ph_range:'-',purity:0,note:''},tags:[]},
{n:'丙酮',en:'Acetone',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'常用溶剂',effects:['基础化学原料','清洁'],recipe:{r:[['煤油',4],['碳',1],['氢',1],['氧',3]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'二乙胺',en:'Diethylamine',cat:'base',color:'#FFFFFF',ph:11,od:0,meta:1,desc:'有机碱，用于多种药物合成',effects:['基础化学原料','强效肥料'],recipe:{r:[['氢',30],['氮',10],['乙醇',30]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'硝石',en:'Saltpetre',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'氧化剂，用于火药和防腐',effects:['基础化学原料'],recipe:{r:[['钾',10],['氮',10],['氧',30]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'油',en:'Oil',cat:'base',color:'#2e2e2e',ph:7,od:0,meta:1,desc:'基础有机化合物',effects:['基础化学原料'],recipe:{r:[['煤油',1],['碳',1],['氢',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'甘油',en:'Glycerol',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'硝化甘油前体',effects:['基础化学原料'],recipe:{r:[['玉米油',3],['酸',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'稳定等离子体',en:'Stable Plasma',cat:'base',color:'#8228A0',ph:4,od:0,meta:1,desc:'可安全使用的等离子体',effects:['基础化学原料','催化剂'],recipe:{r:[['液态等离子体',1]],temp:'常温',ph_range:'-',purity:0,note:'催化剂: 稳定剂(1)'},tags:[]},
{n:'过氧化氢',en:'Hydrogen Peroxide',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'氧化剂，用于多种反应',effects:['基础化学原料','催化剂'],recipe:null,tags:[]},
{n:'一氧化二氮',en:'Nitrous Oxide',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'笑气，镇静剂',effects:['镇静','麻醉'],recipe:{r:[['氨',2],['氮',1],['氧',2]],temp:'525K+',ph_range:'-',purity:0,note:''},tags:['镇静','极高温']},
{n:'二氧化碳',en:'Carbon Dioxide',cat:'base',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'常见气体',effects:['基础化学原料'],recipe:{r:[['碳',1],['氧',2]],temp:'777K+',ph_range:'-',purity:0,note:''},tags:['极高温']},

// ========== 医药类 ==========
{n:'全效治疗剂',en:'Omnizine',cat:'med',color:'#FF00FF',ph:7,od:0,meta:1,desc:'同时治疗brute/burn/tox/oxy的万能药。极稀有',effects:['治体表伤','治烧伤','治中毒','治缺氧'],recipe:null,tags:['治体表伤','治烧伤','治中毒','治缺氧']},
{n:'原治疗剂',en:'Protozine',cat:'med',color:'#FF00FF',ph:7,od:0,meta:1,desc:'全效治疗剂的弱化版本',effects:['弱效治体表伤','弱效治烧伤','弱效治中毒','弱效治缺氧'],recipe:null,tags:['治体表伤','治烧伤','治中毒','治缺氧']},
{n:'雷波拉嗪',en:'Leporazine',cat:'med',color:'#DB90C6',ph:8.4,od:0,meta:1,desc:'有效调节患者体温，确保不会离开安全水平',effects:['调节体温至正常值','影响核心体温'],recipe:{r:[['硅',1],['铜',1]],temp:'常温',ph_range:'-',purity:0,note:'催化剂: Plasma(5)'},tags:[]},
{n:'突触素',en:'Synaptizine',cat:'med',color:'#FF00FF',ph:4,od:0,meta:1,desc:'增加对眩晕的抗性，减少嗜睡和幻觉',effects:['减少嗜睡5秒','减少不可动状态10','移除mindbreaker和histamine','减少幻觉10秒','16%几率0.5毒素伤害'],recipe:{r:[['糖',1],['锂',1],['水',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'冷冻素',en:'Cryoxadone',cat:'med',color:'#0000C8',ph:11,od:0,meta:1,desc:'有魔法般治疗力的混合物。患者体温须在270K以下才能正确代谢',effects:['体温低于0C:治缺氧(1.5*power)','治体表伤(0.5*power)','治烧伤(0.5*power)','治中毒(0.5*power)','伤口愈合','移除毁容','昏迷时效果翻倍'],recipe:null,tags:['冷冻']},
{n:'热氧素',en:'Pyroxadone',cat:'med',color:'#f7832a',ph:12,od:0,meta:1,desc:'冷冻素和史莱姆果冻的混合物，反转了激活条件',effects:['高温时治缺氧','治体表伤','治烧伤','治中毒','着火时效果翻倍'],recipe:null,tags:['加热']},
{n:'雷扎酮',en:'Rezadone',cat:'med',color:'#669900',ph:12.2,od:30,meta:1,desc:'从鱼毒素中提取的粉末，可恢复烧伤导致的husk状态并治疗轻伤',effects:['治体表伤 0.5/tick','治烧伤 0.5/tick','移除头部毁容','外用解除烧伤husk(5u+)'],recipe:{r:[['鲤鱼毒素',1],['隐生物素',1],['铜',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['过量']},
{n:'太空青霉素',en:'Spaceacillin',cat:'med',color:'#E1F2E6',ph:8.1,od:0,meta:0.1,desc:'提供对疾病和寄生虫的有限抗性，减少严重烧伤的感染',effects:['抗疾病','抗寄生虫','减少烧伤感染'],recipe:{r:[['隐生物素',1],['肾上腺素',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['抗感染']},
{n:'氧雄龙',en:'Oxandrolone',cat:'med',color:'#1E8BFF',ph:10.7,od:25,meta:0.5,desc:'刺激严重烧伤的愈合。极快地愈合严重烧伤，缓慢愈合轻微烧伤',effects:['burn>25时治烧伤 4/tick','burn<=25时治烧伤 0.5/tick'],recipe:{r:[['碳',3],['苯酚',1],['氢',1],['氧',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['治烧伤','过量']},
{n:'盐水葡萄糖溶液',en:'Saline-Glucose Solution',cat:'med',color:'#DCDCDC',ph:7,od:60,meta:0.5,desc:'每代谢周期33%几率治疗brute和burn伤害。可作临时血液替代品',effects:['33%几率治体表伤','33%几率治烧伤','临时血液替代品','加速血液再生'],recipe:{r:[['盐水',2],['糖',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['治体表伤','治烧伤','过量']},
{n:'麻黄碱',en:'Ephedrine',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'兴奋剂类，加速和恢复stamina',effects:['减少眩晕','恢复stamina','加速'],recipe:{r:[['糖',1],['油',1],['氢',1],['二乙胺',1]],temp:'200-500K',ph_range:'7-9',purity:0.32,note:'过热爆炸!'},tags:['兴奋','高温']},
{n:'苯海拉明',en:'Diphenhydramine',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'抗组胺药，减少嗜睡、幻觉和组胺',effects:['抗组胺','减少嗜睡','减少幻觉'],recipe:{r:[['油',1],['碳',1],['溴',1],['二乙胺',1],['乙醇',1]],temp:'常温',ph_range:'-',purity:0,note:'混合物干燥成淡蓝色粉末'},tags:['抗组胺']},
{n:'阿托品',en:'Atropine',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'急救药物，用于心脏急救',effects:['心脏急救','减少心率'],recipe:{r:[['乙醇',1],['丙酮',1],['二乙胺',1],['苯酚',1],['酸',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'肾上腺素',en:'Epinephrine',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'急救药物，减少眩晕和恢复stamina',effects:['减少眩晕','恢复stamina','心脏急救'],recipe:{r:[['苯酚',1],['丙酮',1],['二乙胺',1],['氧',1],['氯',1],['氢',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['兴奋']},
{n:'甘露醇',en:'Mannitol',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗脑损伤',effects:['治脑损'],recipe:{r:[['糖',1],['氢',1],['水',1]],temp:'50-650K',ph_range:'5-7.5',purity:0.4,note:'过热释放攻击性化学物质烟雾'},tags:['治脑损','高温']},
{n:'神经素',en:'Neurine',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗神经损伤',effects:['治神经损伤'],recipe:{r:[['甘露醇',1],['丙酮',1],['氧',1]],temp:'100-700K',ph_range:'6.8-10',purity:0.4,note:''},tags:['治脑损','高温']},
{n:'甘汞',en:'Calomel',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'净化剂，快速排出体内其他试剂',effects:['快速排出体内试剂'],recipe:{r:[['汞',1],['氯',1]],temp:'374K+',ph_range:'-',purity:0,note:''},tags:['高温','解毒']},
{n:'氨化汞',en:'Ammoniated Mercury',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'汞的氨化产物',effects:['清除毒素'],recipe:{r:[['甘汞',1],['氨',2]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['解毒']},
{n:'碘化钾',en:'Potassium Iodide',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'抗辐射药物',effects:['抗辐射'],recipe:{r:[['钾',1],['碘',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['抗辐射']},
{n:'青酸',en:'Penetic Acid',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'强力净化剂，清除体内毒素',effects:['清除毒素','清除重金属'],recipe:{r:[['煤油',1],['氨',1],['甲醛',1],['盐',1],['氰化物',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['解毒']},
{n:'水杨酸',en:'Salicylic Acid',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗brute伤害',effects:['治体表伤'],recipe:{r:[['钠',1],['苯酚',1],['碳',1],['氧',1],['酸',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['治体表伤']},
{n:'沙丁胺醇',en:'Salbutamol',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗氧气不足',effects:['治缺氧','减少losebreath'],recipe:{r:[['水杨酸',1],['锂',1],['铝',1],['溴',1],['氨',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['治缺氧']},
{n:'阿布特罗',en:'Albuterol',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'高级氧气治疗药物',effects:['治缺氧'],recipe:{r:[['锂',3],['铝',3],['溴',3],['康弗莫',1]],temp:'400-900K',ph_range:'-',purity:0,note:''},tags:['治缺氧','高温']},
{n:'合成肉',en:'Synthflesh',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'同时治疗brute和burn的外用药',effects:['外用治体表伤','外用治烧伤'],recipe:{r:[['血液',1],['碳',1],['利必妥',1]],temp:'250-325K',ph_range:'5.5-9.5',purity:0.3,note:''},tags:['治体表伤','治烧伤','高温']},
{n:'矿工药膏',en:'Mine Salve',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'同时治疗brute和burn',effects:['治体表伤','治烧伤'],recipe:{r:[['油',1],['水',1],['铁',1]],temp:'常温',ph_range:'-',purity:0,note:'替代配方: plasma(5)+铁(5)+糖(1)=15u'},tags:['治体表伤','治烧伤']},
{n:'眼药',en:'Oculine',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗眼部损伤',effects:['治眼损伤','恢复视力'],recipe:{r:[['蒙提弗',1],['碳',1],['氢',1]],temp:'200-600K',ph_range:'4.8-8.5',purity:0,note:'过热闪光!'},tags:['治器官','高温']},
{n:'听力恢复剂',en:'Inacusiate',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗耳部损伤，恢复听力',effects:['治耳损伤','恢复听力'],recipe:{r:[['水',1],['碳',1],['蒙提弗',1]],temp:'300-500K',ph_range:'5-10',purity:0,note:'过热巨响致聋!'},tags:['治器官','高温']},
{n:'奇异试剂',en:'Strange Reagent',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'可复活死者的特殊药剂',effects:['复活死者(头部完好)'],recipe:{r:[['全效治疗剂',1],['圣水',1],['诱变剂',1]],temp:'常温',ph_range:'-',purity:0,note:'替代: protozine(1)+圣水(1)+诱变剂(1)=2u'},tags:[]},
{n:'鱼腥试剂',en:'Fishy Reagent',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'鱼类版奇异试剂',effects:['复活鱼类生物'],recipe:{r:[['全效治疗剂',1],['盐水',1],['鲤鱼毒素',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'吗啡',en:'Morphine',cat:'med',color:'#FFFFFF',ph:7,od:30,meta:1,desc:'镇痛剂，减少疼痛和眩晕',effects:['镇痛','减少眩晕','过量昏迷'],recipe:null,tags:['镇静','过量']},
{n:'维特尔',en:'Wittel',cat:'med',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'催化剂前体药物',effects:['催化剂前体'],recipe:null,tags:[]},

// ========== 二类医药（有副作用）==========
{n:'冥府药',en:'Helbital',cat:'med2',color:'#9400D3',ph:8,od:35,meta:1,desc:'以Hel命名。患者越接近死亡，brute治疗效果越好。非濒死时造成窒息',effects:['治体表伤(随濒死程度增加)','清醒时:2 oxy/tick','软crit:1 oxy/tick','深度昏迷:纯治疗','0.5%几率死神秘戏'],recipe:{r:[['糖',1],['氟',1],['碳',1]],temp:'250-550K',ph_range:'5-9.5',purity:0.55,note:'过热火焰涡旋'},tags:['治体表伤','过量','高温']},
{n:'利必妥',en:'Libital',cat:'med2',color:'#ECEC8D',ph:8.2,od:0,meta:1,desc:'治瘀伤药。造成轻微肝损伤',effects:['治体表伤 3/tick','造成0.3肝损伤/tick'],recipe:{r:[['苯酚',1],['氧',1],['氮',1]],temp:'225-840K',ph_range:'6-10',purity:0.2,note:''},tags:['治体表伤','高温']},
{n:'普必妥',en:'Probital',cat:'med2',color:'#FFFF6B',ph:5.5,od:20,meta:1,desc:'健身补充剂，快速修复肌肉组织但导致乳酸堆积',effects:['治体表伤 3/tick','增加stamina伤害(2-3.5/tick)','口服5%转化为metafactor'],recipe:{r:[['铜',1],['丙酮',2],['磷',1]],temp:'225-750K',ph_range:'4.5-12',purity:0.35,note:''},tags:['治体表伤','过量','高温']},
{n:'伦图里',en:'Lenturi',cat:'med2',color:'#6171FF',ph:4.7,od:0,meta:1,desc:'治疗烧伤。离开系统时造成胃损伤',effects:['治烧伤 3.75/tick','造成0.4胃损伤/tick'],recipe:{r:[['氨',1],['银',1],['硫',1],['氧',1],['氯',1]],temp:'200-500K',ph_range:'6-11',purity:0.25,note:'吸热反应'},tags:['治烧伤','高温']},
{n:'艾乌里',en:'Aiuri',cat:'med2',color:'#8C93FF',ph:4,od:0,meta:1,desc:'治疗烧伤。造成轻微眼损伤',effects:['治烧伤 2/tick','造成0.25眼损伤/tick'],recipe:{r:[['氨',1],['酸',1],['氢',2]],temp:'50-315K',ph_range:'4.8-9',purity:0.25,note:'过热闪光+致聋'},tags:['治烧伤']},
{n:'赫库里',en:'Hercuri',cat:'med2',color:'#F7FFA5',ph:8.9,od:25,meta:1,desc:'逆转高温环境危险效果。长期接触可致体温过低',effects:['治烧伤(2.25-3/tick)','降低体温','降低化学温度','减少火焰层数'],recipe:{r:[['冷凝素',3],['溴',1],['碱液',1]],temp:'冷反应! 10-47K',ph_range:'6-10',purity:0.15,note:''},tags:['治烧伤','冷反应','过量','冷冻']},
{n:'康弗莫',en:'Convermol',cat:'med2',color:'#FF6464',ph:5.6,od:35,meta:1,desc:'恢复氧气不足同时产生较少的毒性副产物',effects:['治缺氧(随周期递增)','产生tox(1/5治疗量)','几率减少losebreath'],recipe:{r:[['氢',1],['氟',1],['油',1]],temp:'370-570K',ph_range:'3-8.5',purity:0.25,note:'有氧时反应更快'},tags:['治缺氧','过量','高温']},
{n:'替里莫',en:'Tirimol',cat:'med2',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗氧气不足的二类药',effects:['治缺氧'],recipe:{r:[['氮',3],['丙酮',2]],temp:'最佳900K',ph_range:'5-7.1',purity:0.2,note:'催化剂: 酸(1)+氧(1)'},tags:['治缺氧','极高温']},
{n:'西弗',en:'Seiver',cat:'med2',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗毒素的二类药',effects:['治中毒'],recipe:{r:[['氮',1],['钾',1],['铝',1]],temp:'冷反应! 280-320K',ph_range:'5-8',purity:0.2,note:''},tags:['治中毒','冷反应']},
{n:'蒙提弗',en:'Multiver',cat:'med2',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗毒素的二类药',effects:['治中毒'],recipe:{r:[['灰',1],['盐',1]],temp:'380-410K',ph_range:'5-9.5',purity:0.1,note:'过热Monover燃烧'},tags:['治中毒','高温']},
{n:'锡里尼弗',en:'Syriniver',cat:'med2',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗毒素的二类药',effects:['治中毒'],recipe:{r:[['硫',1],['氟',1],['毒素',1],['一氧化二氮',2]],temp:'250K+',ph_range:'6.5-9',purity:0.3,note:''},tags:['治中毒','高温']},
{n:'喷特莱特',en:'Penthrite',cat:'med2',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'治疗毒素，但有爆炸风险。与肾上腺素或阿托品混合会爆炸',effects:['治中毒'],recipe:{r:[['季戊四醇',1],['丙酮',1],['硝混酸',1],['维特尔',1]],temp:'255-450K',ph_range:'5-9',purity:0.55,note:'过热心跳冲击波! +肾上腺素=爆炸!'},tags:['治中毒','爆炸','高温']},

// ========== 毒素类 ==========
{n:'毒素',en:'Toxin',cat:'tox',color:'#CF3600',ph:7,od:0,meta:1,desc:'有毒化学物质',effects:['每tick 0.5*toxpwr*纯度毒素伤害','toxpwr=1.5'],recipe:null,tags:['剧毒']},
{n:'鹅膏毒素',en:'Amatoxin',cat:'tox',color:'#792300',ph:13,od:0,meta:1,desc:'从某些蘑菇中提取的强毒',effects:['每tick 0.5*2.5*纯度毒素伤害'],recipe:null,tags:['剧毒']},
{n:'不稳定诱变剂',en:'Unstable Mutagen',cat:'tox',color:'#00FF00',ph:2.3,od:0,meta:1,desc:'可能导致不可预测突变。远离儿童',effects:['接触98%负面突变','2%正面突变','代谢0.25毒素/tick'],recipe:{r:[['镭',1],['磷',1],['氯',1]],temp:'100-900K',ph_range:'3-9',purity:0.7,note:''},tags:['高温']},
{n:'液态等离子体',en:'Plasma',cat:'tox',color:'#8228A0',ph:4,od:0,meta:1,desc:'液态形式的等离子体。沸点50C',effects:['toxpwr=3','移除肾上腺素','增加plasma暴露','增加火焰层数','可爆炸'],recipe:null,tags:['剧毒','燃烧','爆炸']},
{n:'热冰泥',en:'Hot Ice Slush',cat:'tox',color:'#724cb8',ph:7,od:0,meta:1,desc:'冷冻等离子体，价值连城',effects:['toxpwr=3','同plasma','额外降低体温'],recipe:null,tags:['剧毒','冷冻']},
{n:'勒克索林',en:'Lexorin',cat:'tox',color:'#7DC3A0',ph:1.2,od:0,meta:1,desc:'停止呼吸的强毒',effects:['2.5 oxy伤害/tick','增加1 losebreath/tick','阻止呼吸','10%几率gasp'],recipe:{r:[['液态等离子体',1],['氢',1],['沙丁胺醇',1]],temp:'100-900K',ph_range:'1.8-7',purity:0.4,note:''},tags:['剧毒','高温']},
{n:'史莱姆果冻',en:'Slime Jelly',cat:'tox',color:'#a6959d',ph:10,od:0,meta:1,desc:'由最致命生物之一产生的粘稠半液体',effects:['5%几率造成20-60随机毒素伤害','23%几率治疗5点brute'],recipe:null,tags:['剧毒']},
{n:'鲤鱼毒素',en:'Carpotoxin',cat:'tox',color:'#003333',ph:12,od:0,meta:1,desc:'太空鲤鱼产生的致命神经毒素',effects:['toxpwr=1'],recipe:null,tags:['剧毒']},
{n:'僵尸粉',en:'Zombie Powder',cat:'tox',color:'#669900',ph:13,od:0,meta:1,desc:'使患者进入假死状态的强神经毒素',effects:['假死状态','持续oxy损伤','吸入更快生效'],recipe:{r:[['鲤鱼毒素',5],['吗啡',5],['铜',5]],temp:'100-900K',ph_range:'5-14',purity:0.3,note:''},tags:['假死','高温']},
{n:'食尸鬼粉',en:'Ghoul Powder',cat:'tox',color:'#669900',ph:7,od:0,meta:1,desc:'丧尸粉与肾上腺素的混合物',effects:['假死(较短)','增加心率'],recipe:{r:[['僵尸粉',1],['肾上腺素',1]],temp:'100-900K',ph_range:'-',purity:0,note:''},tags:['假死','高温']},
{n:'甲醛',en:'Formaldehyde',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'有毒化学品',effects:['每tick 1毒素伤害','5%几率变为5-15u histamine'],recipe:{r:[['乙醇',1],['氧',1],['银',1]],temp:'420-900K',ph_range:'0-7',purity:0.5,note:''},tags:['高温']},
{n:'芬太尼',en:'Fentanyl',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'强效危险品',effects:['1毒素+3脑损伤/tick','18周期后昏迷'],recipe:{r:[['太空毒品',1]],temp:'674-874K',ph_range:'7-11',purity:0.5,note:''},tags:['剧毒','极高温']},
{n:'氰化物',en:'Cyanide',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'致命毒物，有杏仁味',effects:['随机毒素伤害','缓慢窒息','眩晕'],recipe:{r:[['油',1],['氨',1],['氧',1]],temp:'380K+',ph_range:'9-11',purity:0.4,note:'无过热上限'},tags:['剧毒','高温']},
{n:'水合氯醛',en:'Chloral Hydrate',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'镇静剂，可致昏迷',effects:['10周期后昏迷','51周期后递增毒素伤害'],recipe:{r:[['乙醇',1],['氯',3],['水',1]],temp:'200-900K',ph_range:'7-9',purity:0.6,note:''},tags:['镇静','高温']},
{n:'沉默毒素',en:'Mute Toxin',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'使目标无法说话',effects:['沉默'],recipe:{r:[['铀',2],['水',1],['碳',1]],temp:'100-900K',ph_range:'6-14',purity:0.4,note:''},tags:['高温']},
{n:'肝素',en:'Heparin',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'抗凝血药，导致持续流血',effects:['持续流血','1 brute + 消耗1%+血液/tick'],recipe:{r:[['甲醛',1],['盐',1],['锂',1]],temp:'100-800K',ph_range:'5-9.5',purity:0.6,note:''},tags:['流血','高温']},
{n:'旋转毒',en:'Rotatium',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'使画面旋转的致幻毒素',effects:['20周期后画面旋转','0.5毒素/tick'],recipe:{r:[['致幻剂',1],['特斯拉素',1],['芬太尼',1]],temp:'100-900K',ph_range:'3-9',purity:0.6,note:''},tags:['致幻','高温']},
{n:'安纳西',en:'Anacea',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'极慢代谢的药物清除剂',effects:['每tick清除5u药物','0.15毒素伤害/tick'],recipe:{r:[['氟哌啶醇',1],['阻抗素',1],['镭',1]],temp:'100-900K',ph_range:'6-9',purity:0.7,note:''},tags:['解毒','高温']},
{n:'伤骨汁',en:'Bone Hurting Juice',cat:'tox',color:'#FFFFFF',ph:7,od:50,meta:1,desc:'伤害骨骼的恶搞毒药',effects:['15 stamina/tick','骷髅/等离子人: 15 stamina+0.5 brute','过量200随机肢体伤害'],recipe:{r:[['诱变剂',1],['痒痒粉',3],['牛奶',1]],temp:'100-900K',ph_range:'5-9',purity:0.4,note:''},tags:['过量','高温']},
{n:'嗜血血液',en:'Carnivorous Blood',cat:'tox',color:'#C80000',ph:7,od:0,meta:1.5,desc:'Interdyne开发的生物制剂，消耗训练时接触的血液',effects:['消耗血液2/tick(死者翻倍,匹配DNA翻3倍)','10%几率血液蠕动'],recipe:null,tags:['流血']},
{n:'痒痒粉',en:'Itching Powder',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'导致剧烈瘙痒',effects:['剧烈瘙痒'],recipe:{r:[['煤油',1],['氨',1],['蒙提弗',1]],temp:'280K+',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'氟硫酸',en:'Fluorosulfuric Acid',cat:'tox',color:'#FFFFFF',ph:0,od:0,meta:1,desc:'强腐蚀酸',effects:['严重腐蚀'],recipe:{r:[['酸',1],['氟',1],['氢',1],['钾',1]],temp:'380K+',ph_range:'-',purity:0,note:''},tags:['燃烧','高温']},
{n:'硝酸',en:'Nitracid',cat:'tox',color:'#FFFFFF',ph:0,od:0,meta:1,desc:'强酸',effects:['强腐蚀'],recipe:{r:[['氟硫酸',1],['氮',1],['过氧化氢',1]],temp:'480K+',ph_range:'-',purity:0,note:''},tags:['燃烧','极高温']},
{n:'硫代甲醛',en:'Sulfonal',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'镇静毒药',effects:['镇静','缓慢昏迷'],recipe:{r:[['丙酮',1],['二乙胺',1],['硫',1]],temp:'100K+',ph_range:'-',purity:0,note:''},tags:['镇静','高温']},
{n:'脂肪分解素',en:'Lipolicide',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'分解体内脂肪/营养',effects:['消耗脂肪','消耗营养'],recipe:{r:[['汞',1],['二乙胺',1],['麻黄碱',1]],temp:'100K+',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'致幻毒素',en:'Mindbreaker Toxin',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'强力致幻剂，太空法非法物质',effects:['强力幻觉','严重眩晕'],recipe:{r:[['硅',1],['氢',1],['蒙提弗',1]],temp:'100K+',ph_range:'-',purity:0,note:''},tags:['致幻','高温']},
{n:'哑剧克星',en:'Mime\'s Bane',cat:'tox',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'针对哑剧演员的毒素',effects:['沉默','对哑剧演员额外伤害'],recipe:{r:[['镭',1],['沉默毒素',1],['虚无',1]],temp:'100K+',ph_range:'-',purity:0,note:''},tags:['高温']},

// ========== 火工/爆炸类 ==========
{n:'稳定剂',en:'Stabilizing Agent',cat:'pyro',color:'#FFFF00',ph:7,od:0,meta:1,desc:'保持不稳定化学物质稳定。不是对所有东西有效',effects:['阻止爆炸反应','植物降低不稳定度'],recipe:{r:[['铁',1],['氧',1],['氢',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'铝热剂',en:'Thermite',cat:'pyro',color:'#550000',ph:7,od:0,meta:1,desc:'铝热反应，可熔化墙壁',effects:['代谢0.5 burn/tick','涂抹地板可熔穿'],recipe:{r:[['铝',1],['铁',1],['氧',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['熔穿','燃烧']},
{n:'硝化甘油',en:'Nitroglycerin',cat:'pyro',color:'#888888',ph:7,od:0,meta:1,desc:'重质无色油状液体。治疗心脏病也用于制造炸药',effects:['代谢治心脏0.5/tick','火花触发爆炸','474K爆炸'],recipe:{r:[['甘油',1],['硝混酸',1],['酸',1]],temp:'立即反应',ph_range:'-',purity:0,note:'有exotic_stabilizer时不爆'},tags:['爆炸','燃烧']},
{n:'三氟化氯',en:'CLF3',cat:'pyro',color:'#FFC8C8',ph:7,od:0,meta:10,desc:'极易燃液体，能烧穿空间站外壳。生成时即爆炸成火球',effects:['增加火焰层0.1/tick','火伤0.015*fire_stacks/tick','接触:点燃+增加火焰层','可破坏地板'],recipe:{r:[['氯',1],['氟',3]],temp:'424K',ph_range:'-',purity:0,note:'生成即火球! 温度升至1000K'},tags:['燃烧','爆炸','熔穿']},
{n:'索里姆',en:'Sorium',cat:'pyro',color:'#5A64C8',ph:7,od:0,meta:1,desc:'从爆炸点将一切弹飞',effects:['火花触发涡旋(range=1-6)','将物体向外推'],recipe:{r:[['汞',1],['氧',1],['氮',1],['碳',1]],temp:'常温',ph_range:'-',purity:0,note:'474K触发涡旋。有稳定剂不爆'},tags:['爆炸']},
{n:'液态暗物质',en:'Liquid Dark Matter',cat:'pyro',color:'#210021',ph:7,od:0,meta:1,desc:'将一切吸入爆炸点',effects:['火花触发反向涡旋(吸入)'],recipe:{r:[['稳定等离子体',1],['镭',1],['碳',1]],temp:'常温',ph_range:'-',purity:0,note:'有稳定剂不爆'},tags:['爆炸']},
{n:'火药',en:'Gunpowder',cat:'pyro',color:'#000000',ph:7,od:0,meta:0.125,desc:'爆炸。暴力地。',effects:['474K或足够电荷爆炸','有稳定剂消耗稳定剂'],recipe:{r:[['硝石',1],['蒙提弗',1],['硫',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['爆炸']},
{n:'RDX',en:'RDX',cat:'pyro',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'军用级炸药',effects:['爆炸','+液态电:更大爆炸','+特斯拉素:最大爆炸'],recipe:{r:[['苯酚',2],['硝混酸',1],['丙酮氧化物',1]],temp:'404K',ph_range:'-',purity:0,note:'催化剂: 金。474K爆炸'},tags:['爆炸','高温']},
{n:'TATP',en:'TaTP',cat:'pyro',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'自杀级炸药',effects:['极强爆炸'],recipe:{r:[['丙酮氧化物',1],['硝混酸',1],['季戊四醇',1]],temp:'450K(随机±49)',ph_range:'-',purity:0,note:'550K爆炸(随机±49)'},tags:['爆炸','高温']},
{n:'闪光粉',en:'Flash Powder',cat:'pyro',color:'#C8C8C8',ph:7,od:0,meta:1,desc:'产生极亮闪光',effects:['闪光+瘫痪','掉落物品'],recipe:{r:[['铝',1],['钾',1],['硫',1]],temp:'常温',ph_range:'-',purity:0,note:'混合即闪光'},tags:['爆炸']},
{n:'烟雾粉',en:'Smoke Powder',cat:'pyro',color:'#C8C8C8',ph:7,od:0,meta:1,desc:'产生可携带试剂的大烟雾',effects:['释放携带试剂的烟雾','碳基生物肺损伤'],recipe:{r:[['磷',1],['钾',1],['糖',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['爆炸']},
{n:'声波粉',en:'Sonic Powder',cat:'pyro',color:'#C8C8C8',ph:7,od:0,meta:1,desc:'产生震耳欲聋的噪音',effects:['致聋'],recipe:null,tags:['爆炸','致聋']},
{n:'燃素',en:'Phlogiston',cat:'pyro',color:'#FA00AF',ph:7,od:0,meta:1,desc:'点燃你并使你自燃',effects:['接触:增加1火焰层+点燃+0.3*fire_stacks burn','代谢:增加0.5火焰层/tick'],recipe:null,tags:['燃烧']},
{n:'凝固汽油',en:'Napalm',cat:'pyro',color:'#FA00AF',ph:7,od:0,meta:1,desc:'极易燃',effects:['代谢增加0.5火焰层/tick','接触:增加min(volume/4,20)火焰层'],recipe:{r:[['铝',1],['液态等离子体',1],['酸',1]],temp:'常温',ph_range:'-',purity:0,note:'混合即起火'},tags:['燃烧']},
{n:'冷凝素',en:'Cryostylane',cat:'pyro',color:'#0000DC',ph:8.6,od:0,meta:0.05,desc:'在患者器官中诱导低温休眠状态。与氧气反应时消耗氧气并将容器温度降至0K',effects:['死亡时暂停腐烂','手术速度减慢(1.1-1.5倍)','有氧气时降温至0K'],recipe:null,tags:['冷冻']},
{n:'蜂爆',en:'Bee-splosion',cat:'pyro',color:'#FFD700',ph:7,od:0,meta:1,desc:'产生大量蜜蜂',effects:['产生蜜蜂群'],recipe:{r:[['蜂蜜',1],['奇异试剂',1],['镭',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['爆炸']},
{n:'钾爆炸',en:'Potassium Explosion',cat:'pyro',color:'#AAAAAA',ph:7,od:0,meta:1,desc:'钾遇水即爆炸',effects:['混合即爆炸'],recipe:{r:[['水',1],['钾',1]],temp:'常温',ph_range:'-',purity:0,note:'混合即爆炸'},tags:['爆炸']},

// ========== 管控药品类 ==========
{n:'太空毒品',en:'Space Drugs',cat:'drug',color:'#60A584',ph:9,od:30,meta:1,desc:'非法化学化合物，管控物质',effects:['致幻30秒/tick','5%随机移动','3.5%抽搐/流口水','过量:严重幻觉'],recipe:{r:[['汞',1],['糖',1],['锂',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['致幻','成瘾','过量']},
{n:'大麻',en:'Cannabis',cat:'drug',color:'#059033',ph:6,od:0,meta:0.125,desc:'植物提取的精神活性物质',effects:['stoned状态','1%放松','2%微笑/大笑','减少营养','4%睡着','4% couchlock','安抚猴子'],recipe:null,tags:['致幻']},
{n:'尼古丁',en:'Nicotine',cat:'drug',color:'#60A584',ph:8,od:15,meta:0.125,desc:'轻微减少眩晕时间。过量造成毒素和氧气伤害',effects:['减少不可动20秒/tick','改善心情','移除颤抖','过量:0.4毒素+4.4 oxy/tick'],recipe:null,tags:['兴奋','成瘾','过量']},
{n:'鳄鱼药',en:'Krokodil',cat:'drug',color:'#0064B4',ph:9,od:20,meta:1,desc:'使你冷静。过量造成严重脑和毒素损伤',effects:['2.5%冷静','36周期后皮肤脱落(25 brute)','过量:0.25脑损+0.25毒素/tick'],recipe:{r:[['苯海拉明',1],['吗啡',1],['太空清洁剂',1],['钾',1],['磷',1],['煤油',1]],temp:'380K',ph_range:'-',purity:0,note:''},tags:['成瘾','过量','高温']},
{n:'甲基苯丙胺',en:'Methamphetamine',cat:'drug',color:'#78C8FA',ph:5,od:20,meta:0.75,desc:'冰毒。减少眩晕约300%，加速用户，快速恢复stamina。过热或纯度过低会爆炸',effects:['减少不可动26.67/tick','恢复stamina 3.34/tick','颤抖','0.67脑损伤/tick','过量随机移动/毒素'],recipe:{r:[['麻黄碱',1],['碘',1],['磷',1],['氢',1]],temp:'372-380K(极窄!)',ph_range:'6.5-7.5(极窄!)',purity:0.5,note:'过热/不纯爆炸! strengthdiv=12'},tags:['兴奋','成瘾','过量','爆炸','窄温区','高温']},
{n:'浴盐',en:'Bath Salts',cat:'drug',color:'#FAFAFA',ph:8.2,od:20,meta:1,desc:'使你免疫眩晕，授予stamina恢复buff，但变成几乎无法控制的疯子',effects:['免疫所有眩晕+睡眠','恢复stamina 6/tick','4脑损/tick','10秒幻觉/tick','每tick随机移动2步','psychotic brawling创伤'],recipe:{r:[['坏食物',1],['硝石',1],['营养素',1],['太空清洁剂',1],['酶',1],['茶',1],['汞',1]],temp:'374K',ph_range:'-',purity:0,note:''},tags:['兴奋','成瘾','致幻','过量','高温']},
{n:'阿兰内斯普',en:'Aranesp',cat:'drug',color:'#78FFF0',ph:7,od:0,meta:1,desc:'提神，加速，快速恢复stamina。副作用包括呼吸困难和毒性',effects:['恢复stamina 18/tick(极强!)','0.5毒素/tick'],recipe:{r:[['肾上腺素',1],['阿托品',1],['吗啡',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['兴奋','成瘾']},
{n:'快乐药',en:'Happiness',cat:'drug',color:'#FFD700',ph:7,od:0,meta:1,desc:'情绪增强剂',effects:['增强情绪','减少恐惧'],recipe:{r:[['一氧化二氮',2],['肾上腺素',1],['乙醇',1]],temp:'常温',ph_range:'-',purity:0,note:'催化剂: Plasma(5)'},tags:['兴奋','成瘾']},
{n:'兴奋剂',en:'Pump Up',cat:'drug',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'短时兴奋剂',effects:['短时兴奋','恢复stamina'],recipe:{r:[['肾上腺素',2],['咖啡',5]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['兴奋','成瘾']},
{n:'管道焦油',en:'Maint Tar',cat:'drug',color:'#1a1a2e',ph:7,od:0,meta:1,desc:'管控前体，从管道废物中提取',effects:['管控前体'],recipe:{r:[['茶',1],['Yuck',1],['煤油',1]],temp:'常温',ph_range:'-',purity:0,note:'替代: 茶(1)+酶(3)+煤油(1)。产出3焦油+1硫酸'},tags:['成瘾']},
{n:'管道污泥',en:'Maint Sludge',cat:'drug',color:'#2a1a3e',ph:7,od:0,meta:1,desc:'管控前体',effects:['管控前体'],recipe:{r:[['管道焦油',3],['氟硫酸',1]],temp:'常温',ph_range:'-',purity:0,note:'催化剂: 过氧化氢(5)'},tags:['成瘾']},
{n:'管道粉末',en:'Maint Powder',cat:'drug',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'最终管控产物',effects:['特殊效果'],recipe:{r:[['管道污泥',6],['硝酸',1],['酶',1]],temp:'常温',ph_range:'-',purity:0,note:'催化剂: 丙酮氧化物(5)'},tags:['成瘾']},
{n:'月亮石',en:'Moon Rock',cat:'drug',color:'#C0C0C0',ph:7,od:0,meta:1,desc:'产生固体管控物品',effects:['固体管控物','致幻'],recipe:{r:[['Kronkus提取物',15],['煤油',5],['氨',3]],temp:'常温',ph_range:'-',purity:0,note:'变体: 用碱液替换氨'},tags:['成瘾','致幻']},

// ========== 食物/饮料类 ==========
{n:'营养素',en:'Nutriment',cat:'food',color:'#664330',ph:7,od:0,meta:1,desc:'身体所需的所有维生素、矿物质和碳水化合物的纯形式',effects:['30%几率治体表伤 0.5/tick','携带食物味道'],recipe:null,tags:['治体表伤']},
{n:'维生素',en:'Vitamin',cat:'food',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'最好的维生素、矿物质和碳水化合物',effects:['同营养素','增加satity 15/tick'],recipe:null,tags:['治体表伤']},
{n:'蛋白质',en:'Protein',cat:'food',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'由氨基酸组成的天然聚酰胺',effects:['治体表伤 0.8/tick'],recipe:null,tags:['治体表伤']},
{n:'脂肪',en:'Fat',cat:'food',color:'#f0eed7',ph:7,od:0,meta:1,desc:'植物油和动物脂肪组织中的甘油三酯',effects:['治烧伤 1/tick','热油可炸食物/造成烧伤','洒地上使人滑倒'],recipe:null,tags:['治烧伤']},
{n:'植物油',en:'Vegetable Oil',cat:'food',color:'#EADD6B',ph:7,od:10,meta:1,desc:'植物油',effects:['基础食物油'],recipe:null,tags:[]},
{n:'橄榄油',en:'Olive Oil',cat:'food',color:'#DBCF5C',ph:7,od:0,meta:1,desc:'橄榄油',effects:['基础食物油'],recipe:null,tags:[]},
{n:'玉米油',en:'Corn Oil',cat:'food',color:'#302000',ph:7,od:0,meta:1,desc:'玉米油，油炸温度450K',effects:['基础食物油','油炸'],recipe:null,tags:[]},
{n:'番茄酱',en:'Ketchup',cat:'food',color:'#731008',ph:7,od:0,meta:1,desc:'番茄酱',effects:['调味'],recipe:null,tags:[]},
{n:'酱油',en:'Soysauce',cat:'food',color:'#792300',ph:7,od:0,meta:1,desc:'酱油',effects:['调味'],recipe:null,tags:[]},
{n:'芥末',en:'Mustard',cat:'food',color:'#ffd129',ph:7,od:0,meta:1,desc:'芥末',effects:['调味'],recipe:null,tags:[]},
{n:'辣椒素油',en:'Capsaicin Oil',cat:'food',color:'#B31008',ph:7,od:0,meta:1,desc:'使辣椒变辣的物质',effects:['调味'],recipe:null,tags:[]},
{n:'浓缩辣椒素',en:'Condensed Capsaicin',cat:'food',color:'#B31008',ph:7,od:0,meta:1,desc:'防身/警察用途的浓缩辣椒素',effects:['强力刺激'],recipe:{r:[['辣椒素油',1],['乙醇',5]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'病毒食物',en:'Virus Food',cat:'food',color:'#899613',ph:7,od:0,meta:1,desc:'水和牛奶的混合物。病毒细胞可用此繁殖',effects:['病毒培养'],recipe:{r:[['水',5],['牛奶',5]],temp:'600-700K',ph_range:'-',purity:0,note:''},tags:['极高温']},
{n:'蜂蜜',en:'Honey',cat:'food',color:'#FFD700',ph:7,od:0,meta:1,desc:'蜂蜜',effects:['调味','治疗'],recipe:null,tags:[]},
{n:'茶',en:'Tea',cat:'food',color:'#8B4513',ph:7,od:0,meta:1,desc:'茶',effects:['调味'],recipe:null,tags:[]},
{n:'咖啡',en:'Coffee',cat:'food',color:'#6F4E37',ph:7,od:0,meta:1,desc:'咖啡',effects:['调味','提神'],recipe:null,tags:[]},
{n:'牛奶',en:'Milk',cat:'food',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'牛奶',effects:['调味','基础原料'],recipe:null,tags:[]},

// ========== 气体类 ==========
{n:'氟利昂',en:'Freon',cat:'gas',color:'#90560B',ph:7,od:0,meta:0.5,desc:'强力吸热剂',effects:['降低移动速度','吸热'],recipe:null,tags:['冷冻']},
{n:'哈龙',en:'Halon',cat:'gas',color:'#FFFFFF',ph:7,od:0,meta:0.5,desc:'灭火气体，去除氧气并冷却区域',effects:['抗热','降低移动速度','灭火'],recipe:null,tags:['冷冻']},
{n:'治愈气',en:'Healium',cat:'gas',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'有治疗特性的强力安眠气体',effects:['持续睡眠30秒/tick','治烧伤 -2/tick','治中毒 -5/tick','治体表伤 -2/tick'],recipe:null,tags:['镇静','治体表伤','治烧伤','治中毒']},
{n:'超贵气体',en:'Hyper-Noblium',cat:'gas',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'抑制性气体，阻止吸入者的气体反应',effects:['阻止气体反应','为等离子人提供保护'],recipe:null,tags:[]},
{n:'亚硝酰等离子体',en:'Nitrosyl Plasmide',cat:'gas',color:'#FFFFFF',ph:1.8,od:0,meta:1,desc:'高反应性副产物，阻止睡眠，随时间增加毒素伤害',effects:['恢复stamina 4/tick','毒素递增(0.1*(cycle-1))/tick','免疫睡眠'],recipe:null,tags:['兴奋','成瘾']},
{n:'硝石气',en:'Nitrium',cat:'gas',color:'#FFFFFF',ph:2,od:0,meta:1,desc:'高反应性气体，使你感觉更快',effects:['降低移动速度(提速)'],recipe:null,tags:['兴奋']},
{n:'普卢奥克西气',en:'Pluoxium',cat:'gas',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'肺扩散效率比氧气高8倍，对睡眠患者有器官治疗效果',effects:['睡眠时治所有器官0.5/tick'],recipe:null,tags:['治器官']},
{n:'扎克气',en:'Zauker',cat:'gas',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'对所有生物有毒的不稳定气体',effects:['6 brute + 1 oxy + 2 burn + 2 tox/tick'],recipe:null,tags:['剧毒']},

// ========== 反应剂类 ==========
{n:'强酸性缓冲液',en:'Strong Acidic Buffer',cat:'react',color:'#fbc314',ph:0,od:0,meta:1,desc:'添加到容器时消耗自身并将pH向酸性方向移动',effects:['移动pH向0'],recipe:null,tags:[]},
{n:'强碱性缓冲液',en:'Strong Basic Buffer',cat:'react',color:'#3853a4',ph:14,od:0,meta:1,desc:'添加到容器时消耗自身并将pH向碱性方向移动',effects:['移动pH向14'],recipe:null,tags:[]},
{n:'纯度测试剂',en:'Purity Tester',cat:'react',color:'#ffffff',ph:3,od:0,meta:1,desc:'如果容器中有高不纯试剂则剧烈反应',effects:['检测逆试剂','有则剧烈反应'],recipe:null,tags:[]},
{n:'速度剂',en:'Tempomyocin',cat:'react',color:'#e61f82',ph:10,od:0,meta:1,desc:'消耗自身并加速正在进行的反应，同时修改反应纯度',effects:['加速反应(最大2倍)'],recipe:null,tags:[]},
{n:'手性反转缓冲液',en:'Chiral Inversing Buffer',cat:'react',color:'#b60046',ph:7,od:0,meta:1,desc:'消耗自身并将不纯试剂转化为其逆试剂',effects:['每1u转化10u不纯试剂为逆试剂'],recipe:null,tags:[]},
{n:'碱性缓冲液',en:'Basic Buffer',cat:'react',color:'#3853a4',ph:14,od:0,meta:1,desc:'pH缓冲剂',effects:['pH缓冲'],recipe:{r:[['氨',3],['氯',2],['氢',2],['氧',2]],temp:'250K+',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'酸性缓冲液',en:'Acidic Buffer',cat:'react',color:'#fbc314',ph:0,od:0,meta:1,desc:'pH缓冲剂',effects:['pH缓冲'],recipe:{r:[['钠',2],['氢',2],['乙醇',2],['水',2]],temp:'250K+',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'前因子A',en:'Prefactor A',cat:'react',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'竞争反应中间体',effects:['中间体'],recipe:{r:[['苯酚',1],['乙醇',3],['液态等离子体',1]],temp:'冷反应! ≤800K',ph_range:'-',purity:0,note:''},tags:['冷反应']},
{n:'前因子B',en:'Prefactor B',cat:'react',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'竞争反应中间体',effects:['中间体'],recipe:{r:[['前因子A',5]],temp:'50K+',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'热调节剂',en:'Thermic Modulator',cat:'react',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'温度调节催化剂',effects:['温度调节催化剂'],recipe:{r:[['温度催化剂前体',5],['稳定等离子体',5]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'离子调节剂',en:'Ionic Modulator',cat:'react',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'pH调节催化剂',effects:['pH调节催化剂'],recipe:{r:[['pH催化剂前体',5],['稳定等离子体',5]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'医疗速效催化剂',en:'Medical Speed Catalyst',cat:'react',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'加速医疗反应',effects:['加速医疗反应'],recipe:{r:[['利必妥',3],['普必妥',4],['液态等离子体',2]],temp:'200K+',ph_range:'-',purity:0,note:''},tags:['高温']},

// ========== 其他/特殊类 ==========
{n:'太空润滑油',en:'Space Lube',cat:'other',color:'#00FF00',ph:7,od:0,meta:1,desc:'润滑剂，使地面变滑',effects:['使地面变滑','使人滑倒'],recipe:{r:[['水',1],['硅',1],['氧',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'超级润滑油',en:'Super Lube',cat:'other',color:'#00FF00',ph:7,od:0,meta:1,desc:'更强效的润滑油',effects:['使地面极滑','不可清除'],recipe:{r:[['太空润滑油',1],['奇异试剂',1],['香蕉',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'消毒剂',en:'Sterilizine',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'清洁消毒剂',effects:['清洁','消毒'],recipe:{r:[['乙醇',1],['蒙提弗',1],['氯',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['抗感染']},
{n:'喷雾美黑',en:'Spray Tan',cat:'other',color:'#D2691E',ph:7,od:0,meta:1,desc:'美黑剂',effects:['皮肤变黑'],recipe:{r:[['橙汁',1],['油',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'智力抑制剂',en:'Impedrezene',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'减缓脑功能，造成脑损伤',effects:['减缓脑功能','脑损伤'],recipe:{r:[['汞',1],['氧',1],['糖',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'隐生物素',en:'Cryptobiolin',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'导致混乱和眩晕，制作太空西林的前体',effects:['混乱','眩晕'],recipe:{r:[['钾',1],['氧',1],['糖',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'除草剂',en:'Plant-B-Gone',cat:'other',color:'#4900C800',ph:7,od:0,meta:1,desc:'强力除草剂',effects:['杀死植物','对植物生物伤害'],recipe:{r:[['毒素',1],['水',4]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'泡沫表面活性剂',en:'Foam Surfactant',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'与等量水混合产生大量泡沫',effects:['产生泡沫'],recipe:{r:[['碳',2],['氟',2],['酸',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'起泡剂',en:'Foaming Agent',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'金属泡沫弹前体',effects:['金属泡沫前体'],recipe:{r:[['氢',1],['锂',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'睡眠毒素',en:'Sleep Toxin',cat:'other',color:'#9A5500',ph:7,od:0,meta:1,desc:'催眠作用',effects:['催眠','睡眠'],recipe:{r:[['水合氯醛',1],['糖',4]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['镇静']},
{n:'特斯拉素',en:'Teslium',cat:'other',color:'#FFD700',ph:7,od:0,meta:1,desc:'闪电相关毒素',effects:['电击伤害','眩晕'],recipe:null,tags:[]},
{n:'组胺',en:'Histamine',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'过敏反应介质',effects:['过敏反应','瘙痒','严重时休克'],recipe:null,tags:[]},
{n:'氟哌啶醇',en:'Haloperidol',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'抗精神病药物',effects:['减少幻觉','镇静'],recipe:null,tags:['镇静']},
{n:'虚无',en:'Nothing',cat:'other',color:'#000000',ph:7,od:0,meta:1,desc:'什么都不是',effects:['无效果','哑剧相关'],recipe:null,tags:[]},
{n:'Mulligan汁',en:'Mulligan',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'改变种族',effects:['随机改变种族'],recipe:{r:[['果冻突变毒素',1],['诱变剂',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'季戊四醇',en:'Pentaerythritol',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'炸药前体',effects:['炸药前体'],recipe:null,tags:[]},
{n:'丙酮氧化物',en:'Acetone Oxide',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'炸药前体',effects:['炸药前体'],recipe:null,tags:[]},
{n:'硝混酸',en:'Nitronium',cat:'other',color:'#FFFFFF',ph:0,od:0,meta:1,desc:'硝化剂，用于炸药合成',effects:['硝化剂'],recipe:null,tags:[]},

// ========== 缺失二类药品 ==========
{n:'塞维尔',en:'Seiver',cat:'med2',color:'#C8DCFF',ph:6.5,od:0,meta:1,desc:'治疗毒素的二类药，冷反应合成',effects:['治中毒'],recipe:{r:[['氮',1],['钾',1],['铝',1]],temp:'冷反应 280-320K',ph_range:'5-8',purity:0.2,note:'无过热'},tags:['治中毒','冷反应']},
{n:'西里尼维',en:'Syriniver',cat:'med2',color:'#A8FFC8',ph:7.5,od:0,meta:1,desc:'高级毒素治疗药',effects:['治中毒(强效)'],recipe:{r:[['硫',1],['氟',1],['毒素',1],['一氧化二氮',2]],temp:'250-310K',ph_range:'6.5-9',purity:0.3,note:'无过热'},tags:['治中毒','冷反应']},
{n:'提里莫',en:'Tirimol',cat:'med2',color:'#FFB46B',ph:6,od:0,meta:1,desc:'高级氧气治疗药',effects:['治缺氧'],recipe:{r:[['氮',3],['丙酮',2]],temp:'900K(最优)',ph_range:'5-7.1',purity:0.2,note:'过热720K'},tags:['治缺氧','高温']},
{n:'潘瑟瑞特',en:'Penthrite',cat:'med2',color:'#FF6B6B',ph:6,od:0,meta:1,desc:'强力毒素治疗药，过量爆炸',effects:['治中毒(极强效)','过量:315K爆炸'],recipe:{r:[['季戊四醇',1],['丙酮',1],['硝混酸',1],['维特尔',1]],temp:'255-350K',ph_range:'5-9',purity:0.55,note:'过热450K爆炸!'},tags:['治中毒','过量','高温','爆炸']},

// ========== Nova扩展药品 ==========
{n:'藏红花素',en:'Crocin',cat:'med2',color:'#FFADFF',ph:7,od:0,meta:1,desc:'天然安全催情剂，来自藏红花和栀子花。味道:草莓',effects:['催情效果','安全无成瘾'],recipe:null,tags:[]},
{n:'六聚藏红花素',en:'Hexacrocin',cat:'med2',color:'#FF2BFF',ph:7,od:25,meta:1,desc:'强力成瘾催情剂，过量致脑损伤和视力诅咒。味道:液态欲望',effects:['强效催情','成瘾性','过量:脑损伤+视力诅咒'],recipe:null,tags:['成瘾','过量']},
{n:'樟脑',en:'Camphor',cat:'med2',color:'#D9D9D9',ph:7,od:0,meta:1,desc:'抗催情剂，降低性欲，无成瘾性。来自常青树。味道:沉闷苦味',effects:['降低性欲','抗催情','无成瘾'],recipe:null,tags:[]},
{n:'五聚樟脑',en:'Pentacamphor',cat:'med2',color:'#D9D9D9',ph:7,od:20,meta:1,desc:'极端降低性欲，过量永久降低。味道:宁静禁欲',effects:['极效降低性欲','过量:永久降低'],recipe:null,tags:['过量']},
{n:'梦魇之乳',en:'Succubus Milk',cat:'med2',color:'#E60584',ph:7,od:17,meta:0.25,desc:'源自牛奶的胶体混合物，通过雌激素促进乳腺分泌。味道:奶味冰淇淋',effects:['促进乳腺分泌'],recipe:null,tags:['过量']},
{n:'梦魇之酿',en:'Incubus Draft',cat:'med2',color:'#888888',ph:7,od:17,meta:0.5,desc:'促进男性特征的睾酮混合物。味道:中国龙粉',effects:['促进男性特征'],recipe:null,tags:['过量']},
{n:'夸酮',en:'Quaalude',cat:'drug',color:'#ffe669',ph:8,od:20,meta:1,desc:'放松使用者，进入催眠/迷幻状态。味道:柠檬',effects:['放松','催眠','迷幻状态'],recipe:null,tags:['过量','成瘾']},

// ========== 缺失火工品 ==========
{n:'热素',en:'Pyrosium',cat:'pyro',color:'#64FAC8',ph:7,od:0,meta:0.2,desc:'消耗液氧加热容器，1u效果=50u',effects:['消耗液氧加热容器','极高效加热'],recipe:{r:[['磷',1],['酸',1],['糖',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['燃烧','加热']},
{n:'EMP',en:'EMP',cat:'pyro',color:'#A6FAFF',ph:7,od:0,meta:1,desc:'产生电磁脉冲，瘫痪电子设备',effects:['电磁脉冲','瘫痪电子设备'],recipe:{r:[['铀',1],['铁',1],['铝',1]],temp:'常温',ph_range:'-',purity:0,note:'即时反应'},tags:['爆炸']},
{n:'圣爆',en:'Holy Explosion',cat:'pyro',color:'#FFFFCC',ph:7,od:0,meta:1,desc:'圣水+钾的爆炸，大量时瘫痪亡灵和邪教徒',effects:['爆炸','75u+:瘫痪亡灵/cultist'],recipe:{r:[['圣水',1],['钾',1]],temp:'常温',ph_range:'-',purity:0,note:'即时反应'},tags:['爆炸']},
{n:'特斯拉冲击',en:'Tesla Shock',cat:'pyro',color:'#00FFFF',ph:7,od:0,meta:1,desc:'即时反应，射出电弧',effects:['电弧攻击','闪电伤害'],recipe:{r:[['特斯拉素',1],['水',1]],temp:'常温',ph_range:'-',purity:0,note:'即时反应'},tags:['爆炸']},

// ========== 泡沫/表面活性剂 ==========
{n:'氟表面活性剂',en:'Fluorosurfactant',cat:'pyro',color:'#9E6B38',ph:7,od:0,meta:0.4,desc:'与等量水混合产生大量泡沫，泡沫携带容器内所有试剂。泡沫会通过皮肤吸收。泡沫很滑',effects:['产生大量泡沫','携带试剂','皮肤吸收','极滑'],recipe:{r:[['氟',2],['碳',2],['酸',1]],temp:'常温',ph_range:'-',purity:0,note:'产出5u'},tags:[]},
{n:'消防泡沫',en:'Firefighting Foam',cat:'pyro',color:'#A6FAFF',ph:7,od:0,meta:0.4,desc:'产生不滑的泡沫，灭火并清除空气中的燃烧等离子体',effects:['灭火','冷却燃烧生物','清除空气中等离子体','不滑'],recipe:{r:[['稳定剂',1],['氟表面活性剂',1],['碳',1]],temp:'冷反应 <200K',ph_range:'5-9',purity:0.3,note:'强吸热'},tags:['冷反应']},
{n:'智能起泡剂',en:'Smart Foaming Agent',cat:'pyro',color:'#664B63',ph:7,od:0,meta:0.4,desc:'制作智能金属泡沫的前体',effects:['智能金属泡沫前体'],recipe:{r:[['起泡剂',3],['丙酮',1],['铁',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'智能金属泡沫',en:'Smart Metal Foam',cat:'pyro',color:'#888888',ph:7,od:0,meta:0.4,desc:'智能版金属泡沫，对暴露在太空的格子自动形成地板/墙壁，通常不会包裹人',effects:['自动形成地板/墙壁','不包裹人','不封锁走廊'],recipe:{r:[['铝',3],['智能起泡剂',1],['氟硫酸',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},

// ========== 清洁/农业 ==========
{n:'消毒液',en:'Sterilizine',cat:'other',color:'#C8C8C8',ph:7,od:0,meta:0.4,desc:'消毒清洁剂，清洁并消毒表面',effects:['清洁表面','消毒'],recipe:{r:[['乙醇',1],['蒙提弗',1],['氯',1]],temp:'常温',ph_range:'-',purity:0,note:'产出3u'},tags:[]},
{n:'太空清洁剂',en:'Space Cleaner',cat:'other',color:'#A5FFFF',ph:7,od:0,meta:0.4,desc:'可以清洁几乎所有表面的污渍。清洁工会感谢你帮他补充',effects:['清洁所有表面污渍'],recipe:{r:[['氨',1],['水',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'干燥剂',en:'Drying Agent',cat:'other',color:'#A70FFF',ph:7,od:0,meta:0.4,desc:'使胶鞋超强吸水，干燥湿滑地面。每单位移除10秒湿滑时间',effects:['干燥湿滑地面','增强胶鞋吸水'],recipe:{r:[['稳定等离子体',2],['乙醇',1],['钠',1]],temp:'100K+',ph_range:'5-9',purity:0.3,note:'产出3u'},tags:[]},

// ========== 肥料 ==========
{n:'EZ营养液',en:'EZ Nutrient',cat:'fert',color:'#4a7a3a',ph:7,od:0,meta:1,desc:'基础植物营养液，水培盘初始自带，提供基本营养',effects:['基础营养供应','产量不变','突变不变'],recipe:null,tags:[]},
{n:'Left4Zed',en:'Left4Zed',cat:'fert',color:'#1A1E4D',ph:7,od:0,meta:1,desc:'不稳定营养液，使植物更频繁变异。对植物有毒，约10-20u为最大用量',effects:['大幅增强后续诱变剂效果','对植物有毒'],recipe:{r:[['EZ营养液',1],['镭',1]],temp:'常温',ph_range:'-',purity:0,note:'镭为催化剂只需1u'},tags:[]},
{n:'丰硕收获',en:'Robust Harvest',cat:'fert',color:'#6B8E23',ph:7,od:0,meta:1,desc:'大幅增加收获数量和植物效能',effects:['增加产量','增加植物效力'],recipe:null,tags:[]},
{n:'持久生长',en:'Enduro Grow',cat:'fert',color:'#8B7355',ph:7,od:0,meta:1,desc:'增加植物耐久度和抗性',effects:['增加植物耐久','增加抗性'],recipe:null,tags:[]},
{n:'液态地震',en:'Liquid Earthquake',cat:'fert',color:'#8B4513',ph:7,od:0,meta:1,desc:'高级肥料，效果最强',effects:['高级肥料效果','综合提升'],recipe:null,tags:[]},

// ========== 固化/材料化 ==========
{n:'等离子固化',en:'Plasma Solidification',cat:'mater',color:'#8228A0',ph:7,od:0,meta:1,desc:'将液态等离子体固化为等离子体锭。不可在生物体内反应',effects:['固化等离子体为锭'],recipe:{r:[['铁',5],['冰霜油',5],['液态等离子体',20]],temp:'即时反应',ph_range:'-',purity:0,note:'不可体内反应'},tags:[]},
{n:'金固化',en:'Gold Solidification',cat:'mater',color:'#FFD700',ph:7,od:0,meta:1,desc:'将液态黄金固化为金锭',effects:['固化黄金为锭'],recipe:{r:[['冰霜油',5],['金',20],['铁',1]],temp:'即时反应',ph_range:'-',purity:0,note:'不可体内反应'},tags:[]},
{n:'铀固化',en:'Uranium Solidification',cat:'mater',color:'#4B0082',ph:7,od:0,meta:1,desc:'将液态铀固化为铀锭',effects:['固化铀为锭'],recipe:{r:[['冰霜油',5],['铀',20],['钾',1]],temp:'即时反应',ph_range:'-',purity:0,note:'不可体内反应'},tags:['放射性']},
{n:'塑料板',en:'Plastic Sheets',cat:'mater',color:'#E0E0E0',ph:7,od:0,meta:1,desc:'以10u/板的比例创建塑料板',effects:['创建塑料板'],recipe:{r:[['油',5],['灰',3],['酸',2]],temp:'374K',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'皂化',en:'Soapification',cat:'mater',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'创建肥皂条，清洁速度比空间站自带的快10%',effects:['创建肥皂'],recipe:{r:[['液态肉泥',10],['碱液',10]],temp:'374K',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'终极皂化',en:'Omega Soapification',cat:'mater',color:'#FF69B4',ph:7,od:0,meta:1,desc:'创建终极肥皂，需要极其复杂的配方',effects:['创建终极肥皂'],recipe:{r:[['土豆汁',10],['蜥蜴酒',10],['猴子粉',10],['鳄鱼药',10],['硝酸',10],['秃头素',10],['劣酒',10],['蓝空',10],['兴奋剂',10],['太空可乐',10]],temp:'999K(过热1200K)',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'蜡烛化',en:'Candlefication',cat:'mater',color:'#FF0000',ph:7,od:0,meta:1,desc:'创建红色蜡烛，用于装饰或仪式',effects:['创建蜡烛'],recipe:{r:[['液态肉泥',5],['氧',5]],temp:'374K',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'肉品化',en:'Meatification',cat:'mater',color:'#CC4633',ph:7,od:0,meta:1,desc:'创建化学加工肉块',effects:['创建肉块'],recipe:{r:[['液态肉泥',10],['营养素',10],['碳',10]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'碳酸钙',en:'Calcium Carbonate',cat:'mater',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'制作水泥的原料之一',effects:['水泥原料'],recipe:{r:[['牛奶',1],['碳',1],['氧',3]],temp:'375K',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'水泥',en:'Cement',cat:'mater',color:'#888888',ph:7,od:0,meta:1,desc:'制作混凝土的原料',effects:['混凝土原料'],recipe:{r:[['碳酸钙',6],['硅',3],['铁',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'混凝土',en:'Concrete',cat:'mater',color:'#A0A0A0',ph:7,od:0,meta:1,desc:'创建混凝土袋',effects:['创建混凝土'],recipe:{r:[['水泥',1],['水',2],['硅',7]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},

// ========== 生物试剂 ==========
{n:'液态肉泥',en:'Liquid Gibs',cat:'bio',color:'#CC4633',ph:7.45,od:0,meta:0.4,desc:'你甚至不想知道里面有什么。营养因子=2，材料=肉',effects:['营养来源','肉材料'],recipe:null,tags:[]},
{n:'骨粉',en:'Bone Dust',cat:'bio',color:'#dbcdcb',ph:7,od:0,meta:0.4,desc:'磨碎的骨头，恶心! 研磨有机身体部位或骨胶获得',effects:['骨材料'],recipe:null,tags:[]},
{n:'骨胶',en:'Bone Gel',cat:'bio',color:'#E8DCC8',ph:7,od:0,meta:0.4,desc:'用于治疗骨折的医用胶',effects:['治疗骨折'],recipe:{r:[['骨粉',10],['碳',10]],temp:'630K',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'皇家蜂胶',en:'Royal Bee Jelly',cat:'bio',color:'#FFD700',ph:7,od:0,meta:0.4,desc:'注射后使蜂后分裂为二',effects:['蜂后分裂'],recipe:{r:[['蜂蜜',40],['不稳定诱变剂',10]],temp:'常温',ph_range:'-',purity:0,note:'产出5u而非50u'},tags:[]},
{n:'纤维素',en:'Cellulose Fibers',cat:'bio',color:'#D2B48C',ph:7,od:0,meta:0.4,desc:'结晶聚葡聚糖聚合物。植物靠这个活着。研磨木板获得，用于制作医用缝合线',effects:['植物组成部分','缝合线材料'],recipe:null,tags:[]},
{n:'疫苗',en:'Vaccine',cat:'bio',color:'#C81040',ph:7,od:0,meta:1,desc:'包含病毒数据的特殊试剂。接触时为对应疾病提供免疫',effects:['免疫对应疾病'],recipe:null,tags:[]},
{n:'生命',en:'Life',cat:'bio',color:'#C8A5DC',ph:7,od:0,meta:1,desc:'创造一个或多个愤怒的生物(可能是最坏情况)',effects:['创造生物(危险!)'],recipe:{r:[['奇异试剂',1],['不稳定诱变剂',1],['全效治疗剂',1],['圣水',1],['合成肉',1]],temp:'375K',ph_range:'-',purity:0,note:'产出1u而非3u'},tags:['高温']},
{n:'柯基素',en:'Corgium',cat:'bio',color:'#F4A460',ph:7,od:0,meta:1,desc:'创建你自己的柯基犬!',effects:['创建柯基犬'],recipe:{r:[['多彩试剂',1],['奇异试剂',1],['营养素',1],['血液',1]],temp:'374K',ph_range:'-',purity:0,note:''},tags:['高温']},
{n:'感染菌丝',en:'Magillitis',cat:'bio',color:'#00f041',ph:7,od:0,meta:0.4,desc:'10个循环后将猴子和人类变为大猩猩(叛徒物品)',effects:['10循环后变大为猩猩'],recipe:null,tags:[]},

// ========== 催化剂前体 ==========
{n:'催化前体P',en:'Catalysium P',cat:'react',color:'#bafa69',ph:7,od:0,meta:1,desc:'离子调节剂前体。与稳定等离子体反应生成离子调节剂。竞争反应(较难制作)',effects:['离子调节剂前体'],recipe:{r:[['苯酚',1],['不稳定诱变剂',3],['液态等离子体',1]],temp:'冷反应 <800K(最优300K)',ph_range:'0.1-13.9',purity:0.25,note:'有金时加速5倍。产出5u'},tags:['冷反应']},
{n:'催化前体T',en:'Catalysium T',cat:'react',color:'#c91a1a',ph:7,od:0,meta:1,desc:'热调节剂前体。与稳定等离子体反应生成热调节剂。竞争反应',effects:['热调节剂前体'],recipe:{r:[['苯酚',1],['不稳定诱变剂',3],['液态等离子体',1]],temp:'冷反应 <800K(最优300K)',ph_range:'0.1-13.9',purity:0.25,note:'与催化前体P竞争。产出5u'},tags:['冷反应']},
{n:'钯合成催化剂',en:'Palladium Synthate Catalyst',cat:'react',color:'#b1b1b1',ph:2,od:0,meta:1,desc:'大幅加速所有药物反应的强力催化剂',effects:['加速所有药物反应(modifier=2)','偏酸性'],recipe:null,tags:[]},

// ========== 病毒食物亚型 ==========
{n:'诱变病毒食物',en:'Mutagen Virus Food',cat:'food',color:'#899613',ph:7,od:0,meta:1,desc:'使病毒进化到等级3',effects:['病毒进化至等级3'],recipe:{r:[['不稳定诱变剂',1],['病毒食物',1]],temp:'常温',ph_range:'-',purity:0,note:'产出1u'},tags:[]},
{n:'突触素病毒食物',en:'Synaptizine Virus Food',cat:'food',color:'#899613',ph:7,od:0,meta:1,desc:'使病毒退化到等级1',effects:['病毒退化至等级1'],recipe:{r:[['突触素',1],['病毒食物',1]],temp:'常温',ph_range:'-',purity:0,note:'产出1u'},tags:[]},
{n:'等离子病毒食物',en:'Plasma Virus Food',cat:'food',color:'#8228A0',ph:7,od:0,meta:1,desc:'使病毒进化到等级6',effects:['病毒进化至等级6'],recipe:{r:[['液态等离子体',1],['病毒食物',1]],temp:'常温',ph_range:'-',purity:0,note:'产出1u'},tags:[]},
{n:'弱等离子病毒食物',en:'Weak Plasma Virus Food',cat:'food',color:'#9966BB',ph:7,od:0,meta:1,desc:'使病毒进化到等级5',effects:['病毒进化至等级5'],recipe:{r:[['突触素',1],['等离子病毒食物',1]],temp:'常温',ph_range:'-',purity:0,note:'产出2u'},tags:[]},
{n:'糖诱变病毒食物',en:'Sugar Mutagen Virus Food',cat:'food',color:'#899613',ph:7,od:0,meta:1,desc:'使病毒进化到等级4',effects:['病毒进化至等级4'],recipe:{r:[['糖',1],['诱变病毒食物',1]],temp:'常温',ph_range:'-',purity:0,note:'产出2u'},tags:[]},
{n:'铀病毒食物',en:'Uranium Virus Food',cat:'food',color:'#4B0082',ph:7,od:0,meta:1,desc:'使病毒进化到等级6-7',effects:['病毒进化至等级6-7'],recipe:{r:[['铀',1],['病毒食物',1]],temp:'常温',ph_range:'-',purity:0,note:'产出1u'},tags:['放射性']},
{n:'不稳定铀病毒食物',en:'Unstable Uranium Virus Food',cat:'food',color:'#6B0082',ph:7,od:0,meta:1,desc:'使病毒进化到等级7',effects:['病毒进化至等级7'],recipe:{r:[['铀',5],['等离子病毒食物',1]],temp:'常温',ph_range:'-',purity:0,note:'产出1u'},tags:['放射性']},
{n:'稳定铀病毒食物',en:'Stable Uranium Virus Food',cat:'food',color:'#4B0082',ph:7,od:0,meta:1,desc:'使病毒进化到等级8。可用金或银配方',effects:['病毒进化至等级8'],recipe:{r:[['铀',10],['金',10],['液态等离子体',1]],temp:'常温',ph_range:'-',purity:0,note:'银替代: 银(10)替代金(10)'},tags:['放射性']},

// ========== 地毯染料 ==========
{n:'地毯',en:'Carpet',cat:'other',color:'#C8A5DC',ph:7,od:0,meta:0.4,desc:'在地板上创建地毯，最好在烟雾机/手雷或喷瓶中使用',effects:['创建地板地毯'],recipe:{r:[['太空毒品',1],['血液',1]],temp:'100K+',ph_range:'5-9',purity:0.3,note:''},tags:[]},
{n:'黑色地毯',en:'Black Carpet',cat:'other',color:'#1a1a2e',ph:7,od:0,meta:0.4,desc:'黑色地毯染料',effects:['创建黑色地毯'],recipe:{r:[['地毯',1],['油',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'蓝色地毯',en:'Blue Carpet',cat:'other',color:'#0066CC',ph:7,od:0,meta:0.4,desc:'蓝色地毯染料',effects:['创建蓝色地毯'],recipe:{r:[['地毯',1],['冷凝素',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'青色地毯',en:'Cyan Carpet',cat:'other',color:'#00CCCC',ph:7,od:0,meta:0.4,desc:'青色地毯染料',effects:['创建青色地毯'],recipe:{r:[['地毯',1],['氰化物',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:['剧毒']},
{n:'绿色地毯',en:'Green Carpet',cat:'other',color:'#00AA00',ph:7,od:0,meta:0.4,desc:'绿色地毯染料',effects:['创建绿色地毯'],recipe:{r:[['地毯',1],['绿啤酒',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'橙色地毯',en:'Orange Carpet',cat:'other',color:'#FF8800',ph:7,od:0,meta:0.4,desc:'橙色地毯染料',effects:['创建橙色地毯'],recipe:{r:[['地毯',1],['橙汁',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'紫色地毯',en:'Purple Carpet',cat:'other',color:'#9933CC',ph:7,od:0,meta:0.4,desc:'紫色地毯染料。再生果冻需在发光蘑菇中混合',effects:['创建紫色地毯'],recipe:{r:[['地毯',1],['再生果冻',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'红色地毯',en:'Red Carpet',cat:'other',color:'#CC0000',ph:7,od:0,meta:0.4,desc:'红色地毯染料',effects:['创建红色地毯'],recipe:{r:[['地毯',1],['液态肉泥',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'皇家黑地毯',en:'Royal Black Carpet',cat:'other',color:'#0a0a1e',ph:7,od:0,meta:0.4,desc:'皇家级黑色地毯，更加华丽',effects:['创建皇家黑色地毯'],recipe:{r:[['黑色地毯',1],['皇家蜂胶',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'皇家蓝地毯',en:'Royal Blue Carpet',cat:'other',color:'#0044AA',ph:7,od:0,meta:0.4,desc:'皇家级蓝色地毯，更加华丽',effects:['创建皇家蓝色地毯'],recipe:{r:[['蓝色地毯',1],['皇家蜂胶',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'多彩试剂',en:'Colorful Reagent',cat:'other',color:'#C8A5DC',ph:7,od:0,meta:0.4,desc:'随机给地板、物品和人染色，适合"彩虹炸弹"',effects:['随机染色地板/物品/人'],recipe:{r:[['三重柑橘',1],['冷冻素',1],['太空毒品',1],['镭',1],['稳定等离子体',1]],temp:'100K+',ph_range:'5-9',purity:0.3,note:'逆试剂: 纯度<30%时生成dulling reagent'},tags:[]},

// ========== 随机配方 ==========
{n:'秘密酱汁',en:'Secret Sauce',cat:'other',color:'#FFD700',ph:7,od:0,meta:1,desc:'随机配方，每7天重置。随机选择2-5种食物类试剂作为输入，必须在桶中混合',effects:['终极模因化学','配方每7天变化'],recipe:{r:[['随机食物试剂',0],['随机食物试剂',0]],temp:'随机(冷/热)',ph_range:'随机(1-13)',purity:0,note:'需桶+随机催化剂。产出1u'},tags:[]},
{n:'金属生成',en:'Metalgen',cat:'other',color:'#888888',ph:7,od:0,meta:1,desc:'随机配方，每3天重置。随机选择2-5种药物类试剂，必须有维特尔作催化剂',effects:['终极模因化学','配方每3天变化'],recipe:{r:[['随机药物试剂',0],['维特尔',1]],temp:'随机(冷/热)',ph_range:'随机(1-13)',purity:0,note:'产出20u'},tags:[]},
{n:'石化血清',en:'Gorgium',cat:'other',color:'#888866',ph:7,od:0,meta:1,desc:'随机配方，每7天重置。可从所有可合成试剂中选择输入',effects:['将物品变成石头','配方每7天变化'],recipe:{r:[['随机试剂',0],['随机试剂',0]],temp:'随机(冷/热)',ph_range:'随机(1-13)',purity:0,note:'产出20u'},tags:[]},

// ========== 其他缺失试剂 ==========
{n:'理发师助手',en:'Barber\'s Aid',cat:'other',color:'#C8A5DC',ph:7,od:0,meta:0.4,desc:'接触或气化时随机改变发型，受接触保护影响',effects:['随机改变发型'],recipe:{r:[['地毯',1],['太空毒品',1],['镭',1]],temp:'100K+',ph_range:'5-9',purity:0.3,note:'产出5u'},tags:[]},
{n:'浓缩理发师助手',en:'Concentrated Barber\'s Aid',cat:'other',color:'#C8A5DC',ph:7,od:0,meta:0.4,desc:'接触时将发型设为超长发，面部设为超长胡须。21/纯度 tick后使不自然长发的种族长出头发',effects:['超长发+超长胡须','21tick后蜥蜴人长头发','100%纯度移除光滑头'],recipe:{r:[['理发师助手',1],['不稳定诱变剂',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'量子染发剂',en:'Quantum Hair Dye',cat:'other',color:'#C8A5DC',ph:7,od:0,meta:0.4,desc:'接触或气化时随机改变发色',effects:['随机改变发色'],recipe:{r:[['多彩试剂',1],['太空毒品',1],['镭',1]],temp:'100K+',ph_range:'5-9',purity:0.3,note:'产出5u'},tags:[]},
{n:'秃头素',en:'Baldium',cat:'other',color:'#FFAA00',ph:7,od:0,meta:0.4,desc:'接触或气化时设为秃头+剃光胡须',effects:['变秃头','剃光胡须'],recipe:{r:[['碱液',1],['钠',1],['氢',1],['氧',1],['镭',1],['酸',1]],temp:'395K+(过热900K)',ph_range:'5-9',purity:0.3,note:'逆试剂: Maldium(纯度<30%)。产出1u'},tags:['高温']},
{n:'蓝空粉尘',en:'Bluespace Dust',cat:'other',color:'#5D5DFF',ph:7,od:0,meta:0.4,desc:'研磨蓝空水晶获得。偶尔随机短距离传送。泼洒在人身上时每5单位传送1格',effects:['随机短距传送','泼洒: 每5u传送1格'],recipe:null,tags:[]},
{n:'BZ代谢物',en:'BZ Metabolites',cat:'other',color:'#FF6600',ph:7,od:0,meta:0.08,desc:'吸入BZ气体获得。每tick减少变形者2化学点数(抵消自然回复)。每tick造成10秒幻觉',effects:['反变形者','10秒幻觉/tick'],recipe:null,tags:[]},
{n:'防腐剂',en:'Preservahyde',cat:'other',color:'#C8C8C8',ph:7,od:0,meta:0.25,desc:'强力防腐剂，利用甲醛的防腐效果但显著减少组胺产生',effects:['防腐','减少组胺产生'],recipe:{r:[['甲醛',1],['溴',1],['水',1]],temp:'常温',ph_range:'-',purity:0,note:''},tags:[]},
{n:'欢笑',en:'Laughter',cat:'other',color:'#FFFF00',ph:7,od:0,meta:1,desc:'使你发笑',effects:['发笑'],recipe:{r:[['糖',1],['香蕉汁',1]],temp:'常温',ph_range:'-',purity:0,note:'产出10u而非2u'},tags:[]},
{n:'重力素',en:'Gravitum',cat:'other',color:'#5A64C8',ph:7,od:0,meta:0.04,desc:'使你完全失重。可喷在物体上使其失重1分钟/单位',effects:['完全失重','喷洒使物体失重'],recipe:{r:[['维特尔',1],['索里姆',10]],temp:'100K+',ph_range:'5-9',purity:0,note:'极慢代谢0.04/tick'},tags:[]},
{n:'生长血清',en:'Growth Serum',cat:'other',color:'#8B4513',ph:7,od:0,meta:0.4,desc:'研磨毒蝇伞获得。使你变大，体内越多越大，200单位达到最大体型',effects:['使体型变大','200u达最大体型'],recipe:null,tags:[]},
{n:'冰',en:'Ice',cat:'other',color:'#A6FAFF',ph:7,od:0,meta:0.4,desc:'冰冷!',effects:['冷却'],recipe:{r:[['水',1]],temp:'低于274K(冷反应)',ph_range:'-',purity:0,note:''},tags:['冷反应','冷冻']},
{n:'矿泉水',en:'Mineral Water',cat:'other',color:'#A6FAFF',ph:7,od:0,meta:1,desc:'水的变体，代谢时微量治疗毒素',effects:['微量治中毒(-0.05/tick)'],recipe:null,tags:['治中毒']},
{n:'中空水',en:'Hollow Water',cat:'other',color:'#888888',ph:7,od:0,meta:0.4,desc:'从间歇泉提取。与圣水混合时可转化为圣水的催化反应',effects:['间歇泉产物','圣水催化反应'],recipe:null,tags:[]},

// ========== 缺失医疗药品 ==========
{n:'管理者药物',en:'Adminordrazine',cat:'med',color:'#E0BB00',ph:7,od:0,meta:1,desc:'这是魔法，我们不需要解释。管理员专用药物',effects:['治体表伤 2.5/tick','治烧伤 2.5/tick','治中毒 2.5/tick','完全治愈器官损伤','完全治愈束缚','镇痛'],recipe:null,tags:['治体表伤','治烧伤','治中毒','治器官']},
{n:'量子药物',en:'Quantum Medicine',cat:'med',color:'#E0BB00',ph:7,od:0,meta:1,desc:'稀有实验性粒子，能将使用者身体与平行时空中完全健康的版本交换',effects:['完全治愈(除管理员级和试剂效果外的一切伤害)'],recipe:null,tags:['治体表伤','治烧伤','治中毒','治缺氧']},
{n:'刺激剂',en:'Stimulants',cat:'med',color:'#78008C',ph:8.7,od:60,meta:1,desc:'增加电击棒抗性和移动速度，恢复轻微伤害和虚弱。过量导致虚弱和毒素伤害',effects:['电击棒抗性','加速移动','恢复stamina','镇痛','极高成瘾性'],recipe:null,tags:['兴奋','成瘾','过量']},
{n:'解酒药',en:'Antihol',cat:'med',color:'#00B4C8',ph:4,od:0,meta:1,desc:'清除患者体内的酒精物质并消除其副作用',effects:['移除乙醇','清除混乱/眩晕/嗜睡'],recipe:{r:[['乙醇',1],['蒙提弗',1],['铜',1]],temp:'300K',ph_range:'-',purity:0,note:'产出3u'},tags:[]},
{n:'决心',en:'Determination',cat:'med',color:'#D2FFFA',ph:7,od:0,meta:1,desc:'受伤时产生的"第二风"试剂',effects:['受伤时激发','恢复体力'],recipe:null,tags:[]},

// ========== 缺失清洁/农业 ==========
{n:'杂草杀手',en:'Weed Killer',cat:'other',color:'#4B004B',ph:3,od:0,meta:1,desc:'杀杂草的有毒混合物。请勿食用! 在水培机中减少杂草等级',effects:['减少杂草等级'],recipe:null,tags:[]},
{n:'害虫杀手',en:'Pest Killer',cat:'other',color:'#4B004B',ph:3.2,od:0,meta:1,desc:'杀虫的有毒混合物。请勿食用! 在水培机中减少害虫等级',effects:['减少害虫等级','1毒素伤害/tick'],recipe:null,tags:[]},

// ========== 缺失生物试剂 ==========
{n:'蜘蛛提取物',en:'Spider Extract',cat:'bio',color:'#ED2939',ph:7,od:0,meta:1,desc:'来自澳大利亚区的特化提取物，用于创造蜘蛛女王',effects:['创建蜘蛛女王'],recipe:null,tags:[]},
{n:'有机泥浆',en:'Organic Slurry',cat:'bio',color:'#545000',ph:7,od:0,meta:1,desc:'各种颜色液体的混合物。引起呕吐',effects:['诱发呕吐'],recipe:null,tags:[]},

// ========== 缺失火工品 ==========
{n:'充能果冻',en:'Energized Jelly',cat:'pyro',color:'#CAFF43',ph:7,od:0,meta:1,desc:'带电果冻。增强果冻人的神经系统，但只会电击其他生命体',effects:['果冻人:恢复虚弱和体力','发光果冻人:减少提取冷却','非果冻人:电击'],recipe:null,tags:[]},
{n:'泡沫',en:'Foam',cat:'pyro',color:'#FFFFFF',ph:7,od:0,meta:1,desc:'氟表面活性剂与水混合产生的大泡沫，携带容器内所有试剂',effects:['产生泡沫','携带试剂','皮肤吸收'],recipe:{r:[['氟表面活性剂',1],['水',1]],temp:'常温',ph_range:'-',purity:0,note:'即时反应'},tags:[]},
{n:'金属泡沫',en:'Metal Foam',cat:'pyro',color:'#888888',ph:7,od:0,meta:1,desc:'铝与起泡剂和强酸产生的金属泡沫，可踩踏',effects:['产生金属泡沫墙','可踩踏'],recipe:{r:[['铝',3],['起泡剂',1],['氟硫酸',1]],temp:'常温',ph_range:'-',purity:0,note:'即时反应'},tags:[]},
{n:'铁泡沫',en:'Iron Foam',cat:'pyro',color:'#AAAAAA',ph:7,od:0,meta:1,desc:'铁与起泡剂和强酸产生的铁泡沫',effects:['产生铁泡沫墙'],recipe:{r:[['铁',3],['起泡剂',1],['氟硫酸',1]],temp:'常温',ph_range:'-',purity:0,note:'即时反应'},tags:[]},

// ========== 霓虹地毯系列 ==========
{n:'霓虹地毯',en:'Neon Carpet',cat:'other',color:'#1A1A1A',ph:6,od:0,meta:0.4,desc:'给喜欢80年代、拉斯维加斯和调试的人。可发光的地毯',effects:['创建发光地毯'],recipe:null,tags:[]},
{n:'白色霓虹地毯',en:'White Neon Carpet',cat:'other',color:'#FFFFFF',ph:7,od:0,meta:0.4,desc:'给喜欢荧光灯照明的人',effects:['创建白色发光地毯'],recipe:null,tags:[]},
{n:'红色霓虹地毯',en:'Red Neon Carpet',cat:'other',color:'#CC0000',ph:7,od:0,meta:0.4,desc:'给喜欢一点不确定性的人',effects:['创建红色发光地毯'],recipe:null,tags:[]},
{n:'橙色霓虹地毯',en:'Orange Neon Carpet',cat:'other',color:'#FF8800',ph:7,od:0,meta:0.4,desc:'给喜欢一些锐利边缘的人',effects:['创建橙色发光地毯'],recipe:null,tags:[]},
{n:'黄色霓虹地毯',en:'Yellow Neon Carpet',cat:'other',color:'#FFD700',ph:7,od:0,meta:0.4,desc:'给生活中需要一点稳定性的人',effects:['创建黄色发光地毯'],recipe:null,tags:[]},
{n:'青柠霓虹地毯',en:'Lime Neon Carpet',cat:'other',color:'#00FF00',ph:7,od:0,meta:0.4,desc:'给需要一点苦味的人',effects:['创建青柠发光地毯'],recipe:null,tags:[]},
{n:'绿色霓虹地毯',en:'Green Neon Carpet',cat:'other',color:'#00AA00',ph:7,od:0,meta:0.4,desc:'给生活中需要一点改变的人',effects:['创建绿色发光地毯'],recipe:null,tags:[]},
{n:'蓝绿霓虹地毯',en:'Teal Neon Carpet',cat:'other',color:'#00AAAA',ph:7,od:0,meta:0.4,desc:'给需要一支烟的人',effects:['创建蓝绿发光地毯'],recipe:null,tags:[]},
{n:'青色霓虹地毯',en:'Cyan Neon Carpet',cat:'other',color:'#008B8B',ph:7,od:0,meta:0.4,desc:'给需要喘口气的人',effects:['创建青色发光地毯'],recipe:null,tags:[]},
{n:'蓝色霓虹地毯',en:'Blue Neon Carpet',cat:'other',color:'#000080',ph:7,od:0,meta:0.4,desc:'给需要再次感受快乐的人',effects:['创建蓝色发光地毯'],recipe:null,tags:[]},
{n:'紫色霓虹地毯',en:'Purple Neon Carpet',cat:'other',color:'#800080',ph:7,od:0,meta:0.4,desc:'给需要一点探索的人',effects:['创建紫色发光地毯'],recipe:null,tags:[]},
{n:'紫罗兰霓虹地毯',en:'Violet Neon Carpet',cat:'other',color:'#8B00FF',ph:7,od:0,meta:0.4,desc:'给想试探命运的人',effects:['创建紫罗兰发光地毯'],recipe:null,tags:[]},
{n:'粉色霓虹地毯',en:'Pink Neon Carpet',cat:'other',color:'#FF69B4',ph:7,od:0,meta:0.4,desc:'给只想停止思考的人',effects:['创建粉色发光地毯'],recipe:null,tags:[]},
{n:'黑色霓虹地毯',en:'Black Neon Carpet',cat:'other',color:'#000000',ph:7,od:0,meta:0.4,desc:'给需要喘口气的人',effects:['创建黑色发光地毯'],recipe:null,tags:[]},

// ========== 缺失医疗药品 ==========
{n:'联苯西塔齐',en:'Synaphydramine',cat:'med',color:'#EC536D',ph:5.2,od:0,meta:1,desc:'减少嗜睡、幻觉，并清除体内的组胺',effects:['减少嗜睡','移除致幻剂','移除组胺','减少幻觉','16%几率0.5毒素伤害'],recipe:null,tags:['抗组胺']},
{n:'三素芬太尼',en:'Sansufentanyl',cat:'med',color:'#07e4d1',ph:6.2,od:0,meta:1,desc:'临时副作用包括恶心、头晕、运动协调障碍',effects:['增加混乱感(最多5秒)','头晕(最多12秒)','体力损失','10%几率感到困惑'],recipe:null,tags:[]},
{n:'突变酮',en:'Mutadone',cat:'med',color:'#5096C8',ph:2,od:0,meta:1,desc:'消除颤抖并恢复基因缺陷',effects:['移除颤抖','移除所有突变(除种族)','解除DNA混乱','猴子变回人类'],recipe:null,tags:[]},
{n:'胰岛素',en:'Insulin',cat:'med',color:'#FFFFF0',ph:6.7,od:0,meta:0.5,desc:'加速糖分消耗',effects:['减少睡眠时间','每tick移除3倍糖分'],recipe:null,tags:[]},
{n:'再生凝胶',en:'Regenerative Jelly',cat:'med',color:'#CC23FF',ph:7,od:0,meta:1,desc:'逐渐再生所有类型的伤害，不会伤害史莱姆解剖结构',effects:['治体表伤 0.75/tick','治烧伤 0.75/tick','治缺氧 0.75/tick','治中毒 0.75/tick','可改变毛发为紫色'],recipe:null,tags:['治体表伤','治烧伤','治中毒','治缺氧']},
{n:'莫达非尼',en:'Modafinil',cat:'med',color:'#BEF7D8',ph:7.89,od:20,meta:0.1,desc:'持久型睡眠抑制剂，略微减少眩晕和击倒时间。过量有可怕的副作用',effects:['免疫睡眠','减少不可移动状态','恢复体力','引起颤抖'],recipe:null,tags:['过量','过量:昏迷','过量:缺氧']},
{n:'心境平',en:'Psicodine',cat:'med',color:'#07E79E',ph:9.12,od:30,meta:0.25,desc:'抑制焦虑和其他精神困扰。过量引起幻觉和轻微毒素伤害',effects:['无恐惧','减少颤抖/头晕/混乱/厌恶','负面精神状态时提升理智'],recipe:null,tags:['过量','过量:幻觉+毒素']},
{n:'水飞蓟宾',en:'Silibinin',cat:'med',color:'#FFFFD0',ph:7,od:0,meta:1.5,desc:'蓟源性保肝黄酮木脂素混合物，有助于逆转肝脏损伤',effects:['每tick恢复0.67肝脏损伤'],recipe:null,tags:[]},
{n:'有丝分裂代谢因子',en:'Metafactor',cat:'med',color:'#FFBE00',ph:7,od:10,meta:0.0625,desc:'催化营养食物转化为愈合肽的酶',effects:['过量加速代谢','13%几率引起呕吐'],recipe:null,tags:['过量']},
{n:'颗粒塔鲁里',en:'Granibitaluri',cat:'med',color:'#E0E0E0',ph:7,od:50,meta:0.5,desc:'温和止痛药，加速小伤口和烧伤愈合，但对严重伤害无效。极大剂量有毒性',effects:['轻伤:治体表伤+burn 1.5/tick','重伤:效果递减','镇痛'],recipe:null,tags:['过量','过量:肝损+毒素']},
{n:'凝血石',en:'Sanguirite',cat:'med',color:'#bb2424',ph:7,od:20,meta:0.25,desc:'专有凝血剂，帮助出血伤口更快凝血。会被肝素清除',effects:['减少出血(0.7倍)','促进血栓形成','镇痛'],recipe:null,tags:['止血','过量','过量:血栓+缺氧']},
{n:'昂丹司琼',en:'Ondansetron',cat:'med',color:'#74d3ff',ph:10.6,od:0,meta:0.5,desc:'预防恶心和呕吐。可能引起嗜睡和疲劳',effects:['减少厌恶感','8%几率嗜睡','15%几率体力伤害'],recipe:null,tags:[]},
{n:'纳洛酮',en:'Naloxone',cat:'med',color:'#f5f5dc',ph:4,od:0,meta:0.5,desc:'阿片拮抗剂，清除嗜睡和麻醉品，恢复呼吸损失并加速成瘾恢复',effects:['清除阿片类药物','移除麻木','减少嗜睡','恢复呼吸停止','抗成瘾','可穿透皮肤'],recipe:null,tags:[]},
{n:'免疫沉默剂',en:'ImmunoSilence',cat:'med',color:'#C8A5DC',ph:5.5,od:0,meta:0.25,desc:'阻止病毒被自然治愈',effects:['阻止病毒自愈'],recipe:null,tags:[]},
{n:'肌维',en:'Musiver',cat:'med2',color:'#DFD54E',ph:9.1,od:25,meta:0.25,desc:'西林维的活性代谢物。过量引起肌肉无力',effects:['治中毒 3/tick(乘纯度)','清除其他试剂','轻微肝脏损伤'],recipe:null,tags:['治中毒','过量','过量:肌无力']},
{n:'肝复特',en:'Higadrite',cat:'med',color:'#FF3542',ph:7,od:0,meta:1,desc:'用于治疗肝脏疾病的药物',effects:['稳定肝脏功能'],recipe:null,tags:[]},
{n:'大地之血',en:'Earthsblood',cat:'med',color:'#FFAF00',ph:11,od:25,meta:1,desc:'来自极其强大植物的汁液。修复伤口但对大脑有负担。引发临时和平主义',effects:['前10u缓慢治疗所有伤害','之后大幅加速','脑损伤','恢复体力','临时和平主义','嬉皮士语录','迷幻效果'],recipe:null,tags:['过量','过量:永久和平主义','治体表伤','治烧伤','治中毒','治缺氧']},
{n:'伊纳普洛林',en:'Inaprovaline',cat:'med',color:'#A4D8D8',ph:8.5,od:0,meta:1,desc:'稳定患者呼吸。适合危重患者',effects:['呼吸停止>=5时:减少2.5倍/tick'],recipe:null,tags:[]},
{n:'聚吡啶鎓低聚物',en:'Polypyrylium Oligomers',cat:'med',color:'#9423FF',ph:7,od:50,meta:0.25,desc:'紫色短聚电解质链混合物，不易合成。作为尖端药物合成中间体',effects:['恢复肺部损伤0.5/tick','治体表伤 0.7/tick','可改变毛发为紫色'],recipe:null,tags:['治体表伤','过量','过量:肺损']},
{n:'神血',en:'Godblood',cat:'med',color:'#FF00FF',ph:7,od:150,meta:1,desc:'全效治疗剂的子类型，缓慢治疗所有伤害',effects:['缓慢治体表伤','缓慢治烧伤','缓慢治中毒','缓慢治缺氧'],recipe:null,tags:['治体表伤','治烧伤','治中毒','治缺氧']},

// ========== 缺失生物试剂 ==========
{n:'稳定突变毒素',en:'Stable Mutation Toxin',cat:'bio',color:'#5EFF3B',ph:7,od:0,meta:0.5,desc:'一种人化毒素，20个循环后将对象变形为指定种族',effects:['20循环后变形为指定种族'],recipe:null,tags:[]},
{n:'高级突变毒素',en:'Advanced Mutation Toxin',cat:'bio',color:'#13BC5E',ph:7,od:0,meta:1,desc:'史莱姆产生的高级腐败性毒素',effects:['感染史莱姆变形病'],recipe:null,tags:[]},
{n:'异星微生物',en:'Xenomicrobes',cat:'bio',color:'#535E66',ph:7,od:0,meta:1,desc:'具有完全异星细胞结构的微生物',effects:['感染异星变形病'],recipe:null,tags:[]},
{n:'宇宙结核杆菌',en:'Tubercle Bacillus Cosmosis Microbes',cat:'bio',color:'#92D17D',ph:11,od:0,meta:1,desc:'活性真菌孢子',effects:['感染结核病'],recipe:null,tags:[]},
{n:'罗梅罗尔',en:'Romerol',cat:'bio',color:'#123524',ph:0.5,od:0,meta:1,desc:'高度实验性生物制剂，在宿主大脑中蚀刻休眠结节。死亡时激活',effects:['静默添加感染器官','死亡时激活僵尸化'],recipe:null,tags:[]},
{n:'暴食之赐',en:'Gluttony\'s Blessing',cat:'bio',color:'#5EFF3B',ph:7,od:0,meta:1,desc:'由可怕事物产生的高级腐败性毒素',effects:['感染变形怪变形病'],recipe:null,tags:[]},
{n:'宁静毒素',en:'Tranquility',cat:'bio',color:'#9A6750',ph:7,od:0,meta:1,desc:'来源不明的高突变性液体',effects:['感染贡多拉变形病'],recipe:null,tags:[]},
{n:'S剂',en:'Agent-S',cat:'bio',color:'#003300',ph:11,od:0,meta:1,desc:'感染胃螺菌病的制剂',effects:['感染胃螺菌病'],recipe:null,tags:[]},
{n:'纳米机器',en:'Nanomachines',cat:'bio',color:'#535E66',ph:7,od:0,meta:1,desc:'微型建造机器人。纳米机器，小子!',effects:['感染机器人变形病'],recipe:null,tags:[]}
];

// ===== 状态 =====
var selectedFilters = {};
var searchQuery = '';
var sortMode = 'default';

// ===== 页面切换 =====
function switchPage(page, btn) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('page-' + page).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  window.scrollTo(0, 0);
}

// ===== FAQ =====
function toggleFaq(el) {
  el.parentElement.classList.toggle('open');
}

function filterGuide(query) {
  var q = query.toLowerCase().trim();
  var sections = document.querySelectorAll('#guideContent .help-section');
  sections.forEach(function(s) {
    if (!q) {
      s.style.display = '';
      return;
    }
    var keywords = (s.dataset.keywords || '').toLowerCase();
    var text = s.textContent.toLowerCase();
    if (keywords.indexOf(q) !== -1 || text.indexOf(q) !== -1) {
      s.style.display = '';
    } else {
      s.style.display = 'none';
    }
  });
}

// ===== 初始化筛选区 =====
function initFilters() {
  var container = document.getElementById('filterArea');
  var html = '';

  html += '<div style="text-align:center;padding:8px 20px 4px;display:flex;gap:12px;justify-content:center">';
  html += '<button class="reset-btn" onclick="clearAll()">🔄 重置选择</button>';
  html += '<button class="showall-btn" onclick="showAllChem()">📋 显示所有试剂</button>';
  html += '</div>';

  FILTER_GROUPS.forEach(function(g) {
    html += '<div class="ingredient-section">';
    html += '<div class="section-header">';
    html += '<span class="section-title"><span style="font-size:16px">' + g.icon + '</span> ' + g.title + '</span>';
    html += '<span class="section-count" id="count_' + g.key + '">0/' + g.options.length + '</span>';
    html += '</div>';
    html += '<div class="tag-container">';
    g.options.forEach(function(opt) {
      var filterId = g.key + '_' + opt.id;
      html += '<span class="tag ' + g.cssClass + '" data-filter="' + filterId + '" data-group="' + g.key + '" data-value="' + opt.id + '" onclick="toggleFilter(this)">' + opt.n + '</span>';
    });
    html += '</div>';
    html += '</div>';
  });

  container.innerHTML = html;
}

function toggleFilter(el) {
  var filterId = el.dataset.filter;
  if (selectedFilters[filterId]) {
    delete selectedFilters[filterId];
    el.classList.remove('active');
  } else {
    selectedFilters[filterId] = true;
    el.classList.add('active');
  }
  updateCounts();
  renderResults();
}

function updateCounts() {
  FILTER_GROUPS.forEach(function(g) {
    var count = 0;
    g.options.forEach(function(opt) {
      if (selectedFilters[g.key + '_' + opt.id]) count++;
    });
    var el = document.getElementById('count_' + g.key);
    if (el) el.textContent = count + '/' + g.options.length;
  });
}

function clearAll() {
  selectedFilters = {};
  searchQuery = '';
  document.getElementById('searchBar').value = '';
  document.querySelectorAll('.tag.active').forEach(function(el) {
    el.classList.remove('active');
  });
  updateCounts();
  renderResults();
}

function showAllChem() {
  clearAll();
  renderResults();
}

function handleSearch() {
  searchQuery = document.getElementById('searchBar').value.toLowerCase().trim();
  renderResults();
}

function changeSort(el) {
  document.querySelectorAll('.sort-btn').forEach(function(b) { b.classList.remove('active'); });
  el.classList.add('active');
  sortMode = el.dataset.sort;
  renderResults();
}

// ===== 筛选与渲染 =====
function matchesFilters(c) {
  var catFilters = Object.keys(selectedFilters).filter(function(k) { return k.indexOf('cat_') === 0; });
  if (catFilters.length > 0) {
    var catMatch = catFilters.some(function(k) {
      return selectedFilters[k] && k.replace('cat_','') === c.cat;
    });
    if (!catMatch) return false;
  }

  var effFilters = Object.keys(selectedFilters).filter(function(k) { return k.indexOf('effect_') === 0; });
  if (effFilters.length > 0) {
    var effMatch = effFilters.some(function(k) {
      if (!selectedFilters[k]) return false;
      var val = k.replace('effect_','');
      return c.tags && c.tags.indexOf(val) !== -1;
    });
    if (!effMatch) return false;
  }

  var dangerFilters = Object.keys(selectedFilters).filter(function(k) { return k.indexOf('danger_') === 0; });
  if (dangerFilters.length > 0) {
    var dMatch = dangerFilters.some(function(k) {
      if (!selectedFilters[k]) return false;
      var val = k.replace('danger_','');
      return c.tags && c.tags.indexOf(val) !== -1;
    });
    if (!dMatch) return false;
  }

  var tempFilters = Object.keys(selectedFilters).filter(function(k) { return k.indexOf('temp_') === 0; });
  if (tempFilters.length > 0) {
    var tMatch = tempFilters.some(function(k) {
      if (!selectedFilters[k] || !c.recipe) return false;
      var val = k.replace('temp_','');
      var temp = c.recipe.temp || '';
      if (val === '冷反应') return temp.indexOf('冷') !== -1;
      if (val === '常温') return temp === '常温';
      if (val === '高温(300+)') {
        var match = temp.match(/(\d+)K/);
        return match && parseInt(match[1]) >= 300 && parseInt(match[1]) < 600;
      }
      if (val === '极高温(600+)') {
        var match = temp.match(/(\d+)K/);
        return match && parseInt(match[1]) >= 600;
      }
      if (val === '窄温区') return temp.indexOf('窄') !== -1;
      return false;
    });
    if (!tMatch) return false;
  }

  return true;
}

function matchesSearch(c) {
  if (!searchQuery) return true;
  var ql = searchQuery.toLowerCase();
  if (c.n.toLowerCase().indexOf(ql) !== -1) return true;
  if (c.en.toLowerCase().indexOf(ql) !== -1) return true;
  if (c.desc && c.desc.toLowerCase().indexOf(ql) !== -1) return true;
  if (c.effects) {
    for (var i = 0; i < c.effects.length; i++) {
      if (c.effects[i].toLowerCase().indexOf(ql) !== -1) return true;
    }
  }
  if (c.recipe) {
    for (var j = 0; j < c.recipe.r.length; j++) {
      if (c.recipe.r[j][0].toLowerCase().indexOf(ql) !== -1) return true;
    }
  }
  if (c.tags) {
    for (var k = 0; k < c.tags.length; k++) {
      if (c.tags[k].toLowerCase().indexOf(ql) !== -1) return true;
    }
  }
  return false;
}

function sortChemicals(list) {
  if (sortMode === 'name') {
    return list.slice().sort(function(a,b) { return a.n.localeCompare(b.n,'zh'); });
  } else if (sortMode === 'cat') {
    return list.slice().sort(function(a,b) {
      if (a.cat !== b.cat) return a.cat.localeCompare(b.cat);
      return a.n.localeCompare(b.n,'zh');
    });
  }
  return list;
}

function renderResults() {
  var container = document.getElementById('resultsArea');
  var filtered = CHEMICALS.filter(function(c) {
    if (!matchesFilters(c)) return false;
    if (!matchesSearch(c)) return false;
    return true;
  });

  filtered = sortChemicals(filtered);

  document.getElementById('resultCount').textContent = filtered.length + ' 种';

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state"><div class="empty-icon">🔬</div><p>没有匹配的试剂</p><p style="font-size:12px;margin-top:8px">试试调整筛选条件或搜索关键词</p></div>';
    return;
  }

  var html = '';
  filtered.forEach(function(c) {
    var catLabel = CAT_LABELS[c.cat] || {name:c.cat,icon:'🧪',badge:'badge-cat-other'};

    html += '<div class="chem-card" onclick="toggleCard(this)">';
    html += '<div class="chem-card-header">';
    html += '<div class="chem-name">';
    html += '<span class="chem-color-dot" style="background:' + (c.color || '#888') + '"></span>';
    html += catLabel.icon + ' ' + c.n + '<span class="name-en">' + c.en + '</span>';
    html += '</div>';
    html += '<span class="expand-indicator">▼</span>';
    html += '</div>';

    // Badges
    html += '<div class="chem-badges">';
    html += '<span class="badge ' + catLabel.badge + '">' + catLabel.name + '</span>';
    if (c.od > 0) html += '<span class="badge badge-danger">过量' + c.od + 'u</span>';
    if (c.tags) {
      c.tags.forEach(function(t) {
        html += '<span class="badge badge-effect">' + t + '</span>';
      });
    }
    if (c.recipe) html += '<span class="badge badge-recipe">📝 有配方</span>';
    html += '</div>';

    // Quick info
    html += '<div class="chem-info">';
    if (c.ph !== 7) html += '<span>pH <b>' + c.ph + '</b></span>';
    if (c.od > 0) html += '<span>过量 <b>' + c.od + 'u</b></span>';
    if (c.meta !== 1) html += '<span>代谢 <b>×' + c.meta + '</b></span>';
    html += '</div>';

    // Description
    html += '<div class="chem-desc">' + c.desc + '</div>';

    // Detail
    html += '<div class="chem-detail">';

    // Effects
    if (c.effects && c.effects.length > 0) {
      html += '<div class="detail-row"><span class="detail-label">效果</span><span class="detail-value">';
      c.effects.forEach(function(e, i) {
        if (i > 0) html += '<br>';
        html += '• ' + e;
      });
      html += '</span></div>';
    }

    // Recipe
    if (c.recipe) {
      html += '<div class="detail-row"><span class="detail-label">配方</span><span class="detail-value">';
      html += '<div class="recipe-block">';
      c.recipe.r.forEach(function(r) {
        html += '<div class="recipe-row"><span class="reagent-amount">' + r[1] + 'u</span> ' + r[0] + '</div>';
      });
      html += '<div style="margin-top:6px">';
      if (c.recipe.temp && c.recipe.temp !== '-') html += '<span class="recipe-temp">🌡️ ' + c.recipe.temp + '</span>';
      if (c.recipe.ph_range && c.recipe.ph_range !== '-') html += '<span class="recipe-ph">pH ' + c.recipe.ph_range + '</span>';
      if (c.recipe.purity > 0) html += '<span class="recipe-ph">纯度≥' + (c.recipe.purity * 100) + '%</span>';
      html += '</div>';
      if (c.recipe.note) html += '<div class="recipe-note">⚠️ ' + c.recipe.note + '</div>';
      html += '</div>';
      html += '</span></div>';
    }

    // Color
    if (c.color) {
      html += '<div class="detail-row"><span class="detail-label">颜色</span><span class="detail-value"><span class="chem-color-dot" style="background:' + c.color + ';display:inline-block;vertical-align:middle"></span> ' + c.color + '</span></div>';
    }

    html += '</div>';
    html += '</div>';
  });

  container.innerHTML = html;
}

window.toggleCard = function(el) {
  el.classList.toggle('expanded');
};

// ===== 启动 =====
initFilters();
renderResults();
