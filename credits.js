// Picture credits, written by tools/fetch_images.py. Every picture is a free-licence file from Wikimedia Commons.
// id: { file, author, license, url }
const IMAGE_CREDITS = {
 "alan_shepard": {
  "file": "Business_suit_portrait_of_Al_Shepard.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Business_suit_portrait_of_Al_Shepard.jpg"
 },
 "albert_einstein": {
  "file": "Albert_Einstein_Head_cleaned.jpg",
  "author": "Oren Jack Turner",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Albert_Einstein_Head_cleaned.jpg"
 },
 "alexei_leonov": {
  "file": "Alexei_Leonov.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Alexei_Leonov.jpg"
 },
 "alpha_centauri_a_and_b": {
  "file": "The_sky_around_Alpha_Centauri_and_Proxima_Centauri_(eso1629i).jpg",
  "author": "Digitized Sky Survey 2. Acknowledgement: Davide De Martin/Mahdi Zamani",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:The_sky_around_Alpha_Centauri_and_Proxima_Centauri_(eso1629i).jpg"
 },
 "andromeda_galaxy": {
  "file": "Andromeda_Galaxy_2025.png",
  "author": "Brody Wesner",
  "license": "CC0",
  "url": "https://commons.wikimedia.org/wiki/File:Andromeda_Galaxy_2025.png"
 },
 "apollo_1": {
  "file": "Apollo1-Crew_01.jpg",
  "author": "NASA/photographer unknown",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Apollo1-Crew_01.jpg"
 },
 "apollo_11": {
  "file": "A_Man_on_the_Moon,_AS11-40-5903_(cropped).jpg",
  "author": "Neil A. Armstrong",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:A_Man_on_the_Moon,_AS11-40-5903_(cropped).jpg"
 },
 "apollo_13": {
  "file": "Apollo_13-insignia.png",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Apollo_13-insignia.png"
 },
 "apollo_17": {
  "file": "Eugene_Cernan_at_the_LM,_Apollo_17,_AS17-134-20378.jpg",
  "author": "Harrison Schmitt / Apollo 17",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Eugene_Cernan_at_the_LM,_Apollo_17,_AS17-134-20378.jpg"
 },
 "apollo_8": {
  "file": "NASA-Apollo8-Dec24-Earthrise.jpg",
  "author": "NASA/Bill Anders",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:NASA-Apollo8-Dec24-Earthrise.jpg"
 },
 "apollo_soyuz": {
  "file": "ASTP_patch.png",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:ASTP_patch.png"
 },
 "artemis_i": {
  "file": "Orion_Approaches_Moon_for_Outbound_Powered_Flyby.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Orion_Approaches_Moon_for_Outbound_Powered_Flyby.jpg"
 },
 "artemis_ii": {
  "file": "Earthset_(art002e009288).jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Earthset_(art002e009288).jpg"
 },
 "artemis_iii": {
  "file": "Artemis_III_ESM3_Engine_Nozzle_Install_Completion_(KSC-20260217-PH-JBS01_0002).jpg",
  "author": "NASA Kennedy Space Center / NASA/Ben Smegelsky",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Artemis_III_ESM3_Engine_Nozzle_Install_Completion_(KSC-20260217-PH-JBS01_0002).jpg"
 },
 "asteroid_belt": {
  "file": "Asteroid_belt_positions-en.png",
  "author": "Thunkii",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Asteroid_belt_positions-en.png"
 },
 "atlantis": {
  "file": "STS132_Atlantis_undocking2_(cropped).jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:STS132_Atlantis_undocking2_(cropped).jpg"
 },
 "barnard_s_star": {
  "file": "Barnardstar2006.jpg",
  "author": "Steve Quirk",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Barnardstar2006.jpg"
 },
 "betelgeuse": {
  "file": "A_bubbling_Betelgeuse_(potw2634a).jpg",
  "author": "ESO/W. Dent et al.",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:A_bubbling_Betelgeuse_(potw2634a).jpg"
 },
 "buran": {
  "file": "Buran_on_An-225_(Le_Bourget_1989)_1.JPEG",
  "author": "MASTER SGT. DAVE CASEY",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Buran_on_An-225_(Le_Bourget_1989)_1.JPEG"
 },
 "buzz_aldrin": {
  "file": "Buzz_Aldrin.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Buzz_Aldrin.jpg"
 },
 "cassini": {
  "file": "Cassini_Saturn_Orbit_Insertion.jpg",
  "author": "NASA/JPL",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Cassini_Saturn_Orbit_Insertion.jpg"
 },
 "ceres": {
  "file": "Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg",
  "author": "Justin Cowart",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Ceres_-_RC3_-_Haulani_Crater_(22381131691)_(cropped).jpg"
 },
 "challenger": {
  "file": "S83-35803_(cropped).jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:S83-35803_(cropped).jpg"
 },
 "chandrayaan_3": {
  "file": "Chandrayaan-3_–_Image_of_Vikram_lander_on_lunar_surface_taken_by_Pragyan_rover_navcam_at_1104_IST,_30_August_2023_from_15_meters_away_(with_text).webp",
  "author": "Indian Space Research Organisation",
  "license": "GODL-India",
  "url": "https://commons.wikimedia.org/wiki/File:Chandrayaan-3_%E2%80%93_Image_of_Vikram_lander_on_lunar_surface_taken_by_Pragyan_rover_navcam_at_1104_IST,_30_August_2023_from_15_meters_away_(with_text).webp"
 },
 "chandrayaan_4": {
  "file": "Chandrayaan-4_Integrated_Module,_Computer-Aided_Design_(CAD)_2024.jpg",
  "author": "Indian Space Research Organisation",
  "license": "GODL-India",
  "url": "https://commons.wikimedia.org/wiki/File:Chandrayaan-4_Integrated_Module,_Computer-Aided_Design_(CAD)_2024.jpg"
 },
 "chang_e_4": {
  "file": "ChangE-4_-_PCAM.png",
  "author": "CSNA/Siyu Zhang/Kevin M. Gill",
  "license": "CC BY 2.0",
  "url": "https://commons.wikimedia.org/wiki/File:ChangE-4_-_PCAM.png"
 },
 "christina_koch": {
  "file": "Jsc2023e0016435_alt.jpg",
  "author": "Josh Valcarcel",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Jsc2023e0016435_alt.jpg"
 },
 "columbia": {
  "file": "Space_Shuttle_Columbia_lands_following_STS-62_on_18_March_1994._(cropped).jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Space_Shuttle_Columbia_lands_following_STS-62_on_18_March_1994._(cropped).jpg"
 },
 "crab_nebula": {
  "file": "Crab_Nebula.jpg",
  "author": "NASA, ESA, J. Hester and A. Loll (Arizona State University)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Crab_Nebula.jpg"
 },
 "crew_dragon": {
  "file": "Iss071e052057.jpg",
  "author": "NASA Johnson Space Center",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Iss071e052057.jpg"
 },
 "curiosity": {
  "file": "Curiosity_Self-Portrait_at_'Big_Sky'_Drilling_Site.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Curiosity_Self-Portrait_at_%27Big_Sky%27_Drilling_Site.jpg"
 },
 "discovery": {
  "file": "STS-133_Space_Shuttle_Discovery_after_undocking_3_(cropped).jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:STS-133_Space_Shuttle_Discovery_after_undocking_3_(cropped).jpg"
 },
 "dragonfly": {
  "file": "Dragonfly_render_June_2025.png",
  "author": "NASA/Johns Hopkins APL/Steve Gribben",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Dragonfly_render_June_2025.png"
 },
 "earth": {
  "file": "Meteosat-12-fci-march-equinox-2025-noon.jpg",
  "author": "EUMETSAT",
  "license": "Attribution",
  "url": "https://commons.wikimedia.org/wiki/File:Meteosat-12-fci-march-equinox-2025-noon.jpg"
 },
 "edwin_hubble": {
  "file": "Studio_portrait_photograph_of_Edwin_Powell_Hubble_(cropped).JPG",
  "author": "Johan Hagemeyer",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Studio_portrait_photograph_of_Edwin_Powell_Hubble_(cropped).JPG"
 },
 "enceladus": {
  "file": "PIA17202_-_Approaching_Enceladus.jpg",
  "author": "National Aeronautics and Space Administration (NASA) / Jet Propulsion Laboratory (JPL)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:PIA17202_-_Approaching_Enceladus.jpg"
 },
 "endeavour": {
  "file": "STS-123_Dextre&Kibo_ELM-PS_in_orbit_(cropped).jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:STS-123_Dextre%26Kibo_ELM-PS_in_orbit_(cropped).jpg"
 },
 "europa": {
  "file": "Europa_-_Perijove_45_(cropped).png",
  "author": "NASA/JPL-Caltech/SwRI/MSSS/Kevin M. Gill",
  "license": "CC BY 2.0",
  "url": "https://commons.wikimedia.org/wiki/File:Europa_-_Perijove_45_(cropped).png"
 },
 "europa_clipper": {
  "file": "Europa_Clipper_spacecraft_model.png",
  "author": "National Aeronautics and Space Administration (NASA) · Jet Propulsion Laboratory",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Europa_Clipper_spacecraft_model.png"
 },
 "freedom_7": {
  "file": "Alan_Shepard_during_flight_5.5.61.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Alan_Shepard_during_flight_5.5.61.jpg"
 },
 "friendship_7": {
  "file": "Glenn62.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Glenn62.jpg"
 },
 "gaganyaan": {
  "file": "Gaganyaan_vehicle_used_for_TVD1_mission.webp",
  "author": "ISRO,Dept of space, Govt of India",
  "license": "GODL-India",
  "url": "https://commons.wikimedia.org/wiki/File:Gaganyaan_vehicle_used_for_TVD1_mission.webp"
 },
 "galileo_galilei": {
  "file": "Galileo_Galilei_(1564-1642)_RMG_BHC2700.tiff",
  "author": "Justus Sustermans",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Galileo_Galilei_(1564-1642)_RMG_BHC2700.tiff"
 },
 "ganymede": {
  "file": "Ganymede_-_Perijove_34_Composite.png",
  "author": "NASA/JPL-Caltech/SwRI/MSSS/Kevin M. Gill",
  "license": "CC BY 2.0",
  "url": "https://commons.wikimedia.org/wiki/File:Ganymede_-_Perijove_34_Composite.png"
 },
 "halley_s_comet": {
  "file": "Lspn_comet_halley.jpg",
  "author": "NASA/W. Liller",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Lspn_comet_halley.jpg"
 },
 "helen_sharman": {
  "file": "Dr._Helen_Sharman_(cropped).jpg",
  "author": "Anne-Katrin Purkiss",
  "license": "CC BY-SA 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Dr._Helen_Sharman_(cropped).jpg"
 },
 "hera": {
  "file": "Hera_in_orbit.jpg",
  "author": "ESA – Science Office",
  "license": "CC BY-SA 3.0 igo",
  "url": "https://commons.wikimedia.org/wiki/File:Hera_in_orbit.jpg"
 },
 "hubble_space_telescope": {
  "file": "Hubble_2009_close-up_2.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Hubble_2009_close-up_2.jpg"
 },
 "ingenuity": {
  "file": "Mars_helicopter_on_sol_46.png",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Mars_helicopter_on_sol_46.png"
 },
 "international_space_station": {
  "file": "The_station_pictured_from_the_SpaceX_Crew_Dragon_5.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:The_station_pictured_from_the_SpaceX_Crew_Dragon_5.jpg"
 },
 "io": {
  "file": "Io_highest_resolution_natural_color.png",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Io_highest_resolution_natural_color.png"
 },
 "isaac_newton": {
  "file": "Portrait_of_Sir_Isaac_Newton,_1689_(brightened).jpg",
  "author": "Godfrey Kneller",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Portrait_of_Sir_Isaac_Newton,_1689_(brightened).jpg"
 },
 "james_webb_space_telescope": {
  "file": "JWST_spacecraft_model_3.png",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:JWST_spacecraft_model_3.png"
 },
 "jeremy_hansen": {
  "file": "Jsc2023e0016436_alt2.jpg",
  "author": "Josh Valcarcel",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Jsc2023e0016436_alt2.jpg"
 },
 "john_glenn": {
  "file": "John_Glenn_Low_Res.jpg",
  "author": "U.S. Senate Historical Office",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:John_Glenn_Low_Res.jpg"
 },
 "juice": {
  "file": "Juice_launch_kit_cover_close-up.png",
  "author": "ESA",
  "license": "CC BY-SA 3.0 igo",
  "url": "https://commons.wikimedia.org/wiki/File:Juice_launch_kit_cover_close-up.png"
 },
 "jupiter": {
  "file": "Jupiter_OPAL_2024.png",
  "author": "NASA/STSCI (S.T.A.R.S)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Jupiter_OPAL_2024.png"
 },
 "katherine_johnson": {
  "file": "Katherine_Johnson_1983.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Katherine_Johnson_1983.jpg"
 },
 "konstantin_tsiolkovsky": {
  "file": "Константин_Циолковский.jpg",
  "author": "Unknown authorUnknown author",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD_%D0%A6%D0%B8%D0%BE%D0%BB%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9.jpg"
 },
 "kuiper_belt": {
  "file": "UltimaThule CA06 color 20190516.png",
  "author": "NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research…",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:UltimaThule_CA06_color_20190516.png"
 },
 "laika": {
  "file": "Laika_in_1957.jpg",
  "author": "Музей космонавтики / Главархив Москвы",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Laika_in_1957.jpg"
 },
 "lanyue": {
  "file": "Chinese_crewed_lunar_lander_mockup_01_-_NMC.jpg",
  "author": "Shujianyang",
  "license": "CC0",
  "url": "https://commons.wikimedia.org/wiki/File:Chinese_crewed_lunar_lander_mockup_01_-_NMC.jpg"
 },
 "large_magellanic_cloud": {
  "file": "Eso1021d.jpg",
  "author": "Robert Gendler/ESO",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Eso1021d.jpg"
 },
 "long_march_10": {
  "file": "Long_March_10_mockup_-_NMC.jpg",
  "author": "Shujianyang",
  "license": "CC0",
  "url": "https://commons.wikimedia.org/wiki/File:Long_March_10_mockup_-_NMC.jpg"
 },
 "luna_2": {
  "file": "Luna_1_-_2_Spacecraft.png",
  "author": "NASA/NSSDCA (public domain)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Luna_1_-_2_Spacecraft.png"
 },
 "luna_3": {
  "file": "Луна-3_(14562265547).jpg",
  "author": "Музей Космонавтики from Россия",
  "license": "CC0",
  "url": "https://commons.wikimedia.org/wiki/File:%D0%9B%D1%83%D0%BD%D0%B0-3_(14562265547).jpg"
 },
 "luna_9": {
  "file": "Luna_9_Musee_du_Bourget_P1010505.JPG",
  "author": "Pline",
  "license": "CC BY-SA 3.0",
  "url": "https://commons.wikimedia.org/wiki/File:Luna_9_Musee_du_Bourget_P1010505.JPG"
 },
 "lunokhod_1": {
  "file": "Soviet_moonrover.JPG",
  "author": "Petar Milošević",
  "license": "CC BY-SA 3.0",
  "url": "https://commons.wikimedia.org/wiki/File:Soviet_moonrover.JPG"
 },
 "m87_black_hole": {
  "file": "Black hole - Messier 87 crop max res.jpg",
  "author": "Event Horizon Telescope",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Black_hole_-_Messier_87_crop_max_res.jpg"
 },
 "mae_jemison": {
  "file": "Mae_Carol_Jemison.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Mae_Carol_Jemison.jpg"
 },
 "margaret_hamilton": {
  "file": "Margaret_Hamilton_1995.jpg",
  "author": "Daphne Weld Nichols",
  "license": "CC BY-SA 3.0",
  "url": "https://commons.wikimedia.org/wiki/File:Margaret_Hamilton_1995.jpg"
 },
 "mars": {
  "file": "Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png",
  "author": "Kevin Gill from Los Angeles, CA, United States",
  "license": "CC BY 2.0",
  "url": "https://commons.wikimedia.org/wiki/File:Mars_-_August_30_2021_-_Flickr_-_Kevin_M._Gill.png"
 },
 "mengzhou": {
  "file": "Chinese_next-generation_crewed_spacecraft_mockup_-_NMC.jpg",
  "author": "Shujianyang",
  "license": "CC0",
  "url": "https://commons.wikimedia.org/wiki/File:Chinese_next-generation_crewed_spacecraft_mockup_-_NMC.jpg"
 },
 "mercury": {
  "file": "Mercury_in_true_color.jpg",
  "author": "NASA/Johns Hopkins University Applied Physics Laboratory/Arizona State…",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Mercury_in_true_color.jpg"
 },
 "michael_collins": {
  "file": "Michael_Collins_(S69-31742,_restoration).jpg",
  "author": "NASA; restored by Coffeeandcrumbs",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Michael_Collins_(S69-31742,_restoration).jpg"
 },
 "milky_way": {
  "file": "ESO-VLT-Laser-phot-33a-07.jpg",
  "author": "ESO/Y. Beletsky",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:ESO-VLT-Laser-phot-33a-07.jpg"
 },
 "mir": {
  "file": "Mir_Space_Station_viewed_from_Endeavour_during_STS-89.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Mir_Space_Station_viewed_from_Endeavour_during_STS-89.jpg"
 },
 "mmx": {
  "file": "MMX-CG02.jpg",
  "author": "JAXA",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:MMX-CG02.jpg"
 },
 "n1_rocket": {
  "file": "N1_1M1_mockup_on_the_launch_pad_at_the_Baikonur_Cosmodrome_in_late_1967.jpg",
  "author": "National Reconnaissance Office",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:N1_1M1_mockup_on_the_launch_pad_at_the_Baikonur_Cosmodrome_in_late_1967.jpg"
 },
 "neil_armstrong": {
  "file": "Neil_Armstrong_pose.jpg",
  "author": "Unknown authorUnknown author",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Neil_Armstrong_pose.jpg"
 },
 "neptune": {
  "file": "Neptune_Voyager2_color_calibrated.png",
  "author": "NASA / Voyager 2 / PDS / OPUS / Ardenau4",
  "license": "CC0",
  "url": "https://commons.wikimedia.org/wiki/File:Neptune_Voyager2_color_calibrated.png"
 },
 "new_horizons": {
  "file": "New_Horizons_spacecraft_model_1.png",
  "author": "National Aeronautics and Space Administration (NASA), Applied Physics Laboratory",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:New_Horizons_spacecraft_model_1.png"
 },
 "orion": {
  "file": "Orion and the Moon on Flight Day 2 (art002e004429).jpg",
  "author": "NASA Johnson Space Center / NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Orion_and_the_Moon_on_Flight_Day_2_(art002e004429).jpg"
 },
 "orion_nebula": {
  "file": "Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg",
  "author": "NASA, ESA, M. Robberto (Space Telescope Science Institute/ESA) and the Hubble Space…",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Orion_Nebula_-_Hubble_2006_mosaic_18000.jpg"
 },
 "parker_solar_probe": {
  "file": "Parker_Solar_Probe_spacecraft_model.png",
  "author": "National Aeronautics and Space Administration (NASA)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Parker_Solar_Probe_spacecraft_model.png"
 },
 "people_on_mars": {
  "file": "Mars_Ice_Home_concept.jpg",
  "author": "NASA/Clouds AO/SEArch",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Mars_Ice_Home_concept.jpg"
 },
 "perseverance": {
  "file": "Perseverance-Selfie-at-Rochette-Horizontal-V2.gif",
  "author": "NASA/JPL-Caltech",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Perseverance-Selfie-at-Rochette-Horizontal-V2.gif"
 },
 "phobos": {
  "file": "Phobos_colour_2008.jpg",
  "author": "NASA / JPL-Caltech / University of Arizona",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Phobos_colour_2008.jpg"
 },
 "pillars_of_creation": {
  "file": "Eagle_nebula_pillars.jpg",
  "author": "NASA, Jeff Hester and Paul Scowen (Arizona State University)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Eagle_nebula_pillars.jpg"
 },
 "pioneer_10": {
  "file": "An_artist's_impression_of_a_Pioneer_spacecraft_on_its_way_to_interstellar_space.jpg",
  "author": "NASA/Don Davis",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:An_artist%27s_impression_of_a_Pioneer_spacecraft_on_its_way_to_interstellar_space.jpg"
 },
 "pluto": {
  "file": "Pluto_in_True_Color_-_High-Res.png",
  "author": "NASA/Johns Hopkins University Applied Physics Laboratory/Southwest Research…",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Pluto_in_True_Color_-_High-Res.png"
 },
 "polaris": {
  "file": "Polaris (star).jpg",
  "author": "Heyzeuss",
  "license": "CC BY-SA 3.0",
  "url": "https://commons.wikimedia.org/wiki/File:Polaris_(star).jpg"
 },
 "project_gemini": {
  "file": "Gemini 6 Views Gemini 7.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Gemini_6_Views_Gemini_7.jpg"
 },
 "proxima_b": {
  "file": "Artist’s_impression_of_Proxima_Centauri_b_shown_hypothetically_as_an_arid_rocky_super-earth.jpg",
  "author": "ESO/M. Kornmesser",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Artist%E2%80%99s_impression_of_Proxima_Centauri_b_shown_hypothetically_as_an_arid_rocky_super-earth.jpg"
 },
 "proxima_centauri": {
  "file": "New_shot_of_Proxima_Centauri,_our_nearest_neighbour.jpg",
  "author": "ESA/Hubble & NASA",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:New_shot_of_Proxima_Centauri,_our_nearest_neighbour.jpg"
 },
 "reid_wiseman": {
  "file": "Jsc2023e0016434_alt.jpg",
  "author": "Josh Valcarcel",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Jsc2023e0016434_alt.jpg"
 },
 "robert_goddard": {
  "file": "Dr._Robert_H._Goddard_-_GPN-2002-000131.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Dr._Robert_H._Goddard_-_GPN-2002-000131.jpg"
 },
 "rosalind_franklin_rover": {
  "file": "Rosalind_Franklin_rover_2024.jpg",
  "author": "Photograph by Mike Peel (www.mikepeel.net).",
  "license": "CC BY-SA 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Rosalind_Franklin_rover_2024.jpg"
 },
 "rosetta": {
  "file": "Rosetta_spacecraft_model.png",
  "author": "ESA/ATG medialab",
  "license": "CC BY-SA 2.0",
  "url": "https://commons.wikimedia.org/wiki/File:Rosetta_spacecraft_model.png"
 },
 "sagittarius_a_": {
  "file": "EHT_Saggitarius_A_black_hole.tif",
  "author": "EHT Collaboration",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:EHT_Saggitarius_A_black_hole.tif"
 },
 "sally_ride": {
  "file": "Sally_Ride_(1984).jpg",
  "author": "NASA; retouched by Coffeeandcrumbs",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Sally_Ride_(1984).jpg"
 },
 "salyut_1": {
  "file": "Салют-1 и Союз 10 или Союз-11.png",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:%D0%A1%D0%B0%D0%BB%D1%8E%D1%82-1_%D0%B8_%D0%A1%D0%BE%D1%8E%D0%B7_10_%D0%B8%D0%BB%D0%B8_%D0%A1%D0%BE%D1%8E%D0%B7-11.png"
 },
 "saturn": {
  "file": "Saturn_global_view_from_Cassini,_rings_open_Better_Colour.png",
  "author": "NASA / JPL-Caltech / SSI / color composite by Gordan Ugarkovic",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Saturn_global_view_from_Cassini,_rings_open_Better_Colour.png"
 },
 "saturn_v": {
  "file": "Apollo_11_Launch_-_GPN-2000-000630.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Apollo_11_Launch_-_GPN-2000-000630.jpg"
 },
 "sergei_korolev": {
  "file": "Нина_и_Сергей_Королевы_(cropped).jpg",
  "author": "Unknown authorUnknown author",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:%D0%9D%D0%B8%D0%BD%D0%B0_%D0%B8_%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9_%D0%9A%D0%BE%D1%80%D0%BE%D0%BB%D0%B5%D0%B2%D1%8B_(cropped).jpg"
 },
 "shenzhou_5": {
  "file": "中国空间站建造“1+1=1”2.png",
  "author": "China News Service",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E5%9B%BD%E7%A9%BA%E9%97%B4%E7%AB%99%E5%BB%BA%E9%80%A0%E2%80%9C1%2B1%3D1%E2%80%9D2.png"
 },
 "sirius": {
  "file": "Sirius A and B artwork.jpg",
  "author": "NASA, ESA and G. Bacon (STScI)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Sirius_A_and_B_artwork.jpg"
 },
 "skylab": {
  "file": "Skylab_(SL-4).jpg",
  "author": "NASA (Crew of Skylab 4)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Skylab_(SL-4).jpg"
 },
 "slim": {
  "file": "SLIM_half_scale_model_(close_cropped).png",
  "author": "Hms1103",
  "license": "CC BY-SA 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:SLIM_half_scale_model_(close_cropped).png"
 },
 "sojourner": {
  "file": "Sojourner_on_Mars_PIA01122.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Sojourner_on_Mars_PIA01122.jpg"
 },
 "soyuz": {
  "file": "Soyuz_MS.jpg",
  "author": "CactiStaccingCrane",
  "license": "CC0",
  "url": "https://commons.wikimedia.org/wiki/File:Soyuz_MS.jpg"
 },
 "space_launch_system": {
  "file": "Artemis_II_launch_(SLS_MAF_20260401_ArtemisIILaunch_02)_crop.jpg",
  "author": "https://www.nasa.gov/marshall/",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Artemis_II_launch_(SLS_MAF_20260401_ArtemisIILaunch_02)_crop.jpg"
 },
 "space_shuttle": {
  "file": "STS120LaunchHiRes-edit1.jpg",
  "author": "NASA; edited by jjron (tilt corrected)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:STS120LaunchHiRes-edit1.jpg"
 },
 "spirit_and_opportunity": {
  "file": "NASA_Mars_Rover.jpg",
  "author": "NASA/JPL/Cornell University, Maas Digital LLC",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:NASA_Mars_Rover.jpg"
 },
 "sputnik_1": {
  "file": "Первый_в_мире_искусственный_спутник_Земли.jpg",
  "author": "Andrey Butko",
  "license": "CC BY-SA 3.0",
  "url": "https://commons.wikimedia.org/wiki/File:%D0%9F%D0%B5%D1%80%D0%B2%D1%8B%D0%B9_%D0%B2_%D0%BC%D0%B8%D1%80%D0%B5_%D0%B8%D1%81%D0%BA%D1%83%D1%81%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D1%83%D1%82%D0%BD%D0%B8%D0%BA_%D0%97%D0%B5%D0%BC%D0%BB%D0%B8.jpg"
 },
 "starliner": {
  "file": "Boeing's_Starliner_crew_ship_approaches_the_space_station_(iss067e066735)_(cropped).jpg",
  "author": "NASA, Johnson Space Center",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Boeing%27s_Starliner_crew_ship_approaches_the_space_station_(iss067e066735)_(cropped).jpg"
 },
 "starship": {
  "file": "Starship_-_Flight_13_(Sunset).jpg",
  "author": "SpaceX",
  "license": "CC BY 2.0",
  "url": "https://commons.wikimedia.org/wiki/File:Starship_-_Flight_13_(Sunset).jpg"
 },
 "sun": {
  "file": "The_Sun_in_white_light.jpg",
  "author": "Matúš Motlo",
  "license": "CC BY-SA 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:The_Sun_in_white_light.jpg"
 },
 "the_moon": {
  "file": "FullMoon2010.jpg",
  "author": "Gregory H. Revera",
  "license": "CC BY-SA 3.0",
  "url": "https://commons.wikimedia.org/wiki/File:FullMoon2010.jpg"
 },
 "tiangong": {
  "file": "Chinese_Tiangong_Space_Station.jpg",
  "author": "Shujianyang",
  "license": "CC BY-SA 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Chinese_Tiangong_Space_Station.jpg"
 },
 "tianwen_3": {
  "file": "The_Tianwen-3_payload_development_project_has_been_launched1.png",
  "author": "中国新闻社",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:The_Tianwen-3_payload_development_project_has_been_launched1.png"
 },
 "tim_peake": {
  "file": "Timothy_Peake,_official_portrait.jpg",
  "author": "Robert Markowitz",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Timothy_Peake,_official_portrait.jpg"
 },
 "titan": {
  "file": "Titan_in_true_color_by_Kevin_M._Gill.jpg",
  "author": "NASA/JPL-Caltech/SSI/Kevin M. Gill",
  "license": "CC BY 2.0",
  "url": "https://commons.wikimedia.org/wiki/File:Titan_in_true_color_by_Kevin_M._Gill.jpg"
 },
 "trappist_1": {
  "file": "Artist’s impression of the TRAPPIST-1 planetary system.jpg",
  "author": "ESO/N. Bartmann/spaceengine.org",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Artist%E2%80%99s_impression_of_the_TRAPPIST-1_planetary_system.jpg"
 },
 "uranus": {
  "file": "Uranus_Voyager2_color_calibrated.png",
  "author": "Ardenau4",
  "license": "CC0",
  "url": "https://commons.wikimedia.org/wiki/File:Uranus_Voyager2_color_calibrated.png"
 },
 "valentina_tereshkova": {
  "file": "Valentina_Tereshkova_(2024-02-29)_crop.jpg",
  "author": "Kremlin.ru (Presidential Press and Information Office)",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Valentina_Tereshkova_(2024-02-29)_crop.jpg"
 },
 "venera_13": {
  "file": "1982_CPA_5278.jpg",
  "author": "Post of Soviet Union",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:1982_CPA_5278.jpg"
 },
 "venera_7": {
  "file": "Venera-7_spuskaemiy_apparat.jpg",
  "author": "Emerezhko",
  "license": "CC BY-SA 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Venera-7_spuskaemiy_apparat.jpg"
 },
 "venus": {
  "file": "Venus_from_Mariner_10.jpg",
  "author": "NASA/JPL-Caltech",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Venus_from_Mariner_10.jpg"
 },
 "victor_glover": {
  "file": "Jsc2023e0016433_alt.jpg",
  "author": "Josh Valcarcel",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Jsc2023e0016433_alt.jpg"
 },
 "viking_1": {
  "file": "Viking_spacecraft.jpg",
  "author": "NASA",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Viking_spacecraft.jpg"
 },
 "voskhod_2": {
  "file": "Soviet Union-1965-Stamp-0.10. Voskhod-2. First Spacewalk.jpg",
  "author": "Soviet Union postage stamp (1965)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Soviet_Union-1965-Stamp-0.10._Voskhod-2._First_Spacewalk.jpg"
 },
 "vostok_1": {
  "file": "Космонавт_Юрий_Гагарин_(cropped).jpg",
  "author": "ТАСС",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82_%D0%AE%D1%80%D0%B8%D0%B9_%D0%93%D0%B0%D0%B3%D0%B0%D1%80%D0%B8%D0%BD_(cropped).jpg"
 },
 "vostok_6": {
  "file": "Vostok_6_capsule_on_display,_2016.jpg",
  "author": "Andrew Gray",
  "license": "CC BY-SA 3.0",
  "url": "https://commons.wikimedia.org/wiki/File:Vostok_6_capsule_on_display,_2016.jpg"
 },
 "voyager_1": {
  "file": "Voyager_spacecraft_model.png",
  "author": "National Aeronautics and Space Administration (NASA)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Voyager_spacecraft_model.png"
 },
 "voyager_2": {
  "file": "Voyager_spacecraft_model.png",
  "author": "National Aeronautics and Space Administration (NASA)",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Voyager_spacecraft_model.png"
 },
 "wernher_von_braun": {
  "file": "Wernher_von_Braun_crop.jpg",
  "author": "NASA/MSFC",
  "license": "Public domain",
  "url": "https://commons.wikimedia.org/wiki/File:Wernher_von_Braun_crop.jpg"
 },
 "yang_liwei": {
  "file": "Yang_Liwei.jpg",
  "author": "Dyor",
  "license": "CC BY-SA 3.0",
  "url": "https://commons.wikimedia.org/wiki/File:Yang_Liwei.jpg"
 },
 "yuri_gagarin": {
  "file": "Yuri_Gagarin_with_awards_(cropped)_2.jpg",
  "author": "Александр Моклецов / СовИнформБюро",
  "license": "CC BY 4.0",
  "url": "https://commons.wikimedia.org/wiki/File:Yuri_Gagarin_with_awards_(cropped)_2.jpg"
 }
};
