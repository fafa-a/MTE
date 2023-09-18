const n=`date,value\r
2017-02-11,925326.5849844329\r
2017-02-18,900389.3216363474\r
2017-02-21,934144.6767284623\r
2017-03-30,1262872.9263066684\r
2017-04-02,1262872.9263066684\r
2017-04-09,1262125.5813807037\r
2017-04-12,1397482.0158797877\r
2017-04-19,1081630.9321566664\r
2017-04-22,1026237.6358002878\r
2017-04-29,984131.8045984703\r
2017-05-02,1020920.4505928033\r
2017-06-18,1111330.5827212268\r
2017-06-21,1015618.7004682608\r
2017-06-28,1078891.0213918178\r
2017-07-01,834954.2963990215\r
2017-08-07,1001118.3973398184\r
2017-08-20,899770.7664914943\r
2017-08-22,899770.7664914943\r
2017-08-25,899770.7664914943\r
2017-08-27,1182864.1953610296\r
2017-10-11,914057.6880745253\r
2017-10-14,899770.7664914943\r
2017-10-16,920935.0642154801\r
2017-10-19,917180.1958871145\r
2017-10-21,956394.6702918471\r
2017-10-24,932251.1495453899\r
2017-11-13,729235.6926379057\r
2017-11-15,741389.5162272084\r
2017-11-18,816680.5315228823\r
2017-11-23,816680.5315228823\r
2017-11-25,800948.6233399673\r
2018-03-20,1089185.723089015\r
2018-03-25,1257646.7041733174\r
2018-03-30,1257646.7041733174\r
2018-04-17,1155657.800230315\r
2018-04-19,1283899.0513470224\r
2018-04-22,1243522.280404973\r
2018-04-24,1198777.167068993\r
2018-04-27,1198777.167068993\r
2018-05-04,1190805.8228725903\r
2018-05-07,1190082.6291249709\r
2018-05-19,1263620.5185333805\r
2018-05-22,1263620.5185333805\r
2018-05-24,1265116.4449581043\r
2018-06-21,775108.2557566673\r
2018-06-23,1193701.053963726\r
2018-06-26,1193701.053963726\r
2018-06-28,1125297.7541493669\r
2018-07-01,1133021.284197235\r
2018-07-03,1250201.6813653852\r
2018-07-08,1190082.6291249709\r
2018-07-11,1206778.2513480575\r
2018-07-13,1163496.9508406937\r
2018-07-16,1164211.0700687992\r
2018-07-18,1164211.0700687992\r
2018-07-21,1164211.0700687992\r
2018-07-26,1208965.5298152296\r
2018-07-31,1208965.5298152296\r
2018-08-02,1284653.5749924325\r
2018-08-05,1186470.3436578293\r
2018-08-07,1307404.5884860442\r
2018-08-10,1307404.5884860442\r
2018-08-12,1307404.5884860442\r
2018-08-15,1090562.4800160034\r
2018-09-01,1303597.2457588771\r
2018-09-04,1303597.2457588771\r
2018-09-09,1303597.2457588771\r
2018-09-11,1475389.7055894881\r
2018-09-14,1488467.755498141\r
2018-09-16,1488467.755498141\r
2018-09-26,1430925.286896132\r
2018-09-29,1430925.286896132\r
2018-10-01,1430925.286896132\r
2018-10-04,1065249.7041964987\r
2018-10-09,1302076.0463864116\r
2018-10-14,1302076.0463864116\r
2018-10-16,1079575.634913186\r
2018-10-19,1080260.4912023426\r
2018-10-21,1156369.2263006712\r
2018-10-24,936040.3518439416\r
2018-11-15,794588.3324020704\r
2018-11-18,837328.6754582704\r
2018-11-20,837328.6754582704\r
2019-02-03,331885.4520469572\r
2019-02-13,362753.1124529121\r
2019-02-16,362753.1124529121\r
2019-02-18,362753.1124529121\r
2019-02-21,784241.6836801654\r
2019-02-23,436525.21567525226\r
2019-02-26,383163.254272393\r
2019-03-03,397901.2527073762\r
2019-03-08,397901.2527073762\r
2019-03-10,397901.2527073762\r
2019-03-13,19223.720298035725\r
2019-03-23,695051.4161371888\r
2019-03-25,666478.8846283052\r
2019-03-28,786534.3888385455\r
2019-03-30,780238.4496026513\r
2019-04-04,780238.4496026513\r
2019-04-07,869752.253054031\r
2019-04-09,943644.5418997165\r
2019-04-12,914681.7134645117\r
2019-04-14,960879.8234892254\r
2019-04-19,940471.9497357331\r
2019-04-22,939204.5849480615\r
2019-04-27,887449.5351938957\r
2019-04-29,1075471.5946658454\r
2019-05-07,1324230.6743940418\r
2019-05-12,1275615.641140957\r
2019-05-14,992604.7893473296\r
2019-05-19,992604.7893473296\r
2019-05-24,973759.2217817139\r
2019-05-27,973759.2217817139\r
2019-05-29,919056.5581461426\r
2019-06-01,1208236.190984844\r
2019-06-03,1208236.190984844\r
2019-06-06,1208236.190984844\r
2019-06-13,1169932.8431848658\r
2019-06-18,916555.2181137505\r
2019-06-21,916555.2181137505\r
2019-06-26,1129506.927819154\r
2019-06-28,1129506.927819154\r
2019-07-01,1014295.6735585353\r
2019-07-03,1074105.5227138647\r
2019-07-06,979586.2400041538\r
2019-07-08,985432.6982406332\r
2019-07-13,861883.6242397431\r
2019-07-16,860676.6130819168\r
2019-07-23,763775.5075020957\r
2019-07-28,764904.5846246352\r
2019-07-31,920308.657292669\r
2019-08-02,697194.5948951319\r
2019-08-05,697194.5948951319\r
2019-08-22,759268.5196634568\r
2019-08-25,1221401.9470062116\r
2019-08-27,1203137.7065782885\r
2019-08-30,998494.4964513296\r
2019-09-01,997183.9893341445\r
2019-09-04,1003088.8494150552\r
2019-09-06,879491.6281565581\r
2019-09-11,843877.6585395738\r
2019-09-16,735298.5675518392\r
2019-09-19,640107.8287388077\r
2019-09-21,699341.4626568756\r
2019-09-24,689709.5998397418\r
2019-10-01,689709.5998397418\r
2019-10-11,438178.03169481456\r
2019-10-14,438178.03169481456\r
2019-10-21,438178.03169481456\r
2020-02-06,16395.80675379743\r
2020-02-18,16395.80675379743\r
2020-02-21,618334.8178636839\r
2020-03-19,90.71170245163478\r
2020-03-24,598458.2417623419\r
2020-03-27,598458.2417623419\r
2020-03-29,618334.8178636839\r
2020-04-01,669096.3442197627\r
2020-04-03,669096.3442197627\r
2020-04-08,880713.3138339156\r
2020-04-11,974405.7086752236\r
2020-04-13,936040.3518439416\r
2020-04-16,955115.3521382326\r
2020-04-18,1397482.0158797877\r
2020-04-23,1397482.0158797877\r
2020-04-26,964090.6876149123\r
2020-05-18,598458.2417623419\r
2020-05-21,794588.3324020704\r
2020-05-23,848060.0479259017\r
2020-05-26,781381.0622452706\r
2020-05-28,826083.9261448812\r
2020-05-31,725940.492901491\r
2020-06-02,776246.6640793527\r
2020-06-05,775108.2557566673\r
2020-06-07,838517.278499935\r
2020-07-07,991951.5795670118\r
2020-07-10,1166354.8974578043\r
2020-07-12,667525.1802947969\r
2020-07-15,667525.1802947969\r
2020-07-17,459558.0920683848\r
2020-07-20,688111.5461573288\r
2020-07-22,872181.4139538154\r
2020-07-27,1018267.6467371373\r
2020-07-30,1033573.98543443\r
2020-08-01,1033573.98543443\r
2020-08-04,1111330.5827212268\r
2020-08-06,1012312.9405579283\r
2020-08-09,816680.5315228823\r
2020-08-11,816680.5315228823\r
2020-08-14,816680.5315228823\r
2020-09-08,640619.1927057176\r
2020-09-10,699341.4626568756\r
2020-09-13,818439.0849035248\r
2020-09-15,818439.0849035248\r
2020-09-20,706884.5700367778\r
2020-09-25,1161356.0626128642\r
2020-09-28,1161356.0626128642\r
2020-10-18,552230.0009040934\r
2020-10-23,552230.0009040934\r
2020-10-30,552230.0009040934\r
2020-11-04,103294.91411224306\r
2020-11-09,103294.91411224306\r
2020-11-12,103294.91411224306\r
2020-11-14,188548.11152939906\r
2020-11-19,313412.05650961323\r
2020-11-22,319619.7488275688\r
2020-11-27,319619.7488275688\r
2020-11-29,127383.38005418336\r
2021-02-17,704724.7802317964\r
2021-02-27,1133724.887867966\r
2021-03-02,1133724.887867966\r
2021-03-04,1137246.5691806704\r
2021-03-09,1137246.5691806704\r
2021-03-17,1034911.0062779486\r
2021-03-19,1034911.0062779486\r
2021-03-22,1191529.2622126807\r
2021-03-24,1102997.0601538022\r
2021-03-27,1102997.0601538022\r
2021-03-29,1177107.117899873\r
2021-04-01,1228750.7353800223\r
2021-04-03,1257646.7041733174\r
2021-04-06,1158504.973045328\r
2021-04-08,1160642.9229632975\r
2021-04-11,1070694.5884065907\r
2021-04-13,1119000.4596407085\r
2021-04-16,1211155.022564514\r
2021-04-18,1182143.7019682464\r
2021-04-21,1211155.022564514\r
2021-04-23,1151394.3824318256\r
2021-04-28,1308166.801904606\r
2021-05-03,1046314.710363198\r
2021-05-08,1469688.339061486\r
2021-05-11,991951.5795670118\r
2021-05-13,991951.5795670118\r
2021-05-28,1382498.024480372\r
2021-05-31,1230223.4505323174\r
2021-06-05,1384857.9159862609\r
2021-06-07,1384857.9159862609\r
2021-06-10,1093318.9107101164\r
2021-06-15,1089185.723089015\r
2021-06-22,1089185.723089015\r
2021-06-25,1044969.4717642205\r
2021-07-17,993258.2395019255\r
2021-07-20,1046987.6924633482\r
2021-07-22,1046987.6924633482\r
2021-07-25,1046987.6924633482\r
2021-07-30,1001118.3973398184\r
2021-08-11,1426120.6004406177\r
2021-08-14,1429322.7210314886\r
2021-08-24,1091940.2091747664\r
2021-08-26,1469688.339061486\r
2021-08-29,1469688.339061486\r
2021-08-31,1469688.339061486\r
2021-09-03,1469688.339061486\r
2021-09-05,1469688.339061486\r
2021-09-23,1193701.053963726\r
2021-09-28,1193701.053963726\r
2021-09-30,1001774.9740568409\r
2021-10-03,1208965.5298152296\r
2021-10-08,800948.6233399673\r
2021-10-10,800948.6233399673\r
2021-10-23,1178544.915367131\r
2021-10-28,1180703.4513081748\r
2021-11-04,874005.7702742124\r
2021-11-09,835547.537835134\r
2021-11-17,846266.1800085285\r
2021-11-19,897298.9217789663\r
2021-11-24,864300.4835497589\r
2022-02-05,819612.6286166877\r
2022-02-07,819612.6286166877\r
2022-02-12,819612.6286166877\r
2022-03-07,1029568.7188878284\r
2022-03-09,1029568.7188878284\r
2022-03-12,1030902.8418868058\r
2022-03-14,1108548.845810882\r
2022-03-22,1137951.6381601153\r
2022-03-24,1088497.7091671668\r
2022-03-27,1134428.7357121338\r
2022-04-01,1134428.7357121338\r
2022-04-11,1059820.332657815\r
2022-04-13,1059820.332657815\r
2022-04-16,1294484.9384398134\r
2022-04-21,1147139.7709281042\r
2022-04-26,1127401.2429285834\r
2022-05-01,1132317.9246820593\r
2022-05-03,1230960.1779064182\r
2022-05-06,1038257.7860218148\r
2022-05-08,1236862.874347851\r
2022-05-11,1039598.189359884\r
2022-05-13,1034911.0062779486\r
2022-05-16,1003088.8494150552\r
2022-05-21,990645.8810545427\r
2022-05-28,1031570.2655523518\r
2022-05-31,1027569.3449430029\r
2022-06-02,1325766.2843724487\r
2022-06-05,1325766.2843724487\r
2022-06-07,1325766.2843724487\r
2022-06-10,1494209.6958403026\r
2022-06-12,1360580.7902407607\r
2022-06-15,1427721.158923899\r
2022-06-17,1542261.8000549565\r
2022-06-27,1452658.2358180664\r
2022-07-02,1460753.9713700903\r
2022-07-05,1242040.684883124\r
2022-07-07,1114116.2172226289\r
2022-07-10,1105771.0053394374\r
2022-07-12,1093318.9107101164\r
2022-07-15,1080260.4912023426\r
2022-07-17,1190082.6291249709\r
2022-07-20,1162783.076533825\r
2022-07-27,794588.3324020704\r
2022-07-30,828444.1805492516\r
2022-08-06,709589.5035646327\r
2022-08-09,771131.1796255928\r
2022-08-11,718829.498056524\r
2022-08-29,1065929.4661820002\r
2022-09-03,1065929.4661820002\r
2022-09-05,1065929.4661820002\r
2022-09-08,1065929.4661820002\r
2022-09-18,851654.1550133112\r
2022-09-20,895447.5323650616\r
2022-09-30,822550.6008325183\r
2022-10-08,649347.3233405417\r
2022-10-18,649347.3233405417\r
2022-11-12,629421.8782197338\r
2022-11-17,629421.8782197338\r
2022-11-19,718829.498056524\r
2022-11-22,718829.498056524\r
2022-11-29,627397.8550918526\r
2023-02-05,976346.6085315684\r
2023-02-07,976346.6085315684\r
2023-02-10,1036918.3492947861\r
2023-02-12,929729.7869742359\r
2023-02-15,934776.3297490889\r
2023-02-20,884996.6804324036\r
2023-02-27,907830.523646966\r
2023-03-02,907830.523646966\r
2023-03-04,973112.9747195471\r
2023-05-26,1040939.5594561221\r
2023-05-28,1146431.5249084479\r
2023-05-31,1095388.786535872\r
2023-06-02,1097460.8510229194\r
2023-06-05,1096079.2314895287\r
2023-06-07,1194425.4758496305\r
2023-06-10,1310454.932213895\r
2023-06-15,1329609.6622629366\r
2023-06-22,1012973.6106009827\r
2023-06-25,1105771.0053394374\r
2023-07-07,1286918.6327980182\r
2023-07-10,1287674.1477468899\r
2023-07-15,1287674.1477468899\r
2023-07-17,1287674.1477468899\r
2023-07-20,716104.915317072\r
2023-08-09,1053055.4186858302\r
2023-08-19,1102304.1823605844\r
2023-09-03,1199503.3090868676\r
2023-09-05,1199503.3090868676\r
2023-09-08,816094.8169002811\r
2023-09-10,816094.8169002811\r
`;export{n as default};
