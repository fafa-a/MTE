const n=`date,value\r
2017-02-19,377547.3148861238\r
2017-02-22,411031.3996890022\r
2017-03-11,385995.98427731456\r
2017-03-14,382368.823041098\r
2017-04-03,473222.0502094007\r
2017-04-10,407340.7122762019\r
2017-04-20,416584.5716942685\r
2017-04-23,360805.73534890416\r
2017-05-23,397543.8861888208\r
2017-06-02,368552.6035312961\r
2017-06-09,394495.8862493765\r
2017-06-12,389025.8084455299\r
2017-06-19,392062.1443463912\r
2017-06-22,429621.32644727064\r
2017-07-04,362589.4485262283\r
2017-07-07,308447.2222103301\r
2017-07-14,293188.7585477839\r
2017-07-17,303904.0088405977\r
2017-08-03,181328.93134232084\r
2017-08-06,179855.72821463825\r
2017-08-18,171086.56479026665\r
2017-08-21,138628.28981587692\r
2017-08-23,139999.8911524643\r
2017-08-26,121142.86848053313\r
2017-09-07,108999.71090254853\r
2017-09-27,95978.3748989307\r
2017-10-05,61680.45072369842\r
2017-10-07,71756.23031354869\r
2017-10-10,66106.71499625786\r
2017-10-12,58416.91566583583\r
2017-10-15,63146.47168722191\r
2017-10-17,61315.43104455081\r
2017-10-22,12198.738451721996\r
2017-10-27,42208.450250505084\r
2017-10-30,23558.531675805363\r
2017-11-21,30840.30169159826\r
2018-01-15,101383.33695319439\r
2018-01-23,24403.437548427806\r
2018-02-19,214554.7918616862\r
2018-02-24,223878.3396344103\r
2018-02-27,326803.892406421\r
2018-03-14,291506.5927453633\r
2018-03-19,309585.9213219038\r
2018-03-21,389025.8084455299\r
2018-03-31,323916.4594155477\r
2018-04-18,428998.0255005185\r
2018-04-20,416584.5716942685\r
2018-04-30,437120.3220508489\r
2018-05-05,398764.8930371539\r
2018-05-20,266598.32759075065\r
2018-06-09,394495.8862493765\r
2018-06-19,370945.34891848767\r
2018-06-22,389632.55541666166\r
2018-06-24,385995.98427731456\r
2018-06-27,415348.76106370956\r
2018-06-29,438373.6226258862\r
2018-07-02,430244.8765024145\r
2018-07-07,421537.9040390776\r
2018-07-09,386601.4270754796\r
2018-07-17,372143.3189726864\r
2018-07-19,369150.39005439787\r
2018-07-24,367357.8312974103\r
2018-07-27,343689.0042032077\r
2018-07-29,311866.7810487936\r
2018-08-01,313580.44718046504\r
2018-08-03,282580.2840355339\r
2018-08-11,302205.0991384403\r
2018-08-16,190735.43522133175\r
2018-08-18,244447.82893299847\r
2018-08-21,206869.3088648547\r
2018-08-26,186758.84610949087\r
2018-08-28,175943.4282760825\r
2018-09-02,149237.94456963343\r
2018-09-05,160059.55859268858\r
2018-09-10,137260.41524175194\r
2018-09-17,125120.06035874478\r
2018-09-20,121583.02840521584\r
2018-09-25,119825.03123285815\r
2018-09-27,106868.85149636256\r
2018-10-02,137260.41524175194\r
2018-10-05,85418.27731358883\r
2018-10-17,95978.3748989307\r
2018-10-20,81843.00077691265\r
2018-10-22,78700.6338213801\r
2018-11-04,96391.23645497998\r
2018-11-24,248728.17517915997\r
2019-01-03,306741.34235983464\r
2019-02-04,367955.0838807614\r
2019-02-12,325070.5857642156\r
2019-02-14,330858.1230981506\r
2019-02-17,326225.84154306276\r
2019-02-22,359617.94005876983\r
2019-02-27,386601.4270754796\r
2019-03-16,318162.83260799176\r
2019-03-21,387207.13107486547\r
2019-03-24,427129.6189374338\r
2019-03-29,419059.2225846817\r
2019-03-31,425885.26309137745\r
2019-04-05,382368.823041098\r
2019-04-13,450329.04908125405\r
2019-04-15,434616.6883276484\r
2019-04-20,442139.4439657322\r
2019-04-23,427129.6189374338\r
2019-05-03,464919.1144408832\r
2019-05-23,435242.2254314024\r
2019-05-30,412880.1761791687\r
2019-06-02,501621.5581385008\r
2019-06-07,439627.9106471508\r
2019-06-12,427752.17158264015\r
2019-06-17,425263.46021812316\r
2019-06-19,441511.19137094036\r
2019-06-24,415348.76106370956\r
2019-06-27,422778.7528920176\r
2019-06-29,329118.910461679\r
2019-07-02,440883.18484792614\r
2019-07-04,420917.8563946193\r
2019-07-07,406112.522423039\r
2019-07-14,378149.0813927762\r
2019-07-17,376344.5740533263\r
2019-07-19,343689.0042032077\r
2019-07-22,321611.6022411358\r
2019-07-24,317015.5210373531\r
2019-07-29,220239.54829353117\r
2019-08-03,269335.50725707586\r
2019-08-08,211984.39474993868\r
2019-08-11,194233.79428924544\r
2019-08-13,222316.84744361843\r
2019-08-16,203309.30900151838\r
2019-08-23,141375.20280302945\r
2019-08-26,143214.6951927305\r
2019-08-28,169636.8305651706\r
2019-08-31,150170.6384335707\r
2019-09-02,162439.4784834388\r
2019-09-07,152978.28953398432\r
2019-09-12,125564.14788047684\r
2019-09-15,115027.1549069938\r
2019-09-17,98878.61103737859\r
2019-09-20,100128.81733312517\r
2019-09-27,95566.00180085114\r
2019-10-25,135442.40845156604\r
2019-11-16,1273.0702100460026\r
2019-12-06,404272.1542288489\r
2019-12-29,380558.78361918905\r
2020-02-07,257891.38590220077\r
2020-02-12,333180.99404313724\r
2020-02-22,357245.58905958803\r
2020-02-24,349565.4208046413\r
2020-03-20,401209.99641280435\r
2020-03-25,396323.9111259074\r
2020-03-28,496424.2078837518\r
2020-04-02,477709.578775016\r
2020-04-04,495775.5881795542\r
2020-04-07,482852.4308003284\r
2020-04-09,444025.6766105653\r
2020-04-14,500971.07467978797\r
2020-04-24,445914.11825961596\r
2020-05-04,418440.1815784708\r
2020-05-09,437120.3220508489\r
2020-05-17,423399.5537689381\r
2020-05-19,378751.11170770903\r
2020-05-22,432741.5645657055\r
2020-05-27,477067.78957763547\r
2020-05-29,417821.39264951186\r
2020-06-23,413496.9424298684\r
2020-07-01,397543.8861888208\r
2020-07-08,367357.8312974103\r
2020-07-11,344275.4101189165\r
2020-07-13,322187.3915272726\r
2020-07-18,302771.1109360914\r
2020-07-21,335508.3329728996\r
2020-07-23,251951.8181530027\r
2020-07-28,205341.511376306\r
2020-07-31,270432.5318768412\r
2020-08-05,159584.73710991754\r
2020-08-07,146913.23009552067\r
2020-08-10,154857.98746141026\r
2020-08-20,98047.54850815666\r
2020-08-27,66852.58081131185\r
2020-09-01,29639.482581869357\r
2020-09-04,33898.80952606421\r
2020-09-14,8201.615242414155\r
2020-09-16,8836.968712757161\r
2020-09-19,9051.627058067445\r
2020-10-31,28747.55088774886\r
2020-11-18,20802.630987144967\r
2020-11-23,53439.079464151066\r
2020-12-13,38311.056141308836\r
2021-01-24,176919.28028176198\r
2021-02-21,378751.11170770903\r
2021-02-23,401821.91490909475\r
2021-02-28,445284.3925251998\r
2021-03-20,471942.0437191604\r
2021-03-23,447174.3045046935\r
2021-03-25,456656.81128459866\r
2021-03-28,427752.17158264015\r
2021-03-30,493831.1311228794\r
2021-04-02,464919.1144408832\r
2021-04-04,409184.9101777185\r
2021-04-14,449697.6117595002\r
2021-04-24,452224.82380401384\r
2021-05-27,381765.21382220846\r
2021-06-01,383576.82878172165\r
2021-06-03,450960.7302982471\r
2021-06-11,420917.8563946193\r
2021-06-13,397543.8861888208\r
2021-06-16,440255.4245541037\r
2021-06-18,389632.55541666166\r
2021-06-26,449697.6117595002\r
2021-07-11,373942.2664192829\r
2021-07-21,367357.8312974103\r
2021-07-23,389025.8084455299\r
2021-08-10,353695.1856677747\r
2021-08-15,366760.8459762304\r
2021-08-20,390846.8300359386\r
2021-08-25,367955.0838807614\r
2021-08-27,348976.5459074824\r
2021-09-01,349565.4208046413\r
2021-09-04,359024.44706073\r
2021-09-06,337256.76088837784\r
2021-09-24,295435.7857543995\r
2021-09-26,366760.8459762304\r
2021-10-01,261690.8743462924\r
2021-10-11,310155.7039229657\r
2021-10-14,289827.09568227665\r
2021-10-16,270432.5318768412\r
2021-10-21,217133.6966075919\r
2021-10-24,270981.5043671003\r
2021-11-30,299379.4215194667\r
2021-12-23,287033.8833048389\r
2022-01-14,239126.29957373667\r
2022-01-24,247656.17177068515\r
2022-02-01,15839.17986649734\r
2022-02-08,175456.060087122\r
2022-02-13,278145.92967460694\r
2022-02-26,278699.1668472568\r
2022-02-28,306173.2950552688\r
2022-03-05,367955.0838807614\r
2022-03-08,347211.563030841\r
2022-03-23,407340.7122762019\r
2022-03-25,400598.3348011622\r
2022-04-04,401821.91490909475\r
2022-04-14,324493.38129839825\r
2022-04-17,394495.8862493765\r
2022-04-19,445914.11825961596\r
2022-05-09,437746.8488282531\r
2022-05-19,415348.76106370956\r
2022-05-29,367955.0838807614\r
2022-06-06,375142.8907241907\r
2022-06-11,356653.17739382567\r
2022-06-13,369748.44325582066\r
2022-06-16,292067.0184941237\r
2022-06-18,347799.61681287456\r
2022-06-21,302205.0991384403\r
2022-06-28,348387.94450772624\r
2022-07-03,359617.94005876983\r
2022-07-06,327382.2249534002\r
2022-07-08,323916.4594155477\r
2022-07-11,317015.5210373531\r
2022-07-13,314152.2434574821\r
2022-07-16,306741.34235983464\r
2022-07-18,305038.070862465\r
2022-07-21,257349.85271046552\r
2022-07-26,274281.76427969564\r
2022-07-28,244981.75223398695\r
2022-07-31,211471.34029719318\r
2022-08-07,184779.2304540949\r
2022-08-10,179365.39664952375\r
2022-08-12,172054.9387675815\r
2022-08-22,136805.2880903321\r
2022-09-01,134535.91313799887\r
2022-09-04,165787.54835955548\r
2022-09-09,139085.076992873\r
2022-09-11,166267.3764594658\r
2022-09-19,144598.60132779268\r
2022-09-21,162439.4784834388\r
2022-10-04,158162.60696899588\r
2022-10-06,150170.6384335707\r
2022-10-11,190237.10140440243\r
2022-11-18,279252.706592548\r
2022-12-05,327382.2249534002\r
2023-01-17,339591.8852893626\r
2023-02-03,369748.44325582066\r
2023-02-08,343689.0042032077\r
2023-02-11,365567.6779021982\r
2023-02-13,360211.7028881347\r
2023-02-16,325648.0725874604\r
2023-02-21,372742.7026648949\r
2023-03-05,381161.8672859958\r
2023-03-28,387813.0960918221\r
2023-04-04,376344.5740533263\r
2023-04-19,421537.9040390776\r
`;export{n as default};
