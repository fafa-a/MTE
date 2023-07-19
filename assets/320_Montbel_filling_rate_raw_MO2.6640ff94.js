const n=`date,value\r
2017-01-03,25.55001965712268\r
2017-01-13,27.022931467365186\r
2017-02-15,42.10100031698082\r
2017-02-22,43.56004610608706\r
2017-02-25,41.24777634687107\r
2017-03-07,49.089937944618406\r
2017-03-14,57.1026023587762\r
2017-03-17,58.33999334385511\r
2017-03-27,59.58112189633679\r
2017-04-06,80.61471003862574\r
2017-04-23,83.34587707602275\r
2017-05-16,87.05985018514583\r
2017-05-23,88.74063275069918\r
2017-05-26,91.31234285799992\r
2017-06-02,94.0191838308569\r
2017-06-05,93.67905287194108\r
2017-06-12,94.48283328831775\r
2017-06-15,93.13623138041474\r
2017-06-22,94.37817703539726\r
2017-06-25,92.04224717769408\r
2017-07-02,92.38814314040259\r
2017-07-05,75.15098658449627\r
2017-07-07,75.15098658449627\r
2017-07-10,75.15098658449627\r
2017-07-12,75.15098658449627\r
2017-07-17,82.99329946137647\r
2017-07-22,82.99329946137647\r
2017-07-25,83.00602913395004\r
2017-07-27,82.43846783154001\r
2017-07-30,75.81200110373398\r
2017-08-04,81.73408431135118\r
2017-08-06,82.33281288214438\r
2017-08-11,78.00658087727103\r
2017-08-14,80.7233455144244\r
2017-08-19,71.02032732863583\r
2017-08-21,71.02032732863583\r
2017-08-24,65.26723733011669\r
2017-08-26,68.98889864842633\r
2017-08-29,78.41746968249497\r
2017-09-05,64.47262887363323\r
2017-09-08,67.12544702631588\r
2017-09-10,69.34642592228408\r
2017-09-13,37.5305085563411\r
2017-09-20,36.819109764379085\r
2017-09-23,34.47805229489542\r
2017-09-28,34.91995431878664\r
2017-10-03,36.19083355977556\r
2017-10-05,28.67173288288887\r
2017-10-08,31.87784652377455\r
2017-10-10,27.847769890027752\r
2017-10-13,30.687091105745328\r
2017-10-15,27.39407680869737\r
2017-10-18,29.880836240167447\r
2017-10-20,26.69583482840046\r
2017-10-23,30.366148331114434\r
2017-10-25,27.445323723025982\r
2017-10-28,25.012786860620857\r
2017-10-30,24.078256056675183\r
2017-11-07,27.20584187120941\r
2017-11-12,27.20584187120941\r
2017-11-14,28.047824792457703\r
2017-11-17,27.786731464577436\r
2017-11-19,26.562852197618437\r
2017-11-22,25.203787182221344\r
2017-11-24,25.128181392917746\r
2017-11-27,27.61574192146357\r
2017-11-29,24.29589938841181\r
2017-12-07,28.86059479231062\r
2017-12-24,30.321854075043102\r
2017-12-27,27.739828174111747\r
2018-01-01,39.87145109069579\r
2018-01-03,39.87145109069579\r
2018-01-11,39.87145109069579\r
2018-01-18,59.14582397912389\r
2018-01-21,59.14582397912389\r
2018-01-23,65.4387293747093\r
2018-01-28,71.80260713173075\r
2018-01-31,75.88878468414934\r
2018-02-02,76.30576513543228\r
2018-02-07,78.11329953092813\r
2018-02-25,96.39579565563136\r
2018-02-27,96.75967001745941\r
2018-03-02,96.68130525453498\r
2018-03-07,96.68130525453498\r
2018-03-09,98.94451467096394\r
2018-03-19,99.58498304907104\r
2018-03-27,99.58498304907104\r
2018-04-01,99.26680665863233\r
2018-04-06,99.27615691887861\r
2018-04-11,99.27615691887861\r
2018-04-21,100.0\r
2018-04-26,100.0\r
2018-05-11,99.65992821021015\r
2018-05-18,99.6692985018808\r
2018-05-21,99.89901966561722\r
2018-06-02,99.78646739741689\r
2018-06-20,99.07523140596855\r
2018-06-22,99.07523140596855\r
2018-06-25,100.0\r
2018-06-27,100.0\r
2018-07-02,99.57093422993441\r
2018-07-05,99.46794234780435\r
2018-07-07,99.8896376859188\r
2018-07-10,99.76771536513567\r
2018-07-12,99.91778505634699\r
2018-07-15,99.78646739741689\r
2018-07-17,99.90371083438234\r
2018-07-20,99.65992821021015\r
2018-07-25,99.50538726390411\r
2018-07-27,100.0\r
2018-07-30,99.80522133795864\r
2018-08-01,99.99755925866194\r
2018-08-04,99.8896376859188\r
2018-08-06,99.81928804567886\r
2018-08-11,99.60840013256427\r
2018-08-14,99.82397718679074\r
2018-08-16,100.0\r
2018-08-19,99.8896376859188\r
2018-08-21,99.29485886996203\r
2018-08-24,99.80522133795864\r
2018-08-26,99.51006841498446\r
2018-08-29,99.51006841498446\r
2018-08-31,99.29953465577535\r
2018-09-03,98.27838259786262\r
2018-09-05,98.66006243385682\r
2018-09-08,98.01354045806167\r
2018-09-10,98.01354045806167\r
2018-09-13,97.96711682207255\r
2018-09-20,98.09713301361433\r
2018-09-23,98.17146990188428\r
2018-09-25,97.9764005965799\r
2018-09-28,98.53895526613039\r
2018-09-30,98.53429890660945\r
2018-10-03,98.15288282137115\r
2018-10-05,97.62395199915926\r
2018-10-13,92.37015721885122\r
2018-10-20,90.80818189507379\r
2018-10-23,90.13683865750994\r
2018-10-25,90.46105852002754\r
2018-10-30,90.46105852002754\r
2018-11-04,88.97398293141049\r
2018-11-12,85.60343052326061\r
2018-11-14,85.60343052326061\r
2018-11-24,88.95195458805975\r
2018-11-27,87.75806146080899\r
2018-12-02,87.9900099135586\r
2018-12-04,87.97249280407121\r
2018-12-07,87.29079819687934\r
2018-12-17,86.09175368693903\r
2018-12-27,88.16966917261824\r
2018-12-29,88.11268255847494\r
2019-01-03,76.20039119742049\r
2019-01-06,78.43804480649533\r
2019-01-11,77.8015747151118\r
2019-01-16,78.10098180831507\r
2019-01-23,75.19522486847389\r
2019-01-26,75.19522486847389\r
2019-02-12,83.99793084066654\r
2019-02-15,94.71967895264987\r
2019-02-17,92.4826003373033\r
2019-02-20,93.2582173018202\r
2019-02-22,92.97371796023951\r
2019-02-25,94.37817703539726\r
2019-02-27,92.98274245203307\r
2019-03-02,93.44814503294714\r
2019-03-07,95.18062370556885\r
2019-03-09,94.93402727013157\r
2019-03-12,95.24004124861008\r
2019-03-14,96.14749848160196\r
2019-03-17,96.32678943604313\r
2019-03-19,96.32678943604313\r
2019-03-22,96.93496262982055\r
2019-03-24,96.5292835556393\r
2019-03-27,97.13814766450005\r
2019-03-29,97.42947279280682\r
2019-04-01,97.42947279280682\r
2019-04-08,97.41558945586817\r
2019-04-13,99.14529666821028\r
2019-04-28,99.09858351341576\r
2019-05-01,98.63210747697485\r
2019-05-06,98.59484087358551\r
2019-05-13,99.1826757746072\r
2019-05-16,99.0939128535324\r
2019-05-23,99.7067844387872\r
2019-05-28,99.7067844387872\r
2019-05-31,100.0\r
2019-06-02,99.93655235554549\r
2019-06-07,99.93655235554549\r
2019-06-12,100.0\r
2019-06-17,98.84653843967331\r
2019-06-22,98.90718419512065\r
2019-06-25,98.90718419512065\r
2019-06-27,99.06122157185075\r
2019-06-30,99.103254292497\r
2019-07-02,99.103254292497\r
2019-07-05,99.62245181364\r
2019-07-07,99.67866927057013\r
2019-07-10,99.48198329706892\r
2019-07-12,99.63650456796587\r
2019-07-15,99.78177921044829\r
2019-07-17,99.46794234780435\r
2019-07-20,99.46794234780435\r
2019-07-22,99.1826757746072\r
2019-07-25,99.0145298723414\r
2019-08-01,98.53429890660945\r
2019-08-04,98.47843188525863\r
2019-08-06,98.47843188525863\r
2019-08-09,98.47377707454027\r
2019-08-11,98.03211324692646\r
2019-08-14,97.72590586848456\r
2019-08-16,97.10118779601403\r
2019-08-21,96.89804464523242\r
2019-08-24,95.94543861630433\r
2019-08-26,95.5236934649657\r
2019-08-29,95.8078024841278\r
2019-08-31,92.67167153336239\r
2019-09-03,92.62213267766442\r
2019-09-05,92.56360524818912\r
2019-09-08,91.19174219224625\r
2019-09-13,87.5570164039805\r
2019-09-15,83.29060062135788\r
2019-09-18,85.67248222817948\r
2019-09-20,73.15898981210592\r
2019-09-28,73.55984122744192\r
2019-09-30,73.55984122744192\r
2019-10-03,69.94839683844584\r
2019-10-05,69.94839683844584\r
2019-10-08,64.66522661851236\r
2019-10-10,64.66151988214428\r
2019-10-13,62.46547782551111\r
2019-10-15,62.47275400741415\r
2019-10-25,53.6036005527033\r
2019-10-30,40.4902570339034\r
2019-11-02,40.4902570339034\r
2019-11-04,40.33220097073522\r
2019-11-09,40.33220097073522\r
2019-11-12,44.00722529017027\r
2019-11-17,43.70683213762277\r
2019-11-19,55.653759826222846\r
2019-11-24,55.63325690029208\r
2019-11-27,60.29261488834175\r
2019-11-29,60.29261488834175\r
2019-12-02,60.29261488834175\r
2019-12-07,59.772774350027255\r
2019-12-09,59.48542063311258\r
2019-12-17,80.33096095453581\r
2019-12-22,80.33096095453581\r
2019-12-24,81.78879910523068\r
2019-12-27,89.56986479859637\r
2019-12-29,89.32242277584828\r
2020-01-06,88.67025261406165\r
2020-01-08,88.5120078488261\r
2020-01-11,91.73288519757122\r
2020-01-16,89.7822529918731\r
2020-01-28,87.03372600120767\r
2020-01-31,90.92850771815942\r
2020-02-15,92.35666902199105\r
2020-02-17,95.0024915353152\r
2020-02-20,96.11533719750082\r
2020-02-22,94.69233422025192\r
2020-02-27,93.72889697868226\r
2020-03-01,94.68777718047713\r
2020-03-08,94.0191838308569\r
2020-03-11,96.45101989705518\r
2020-03-13,96.45101989705518\r
2020-03-18,98.25513534741921\r
2020-03-21,97.86038765107304\r
2020-03-28,98.15752941284354\r
2020-03-31,98.19470643239218\r
2020-04-05,98.42258201947128\r
2020-04-07,96.69513183224443\r
2020-04-10,98.95384848174058\r
2020-04-15,99.00986135794044\r
2020-04-25,99.49602531945813\r
2020-05-07,97.38782599575319\r
2020-05-17,97.59615639882665\r
2020-05-20,99.46326226985278\r
2020-05-22,98.58086786326162\r
2020-05-25,99.34162209295735\r
2020-05-27,99.29018320336615\r
2020-05-30,99.30421056080658\r
2020-06-06,99.31356272852466\r
2020-06-24,99.29953465577535\r
2020-06-26,99.29953465577535\r
2020-07-01,99.71147071755836\r
2020-07-04,99.36033072034837\r
2020-07-06,99.49134452609155\r
2020-07-09,99.44454315038392\r
2020-07-14,99.49602531945813\r
2020-07-16,99.49602531945813\r
2020-07-19,99.60371647737024\r
2020-07-21,99.50538726390411\r
2020-07-24,99.49134452609155\r
2020-07-26,99.5287942116991\r
2020-07-29,99.5334759589784\r
2020-07-31,98.83254612552197\r
2020-08-03,98.79057561826909\r
2020-08-05,98.06926454105344\r
2020-08-08,97.93926835656212\r
2020-08-10,97.14276818355839\r
2020-08-13,97.11966677826763\r
2020-08-15,96.76889166156688\r
2020-08-20,94.76526300685806\r
2020-08-23,92.75276605384916\r
2020-08-25,91.32574825943011\r
2020-08-30,84.21589363246146\r
2020-09-02,85.20266428913952\r
2020-09-04,75.15902886038245\r
2020-09-07,75.81604129556267\r
2020-09-12,70.31636223324726\r
2020-09-14,63.81202575143272\r
2020-09-17,66.91758403418532\r
2020-09-19,66.84208403072616\r
2020-09-24,65.63662017505003\r
2020-09-27,65.63662017505003\r
2020-09-29,64.77648221123673\r
2020-10-17,64.7616421489672\r
2020-10-24,65.39023953094942\r
2020-11-01,64.33208106254881\r
2020-11-08,71.72809105936878\r
2020-11-11,76.28144107461064\r
2020-11-16,76.28144107461064\r
2020-11-18,74.5571509817879\r
2020-11-21,74.01371251949702\r
2020-11-23,74.18530227551425\r
2020-12-03,69.95226471481375\r
2020-12-18,75.630313123332\r
2020-12-21,75.630313123332\r
2020-12-26,73.11936607269007\r
2020-12-28,73.11936607269007\r
2021-02-06,96.69513183224443\r
2021-02-11,98.50636325143816\r
2021-02-14,98.50636325143816\r
2021-02-19,98.56223885087331\r
2021-02-24,99.30888658505619\r
2021-03-01,97.1797366201012\r
2021-03-13,98.6367663385743\r
2021-03-16,98.65540297649406\r
2021-03-21,98.64608441922884\r
2021-03-23,99.52411258366052\r
2021-03-28,99.58029999011313\r
2021-03-31,99.48198329706892\r
2021-04-02,99.75834006458354\r
2021-04-05,99.6505583955545\r
2021-04-07,99.60840013256427\r
2021-04-12,99.65524324325567\r
2021-04-15,99.73021702523619\r
2021-04-20,99.80522133795864\r
2021-04-22,99.87087515783635\r
2021-05-02,98.22724257762526\r
2021-05-12,99.98817226912585\r
2021-05-17,99.98817226912585\r
2021-05-20,99.97878575673485\r
2021-05-25,99.24343309426499\r
2021-05-27,100.0\r
2021-05-30,100.0\r
2021-06-06,100.0\r
2021-06-09,98.92118222970818\r
2021-06-11,98.92118222970818\r
2021-06-14,99.29485886996203\r
2021-06-16,99.103254292497\r
2021-06-19,99.7067844387872\r
2021-06-21,99.83335582682496\r
2021-06-26,99.31356272852466\r
2021-06-29,99.1920217432599\r
2021-07-01,100.0\r
2021-07-11,99.77240319430818\r
2021-07-14,99.84273494394292\r
2021-07-16,99.58498304907104\r
2021-07-19,99.61308390700692\r
2021-07-21,99.67398382659786\r
2021-07-26,99.41646804814168\r
2021-07-29,99.42582593863257\r
2021-07-31,99.57093422993441\r
2021-08-10,96.8888163388561\r
2021-08-13,96.8888163388561\r
2021-08-15,96.8888163388561\r
2021-08-18,96.8888163388561\r
2021-08-20,96.97188822912179\r
2021-08-23,82.52727468920865\r
2021-08-25,82.60766836385281\r
2021-08-28,79.10212640870158\r
2021-08-30,78.70991038553316\r
2021-09-04,73.32156867364165\r
2021-09-22,64.45412625179313\r
2021-09-27,59.698203238825634\r
2021-09-29,59.698203238825634\r
2021-10-02,59.70175310115857\r
2021-10-12,50.18528846066004\r
2021-10-14,45.348319911088744\r
2021-10-17,45.91919347546579\r
2021-10-19,44.420573177824565\r
2021-10-22,44.420573177824565\r
2021-10-24,42.782688412103006\r
2021-10-27,41.8194445430993\r
2021-11-06,39.2578020241903\r
2021-12-16,58.87067670931211\r
2021-12-18,61.04101405192148\r
2021-12-21,58.84249575205654\r
2021-12-23,59.08932687711318\r
2021-12-26,59.08932687711318\r
2022-01-12,82.56958186620386\r
2022-01-15,85.35767880943766\r
2022-01-17,85.35767880943766\r
2022-01-20,85.35767880943766\r
2022-01-22,84.51555629866864\r
2022-01-25,84.33996967115861\r
2022-01-27,91.45986088052105\r
2022-01-30,91.50906220849107\r
2022-02-01,91.28553525170489\r
2022-02-06,92.25329494431914\r
2022-02-09,92.31621083054726\r
2022-03-01,91.80905246067346\r
2022-03-03,94.06458505955109\r
2022-03-08,94.48738498487046\r
2022-03-23,95.87660717715815\r
2022-03-26,95.87660717715815\r
2022-04-05,96.5292835556393\r
2022-04-10,96.5292835556393\r
2022-04-17,97.9346273624322\r
2022-04-22,98.43654287762817\r
2022-04-25,98.39001085330897\r
2022-05-17,98.29698254229842\r
2022-05-20,98.29698254229842\r
2022-05-22,98.93984794434962\r
2022-05-27,98.6926819717361\r
2022-05-30,98.59484087358551\r
2022-06-01,98.40862223348668\r
2022-06-04,98.60881495623718\r
2022-06-06,98.4318891391115\r
2022-06-09,98.46912238295727\r
2022-06-11,98.46912238295727\r
2022-06-14,82.15125797414427\r
2022-06-16,87.05549585968106\r
2022-06-29,82.70080872976932\r
2022-07-01,83.53737199291164\r
2022-07-04,82.8194332106491\r
2022-07-09,82.8194332106491\r
2022-07-11,94.32814624520135\r
2022-07-14,95.14406904294927\r
2022-07-16,94.77894053885562\r
2022-07-19,94.64221331382939\r
2022-07-21,91.18281224269961\r
2022-07-24,86.62065874795209\r
2022-07-26,86.70753185457473\r
2022-07-31,78.3023029971177\r
2022-08-03,67.75113103264052\r
2022-08-05,67.97181524059253\r
2022-08-08,61.285590487068816\r
2022-08-10,61.39005623507994\r
2022-08-13,53.5165715285633\r
2022-08-15,54.05334929944012\r
2022-08-20,48.644021570058335\r
2022-08-23,33.28951144587853\r
2022-08-28,33.395685613128606\r
2022-08-30,33.395685613128606\r
2022-09-02,33.772648695536574\r
2022-09-04,29.421530569112214\r
2022-09-12,27.14093643050537\r
2022-09-22,21.933149153395735\r
2022-09-27,21.933149153395735\r
2022-10-02,21.933149153395735\r
2022-10-04,18.51506590123909\r
2022-10-09,18.970032360190515\r
2022-10-12,18.970032360190515\r
2022-10-22,13.768502229168622\r
2022-11-01,13.864935090047306\r
2022-11-06,9.9139087886424\r
2022-11-08,9.9139087886424\r
2022-11-11,11.815424977076749\r
2022-11-13,11.358121357131996\r
2022-11-16,9.245733049262626\r
2022-11-18,9.245733049262626\r
2022-11-23,9.333885615656893\r
2023-02-01,19.39813694606791\r
2023-02-04,19.39813694606791\r
2023-02-06,19.39813694606791\r
2023-02-09,19.39813694606791\r
2023-02-11,20.57173369633386\r
2023-02-14,20.54781599261156\r
2023-02-16,20.06672180236969\r
2023-02-19,19.913604229523077\r
2023-02-24,19.34795693999239\r
2023-03-01,19.002486038457295\r
2023-03-03,18.57538265894099\r
2023-03-06,18.57538265894099\r
2023-03-16,24.886627034147786\r
2023-03-28,30.45484188345618\r
2023-04-02,30.45484188345618\r
2023-04-05,30.45484188345618\r
2023-04-07,33.52021972793581\r
2023-04-12,33.14478880267334\r
2023-04-15,33.14478880267334\r
2023-04-17,37.59680298178739\r
2023-04-20,36.92849707537941\r
2023-04-27,36.92849707537941\r
2023-05-02,48.596375472564354\r
2023-05-10,48.596375472564354\r
2023-05-12,48.596375472564354\r
2023-06-16,84.91886721008282\r
2023-06-19,84.91886721008282\r
2023-06-24,85.68974986503139\r
2023-06-26,85.68974986503139\r
2023-07-11,81.92777954995509\r
`;export{n as default};
