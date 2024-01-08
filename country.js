fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {

    //--- 1) Get all countries from Asia continent/region using Filter function

    const asiaCountries = countries.filter(country => country.region?.includes('Asia'));
    console.log('Countries from Asia:', asiaCountries.map(country => country.name.common));


 //--- 2) Get all countries with a population of less than 2 lakhs using Filter function

 const smallPopulationCountries = countries.filter(country => {
    const population = country.population
    return population && population < 200000
  })
  console.log('Countries with a population of less than 2 lakhs:', smallPopulationCountries.map(country => country.name.common))
  

  //--- 3) Print name, capital, flag using forEach function

  countries.forEach(country => {
    const name = country.name.common;
    const capital = country.capital ? country.capital[0] : 'N/A';
    const flag = country.flags ? country.flags.png : 'N/A';
    console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
  })


  //--- 4) Print the total population of countries using reduce function

  const totalPopulation = countries.reduce((acc, country) => {
    const countryPopulation = country.population || 0; 
    return acc + countryPopulation;
  }, 0);
  console.log(`Total Population of Countries: ${totalPopulation}`);


   //--- 5) Print the country that uses US dollars as currency

   const usDollarCountry = countries.find(country => country.currencies && country.currencies.USD);
   if (usDollarCountry) {
     console.log('Country that uses US dollars:', usDollarCountry.name.common);
   } else {
     console.log('No country found that uses US dollars as currency.');
   }
 })


//--- Output ---//

