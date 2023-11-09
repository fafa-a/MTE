const n=`date,value\r
2017-02-25,87746079.1694026\r
2017-03-27,124096321.99710253\r
2017-03-31,124096321.99710253\r
2017-04-03,126237915.90211885\r
2017-04-06,126237915.90211885\r
2017-04-10,125421333.13367595\r
2017-05-16,135361428.95189574\r
2017-05-23,135361428.95189574\r
2017-05-26,135063427.4840894\r
2017-06-02,131579730.63437933\r
2017-06-05,129279590.42528993\r
2017-06-22,125560184.67386277\r
2017-07-02,125032925.30882369\r
2017-07-05,117458032.7974809\r
2017-07-07,117595590.15626869\r
2017-08-14,104383894.08955483\r
2017-08-29,96144919.83141592\r
2017-09-03,95995004.3960892\r
2017-10-15,61631138.268056974\r
2017-10-17,61631138.268056974\r
2017-10-18,53489017.53970758\r
2017-10-20,53443631.266251616\r
2017-10-25,53648009.22637113\r
2017-11-22,20906378.716894418\r
2017-11-29,20966600.8270886\r
2017-12-01,23909190.041045453\r
2017-12-02,23824127.256230526\r
2018-02-22,131410976.37264794\r
2018-02-24,131348278.9777944\r
2018-02-25,131516996.16412161\r
2018-02-27,131388582.86392216\r
2018-03-24,133877459.007129\r
2018-04-18,130866566.71964785\r
2018-04-20,131469207.72149634\r
2018-04-21,130011047.13886566\r
2018-04-25,131121489.31105615\r
2018-05-06,126259900.73667827\r
2018-05-08,131418441.26616645\r
2018-05-11,127677963.00473492\r
2018-05-18,130713127.12609078\r
2018-05-20,128554468.63744567\r
2018-05-21,128628374.58770625\r
2018-06-20,136196531.407698\r
2018-06-22,136615729.57525033\r
2018-06-27,135867361.13590172\r
2018-07-02,135699125.550796\r
2018-07-04,135699125.550796\r
2018-07-07,135543100.93301147\r
2018-07-09,131916042.77528004\r
2018-07-10,131935486.22596493\r
2018-07-15,133656190.58050826\r
2018-07-17,130798030.05365358\r
2018-07-19,133913600.47221898\r
2018-07-20,131339323.33208445\r
2018-07-24,131319920.3978934\r
2018-07-25,130985800.30722658\r
2018-07-27,129556815.76687427\r
2018-07-29,125291315.36610058\r
2018-07-30,125291315.36610058\r
2018-08-03,125516329.17450659\r
2018-08-04,125482711.40376903\r
2018-08-06,124572229.70495224\r
2018-08-11,117765866.81675065\r
2018-08-16,116728944.71859722\r
2018-08-26,105802203.54468988\r
2018-08-29,103213382.5014949\r
2018-09-20,77989983.31929554\r
2018-09-22,77989983.31929554\r
2018-09-25,74473500.17758858\r
2018-09-27,74473500.17758858\r
2018-09-28,74588476.59292221\r
2018-09-30,69718388.52961576\r
2018-10-05,67563153.04862201\r
2018-10-10,63972956.037417196\r
2018-10-13,55861446.05275401\r
2018-10-15,65201089.73100283\r
2018-10-17,60614287.45458875\r
2018-10-18,56444757.65133999\r
2018-10-20,47654718.04468486\r
2018-10-22,46237581.901532486\r
2018-11-04,38790884.73378215\r
2018-11-11,38790884.73378215\r
2018-11-14,47318404.65973965\r
2018-11-17,39465084.11858604\r
2018-11-19,39214091.51477761\r
2018-11-22,20826419.73097935\r
2019-02-15,92464942.75085044\r
2019-02-17,98907647.57746199\r
2019-02-20,98907647.57746199\r
2019-02-22,99299640.45844123\r
2019-02-24,99299640.45844123\r
2019-02-25,99084545.90326467\r
2019-02-27,104412093.29116292\r
2019-03-19,117728963.91052468\r
2019-03-21,117728963.91052468\r
2019-03-22,119454868.4734104\r
2019-03-24,119374868.83314909\r
2019-03-29,120524366.73754773\r
2019-03-31,120524366.73754773\r
2019-04-01,119043704.73971678\r
2019-04-11,119329165.83607323\r
2019-04-15,122010569.00048272\r
2019-04-18,123749018.08034138\r
2019-04-20,123749018.08034138\r
2019-04-26,123805660.49492255\r
2019-05-01,126905573.58321604\r
2019-05-06,130862096.43302539\r
2019-05-13,131240829.79213388\r
2019-05-15,131240829.79213388\r
2019-05-16,131935486.22596493\r
2019-05-23,134939475.43151557\r
2019-05-25,134939475.43151557\r
2019-05-26,134432121.8364204\r
2019-06-02,128938993.2010032\r
2019-06-04,128938993.2010032\r
2019-06-05,129125529.98905706\r
2019-06-25,135733977.2909153\r
2019-06-27,130759299.2529392\r
2019-06-29,130759299.2529392\r
2019-06-30,132823809.70806581\r
2019-07-02,131904078.23088188\r
2019-07-04,132681313.50998987\r
2019-07-05,132771302.91258697\r
2019-07-07,132825310.04272442\r
2019-07-09,132825310.04272442\r
2019-07-10,132272216.57992832\r
2019-07-15,133035433.93287419\r
2019-07-17,132068634.52818014\r
2019-07-22,132218313.15789439\r
2019-07-24,132790804.32040347\r
2019-07-25,129862524.97083706\r
2019-07-29,131331860.50883684\r
2019-07-30,131331860.50883684\r
2019-08-01,124770407.75089845\r
2019-08-04,122163548.28454095\r
2019-08-08,122163548.28454095\r
2019-08-09,122335394.3673349\r
2019-08-13,121379383.32287538\r
2019-08-14,119037998.72989157\r
2019-08-16,119037998.72989157\r
2019-08-19,117826910.23617437\r
2019-08-24,106355471.3175825\r
2019-08-26,104492681.76926899\r
2019-08-28,104492681.76926899\r
2019-08-29,103230748.30904268\r
2019-08-31,100135819.1079195\r
2019-09-03,98278549.11282438\r
2019-09-07,97617447.29616642\r
2019-09-10,95343611.14874245\r
2019-09-12,92987511.87456125\r
2019-09-15,92609752.9885794\r
2019-09-18,88447705.21376602\r
2019-09-20,85904442.26069339\r
2019-09-22,85904442.26069339\r
2020-01-26,69572400.10770287\r
2020-02-07,82845299.46863532\r
2020-02-10,90831058.14834422\r
2020-02-15,99888310.59517029\r
2020-02-22,99993598.8834811\r
2020-03-26,126958468.48888057\r
2020-03-28,125898108.35337983\r
2020-03-30,125898108.35337983\r
2020-03-31,124967272.09496167\r
2020-04-02,125605509.43617506\r
2020-04-04,125605509.43617506\r
2020-04-05,124337809.43857206\r
2020-04-07,124901634.76358153\r
2020-04-09,124901634.76358153\r
2020-04-10,124455722.16481411\r
2020-04-12,125030007.05095905\r
2020-04-14,125472480.73159204\r
2020-04-15,124948308.56781481\r
2020-04-17,125142382.62454528\r
2020-04-19,126026951.2112639\r
2020-04-20,126205674.6677431\r
2020-04-22,127040769.63204733\r
2020-04-27,128736312.4068283\r
2020-05-07,125535332.3578648\r
2020-05-15,130546374.28773923\r
2020-05-17,125390649.18539025\r
2020-05-19,125390649.18539025\r
2020-05-20,129623568.57447645\r
2020-05-27,131287087.67096837\r
2020-05-29,131287087.67096837\r
2020-05-30,130500236.80854586\r
2020-06-01,129497493.23345807\r
2020-06-03,133805189.55670817\r
2020-06-24,128031774.1627316\r
2020-07-01,128031774.1627316\r
2020-07-04,129731890.14546497\r
2020-07-06,129601315.8789392\r
2020-07-08,129881828.43091582\r
2020-07-09,131865196.91356839\r
2020-07-24,131708229.9239184\r
2020-07-29,125579190.91495198\r
2020-07-31,124497950.34638564\r
2020-08-02,124497950.34638564\r
2020-08-05,122336838.92346391\r
2020-08-07,122063957.39950699\r
2020-08-08,119229218.63262483\r
2020-08-10,118577654.27195995\r
2020-08-12,118577654.27195995\r
2020-08-13,118523550.1151441\r
2020-08-17,116260039.30617304\r
2020-08-20,112141492.36413811\r
2020-08-25,110015026.78600511\r
2020-09-02,107726060.38157606\r
2020-09-04,106877487.64162424\r
2020-09-07,93881932.4169653\r
2020-09-09,93818005.77846287\r
2020-09-11,93849966.59075427\r
2020-09-12,90183521.97822975\r
2020-09-14,88907324.31962626\r
2020-09-16,88907324.31962626\r
2020-09-17,85914262.41659221\r
2020-09-21,83374811.2960791\r
2020-09-22,81468417.49958517\r
2020-11-18,54021156.67483647\r
2020-11-20,54021156.67483647\r
2020-11-21,57286245.20954862\r
2020-11-25,57286245.20954862\r
2020-11-26,35403181.508336574\r
2020-11-28,52547464.18521545\r
2021-02-14,111805874.19758597\r
2021-02-21,114435135.66729529\r
2021-02-24,114691616.40020134\r
2021-02-28,116720462.81156549\r
2021-03-01,115861026.2344897\r
2021-03-06,117581405.55695844\r
2021-03-08,121585289.5760956\r
2021-03-28,128098163.95638175\r
2021-03-30,128098163.95638175\r
2021-03-31,127005494.70558965\r
2021-04-02,127164267.4046363\r
2021-04-04,125514867.44605456\r
2021-04-22,130841236.02541262\r
2021-04-24,130841236.02541262\r
2021-04-25,130608895.11277607\r
2021-04-27,130382694.61489615\r
2021-04-30,130309813.21125332\r
2021-05-30,134373289.59911257\r
2021-06-01,136606610.2625728\r
2021-06-03,136950297.97820246\r
2021-06-04,136950297.97820246\r
2021-06-11,139608166.89185983\r
2021-06-14,133689294.85626377\r
2021-06-16,137803627.10617843\r
2021-06-19,135161719.4021868\r
2021-06-21,135161719.4021868\r
2021-07-19,131898096.14611945\r
2021-07-21,135999288.5694302\r
2021-07-23,135999288.5694302\r
2021-08-25,119006617.92763342\r
2021-08-27,116155642.7279259\r
2021-09-01,116155642.7279259\r
2021-09-02,116272739.13353449\r
2021-09-04,103859492.65786043\r
2021-09-06,103143932.72785614\r
2021-09-07,99723899.92760517\r
2021-09-12,99723899.92760517\r
2021-09-17,93261415.57473743\r
2021-09-24,75853969.89340962\r
2021-10-01,76080153.33786279\r
2021-10-04,74388470.227277\r
2021-10-14,61465856.4895113\r
2021-10-16,68282518.23382504\r
2021-10-19,67765498.08959371\r
2021-10-21,64786564.404170066\r
2021-10-24,66284115.72028435\r
2021-10-27,53891360.311194494\r
2021-10-29,50461487.666729026\r
2021-11-06,28130726.320779413\r
2022-02-09,88929772.82844909\r
2022-02-11,88175442.05579905\r
2022-02-13,88175442.05579905\r
2022-02-19,89994066.4577767\r
2022-02-26,111113916.09147523\r
2022-02-28,111113916.09147523\r
2022-03-03,111230026.76804224\r
2022-03-05,111230026.76804224\r
2022-03-06,117052883.00052568\r
2022-03-08,116716221.96450412\r
2022-03-10,119630668.61665678\r
2022-03-21,123328205.37296644\r
2022-03-23,126699967.68641327\r
2022-03-25,126699967.68641327\r
2022-03-26,123994554.76212431\r
2022-03-28,126292148.35028613\r
2022-04-04,127797323.85454266\r
2022-04-17,131814360.0802748\r
2022-04-20,131814360.0802748\r
2022-04-22,132819308.75092356\r
2022-04-27,132092577.86139964\r
2022-06-04,128921234.27056648\r
2022-06-11,129401120.80674995\r
2022-06-13,129450044.21674183\r
2022-06-19,129681433.8179204\r
2022-06-21,128953793.17032774\r
2022-06-23,133182611.67450124\r
2022-06-28,133182611.67450124\r
2022-06-29,127925583.46568926\r
2022-07-01,132892833.18103662\r
2022-07-06,131956426.80273956\r
2022-07-08,131956426.80273956\r
2022-07-11,133576454.87685105\r
2022-07-14,133576454.87685105\r
2022-07-16,129720017.2550951\r
2022-07-18,129923409.60247017\r
2022-07-19,126779254.6269581\r
2022-07-24,124022173.49506442\r
2022-07-31,119602075.12080768\r
2022-08-02,119602075.12080768\r
2022-08-03,113628182.41262275\r
2022-08-07,113695211.66623808\r
2022-08-08,110144370.61281177\r
2022-08-10,110214575.8095929\r
2022-08-12,106560069.87398878\r
2022-08-13,106935863.84021224\r
2022-08-15,105114172.10486509\r
2022-08-20,104332875.88075109\r
2022-08-22,102630407.2128164\r
2022-08-23,102630407.2128164\r
2022-09-22,71287366.76510459\r
2022-10-09,55052700.969407886\r
2022-10-12,51299532.6830045\r
2022-10-19,48612615.532415204\r
2022-10-22,40772892.24696809\r
2022-10-24,51645657.53849332\r
2022-10-26,51645657.53849332\r
2022-11-01,35644286.54260217\r
2023-02-11,89168137.24132314\r
2023-02-13,89168137.24132314\r
2023-02-14,88379292.26796055\r
2023-02-21,90074343.08008352\r
2023-03-01,97424850.5255776\r
2023-03-11,98572595.79496263\r
2023-04-05,125208078.18847792\r
2023-04-09,125208078.18847792\r
2023-05-25,132574862.35334519\r
2023-05-27,138870657.82894596\r
2023-05-29,138870657.82894596\r
2023-06-01,134942498.0286556\r
2023-06-03,134942498.0286556\r
2023-06-04,135299383.4150329\r
2023-06-06,134904717.80573294\r
2023-06-08,133092493.95619777\r
2023-06-09,133421559.49437706\r
2023-06-11,132372563.77938594\r
2023-06-13,131803894.79418752\r
2023-06-14,132118019.84336631\r
2023-06-16,131124472.21364242\r
2023-06-23,133990416.00399715\r
2023-06-24,132115026.55188356\r
2023-06-26,132756302.72732145\r
2023-06-28,131045435.85525107\r
2023-07-11,132035715.70921339\r
2023-07-14,129390744.20874701\r
2023-07-19,130585076.02987406\r
2023-08-20,103518147.19050226\r
2023-08-22,99530712.5992867\r
2023-08-23,99610857.825898\r
2023-09-02,96644552.05913492\r
2023-09-04,85791547.62972863\r
2023-09-06,85791547.62972863\r
2023-09-07,85594146.57586344\r
2023-09-09,81927798.44503728\r
2023-09-11,81927798.44503728\r
2023-09-24,65075740.179973304\r
2023-09-26,65075740.179973304\r
2023-10-01,65075740.179973304\r
2023-10-02,65140562.28359983\r
2023-10-07,51955846.67029285\r
2023-10-09,51312117.86017784\r
2023-10-11,51312117.86017784\r
2023-10-14,51345039.661133625\r
2023-10-16,51345039.661133625\r
`;export{n as default};
