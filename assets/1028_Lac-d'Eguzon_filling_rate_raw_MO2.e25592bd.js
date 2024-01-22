const n=`date,value\r
2017-02-05,91.34367831102065\r
2017-02-25,92.08311345935488\r
2017-02-28,92.08311345935488\r
2017-03-27,94.121989130271\r
2017-03-30,91.58986419964708\r
2017-04-06,91.58986419964708\r
2017-05-26,92.46995033779682\r
2017-05-29,92.38392471048479\r
2017-06-05,92.40542780294894\r
2017-07-05,94.41486560362277\r
2017-08-14,95.65588195298007\r
2017-08-17,95.677718021865\r
2017-08-22,94.91476541362924\r
2017-08-24,94.91476541362924\r
2017-10-13,71.90094128059515\r
2017-10-16,71.90094128059515\r
2017-10-18,71.90094128059515\r
2017-11-07,74.9020516798156\r
2017-11-15,74.9020516798156\r
2017-11-17,75.79618905422288\r
2018-02-25,84.96292267358308\r
2018-03-02,84.96292267358308\r
2018-04-21,89.59675338133293\r
2018-04-24,89.59675338133293\r
2018-04-26,89.59675338133293\r
2018-05-11,95.39402079793797\r
2018-05-16,95.39402079793797\r
2018-05-19,94.45828887731555\r
2018-05-21,95.74323943214563\r
2018-06-20,92.39467598051111\r
2018-06-23,91.81489809735908\r
2018-06-25,94.34974722371898\r
2018-06-28,94.34974722371898\r
2018-07-03,94.5017209667942\r
2018-07-08,92.69593579287331\r
2018-07-10,92.69593579287331\r
2018-08-04,97.01387742475288\r
2018-08-07,95.08891678041647\r
2018-08-12,95.08891678041647\r
2018-08-14,95.08891678041647\r
2018-08-19,98.01584489247229\r
2018-08-22,98.01584489247229\r
2018-09-08,94.66466980984504\r
2018-09-11,94.66466980984504\r
2018-09-16,91.43997707619181\r
2018-09-28,88.5599744654318\r
2018-10-01,88.5599744654318\r
2018-10-06,88.5599744654318\r
2018-10-18,85.20136747682326\r
2018-10-21,85.20136747682326\r
2018-10-23,88.58107994851817\r
2019-02-15,89.75591406709087\r
2019-02-18,89.75591406709087\r
2019-02-20,92.36242382769677\r
2019-02-23,92.36242382769677\r
2019-02-25,90.54293155242097\r
2019-03-07,93.580686492099\r
2019-03-22,82.66636079836853\r
2019-03-27,87.66504491708797\r
2019-03-30,87.66504491708797\r
2019-04-01,87.64403608851858\r
2019-04-11,91.84706570012014\r
2019-06-25,97.49777760443284\r
2019-06-28,97.49777760443284\r
2019-06-30,100.0\r
2019-07-03,100.0\r
2019-07-05,98.90044808908071\r
2019-07-08,98.90044808908071\r
2019-07-10,99.27746675113583\r
2019-07-13,97.81729291578151\r
2019-07-15,98.77860708790811\r
2019-07-23,98.22562037009294\r
2019-07-25,97.2117080952511\r
2019-07-28,100.0\r
2019-08-02,100.0\r
2019-08-04,100.0\r
2019-08-29,98.14831162932661\r
2019-09-03,97.98274055149531\r
2019-09-06,97.98274055149531\r
2019-09-08,97.99377478319897\r
2019-09-11,97.99377478319897\r
2019-09-13,99.47732125003266\r
2019-09-16,99.04452749210486\r
2019-09-18,98.84505759473707\r
2019-09-21,98.97801779838589\r
2019-10-13,95.76508430325205\r
2019-10-16,95.76508430325205\r
2020-02-15,86.09555672441303\r
2020-02-18,86.09555672441303\r
2020-02-23,86.09555672441303\r
2020-03-26,81.16769769869053\r
2020-03-31,82.94294081820136\r
2020-04-03,82.94294081820136\r
2020-04-05,82.57425811297448\r
2020-04-08,82.57425811297448\r
2020-04-10,85.91847155038998\r
2020-04-13,85.50243574463849\r
2020-04-15,87.05669178689905\r
2020-04-23,90.55358769533412\r
2020-05-20,90.61753618052131\r
2020-05-25,91.48279090785971\r
2020-05-28,91.48279090785971\r
2020-05-30,90.00020266607663\r
2020-06-02,88.43338820220526\r
2020-06-24,95.02359349950595\r
2020-07-04,96.4762401265972\r
2020-07-07,96.4762401265972\r
2020-07-09,94.03528807966869\r
2020-07-14,93.74293253395969\r
2020-07-19,94.8930064043312\r
2020-07-22,93.26736274670728\r
2020-07-24,95.43764231244637\r
2020-07-27,96.27907209028123\r
2020-07-29,95.60130140896831\r
2020-08-08,93.14863719596909\r
2020-08-18,93.5374418402535\r
2020-09-12,94.92564574429613\r
2020-09-15,94.92564574429613\r
2020-09-17,93.1162690895181\r
2021-02-24,93.2133883096136\r
2021-02-27,93.2133883096136\r
2021-03-01,96.02739437162377\r
2021-03-04,96.02739437162377\r
2021-03-06,92.71747091888895\r
2021-03-09,95.12158585350564\r
2021-03-14,84.74546992732996\r
2021-03-31,85.35703389963656\r
2021-04-03,85.35703389963656\r
2021-04-05,85.35703389963656\r
2021-04-08,85.35703389963656\r
2021-06-14,91.20465919669188\r
2021-06-19,91.62199697057667\r
2021-07-19,95.41583045451776\r
2021-07-22,95.41583045451776\r
2021-07-29,95.41583045451776\r
2021-09-07,89.68162355881523\r
2021-09-12,90.21286580540242\r
2022-02-09,94.51258036657484\r
2022-02-12,94.51258036657484\r
2022-03-06,94.11114956961023\r
2022-03-09,94.11114956961023\r
2022-03-26,92.23346493753547\r
2022-04-10,83.05573849608413\r
2022-04-15,87.38161334470138\r
2022-04-20,87.38161334470138\r
2022-06-04,94.88212772571482\r
2022-06-14,93.98111783926575\r
2022-06-19,97.12376138474312\r
2022-06-24,97.12376138474312\r
2022-06-27,95.98365402711026\r
2022-06-29,98.03791719618543\r
2022-07-02,96.88208917697374\r
2022-07-04,96.88208917697374\r
2022-07-14,95.7760075639622\r
2022-07-17,95.7760075639622\r
2022-07-19,96.90404839170887\r
2022-07-24,96.12584231675059\r
2022-08-01,97.7731943973721\r
2022-08-03,99.61065616425508\r
2022-08-06,98.08206838670007\r
2022-08-08,98.8672121483153\r
2022-08-11,98.8672121483153\r
2022-08-13,96.48719912823721\r
2022-08-18,98.23666666986574\r
2022-08-28,95.61221641737552\r
2022-09-05,95.61221641737552\r
2022-09-12,94.66466980984504\r
2022-09-20,94.66466980984504\r
2022-09-22,96.13678372671963\r
2022-09-30,95.15425988141871\r
2022-11-11,82.94294081820136\r
2022-11-19,82.75850881497338\r
2023-02-09,82.65612492797173\r
2023-02-12,82.65612492797173\r
2023-02-14,84.50758975731299\r
2023-03-01,87.54952387451605\r
2023-03-04,87.54952387451605\r
2023-04-05,94.93652662563176\r
2023-04-08,94.93652662563176\r
2023-06-14,90.60687671544389\r
2023-06-24,95.66679971233845\r
2023-06-27,95.54673462026321\r
2023-07-14,98.23666666986574\r
2023-07-17,98.23666666986574\r
2023-07-19,96.12584231675059\r
2023-07-22,97.76217113967411\r
2023-08-08,100.0\r
2023-08-11,100.0\r
2023-08-16,100.0\r
2023-08-23,99.07778973625999\r
2023-09-02,95.98365402711026\r
2023-09-07,94.1978814885412\r
2023-09-10,94.1978814885412\r
2023-09-15,94.1978814885412\r
2023-10-02,94.49086211797052\r
2023-10-05,94.49086211797052\r
2023-10-07,98.24771351810413\r
2023-10-10,98.24771351810413\r
`;export{n as default};