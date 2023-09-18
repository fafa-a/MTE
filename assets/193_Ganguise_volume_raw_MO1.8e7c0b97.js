const n=`date,value\r
2017-02-25,25667280.507851567\r
2017-03-17,26242176.088640604\r
2017-04-23,30880757.346047387\r
2017-05-16,30738600.479393907\r
2017-05-26,31007827.389060073\r
2017-06-02,30119250.94618139\r
2017-06-22,30207235.177290283\r
2017-07-05,27133503.69241063\r
2017-07-07,28032520.80048869\r
2017-07-17,26820177.684139654\r
2017-08-14,21947491.018277813\r
2017-08-21,21249215.630548686\r
2017-08-24,20755052.37586009\r
2017-08-26,20432332.89525193\r
2017-09-05,19372816.144150477\r
2017-09-20,18107157.040172275\r
2017-09-23,17165222.26367086\r
2017-10-05,16286459.849926252\r
2017-10-08,15923217.096436664\r
2017-10-10,15771534.515401382\r
2017-10-13,15617979.022256708\r
2017-10-15,15231710.45066165\r
2017-10-28,14077774.000362808\r
2017-11-17,14404465.339444052\r
2018-02-25,26291252.897649176\r
2018-04-01,31465596.990947105\r
2018-04-21,34348171.657460146\r
2018-05-11,36820527.822989866\r
2018-06-20,39282272.077580675\r
2018-06-25,39415790.610507295\r
2018-07-02,38713318.18821344\r
2018-07-07,37970896.73890525\r
2018-07-12,39469243.58015375\r
2018-07-15,39484281.91599532\r
2018-07-25,38603863.644086026\r
2018-07-27,39203905.85990651\r
2018-07-30,38797972.92157957\r
2018-08-01,38461408.17356147\r
2018-08-04,37763485.00889432\r
2018-08-11,37397400.640660554\r
2018-08-19,37825994.76845985\r
2018-08-21,37331870.86952779\r
2018-09-03,36441527.01404635\r
2018-09-20,35676482.179004654\r
2018-09-23,35826442.45318757\r
2018-09-25,35853878.966858245\r
2018-09-30,34562987.81651573\r
2018-10-03,34317976.907224976\r
2018-10-05,34950867.668428764\r
2018-10-25,33364659.663114443\r
2018-11-27,34453132.78159949\r
2019-01-16,37937946.99875659\r
2019-02-12,35134973.73411908\r
2019-02-15,34110051.83176329\r
2019-02-17,35644262.18751471\r
2019-02-20,35997640.2815841\r
2019-02-22,35066093.40684838\r
2019-02-25,37436738.31616512\r
2019-02-27,35117348.56359944\r
2019-03-22,35000462.0488424\r
2019-03-24,35926541.44351278\r
2019-03-27,37520380.19187128\r
2019-03-29,35562148.5551882\r
2019-04-13,34747954.59070736\r
2019-05-01,37995615.7867171\r
2019-05-13,37646790.01676264\r
2019-06-02,38942537.17534941\r
2019-06-17,37209113.86598634\r
2019-06-27,36217719.35863847\r
2019-06-30,39167243.11966164\r
2019-07-05,38532612.26013616\r
2019-07-12,37071798.54081699\r
2019-07-15,37418706.7040742\r
2019-07-25,34904495.7996134\r
2019-08-04,32212656.026416738\r
2019-08-09,31610493.534448557\r
2019-08-14,31373234.93300745\r
2019-08-16,30940441.610779274\r
2019-08-24,29037728.82516168\r
2019-08-31,29313532.694812287\r
2019-09-13,25964217.88297308\r
2019-09-20,25899561.94230259\r
2019-10-08,23068543.502165902\r
2019-11-04,25105494.334491853\r
2019-11-27,27156873.207445778\r
2020-01-06,29620408.517424885\r
2020-01-11,31360927.362479623\r
2020-02-20,34946069.55300854\r
2020-02-22,33686094.66238758\r
2020-03-08,32998886.82585654\r
2020-03-18,36786311.21646785\r
2020-03-21,38158906.372053266\r
2020-04-05,38317488.84727868\r
2020-04-10,38836172.27541155\r
2020-04-15,38178716.25938836\r
2020-05-05,37079966.966636844\r
2020-05-20,38919260.9243402\r
2020-05-22,38172112.55323916\r
2020-05-25,38570717.5836765\r
2020-05-27,39037356.36694631\r
2020-05-30,38205135.1872272\r
2020-07-09,38372056.11992835\r
2020-07-14,38497832.26084342\r
2020-07-19,37410511.54841926\r
2020-07-21,35713548.095621005\r
2020-07-24,36339292.512750864\r
2020-07-31,35740953.52814486\r
2020-08-05,32870504.777870867\r
2020-08-08,33536269.06509371\r
2020-08-10,33945305.007891275\r
2020-08-20,31538015.370422844\r
2020-08-25,30694320.203402504\r
2020-09-02,28001498.01542612\r
2020-09-04,28175976.574050818\r
2020-09-12,27609612.279696975\r
2020-09-14,28067990.519329097\r
2020-09-17,26980320.692983463\r
2020-10-17,24871557.860326607\r
2020-11-08,23684521.612352505\r
2020-11-11,25333092.18634382\r
2020-11-18,23638642.378195066\r
2020-11-21,25758956.17851163\r
2021-02-11,34613977.708068915\r
2021-03-23,36139989.372166716\r
2021-03-28,37658289.391115785\r
2021-03-31,38411758.92704979\r
2021-04-15,39803913.70385369\r
2021-04-20,38857769.18727776\r
2021-05-27,39243915.6280749\r
2021-06-16,38919260.9243402\r
2021-07-19,36973827.869144574\r
2021-07-21,37421984.946883194\r
2021-07-29,36106001.37116369\r
2021-08-10,33052171.112291124\r
2021-08-20,31330166.026544042\r
2021-08-25,29247494.41028329\r
2021-08-28,28137498.709717378\r
2021-08-30,28141937.499242015\r
2021-10-07,25642948.899153765\r
2021-10-12,24368103.296261687\r
2021-10-14,23823744.610939186\r
2021-10-24,23373727.391562574\r
2021-10-27,22788116.389962528\r
2022-01-15,30158680.75224188\r
2022-01-22,29860386.26159451\r
2022-01-25,31015488.19567998\r
2022-01-27,30759985.370315976\r
2022-02-01,32761052.65215956\r
2022-02-09,33047468.31542788\r
2022-03-23,36340914.47665656\r
2022-04-05,37569612.61141553\r
2022-04-17,37617225.99056353\r
2022-05-17,38935886.30780393\r
2022-06-01,38279473.6106183\r
2022-06-11,38992431.687561564\r
2022-07-11,34086272.5905601\r
2022-07-14,35618493.72462678\r
2022-07-16,33967465.77267658\r
2022-07-19,33215349.94625471\r
2022-07-21,32338554.867461897\r
2022-07-24,31750993.388079107\r
2022-07-31,30474785.605802163\r
2022-08-03,29236993.253272735\r
2022-08-08,29301521.754676398\r
2022-08-10,28087210.010133203\r
2022-08-23,25058644.11799647\r
2022-08-30,23970243.96533029\r
2022-09-04,22190198.15689266\r
2022-09-12,20461355.991325613\r
2022-09-19,18966778.59107296\r
2022-09-22,19287485.90661608\r
2022-10-04,18346406.050305713\r
2022-10-09,17668342.758058712\r
2022-10-22,17032846.40984365\r
2022-11-06,16121425.144287463\r
2022-11-13,15596428.589907207\r
2022-11-16,16296186.567500195\r
2022-12-06,16355808.215979423\r
2023-02-06,16740953.439677605\r
2023-02-09,17154073.67003282\r
2023-02-11,16807301.190813158\r
2023-02-16,16726222.300705973\r
2023-02-19,16774115.53131876\r
2023-03-16,18104631.340557996\r
2023-03-28,17092184.43740917\r
2023-04-05,16972348.67342173\r
2023-04-07,17103318.56841627\r
2023-05-27,18662048.819619577\r
2023-06-04,18986043.591967873\r
2023-07-14,19862820.143345486\r
2023-07-16,20388826.00640884\r
2023-07-19,20625217.264299087\r
2023-07-29,19894162.694631916\r
2023-08-08,18551099.106802043\r
2023-08-20,16675926.070007933\r
2023-08-23,16294970.613720082\r
`;export{n as default};
