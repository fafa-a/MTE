const n=`date,value\r
2017-01-26,85.38884889898502\r
2017-02-15,84.42904911467474\r
2017-02-25,74.92990599547268\r
2017-03-14,94.68329244535538\r
2017-03-17,90.01507550893669\r
2017-03-27,81.007219236274\r
2017-04-03,79.5327374900038\r
2017-04-23,90.01507550893669\r
2017-05-16,100.0\r
2017-05-26,92.71421528976572\r
2017-06-02,93.0706686257554\r
2017-07-05,95.24036359432733\r
2017-08-29,92.229260271496\r
2017-10-05,86.47910649987544\r
2017-10-15,87.45062115112219\r
2017-10-18,86.30731579507432\r
2017-11-22,83.39803049902817\r
2018-02-22,87.49776951711935\r
2018-02-25,88.75981316600848\r
2018-03-14,90.47811102091715\r
2018-03-24,92.53624870897053\r
2018-04-18,92.52007852658154\r
2018-05-06,88.79148168098484\r
2018-05-11,94.14419036735391\r
2018-05-18,87.4191960660808\r
2018-06-22,88.71232113421821\r
2018-06-27,99.11928055503026\r
2018-08-19,96.1120442386715\r
2018-09-20,86.65107042390665\r
2018-09-25,87.59210490784\r
2018-09-30,83.42871416465046\r
2018-10-05,84.5989347305342\r
2018-10-10,81.11306493235298\r
2018-10-13,81.29467774824755\r
2018-10-18,78.60699447679518\r
2018-10-20,76.91916324401762\r
2018-10-23,76.15544405688965\r
2018-11-19,67.98177151490404\r
2019-02-15,80.53931640485492\r
2019-02-17,82.00797779973121\r
2019-02-25,75.17711785638323\r
2019-02-27,76.83084458096646\r
2019-03-19,85.06313928990106\r
2019-03-22,87.35636307736308\r
2019-03-29,89.47374035584751\r
2019-04-11,86.66671209746104\r
2019-05-01,88.09609755913502\r
2019-05-13,98.20051045213901\r
2019-05-23,94.35637757923313\r
2019-06-27,98.7846803506499\r
2019-06-30,97.41881729271097\r
2019-07-02,100.0\r
2019-07-10,97.38562402147252\r
2019-07-15,93.42781555897615\r
2019-07-17,95.91432991069708\r
2019-07-25,92.87615355267216\r
2019-08-01,90.52608000382385\r
2019-08-21,76.25802733074785\r
2019-08-24,82.9384622961392\r
2019-08-26,82.86199278616881\r
2019-08-31,73.03876849993219\r
2019-09-03,75.74581115414512\r
2019-09-10,76.77199405572522\r
2019-09-13,68.86982398705783\r
2019-09-15,75.04618955576284\r
2019-09-20,73.11049939743187\r
2019-10-13,65.69202574190604\r
2020-01-21,83.72049444422849\r
2020-01-23,82.75499556146137\r
2020-02-07,83.56686148680676\r
2020-02-15,87.79667508557306\r
2020-03-13,82.38868013629151\r
2020-03-23,98.76796540039398\r
2020-03-26,84.83087600311325\r
2020-03-28,85.49755903508073\r
2020-03-31,85.04764505231222\r
2020-04-02,83.82812265320214\r
2020-04-05,83.88965596735794\r
2020-04-07,86.15129273718148\r
2020-04-10,87.63929193275993\r
2020-04-15,85.80854588807114\r
2020-04-20,86.61979137160652\r
2020-04-22,90.94235124820608\r
2020-05-07,88.72815037939655\r
2020-05-12,86.65107042390665\r
2020-05-20,95.70037235866793\r
2020-05-27,99.7734011741093\r
2020-05-30,99.99192621878592\r
2020-06-01,96.21097882230505\r
2020-06-24,96.75604165443448\r
2020-07-04,95.28959648932069\r
2020-07-06,91.50424567894342\r
2020-07-09,98.8013967351663\r
2020-07-19,97.53503891253457\r
2020-07-29,99.2030202506206\r
2020-07-31,95.93079821946905\r
2020-08-05,97.41881729271097\r
2020-08-08,96.67335601114678\r
2020-08-10,96.82221597815584\r
2020-08-20,95.56882659712504\r
2020-09-04,94.53610980395729\r
2020-09-07,92.03563935229926\r
2020-09-09,90.2703944049561\r
2020-09-12,91.05458973629494\r
2020-09-14,92.9085584012571\r
2020-09-17,91.6812035393989\r
2020-09-22,88.36444005019953\r
2020-11-06,90.7501057252979\r
2020-11-18,87.45062115112219\r
2020-11-23,89.21956731144597\r
2021-02-14,91.72949486156183\r
2021-02-21,87.073898114888\r
2021-02-24,91.87444619736334\r
2021-03-01,85.04764505231222\r
2021-03-06,86.08892359586511\r
2021-03-08,89.7760470715266\r
2021-03-23,91.55248972091638\r
2021-03-28,88.36444005019953\r
2021-03-31,81.53714856057364\r
2021-04-02,99.7734011741093\r
2021-04-25,100.0\r
2021-04-27,98.85155449431264\r
2021-05-30,94.04633950571643\r
2021-06-01,95.37167998495288\r
2021-06-14,99.90784943495076\r
2021-06-16,99.18626944282383\r
2021-07-19,95.05995335962477\r
2021-07-21,97.68456995777495\r
2021-09-02,95.2731840907977\r
2021-09-07,93.41156655988738\r
2021-09-22,91.13480306310684\r
2021-09-24,91.63292511196131\r
2021-10-14,89.7760470715266\r
2021-10-19,89.36249453380913\r
2021-10-22,85.79298294730641\r
2021-10-24,88.53829395375915\r
2021-11-11,82.87728382675007\r
2022-01-25,82.34294864781862\r
2022-02-09,84.19766597050588\r
2022-02-26,84.35188562361513\r
2022-03-06,85.90195359231963\r
2022-03-08,88.93406088766356\r
2022-03-23,88.03301829157365\r
2022-03-26,82.1753766766761\r
2022-03-28,88.09609755913502\r
2022-04-17,93.50908205143735\r
2022-04-22,97.05400677816682\r
2022-05-15,96.34297188921164\r
2022-06-11,92.40692737175264\r
2022-06-16,100.0\r
2022-06-21,94.73237912690257\r
2022-06-29,91.93890626565947\r
2022-07-06,99.1025369189131\r
2022-07-11,99.2030202506206\r
2022-07-14,96.78912594860216\r
2022-07-16,100.0\r
2022-07-19,99.4041418241652\r
2022-07-24,99.70621147089852\r
2022-08-03,96.78912594860216\r
2022-08-08,98.16718237966658\r
2022-08-10,99.0188402531434\r
2022-08-13,96.16150507877279\r
2022-08-25,97.4354160792955\r
2022-09-22,94.63421866441182\r
2022-10-09,96.9711920872918\r
2022-10-19,92.24540466165355\r
2022-10-22,91.72949486156183\r
2022-11-11,85.99541282798674\r
2022-11-13,87.34065840961345\r
2023-02-09,84.18225187588038\r
2023-02-11,87.60783248431892\r
2023-02-14,86.18248589674693\r
2023-03-01,91.0866707691699\r
2023-04-05,100.0\r
2023-04-20,96.59070621341438\r
2023-05-15,97.18658484664662\r
2023-06-01,96.2439684866123\r
2023-06-06,93.39531899392483\r
2023-06-14,98.83483380699424\r
2023-06-24,99.08579471712159\r
2023-08-18,95.78263505207359\r
2023-08-25,90.91029600205526\r
2023-09-02,99.18626944282383\r
2023-09-07,98.400599355709\r
2023-09-24,94.74874422090215\r
2023-10-07,90.81416464531583\r
2023-10-09,91.53640694087802\r
2023-10-17,86.40099834270939\r
2023-11-08,83.50544836841689\r
`;export{n as default};