// Countries from Asia: [
//   'Jordan',       'Pakistan',             'North Korea',
//   'Macau',        'Armenia',              'Syria',
//   'Tajikistan',   'Saudi Arabia',         'South Korea',
//   'Nepal',        'Philippines',          'Iraq',
//   'Lebanon',      'Mongolia',             'Palestine',
//   'Yemen',        'Japan',                'Kazakhstan',
//   'Sri Lanka',    'Myanmar',              'Kyrgyzstan',
//   'China',        'Afghanistan',          'Turkey',
//   'Oman',         'India',                'Laos',
//   'Uzbekistan',   'Maldives',             'Indonesia',
//   'Vietnam',      'Malaysia',             'Taiwan',
//   'Cambodia',     'United Arab Emirates', 'Hong Kong',
//   'Georgia',      'Bangladesh',           'Kuwait',
//   'Turkmenistan', 'Qatar',                'Bahrain',
//   'Brunei',       'Thailand',             'Bhutan',
//   'Singapore',    'Israel',               'Azerbaijan',
//   'Timor-Leste',  'Iran'
// ]
// Countries with a population of less than 2 lakhs: [
//   'Christmas Island',
//   'Samoa',
//   'American Samoa',
//   'Turks and Caicos Islands',
//   'Seychelles',
//   'Curaçao',
//   'British Indian Ocean Territory',
//   'United States Minor Outlying Islands',
//   'Åland Islands',
//   'United States Virgin Islands',
//   'San Marino',
//   'Saint Pierre and Miquelon',
//   'Faroe Islands',
//   'Svalbard and Jan Mayen',
//   'Tokelau',
//   'Guernsey',
//   'Caribbean Netherlands',
//   'Greenland',
//   'Sint Maarten',
//   'Palau',
//   'South Georgia',
//   'Kiribati',
//   'Jersey',
//   'Aruba',
//   'Antigua and Barbuda',
//   'Gibraltar',
//   'Pitcairn Islands',
//   'Cook Islands',
//   'Antarctica',
//   'French Southern and Antarctic Lands',
//   'Saint Helena, Ascension and Tristan da Cunha',
//   'Bermuda',
//   'Monaco',
//   'Northern Mariana Islands',
//   'Grenada',
//   'Niue',
//   'Saint Lucia',
//   'Tuvalu',
//   'Norfolk Island',
//   'Saint Kitts and Nevis',
//   'Tonga',
//   'Saint Vincent and the Grenadines',
//   'Isle of Man',
//   'Saint Martin',
//   'Saint Barthélemy',
//   'Micronesia',
//   'Anguilla',
//   'Vatican City',
//   'Montserrat',
//   'British Virgin Islands',
//   'Liechtenstein',
//   'Nauru',
//   'Cayman Islands',
//   'Wallis and Futuna',
//   'Andorra',
//   'Guam',
//   'Marshall Islands',
//   'Falkland Islands',
//   'Cocos (Keeling) Islands',
//   'Dominica'
// ]
// Name: Christmas Island, Capital: Flying Fish Cove, Flag: https://flagcdn.com/w320/cx.png
// Name: Eritrea, Capital: Asmara, Flag: https://flagcdn.com/w320/er.png
// Name: Samoa, Capital: Apia, Flag: https://flagcdn.com/w320/ws.png
// Name: North Macedonia, Capital: Skopje, Flag: https://flagcdn.com/w320/mk.png
// Name: Djibouti, Capital: Djibouti, Flag: https://flagcdn.com/w320/dj.png
// Name: Jordan, Capital: Amman, Flag: https://flagcdn.com/w320/jo.png
// Name: Pakistan, Capital: Islamabad, Flag: https://flagcdn.com/w320/pk.png
// Name: French Polynesia, Capital: Papeetē, Flag: https://flagcdn.com/w320/pf.png
// Name: Ireland, Capital: Dublin, Flag: https://flagcdn.com/w320/ie.png
// Name: Mauritania, Capital: Nouakchott, Flag: https://flagcdn.com/w320/mr.png
// Name: Denmark, Capital: Copenhagen, Flag: https://flagcdn.com/w320/dk.png
// Name: Namibia, Capital: Windhoek, Flag: https://flagcdn.com/w320/na.png
// Name: Ghana, Capital: Accra, Flag: https://flagcdn.com/w320/gh.png
// Name: South Sudan, Capital: Juba, Flag: https://flagcdn.com/w320/ss.png
// Name: Slovakia, Capital: Bratislava, Flag: https://flagcdn.com/w320/sk.png
// Name: American Samoa, Capital: Pago Pago, Flag: https://flagcdn.com/w320/as.png
// Name: Moldova, Capital: Chișinău, Flag: https://flagcdn.com/w320/md.png
// Name: North Korea, Capital: Pyongyang, Flag: https://flagcdn.com/w320/kp.png
// Name: Macau, Capital: N/A, Flag: https://flagcdn.com/w320/mo.png
// Name: Turks and Caicos Islands, Capital: Cockburn Town, Flag: https://flagcdn.com/w320/tc.png
// Name: Seychelles, Capital: Victoria, Flag: https://flagcdn.com/w320/sc.png
// Name: Armenia, Capital: Yerevan, Flag: https://flagcdn.com/w320/am.png
// Name: Curaçao, Capital: Willemstad, Flag: https://flagcdn.com/w320/cw.png
// Name: Guadeloupe, Capital: Basse-Terre, Flag: https://flagcdn.com/w320/gp.png
// Name: British Indian Ocean Territory, Capital: Diego Garcia, Flag: https://flagcdn.com/w320/io.png
// Name: Equatorial Guinea, Capital: Malabo, Flag: https://flagcdn.com/w320/gq.png
// Name: Syria, Capital: Damascus, Flag: https://flagcdn.com/w320/sy.png
// Name: Angola, Capital: Luanda, Flag: https://flagcdn.com/w320/ao.png
// Name: Tajikistan, Capital: Dushanbe, Flag: https://flagcdn.com/w320/tj.png
// Name: Venezuela, Capital: Caracas, Flag: https://flagcdn.com/w320/ve.png
// Name: United States Minor Outlying Islands, Capital: Washington DC, Flag: https://flagcdn.com/w320/um.png
// Name: Åland Islands, Capital: Mariehamn, Flag: https://flagcdn.com/w320/ax.png
// Name: Poland, Capital: Warsaw, Flag: https://flagcdn.com/w320/pl.png
// Name: Saudi Arabia, Capital: Riyadh, Flag: https://flagcdn.com/w320/sa.png
// Name: Republic of the Congo, Capital: Brazzaville, Flag: https://flagcdn.com/w320/cg.png
// Name: Bosnia and Herzegovina, Capital: Sarajevo, Flag: https://flagcdn.com/w320/ba.png
// Name: United States Virgin Islands, Capital: Charlotte Amalie, Flag: https://flagcdn.com/w320/vi.png
// Name: New Caledonia, Capital: Nouméa, Flag: https://flagcdn.com/w320/nc.png
// Name: San Marino, Capital: City of San Marino, Flag: https://flagcdn.com/w320/sm.png
// Name: Czechia, Capital: Prague, Flag: https://flagcdn.com/w320/cz.png
// Name: Guatemala, Capital: Guatemala City, Flag: https://flagcdn.com/w320/gt.png
// Name: South Korea, Capital: Seoul, Flag: https://flagcdn.com/w320/kr.png
// Name: Estonia, Capital: Tallinn, Flag: https://flagcdn.com/w320/ee.png
// Name: Nepal, Capital: Kathmandu, Flag: https://flagcdn.com/w320/np.png
// Name: Kosovo, Capital: Pristina, Flag: https://flagcdn.com/w320/xk.png
// Name: Botswana, Capital: Gaborone, Flag: https://flagcdn.com/w320/bw.png
// Name: Philippines, Capital: Manila, Flag: https://flagcdn.com/w320/ph.png
// Name: Saint Pierre and Miquelon, Capital: Saint-Pierre, Flag: https://flagcdn.com/w320/pm.png
// Name: Iraq, Capital: Baghdad, Flag: https://flagcdn.com/w320/iq.png
// Name: Lebanon, Capital: Beirut, Flag: https://flagcdn.com/w320/lb.png
// Name: Burundi, Capital: Gitega, Flag: https://flagcdn.com/w320/bi.png
// Name: Mongolia, Capital: Ulan Bator, Flag: https://flagcdn.com/w320/mn.png
// Name: Faroe Islands, Capital: Tórshavn, Flag: https://flagcdn.com/w320/fo.png
// Name: Paraguay, Capital: Asunción, Flag: https://flagcdn.com/w320/py.png
// Name: Svalbard and Jan Mayen, Capital: Longyearbyen, Flag: https://flagcdn.com/w320/sj.png
// Name: Tokelau, Capital: Fakaofo, Flag: https://flagcdn.com/w320/tk.png
// Name: Guernsey, Capital: St. Peter Port, Flag: https://flagcdn.com/w320/gg.png
// Name: Caribbean Netherlands, Capital: Kralendijk, Flag: https://flagcdn.com/w320/bq.png
// Name: Algeria, Capital: Algiers, Flag: https://flagcdn.com/w320/dz.png
// Name: France, Capital: Paris, Flag: https://flagcdn.com/w320/fr.png
// Name: Netherlands, Capital: Amsterdam, Flag: https://flagcdn.com/w320/nl.png
// Name: Greenland, Capital: Nuuk, Flag: https://flagcdn.com/w320/gl.png
// Name: Sint Maarten, Capital: Philipsburg, Flag: https://flagcdn.com/w320/sx.png
// Name: Chad, Capital: N'Djamena, Flag: https://flagcdn.com/w320/td.png
// Name: Finland, Capital: Helsinki, Flag: https://flagcdn.com/w320/fi.png
// Name: Panama, Capital: Panama City, Flag: https://flagcdn.com/w320/pa.png
// Name: Palestine, Capital: Ramallah, Flag: https://flagcdn.com/w320/ps.png
// Name: Yemen, Capital: Sana'a, Flag: https://flagcdn.com/w320/ye.png
// Name: Brazil, Capital: Brasília, Flag: https://flagcdn.com/w320/br.png
// Name: Nigeria, Capital: Abuja, Flag: https://flagcdn.com/w320/ng.png
// Name: Palau, Capital: Ngerulmud, Flag: https://flagcdn.com/w320/pw.png
// Name: Japan, Capital: Tokyo, Flag: https://flagcdn.com/w320/jp.png
// Name: Tanzania, Capital: Dodoma, Flag: https://flagcdn.com/w320/tz.png
// Name: Kazakhstan, Capital: Nur-Sultan, Flag: https://flagcdn.com/w320/kz.png
// Name: Portugal, Capital: Lisbon, Flag: https://flagcdn.com/w320/pt.png
// Name: South Georgia, Capital: King Edward Point, Flag: https://flagcdn.com/w320/gs.png
// Name: Sri Lanka, Capital: Sri Jayawardenepura Kotte, Flag: https://flagcdn.com/w320/lk.png
// Name: Germany, Capital: Berlin, Flag: https://flagcdn.com/w320/de.png
// Name: Western Sahara, Capital: El Aaiún, Flag: https://flagcdn.com/w320/eh.png
// Name: Myanmar, Capital: Naypyidaw, Flag: https://flagcdn.com/w320/mm.png
// Name: Colombia, Capital: Bogotá, Flag: https://flagcdn.com/w320/co.png
// Name: Peru, Capital: Lima, Flag: https://flagcdn.com/w320/pe.png
// Name: Senegal, Capital: Dakar, Flag: https://flagcdn.com/w320/sn.png
// Name: Kyrgyzstan, Capital: Bishkek, Flag: https://flagcdn.com/w320/kg.png
// Name: China, Capital: Beijing, Flag: https://flagcdn.com/w320/cn.png
// Name: Afghanistan, Capital: Kabul, Flag: https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
// Name: Turkey, Capital: Ankara, Flag: https://flagcdn.com/w320/tr.png
// Name: Liberia, Capital: Monrovia, Flag: https://flagcdn.com/w320/lr.png
// Name: South Africa, Capital: Pretoria, Flag: https://flagcdn.com/w320/za.png
// Name: Chile, Capital: Santiago, Flag: https://flagcdn.com/w320/cl.png
// Name: Malta, Capital: Valletta, Flag: https://flagcdn.com/w320/mt.png
// Name: Kiribati, Capital: South Tarawa, Flag: https://flagcdn.com/w320/ki.png
// Name: Cape Verde, Capital: Praia, Flag: https://flagcdn.com/w320/cv.png
// Name: Jersey, Capital: Saint Helier, Flag: https://flagcdn.com/w320/je.png
// Name: Iceland, Capital: Reykjavik, Flag: https://flagcdn.com/w320/is.png
// Name: Gambia, Capital: Banjul, Flag: https://flagcdn.com/w320/gm.png
// Name: Vanuatu, Capital: Port Vila, Flag: https://flagcdn.com/w320/vu.png
// Name: Uruguay, Capital: Montevideo, Flag: https://flagcdn.com/w320/uy.png
// Name: Oman, Capital: Muscat, Flag: https://flagcdn.com/w320/om.png
// Name: Sudan, Capital: Khartoum, Flag: https://flagcdn.com/w320/sd.png
// Name: India, Capital: New Delhi, Flag: https://flagcdn.com/w320/in.png
// Name: Laos, Capital: Vientiane, Flag: https://flagcdn.com/w320/la.png
// Name: Aruba, Capital: Oranjestad, Flag: https://flagcdn.com/w320/aw.png
// Name: Martinique, Capital: Fort-de-France, Flag: https://flagcdn.com/w320/mq.png
// Name: Comoros, Capital: Moroni, Flag: https://flagcdn.com/w320/km.png
// Name: Spain, Capital: Madrid, Flag: https://flagcdn.com/w320/es.png
// Name: Antigua and Barbuda, Capital: Saint John's, Flag: https://flagcdn.com/w320/ag.png
// Name: Uzbekistan, Capital: Tashkent, Flag: https://flagcdn.com/w320/uz.png
// Name: Maldives, Capital: Malé, Flag: https://flagcdn.com/w320/mv.png
// Name: Gibraltar, Capital: Gibraltar, Flag: https://flagcdn.com/w320/gi.png
// Name: Indonesia, Capital: Jakarta, Flag: https://flagcdn.com/w320/id.png
// Name: Pitcairn Islands, Capital: Adamstown, Flag: https://flagcdn.com/w320/pn.png
// Name: Vietnam, Capital: Hanoi, Flag: https://flagcdn.com/w320/vn.png
// Name: Malaysia, Capital: Kuala Lumpur, Flag: https://flagcdn.com/w320/my.png
// Name: Cook Islands, Capital: Avarua, Flag: https://flagcdn.com/w320/ck.png
// Name: Eswatini, Capital: Mbabane, Flag: https://flagcdn.com/w320/sz.png
// Name: Uganda, Capital: Kampala, Flag: https://flagcdn.com/w320/ug.png
// Name: Madagascar, Capital: Antananarivo, Flag: https://flagcdn.com/w320/mg.png
// Name: Fiji, Capital: Suva, Flag: https://flagcdn.com/w320/fj.png
// Name: Norway, Capital: Oslo, Flag: https://flagcdn.com/w320/no.png
// Name: Antarctica, Capital: N/A, Flag: https://flagcdn.com/w320/aq.png
// Name: Bouvet Island, Capital: N/A, Flag: https://flagcdn.com/w320/bv.png
// Name: Cyprus, Capital: Nicosia, Flag: https://flagcdn.com/w320/cy.png
// Name: Taiwan, Capital: Taipei, Flag: https://flagcdn.com/w320/tw.png
// Name: Papua New Guinea, Capital: Port Moresby, Flag: https://flagcdn.com/w320/pg.png
// Name: Rwanda, Capital: Kigali, Flag: https://flagcdn.com/w320/rw.png
// Name: DR Congo, Capital: Kinshasa, Flag: https://flagcdn.com/w320/cd.png
// Name: Cameroon, Capital: Yaoundé, Flag: https://flagcdn.com/w320/cm.png
// Name: Serbia, Capital: Belgrade, Flag: https://flagcdn.com/w320/rs.png
// Name: Lithuania, Capital: Vilnius, Flag: https://flagcdn.com/w320/lt.png
// Name: French Southern and Antarctic Lands, Capital: Port-aux-Français, Flag: https://flagcdn.com/w320/tf.png
// Name: Cambodia, Capital: Phnom Penh, Flag: https://flagcdn.com/w320/kh.png
// Name: Saint Helena, Ascension and Tristan da Cunha, Capital: Jamestown, Flag: https://flagcdn.com/w320/sh.png
// Name: United Arab Emirates, Capital: Abu Dhabi, Flag: https://flagcdn.com/w320/ae.png
// Name: Bermuda, Capital: Hamilton, Flag: https://flagcdn.com/w320/bm.png
// Name: Monaco, Capital: Monaco, Flag: https://flagcdn.com/w320/mc.png
// Name: Cuba, Capital: Havana, Flag: https://flagcdn.com/w320/cu.png
// Name: Hong Kong, Capital: City of Victoria, Flag: https://flagcdn.com/w320/hk.png
// Name: Northern Mariana Islands, Capital: Saipan, Flag: https://flagcdn.com/w320/mp.png
// Name: Togo, Capital: Lomé, Flag: https://flagcdn.com/w320/tg.png
// Name: Luxembourg, Capital: Luxembourg, Flag: https://flagcdn.com/w320/lu.png
// Name: Mauritius, Capital: Port Louis, Flag: https://flagcdn.com/w320/mu.png
// Name: Argentina, Capital: Buenos Aires, Flag: https://flagcdn.com/w320/ar.png
// Name: Grenada, Capital: St. George's, Flag: https://flagcdn.com/w320/gd.png
// Name: Nicaragua, Capital: Managua, Flag: https://flagcdn.com/w320/ni.png
// Name: Niue, Capital: Alofi, Flag: https://flagcdn.com/w320/nu.png
// Name: Ukraine, Capital: Kyiv, Flag: https://flagcdn.com/w320/ua.png
// Name: Guyana, Capital: Georgetown, Flag: https://flagcdn.com/w320/gy.png
// Name: Niger, Capital: Niamey, Flag: https://flagcdn.com/w320/ne.png
// Name: Benin, Capital: Porto-Novo, Flag: https://flagcdn.com/w320/bj.png
// Name: Saint Lucia, Capital: Castries, Flag: https://flagcdn.com/w320/lc.png
// Name: Tuvalu, Capital: Funafuti, Flag: https://flagcdn.com/w320/tv.png
// Name: Norfolk Island, Capital: Kingston, Flag: https://flagcdn.com/w320/nf.png
// Name: Egypt, Capital: Cairo, Flag: https://flagcdn.com/w320/eg.png
// Name: Saint Kitts and Nevis, Capital: Basseterre, Flag: https://flagcdn.com/w320/kn.png
// Name: Lesotho, Capital: Maseru, Flag: https://flagcdn.com/w320/ls.png
// Name: Tonga, Capital: Nuku'alofa, Flag: https://flagcdn.com/w320/to.png
// Name: Georgia, Capital: Tbilisi, Flag: https://flagcdn.com/w320/ge.png
// Name: Ethiopia, Capital: Addis Ababa, Flag: https://flagcdn.com/w320/et.png
// Name: Dominican Republic, Capital: Santo Domingo, Flag: https://flagcdn.com/w320/do.png
// Name: Saint Vincent and the Grenadines, Capital: Kingstown, Flag: https://flagcdn.com/w320/vc.png
// Name: Belize, Capital: Belmopan, Flag: https://flagcdn.com/w320/bz.png
// Name: Isle of Man, Capital: Douglas, Flag: https://flagcdn.com/w320/im.png
// Name: Morocco, Capital: Rabat, Flag: https://flagcdn.com/w320/ma.png
// Name: Haiti, Capital: Port-au-Prince, Flag: https://flagcdn.com/w320/ht.png
// Name: Mayotte, Capital: Mamoudzou, Flag: https://flagcdn.com/w320/yt.png
// Name: Burkina Faso, Capital: Ouagadougou, Flag: https://flagcdn.com/w320/bf.png
// Name: Bangladesh, Capital: Dhaka, Flag: https://flagcdn.com/w320/bd.png
// Name: Kuwait, Capital: Kuwait City, Flag: https://flagcdn.com/w320/kw.png
// Name: Réunion, Capital: Saint-Denis, Flag: https://flagcdn.com/w320/re.png
// Name: Jamaica, Capital: Kingston, Flag: https://flagcdn.com/w320/jm.png
// Name: Romania, Capital: Bucharest, Flag: https://flagcdn.com/w320/ro.png
// Name: São Tomé and Príncipe, Capital: São Tomé, Flag: https://flagcdn.com/w320/st.png
// Name: Bahamas, Capital: Nassau, Flag: https://flagcdn.com/w320/bs.png
// Name: Mexico, Capital: Mexico City, Flag: https://flagcdn.com/w320/mx.png
// Name: Saint Martin, Capital: Marigot, Flag: https://flagcdn.com/w320/mf.png
// Name: El Salvador, Capital: San Salvador, Flag: https://flagcdn.com/w320/sv.png
// Name: Saint Barthélemy, Capital: Gustavia, Flag: https://flagcdn.com/w320/bl.png
// Name: Micronesia, Capital: Palikir, Flag: https://flagcdn.com/w320/fm.png
// Name: Turkmenistan, Capital: Ashgabat, Flag: https://flagcdn.com/w320/tm.png
// Name: Anguilla, Capital: The Valley, Flag: https://flagcdn.com/w320/ai.png
// Name: Central African Republic, Capital: Bangui, Flag: https://flagcdn.com/w320/cf.png
// Name: Suriname, Capital: Paramaribo, Flag: https://flagcdn.com/w320/sr.png
// Name: Belgium, Capital: Brussels, Flag: https://flagcdn.com/w320/be.png
// Name: Sweden, Capital: Stockholm, Flag: https://flagcdn.com/w320/se.png
// Name: Bolivia, Capital: Sucre, Flag: https://flagcdn.com/w320/bo.png
// Name: Montenegro, Capital: Podgorica, Flag: https://flagcdn.com/w320/me.png
// Name: Mozambique, Capital: Maputo, Flag: https://flagcdn.com/w320/mz.png
// Name: Latvia, Capital: Riga, Flag: https://flagcdn.com/w320/lv.png
// Name: Malawi, Capital: Lilongwe, Flag: https://flagcdn.com/w320/mw.png
// Name: Mali, Capital: Bamako, Flag: https://flagcdn.com/w320/ml.png
// Name: Vatican City, Capital: Vatican City, Flag: https://flagcdn.com/w320/va.png
// Name: Montserrat, Capital: Plymouth, Flag: https://flagcdn.com/w320/ms.png
// Name: Austria, Capital: Vienna, Flag: https://flagcdn.com/w320/at.png
// Name: Albania, Capital: Tirana, Flag: https://flagcdn.com/w320/al.png
// Name: British Virgin Islands, Capital: Road Town, Flag: https://flagcdn.com/w320/vg.png
// Name: Zambia, Capital: Lusaka, Flag: https://flagcdn.com/w320/zm.png
// Name: French Guiana, Capital: Cayenne, Flag: https://flagcdn.com/w320/gf.png
// Name: Liechtenstein, Capital: Vaduz, Flag: https://flagcdn.com/w320/li.png
// Name: Qatar, Capital: Doha, Flag: https://flagcdn.com/w320/qa.png
// Name: Solomon Islands, Capital: Honiara, Flag: https://flagcdn.com/w320/sb.png
// Name: Nauru, Capital: Yaren, Flag: https://flagcdn.com/w320/nr.png
// Name: Greece, Capital: Athens, Flag: https://flagcdn.com/w320/gr.png
// Name: Libya, Capital: Tripoli, Flag: https://flagcdn.com/w320/ly.png
// Name: Guinea-Bissau, Capital: Bissau, Flag: https://flagcdn.com/w320/gw.png
// Name: Barbados, Capital: Bridgetown, Flag: https://flagcdn.com/w320/bb.png
// Name: Honduras, Capital: Tegucigalpa, Flag: https://flagcdn.com/w320/hn.png
// Name: Somalia, Capital: Mogadishu, Flag: https://flagcdn.com/w320/so.png
// Name: Cayman Islands, Capital: George Town, Flag: https://flagcdn.com/w320/ky.png
// Name: Italy, Capital: Rome, Flag: https://flagcdn.com/w320/it.png
// Name: Wallis and Futuna, Capital: Mata-Utu, Flag: https://flagcdn.com/w320/wf.png
// Name: Andorra, Capital: Andorra la Vella, Flag: https://flagcdn.com/w320/ad.png
// Name: Ecuador, Capital: Quito, Flag: https://flagcdn.com/w320/ec.png
// Name: Kenya, Capital: Nairobi, Flag: https://flagcdn.com/w320/ke.png
// Name: Bahrain, Capital: Manama, Flag: https://flagcdn.com/w320/bh.png
// Name: United Kingdom, Capital: London, Flag: https://flagcdn.com/w320/gb.png
// Name: Guinea, Capital: Conakry, Flag: https://flagcdn.com/w320/gn.png
// Name: Heard Island and McDonald Islands, Capital: N/A, Flag: https://flagcdn.com/w320/hm.png
// Name: Russia, Capital: Moscow, Flag: https://flagcdn.com/w320/ru.png
// Name: Brunei, Capital: Bandar Seri Begawan, Flag: https://flagcdn.com/w320/bn.png
// Name: Zimbabwe, Capital: Harare, Flag: https://flagcdn.com/w320/zw.png
// Name: Guam, Capital: Hagåtña, Flag: https://flagcdn.com/w320/gu.png
// Name: Australia, Capital: Canberra, Flag: https://flagcdn.com/w320/au.png
// Name: Slovenia, Capital: Ljubljana, Flag: https://flagcdn.com/w320/si.png
// Name: Belarus, Capital: Minsk, Flag: https://flagcdn.com/w320/by.png
// Name: Thailand, Capital: Bangkok, Flag: https://flagcdn.com/w320/th.png
// Name: New Zealand, Capital: Wellington, Flag: https://flagcdn.com/w320/nz.png
// Name: Tunisia, Capital: Tunis, Flag: https://flagcdn.com/w320/tn.png
// Name: Marshall Islands, Capital: Majuro, Flag: https://flagcdn.com/w320/mh.png
// Name: Sierra Leone, Capital: Freetown, Flag: https://flagcdn.com/w320/sl.png
// Name: Bhutan, Capital: Thimphu, Flag: https://flagcdn.com/w320/bt.png
// Name: United States, Capital: Washington, D.C., Flag: https://flagcdn.com/w320/us.png
// Name: Switzerland, Capital: Bern, Flag: https://flagcdn.com/w320/ch.png
// Name: Falkland Islands, Capital: Stanley, Flag: https://flagcdn.com/w320/fk.png
// Name: Cocos (Keeling) Islands, Capital: West Island, Flag: https://flagcdn.com/w320/cc.png
// Name: Gabon, Capital: Libreville, Flag: https://flagcdn.com/w320/ga.png
// Name: Dominica, Capital: Roseau, Flag: https://flagcdn.com/w320/dm.png
// Name: Canada, Capital: Ottawa, Flag: https://flagcdn.com/w320/ca.png
// Name: Trinidad and Tobago, Capital: Port of Spain, Flag: https://flagcdn.com/w320/tt.png
// Name: Puerto Rico, Capital: San Juan, Flag: https://flagcdn.com/w320/pr.png
// Name: Singapore, Capital: Singapore, Flag: https://flagcdn.com/w320/sg.png
// Name: Hungary, Capital: Budapest, Flag: https://flagcdn.com/w320/hu.png
// Name: Costa Rica, Capital: San José, Flag: https://flagcdn.com/w320/cr.png
// Name: Israel, Capital: Jerusalem, Flag: https://flagcdn.com/w320/il.png
// Name: Bulgaria, Capital: Sofia, Flag: https://flagcdn.com/w320/bg.png
// Name: Azerbaijan, Capital: Baku, Flag: https://flagcdn.com/w320/az.png
// Name: Timor-Leste, Capital: Dili, Flag: https://flagcdn.com/w320/tl.png
// Name: Iran, Capital: Tehran, Flag: https://flagcdn.com/w320/ir.png
// Name: Croatia, Capital: Zagreb, Flag: https://flagcdn.com/w320/hr.png
// Name: Ivory Coast, Capital: Yamoussoukro, Flag: https://flagcdn.com/w320/ci.png
// Total Population of Countries: 7777721563
// Country that uses US dollars: American Samoa


  