const n=`date,value\r
2017-02-15,380980.55228947656\r
2017-02-25,393281.94574140286\r
2017-03-17,436888.9708413484\r
2017-03-27,446618.0535898299\r
2017-04-03,496785.67168719746\r
2017-04-06,496785.67168719746\r
2017-04-23,532336.7319433101\r
2017-05-16,659309.237618203\r
2017-05-23,659309.237618203\r
2017-05-26,659309.237618203\r
2017-06-02,452117.2074766666\r
2017-06-05,452117.2074766666\r
2017-06-22,477407.6618183104\r
2017-06-25,451505.25103222585\r
2017-07-02,501191.406662255\r
2017-07-05,524022.0359531257\r
2017-07-07,524022.0359531257\r
2017-07-17,495528.91322522203\r
2017-07-18,495528.91322522203\r
2017-07-22,495528.91322522203\r
2017-08-14,458864.16696251073\r
2017-08-19,458864.16696251073\r
2017-08-21,486132.01001671044\r
2017-08-22,486132.01001671044\r
2017-08-24,465022.2230581123\r
2017-08-26,471203.43214380817\r
2017-08-27,471203.43214380817\r
2017-08-29,486756.8851883495\r
2017-09-03,504976.49313248735\r
2017-10-05,418811.55477337964\r
2017-10-06,418811.55477337964\r
2017-10-11,418811.55477337964\r
2017-10-13,430235.51807478047\r
2017-10-15,425414.8328656287\r
2017-10-16,443571.20847099874\r
2017-10-18,425414.8328656287\r
2017-10-25,450282.0418217506\r
2017-10-26,405693.15485108807\r
2017-10-28,405693.15485108807\r
2017-11-17,360726.4362059978\r
2017-11-22,363025.30543647276\r
2017-11-27,363025.30543647276\r
2018-02-10,146925.61577953128\r
2018-02-12,146925.61577953128\r
2018-02-18,146925.61577953128\r
2018-02-25,500561.342616841\r
2018-02-27,501821.69482537924\r
2018-03-05,501821.69482537924\r
2018-03-14,442962.54786303156\r
2018-03-17,442962.54786303156\r
2018-03-19,442962.54786303156\r
2018-03-20,442962.54786303156\r
2018-03-24,442962.54786303156\r
2018-04-18,533619.1971368538\r
2018-04-19,533619.1971368538\r
2018-04-21,525298.8082576632\r
2018-04-26,529134.3916623725\r
2018-05-06,444789.2385243233\r
2018-05-08,509402.58962481027\r
2018-05-11,484258.7476510059\r
2018-05-18,513839.59068622504\r
2018-05-19,501191.406662255\r
2018-05-21,501191.406662255\r
2018-05-26,466256.6169019173\r
2018-06-20,507504.35346983495\r
2018-06-22,527854.9870372157\r
2018-06-23,527854.9870372157\r
2018-06-25,525298.8082576632\r
2018-06-27,507504.35346983495\r
2018-06-28,507504.35346983495\r
2018-07-03,538757.7727375109\r
2018-07-07,545845.9990973844\r
2018-07-08,544555.2826637541\r
2018-07-12,472442.44063313596\r
2018-07-22,472442.44063313596\r
2018-07-27,496157.1799049656\r
2018-07-28,496157.1799049656\r
2018-07-30,525937.523854969\r
2018-08-01,525937.523854969\r
2018-08-02,525937.523854969\r
2018-08-04,525937.523854969\r
2018-08-06,493645.46504087956\r
2018-08-07,538114.6894302956\r
2018-08-11,526576.4589277671\r
2018-08-12,526576.4589277671\r
2018-08-14,526576.4589277671\r
2018-08-16,526576.4589277671\r
2018-08-19,498672.4964124753\r
2018-08-22,457021.28501141496\r
2018-08-26,472442.44063313596\r
2018-09-08,449059.7717710621\r
2018-09-10,466256.6169019173\r
2018-09-11,466256.6169019173\r
2018-09-18,465022.2230581123\r
2018-09-20,494900.87177187204\r
2018-09-25,491764.04725040594\r
2018-09-26,491764.04725040594\r
2018-09-28,491764.04725040594\r
2018-09-30,496157.1799049656\r
2018-10-05,468728.178669473\r
2018-10-06,444789.2385243233\r
2018-10-10,496785.67168719746\r
2018-10-11,433861.0942668061\r
2018-10-13,473682.3688900819\r
2018-10-16,433861.0942668061\r
2018-10-18,468109.94179946184\r
2018-10-20,448448.98927716643\r
2018-10-21,448448.98927716643\r
2018-10-23,457021.28501141496\r
2018-10-25,465022.2230581123\r
2018-10-30,449059.7717710621\r
2018-11-04,364752.1650352415\r
2018-11-09,364752.1650352415\r
2018-11-14,360726.4362059978\r
2018-11-19,360726.4362059978\r
2018-11-22,403913.4579316881\r
2018-11-24,376904.7534699291\r
2018-11-27,401543.97535874986\r
2019-02-05,393281.94574140286\r
2019-02-13,393281.94574140286\r
2019-02-15,393870.477409345\r
2019-02-17,352142.61073806067\r
2019-02-18,352142.61073806067\r
2019-02-20,389169.2052903994\r
2019-02-22,384483.9425042416\r
2019-02-23,384483.9425042416\r
2019-02-25,342485.3691701083\r
2019-02-27,379232.26320679043\r
2019-03-07,390343.02571775834\r
2019-03-22,385653.752728277\r
2019-03-24,385653.752728277\r
2019-03-27,438101.78770098666\r
2019-03-29,386239.0346212408\r
2019-03-30,386239.0346212408\r
2019-04-01,386239.0346212408\r
2019-04-08,389169.2052903994\r
2019-04-09,389169.2052903994\r
2019-04-11,389169.2052903994\r
2019-04-13,373421.1017055411\r
2019-04-18,425414.8328656287\r
2019-04-19,425414.8328656287\r
2019-05-01,439315.55497246614\r
2019-05-06,429632.09270687826\r
2019-05-13,453341.82335440675\r
2019-05-14,453341.82335440675\r
2019-05-16,453341.82335440675\r
2019-05-23,438101.78770098666\r
2019-05-28,409259.1775102078\r
2019-05-29,461324.6024840536\r
2019-05-31,398587.67558755196\r
2019-06-02,405693.15485108807\r
2019-06-08,392693.6630783358\r
2019-06-27,382731.113561766\r
2019-06-28,382731.113561766\r
2019-06-30,401543.97535874986\r
2019-07-02,393281.94574140286\r
2019-07-03,384483.9425042416\r
2019-07-05,417614.102754137\r
2019-07-07,417614.102754137\r
2019-07-08,417614.102754137\r
2019-07-10,403320.7176901375\r
2019-07-12,403320.7176901375\r
2019-07-13,423010.26126801915\r
2019-07-15,414624.72079961427\r
2019-07-17,405099.6766688025\r
2019-07-20,408664.22765794734\r
2019-07-22,401543.97535874986\r
2019-07-23,401543.97535874986\r
2019-07-25,417015.74056434014\r
2019-08-02,396816.8651738494\r
2019-08-04,424212.0651649838\r
2019-08-09,437495.26039821375\r
2019-08-12,414027.5738657601\r
2019-08-14,420609.5496420835\r
2019-08-22,382731.113561766\r
2019-08-24,386824.56748094736\r
2019-08-26,378650.0058948321\r
2019-08-29,378650.0058948321\r
2019-08-31,389169.2052903994\r
2019-09-03,405693.15485108807\r
2019-09-06,405693.15485108807\r
2019-09-10,398587.67558755196\r
2019-09-13,384483.9425042416\r
2019-09-15,368212.8261450201\r
2019-09-16,375742.51980789995\r
2019-09-18,361300.76616953465\r
2019-09-20,361300.76616953465\r
2019-09-21,361300.76616953465\r
2019-10-03,361300.76616953465\r
2019-10-13,242037.9319930192\r
2019-10-21,242037.9319930192\r
2019-11-09,282423.414355543\r
2019-11-20,276547.0547894698\r
2019-11-22,285106.0066252975\r
2019-11-24,277079.8233533254\r
2019-12-04,261748.23813919185\r
2019-12-05,261748.23813919185\r
2020-02-15,423010.26126801915\r
2020-02-18,423010.26126801915\r
2020-02-20,445398.6076883983\r
2020-02-22,426618.5631855601\r
2020-03-13,515109.3024081435\r
2020-03-18,520833.954142927\r
2020-03-19,520833.954142927\r
2020-03-21,520833.954142927\r
2020-03-23,493018.10001195443\r
2020-03-24,493018.10001195443\r
2020-03-26,504976.49313248735\r
2020-03-28,504345.0862117162\r
2020-03-31,510669.19330311037\r
2020-04-02,513839.59068622504\r
2020-04-05,508769.62153795385\r
2020-04-07,508769.62153795385\r
2020-04-08,506239.9770125294\r
2020-04-10,508136.87611283746\r
2020-04-12,490510.89838360663\r
2020-04-13,491137.3597675949\r
2020-04-15,484882.9411210912\r
2020-04-17,493018.10001195443\r
2020-04-22,518923.74900620483\r
2020-04-23,518923.74900620483\r
2020-04-27,518923.74900620483\r
2020-05-17,468109.94179946184\r
2020-05-18,468109.94179946184\r
2020-05-20,536829.1748423069\r
2020-05-25,478029.3458802924\r
2020-05-27,489258.65441374393\r
2020-05-28,489258.65441374393\r
2020-05-30,488632.872079154\r
2020-06-01,511302.82865466643\r
2020-06-02,508769.62153795385\r
2020-06-26,471203.43214380817\r
2020-06-29,471203.43214380817\r
2020-07-04,534902.534721418\r
2020-07-06,534902.534721418\r
2020-07-07,534902.534721418\r
2020-07-09,491137.3597675949\r
2020-07-11,491137.3597675949\r
2020-07-12,592880.3831709432\r
2020-07-14,592880.3831709432\r
2020-07-17,592880.3831709432\r
2020-07-19,568572.5915531077\r
2020-07-21,598836.4145425457\r
2020-07-22,598836.4145425457\r
2020-07-24,579705.2868411739\r
2020-07-27,606138.8201869024\r
2020-07-29,572494.8031263405\r
2020-07-31,585623.7150050302\r
2020-08-05,570532.7439998243\r
2020-08-06,570532.7439998243\r
2020-08-08,578392.3922332308\r
2020-08-10,572494.8031263405\r
2020-08-15,540044.590814941\r
2020-08-20,538114.6894302956\r
2020-08-25,531055.1400529349\r
2020-09-04,501191.406662255\r
2020-09-07,513839.59068622504\r
2020-09-09,491764.04725040594\r
2020-09-10,540688.3253602429\r
2020-09-12,488632.872079154\r
2020-09-14,513839.59068622504\r
2020-09-15,513839.59068622504\r
2020-09-17,484258.7476510059\r
2020-11-11,394459.2579205037\r
2020-11-14,394459.2579205037\r
2020-11-18,427823.25494423544\r
2020-11-19,427823.25494423544\r
2020-11-21,415819.7445799769\r
2020-11-23,415819.7445799769\r
2020-11-28,415819.7445799769\r
2020-11-29,415819.7445799769\r
2020-12-04,421809.422363\r
2021-02-14,438708.55260666297\r
2021-02-17,438708.55260666297\r
2021-02-21,446008.2127569297\r
2021-02-24,442354.12372208654\r
2021-02-27,484258.7476510059\r
2021-03-01,433256.2342013082\r
2021-03-04,495528.91322522203\r
2021-03-06,495528.91322522203\r
2021-03-08,424212.0651649838\r
2021-03-09,424212.0651649838\r
2021-03-28,514474.335754143\r
2021-03-29,514474.335754143\r
2021-03-31,554905.1524665174\r
2021-04-02,498043.3300644071\r
2021-04-03,498043.3300644071\r
2021-04-05,498043.3300644071\r
2021-04-07,498043.3300644071\r
2021-04-08,494273.05566900194\r
2021-05-27,394459.2579205037\r
2021-05-28,394459.2579205037\r
2021-05-30,527854.9870372157\r
2021-06-01,444789.2385243233\r
2021-06-09,545200.5328438607\r
2021-06-11,461324.6024840536\r
2021-06-14,540688.3253602429\r
2021-06-16,582333.5999204618\r
2021-06-26,489258.65441374393\r
2021-07-04,510035.7802532056\r
2021-07-07,458249.639925401\r
2021-07-11,473682.3688900819\r
2021-07-19,539401.0732365707\r
2021-07-21,466256.6169019173\r
2021-07-22,525298.8082576632\r
2021-07-29,485507.36195200647\r
2021-09-07,505608.12343983876\r
2021-09-12,557501.2143968566\r
2021-09-17,557501.2143968566\r
2021-09-22,506872.05372949253\r
2021-09-24,497414.38844819285\r
2021-09-25,497414.38844819285\r
2021-09-27,497414.38844819285\r
2021-09-30,497414.38844819285\r
2021-10-02,466874.1607830873\r
2021-10-04,532977.8554342544\r
2021-10-09,501821.69482537924\r
2021-10-14,441745.9361893616\r
2021-10-15,441745.9361893616\r
2021-10-17,449059.7717710621\r
2021-10-19,444180.1054050134\r
2021-10-22,468109.94179946184\r
2021-10-24,443571.20847099874\r
2021-10-27,430235.51807478047\r
2021-11-01,415222.111088393\r
2022-01-25,448448.98927716643\r
2022-02-09,424813.32861396135\r
2022-02-26,409854.3720979147\r
2022-02-27,409854.3720979147\r
2022-03-06,432651.6128891765\r
2022-03-08,429028.9069649426\r
2022-03-09,465639.30428255815\r
2022-03-26,449059.7717710621\r
2022-04-15,466874.1607830873\r
2022-04-17,556202.7550182898\r
2022-04-20,556202.7550182898\r
2022-04-22,556202.7550182898\r
2022-05-15,515744.4905295584\r
2022-05-17,527215.613360361\r
2022-06-11,485507.36195200647\r
2022-06-14,485507.36195200647\r
2022-06-16,480518.36854605697\r
2022-06-21,480518.36854605697\r
2022-06-29,504976.49313248735\r
2022-07-02,459478.9268721938\r
2022-07-04,487381.9873402579\r
2022-07-06,455180.50258095533\r
2022-07-11,485507.36195200647\r
2022-07-12,485507.36195200647\r
2022-07-14,506872.05372949253\r
2022-07-16,521471.13015863125\r
2022-07-17,521471.13015863125\r
2022-07-19,521471.13015863125\r
2022-07-21,501191.406662255\r
2022-07-24,504976.49313248735\r
2022-07-31,518923.74900620483\r
2022-08-03,542620.8296762549\r
2022-08-06,543910.2486682205\r
2022-08-08,539401.0732365707\r
2022-08-10,532336.7319433101\r
2022-08-11,531695.8267781184\r
2022-08-13,541332.276760251\r
2022-08-18,534902.534721418\r
2022-08-25,518923.74900620483\r
2022-08-28,518923.74900620483\r
2022-08-31,486132.01001671044\r
2022-09-02,486132.01001671044\r
2022-09-04,486132.01001671044\r
2022-09-12,540044.590814941\r
2022-09-19,540688.3253602429\r
2022-09-20,540688.3253602429\r
2022-09-22,483011.0433024346\r
2022-10-04,453341.82335440675\r
2022-10-05,453341.82335440675\r
2022-10-09,488007.31634595676\r
2022-10-19,480518.36854605697\r
2022-10-22,444789.2385243233\r
2022-11-11,380980.55228947656\r
2022-11-13,496785.67168719746\r
2023-02-09,409854.3720979147\r
2023-02-11,465639.30428255815\r
2023-02-12,465639.30428255815\r
2023-02-14,396816.8651738494\r
2023-02-16,396816.8651738494\r
2023-04-05,450282.0418217506\r
2023-04-08,423010.26126801915\r
2023-04-13,423010.26126801915\r
2023-04-20,460709.1447680199\r
`;export{n as default};
