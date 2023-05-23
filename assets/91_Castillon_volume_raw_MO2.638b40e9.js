const n=`date,value\r
2017-03-11,62189666.10783537\r
2017-03-21,61712712.21230107\r
2017-04-10,74047213.34499998\r
2017-04-17,74047213.34499998\r
2017-04-20,84180426.74898042\r
2017-04-30,84025974.93083866\r
2017-05-30,96215160.29622306\r
2017-06-06,96215160.29622306\r
2017-06-09,96215160.29622306\r
2017-07-04,99585025.4076821\r
2017-07-06,99585025.4076821\r
2017-07-11,99585025.4076821\r
2017-07-14,99950743.67760794\r
2017-07-19,98995839.34164183\r
2017-07-21,98995839.34164183\r
2017-07-24,99373161.44251262\r
2017-07-29,98490377.66440944\r
2017-07-31,98490377.66440944\r
2017-08-03,98077417.49457715\r
2017-08-05,97952106.89817475\r
2017-08-08,97952106.89817475\r
2017-08-13,97817682.7060861\r
2017-08-15,97631416.94893911\r
2017-08-18,99984570.62550794\r
2017-08-20,99984570.62550794\r
2017-08-23,97021485.16326489\r
2017-08-25,99342468.17107211\r
2017-08-30,95984299.11189228\r
2017-09-02,96275941.91636436\r
2017-09-12,91277964.04209669\r
2017-09-14,87550413.79316899\r
2017-09-17,87007983.26124665\r
2017-09-22,91720725.21111043\r
2017-09-24,91511228.05211577\r
2017-09-27,91705756.18524802\r
2017-10-07,88295007.49166214\r
2017-10-09,86990312.97792582\r
2017-10-12,87662568.11248943\r
2017-10-14,87662568.11248943\r
2017-10-17,86487179.73223956\r
2017-10-19,87966789.90978424\r
2017-10-22,85864674.6881587\r
2018-03-16,42723749.78351846\r
2018-03-21,42723749.78351846\r
2018-03-23,42723749.78351846\r
2018-03-26,49232214.95777438\r
2018-03-28,48769121.32893787\r
2018-03-31,49091665.082181655\r
2018-04-02,49091665.082181655\r
2018-04-05,49020205.25890362\r
2018-04-07,47034983.01842327\r
2018-04-20,63075036.297100596\r
2018-04-22,63075036.297100596\r
2018-04-25,72016877.17431772\r
2018-04-27,72016877.17431772\r
2018-04-30,71811482.4045743\r
2018-05-05,73141433.48847055\r
2018-05-25,74880552.37163603\r
2018-06-09,85612548.33994667\r
2018-06-14,88226967.20545007\r
2018-06-16,88226967.20545007\r
2018-06-19,91678813.85464749\r
2018-07-04,99769369.03177048\r
2018-07-06,99769369.03177048\r
2018-07-09,99929219.2926375\r
2018-07-11,99155303.12435552\r
2018-07-14,99093961.44876805\r
2018-07-19,99772442.32420395\r
2018-07-21,100153758.78011999\r
2018-07-24,99560454.27457388\r
2018-07-26,99115429.69154742\r
2018-07-29,98386322.01945741\r
2018-08-23,97936828.52900396\r
2018-08-25,97936828.52900396\r
2018-08-28,99628029.43033855\r
2018-08-30,99640317.35508014\r
2018-09-02,98998905.19959311\r
2018-09-04,97619206.66116281\r
2018-09-07,97000159.10352723\r
2018-09-12,93435177.18302138\r
2018-09-14,92629265.41629533\r
2018-09-19,91125545.4703874\r
2018-09-22,91125545.4703874\r
2018-09-27,88256547.9330408\r
2018-09-29,88256547.9330408\r
2018-10-02,90546482.06848268\r
2018-10-04,90546482.06848268\r
2018-10-09,86055388.31390049\r
2018-10-12,86919643.01405887\r
2019-03-11,70563640.48467118\r
2019-03-13,70563640.48467118\r
2019-03-16,68096676.99280572\r
2019-03-18,68821026.64797199\r
2019-03-21,64559274.87964271\r
2019-03-23,64559274.87964271\r
2019-03-26,64580747.72874953\r
2019-03-28,66611788.36303343\r
2019-03-31,57982683.33669064\r
2019-04-02,58068361.72565154\r
2019-04-05,52589711.207190566\r
2019-04-07,52884579.69624573\r
2019-04-10,52884579.69624573\r
2019-04-15,49535932.416245155\r
2019-04-17,49837754.14506898\r
2019-04-20,49689245.93417612\r
2019-04-22,54458204.17301692\r
2019-04-27,54458204.17301692\r
2019-04-30,54511669.00973973\r
2019-05-02,65892081.58618662\r
2019-05-05,65819164.76201227\r
2019-05-07,69825361.04866946\r
2019-05-10,69265009.51774545\r
2019-05-12,69265009.51774545\r
2019-05-15,69265009.51774545\r
2019-06-04,94424467.8845577\r
2019-06-06,94424467.8845577\r
2019-06-11,94424467.8845577\r
2019-06-19,100015325.48699483\r
2019-06-21,100015325.48699483\r
2019-06-24,100455441.80557133\r
2019-06-26,100455441.80557133\r
2019-06-29,100375375.93655129\r
2019-07-01,100375375.93655129\r
2019-07-04,99284159.08466871\r
2019-07-06,98309832.3557372\r
2019-07-24,100877655.27772732\r
2019-07-26,100877655.27772732\r
2019-07-29,99904621.76199421\r
2019-07-31,99698691.43711971\r
2019-08-03,99975344.74102542\r
2019-08-05,98505682.85172608\r
2019-08-08,99176775.50130601\r
2019-08-10,97704688.65426768\r
2019-08-15,98891617.75313546\r
2019-08-18,97024531.86231479\r
2019-08-20,97976553.83135802\r
2019-08-23,96969695.83468875\r
2019-08-25,98842584.1217945\r
2019-08-28,98842584.1217945\r
2019-08-30,98842584.1217945\r
2019-09-02,97021485.16326489\r
2019-09-04,95226106.27535959\r
2019-09-07,93402055.98222052\r
2019-09-12,85565666.57318735\r
2019-09-14,85565666.57318735\r
2019-09-17,82842848.50886397\r
2019-09-19,78790430.46432455\r
2019-09-24,78987544.1074185\r
2019-09-27,76705950.2910875\r
2019-09-29,78570644.10025588\r
2019-10-02,75398283.35249174\r
2019-10-04,75950998.76827446\r
2019-10-07,73451356.20535085\r
2019-10-14,74212527.71886304\r
2019-10-17,74212527.71886304\r
2019-10-19,73384311.3402536\r
2020-04-04,43516756.96963788\r
2020-04-06,40962590.21505813\r
2020-04-09,45630981.56865023\r
2020-04-11,45630981.56865023\r
2020-04-14,42763882.51873446\r
2020-04-24,46244207.538490675\r
2020-04-26,39192511.51692857\r
2020-04-29,58297029.777176216\r
2020-05-04,68255009.95139554\r
2020-05-06,68255009.95139554\r
2020-05-09,68255009.95139554\r
2020-05-11,69784110.89594974\r
2020-05-14,70704407.36956796\r
2020-07-03,101949518.7733592\r
2020-07-05,101949518.7733592\r
2020-07-08,100711169.57831654\r
2020-07-10,100668020.58977489\r
2020-07-15,101464117.95068593\r
2020-07-20,99106228.8388714\r
2020-07-23,100202993.86320184\r
2020-08-07,98530172.69066343\r
2020-08-09,94929405.62409012\r
2020-08-12,96872233.38638574\r
2020-08-14,96872233.38638574\r
2020-08-17,96650011.35897055\r
2020-08-19,96561775.46313943\r
2020-08-22,95932682.7343855\r
2020-08-24,95692931.79420175\r
2020-08-27,95032309.94326904\r
2020-09-01,94763016.22820283\r
2020-09-03,94122511.3866021\r
2020-09-06,92014271.53645861\r
2020-09-08,92677318.54435678\r
2020-09-13,88857703.2290231\r
2020-09-16,88896244.10276237\r
2020-09-18,88896244.10276237\r
2020-09-21,88602871.57915738\r
2020-09-23,76018764.48613022\r
2020-09-26,76935439.4520436\r
2020-09-28,76935439.4520436\r
2020-10-01,72887657.11007656\r
2020-10-03,73761686.38396294\r
2020-10-08,73879214.735141\r
2020-10-13,71869751.55674696\r
2020-10-16,71869751.55674696\r
2021-03-10,70662996.28317112\r
2021-03-15,68889484.53411451\r
2021-03-17,68889484.53411451\r
2021-03-20,68309634.04812413\r
2021-03-22,68536469.29109417\r
2021-03-25,68536469.29109417\r
2021-03-30,67723138.35532026\r
2021-04-01,66563009.700150505\r
2021-04-04,66565719.33414506\r
2021-04-06,66565719.33414506\r
2021-04-09,70224503.29579222\r
2021-04-16,69693387.2657074\r
2021-04-19,69693387.2657074\r
2021-05-04,80426219.62566727\r
2021-05-06,80253841.55388558\r
2021-05-09,80253841.55388558\r
2021-05-14,80253841.55388558\r
2021-05-19,76632332.34606433\r
2021-05-21,76626670.33838113\r
2021-05-26,76626670.33838113\r
2021-05-29,76626670.33838113\r
2021-06-13,97744384.63597305\r
2021-06-15,97729116.35690384\r
2021-06-18,97961274.27564806\r
2021-07-23,99020367.03249717\r
2021-07-25,99996872.21690391\r
2021-07-28,99996872.21690391\r
2021-07-30,98897747.48911282\r
2021-08-02,99446837.33057465\r
2021-08-07,98245595.34599109\r
2021-08-09,98245595.34599109\r
2021-08-12,98245595.34599109\r
2021-08-17,97195194.51295559\r
2021-08-19,97195194.51295559\r
2021-08-22,98772111.53601812\r
2021-08-24,98772111.53601812\r
2021-08-27,97347650.72171035\r
2021-08-29,98319010.13792542\r
2021-09-01,97988778.00982983\r
2021-09-06,96537438.9400292\r
2021-09-11,91277964.04209669\r
2021-09-21,86175752.2982157\r
2021-10-06,71828129.23304792\r
2021-10-11,73216782.55827703\r
2021-10-13,74678264.39571282\r
2021-10-16,72848638.95892654\r
2021-10-18,74914283.58565259\r
2022-04-09,55251659.39768653\r
2022-04-11,55251659.39768653\r
2022-04-14,55254216.45571242\r
2022-04-16,55159629.83894246\r
2022-04-19,59376552.0304614\r
2022-04-24,59530898.02714427\r
2022-04-26,59530898.02714427\r
2022-04-29,61118129.42904308\r
2022-05-29,80828882.35988954\r
2022-05-31,81065018.07333808\r
2022-07-03,82205498.47848794\r
2022-07-05,82205498.47848794\r
2022-07-08,83066282.59432864\r
2022-07-10,83066282.59432864\r
2022-07-13,83066282.59432864\r
2022-08-12,81523501.21961126\r
2022-08-14,81330205.83224475\r
2022-08-19,81010284.623045\r
2022-08-22,81148580.77726822\r
2022-09-11,83043059.94698372\r
2022-09-16,83124348.0516286\r
2022-09-18,83124348.0516286\r
2022-09-26,80472206.54501086\r
2022-09-28,78873256.65786755\r
2022-10-01,79774662.42822513\r
2022-10-03,79774662.42822513\r
2022-10-06,80161953.65476228\r
2022-10-11,80713772.0198327\r
2022-10-13,81007404.23380433\r
2022-10-16,80190665.10429321\r
2022-10-18,80078708.54667479\r
2023-03-05,77165141.82422584\r
2023-03-07,77165141.82422584\r
2023-03-10,77165141.82422584\r
2023-03-12,77165141.82422584\r
2023-03-15,77165141.82422584\r
2023-03-25,79276348.95818429\r
2023-03-27,79276348.95818429\r
2023-03-30,80549828.01735945\r
2023-04-01,82857351.52950951\r
2023-04-04,82857351.52950951\r
2023-04-06,82857351.52950951\r
2023-04-09,82857351.52950951\r
2023-04-14,80141857.54385462\r
2023-04-16,80141857.54385462\r
2023-04-19,80161953.65476228\r
2023-04-24,81016045.49713445\r
2023-04-26,80624596.625877\r
`;export{n as default};
