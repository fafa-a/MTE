const r=`date,value\r
2017-01-04,34.812596772669444\r
2017-01-07,34.812596772669444\r
2017-01-14,38.851664358337715\r
2017-02-03,58.91762672542376\r
2017-02-06,58.91762672542376\r
2017-02-16,69.04190991370636\r
2017-02-23,80.19374647515146\r
2017-02-26,68.77079605549766\r
2017-03-05,65.56494833925878\r
2017-03-08,65.03914479676273\r
2017-03-15,70.22379972699147\r
2017-03-18,76.78617761378149\r
2017-03-25,76.78617761378149\r
2017-03-28,77.26779127910676\r
2017-04-04,84.59815972051969\r
2017-04-07,82.98095197264364\r
2017-04-14,86.33605113170252\r
2017-04-17,84.90337682959796\r
2017-04-24,80.68746570281242\r
2017-05-04,83.68628169994244\r
2017-05-07,87.36780078864561\r
2017-05-14,87.16088942276127\r
2017-05-17,87.78246634814752\r
2017-05-24,83.2828176661835\r
2017-05-27,87.57499306495005\r
2017-06-03,81.9792619682053\r
2017-06-06,89.55734851531899\r
2017-06-13,85.10720456663454\r
2017-06-16,90.71665190864516\r
2017-06-23,85.41347091180513\r
2017-06-26,86.33605113170252\r
2017-07-01,80.78641776639805\r
2017-07-03,79.9967443956949\r
2017-07-06,81.9792619682053\r
2017-07-08,79.11366574095383\r
2017-07-11,78.91818782786805\r
2017-07-13,76.9786162158092\r
2017-07-18,72.43598012743514\r
2017-07-21,73.36933053475924\r
2017-07-23,65.12661042814912\r
2017-07-26,66.26979265376849\r
2017-07-28,61.25708367223507\r
2017-07-31,59.16579027636709\r
2017-08-02,57.359771952814796\r
2017-08-05,55.745691035133824\r
2017-08-07,57.19717636367299\r
2017-08-12,49.252673462663154\r
2017-08-15,49.551458246007094\r
2017-08-17,48.215063935844825\r
2017-08-20,43.07739817778434\r
2017-08-22,44.894476625754656\r
2017-08-25,46.827070647434184\r
2017-08-27,47.92092523376274\r
2017-08-30,46.89954465113853\r
2017-09-01,46.89954465113853\r
2017-09-04,38.65665068759637\r
2017-09-09,35.674491278837884\r
2017-09-14,26.065314820791535\r
2017-09-16,26.065314820791535\r
2017-09-19,26.065314820791535\r
2017-09-21,28.34743010350664\r
2017-09-24,28.34743010350664\r
2017-10-06,18.392236064990676\r
2017-10-09,22.966293021081977\r
2017-10-11,19.82294308213121\r
2017-10-14,19.9116283395166\r
2017-10-16,19.9116283395166\r
2017-10-19,19.252004766543372\r
2017-10-21,19.51432788645518\r
2017-10-24,19.339220006037234\r
2017-10-26,21.87343695058244\r
2017-10-31,21.68648363677919\r
2017-11-03,20.856538956095772\r
2017-11-05,23.207913336316054\r
2017-11-08,19.9116283395166\r
2017-11-15,14.686278423332347\r
2017-11-18,15.674439882294541\r
2017-11-20,14.686278423332347\r
2017-11-23,14.686278423332347\r
2017-11-28,18.09661936016507\r
2017-11-30,18.349837171569646\r
2017-12-03,18.349837171569646\r
2017-12-05,18.690598166312427\r
2017-12-13,19.034953358669053\r
2017-12-18,15.790833343211293\r
2017-12-20,15.790833343211293\r
2017-12-23,17.30801907809151\r
2017-12-25,16.659490299070594\r
2017-12-28,17.43119867474607\r
2017-12-30,17.43119867474607\r
2018-01-17,19.252004766543372\r
2018-01-19,19.252004766543372\r
2018-01-22,19.252004766543372\r
2018-01-24,19.252004766543372\r
2018-01-27,16.941477236561393\r
2018-02-08,30.34281053599685\r
2018-02-11,31.542790515669534\r
2018-02-13,31.542790515669534\r
2018-02-16,31.542790515669534\r
2018-02-18,31.542790515669534\r
2018-03-13,63.21788945516518\r
2018-03-18,63.21788945516518\r
2018-03-23,63.21788945516518\r
2018-04-14,84.39503117016714\r
2018-04-17,87.78246634814752\r
2018-04-19,85.41347091180513\r
2018-04-22,89.97792582725988\r
2018-04-24,86.23326195279773\r
2018-04-27,90.50523443521958\r
2018-04-29,93.2757196565083\r
2018-05-07,94.678921583134\r
2018-05-09,94.678921583134\r
2018-05-17,100.0\r
2018-05-19,100.0\r
2018-05-22,100.0\r
2018-05-29,94.678921583134\r
2018-06-03,89.97792582725988\r
2018-06-08,89.97792582725988\r
2018-06-13,94.02979943381035\r
2018-06-16,98.07352304450933\r
2018-06-18,97.52137388191574\r
2018-06-21,95.65740151259665\r
2018-06-26,97.96295043016197\r
2018-06-28,94.13780894053859\r
2018-07-01,94.24588943878824\r
2018-07-03,97.63166095597549\r
2018-07-06,97.41115816370647\r
2018-07-08,97.08093902720258\r
2018-07-11,97.08093902720258\r
2018-07-13,97.30101378965166\r
2018-07-18,93.70619674460158\r
2018-07-21,89.55734851531899\r
2018-07-23,91.99109146029026\r
2018-07-26,89.66238709329615\r
2018-07-28,89.13789888404844\r
2018-07-31,91.24643150358285\r
2018-08-02,91.03430773543795\r
2018-08-05,92.31129252162661\r
2018-08-07,93.16827765634868\r
2018-08-10,91.56514721962327\r
2018-08-12,92.09775437703213\r
2018-08-15,90.61090787211249\r
2018-08-17,87.99022073464648\r
2018-08-20,91.56514721962327\r
2018-08-22,90.71665190864516\r
2018-08-25,90.71665190864516\r
2018-08-27,87.99022073464648\r
2018-08-30,88.51083715993707\r
2018-09-01,86.64483935745146\r
2018-09-06,84.69982884023445\r
2018-09-09,91.03430773543795\r
2018-09-11,77.36432092626208\r
2018-09-14,74.87693866376985\r
2018-09-16,74.87693866376985\r
2018-09-19,74.87693866376985\r
2018-09-21,72.34302119526836\r
2018-09-24,79.40740182553881\r
2018-09-26,78.33341448405629\r
2018-09-29,69.58597050703807\r
2018-10-01,69.58597050703807\r
2018-10-06,70.86496284001478\r
2018-10-09,67.7819323770652\r
2018-10-14,71.69422126798104\r
2018-10-19,86.64483935745146\r
2018-10-21,74.78219863396805\r
2018-10-24,75.63733223844919\r
2018-10-26,74.59292454716223\r
2018-11-08,70.95682998141815\r
2018-11-10,70.95682998141815\r
2018-11-15,70.95682998141815\r
2018-11-18,70.95682998141815\r
2018-11-28,72.43598012743514\r
2018-12-03,77.75112964478882\r
2018-12-05,72.90180022132522\r
2018-12-08,74.40392500668129\r
2018-12-10,76.69006170730475\r
2018-12-15,73.65067028792595\r
2018-12-18,73.18211308149836\r
2018-12-23,71.50946424155357\r
2018-12-25,74.12094024947196\r
2018-12-28,74.12094024947196\r
2019-01-02,68.95147077338439\r
2019-01-04,68.95147077338439\r
2019-01-07,71.23284030369868\r
2019-01-09,70.40664880225263\r
2019-01-12,70.58977013473245\r
2019-01-14,69.13241692547595\r
2019-01-17,72.80849943577307\r
2019-01-22,71.9718686646266\r
2019-01-24,76.11481300333193\r
2019-01-29,75.63733223844919\r
2019-02-03,70.86496284001478\r
2019-02-06,78.82055267709127\r
2019-02-08,78.82055267709127\r
2019-02-11,78.82055267709127\r
2019-02-13,69.4951239447686\r
2019-02-16,58.505347208642554\r
2019-02-18,72.43598012743514\r
2019-02-21,70.04122280633742\r
2019-02-23,62.96012532640473\r
2019-02-26,62.96012532640473\r
2019-02-28,74.49839046493881\r
2019-03-03,75.25658565298468\r
2019-03-08,82.07911764491621\r
2019-03-10,86.43891041737928\r
2019-03-18,65.12661042814912\r
2019-03-20,86.85104886977894\r
2019-03-23,86.85104886977894\r
2019-03-25,81.68011238393437\r
2019-03-28,86.74790903603807\r
2019-03-30,79.80001966026761\r
2019-04-02,79.80001966026761\r
2019-04-07,83.18212604283224\r
2019-04-09,82.67971362507626\r
2019-04-12,62.44640490742711\r
2019-04-14,62.96012532640473\r
2019-04-17,85.2092233709252\r
2019-04-19,81.87947587399486\r
2019-04-27,89.87267573729541\r
2019-04-29,89.87267573729541\r
2019-05-02,89.87267573729541\r
2019-05-07,95.98484188257372\r
2019-05-09,97.41115816370647\r
2019-05-14,100.0\r
2019-05-19,100.0\r
2019-05-24,100.0\r
2019-05-29,100.0\r
2019-06-01,100.0\r
2019-06-03,95.54839705129288\r
2019-06-06,95.54839705129288\r
2019-06-11,95.54839705129288\r
2019-06-13,91.1403342898662\r
2019-06-18,99.96419338679854\r
2019-06-21,100.0\r
2019-06-23,100.0\r
2019-06-26,99.29453771082696\r
2019-06-28,100.0\r
2019-07-01,97.19094074805153\r
2019-07-03,97.19094074805153\r
2019-07-06,96.97100861539755\r
2019-07-08,96.42242578201466\r
2019-07-11,94.46226345708607\r
2019-07-13,92.41816777324101\r
2019-07-16,91.1403342898662\r
2019-07-18,95.43946373473653\r
2019-07-21,94.35404094036886\r
2019-07-23,86.64483935745146\r
2019-07-26,85.82280606272262\r
2019-07-28,89.55734851531899\r
2019-07-31,88.71957616627849\r
2019-08-02,90.18863760294433\r
2019-08-05,90.92835182837621\r
2019-08-07,94.02979943381035\r
2019-08-10,90.61090787211249\r
2019-08-12,91.45883795654932\r
2019-08-15,89.76749616329724\r
2019-08-17,94.02979943381035\r
2019-08-20,94.24588943878824\r
2019-08-22,81.4810270764103\r
2019-08-25,93.06090654125212\r
2019-08-27,91.35259938850587\r
2019-08-30,91.67152718963398\r
2019-09-04,79.70176126563848\r
2019-09-06,76.30628708627776\r
2019-09-09,76.69006170730475\r
2019-09-11,69.04190991370636\r
2019-09-14,62.1904479017902\r
2019-09-16,61.68033850655819\r
2019-09-19,61.68033850655819\r
2019-09-24,60.33179068543235\r
2019-09-26,63.30394483359766\r
2019-09-29,60.41557517448039\r
2019-10-01,74.12094024947196\r
2019-10-04,60.58334387870892\r
2019-10-06,59.49760424669051\r
2019-10-09,59.747162122228204\r
2019-10-11,63.82168505188257\r
2019-10-14,63.82168505188257\r
2019-10-16,63.82168505188257\r
2019-10-19,63.994801802381986\r
2019-10-26,66.97895501162844\r
2019-10-29,66.97895501162844\r
2019-11-05,66.97895501162844\r
2019-11-13,56.791842935444095\r
2019-11-20,56.791842935444095\r
2019-11-28,56.791842935444095\r
2019-11-30,49.47666505791168\r
2019-12-08,49.47666505791168\r
2019-12-10,61.42618539904821\r
2019-12-13,61.42618539904821\r
2019-12-15,61.42618539904821\r
2019-12-23,62.70296392965966\r
2019-12-25,57.034844953432554\r
2019-12-28,58.75251602593771\r
2019-12-30,54.079230530877055\r
2020-01-02,53.37388449240663\r
2020-01-04,66.801259240601\r
2020-01-09,59.41455115275131\r
2020-01-12,60.24807275390893\r
2020-01-14,58.505347208642554\r
2020-01-17,61.76518973361599\r
2020-01-22,63.3900672351495\r
2020-01-27,70.04122280633742\r
2020-02-01,76.49803662085786\r
2020-02-06,77.074938936374\r
2020-02-08,79.50545236065868\r
2020-02-11,79.50545236065868\r
2020-02-13,75.73269079105725\r
2020-02-16,75.73269079105725\r
2020-02-18,77.074938936374\r
2020-02-21,76.88236244577992\r
2020-02-26,73.18211308149836\r
2020-02-28,66.6238336600602\r
2020-03-04,63.64883671059898\r
2020-03-07,63.64883671059898\r
2020-03-14,62.44640490742711\r
2020-03-19,70.31519023888117\r
2020-03-22,72.43598012743514\r
2020-03-24,68.86109949161482\r
2020-03-29,74.49839046493881\r
2020-04-01,74.21519991157565\r
2020-04-03,74.21519991157565\r
2020-04-06,79.89834736616181\r
2020-04-08,87.36780078864561\r
2020-04-11,88.40657320286047\r
2020-04-23,92.73921838784194\r
2020-04-26,96.42242578201466\r
2020-04-28,99.51746997551855\r
2020-05-03,96.2034914017947\r
2020-05-06,99.51746997551855\r
2020-05-11,99.40596806611578\r
2020-05-21,100.0\r
2020-05-23,96.2034914017947\r
2020-05-26,94.46226345708607\r
2020-05-28,96.42242578201466\r
2020-05-31,96.42242578201466\r
2020-06-05,96.42242578201466\r
2020-06-10,98.29488252770174\r
2020-06-12,100.0\r
2020-06-15,99.85240514468443\r
2020-06-20,58.258774745578314\r
2020-06-22,98.18416707313138\r
2020-06-25,92.31129252162661\r
2020-06-27,96.86114950092544\r
2020-06-30,96.86114950092544\r
2020-07-02,94.89586391130109\r
2020-07-05,96.86114950092544\r
2020-07-07,94.78735721605696\r
2020-07-10,96.86114950092544\r
2020-07-12,95.22181048880726\r
2020-07-15,97.85244921841189\r
2020-07-17,96.64164511711714\r
2020-07-20,98.6274575637838\r
2020-07-22,98.51652776136358\r
2020-07-25,98.73845883880985\r
2020-07-27,96.53199982434025\r
2020-07-30,96.86114950092544\r
2020-08-01,95.11309053589535\r
2020-08-04,95.22181048880726\r
2020-08-06,92.41816777324101\r
2020-08-09,90.50523443521958\r
2020-08-11,87.67869457466011\r
2020-08-14,87.99022073464648\r
2020-08-16,88.40657320286047\r
2020-08-19,89.66238709329615\r
2020-08-21,87.78246634814752\r
2020-08-24,90.08324644515577\r
2020-08-26,90.71665190864516\r
2020-09-03,91.77797787848377\r
2020-09-05,86.33605113170252\r
2020-09-08,91.24643150358285\r
2020-09-10,91.24643150358285\r
2020-09-13,86.43891041737928\r
2020-09-15,86.43891041737928\r
2020-09-18,84.49656050122243\r
2020-09-20,88.51083715993707\r
2020-09-25,86.85104886977894\r
2020-09-28,87.36780078864561\r
2020-09-30,84.09086238463594\r
2020-10-03,84.09086238463594\r
2020-10-08,75.54204246090713\r
2020-10-10,83.08150414906356\r
2020-10-15,73.65067028792595\r
2020-10-18,73.65067028792595\r
2020-10-20,73.65067028792595\r
2020-10-25,75.44682144586406\r
2020-10-28,63.30394483359766\r
2020-10-30,63.30394483359766\r
2020-11-02,63.30394483359766\r
2020-11-07,60.91968056631295\r
2020-11-09,60.91968056631295\r
2020-11-17,63.994801802381986\r
2020-11-19,64.16818706751658\r
2020-11-22,66.26979265376849\r
2020-11-24,68.23039947449068\r
2020-12-02,68.14057059633744\r
2020-12-07,71.69422126798104\r
2020-12-09,81.0836906153341\r
2020-12-12,81.1829204921281\r
2020-12-19,77.65432392071482\r
2020-12-22,75.92361427171674\r
2020-12-27,61.08824876356687\r
2021-01-06,65.2141433590126\r
2021-01-13,65.82875936059281\r
2021-01-16,63.64883671059898\r
2021-01-18,63.47625667303103\r
2021-01-23,63.47625667303103\r
2021-01-26,65.30174360245796\r
2021-01-31,64.42876866056613\r
2021-02-02,64.42876866056613\r
2021-02-15,63.045979714791734\r
2021-02-17,68.14057059633744\r
2021-02-20,68.14057059633744\r
2021-02-25,65.56494833925878\r
2021-02-27,73.18211308149836\r
2021-03-02,70.49817542992992\r
2021-03-04,70.6814329294749\r
2021-03-14,64.25498042599364\r
2021-03-17,74.59292454716223\r
2021-03-19,74.59292454716223\r
2021-03-22,77.94494825664468\r
2021-03-24,69.4951239447686\r
2021-03-29,68.86109949161482\r
2021-04-01,68.86109949161482\r
2021-04-03,68.14057059633744\r
2021-04-06,67.0679042510995\r
2021-04-08,67.0679042510995\r
2021-04-11,67.6030194621101\r
2021-04-13,67.6030194621101\r
2021-04-23,64.86441537997703\r
2021-04-28,64.86441537997703\r
2021-05-03,65.65281796398033\r
2021-05-13,65.12661042814912\r
2021-05-18,64.60282567297003\r
2021-05-21,64.25498042599364\r
2021-05-23,64.25498042599364\r
2021-05-26,65.47714607948866\r
2021-05-28,65.47714607948866\r
2021-05-31,77.84800441927709\r
2021-06-05,69.4951239447686\r
2021-06-10,73.65067028792595\r
2021-06-12,73.65067028792595\r
2021-06-15,72.43598012743514\r
2021-06-17,72.43598012743514\r
2021-06-22,73.7445872091919\r
2021-06-25,64.16818706751658\r
2021-06-27,62.10526261945496\r
2021-06-30,59.83048099010896\r
2021-07-02,59.41455115275131\r
2021-07-05,54.23669435268225\r
2021-07-07,55.665678788654915\r
2021-07-10,56.54943470748106\r
2021-07-12,57.278441129083376\r
2021-07-15,58.91762672542376\r
2021-07-17,57.68575610264642\r
2021-07-20,53.06209799195136\r
2021-07-22,46.972082826244545\r
2021-07-27,44.96522345973533\r
2021-07-30,47.19008252372451\r
2021-08-01,44.47133420281748\r
2021-08-04,38.46219860149523\r
2021-08-06,39.04724002352387\r
2021-08-11,34.75149432227311\r
2021-08-14,29.892671974477242\r
2021-08-16,29.335408180400442\r
2021-08-19,29.224675366870244\r
2021-08-21,27.59237027406706\r
2021-08-24,27.645916335971116\r
2021-08-26,27.272341173332137\r
2021-08-29,24.73837964193213\r
2021-08-31,22.966293021081977\r
2021-09-03,24.788682571389366\r
2021-09-05,21.361523887504976\r
2021-09-08,21.454082974074655\r
2021-09-30,13.734776206928323\r
2021-10-03,12.173532504235077\r
2021-10-05,12.140059069061131\r
2021-10-08,12.140059069061131\r
2021-10-10,13.167304314699745\r
2021-10-13,14.023662738156805\r
2021-10-15,14.023662738156805\r
2021-10-18,12.819578964205714\r
2021-10-20,13.449326882021506\r
2021-10-23,13.202370093473647\r
2021-11-02,13.272661870132449\r
2021-11-04,13.272661870132449\r
2021-11-19,18.60507133473793\r
2021-11-22,18.948527082836332\r
2021-11-24,18.948527082836332\r
2021-11-27,18.948527082836332\r
2021-12-07,14.873451594427822\r
2021-12-09,14.873451594427822\r
2021-12-12,17.51359634588817\r
2021-12-14,15.443130539840928\r
2021-12-17,16.142975225739473\r
2021-12-19,17.144557048000603\r
2021-12-24,15.635751577697993\r
2021-12-29,17.51359634588817\r
2022-01-08,39.30888249790161\r
2022-01-11,49.551458246007094\r
2022-01-13,44.682618662950254\r
2022-01-16,48.510233505911316\r
2022-01-18,48.28875964881805\r
2022-01-21,51.21329873660218\r
2022-01-23,53.84352609039033\r
2022-01-26,56.63017149617783\r
2022-01-28,61.00393133268703\r
2022-01-31,63.90820986938969\r
2022-02-02,68.14057059633744\r
2022-02-05,67.6030194621101\r
2022-02-07,69.13241692547595\r
2022-02-10,70.6814329294749\r
2022-02-12,67.6030194621101\r
2022-02-15,71.60180863947117\r
2022-02-17,69.58597050703807\r
2022-02-20,66.801259240601\r
2022-02-22,70.49817542992992\r
2022-02-25,71.32498008643753\r
2022-02-27,71.32498008643753\r
2022-03-02,71.0487652639732\r
2022-03-07,73.93262663299\r
2022-03-09,75.54204246090713\r
2022-03-14,72.99516941566831\r
2022-03-22,80.39102599754176\r
2022-03-24,81.4810270764103\r
2022-03-29,81.4810270764103\r
2022-04-03,78.33341448405629\r
2022-04-11,81.68011238393437\r
2022-04-13,83.2828176661835\r
2022-04-16,77.84800441927709\r
2022-04-18,80.78641776639805\r
2022-04-23,83.08150414906356\r
2022-04-26,85.10720456663454\r
2022-04-28,85.2092233709252\r
2022-05-01,84.49656050122243\r
2022-05-08,79.40740182553881\r
2022-05-11,91.45883795654932\r
2022-05-13,96.53199982434025\r
2022-05-16,91.35259938850587\r
2022-05-18,93.92186090679019\r
2022-05-21,92.41816777324101\r
2022-05-23,93.70619674460158\r
2022-05-26,95.43946373473653\r
2022-05-28,94.46226345708607\r
2022-05-31,99.85240514468443\r
2022-06-02,97.19094074805153\r
2022-06-10,96.31292297841064\r
2022-06-12,95.87562391648274\r
2022-06-15,93.92186090679019\r
2022-06-17,95.76647713040788\r
2022-06-20,93.49081635938926\r
2022-06-25,95.76647713040788\r
2022-06-27,94.13780894053859\r
2022-07-02,96.97100861539755\r
2022-07-05,97.30101378965166\r
2022-07-07,94.89586391130109\r
2022-07-10,95.87562391648274\r
2022-07-12,96.64164511711714\r
2022-07-15,96.64164511711714\r
2022-07-17,95.65740151259665\r
2022-07-20,94.57055700074177\r
2022-07-22,94.46226345708607\r
2022-07-25,95.00444168065295\r
2022-07-27,95.76647713040788\r
2022-07-30,95.76647713040788\r
2022-08-01,89.66238709329615\r
2022-08-04,93.06090654125212\r
2022-08-06,90.71665190864516\r
2022-08-09,92.63213069447944\r
2022-08-11,90.8224665567552\r
2022-08-14,91.88449929807103\r
2022-08-16,90.39963158602487\r
2022-08-19,92.20448806018328\r
2022-08-21,89.24265561374044\r
2022-08-24,91.77797787848377\r
2022-08-26,87.67869457466011\r
2022-08-29,92.73921838784194\r
2022-09-05,91.99109146029026\r
2022-09-10,91.45883795654932\r
2022-09-13,82.7800567228942\r
2022-09-18,82.88046950133455\r
2022-09-20,78.91818782786805\r
2022-09-23,74.21519991157565\r
2022-10-08,66.09317701948653\r
2022-10-10,66.09317701948653\r
2022-10-13,67.96111605392687\r
2022-10-15,62.36101903250217\r
2022-10-18,66.18145110842366\r
2022-10-20,64.34184095262523\r
2022-10-23,63.735227336680644\r
2022-10-25,67.42437720534188\r
2022-10-28,66.5352221586791\r
2022-10-30,61.172632872301556\r
2022-11-02,54.710659167974775\r
2022-11-04,46.465662696256814\r
2022-11-14,45.60481684579142\r
2022-11-17,42.801657237038135\r
2022-11-24,44.47133420281748\r
2022-11-27,37.81807559665109\r
2022-12-02,37.434588380831734\r
2022-12-04,39.57152576936337\r
2022-12-07,39.04724002352387\r
2022-12-09,41.10119464866803\r
2022-12-27,35.9229653313717\r
2022-12-29,43.562385730618395\r
2023-01-03,39.63734307508481\r
2023-01-31,33.06551392777548\r
2023-02-02,34.99627293467106\r
2023-02-05,34.99627293467106\r
2023-02-10,34.44690339294952\r
2023-02-12,34.08341911758915\r
2023-02-15,31.890542833110974\r
2023-02-17,31.890542833110974\r
2023-02-20,31.890542833110974\r
2023-02-22,30.626104598015306\r
2023-03-12,32.65150501612028\r
2023-03-14,31.42735793238706\r
2023-03-17,32.474986289417465\r
2023-03-22,36.61136537441778\r
2023-03-24,38.07497754107447\r
2023-03-27,48.80643485642182\r
2023-04-01,63.994801802381986\r
2023-04-03,74.59292454716223\r
2023-04-06,72.15730831580163\r
2023-04-08,81.9792619682053\r
2023-04-16,82.47923642230135\r
2023-04-21,80.5885830617015\r
2023-04-23,80.5885830617015\r
2023-04-26,87.78246634814752\r
2023-04-28,87.26430999793303\r
`;export{r as default};
