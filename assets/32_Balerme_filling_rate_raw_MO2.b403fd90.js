const r=`date,value\r
2017-01-26,61.456980255120584\r
2017-02-15,62.73436788568246\r
2017-02-22,62.73436788568246\r
2017-02-25,66.26978687246955\r
2017-03-17,70.31169539672713\r
2017-03-27,72.4964404678416\r
2017-04-03,73.21458815944074\r
2017-04-06,71.86997942594397\r
2017-04-23,79.04303852666771\r
2017-05-03,79.04303852666771\r
2017-05-16,79.59696535876058\r
2017-05-26,77.34315203307278\r
2017-06-02,82.1520561263081\r
2017-06-05,82.1520561263081\r
2017-06-12,78.58240846940399\r
2017-06-22,82.38565460356011\r
2017-06-25,82.43240054499434\r
2017-07-02,82.90034064076883\r
2017-07-05,72.76547220921383\r
2017-07-07,80.47662116610171\r
2017-07-17,80.66221781942743\r
2017-07-18,75.74640987708835\r
2017-07-27,75.88284259555297\r
2017-08-14,58.719227389890825\r
2017-08-17,58.719227389890825\r
2017-08-19,58.88651366343165\r
2017-08-21,64.92571666815971\r
2017-08-22,65.14188733010437\r
2017-08-24,58.13496311584883\r
2017-08-26,60.06190195759643\r
2017-08-29,59.305415396498574\r
2017-09-03,53.40931290826857\r
2017-09-05,55.735077561460976\r
2017-09-08,48.62122175718723\r
2017-09-20,52.238639680726585\r
2017-09-21,52.238639680726585\r
2017-09-23,53.004666243620456\r
2017-09-28,53.004666243620456\r
2017-10-03,48.150621647912935\r
2017-10-05,52.399602639532404\r
2017-10-08,52.60103588099444\r
2017-10-10,52.60103588099444\r
2017-10-11,52.60103588099444\r
2017-10-13,45.781891395742996\r
2017-10-15,47.25286896893009\r
2017-10-16,44.93731269273481\r
2017-10-18,44.93731269273481\r
2017-10-20,46.59290384769804\r
2017-10-23,45.74338904026833\r
2017-10-25,48.18978063878085\r
2017-10-28,45.052176863324775\r
2017-10-30,45.052176863324775\r
2017-10-31,45.052176863324775\r
2017-11-02,45.052176863324775\r
2017-11-07,40.904408167141376\r
2017-11-14,42.13483819575515\r
2017-11-15,42.13483819575515\r
2017-11-17,43.150460110933295\r
2017-11-19,43.150460110933295\r
2017-11-22,40.904408167141376\r
2017-11-24,40.904408167141376\r
2017-11-25,41.94763722181716\r
2017-11-27,40.09082958895868\r
2017-11-30,41.164402490535586\r
2017-12-07,40.01713557426709\r
2017-12-14,44.36444484531202\r
2017-12-15,44.36444484531202\r
2017-12-19,44.669672707775035\r
2017-12-24,44.669672707775035\r
2017-12-27,42.472491959663145\r
2018-02-10,52.964257430240615\r
2018-02-12,53.6931688654776\r
2018-02-15,53.6931688654776\r
2018-02-25,57.59416026209618\r
2018-02-27,67.14173662621864\r
2018-03-02,67.14173662621864\r
2018-03-07,67.14173662621864\r
2018-03-09,67.09804991637506\r
2018-03-14,63.97738641680658\r
2018-03-15,63.97738641680658\r
2018-03-17,67.44780604109381\r
2018-03-19,71.512807649021\r
2018-03-22,69.47049997668246\r
2018-04-01,67.09804991637506\r
2018-04-18,88.10492223671955\r
2018-04-19,88.10492223671955\r
2018-04-21,88.67899087245947\r
2018-04-23,88.67899087245947\r
2018-04-24,88.67899087245947\r
2018-04-26,83.74483111776654\r
2018-05-06,83.83883752726557\r
2018-05-11,87.81834938768593\r
2018-05-19,87.81834938768593\r
2018-05-21,87.81834938768593\r
2018-06-20,96.20349624612197\r
2018-06-22,96.20349624612197\r
2018-06-23,96.20349624612197\r
2018-06-25,100.0\r
2018-06-28,100.0\r
2018-07-02,100.0\r
2018-07-03,100.0\r
2018-07-07,96.15430629679005\r
2018-07-08,96.15430629679005\r
2018-07-10,95.31934796895456\r
2018-07-12,100.0\r
2018-07-15,92.63452840045781\r
2018-07-18,100.0\r
2018-07-22,90.8426659989241\r
2018-07-23,90.8426659989241\r
2018-07-25,91.71294090287343\r
2018-07-27,98.1283615677009\r
2018-07-30,94.19352835400736\r
2018-08-01,95.51559262123845\r
2018-08-02,95.51559262123845\r
2018-08-04,89.25428782841796\r
2018-08-06,95.85934091424653\r
2018-08-11,87.43673158272384\r
2018-08-12,89.44632597319122\r
2018-08-19,95.0742294298128\r
2018-08-21,88.5832273932988\r
2018-08-22,95.95762949622313\r
2018-08-26,95.95762949622313\r
2018-08-27,95.95762949622313\r
2018-08-31,88.34396805264238\r
2018-09-01,78.53639431984672\r
2018-09-03,83.13463808955073\r
2018-09-05,83.13463808955073\r
2018-09-08,81.45257477329658\r
2018-09-10,82.29218896160417\r
2018-09-11,81.40601286250583\r
2018-09-16,89.8308104040895\r
2018-09-18,89.8308104040895\r
2018-09-20,86.72267734649473\r
2018-09-23,86.0105569897593\r
2018-09-25,83.74483111776654\r
2018-09-26,83.74483111776654\r
2018-09-28,85.4422567483619\r
2018-09-30,80.80150781596308\r
2018-10-03,77.52633535401455\r
2018-10-05,80.66221781942743\r
2018-10-06,81.63891020320587\r
2018-10-23,79.41218133950841\r
2018-10-25,79.41218133950841\r
2018-11-12,82.66626138921737\r
2018-11-15,82.66626138921737\r
2018-11-17,88.91854881779349\r
2018-11-22,88.91854881779349\r
2018-11-24,85.48956762809\r
2018-11-27,82.61947174105276\r
2018-11-29,83.79182997443107\r
2018-12-05,81.8720268828535\r
2018-12-19,84.54499323370015\r
2019-01-03,82.52591866033288\r
2019-01-09,82.52591866033288\r
2019-01-11,83.88585377461015\r
2019-01-16,86.81777296083547\r
2019-01-19,87.77061719118632\r
2019-01-23,87.77061719118632\r
2019-01-26,87.77061719118632\r
2019-01-28,86.43759683491858\r
2019-02-12,88.82270006221886\r
2019-02-13,88.82270006221886\r
2019-02-15,90.50496554446846\r
2019-02-17,88.00936374138747\r
2019-02-18,88.00936374138747\r
2019-02-20,89.20629956642736\r
2019-02-22,88.39180284508976\r
2019-02-23,88.39180284508976\r
2019-02-25,90.11953046021414\r
2019-02-27,87.62747196764774\r
2019-03-07,91.37417550905077\r
2019-03-12,76.2470588075541\r
2019-03-20,72.98991625405812\r
2019-03-22,83.50996733515456\r
2019-03-24,80.7086390110016\r
2019-03-25,80.7086390110016\r
2019-03-27,83.83883752726557\r
2019-03-29,85.72625154922548\r
2019-03-30,85.72625154922548\r
2019-04-01,85.72625154922548\r
2019-04-08,82.90034064076883\r
2019-04-09,90.89094277440448\r
2019-04-13,93.65665447635223\r
2019-04-19,90.21583836207903\r
2019-05-01,87.29376628447972\r
2019-05-06,89.63850019820437\r
2019-05-11,89.63850019820437\r
2019-05-13,91.8582525952012\r
2019-05-14,91.8582525952012\r
2019-05-16,91.8582525952012\r
2019-05-23,91.32581421466571\r
2019-05-31,86.53258927069288\r
2019-06-02,92.92618683757279\r
2019-06-08,92.92618683757279\r
2019-06-12,92.92618683757279\r
2019-06-13,92.92618683757279\r
2019-06-17,83.46302069041978\r
2019-06-18,83.46302069041978\r
2019-06-22,83.46302069041978\r
2019-06-27,94.63354098478987\r
2019-06-28,94.63354098478987\r
2019-06-30,88.91854881779349\r
2019-07-03,94.7803620954956\r
2019-07-05,92.53737613927734\r
2019-07-08,92.53737613927734\r
2019-07-10,93.41295569312138\r
2019-07-12,92.29464263920505\r
2019-07-13,93.41295569312138\r
2019-07-15,92.34317251573464\r
2019-07-17,94.14467982518171\r
2019-07-22,92.05211950797565\r
2019-07-23,92.05211950797565\r
2019-07-25,93.51041007583576\r
2019-07-28,97.33715207967836\r
2019-08-02,91.71294090287343\r
2019-08-04,91.51931004717369\r
2019-08-09,85.4422567483619\r
2019-08-14,81.35945973380633\r
2019-08-16,81.49914546446949\r
2019-08-17,81.49914546446949\r
2019-08-21,79.13527104156033\r
2019-08-22,79.13527104156033\r
2019-08-24,77.89313048626661\r
2019-08-26,76.52059817727752\r
2019-08-29,75.97384271741933\r
2019-08-31,74.7483815276597\r
2019-09-03,68.54465124058447\r
2019-09-06,68.54465124058447\r
2019-09-08,69.8685446988412\r
2019-09-11,70.31169539672713\r
2019-09-13,69.02910868495512\r
2019-09-15,65.61829614247188\r
2019-09-16,65.61829614247188\r
2019-09-20,62.35024198455182\r
2019-09-21,62.35024198455182\r
2019-10-05,63.633681745748035\r
2019-10-08,51.55637229041594\r
2019-10-11,51.55637229041594\r
2019-10-13,55.44769950197303\r
2019-10-15,55.44769950197303\r
2019-10-25,57.76038355095042\r
2019-11-04,53.73376021119586\r
2019-11-09,53.774361672770475\r
2020-01-06,75.06546229934156\r
2020-01-09,75.06546229934156\r
2020-01-11,76.84013550614314\r
2020-01-14,76.84013550614314\r
2020-01-16,74.20584550437745\r
2020-01-19,74.20584550437745\r
2020-01-28,71.512807649021\r
2020-02-02,85.25309963202102\r
2020-02-03,85.25309963202102\r
2020-02-05,87.15087816865123\r
2020-02-07,87.15087816865123\r
2020-02-08,87.15087816865123\r
2020-02-15,87.15087816865123\r
2020-02-18,84.54499323370015\r
2020-02-20,89.11034858239319\r
2020-02-22,90.26400503416083\r
2020-03-08,87.10326595579463\r
2020-03-18,92.97482596917496\r
2020-03-21,90.1676801702497\r
2020-03-24,90.1676801702497\r
2020-03-26,90.1676801702497\r
2020-03-28,93.31553483171959\r
2020-03-29,91.80980693406985\r
2020-03-31,91.80980693406985\r
2020-04-03,98.17788226973819\r
2020-04-05,89.87890919094787\r
2020-04-08,98.1283615677009\r
2020-04-10,93.65665447635223\r
2020-04-12,93.65665447635223\r
2020-04-15,89.78272010983757\r
2020-04-25,95.41745365512307\r
2020-04-28,92.82893376159491\r
2020-05-05,90.40855591652019\r
2020-05-07,90.40855591652019\r
2020-05-08,90.40855591652019\r
2020-05-17,93.85176422405577\r
2020-05-18,93.85176422405577\r
2020-05-20,89.54239608188337\r
2020-05-22,89.8308104040895\r
2020-05-25,92.10060729567424\r
2020-05-27,88.4874980466543\r
2020-05-28,88.4874980466543\r
2020-05-30,90.11953046021414\r
2020-07-19,92.53737613927734\r
2020-07-21,96.25269449224007\r
2020-07-22,96.25269449224007\r
2020-07-24,89.54239608188337\r
2020-07-27,89.54239608188337\r
2020-07-29,94.38900602082458\r
2020-07-31,88.91854881779349\r
2020-08-03,89.49435677580728\r
2020-08-05,88.29614180118266\r
2020-08-06,88.24832409228485\r
2020-08-08,86.48508875128937\r
2020-08-10,85.25309963202102\r
2020-08-15,83.60388674140547\r
2020-08-20,81.1733350741354\r
2020-08-21,83.18152374452833\r
2020-08-23,83.18152374452833\r
2020-08-25,77.93902001381609\r
2020-08-26,74.92951633580053\r
2020-09-02,72.40683628414529\r
2020-09-04,77.29737853950358\r
2020-09-05,76.33820269698386\r
2020-09-07,78.39840521838228\r
2020-09-10,76.93151252004203\r
2020-09-12,76.97721445696492\r
2020-09-14,73.6195710377145\r
2020-09-17,73.75472897930847\r
2020-09-19,72.98991625405812\r
2020-09-29,67.27285301076236\r
2020-09-30,72.81034277787948\r
2020-11-08,63.11927109970546\r
2020-11-11,63.03366995990227\r
2020-11-14,63.03366995990227\r
2020-11-16,63.03366995990227\r
2020-11-18,63.290588279489036\r
2020-11-19,63.290588279489036\r
2020-11-21,63.290588279489036\r
2020-11-23,63.290588279489036\r
2020-11-26,58.21831141329803\r
2020-11-29,58.21831141329803\r
2021-02-06,93.60789796796807\r
2021-02-11,93.60789796796807\r
2021-02-14,98.078849106694\r
2021-02-17,94.53570195877711\r
2021-02-19,96.10512464568869\r
2021-02-24,94.14467982518171\r
2021-02-27,96.89302604346945\r
2021-03-01,89.25428782841796\r
2021-03-04,96.94234029334856\r
2021-03-09,86.2002663548859\r
2021-03-23,90.60140905650529\r
2021-03-24,90.60140905650529\r
2021-03-26,99.91628774265439\r
2021-03-28,92.00364014256837\r
2021-03-29,92.00364014256837\r
2021-03-31,97.48534289104292\r
2021-04-02,97.48534289104292\r
2021-04-03,96.74513295942461\r
2021-04-05,96.74513295942461\r
2021-04-07,93.31553483171959\r
2021-04-15,99.26941983883216\r
2021-04-17,91.42254524694417\r
2021-04-20,98.82240068712474\r
2021-04-22,95.66286344484756\r
2021-04-23,95.66286344484756\r
2021-05-27,92.48881261878572\r
2021-05-28,92.48881261878572\r
2021-05-30,95.46651897891533\r
2021-06-01,93.16946641812866\r
2021-06-09,96.79442237507307\r
2021-06-11,97.78194748162375\r
2021-06-16,97.73249274751137\r
2021-06-19,97.73249274751137\r
2021-06-21,95.76108555992128\r
2021-06-26,93.07212941213028\r
2021-07-01,95.95762949622313\r
2021-07-11,100.0\r
2021-07-17,100.0\r
2021-07-19,100.0\r
2021-07-21,100.0\r
2021-07-29,92.53737613927734\r
2021-08-10,93.99818439321919\r
2021-08-11,93.99818439321919\r
2021-08-18,94.2423852394589\r
2021-08-20,94.97624031531656\r
2021-08-21,92.73171427856224\r
2021-08-23,92.34317251573464\r
2021-08-25,92.34317251573464\r
2021-08-26,92.34317251573464\r
2021-08-28,92.34317251573464\r
2021-08-30,89.87890919094787\r
2021-08-31,90.50496554446846\r
2021-09-05,86.8653336565038\r
2021-09-07,86.8653336565038\r
2021-09-12,76.7487943175826\r
2021-09-17,79.3198424620369\r
2021-09-22,74.07041529655504\r
2021-09-24,74.20584550437745\r
2021-09-25,74.20584550437745\r
2021-09-27,74.20584550437745\r
2021-09-30,76.88581953583125\r
2021-10-12,75.79187845221705\r
2021-10-14,78.85867995797932\r
2021-10-17,67.97356342461255\r
2021-10-19,67.88584371808312\r
2021-10-20,67.88584371808312\r
2021-10-24,65.27170343515844\r
2021-10-27,64.58033693859807\r
2021-12-16,68.6326506884268\r
2021-12-18,75.65549972909994\r
2021-12-19,75.65549972909994\r
2021-12-21,71.60204556378855\r
2021-12-23,73.34950057659265\r
2022-01-02,74.20584550437745\r
2022-01-15,88.05713871383021\r
2022-01-22,90.8426659989241\r
2022-01-23,90.8426659989241\r
2022-01-25,87.3890679101395\r
2022-01-27,90.89094277440448\r
2022-02-01,90.89094277440448\r
2022-02-09,86.15282609052223\r
2022-02-26,92.97482596917496\r
2022-03-01,92.97482596917496\r
2022-03-03,92.97482596917496\r
2022-03-08,92.97482596917496\r
2022-03-23,96.79442237507307\r
2022-03-24,96.79442237507307\r
2022-03-26,93.16946641812866\r
2022-04-05,97.97984891343503\r
2022-04-10,96.99166281843708\r
2022-04-15,96.99166281843708\r
2022-04-17,96.30190103370064\r
2022-04-25,96.30190103370064\r
2022-05-07,92.87755610121414\r
2022-05-08,92.87755610121414\r
2022-05-10,93.90056258211258\r
2022-05-15,93.90056258211258\r
2022-05-17,93.3642410715125\r
2022-05-22,93.31553483171959\r
2022-06-01,94.53570195877711\r
2022-06-06,95.90848105250294\r
2022-06-09,100.0\r
2022-06-11,100.0\r
2022-06-16,98.92168076342541\r
2022-06-17,99.36884775937334\r
2022-06-19,99.36884775937334\r
2022-06-22,95.5646745806375\r
2022-06-24,95.5646745806375\r
2022-07-11,95.1722518650995\r
2022-07-12,95.1722518650995\r
2022-07-14,93.90056258211258\r
2022-07-16,90.69788644034982\r
2022-07-17,90.69788644034982\r
2022-07-19,92.97482596917496\r
2022-07-21,90.40855591652019\r
2022-07-22,92.19760813190844\r
2022-07-24,92.19760813190844\r
2022-07-26,93.07212941213028\r
2022-07-27,91.13245350265255\r
2022-07-31,85.53688714481896\r
2022-08-01,93.80297423296994\r
2022-08-03,93.80297423296994\r
2022-08-05,85.5842152969222\r
2022-08-06,85.67889750074974\r
2022-08-08,81.49914546446949\r
2022-08-10,82.01200208480022\r
2022-08-11,78.30645695782373\r
2022-08-13,78.76655393239554\r
2022-08-15,78.30645695782373\r
2022-08-18,78.44439269256215\r
2022-08-20,77.66381660838611\r
2022-08-23,83.50996733515456\r
2022-08-30,66.70529184591439\r
2022-09-04,70.7113203438025\r
2022-09-05,70.7113203438025\r
2022-09-10,69.382147501825\r
2022-09-12,69.51469011865147\r
2022-09-15,52.88347030304712\r
2022-09-19,61.796769053305354\r
2022-09-20,61.796769053305354\r
2022-09-22,53.04508522000376\r
2022-10-02,51.79683467303278\r
2022-10-04,62.222373034565635\r
2022-10-05,62.222373034565635\r
2022-10-07,62.222373034565635\r
2022-10-09,62.47819748329317\r
2022-10-12,57.88515466201096\r
2022-10-15,58.13496311584883\r
2022-10-22,51.51633111835291\r
2022-10-24,53.612016532021144\r
2022-11-01,53.612016532021144\r
2022-11-06,53.977520627548216\r
2022-11-08,53.977520627548216\r
2022-11-11,53.977520627548216\r
2022-11-13,52.43986889289721\r
2022-11-16,53.49036396588037\r
2022-11-24,49.72514112112606\r
2022-12-28,50.12137467287741\r
2023-01-10,54.01818272972434\r
2023-01-12,54.01818272972434\r
2023-01-18,54.01818272972434\r
2023-02-04,57.59416026209618\r
2023-02-06,60.4413294626682\r
2023-02-09,57.4280950496899\r
2023-02-11,59.85144968043573\r
2023-02-12,59.85144968043573\r
2023-02-14,59.09584210992772\r
2023-02-16,58.84467738096101\r
2023-02-17,61.28731771649911\r
2023-02-19,58.13496311584883\r
2023-02-21,59.599228767863934\r
2023-02-24,61.24492625858466\r
2023-02-26,61.711763933985495\r
2023-03-01,62.30760938170986\r
2023-03-03,64.06340795398482\r
2023-03-04,62.392884203921106\r
2023-03-09,64.2786285026199\r
2023-03-16,62.052015837227124\r
2023-03-28,66.40033956024432\r
2023-04-05,67.27285301076236\r
2023-04-07,65.83522380348172\r
2023-04-08,67.3165772170317\r
2023-04-15,67.3165772170317\r
2023-04-17,67.14173662621864\r
2023-05-02,71.0226557681374\r
2023-05-05,71.0226557681374\r
2023-05-10,71.0226557681374\r
2023-05-17,67.71051642676503\r
2023-05-23,67.71051642676503\r
2023-05-27,71.37901961722828\r
2023-05-28,70.66688069222445\r
2023-05-30,72.40683628414529\r
2023-06-02,72.40683628414529\r
2023-06-04,73.03483241392571\r
2023-06-24,75.5192020403947\r
2023-07-09,77.7555154004077\r
2023-07-11,75.29221943751881\r
2023-07-14,73.39448958321638\r
2023-07-16,73.79979979330513\r
2023-07-17,72.81034277787948\r
2023-07-19,73.21458815944074\r
2023-07-22,72.90011127948979\r
2023-07-27,73.34950057659265\r
2023-07-29,73.34950057659265\r
2023-07-31,67.22913817548783\r
2023-08-03,67.3165772170317\r
2023-08-05,67.3165772170317\r
2023-08-06,67.3165772170317\r
2023-08-08,61.32971884738585\r
2023-08-10,62.00945061285667\r
2023-08-11,59.557226114233174\r
2023-08-13,59.13773718948572\r
2023-08-15,58.88651366343165\r
2023-08-18,57.4280950496899\r
2023-08-20,60.56798032017486\r
2023-08-21,58.677430352900096\r
2023-08-23,53.977520627548216\r
`;export{r as default};
