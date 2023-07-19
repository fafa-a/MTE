const n=`date,value\r
2017-02-16,79.88917965177588\r
2017-02-19,79.60404620916627\r
2017-02-26,78.4010094284584\r
2017-03-01,79.95472148508581\r
2017-03-08,80.48729429017867\r
2017-03-11,82.7553095794094\r
2017-03-21,81.56300020742002\r
2017-03-28,92.4079486777691\r
2017-03-31,92.4079486777691\r
2017-04-07,94.04656583944106\r
2017-04-10,94.03448932455365\r
2017-04-17,93.65630049191064\r
2017-04-20,95.41789819402241\r
2017-04-30,96.71741685411288\r
2017-05-07,96.25942195049085\r
2017-05-10,96.34449238802523\r
2017-05-17,96.30398016840401\r
2017-05-27,97.33845206976353\r
2017-05-30,97.6107405050875\r
2017-06-06,97.6107405050875\r
2017-06-09,95.74537377803965\r
2017-06-19,97.82220790462405\r
2017-06-26,97.7327261052194\r
2017-06-29,98.07450076247642\r
2017-07-01,98.97112304053309\r
2017-07-04,98.34325998394108\r
2017-07-06,98.33918641841858\r
2017-07-11,97.87102531813949\r
2017-07-14,98.11928040831728\r
2017-07-26,94.3526414382728\r
2017-07-29,94.3526414382728\r
2017-07-31,94.79207857754088\r
2017-08-03,94.79207857754088\r
2017-08-05,91.95947227844984\r
2017-08-08,93.76086543989545\r
2017-08-13,91.36773217551699\r
2017-08-15,91.34775866995501\r
2017-08-18,89.47544080455184\r
2017-08-20,89.47544080455184\r
2017-08-23,87.39625413057892\r
2017-08-25,87.62136564235128\r
2017-08-30,88.17096541159137\r
2017-09-02,84.69130389028186\r
2017-09-04,82.28482838629193\r
2017-09-14,80.17458344793333\r
2017-09-17,78.53529263397554\r
2017-09-19,78.53529263397554\r
2017-09-22,78.56983245715435\r
2017-10-07,64.16660414888173\r
2017-10-09,64.09387208027442\r
2017-10-12,64.58523792984495\r
2017-10-14,64.67634081314479\r
2017-10-17,65.0739472102393\r
2017-10-19,65.3881108947472\r
2017-10-22,65.8308109026202\r
2017-10-24,65.69901567253696\r
2017-10-27,65.83813491488465\r
2017-10-29,65.1798412454337\r
2017-11-01,64.54152065471908\r
2018-03-13,82.09450563448361\r
2018-03-16,83.44871412286005\r
2018-03-21,85.69515870046158\r
2018-03-23,83.94438375673619\r
2018-04-17,93.86948488471724\r
2018-04-20,94.36069962275106\r
2018-04-22,93.10182083119577\r
2018-04-25,93.66836409767471\r
2018-04-27,93.8292515690496\r
2018-04-30,94.29623926156286\r
2018-06-01,96.95677603521258\r
2018-06-09,98.76307693660462\r
2018-06-14,97.91578029186083\r
2018-06-16,98.06635959159077\r
2018-06-19,98.11113825100821\r
2018-06-21,97.57415271114849\r
2018-06-24,97.77339695607255\r
2018-06-26,97.55382773213755\r
2018-06-29,98.28216120389182\r
2018-07-01,98.78346847546177\r
2018-07-04,98.65705894883489\r
2018-07-06,98.10706723960347\r
2018-07-09,98.02565642788856\r
2018-07-14,97.91984919510568\r
2018-07-19,98.01344635334902\r
2018-07-21,96.78636864841248\r
2018-07-24,95.51893913144137\r
2018-07-26,94.85662870329615\r
2018-07-29,94.85259397878212\r
2018-07-31,94.54608826060318\r
2018-08-03,93.72466637662717\r
2018-08-05,93.57186680003365\r
2018-08-08,93.76891017997615\r
2018-08-10,93.06568948343362\r
2018-08-15,92.16361740013213\r
2018-08-18,90.29878904065019\r
2018-08-20,90.77700747166391\r
2018-08-23,91.1161507385347\r
2018-08-25,88.76111605268527\r
2018-08-28,84.90671089357568\r
2018-08-30,84.11629339581165\r
2018-09-02,83.83893998026737\r
2018-09-04,83.83893998026737\r
2018-09-07,85.3968117629806\r
2018-09-12,80.68048683569896\r
2018-09-14,78.49691978067284\r
2018-09-19,79.2153147264406\r
2018-09-22,72.29826166413554\r
2018-09-24,72.69649447301342\r
2018-09-27,69.9695034357683\r
2018-09-29,69.85787630350312\r
2018-10-02,67.8936324049173\r
2018-10-04,67.52100610258675\r
2018-10-09,66.85459464163259\r
2018-10-12,66.4100732304428\r
2018-10-14,67.83087504119888\r
2018-10-19,68.67013844347727\r
2018-10-22,68.66273210339419\r
2018-10-24,63.87944010874725\r
2018-11-01,65.28212710720905\r
2018-11-03,63.97754632442643\r
2019-02-11,63.63616408077583\r
2019-02-14,58.21609855137802\r
2019-02-16,55.31510550618424\r
2019-02-19,57.44831342273341\r
2019-02-21,55.67907371743953\r
2019-03-01,54.84708220030373\r
2019-03-03,55.920901807670866\r
2019-03-08,57.20474682676758\r
2019-03-11,57.89025566481196\r
2019-03-13,57.518963752415445\r
2019-03-16,58.53887656266373\r
2019-03-18,59.13957556155087\r
2019-03-21,61.285298002421165\r
2019-03-23,61.32482515709698\r
2019-03-26,62.19973719107096\r
2019-03-28,62.83546681872727\r
2019-03-31,65.46488625093895\r
2019-04-02,66.6965340843981\r
2019-04-05,66.20461100512748\r
2019-04-07,68.00811194421469\r
2019-04-10,68.01180568471338\r
2019-04-15,73.9362050601175\r
2019-04-17,73.80405677483809\r
2019-04-20,73.76631164867426\r
2019-04-22,76.51604007044774\r
2019-04-27,83.49161530870857\r
2019-04-30,82.74752724678805\r
2019-05-02,88.86816784654778\r
2019-05-05,89.22922407764669\r
2019-05-07,89.22922407764669\r
2019-05-10,91.24391512738225\r
2019-05-12,92.15560944601697\r
2019-05-15,93.35082677020918\r
2019-05-30,100.0\r
2019-06-01,100.0\r
2019-06-04,98.57145110272911\r
2019-06-06,98.59183213412538\r
2019-06-11,98.57960338108825\r
2019-06-19,100.0\r
2019-06-21,100.0\r
2019-06-24,100.0\r
2019-06-26,97.58228301740269\r
2019-06-29,99.14662470441239\r
2019-07-01,97.96867953401039\r
2019-07-04,97.46441117715558\r
2019-07-06,97.14350394288552\r
2019-07-11,96.94054333292684\r
2019-07-14,99.32220885810324\r
2019-07-16,96.47010900051639\r
2019-07-19,94.19151611515626\r
2019-07-21,93.8292515690496\r
2019-07-24,95.08668326466388\r
2019-07-26,93.64423729854211\r
2019-07-29,93.95398974559112\r
2019-07-31,93.1700790868306\r
2019-08-03,94.0546170780296\r
2019-08-05,93.43922613196347\r
2019-08-08,94.0546170780296\r
2019-08-10,91.73145234386202\r
2019-08-15,90.71719351660224\r
2019-08-18,92.30378648451324\r
2019-08-20,91.16006438765028\r
2019-08-23,90.6932708646757\r
2019-08-25,89.88089847756608\r
2019-08-28,90.45015233252384\r
2019-08-30,88.86816784654778\r
2019-09-02,84.90279310663402\r
2019-09-04,84.83228114737749\r
2019-09-07,85.02034758178692\r
2019-09-12,81.26080106352708\r
2019-09-14,81.17949064641635\r
2019-09-17,83.26547500320774\r
2019-09-19,83.28106565924884\r
2019-09-24,75.0866397643419\r
2019-09-27,81.73360278035585\r
2019-09-29,80.48343169335924\r
2019-10-02,74.39354343000082\r
2019-10-04,74.39354343000082\r
2019-10-07,77.2028523504969\r
2019-10-14,73.5550336919367\r
2019-10-17,78.55064316886775\r
2019-10-19,76.40172986942844\r
2019-10-27,71.14817464528227\r
2019-10-29,71.14817464528227\r
2019-11-06,75.42053851805706\r
2019-11-08,75.42053851805706\r
2019-11-13,75.34082241998394\r
2019-11-16,79.69649227016666\r
2020-02-09,81.29565499774566\r
2020-02-11,79.69263978244531\r
2020-02-14,77.84534383526012\r
2020-02-16,75.96396138329847\r
2020-02-19,75.93733617316272\r
2020-02-21,78.15945344909908\r
2020-02-24,79.23070042430561\r
2020-02-26,77.68841499959758\r
2020-03-07,84.67172863835437\r
2020-03-10,82.87596056860971\r
2020-03-12,76.89358526316224\r
2020-03-15,76.89358526316224\r
2020-03-17,76.89358526316224\r
2020-03-20,80.51433384539986\r
2020-03-22,80.51433384539986\r
2020-04-04,83.56963245523373\r
2020-04-06,82.66582448386137\r
2020-04-09,82.36643107514675\r
2020-04-11,82.90321079568025\r
2020-04-14,81.5242400930605\r
2020-04-24,88.23428719584182\r
2020-04-26,85.18891757917974\r
2020-04-29,92.16762144644285\r
2020-05-04,95.01401847839756\r
2020-05-06,94.60253005353975\r
2020-05-09,95.11898345723097\r
2020-05-11,97.54976287119231\r
2020-05-14,97.77339695607255\r
2020-05-21,96.41742577751886\r
2020-05-24,96.6160408539812\r
2020-05-26,91.92746041816874\r
2020-05-31,91.97547931781659\r
2020-06-03,92.80485143133254\r
2020-06-05,92.42798344290118\r
2020-06-08,99.73495148888115\r
2020-06-10,91.73945049947409\r
2020-06-15,93.8292515690496\r
2020-06-23,100.0\r
2020-06-25,100.0\r
2020-06-28,100.0\r
2020-06-30,100.0\r
2020-07-03,100.0\r
2020-07-05,100.0\r
2020-07-08,100.0\r
2020-07-10,99.66136013720124\r
2020-07-15,98.56737503065182\r
2020-07-20,99.17928527990642\r
2020-07-23,99.97217720741668\r
2020-07-30,95.38557108918997\r
2020-08-02,98.68559928019259\r
2020-08-04,94.3365256172766\r
2020-08-07,95.32092560256187\r
2020-08-09,92.74067495170038\r
2020-08-12,93.81718246705798\r
2020-08-14,93.91777090545665\r
2020-08-17,94.84452466640397\r
2020-08-19,94.32846798077328\r
2020-08-22,94.99383643233692\r
2020-08-24,95.32496560468057\r
2020-08-27,96.20676929533701\r
2020-09-01,96.38095725179407\r
2020-09-03,94.98576393253148\r
2020-09-06,95.05034902857096\r
2020-09-08,93.63619539875071\r
2020-09-13,92.96133094760248\r
2020-09-16,90.15943502969441\r
2020-09-18,89.38408133280565\r
2020-09-21,89.29274663760613\r
2020-09-23,89.21731493346215\r
2020-09-26,87.3015163335082\r
2020-09-28,84.88320489165585\r
2020-10-01,80.02799100030907\r
2020-10-03,78.2667872378614\r
2020-10-08,81.44673453648778\r
2020-10-13,84.11238532212323\r
2020-10-16,86.53278415932404\r
2020-10-18,88.20262479556033\r
2020-10-21,88.72543973290445\r
2020-10-28,87.09634470349364\r
2020-11-02,79.57323718478001\r
2020-11-05,78.95772223925445\r
2020-11-07,78.83861304272743\r
2020-11-10,79.33072678664902\r
2020-11-12,79.33072678664902\r
2020-11-15,82.07120884790811\r
2020-11-17,78.2169488313569\r
2020-11-20,81.43123577331033\r
2020-11-22,81.12142500668908\r
2021-02-08,90.6932708646757\r
2021-02-10,91.12812663134645\r
2021-02-15,90.0798298195711\r
2021-02-18,90.0798298195711\r
2021-02-20,89.01492405439119\r
2021-02-23,92.08754929330534\r
2021-02-25,91.18002699357314\r
2021-02-28,92.81688583290591\r
2021-03-02,91.52756193105972\r
2021-03-05,93.14598642173361\r
2021-03-07,92.66448068856468\r
2021-03-10,92.9131759524627\r
2021-03-12,91.70346025678604\r
2021-03-15,85.40465945924596\r
2021-03-17,85.32619111061716\r
2021-03-20,84.7970309992889\r
2021-03-22,83.32004568837539\r
2021-03-25,83.3512331969685\r
2021-03-27,83.32784227510818\r
2021-03-30,83.67108365071878\r
2021-04-01,83.48771495908582\r
2021-04-04,83.19532663936462\r
2021-04-06,83.74133822591395\r
2021-04-09,83.03170816906608\r
2021-04-16,82.65415440943202\r
2021-05-26,96.22701941170287\r
2021-05-29,96.22701941170287\r
2021-05-31,100.0\r
2021-06-03,98.67744467623737\r
2021-06-05,99.3344619918852\r
2021-06-08,99.2160318396974\r
2021-06-10,99.50604797632104\r
2021-06-13,99.33037756938313\r
2021-06-15,99.15070712021202\r
2021-06-18,99.08947556799556\r
2021-06-25,99.5673477281398\r
2021-06-28,99.81264688695649\r
2021-06-30,99.40798921817391\r
2021-07-03,99.39981881334242\r
2021-07-05,97.23284229144606\r
2021-07-08,98.49808865065663\r
2021-07-10,97.46441117715558\r
2021-07-13,97.07448469554674\r
2021-07-15,97.07448469554674\r
2021-07-18,96.94054333292684\r
2021-07-20,97.71239236404544\r
2021-07-23,96.85533348250334\r
2021-07-25,96.55522880031988\r
2021-07-28,96.55522880031988\r
2021-07-30,96.80665106972873\r
2021-08-02,96.49848005322826\r
2021-08-07,95.95576186720804\r
2021-08-09,96.01242574962701\r
2021-08-12,96.13792736168521\r
2021-08-14,93.47539590688051\r
2021-08-17,92.15560944601697\r
2021-08-19,92.80886285250641\r
2021-08-22,92.7206222183908\r
2021-08-24,92.7206222183908\r
2021-08-27,92.54821623547144\r
2021-08-29,93.81315952462921\r
2021-09-06,90.47804238159033\r
2021-09-08,90.47804238159033\r
2021-09-11,89.48338627696668\r
2021-09-13,83.55402747883393\r
2021-09-18,80.50660801222534\r
2021-09-21,81.0362820195072\r
2021-09-23,75.13594095777934\r
2021-09-28,73.17815207692092\r
2021-10-01,72.51984790906599\r
2021-10-06,70.93144502429257\r
2021-10-11,70.15937806148658\r
2021-10-13,67.39569008502616\r
2021-10-16,68.05244034396878\r
2021-10-18,65.81616352686989\r
2021-10-23,63.614390191147585\r
2021-10-26,64.20297839151631\r
2021-10-28,63.28801936435463\r
2021-11-02,68.97398080743588\r
2021-11-05,72.12562444198257\r
2022-02-08,79.24224021811655\r
2022-02-10,81.32276635549702\r
2022-02-13,82.8370357977357\r
2022-02-15,82.63859499043973\r
2022-02-18,84.44865568856156\r
2022-02-20,84.24137719274503\r
2022-02-23,85.71479646720323\r
2022-02-25,85.83657726992352\r
2022-02-28,88.52334585098006\r
2022-03-02,88.41244437576968\r
2022-03-07,90.3983625823425\r
2022-03-10,90.3983625823425\r
2022-03-22,92.6163665611734\r
2022-03-25,93.44726353864509\r
2022-04-01,97.07854429085495\r
2022-04-04,97.02171405709447\r
2022-04-09,98.26179718357423\r
2022-04-11,98.26179718357423\r
2022-04-14,97.65952989281895\r
2022-04-16,98.51031471924635\r
2022-04-19,98.51031471924635\r
2022-04-24,97.72865926715139\r
2022-04-26,97.83441165197166\r
2022-04-29,96.583606494089\r
2022-05-01,96.583606494089\r
2022-05-04,97.00547846982644\r
2022-05-09,98.27401546136805\r
2022-05-11,98.34733359424742\r
2022-05-14,97.95240203647565\r
2022-05-16,99.15478958062396\r
2022-05-19,99.64909631369196\r
2022-05-21,99.07314884971117\r
2022-05-24,99.61639474272687\r
2022-05-26,99.84536554223003\r
2022-05-29,99.26503287206087\r
2022-05-31,98.7671551549907\r
2022-06-10,98.94664099829936\r
2022-06-13,98.94664099829936\r
2022-06-18,99.395733677766\r
2022-06-20,97.647331939263\r
2022-06-25,96.22296929793963\r
2022-07-03,98.31881926259372\r
2022-07-05,96.59576904033702\r
2022-07-08,96.12173116052928\r
2022-07-10,96.36069854200976\r
2022-07-13,96.01647350950893\r
2022-07-15,95.34516629691035\r
2022-07-18,94.70334120085121\r
2022-07-20,93.50754993664418\r
2022-07-23,93.57588699368429\r
2022-07-25,92.68854023912549\r
2022-07-28,93.28253338518255\r
2022-07-30,90.13555150712509\r
2022-08-02,87.25021141535588\r
2022-08-04,86.83217796880449\r
2022-08-07,86.8164135592478\r
2022-08-09,86.3359643166336\r
2022-08-12,84.99291434328768\r
2022-08-14,83.88579953827434\r
2022-08-19,82.61525731976272\r
2022-08-22,81.23369519074181\r
2022-08-24,81.7103332227737\r
2022-08-27,80.7114090477047\r
2022-08-29,80.12828340421927\r
2022-09-01,80.03184778395492\r
2022-09-28,64.80394208505041\r
2022-10-01,64.74195598757126\r
2022-10-03,64.74195598757126\r
2022-10-06,63.99208397647141\r
2022-10-18,58.18774512498924\r
2022-10-26,58.18774512498924\r
2022-10-28,60.25997253689841\r
2022-10-31,58.04957469026214\r
2022-11-02,58.04957469026214\r
2022-11-05,60.220628762470994\r
2022-11-10,58.31536440422129\r
2023-02-08,77.19903223026094\r
2023-02-10,75.75483006411375\r
2023-02-13,75.52306351052471\r
2023-02-15,73.9135466127259\r
2023-02-18,74.06841606216416\r
2023-02-20,73.19321747223985\r
2023-03-05,78.17861732970317\r
2023-03-07,77.3595204625679\r
2023-03-10,77.5430438428557\r
2023-03-12,77.06917800128723\r
2023-03-15,77.14173644782872\r
2023-03-17,77.2869076864566\r
2023-03-20,77.81088884295583\r
2023-03-22,79.81208988012263\r
2023-03-25,80.95503131016066\r
2023-03-27,79.95857733126327\r
2023-03-30,81.10207224412892\r
2023-04-01,81.10207224412892\r
2023-04-04,80.41005170290701\r
2023-04-06,82.99665819288458\r
2023-04-09,82.64248477230099\r
2023-04-14,83.16805095826453\r
2023-04-16,84.7970309992889\r
2023-04-19,84.56604303539791\r
2023-04-24,83.1251939701326\r
2023-04-26,83.12129817103708\r
2023-05-04,83.28496344430366\r
2023-05-06,84.038141079653\r
2023-05-11,85.48314694712677\r
2023-05-16,87.77152532873662\r
2023-05-24,87.63716871129084\r
2023-05-26,91.45163355287116\r
2023-06-03,92.95330465521437\r
2023-06-23,99.99263470206418\r
2023-06-25,98.7875469173069\r
2023-06-28,99.894448860976\r
2023-07-03,100.0\r
2023-07-05,98.15185083075403\r
2023-07-08,96.56333648698353\r
2023-07-10,97.48066711385918\r
`;export{n as default};
