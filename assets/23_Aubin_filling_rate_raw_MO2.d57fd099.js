const n=`date,value\r
2017-01-19,75.67383957099997\r
2017-01-26,76.23077737159255\r
2017-01-29,71.58140093521888\r
2017-02-08,67.88203949649542\r
2017-02-15,84.64982744734881\r
2017-02-18,96.10758567969839\r
2017-02-25,88.41283555833205\r
2017-03-10,90.15810918385321\r
2017-03-30,89.11996057592266\r
2017-04-06,93.41704003820946\r
2017-04-09,93.80722240991619\r
2017-04-16,98.5476700433059\r
2017-04-19,98.0346270120455\r
2017-04-29,100.0\r
2017-05-06,100.0\r
2017-05-09,97.80700325915146\r
2017-05-16,93.08319339924078\r
2017-05-19,95.99477838576641\r
2017-05-26,96.22045390174893\r
2017-06-05,93.02760573746085\r
2017-06-18,94.53383064025776\r
2017-06-25,94.53383064025776\r
2017-06-28,94.53383064025776\r
2017-07-05,90.54197849517614\r
2017-07-18,87.27603175337951\r
2017-07-23,87.27603175337951\r
2017-07-28,87.27603175337951\r
2017-08-02,82.58598446537678\r
2017-08-04,88.41283555833205\r
2017-08-07,91.53251403878599\r
2017-08-12,91.09166409373015\r
2017-08-14,91.36708060111778\r
2017-08-17,90.21290173199881\r
2017-08-22,89.99382340413179\r
2017-08-24,95.09451413609717\r
2017-08-27,85.9851169468165\r
2017-08-29,85.93152086372307\r
2017-09-01,85.93152086372307\r
2017-09-03,78.99204852827178\r
2017-09-06,78.99204852827178\r
2017-09-08,78.99204852827178\r
2017-09-13,76.9932637464874\r
2017-09-21,85.61026714849429\r
2017-09-23,85.61026714849429\r
2017-09-26,83.64143892092972\r
2017-09-28,83.64143892092972\r
2017-10-08,82.74390961884176\r
2017-10-11,83.06017613690676\r
2017-10-13,82.27055047587044\r
2017-10-16,86.57568801857619\r
2017-10-23,85.61026714849429\r
2017-10-26,83.16572160835676\r
2017-10-28,84.330788585119\r
2017-10-31,82.63861076587314\r
2017-11-02,82.63861076587314\r
2017-11-05,85.77082483363654\r
2017-11-07,82.69125248395724\r
2017-11-15,81.53669736411453\r
2017-11-17,81.79844060479357\r
2017-11-20,83.42985494351166\r
2017-11-22,80.38961240019714\r
2017-11-25,80.38961240019714\r
2017-11-27,80.38961240019714\r
2017-11-30,80.85797098715902\r
2017-12-05,81.79844060479357\r
2017-12-12,86.03872839849457\r
2017-12-15,82.84927013586434\r
2017-12-20,86.89860112692422\r
2017-12-25,91.03662668222586\r
2017-12-27,90.98160456910874\r
2017-12-30,90.98160456910874\r
2018-01-24,99.06194439089788\r
2018-01-29,99.63480384417697\r
2018-02-15,95.99477838576641\r
2018-02-25,96.44637310727165\r
2018-03-02,95.03837717218558\r
2018-03-07,95.03837717218558\r
2018-03-15,99.2909058704912\r
2018-03-17,99.2909058704912\r
2018-03-22,99.46278650156502\r
2018-03-30,99.2909058704912\r
2018-04-04,88.95654795164313\r
2018-04-19,92.91647623023833\r
2018-04-21,99.3481842228414\r
2018-04-24,97.29573970646744\r
2018-05-06,89.11996057592266\r
2018-05-11,97.57962287640792\r
2018-05-21,96.38987046250382\r
2018-05-24,91.25686811115278\r
2018-05-29,91.25686811115278\r
2018-06-03,95.43165603888401\r
2018-06-20,95.43165603888401\r
2018-06-23,96.72911473278447\r
2018-06-25,95.2068337981368\r
2018-07-03,95.43165603888401\r
2018-07-08,97.80700325915146\r
2018-07-10,97.80700325915146\r
2018-07-13,99.2909058704912\r
2018-07-15,99.2909058704912\r
2018-07-23,98.5476700433059\r
2018-07-25,90.21290173199881\r
2018-08-02,94.58983036683651\r
2018-08-04,94.8139817807751\r
2018-08-12,93.695665413104\r
2018-08-17,94.9822554539752\r
2018-08-19,95.54415860605967\r
2018-08-22,88.19577991938138\r
2018-08-27,86.79090199373127\r
2018-09-01,82.58598446537678\r
2018-09-03,81.32758058230371\r
2018-09-08,80.59761728945799\r
2018-09-11,81.58901514703754\r
2018-09-18,83.90626544718668\r
2018-09-23,74.81681329851794\r
2018-09-26,79.87068191113622\r
2018-09-28,75.11878051727435\r
2018-10-03,78.06660506478694\r
2018-10-11,82.06056960117259\r
2018-10-16,78.63155785843766\r
2018-10-21,78.63155785843766\r
2018-11-10,64.22626637525556\r
2018-11-15,70.74607719443858\r
2018-11-17,68.5567146786964\r
2018-11-22,79.25000608470035\r
2018-11-25,79.25000608470035\r
2018-12-07,77.04422024482332\r
2018-12-12,77.04422024482332\r
2018-12-20,80.28570266280424\r
2018-12-27,80.28570266280424\r
2019-02-15,84.80955462540865\r
2019-02-18,82.27055047587044\r
2019-02-20,84.54341960011386\r
2019-02-23,82.5333735832558\r
2019-02-25,84.17147694289241\r
2019-02-28,84.75629684612854\r
2019-03-05,84.91611633987428\r
2019-03-07,87.5460855801401\r
2019-03-12,87.27603175337951\r
2019-03-20,95.60043274882744\r
2019-03-22,92.6389197583214\r
2019-03-25,86.62946847405043\r
2019-03-27,86.79090199373127\r
2019-03-30,85.02273959038335\r
2019-04-04,85.02273959038335\r
2019-04-09,81.53669736411453\r
2019-04-16,84.2245654297916\r
2019-04-19,84.2245654297916\r
2019-05-01,82.69125248395724\r
2019-05-06,89.99382340413179\r
2019-05-09,89.99382340413179\r
2019-05-11,89.99382340413179\r
2019-05-14,83.27132871872102\r
2019-05-16,83.27132871872102\r
2019-05-29,70.0127733140087\r
2019-05-31,82.74390961884176\r
2019-06-03,82.74390961884176\r
2019-06-08,90.26770958968686\r
2019-06-13,85.28956689622267\r
2019-06-23,43.83252695387211\r
2019-06-25,44.14760724631598\r
2019-06-28,92.02964002514442\r
2019-07-03,92.02964002514442\r
2019-07-05,86.89860112692422\r
2019-07-08,86.89860112692422\r
2019-07-10,90.37737123070802\r
2019-07-15,89.99382340413179\r
2019-07-23,93.30569675041794\r
2019-07-25,93.30569675041794\r
2019-07-28,90.81663002749914\r
2019-08-09,78.16918439326578\r
2019-08-12,78.16918439326578\r
2019-08-14,84.3839232519913\r
2019-08-17,75.62330200622148\r
2019-08-22,75.87614509010217\r
2019-08-24,75.26997387393588\r
2019-08-27,81.0665319518987\r
2019-08-29,81.0665319518987\r
2019-09-03,83.37699746172692\r
2019-09-06,83.37699746172692\r
2019-09-08,83.16572160835676\r
2019-09-11,59.88985993070882\r
2019-09-13,80.59761728945799\r
2019-09-16,70.89315955862449\r
2019-09-18,71.23689799184257\r
2019-09-26,70.74607719443858\r
2019-10-08,76.89139726660503\r
2019-10-11,72.7187182911316\r
2019-10-13,73.31537298511367\r
2019-10-21,73.31537298511367\r
2019-10-26,80.18185473878279\r
2019-12-05,75.16916276794227\r
2019-12-10,87.81652306759686\r
2019-12-15,80.12995395879129\r
2019-12-20,80.12995395879129\r
2019-12-25,85.61026714849429\r
2019-12-27,87.70830203940726\r
2019-12-30,87.16811766895881\r
2020-01-09,92.52800410340191\r
2020-01-11,93.2500480084771\r
2020-01-14,91.53251403878599\r
2020-01-16,90.98160456910874\r
2020-01-19,87.60014238781466\r
2020-01-24,87.60014238781466\r
2020-01-29,79.4566505846538\r
2020-01-31,74.06434335861618\r
2020-02-03,72.1243066149736\r
2020-02-15,92.80540781634589\r
2020-02-18,90.87160624100325\r
2020-02-20,88.52145538667526\r
2020-02-23,88.95654795164313\r
2020-03-11,95.82568169764507\r
2020-03-21,95.82568169764507\r
2020-03-24,93.30569675041794\r
2020-03-26,89.01100350063551\r
2020-03-29,87.92480546631437\r
2020-03-31,87.92480546631437\r
2020-04-03,85.07607428971896\r
2020-04-05,85.07607428971896\r
2020-04-08,79.04360909582154\r
2020-04-10,86.8447438821631\r
2020-04-13,88.84768283472162\r
2020-04-15,88.84768283472162\r
2020-04-18,88.84768283472162\r
2020-04-23,88.84768283472162\r
2020-04-30,90.81663002749914\r
2020-05-03,90.81663002749914\r
2020-05-05,90.81663002749914\r
2020-05-18,66.58955167613047\r
2020-05-20,90.65179319809305\r
2020-05-25,90.65179319809305\r
2020-05-28,85.71729023256918\r
2020-05-30,92.58345429199622\r
2020-06-02,92.58345429199622\r
2020-06-07,96.38987046250382\r
2020-06-12,96.38987046250382\r
2020-06-14,95.37542761591608\r
2020-06-24,84.06534615451507\r
2020-06-27,84.06534615451507\r
2020-07-04,84.06534615451507\r
2020-07-07,84.06534615451507\r
2020-07-09,84.06534615451507\r
2020-07-19,80.38961240019714\r
2020-07-22,88.95654795164313\r
2020-07-24,82.48077812029811\r
2020-07-27,81.850835546783\r
2020-07-29,81.850835546783\r
2020-08-01,81.850835546783\r
2020-08-06,80.07806863454915\r
2020-08-08,74.71628187815459\r
2020-08-16,44.34505937459798\r
2020-08-18,44.34505937459798\r
2020-08-31,43.36185332565846\r
2020-09-02,60.29900879539137\r
2020-09-05,60.29900879539137\r
2020-09-07,60.29900879539137\r
2020-09-10,56.00092761229069\r
2020-09-12,54.2966559646654\r
2020-09-15,51.97694803607526\r
2020-09-17,52.57387994514217\r
2020-09-25,50.91880089665768\r
2020-09-30,44.54291667147543\r
2020-10-10,49.20513333214871\r
2020-10-12,34.6536081257544\r
2020-10-15,34.6536081257544\r
2020-10-30,56.75139015585936\r
2020-11-01,56.75139015585936\r
2020-11-04,56.75139015585936\r
2020-11-11,73.86427562837028\r
2020-11-14,70.89315955862449\r
2020-11-21,74.96772698461095\r
2020-11-26,74.96772698461095\r
2020-11-29,72.52033176876644\r
2020-12-06,75.26997387393588\r
2020-12-26,83.3241553865356\r
2021-01-03,49.91240396118944\r
2021-01-08,49.91240396118944\r
2021-01-10,49.91240396118944\r
2021-01-18,97.46602396303668\r
2021-02-17,98.5476700433059\r
2021-02-19,99.2909058704912\r
2021-02-24,92.97203334754943\r
2021-02-27,94.4218769444567\r
2021-03-09,92.69440050164367\r
2021-03-21,92.6389197583214\r
2021-03-29,98.83322603276065\r
2021-03-31,94.87005775754737\r
2021-04-03,96.84231795709445\r
2021-04-05,95.48789970250525\r
2021-04-08,95.48789970250525\r
2021-04-15,96.33338304618344\r
2021-04-18,97.29573970646744\r
2021-04-20,95.3192144343218\r
2021-04-23,100.0\r
2021-05-03,99.63480384417697\r
2021-05-08,94.70187557372878\r
2021-05-20,89.11996057592266\r
2021-05-23,89.11996057592266\r
2021-05-28,99.2909058704912\r
2021-05-30,94.8139817807751\r
2021-06-02,98.14853013812026\r
2021-06-07,94.53383064025776\r
2021-06-09,94.9822554539752\r
2021-06-14,98.14853013812026\r
2021-06-22,98.09157097153754\r
2021-07-22,88.03314922949541\r
2021-08-11,44.86033073632825\r
2021-08-16,44.86033073632825\r
2021-08-21,44.86033073632825\r
2021-08-26,79.40496625833005\r
2021-08-28,81.43210810164398\r
2021-08-31,77.60576484274591\r
2021-09-05,80.80586935533776\r
2021-09-12,82.69125248395724\r
2021-09-15,82.69125248395724\r
2021-09-17,81.32758058230371\r
2021-09-20,81.32758058230371\r
2021-09-22,81.32758058230371\r
2021-09-25,75.57277996910501\r
2021-09-30,75.47178248118729\r
2021-10-07,78.52869982450015\r
2021-10-10,78.52869982450015\r
2021-10-12,77.29923528755455\r
2021-10-15,77.29923528755455\r
2021-10-17,77.29923528755455\r
2021-10-20,70.64810033803501\r
2021-10-27,75.8255454229907\r
2021-11-01,66.01878232684801\r
2021-11-04,66.01878232684801\r
2021-11-06,66.01878232684801\r
2021-11-09,61.25866912499735\r
2021-11-11,76.33224055234034\r
2021-11-19,74.01430309351394\r
2021-12-14,96.16401217506734\r
2021-12-16,99.6921733354481\r
2021-12-19,96.16401217506734\r
2022-01-13,99.17639474332695\r
2022-01-15,99.46278650156502\r
2022-01-23,98.31949887333468\r
2022-01-25,86.36071980584238\r
2022-02-02,100.0\r
2022-02-09,86.68326428891073\r
2022-03-09,91.9743426542747\r
2022-03-19,100.0\r
2022-03-21,100.0\r
2022-03-24,100.0\r
2022-03-26,100.0\r
2022-04-03,82.84927013586434\r
2022-04-05,94.19815260257796\r
2022-04-15,94.19815260257796\r
2022-05-10,95.82568169764507\r
2022-05-15,96.67253595650874\r
2022-05-18,96.67253595650874\r
2022-05-28,91.20178480893463\r
2022-05-30,94.4218769444567\r
2022-06-09,92.36174521134556\r
2022-06-17,88.7932732682977\r
2022-06-19,88.7932732682977\r
2022-06-22,88.7932732682977\r
2022-06-24,88.7932732682977\r
2022-07-02,90.37737123070802\r
2022-07-07,90.43222501255069\r
2022-07-12,94.53383064025776\r
2022-07-14,92.36174521134556\r
2022-07-17,87.27603175337951\r
2022-07-24,84.01230385459459\r
2022-07-27,85.93152086372307\r
2022-08-01,82.21803212055944\r
2022-08-03,77.65690734087791\r
2022-08-06,76.02803722915358\r
2022-08-08,76.02803722915358\r
2022-08-11,76.02803722915358\r
2022-08-13,75.37084711390847\r
2022-08-16,71.18774568773017\r
2022-09-05,54.81846683173058\r
2022-09-10,56.53018898041158\r
2022-09-12,55.298809092119974\r
2022-09-15,55.298809092119974\r
2022-09-20,53.13097964467729\r
2022-09-22,43.518484860588174\r
2022-09-25,43.557683325290256\r
2022-09-30,43.557683325290256\r
2022-10-02,42.89351766946896\r
2022-10-05,39.49320230650017\r
2022-10-07,39.49320230650017\r
2022-10-12,39.49320230650017\r
2022-10-15,36.692095955277985\r
2022-10-17,39.38083748283089\r
2022-10-20,39.38083748283089\r
2022-10-22,37.52979586087088\r
2022-11-01,39.119225614818085\r
2022-11-04,35.11380762538228\r
2022-11-06,39.981817347982904\r
2022-11-11,38.007122891261524\r
2022-11-16,37.38348432702802\r
2022-11-19,40.8530539730306\r
2022-12-04,67.11474134247105\r
2022-12-11,67.11474134247105\r
2022-12-14,70.30567318421625\r
2022-12-21,77.60576484274591\r
2022-12-24,75.01806262477285\r
2022-12-26,78.73447780903038\r
2023-01-03,70.74607719443858\r
2023-01-10,73.66445681006842\r
2023-02-02,97.46602396303668\r
2023-02-04,100.0\r
2023-02-07,100.0\r
2023-02-09,96.95558207232314\r
2023-02-12,97.06890707276305\r
2023-02-14,89.77499007671601\r
2023-02-17,89.66566530312404\r
2023-02-19,89.66566530312404\r
2023-02-24,98.0346270120455\r
2023-03-01,89.44719956610481\r
2023-03-04,89.44719956610481\r
2023-04-05,93.30569675041794\r
2023-04-08,98.31949887333468\r
2023-04-18,98.4906044468957\r
2023-04-20,97.06890707276305\r
2023-05-20,96.27691085902643\r
2023-05-25,96.27691085902643\r
2023-05-28,98.26249408972639\r
2023-05-30,99.80695787938404\r
2023-06-02,90.70672350530103\r
2023-06-24,96.051174416359\r
2023-07-14,95.09451413609717\r
2023-07-17,98.66184683972394\r
2023-07-22,94.87005775754737\r
2023-07-27,93.13879633215761\r
2023-07-29,93.36136076057215\r
2023-08-06,90.98160456910874\r
2023-08-08,92.6389197583214\r
2023-08-11,91.20178480893463\r
2023-08-16,91.20178480893463\r
2023-08-21,90.3225327561717\r
2023-08-23,87.60014238781466\r
2023-08-28,87.60014238781466\r
2023-08-31,86.79090199373127\r
2023-09-05,84.9694202735105\r
2023-09-07,84.9694202735105\r
2023-09-10,84.9694202735105\r
2023-09-20,81.22311481245383\r
2023-09-25,81.90324591820747\r
2023-09-27,80.23377097372119\r
2023-09-30,80.80586935533776\r
2023-10-02,80.02619876685928\r
2023-10-05,80.59761728945799\r
2023-10-07,81.17090508557672\r
2023-10-10,80.80586935533776\r
2023-10-12,82.00811294619382\r
2023-10-15,82.00811294619382\r
2023-10-22,80.80586935533776\r
`;export{n as default};
