const n=`date,value\r
2017-03-21,27109633.032247137\r
2017-03-28,21922758.055457145\r
2017-03-31,21922758.055457145\r
2017-04-20,21016768.596880227\r
2017-04-30,20493253.231279258\r
2017-05-07,20425059.153246913\r
2017-05-10,22149024.34168908\r
2017-05-17,21717820.66564995\r
2017-06-19,42164566.46724012\r
2017-06-26,42164566.46724012\r
2017-07-04,48240251.47065871\r
2017-07-06,48240251.47065871\r
2017-07-14,48373127.840545245\r
2017-08-18,58279658.43327305\r
2017-08-20,58279658.43327305\r
2017-08-23,58200686.79374745\r
2017-08-25,58009133.8269627\r
2017-09-07,59499539.20155221\r
2017-09-12,59499539.20155221\r
2017-09-17,59499539.20155221\r
2017-09-22,59061118.481128626\r
2017-09-24,59061118.481128626\r
2017-09-27,59328522.422516696\r
2017-09-29,59328522.422516696\r
2017-10-02,52102937.92838694\r
2018-04-25,18756036.63263721\r
2018-04-27,18756036.63263721\r
2018-04-30,18756036.63263721\r
2018-05-05,18756036.63263721\r
2018-05-25,28267720.187550765\r
2018-06-01,28267720.187550765\r
2018-06-14,45553801.0858082\r
2018-06-16,45553801.0858082\r
2018-06-19,45123812.17233639\r
2018-06-21,48788325.81693015\r
2018-06-24,48788325.81693015\r
2018-06-26,48439638.3762653\r
2018-06-29,57346917.58085382\r
2018-07-01,56772160.82667713\r
2018-07-04,57268615.835531935\r
2018-07-06,57268615.835531935\r
2018-07-09,60226389.15876086\r
2018-07-24,64037304.02713369\r
2018-07-26,64037304.02713369\r
2018-07-29,64673533.65694887\r
2018-07-31,64673533.65694887\r
2018-08-03,64209412.13307549\r
2018-08-05,63954304.61970826\r
2018-08-08,63906901.897175334\r
2018-08-18,65355039.80455807\r
2018-08-20,63475208.97242838\r
2018-08-23,65235204.56254031\r
2018-08-28,63646518.51924577\r
2018-08-30,64441252.343154065\r
2018-09-02,64441252.343154065\r
2018-09-04,61577829.87949657\r
2018-09-07,61577829.87949657\r
2018-09-12,61938557.51214347\r
2018-09-14,61938557.51214347\r
2018-09-17,63487015.599853225\r
2018-09-19,63487015.599853225\r
2018-09-22,63487015.599853225\r
2018-09-24,62008504.23273692\r
2018-09-27,62528576.574199006\r
2019-03-31,21377407.39154308\r
2019-04-05,21946340.45127814\r
2019-04-10,22084734.695986513\r
2019-04-15,22223588.228691038\r
2019-04-17,22461717.165032417\r
2019-04-20,22431025.533785142\r
2019-05-10,22403762.67911207\r
2019-05-12,22403762.67911207\r
2019-05-15,22172734.86711153\r
2019-05-30,24740602.26030637\r
2019-06-01,24350932.647571743\r
2019-06-04,26637126.380182203\r
2019-06-14,26637126.380182203\r
2019-06-24,31287253.054684054\r
2019-06-26,31287253.054684054\r
2019-06-29,32002637.62902249\r
2019-07-01,32002637.62902249\r
2019-07-04,31920447.260450628\r
2019-07-06,32880717.980019633\r
2019-07-09,32880717.980019633\r
2019-07-14,35451321.1463867\r
2019-07-16,35590362.85890102\r
2019-07-19,35825647.287022375\r
2019-07-21,35891149.31300487\r
2019-07-24,35799464.15998884\r
2019-07-26,35799464.15998884\r
2019-07-29,36223997.077210866\r
2019-07-31,36188884.09223255\r
2019-08-03,36739578.74038818\r
2019-08-05,36708623.78979555\r
2019-08-08,37156594.0346145\r
2019-08-10,37143246.653090954\r
2019-08-15,37392815.200919434\r
2019-08-18,37201103.58810014\r
2019-08-23,37482160.63591737\r
2019-08-25,37464282.54492215\r
2019-08-30,37464282.54492215\r
2019-09-02,37558192.75217396\r
2019-09-12,37183296.391547844\r
2019-09-14,37183296.391547844\r
2019-09-17,37312500.53237696\r
2019-09-19,37316960.06709699\r
2019-09-22,37316960.06709699\r
2019-09-27,37316960.06709699\r
2019-09-29,37201103.58810014\r
2019-10-02,37201103.58810014\r
2020-03-15,27952822.597678006\r
2020-03-17,27952822.597678006\r
2020-03-20,27952822.597678006\r
2020-03-22,27952822.597678006\r
2020-03-25,27979631.41462943\r
2020-03-30,27979631.41462943\r
2020-04-01,27408124.752144467\r
2020-04-04,27427074.69301155\r
2020-04-06,27427074.69301155\r
2020-04-09,25829964.617933992\r
2020-04-11,25826292.238278493\r
2020-04-14,25515147.114404008\r
2020-04-16,25515147.114404008\r
2020-04-24,25547997.67224026\r
2020-04-29,24611542.888627447\r
2020-05-04,24805265.568318333\r
2020-05-06,24805265.568318333\r
2020-05-09,25991822.21407717\r
2020-05-14,24798076.356617056\r
2020-05-19,24855620.850778032\r
2020-05-24,26779166.568835225\r
2020-05-26,29039670.05055266\r
2020-05-29,29086570.840062134\r
2020-05-31,29759249.84743737\r
2020-06-03,29961445.55927753\r
2020-06-05,29961445.55927753\r
2020-06-23,30785516.81429589\r
2020-06-25,30785516.81429589\r
2020-06-28,30785516.81429589\r
2020-06-30,30785516.81429589\r
2020-07-03,30785516.81429589\r
2020-07-05,30785516.81429589\r
2020-07-08,33636112.44546269\r
2020-07-10,33589689.58633837\r
2020-07-13,33589689.58633837\r
2020-07-18,33598127.58900799\r
2020-07-20,33598127.58900799\r
2020-07-23,33278269.80776433\r
2020-07-25,33299263.45647974\r
2020-07-28,33299263.45647974\r
2020-07-30,33299263.45647974\r
2020-08-02,33299263.45647974\r
2020-08-04,33060350.082236137\r
2020-08-07,33915360.405627936\r
2020-08-09,33894162.59047293\r
2020-08-12,34289587.22676668\r
2020-08-14,34289587.22676668\r
2020-08-19,34289587.22676668\r
2020-08-22,34379211.763228156\r
2020-08-27,35286582.197196305\r
2020-09-01,35882412.06043664\r
2020-09-03,35882412.06043664\r
2020-09-06,36079271.85633721\r
2020-09-08,35786376.38555775\r
2020-09-11,35786376.38555775\r
2020-09-13,36448264.944232896\r
2020-09-16,36351432.33379175\r
2020-09-18,37107666.0104492\r
2020-09-23,37107666.0104492\r
2020-09-26,37107666.0104492\r
2020-09-28,37107666.0104492\r
2021-03-20,28561239.596533824\r
2021-03-22,28561239.596533824\r
2021-03-25,28658141.90743407\r
2021-03-27,28658141.90743407\r
2021-03-30,26719311.574348994\r
2021-04-01,26906593.18833123\r
2021-04-04,26566255.79550017\r
2021-04-06,25999192.05890639\r
2021-04-09,25999192.05890639\r
2021-04-24,22074592.7160687\r
2021-06-13,32972558.237887334\r
2021-06-15,32972558.237887334\r
2021-06-18,32972558.237887334\r
2021-07-18,48947724.41340133\r
2021-07-20,48947724.41340133\r
2021-07-23,48947724.41340133\r
2021-08-17,53231594.744664155\r
2021-08-19,53231594.744664155\r
2021-08-24,53231594.744664155\r
2021-08-27,53911670.42438702\r
2021-08-29,53625051.55321293\r
2021-09-01,54672656.80038591\r
2021-09-06,54607208.76130416\r
2021-09-11,55126472.16284918\r
2021-09-13,55417293.965226725\r
2021-09-18,55049786.1561238\r
2021-09-21,57941606.47589614\r
2021-09-23,57924731.124925576\r
2021-09-28,57924731.124925576\r
2021-10-01,58324810.46254439\r
2022-03-20,33370694.137937866\r
2022-03-22,32680808.506795824\r
2022-03-25,32680808.506795824\r
2022-04-04,31112778.93415157\r
2022-04-06,31011577.21617253\r
2022-04-09,31011577.21617253\r
2022-04-11,31011577.21617253\r
2022-04-14,32884889.60391183\r
2022-04-16,32872375.57026892\r
2022-04-19,33391718.53811018\r
2022-05-14,38074664.10813792\r
2022-05-19,39826228.14182501\r
2022-05-21,39826228.14182501\r
2022-05-29,47452105.90597336\r
2022-06-18,53258495.0542678\r
2022-06-20,53258495.0542678\r
2022-06-23,53258495.0542678\r
2022-06-25,53258495.0542678\r
2022-07-08,53452389.06314288\r
2022-07-10,53452389.06314288\r
2022-07-13,54144802.914398864\r
2022-07-15,54144802.914398864\r
2022-07-18,53635852.71824423\r
2022-07-20,54356707.90897106\r
2022-07-25,53868355.51877259\r
2022-07-28,53960421.65964878\r
2022-08-02,52727203.83126133\r
2022-08-04,52727203.83126133\r
2022-08-07,52727203.83126133\r
2022-08-09,52086982.70903934\r
2022-08-12,53215458.00219078\r
2022-08-22,54721769.98570163\r
2022-08-24,54667201.21665018\r
2022-08-27,54995044.93449671\r
2022-08-29,54995044.93449671\r
2022-09-01,54454657.57997364\r
2022-09-06,54601756.62584453\r
2022-09-08,54182804.97374969\r
2022-09-11,55148392.80025854\r
2022-09-13,55033360.77120244\r
2022-09-16,55033360.77120244\r
2022-09-18,55033360.77120244\r
2022-09-21,56128519.66893197\r
2022-09-23,55924035.03424158\r
2022-09-26,55924035.03424158\r
2022-10-01,55924035.03424158\r
2023-03-20,34872203.17682011\r
2023-03-22,34872203.17682011\r
2023-03-25,34872203.17682011\r
2023-03-27,34820587.443492875\r
2023-04-04,32361464.193763576\r
2023-04-06,32361464.193763576\r
2023-04-09,32997629.048701763\r
2023-04-14,32880717.980019633\r
2023-04-16,33822142.34340945\r
2023-04-19,33404336.533220023\r
2023-04-24,33953534.10220316\r
2023-04-26,33534869.8368147\r
`;export{n as default};
