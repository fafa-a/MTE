const n=`date,value\r
2017-02-19,87.1221313756235\r
2017-02-22,80.26816416599371\r
2017-03-01,76.38404266449893\r
2017-03-11,98.72106793492314\r
2017-03-14,100.0\r
2017-03-21,96.1261395690643\r
2017-03-31,79.51426608927265\r
2017-04-03,90.19236516882245\r
2017-04-10,90.26663351529922\r
2017-04-20,89.18447656406624\r
2017-04-23,93.02980149243308\r
2017-04-30,92.86467753767688\r
2017-05-03,84.13336813640169\r
2017-05-23,96.15652505436287\r
2017-05-30,97.00870412750659\r
2017-06-02,95.32216974757259\r
2017-06-09,87.82728729854409\r
2017-06-12,80.31091326715504\r
2017-06-19,68.4869131496196\r
2017-06-22,70.88514493102456\r
2017-07-02,70.04174751386634\r
2017-07-04,60.20520350923497\r
2017-07-07,75.22525590984512\r
2017-07-12,74.03124616921133\r
2017-07-14,69.89248778530258\r
2017-07-17,74.89136064380546\r
2017-07-19,76.60814680237137\r
2017-07-22,75.16957001902412\r
2017-07-24,74.01740232795422\r
2017-07-27,81.61147693831646\r
2017-08-18,64.09464587998606\r
2017-08-21,68.87783068759555\r
2017-08-23,66.13148415246303\r
2017-08-26,67.58678955687955\r
2017-09-05,72.40404273445391\r
2017-09-07,67.3858501411455\r
2017-09-10,67.3858501411455\r
2017-09-12,67.3858501411455\r
2017-10-02,65.95866858136745\r
2017-10-05,67.41262976762036\r
2017-10-07,60.93997653704558\r
2017-10-10,61.561187682310546\r
2017-10-12,62.57542510537982\r
2017-10-15,65.95866858136745\r
2017-10-17,63.16323884888709\r
2017-10-22,62.471129645743005\r
2017-10-25,67.65381663672908\r
2017-10-27,82.07058158559887\r
2017-10-30,87.07812628684086\r
2017-11-01,87.07812628684086\r
2017-11-06,86.59459246992425\r
2018-02-24,90.62342409230884\r
2018-02-27,90.62342409230884\r
2018-03-04,92.14535859192752\r
2018-03-16,100.0\r
2018-03-19,99.24299829157572\r
2018-03-21,99.24299829157572\r
2018-03-24,94.30927232885708\r
2018-03-26,90.6531792309272\r
2018-03-31,86.17045991983409\r
2018-04-15,86.1120170199323\r
2018-04-18,89.6138187238406\r
2018-04-20,85.01882701796899\r
2018-04-23,85.01882701796899\r
2018-04-25,86.9461584710709\r
2018-04-28,85.76165588902275\r
2018-05-25,99.36594763061849\r
2018-05-28,99.36594763061849\r
2018-06-19,75.04433039838203\r
2018-06-22,65.71965111381095\r
2018-06-27,81.210512314327\r
2018-06-29,77.38028371114908\r
2018-07-02,65.36170395408743\r
2018-07-04,77.70399324327168\r
2018-07-07,74.58575433096016\r
2018-07-09,69.05332632567035\r
2018-07-12,73.80985523664884\r
2018-07-14,73.80985523664884\r
2018-07-17,75.14173257382016\r
2018-07-19,71.44484500794427\r
2018-07-22,73.96203617173069\r
2018-07-24,68.58120009315178\r
2018-07-27,70.70800615519558\r
2018-07-29,66.35771630072828\r
2018-08-01,68.0296047016136\r
2018-08-03,66.83770243021213\r
2018-08-06,65.25577911576393\r
2018-08-08,66.67757036394352\r
2018-08-11,64.91194562254587\r
2018-08-16,79.7700231667412\r
2018-08-18,79.7700231667412\r
2018-08-21,84.8589105176758\r
2018-08-23,79.35811394648815\r
2018-08-26,79.58528041903435\r
2018-08-28,71.08973162242589\r
2018-08-31,71.08973162242589\r
2018-09-02,71.08973162242589\r
2018-09-05,68.97230860290672\r
2018-09-07,68.90481967767255\r
2018-09-10,68.86433760277323\r
2018-09-12,68.86433760277323\r
2018-09-17,66.23791211069154\r
2018-09-20,69.67558496392598\r
2018-09-22,75.12781522644134\r
2018-09-25,71.23989509457364\r
2018-09-27,69.3371546203814\r
2018-10-02,67.8013593665041\r
2018-10-05,65.7860138965258\r
2018-10-12,66.33108649364026\r
2018-10-17,69.26953890225269\r
2018-10-20,72.74771472407927\r
2018-10-22,72.74771472407927\r
2018-10-25,73.10574715043333\r
2019-02-14,83.64126618800279\r
2019-02-17,92.81966184124742\r
2019-02-19,84.37980390649639\r
2019-02-22,87.03412910571859\r
2019-02-27,83.15019181193848\r
2019-03-01,83.87271567978907\r
2019-03-11,75.65731854667158\r
2019-03-16,90.2369235677564\r
2019-03-19,92.4448330444267\r
2019-03-21,93.87204855282964\r
2019-03-24,90.32606384470571\r
2019-03-26,92.14535859192752\r
2019-03-29,91.09992299754619\r
2019-03-31,91.14464032138183\r
2019-04-05,90.53417952332083\r
2019-04-13,83.23677725096849\r
2019-04-15,76.72028640977193\r
2019-04-18,71.04879750937295\r
2019-04-20,71.93757847000084\r
2019-04-30,74.44698934695212\r
2019-05-10,82.74655042326468\r
2019-05-13,82.74655042326468\r
2019-05-15,82.51621200492961\r
2019-05-23,81.95571956294539\r
2019-05-30,78.66385466564532\r
2019-06-02,86.36049671285178\r
2019-06-04,87.94500973927869\r
2019-06-07,83.5834393640722\r
2019-06-12,83.46782839490339\r
2019-06-19,73.78219795428932\r
2019-06-24,73.78219795428932\r
2019-06-27,84.11887989910275\r
2019-06-29,78.3811075213178\r
2019-07-02,80.32516476638524\r
2019-07-04,74.65517128103468\r
2019-07-07,80.58184549587804\r
2019-07-12,80.71029504717613\r
2019-07-14,75.65731854667158\r
2019-07-17,77.78851822760049\r
2019-07-19,76.93070536142326\r
2019-07-22,83.09248599362587\r
2019-07-24,85.64498177602437\r
2019-07-29,82.51621200492961\r
2019-08-01,88.81494297157161\r
2019-08-03,87.37164285666991\r
2019-08-06,86.03898322830568\r
2019-08-08,78.12694483983151\r
2019-08-11,74.97478493020012\r
2019-08-16,74.68294449127968\r
2019-08-18,70.29982638561279\r
2019-08-21,71.93757847000084\r
2019-08-23,70.31341883357672\r
2019-08-26,73.22982704747817\r
2019-08-31,67.43941317815901\r
2019-09-02,67.31891763308644\r
2019-09-05,72.5689330550183\r
2019-09-07,69.3371546203814\r
2019-09-12,71.32184993118106\r
2019-09-15,64.59513467505191\r
2019-09-17,62.31480251005574\r
2019-09-20,61.08213945559348\r
2019-09-25,62.10658311964007\r
2019-09-27,64.0551925998691\r
2019-09-30,69.01281323595076\r
2019-10-02,69.37773531199679\r
2019-10-05,75.1974111311631\r
2019-10-07,77.9858702534003\r
2019-10-10,77.9858702534003\r
2019-10-17,84.64101518843478\r
2019-10-20,84.64101518843478\r
2020-02-12,76.1042410160997\r
2020-02-14,76.1042410160997\r
2020-02-19,76.1042410160997\r
2020-02-22,76.79040328469165\r
2020-02-24,75.12781522644134\r
2020-03-03,75.26702995177915\r
2020-03-08,72.58267993591994\r
2020-03-10,85.03337019082954\r
2020-03-15,83.39560044438453\r
2020-03-18,83.39560044438453\r
2020-03-20,76.3140580184769\r
2020-03-25,78.21163311045869\r
2020-03-28,78.94696372497474\r
2020-03-30,78.94696372497474\r
2020-04-02,82.78976429474474\r
2020-04-04,78.3811075213178\r
2020-04-07,72.95419560106275\r
2020-04-09,69.77045044416344\r
2020-04-14,64.42375903382401\r
2020-04-22,72.59642774287049\r
2020-04-24,88.91835736669937\r
2020-04-29,91.51758807640236\r
2020-05-04,94.97402496907429\r
2020-05-07,94.82279903215256\r
2020-05-09,96.67360059485898\r
2020-05-14,98.27666605508333\r
2020-05-19,98.7364048535119\r
2020-05-22,99.45819515855202\r
2020-05-24,89.48049613377148\r
2020-05-27,88.62300124963976\r
2020-05-29,88.78540386361013\r
2020-06-03,88.78540386361013\r
2020-06-06,88.78540386361013\r
2020-06-23,78.36697967111678\r
2020-06-26,82.4155107730351\r
2020-06-28,82.4155107730351\r
2020-07-01,86.46288587395105\r
2020-07-03,86.46288587395105\r
2020-07-06,87.44507687343454\r
2020-07-08,83.15019181193848\r
2020-07-11,86.18507284814434\r
2020-07-16,84.07542051203882\r
2020-07-18,69.94675094708914\r
2020-07-21,69.94675094708914\r
2020-07-23,81.09608004593727\r
2020-07-26,79.81267773976263\r
2020-07-28,80.76740708932779\r
2020-07-31,86.41899952147249\r
2020-08-02,83.4244889559298\r
2020-08-05,82.93386847583137\r
2020-08-07,81.210512314327\r
2020-08-10,80.71029504717613\r
2020-08-12,80.2254231605942\r
2020-08-15,80.31091326715504\r
2020-08-20,79.03196696008038\r
2020-08-22,76.84651318481038\r
2020-08-25,76.93070536142326\r
2020-08-27,76.97281374381818\r
2020-09-01,75.9505058312258\r
2020-09-04,74.5718736971465\r
2020-09-06,78.45176035730461\r
2020-09-14,92.54973072854176\r
2020-09-16,94.88327912176456\r
2020-09-26,86.24353337343045\r
2020-09-29,86.24353337343045\r
2021-02-21,81.42522744603295\r
2021-02-23,85.20795725746622\r
2021-02-26,82.02750162250545\r
2021-02-28,83.69910723437695\r
2021-03-05,84.55391285755951\r
2021-03-08,91.66691878271324\r
2021-03-10,92.50476939756015\r
2021-03-13,91.54744729012026\r
2021-03-15,91.54744729012026\r
2021-03-20,90.92113176582195\r
2021-03-23,90.2814897934227\r
2021-03-25,94.94377292533936\r
2021-03-28,90.89134537368324\r
2021-03-30,92.7446529326882\r
2021-04-02,89.5841853808872\r
2021-04-04,92.96974434691073\r
2021-04-07,92.50476939756015\r
2021-04-09,91.09992299754619\r
2021-04-14,89.99936924291922\r
2021-04-19,88.13642828621072\r
2021-04-22,91.95088559103695\r
2021-04-24,92.69965794061835\r
2021-06-03,86.65315161776748\r
2021-06-11,88.12169852799649\r
2021-06-13,90.48956896722812\r
2021-06-16,93.81179854857137\r
2021-06-18,93.81179854857137\r
2021-06-26,94.46020662918318\r
2021-07-01,95.06480166428646\r
2021-07-11,67.77452491350799\r
2021-07-23,87.50383988323439\r
2021-07-26,87.50383988323439\r
2021-07-28,79.72737670404415\r
2021-08-02,82.21423955148622\r
2021-08-05,79.10282783790092\r
2021-08-10,98.84378700672634\r
2021-08-12,99.16618245099293\r
2021-08-15,99.12010310155097\r
2021-08-17,98.5830738037152\r
2021-08-20,99.28909794916855\r
2021-08-22,98.44514833698443\r
2021-08-25,96.44535745991313\r
2021-08-27,99.04332111394108\r
2021-08-30,99.70433736095814\r
2021-09-01,94.30927232885708\r
2021-09-06,92.77465390804684\r
2021-09-11,92.59469982928206\r
2021-09-24,82.87621610787215\r
2021-09-29,82.87621610787215\r
2021-10-01,91.66691878271324\r
2021-10-06,89.40645853758545\r
2021-10-09,97.66486902985532\r
2021-10-11,97.66486902985532\r
2021-10-14,100.0\r
2021-10-16,87.10746213413823\r
2021-10-21,80.95312043133794\r
2021-10-24,77.81670048460165\r
2021-10-26,73.25741051968974\r
2022-02-13,82.77535877932587\r
2022-02-18,84.829846296264\r
2022-02-23,82.34360810176281\r
2022-02-26,89.21406281997781\r
2022-02-28,85.93677295177149\r
2022-03-03,85.38267164217616\r
2022-03-05,85.98057206497353\r
2022-03-08,84.62649591838586\r
2022-03-10,86.17045991983409\r
2022-03-23,100.0\r
2022-03-25,100.0\r
2022-03-28,100.0\r
2022-04-04,100.0\r
2022-04-14,93.08987243024414\r
2022-04-17,100.0\r
2022-04-19,100.0\r
2022-04-22,94.91352430946435\r
2022-04-27,100.0\r
2022-04-29,100.0\r
2022-05-07,100.0\r
2022-05-12,89.0218145555046\r
2022-05-14,95.62527242659932\r
2022-05-17,95.62527242659932\r
2022-05-19,94.91352430946435\r
2022-05-22,94.91352430946435\r
2022-05-29,89.62863670240544\r
2022-06-01,91.08501895738087\r
2022-06-06,90.20721709876128\r
2022-06-11,94.18858670772855\r
2022-06-13,95.65560151401525\r
2022-06-16,92.08550518219018\r
2022-06-18,92.50476939756015\r
2022-06-21,92.50476939756015\r
2022-06-26,89.08095215706726\r
2022-06-28,84.4088132005627\r
2022-07-03,96.61271699825673\r
2022-07-06,95.91353682719466\r
2022-07-08,96.78017970904585\r
2022-07-11,88.26903550572595\r
2022-07-13,90.92113176582195\r
2022-07-16,88.41646000247738\r
2022-07-18,85.10609932441217\r
2022-07-21,85.7033117711245\r
2022-07-26,84.27829930903846\r
2022-07-28,87.22484066165156\r
2022-07-31,93.10489231944081\r
2022-08-02,92.05558366452344\r
2022-08-05,87.95972898735444\r
2022-08-07,88.6377607535793\r
2022-08-10,86.27276892269684\r
2022-08-12,83.67018493356183\r
2022-08-20,89.88067561860487\r
2022-08-22,85.16429855179445\r
2022-08-25,83.82930157483064\r
2022-08-27,83.82930157483064\r
2022-09-01,77.85898067713397\r
2022-09-04,78.40936593885752\r
2022-09-06,88.71157138450026\r
2022-09-09,80.85310208925027\r
2022-09-11,83.87271567978907\r
2022-09-16,84.88797827989383\r
2022-09-19,79.41488391219418\r
2022-09-21,81.16759348865213\r
2022-09-26,86.08280085858918\r
2022-10-04,79.4432743090856\r
2022-10-06,82.22861026213235\r
2022-10-11,80.63892520216523\r
2022-10-16,80.56757781548347\r
2022-10-19,82.890627863078\r
2022-10-26,80.98170517711891\r
2022-10-31,71.7868932527676\r
2022-11-05,71.7868932527676\r
2023-02-11,75.99242264360477\r
2023-02-13,85.00428472982898\r
2023-02-16,90.68293784347458\r
2023-02-18,85.0915517286039\r
2023-02-21,90.63830122735634\r
2023-02-26,95.07993411199271\r
2023-02-28,76.73430796225705\r
2023-04-19,96.14133188477878\r
2023-04-22,96.14133188477878\r
2023-04-24,96.14133188477878\r
2023-06-06,85.82001412694474\r
2023-06-16,90.50443828371202\r
2023-06-23,100.0\r
2023-06-26,90.43010039105756\r
2023-06-28,97.13066217823572\r
2023-07-06,96.11094810725834\r
2023-07-08,98.03178420142267\r
2023-07-11,92.6396766986915\r
2023-07-13,92.6396766986915\r
2023-07-16,92.01070787293834\r
2023-07-18,90.35578422590862\r
2023-07-21,89.53974190252214\r
2023-07-23,88.15115891999508\r
2023-07-26,89.37684960254782\r
2023-07-28,87.10746213413823\r
2023-07-31,86.75566399986519\r
2023-08-02,85.64498177602437\r
2023-08-05,87.82728729854409\r
2023-08-07,84.88797827989383\r
2023-08-10,86.43362742513105\r
2023-08-12,80.48199060454169\r
2023-08-15,79.0036289336051\r
2023-08-17,76.58012101686339\r
2023-08-22,75.05824224374025\r
2023-08-25,75.42027199092503\r
`;export{n as default};
