window.STUDY_DATA.courses.push({
  code: "BIOL 325",
  title: "Principles of Ecology II",
  short: "Ecology II",
  kind: "theory",
  subject: "Ecology",
  partner: "BIOL 327",
  color: "#00838f",
  status: "partial",
  credits: 3,
  assessment: { ca: 40, exam: 60 },
  source: "Unit 1 Physical Environment (58 slides) + course outline",
  note: "Unit 1 is built from the lecturer's slides. Units 2–7 are provisional and must be checked against the lecturer's notes and past questions.",
  bridge: {
    in: "Saturday's BIOL 327 practical supplies the field data you interpret tonight.",
    out: "Next Saturday's practical applies tonight's theory to sampling and measurement.",
    linkQuestion: "Your quadrat data show higher species richness in a sacred grove than in a nearby farm. Explain two ecological reasons and one sampling limitation."
  },
  sections: [
    {
      title: "Climate vs weather and the vegetation gradient",
      source: "Slides 7–8",
      unit: "Unit 1 · Physical environment",
      priority: "core",
      mustKnow: [
        "Weather = short-term atmospheric conditions at a place and time (temperature, humidity, rainfall, wind, cloudiness).",
        "Climate = long-term average pattern of weather; can be local, regional or global.",
        "The dominant plants and terrestrial ecosystems of a region reflect its prevailing climate.",
        "Temperature and rainfall gradients produce vegetation gradients: rainforest → savanna → desert.",
        "Climate is described with long-term means and variability, not with a single day's weather."
      ],
      terms: ["weather", "climate", "mean annual rainfall", "mean annual temperature", "biome", "vegetation gradient"],
      diagrams: ["Sketch a rainfall/temperature gradient from rainforest to desert and label the vegetation."],
      questions: [
        ["A colleague says: 'It rained heavily today, so the climate here is wet.' Explain why this confuses weather with climate, and describe the data you would use to characterise Sunyani's climate.", "Weather is a short-term state; climate is the long-term average pattern. One rainy day says nothing about the mean annual rainfall, seasonality or variability. Use 30-year records of monthly rainfall, temperature, humidity and wind, then describe means, ranges and seasons.", "Explain"],
        ["Why do tropical rainforest, savanna and desert occur in different regions even though all receive sunlight?", "The key difference is water availability and its seasonality, driven by atmospheric circulation, latitude, continentality and topography. Vegetation is selected by rainfall amount, dry-season length, temperature and soil. Sunlight is necessary but not sufficient.", "Apply"],
        ["Predict how vegetation changes from the base to the summit of a mountain in West Africa. Justify using two climatic variables.", "Temperature falls with altitude and rainfall often peaks at mid-altitude due to orographic lift. Expect lowland forest → montane forest → grassland/shrub → afro-alpine vegetation, with cloud cover and exposure changing the boundaries.", "Evaluate"]
      ],
      trap: "Treating a weather event as climate; ignoring altitude, topography and seasonality.",
      bridgeIn: "Recall the field measurements you made in the last BIOL 327 practical.",
      bridgeOut: "Next practical: relate the measured microclimate to the vegetation you observed.",
      linkQuestion: "If a farm and a nearby forest have different microclimates, which measurements would you take to show it?"
    },
    {
      title: "Solar radiation and Earth's energy budget",
      source: "Slides 9–14",
      unit: "Unit 1 · Physical environment",
      priority: "core",
      mustKnow: [
        "All objects emit radiant energy; the hotter the object, the shorter the wavelength.",
        "The Sun (~5800 °C) emits mainly shortwave radiation; Earth (~15 °C) emits longwave radiation.",
        "Only about 51% of solar radiation reaching the top of the atmosphere reaches the surface.",
        "100-unit budget: 30 reflected (26 by atmosphere/clouds + 4 by surface), 19 absorbed by atmosphere/clouds, 51 reaches surface.",
        "Of the 51 surface units: 23 evaporate water, 7 warm air, 21 are absorbed by land and oceans.",
        "Earth emits about 117 longwave units; 6 escape to space, 111 are absorbed by clouds, water vapour and CO2; 96 are re-emitted to Earth = greenhouse effect.",
        "Budget balance: 30 + 117 = 147 lost; 51 + 96 = 147 gained.",
        "PAR (photosynthetically active radiation) = 400–700 nm."
      ],
      terms: ["shortwave", "longwave", "albedo", "greenhouse effect", "PAR", "energy budget", "latent heat"],
      diagrams: ["Draw and label the 100-unit radiation budget.", "Draw the greenhouse effect showing shortwave in and longwave trapped."],
      questions: [
        ["Explain why Earth's surface emits longwave radiation while the Sun emits shortwave radiation.", "The wavelength of emitted radiation depends on temperature: hotter bodies emit shorter wavelengths. The Sun's surface is about 5800 °C, so it peaks in the shortwave range; Earth's surface is about 15 °C, so it emits longwave infrared.", "Explain"],
        ["Using the 100-unit radiation budget, explain why Earth does not keep heating up.", "Incoming solar energy is balanced by reflected shortwave and outgoing longwave radiation. The surface loses 30 reflected + 117 longwave = 147 units and gains 51 solar + 96 back-radiation = 147 units. The budget is in balance.", "Apply"],
        ["A volcanic eruption injects reflective aerosols into the stratosphere. Predict the effect on surface temperature and explain using the budget.", "More shortwave is reflected back to space, so less than 51 units reach the surface. The surface cools until the longwave loss falls to match the reduced input. The effect is temporary as aerosols settle.", "Evaluate"]
      ],
      trap: "Saying the greenhouse effect is caused by ozone or CFCs; confusing reflection with absorption; forgetting that the budget must balance.",
      bridgeIn: "Recall the difference between weather and climate from the previous session.",
      bridgeOut: "Next practical: light and temperature measurements are the raw inputs to this energy budget.",
      linkQuestion: "Why can two farms at the same latitude have different surface temperatures?"
    },
    {
      title: "Seasons, latitude and solar angle",
      source: "Slides 15–20",
      unit: "Unit 1 · Physical environment",
      priority: "core",
      mustKnow: [
        "Earth's axis is tilted about 23.5° from the perpendicular to the ecliptic.",
        "The tilt plus revolution around the Sun causes seasons and changes in day length.",
        "Equinoxes (~21 March, ~22 September): every place receives about 12 h day and 12 h night.",
        "June solstice: Sun overhead at the Tropic of Cancer; Northern Hemisphere has its longest day. December solstice: Sun overhead at the Tropic of Capricorn.",
        "Higher latitudes receive solar radiation at a steeper angle; it passes through more atmosphere and is more scattered/reflected, so less energy reaches a unit area.",
        "Seasons are not caused by Earth's changing distance from the Sun."
      ],
      terms: ["ecliptic", "solstice", "equinox", "solar angle", "Tropic of Cancer", "Tropic of Capricorn", "day length"],
      diagrams: ["Draw Earth at the four key orbital positions showing the tilt and the circle of illumination."],
      questions: [
        ["Explain why the tropics are warmer than the poles.", "Near the equator solar rays strike more directly, so the same beam heats a smaller area and passes through less atmosphere. At the poles the rays are oblique, spread over a larger area and lose more energy by scattering and reflection.", "Explain"],
        ["Why do day and night lengths change through the year?", "The 23.5° tilt means the circle of illumination does not pass through the poles except at the equinoxes. As Earth orbits, one hemisphere is tilted toward the Sun and receives longer days; the other is tilted away.", "Apply"],
        ["At the June solstice, what seasonal event is Ghana experiencing and why?", "Ghana is near the equator, so it does not have temperate summer/winter. The Sun is overhead at the Tropic of Cancer and the ITCZ and rain belt shift north, bringing the wet season to much of Ghana. Day length changes only slightly.", "Evaluate"]
      ],
      trap: "Thinking seasons are caused by distance from the Sun; confusing solstice with equinox.",
      bridgeIn: "Link the solar angle to the radiation budget from the last session.",
      bridgeOut: "Next practical: note how slope aspect changes the solar angle a plant experiences.",
      linkQuestion: "How would you measure the effect of slope aspect on soil temperature in the field?"
    },
    {
      title: "Temperature patterns and atmospheric circulation",
      source: "Slides 21–28",
      unit: "Unit 1 · Physical environment",
      priority: "core",
      mustKnow: [
        "Air temperature generally decreases with altitude; pressure and density are highest near the surface.",
        "Warm air is less dense and rises; cool air is denser and sinks.",
        "Equatorial heating causes rising air and low surface pressure; the ITCZ marks the rising branch.",
        "Air cools as it rises, spreads poleward, and sinks around 30° latitude, creating semi-permanent high-pressure belts.",
        "The Coriolis effect deflects moving air: to the right in the Northern Hemisphere, left in the Southern Hemisphere.",
        "This produces the trade winds (NE in the north, SE in the south) and the Hadley, Ferrel and Polar circulation cells.",
        "Latent heat is absorbed during evaporation and released during condensation."
      ],
      terms: ["troposphere", "Hadley cell", "Coriolis effect", "trade winds", "ITCZ", "high pressure", "low pressure", "latent heat"],
      diagrams: ["Draw the global circulation cells and label the ITCZ, subtropical highs and trade winds."],
      questions: [
        ["Why do tropical rainforests occur near the equator and deserts near 30° latitude?", "At the equator air rises, cools and condenses, producing heavy rain. At about 30° the air descends, warms and dries, suppressing rainfall. This Hadley cell pattern explains both the wet tropics and the subtropical dry belts.", "Explain"],
        ["Explain the Coriolis effect and why it does not itself create winds.", "The Coriolis effect is the deflection of moving air caused by Earth's rotation. It only changes direction; winds are driven by pressure gradients. Without a pressure difference there is no wind to deflect.", "Apply"],
        ["A coastal city and an inland city at the same latitude have different temperatures. Explain two reasons.", "The sea has a high specific heat and moderates coastal temperature; inland areas heat and cool faster. Cloud cover, humidity, altitude and prevailing winds can also differ. Advection and sea breezes add to the contrast.", "Evaluate"]
      ],
      trap: "Saying the Coriolis effect creates wind; confusing high pressure with high temperature.",
      bridgeIn: "Recall the solar angle and day-length effects from the previous session.",
      bridgeOut: "Next practical: measure temperature and humidity along a transect and relate them to air movement.",
      linkQuestion: "Why would you expect different litter decomposition rates on a ridge and in a valley?"
    },
    {
      title: "Moisture, humidity and global precipitation",
      source: "Slides 29–33",
      unit: "Unit 1 · Physical environment",
      priority: "core",
      mustKnow: [
        "Latent heat is the energy absorbed or released when water changes state.",
        "Evaporation absorbs energy; condensation releases it.",
        "Air is saturated when the rate of evaporation equals the rate of condensation.",
        "Warm air can hold more water vapour than cool air.",
        "Saturation deficit = maximum capacity − actual water vapour content; high deficit drives evaporation and transpiration.",
        "Absolute humidity = mass of water vapour per volume of air; relative humidity = actual vapour as a percentage of saturation capacity.",
        "Precipitation is highest near the equator and declines toward the poles, modified by topography and distance from the sea."
      ],
      terms: ["latent heat", "saturation", "saturation deficit", "absolute humidity", "relative humidity", "dew point", "orographic rainfall", "rain shadow"],
      diagrams: ["Draw the Hadley cell rainfall pattern (wet equator, dry 30°).", "Draw orographic rainfall and a rain shadow."],
      questions: [
        ["Explain why relative humidity often rises at night even when absolute humidity is unchanged.", "At night the air cools, so its saturation capacity falls. The same amount of water vapour is now a larger fraction of the smaller capacity, so relative humidity rises and may reach dew point.", "Explain"],
        ["Why does the windward side of a mountain receive more rain than the leeward side?", "Air is forced to rise over the windward slope, cools, condenses and rains. On the leeward side the air descends, warms and its relative humidity falls, creating a rain shadow.", "Apply"],
        ["A plant in a hot, dry environment has a high saturation deficit. Predict its transpiration rate and one adaptation.", "Transpiration will be high if stomata are open. Adaptations include stomatal closure, thick cuticle, sunken stomata, reduced leaves, or CAM photosynthesis to reduce water loss.", "Evaluate"]
      ],
      trap: "Confusing absolute and relative humidity; assuming warm air always has high relative humidity.",
      bridgeIn: "Recall why rising air cools from the circulation session.",
      bridgeOut: "Next practical: measure humidity and relate it to decomposition and plant water loss.",
      linkQuestion: "How would you design a simple field measurement of transpiration rate?"
    },
    {
      title: "Topography and soil formation",
      source: "Slides 34–44",
      unit: "Unit 1 · Physical environment",
      priority: "core",
      mustKnow: [
        "Topography is the shape of the landscape; it includes landforms, texture and elevation.",
        "Topographic features include relief, hydrography, vegetation, transport, culture, boundaries and toponymy.",
        "Soil is a natural product of rock weathering and the action of living organisms; it is a mixture of mineral and organic matter that supports plant growth.",
        "Soil functions: plant growth medium, control of water fate, recycling system, habitat for soil organisms.",
        "Mechanical weathering: water, wind, temperature, freeze–thaw, root wedging.",
        "Chemical weathering: water, oxygen, acids from organisms and organic matter.",
        "Five factors of soil formation: parent material, climate, biota, topography, time (CLORPT)."
      ],
      terms: ["topography", "landform", "relief", "weathering", "parent material", "soil", "CLORPT", "humus"],
      diagrams: ["Draw a slope catena showing thin ridge-top soil and deep valley soil."],
      questions: [
        ["Explain how topography influences soil depth on a slope.", "Steep slopes lose soil by erosion, so soils are thin; valleys receive eroded material and have deep soils. Aspect also affects temperature and moisture, which change weathering and organic matter accumulation.", "Explain"],
        ["Compare mechanical and chemical weathering with examples.", "Mechanical weathering breaks rock physically: freeze–thaw, root wedging, wind abrasion, water. Chemical weathering changes mineral composition: hydrolysis, oxidation, acid dissolution. Both operate together.", "Apply"],
        ["Why is soil described as a product of both weathering and living organisms?", "Weathering supplies the mineral matrix, but organisms add organic matter, cycle nutrients, mix the soil and create acids that weather minerals. Without biota, the result is regolith, not fertile soil.", "Evaluate"]
      ],
      trap: "Treating soil as just broken rock; forgetting the role of biota and time.",
      bridgeIn: "Recall how temperature and moisture drive weathering.",
      bridgeOut: "Next practical: describe the soil profile at your field site and measure depth.",
      linkQuestion: "Why would a farmer on a slope and a farmer in a valley manage soil fertility differently?"
    },
    {
      title: "Soil physical properties and texture",
      source: "Slides 45–52",
      unit: "Unit 1 · Physical environment",
      priority: "core",
      mustKnow: [
        "Physical properties include colour, texture, structure, moisture and depth.",
        "Colour clues: humus → dark/black; iron oxides → yellow-brown/red; manganese oxides → purple-black.",
        "Texture = proportion of different-sized mineral particles.",
        "Gravel > 2.0 mm; sand 0.05–2.0 mm; silt 0.002–0.05 mm; clay < 0.002 mm.",
        "Texture classes are read from the soil texture triangle; loam is a balanced mixture.",
        "Texture affects pore space, water-holding capacity, permeability, workability and root penetration.",
        "Clay has high water-holding capacity and ion exchange; sand drains quickly; silt is intermediate."
      ],
      terms: ["soil texture", "soil structure", "loam", "clay", "silt", "sand", "gravel", "pore space", "permeability"],
      diagrams: ["Draw and use the soil texture triangle; mark a loam and a silty clay."],
      questions: [
        ["A soil has 60% silt, 35% clay and 5% sand. Classify it and explain its likely water behaviour.", "It plots in the silty clay class. It will hold water strongly and drain slowly, with a risk of waterlogging and difficult workability when wet.", "Apply"],
        ["Why is loam considered ideal for most crops?", "Loam has a balance of sand, silt and clay, giving good structure, adequate pore space, good water retention and drainage, and easy root penetration and workability.", "Explain"],
        ["How does soil texture affect drought risk and root growth?", "Sandy soils drain quickly and drought easily; clay soils hold water but can waterlog and restrict aeration; silty soils are intermediate. Roots need both water and air, so extreme textures are harder for roots.", "Evaluate"]
      ],
      trap: "Confusing texture with structure; reading the texture triangle from the wrong axis.",
      bridgeIn: "Recall the weathering and soil formation factors.",
      bridgeOut: "Next practical: hand-texture a soil sample and compare with the triangle.",
      linkQuestion: "How would soil texture affect the results of an infiltration experiment?"
    },
    {
      title: "Soil profile, water holding and ion exchange",
      source: "Slides 53–58",
      unit: "Unit 1 · Physical environment",
      priority: "core",
      mustKnow: [
        "Soil profile = vertical sequence of horizons formed by organic accumulation and downward movement of materials.",
        "Simplest horizons: O (organic), A (topsoil), B (subsoil accumulation), C (weathered parent material); R = bedrock.",
        "Infiltration is the movement of water into soil; pore size and particle size control it.",
        "Saturation = water exceeds pore space; field capacity (FC) = water held by capillary forces after drainage; wilting point (WP) = water no longer available to plants.",
        "Available water capacity = FC − WP.",
        "Ion exchange: cations (Ca2+, Mg2+, NH4+) and anions (NO3−, SO4−) are held on charged soil surfaces.",
        "Cation exchange capacity (CEC) = total negatively charged sites on clay and organic matter; it prevents leaching of cations and is a measure of soil quality.",
        "Soil depth: grasslands deep (fibrous roots); forests shallower (leaf litter); valleys deep; ridges thin."
      ],
      terms: ["soil profile", "horizon", "infiltration", "field capacity", "wilting point", "available water capacity", "CEC", "leaching", "cation", "anion"],
      diagrams: ["Draw and label the O/A/B/C/R profile.", "Draw the water-holding states: saturation → field capacity → wilting point."],
      questions: [
        ["Explain why clay soils generally have a higher CEC than sandy soils.", "Clay particles are tiny with a very large surface area and many negatively charged sites; organic matter also contributes. Sandy soils have larger particles, less surface area and fewer charged sites, so they retain fewer cations.", "Explain"],
        ["A soil has FC = 35% and WP = 15%. Calculate the available water capacity and explain its meaning.", "AWC = 35 − 15 = 20%. This is the water held between field capacity and wilting point that plants can extract; it is the useful water reservoir for the crop.", "Apply"],
        ["Why is the O horizon important for nutrient cycling and water retention?", "The O horizon is the organic layer where litter decomposes. It produces humus, increases CEC and water retention, supports soil organisms and releases nutrients for recycling.", "Evaluate"]
      ],
      trap: "Confusing field capacity with saturation; thinking CEC holds anions; forgetting that water below wilting point is unavailable.",
      bridgeIn: "Recall soil texture and pore space from the previous session.",
      bridgeOut: "Next practical: measure infiltration and compare it with soil texture.",
      linkQuestion: "Why would a clay soil and a sandy soil need different irrigation strategies?"
    },
    {
      title: "Major biomes of the world",
      source: "Provisional · course outline Unit 2",
      unit: "Unit 2 · Major biomes",
      priority: "core",
      provisional: true,
      mustKnow: [
        "A biome is a large-scale community shaped by climate, especially temperature and precipitation.",
        "Major biomes: tropical rainforest, savanna, desert, Mediterranean shrubland, temperate grassland, temperate forest, taiga (boreal forest) and tundra.",
        "Each biome has characteristic climate, soil, vegetation structure and animal adaptations.",
        "Ghana includes tropical rainforest, deciduous forest, transitional and savanna zones.",
        "Biome boundaries are not sharp; they are gradients controlled by climate and disturbance."
      ],
      terms: ["biome", "tropical rainforest", "savanna", "desert", "taiga", "tundra", "Mediterranean", "temperate grassland"],
      diagrams: ["Draw a world biome map and match each biome to its climate."],
      questions: [
        ["Explain how temperature and precipitation together determine the major biomes.", "Temperature controls growing season and evapotranspiration; precipitation controls water availability. Their combination produces the characteristic vegetation and soil of each biome. A change in either can shift the biome boundary.", "Explain"],
        ["Compare tropical rainforest and savanna in terms of rainfall, vegetation structure and fire.", "Rainforest has high year-round rainfall, a closed canopy and low fire frequency. Savanna has a pronounced dry season, a grass layer with scattered trees, and fire is a major driver. Both are tropical but differ in water seasonality.", "Apply"],
        ["A region's rainfall is unchanged but temperature rises. Predict two possible biome changes.", "Higher temperature increases evapotranspiration and can reduce effective moisture, shifting forest toward savanna or grassland. It can also change species composition, fire regime and pest outbreaks. The outcome depends on soil and disturbance.", "Evaluate"]
      ],
      trap: "Defining biomes only by temperature; ignoring fire, soil and seasonality.",
      bridgeIn: "Recall the climate–vegetation gradient from Section 1.",
      bridgeOut: "Next practical: identify the biome/ecozone of your field site from its vegetation.",
      linkQuestion: "Which measurements would distinguish a savanna from a dry forest at your field site?"
    },
    {
      title: "West African vegetation profile",
      source: "Provisional · course outline Unit 3",
      unit: "Unit 3 · West African vegetation",
      priority: "core",
      provisional: true,
      mustKnow: [
        "West African vegetation follows a rainfall gradient from the coast inland: rainforest → deciduous forest → transition → Guinea savanna → Sudan savanna → Sahel.",
        "Coastal and mangrove vegetation is controlled by salinity, tidal flooding and sediment.",
        "Montane vegetation occurs on highlands such as the Atewa range and Mount Afadjato.",
        "Human impacts: farming, logging, fuelwood, fire, mining and climate change.",
        "Ghana's forest-savanna transition is a dynamic boundary influenced by fire and land use."
      ],
      terms: ["rainforest", "deciduous forest", "transition zone", "Guinea savanna", "Sudan savanna", "Sahel", "mangrove", "montane forest"],
      diagrams: ["Draw a north–south vegetation transect across Ghana with rainfall values."],
      questions: [
        ["Explain why West African vegetation changes from south to north.", "Rainfall decreases and the dry season lengthens northward. This changes water availability, fire frequency and soil, producing a gradient from rainforest through deciduous forest and savanna to Sahel.", "Explain"],
        ["Why are mangroves important ecologically and economically?", "They stabilize sediment, buffer coastal storms, provide nursery habitat for fish and store carbon. They also support local livelihoods. They are adapted to saline, waterlogged conditions.", "Apply"],
        ["A sacred grove remains forested while surrounding farmland is savanna. Explain the ecological and social mechanisms.", "Protection from fire, grazing and clearing allows forest regeneration; the grove may retain soil moisture and seed sources. Social rules and taboos reduce disturbance. The contrast is a natural experiment in land-use effects.", "Evaluate"]
      ],
      trap: "Assuming the vegetation map is fixed; ignoring human disturbance and fire.",
      bridgeIn: "Recall the biome–climate relationship.",
      bridgeOut: "Next practical: classify the vegetation around your field site.",
      linkQuestion: "How would you test whether a forest patch is expanding or retreating?"
    },
    {
      title: "Trophic interactions, nutrient cycling and decomposition",
      source: "Provisional · course outline Unit 4",
      unit: "Unit 4 · Trophic interactions",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Food chains and webs describe feeding relationships; trophic levels include producers, primary consumers, secondary consumers and decomposers.",
        "Energy flow is inefficient: roughly 10% passes to the next trophic level; most is lost as heat and used in metabolism.",
        "Primary productivity is the rate at which producers capture energy; secondary productivity is consumer production.",
        "Decomposition breaks down dead organic matter into simpler compounds and releases nutrients.",
        "Decomposition rate depends on litter quality (C:N ratio, lignin), temperature, moisture and decomposer community.",
        "Lianas and tree litter can decompose at different rates, affecting nutrient cycling in tropical forests."
      ],
      terms: ["food chain", "food web", "trophic level", "primary productivity", "secondary productivity", "decomposition", "detritivore", "C:N ratio", "litter quality"],
      diagrams: ["Draw a food web with at least four trophic levels.", "Draw the decomposition pathway from litter to humus and nutrients."],
      questions: [
        ["Why is energy transfer between trophic levels only about 10% efficient?", "Consumers use most ingested energy for respiration, movement and maintenance; much is lost as heat, and some is not assimilated. Only the energy stored in biomass is available to the next level, so biomass pyramids usually narrow.", "Explain"],
        ["Explain how litter quality affects decomposition rate.", "Litter with low C:N, low lignin and high nutrient content decomposes faster because microbes have the nutrients they need. High-lignin, high-C:N litter decomposes slowly and immobilizes nutrients.", "Apply"],
        ["A tropical forest is converted to farmland. Predict the effects on decomposition and nutrient cycling.", "Litter inputs and shade change; soil temperature and moisture fluctuate more; decomposer communities are altered. Faster initial decomposition may occur, but nutrient retention declines and leaching/erosion increase, reducing long-term fertility.", "Evaluate"]
      ],
      trap: "Confusing energy flow with nutrient cycling; assuming all litter decomposes at the same rate.",
      bridgeIn: "Recall the climate and soil controls on biological activity.",
      bridgeOut: "Next practical: measure litter decomposition or soil organic matter.",
      linkQuestion: "Design a litterbag experiment to compare decomposition in two habitats."
    },
    {
      title: "Biogeochemical cycles",
      source: "Provisional · course outline Unit 5",
      unit: "Unit 5 · Biogeochemical cycles",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Biogeochemical cycles move elements between atmosphere, lithosphere, hydrosphere and living organisms.",
        "Carbon cycle: photosynthesis fixes CO2; respiration, decomposition and combustion release it; oceans and fossil fuels are major pools.",
        "Nitrogen cycle: fixation, nitrification, assimilation, ammonification, denitrification; nitrogen is often limiting.",
        "Phosphorus cycle: mainly sedimentary, slow, no gaseous phase; often limiting in tropical soils.",
        "Water cycle: evaporation, transpiration, condensation, precipitation, infiltration and runoff.",
        "Human activities alter cycles through burning fossil fuels, fertilizer use, deforestation and land-use change."
      ],
      terms: ["biogeochemical cycle", "carbon cycle", "nitrogen cycle", "phosphorus cycle", "water cycle", "fixation", "nitrification", "denitrification", "leaching"],
      diagrams: ["Draw the carbon cycle with pools and fluxes.", "Draw the nitrogen cycle with the five key processes."],
      questions: [
        ["Explain why nitrogen is often the limiting nutrient in terrestrial ecosystems.", "Most nitrogen is in the atmosphere as N2, which plants cannot use. Biological fixation and decomposition supply available forms slowly. Demand for protein and nucleic acids often exceeds supply, so growth is nitrogen-limited.", "Explain"],
        ["Compare the carbon and phosphorus cycles.", "Carbon has a large atmospheric pool and rapid biological and fossil-fuel fluxes. Phosphorus has no gaseous phase, is mainly in rocks and sediments, and cycles slowly through weathering, uptake and decomposition. Phosphorus is therefore often limiting in old tropical soils.", "Apply"],
        ["How does deforestation affect the carbon and water cycles?", "It removes a carbon sink and releases stored carbon; reduced transpiration can lower local rainfall and increase runoff and erosion. The combined effect can feed back on forest resilience.", "Evaluate"]
      ],
      trap: "Treating cycles as closed loops; forgetting the role of decomposers and humans.",
      bridgeIn: "Recall decomposition and nutrient release from the previous session.",
      bridgeOut: "Next practical: measure soil carbon or nitrate as an indicator of cycling.",
      linkQuestion: "Which soil measurement would best indicate nitrogen availability at your field site?"
    },
    {
      title: "Global climate change",
      source: "Provisional · course outline Unit 6",
      unit: "Unit 6 · Global climate change",
      priority: "core",
      provisional: true,
      mustKnow: [
        "Greenhouse gases (CO2, CH4, N2O, water vapour) absorb and re-emit longwave radiation, warming the surface.",
        "Human activities have increased atmospheric greenhouse gas concentrations, especially since industrialization.",
        "Feedbacks can amplify or damp warming: ice-albedo, water vapour, cloud, carbon-cycle and vegetation feedbacks.",
        "Impacts include sea-level rise, heatwaves, altered rainfall, drought, fire, species range shifts and crop losses.",
        "Mitigation reduces emissions; adaptation reduces vulnerability.",
        "Ghana is vulnerable through agriculture, coastal erosion, water resources and health."
      ],
      terms: ["greenhouse gas", "radiative forcing", "feedback", "mitigation", "adaptation", "carbon sink", "carbon source", "sea-level rise"],
      diagrams: ["Draw the greenhouse effect and label the enhanced greenhouse effect.", "Draw a feedback loop (e.g., ice-albedo)."],
      questions: [
        ["Explain the difference between the natural greenhouse effect and the enhanced greenhouse effect.", "The natural effect keeps Earth warm enough for life by trapping some longwave radiation. The enhanced effect is the additional warming caused by human greenhouse gas emissions increasing the trapping of longwave radiation.", "Explain"],
        ["Why is the ice-albedo feedback positive?", "Warming melts ice, exposing darker land or ocean, which absorbs more solar radiation, causing more warming and more melting. The loop amplifies the initial change.", "Apply"],
        ["Evaluate one mitigation and one adaptation strategy for Ghanaian agriculture.", "Mitigation: reduce emissions from burning and fertilizer, sequester carbon in soils and trees. Adaptation: drought-tolerant varieties, irrigation, early warning, diversified crops. Mitigation addresses the cause; adaptation reduces the damage already locked in.", "Evaluate"]
      ],
      trap: "Confusing mitigation with adaptation; ignoring feedbacks and uncertainty.",
      bridgeIn: "Recall the radiation budget and greenhouse effect from Unit 1.",
      bridgeOut: "Next practical: measure a local microclimate or carbon stock.",
      linkQuestion: "How would you design a field study to test whether a forest patch buffers local temperature?"
    },
    {
      title: "Urban and human ecology",
      source: "Provisional · course outline Unit 7",
      unit: "Unit 7 · Urban and human ecology",
      priority: "support",
      provisional: true,
      mustKnow: [
        "Urban ecology studies ecosystems dominated by humans, including cities, towns and peri-urban areas.",
        "Urban heat island: built surfaces absorb and re-radiate heat; vegetation and water reduce it.",
        "Urban pollution: air, water, noise, solid waste and light pollution.",
        "Green infrastructure (trees, parks, green roofs, wetlands) provides cooling, drainage, biodiversity and health benefits.",
        "Human population growth and consumption drive resource use and waste.",
        "Sustainable cities require planning, public transport, waste management and equitable access to green space."
      ],
      terms: ["urban ecology", "urban heat island", "green infrastructure", "ecosystem services", "sustainability", "pollution", "carrying capacity"],
      diagrams: ["Draw an urban heat island profile from city centre to rural edge."],
      questions: [
        ["Explain the urban heat island effect and two ways to reduce it.", "Built surfaces have low albedo and high heat capacity, and lack evapotranspiration, so cities stay warmer. Reduce it with tree canopy, green roofs, parks, water bodies and reflective materials.", "Explain"],
        ["How do green spaces improve human health and urban resilience?", "They cool air, filter pollutants, absorb stormwater, support biodiversity and provide recreation and mental health benefits. They also reduce flood risk and energy demand.", "Apply"],
        ["A city plans to expand roads instead of public transport. Evaluate the ecological consequences.", "More roads increase emissions, habitat fragmentation, runoff and heat, and encourage car dependence. Public transport and compact planning reduce per-capita impacts. The trade-off is short-term convenience versus long-term sustainability.", "Evaluate"]
      ],
      trap: "Treating cities as separate from nature; ignoring environmental justice.",
      bridgeIn: "Recall ecosystem services and climate change from previous units.",
      bridgeOut: "Next practical: compare temperature or biodiversity in built and vegetated areas.",
      linkQuestion: "How would you measure the cooling effect of a campus tree canopy?"
    }
  ]
});
