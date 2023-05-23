const n=`date,value\r
2017-01-26,51.23946256790796\r
2017-02-15,56.01971650352816\r
2017-02-22,56.01971650352816\r
2017-02-25,71.57461858173873\r
2017-03-17,66.4175003434932\r
2017-03-27,66.4175003434932\r
2017-04-03,9.075753801625035\r
2017-04-06,9.075753801625035\r
2017-05-16,75.87931815771849\r
2017-05-26,84.71151855745798\r
2017-06-02,84.71151855745798\r
2017-06-05,84.71151855745798\r
2017-06-25,88.72962176754781\r
2017-07-02,92.80326997115998\r
2017-07-05,93.83024461051913\r
2017-07-07,93.31633199380973\r
2017-08-04,84.71151855745798\r
2017-08-06,84.71151855745798\r
2017-08-07,84.71151855745798\r
2017-08-11,84.71151855745798\r
2017-08-12,84.71151855745798\r
2017-08-14,89.74286572818019\r
2017-08-17,89.74286572818019\r
2017-08-19,94.86061420960915\r
2017-08-21,94.86061420960915\r
2017-08-22,94.86061420960915\r
2017-08-24,86.21173359186899\r
2017-08-26,91.2692062059696\r
2017-08-29,81.73501259845638\r
2017-09-03,88.72962176754781\r
2017-09-05,73.47847155228719\r
2017-09-08,73.47847155228719\r
2017-10-08,65.03131607488488\r
2017-10-10,65.03131607488488\r
2017-10-11,65.03131607488488\r
2017-10-13,76.8461383226732\r
2017-10-15,76.8461383226732\r
2017-10-16,76.8461383226732\r
2017-10-18,61.37824151121934\r
2017-10-20,73.00109902059137\r
2017-10-23,73.00109902059137\r
2017-10-25,52.5304072911869\r
2017-10-26,52.5304072911869\r
2017-10-28,54.703318416970795\r
2017-10-30,51.23946256790796\r
2017-10-31,51.23946256790796\r
2017-11-02,51.23946256790796\r
2017-11-07,51.23946256790796\r
2017-11-22,44.521009099739395\r
2017-11-24,44.521009099739395\r
2017-11-25,44.521009099739395\r
2017-11-27,48.68682546854715\r
2017-11-30,48.68682546854715\r
2017-12-07,45.34516831176062\r
2018-02-10,49.53333671720674\r
2018-02-12,49.53333671720674\r
2018-02-15,49.53333671720674\r
2018-02-25,51.66870248324214\r
2018-02-27,51.66870248324214\r
2018-03-02,63.65397034256618\r
2018-03-07,63.65397034256618\r
2018-03-09,59.575729660043706\r
2018-03-17,16.362988487875555\r
2018-03-19,16.362988487875555\r
2018-03-22,65.03131607488488\r
2018-04-01,65.03131607488488\r
2018-04-21,84.71151855745798\r
2018-04-23,84.71151855745798\r
2018-04-24,84.71151855745798\r
2018-04-26,84.71151855745798\r
2018-05-06,59.12763636697713\r
2018-05-11,84.71151855745798\r
2018-05-19,84.71151855745798\r
2018-05-21,85.21070900584026\r
2018-05-23,73.47847155228719\r
2018-06-20,87.2162694880814\r
2018-06-22,87.2162694880814\r
2018-06-23,87.2162694880814\r
2018-06-25,95.89436404607905\r
2018-06-28,95.89436404607905\r
2018-07-02,97.97194641167927\r
2018-07-03,97.97194641167927\r
2018-07-07,88.22430054494717\r
2018-07-08,88.22430054494717\r
2018-07-10,90.75956535518368\r
2018-07-12,80.25883572816952\r
2018-07-15,86.21173359186899\r
2018-07-18,86.21173359186899\r
2018-07-22,76.36226761946602\r
2018-07-23,76.36226761946602\r
2018-07-25,80.74999442362744\r
2018-07-27,79.27923007157437\r
2018-07-30,87.71984912279524\r
2018-08-01,87.71984912279524\r
2018-08-02,87.71984912279524\r
2018-08-04,79.27923007157437\r
2018-08-06,89.23581081604166\r
2018-08-11,68.27936742700228\r
2018-08-12,68.27936742700228\r
2018-08-19,78.79078753491008\r
2018-08-21,78.79078753491008\r
2018-08-22,78.79078753491008\r
2018-08-26,78.79078753491008\r
2018-08-27,78.79078753491008\r
2018-09-03,66.4175003434932\r
2018-09-05,66.4175003434932\r
2018-09-08,82.22886774129968\r
2018-09-10,82.22886774129968\r
2018-09-11,82.22886774129968\r
2018-09-16,75.3972922662011\r
2018-09-18,75.3972922662011\r
2018-09-23,67.81244927349275\r
2018-09-25,67.81244927349275\r
2018-09-26,67.81244927349275\r
2018-09-28,79.76858020922302\r
2018-09-30,79.76858020922302\r
2018-10-03,66.88151306811021\r
2018-10-05,80.25883572816952\r
2018-10-06,80.25883572816952\r
2018-11-17,49.10953201783839\r
2018-11-22,57.78948855192697\r
2018-11-24,57.78948855192697\r
2018-11-27,57.78948855192697\r
2018-11-29,44.93251986092079\r
2019-01-11,47.84472199283722\r
2019-01-16,60.47496388164273\r
2019-01-19,60.47496388164273\r
2019-01-23,60.47496388164273\r
2019-01-26,60.47496388164273\r
2019-01-28,57.34549367201582\r
2019-02-15,65.95446145633885\r
2019-02-17,65.95446145633885\r
2019-02-18,65.95446145633885\r
2019-02-20,68.27936742700228\r
2019-02-22,68.27936742700228\r
2019-02-23,68.27936742700228\r
2019-02-25,62.74068742037103\r
2019-02-27,62.74068742037103\r
2019-03-07,68.74724876296105\r
2019-03-12,65.03131607488488\r
2019-03-22,62.74068742037103\r
2019-03-24,62.74068742037103\r
2019-03-25,62.74068742037103\r
2019-03-27,65.03131607488488\r
2019-03-29,65.03131607488488\r
2019-03-30,65.03131607488488\r
2019-04-01,65.03131607488488\r
2019-04-08,58.234512714839724\r
2019-04-09,58.234512714839724\r
2019-05-01,73.9567795463563\r
2019-05-06,73.9567795463563\r
2019-05-11,73.9567795463563\r
2019-05-13,73.9567795463563\r
2019-05-14,73.9567795463563\r
2019-05-16,73.9567795463563\r
2019-05-31,62.74068742037103\r
2019-06-02,62.74068742037103\r
2019-06-08,62.74068742037103\r
2019-06-12,62.74068742037103\r
2019-06-13,62.74068742037103\r
2019-06-30,80.74999442362744\r
2019-07-03,80.74999442362744\r
2019-07-05,98.49343212728672\r
2019-07-08,98.49343212728672\r
2019-07-10,91.77970519200063\r
2019-07-12,91.77970519200063\r
2019-07-13,91.77970519200063\r
2019-07-15,97.97194641167927\r
2019-07-17,95.89436404607905\r
2019-07-22,100.0\r
2019-07-23,100.0\r
2019-07-25,93.83024461051913\r
2019-07-28,99.0157503560208\r
2019-08-02,89.23581081604166\r
2019-08-04,89.23581081604166\r
2019-08-09,84.71151855745798\r
2019-08-14,81.2420541055474\r
2019-08-16,81.2420541055474\r
2019-08-17,81.2420541055474\r
2019-08-21,92.29106041072174\r
2019-08-22,92.29106041072174\r
2019-08-24,81.2420541055474\r
2019-08-26,82.22886774129968\r
2019-08-29,78.30325483398225\r
2019-08-31,86.71356364035759\r
2019-09-03,78.30325483398225\r
2019-09-06,78.30325483398225\r
2019-09-08,78.79078753491008\r
2019-09-11,72.52466438071178\r
2019-09-13,76.8461383226732\r
2019-09-15,79.76858020922302\r
2019-09-16,79.76858020922302\r
2019-09-20,77.33092795468434\r
2019-09-21,77.33092795468434\r
2019-10-08,56.46060444338905\r
2019-10-11,56.46060444338905\r
2019-10-13,71.57461858173873\r
2019-10-15,71.57461858173873\r
2019-10-25,67.81244927349275\r
2019-11-27,41.67264505161795\r
2019-12-05,41.67264505161795\r
2019-12-10,41.67264505161795\r
2020-01-06,48.68682546854715\r
2020-01-09,48.68682546854715\r
2020-01-11,50.384225607182444\r
2020-01-14,50.384225607182444\r
2020-01-16,46.17386179877542\r
2020-01-19,46.17386179877542\r
2020-01-28,44.11064020116806\r
2020-02-05,54.703318416970795\r
2020-02-07,54.703318416970795\r
2020-02-08,54.703318416970795\r
2020-02-15,54.703318416970795\r
2020-02-18,54.703318416970795\r
2020-02-20,54.26661864095889\r
2020-02-22,62.28553876370986\r
2020-04-05,51.66870248324214\r
2020-04-08,51.66870248324214\r
2020-04-10,84.2132120869012\r
2020-04-12,84.2132120869012\r
2020-04-15,73.47847155228719\r
2020-04-25,85.21070900584026\r
2020-04-28,100.0\r
2020-05-05,100.0\r
2020-05-07,100.0\r
2020-05-08,100.0\r
2020-05-20,87.71984912279524\r
2020-05-22,87.71984912279524\r
2020-05-25,92.80326997115998\r
2020-05-27,92.80326997115998\r
2020-05-28,92.80326997115998\r
2020-05-30,82.72361738728507\r
2020-06-12,83.21925940372925\r
2020-06-14,88.72962176754781\r
2020-06-19,74.91619228998387\r
2020-06-21,74.91619228998387\r
2020-06-22,74.91619228998387\r
2020-06-24,79.27923007157437\r
2020-06-26,79.27923007157437\r
2020-07-19,93.31633199380973\r
2020-07-21,93.31633199380973\r
2020-07-22,93.31633199380973\r
2020-07-24,94.34500596437836\r
2020-07-27,94.34500596437836\r
2020-07-29,85.21070900584026\r
2020-07-31,85.21070900584026\r
2020-08-03,85.21070900584026\r
2020-08-05,86.21173359186899\r
2020-08-06,86.21173359186899\r
2020-08-08,83.21925940372925\r
2020-08-10,99.53889934756168\r
2020-08-15,99.53889934756168\r
2020-08-20,99.53889934756168\r
2020-08-21,99.53889934756168\r
2020-08-23,99.53889934756168\r
2020-09-02,84.71151855745798\r
2020-09-04,84.71151855745798\r
2020-09-05,84.71151855745798\r
2020-09-07,84.71151855745798\r
2020-09-10,84.71151855745798\r
2020-09-12,84.71151855745798\r
2020-09-14,84.71151855745798\r
2020-09-17,81.73501259845638\r
2020-09-19,89.74286572818019\r
2020-09-29,85.7107813676863\r
2020-09-30,85.7107813676863\r
2021-02-14,58.68056302352635\r
2021-02-17,58.68056302352635\r
2021-02-19,60.024839843088806\r
2021-02-24,61.37824151121934\r
2021-02-27,69.21609066748414\r
2021-03-01,61.831389156137064\r
2021-03-04,73.00109902059137\r
2021-03-09,62.74068742037103\r
2021-03-21,67.81244927349275\r
2021-03-23,67.81244927349275\r
2021-03-24,67.81244927349275\r
2021-03-26,67.81244927349275\r
2021-03-28,67.81244927349275\r
2021-03-29,67.81244927349275\r
2021-03-31,69.21609066748414\r
2021-04-02,64.57121507349912\r
2021-04-03,64.57121507349912\r
2021-04-05,83.71579167190683\r
2021-04-07,86.21173359186899\r
2021-04-15,88.72962176754781\r
2021-04-17,86.21173359186899\r
2021-04-20,95.89436404607905\r
2021-04-22,95.89436404607905\r
2021-04-23,95.89436404607905\r
2021-06-09,95.89436404607905\r
2021-06-11,94.34500596437836\r
2021-06-14,100.0\r
2021-06-16,100.0\r
2021-06-19,100.0\r
2021-06-21,99.53889934756168\r
2021-08-23,81.73501259845638\r
2021-08-25,81.73501259845638\r
2021-08-26,81.73501259845638\r
2021-08-28,81.73501259845638\r
2021-08-30,81.73501259845638\r
2021-08-31,81.73501259845638\r
2021-09-17,63.19683223578914\r
2021-09-22,77.81663421877684\r
2021-09-24,77.81663421877684\r
2021-09-25,77.81663421877684\r
2021-09-27,77.81663421877684\r
2021-09-30,74.91619228998387\r
2021-10-17,58.234512714839724\r
2021-10-19,58.234512714839724\r
2021-10-20,58.234512714839724\r
2021-10-24,58.234512714839724\r
2021-10-27,60.024839843088806\r
2021-12-16,60.024839843088806\r
2021-12-18,60.024839843088806\r
2021-12-19,60.024839843088806\r
2021-12-21,64.11209889594119\r
2021-12-23,64.11209889594119\r
2022-01-15,64.57121507349912\r
2022-01-22,64.57121507349912\r
2022-01-23,64.57121507349912\r
2022-01-25,67.34649693601834\r
2022-01-27,60.92609876606618\r
2022-02-01,60.92609876606618\r
2022-02-09,68.74724876296105\r
2022-03-01,86.71356364035759\r
2022-03-03,86.71356364035759\r
2022-03-08,86.71356364035759\r
2022-03-09,86.71356364035759\r
2022-03-26,78.30325483398225\r
2022-04-05,89.74286572818019\r
2022-04-10,92.80326997115998\r
2022-04-15,92.80326997115998\r
2022-04-17,85.21070900584026\r
2022-04-30,81.2420541055474\r
2022-05-07,81.2420541055474\r
2022-05-08,81.2420541055474\r
2022-05-10,81.2420541055474\r
2022-06-29,81.73501259845638\r
2022-07-01,87.2162694880814\r
2022-07-02,87.2162694880814\r
2022-07-04,87.2162694880814\r
2022-07-06,87.2162694880814\r
2022-07-07,87.2162694880814\r
2022-07-19,92.29106041072174\r
2022-07-21,92.29106041072174\r
2022-07-22,92.29106041072174\r
2022-07-24,92.29106041072174\r
2022-07-26,92.29106041072174\r
2022-07-27,92.29106041072174\r
2022-08-08,85.21070900584026\r
2022-08-10,85.21070900584026\r
2022-08-11,85.21070900584026\r
2022-08-13,90.75956535518368\r
2022-08-15,90.75956535518368\r
2022-08-18,90.75956535518368\r
2022-08-20,81.73501259845638\r
2022-08-23,81.73501259845638\r
2022-09-12,76.36226761946602\r
2022-09-15,76.36226761946602\r
2022-09-19,76.36226761946602\r
2022-09-20,76.36226761946602\r
2022-09-22,78.30325483398225\r
2022-10-02,74.91619228998387\r
2022-10-07,75.3972922662011\r
2022-10-09,75.3972922662011\r
2022-10-12,75.3972922662011\r
2022-10-15,75.3972922662011\r
2022-10-22,60.92609876606618\r
2022-10-24,60.92609876606618\r
2022-11-01,60.92609876606618\r
2022-11-06,48.2652208534525\r
2022-11-08,48.2652208534525\r
2022-11-11,52.5304072911869\r
2022-11-13,52.5304072911869\r
2022-11-16,49.10953201783839\r
2022-11-24,54.26661864095889\r
2022-12-06,13.697186273914763\r
2022-12-11,13.697186273914763\r
2023-01-10,52.96286512395131\r
2023-01-12,52.96286512395131\r
2023-01-18,52.96286512395131\r
2023-02-09,50.384225607182444\r
2023-02-11,50.384225607182444\r
2023-02-12,50.384225607182444\r
2023-02-14,72.52466438071178\r
2023-02-16,72.52466438071178\r
2023-02-17,72.52466438071178\r
2023-02-19,67.34649693601834\r
2023-02-21,72.52466438071178\r
2023-02-24,72.52466438071178\r
2023-02-26,68.74724876296105\r
2023-03-01,70.15664582375165\r
2023-03-03,65.95446145633885\r
2023-03-04,65.95446145633885\r
2023-03-09,65.95446145633885\r
2023-03-16,79.27923007157437\r
2023-04-05,71.1010123697198\r
2023-04-07,71.1010123697198\r
2023-04-08,71.1010123697198\r
2023-04-15,71.1010123697198\r
`;export{n as default};