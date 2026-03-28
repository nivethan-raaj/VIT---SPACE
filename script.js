/* =============================================
   VITSpace - Space Data Portal
   script.js — Complete JavaScript
   ============================================= */

'use strict';

/* ===================== LANGUAGE DATA ===================== */
const LANG = {
  en: {
    nav_home: 'Home', nav_about: 'About', nav_datasets: 'Datasets', nav_tools: 'Tools',
    nav_missions: 'Missions', nav_gallery: 'Gallery', nav_research: 'Research',
    nav_events: 'Events', nav_forum: 'Forum', nav_contact: 'Contact',
    hero_badge: '🚀 VIT University Space Portal',
    hero_title1: 'Explore the', hero_title2: 'Universe of Data',
    hero_sub: 'Your gateway to space science datasets, analytical tools, and research resources — crafted for UG/PG students and scholars.',
    hero_btn1: 'Explore Datasets', hero_btn2: 'Launch Tools',
    stat1: 'Datasets', stat2: 'Tools', stat3: 'Students', stat4: 'Missions',
    feat_title: 'What VITSpace Offers', feat_sub: 'A complete ecosystem for space science education and research',
    feat1_t: 'Open Datasets', feat1_p: 'Access curated NASA, ISRO, ESA datasets for your research projects and analysis.',
    feat2_t: 'Analytical Tools', feat2_p: 'Use web-based tools for orbit calculation, spectral analysis, and image processing.',
    feat3_t: 'Mission Archive', feat3_p: 'Deep dive into historical and current space missions with full documentation.',
    feat4_t: 'Research Hub', feat4_p: 'Submit, discover and collaborate on space research papers and projects.',
    feat5_t: 'Space Gallery', feat5_p: 'Stunning imagery from Hubble, JWST, and ground-based observatories.',
    feat6_t: 'Events & Hackathons', feat6_p: 'Join space science hackathons, workshops, and seminars hosted by VIT.',
    feat_explore: 'Explore →',
    quick_title: 'Quick Access',
    q1:'Datasets', q2:'Tools', q3:'Missions', q4:'Gallery', q5:'Research', q6:'Forum', q7:'Events', q8:'Contact',
    about_title: 'About VITSpace', about_sub: 'Empowering the next generation of space scientists',
    about_mission_t: 'Our Mission', about_mission_p: 'VITSpace is a dedicated academic portal designed to bridge the gap between raw space data and student researchers. We aggregate datasets from ISRO, NASA, ESA, and other agencies, making them accessible with intuitive tools and documentation.',
    about_vision_t: 'Our Vision', about_vision_p: "To become India's premier academic space data hub — where every undergraduate, postgraduate, and research scholar has the tools and data needed to contribute meaningfully to space science.",
    team_title: 'Our Team',
    team_role1: 'Faculty Advisor — Aerospace Dept.', team_role2: 'Full Stack Lead',
    team_role3: 'Portal Developer — Final Year', team_role4: 'Research Coordinator',
    timeline_title: 'Milestones',
    tl1: 'VITSpace portal conceptualized by Aerospace dept.', tl2: 'First 500 datasets integrated from NASA Open Data.',
    tl3: 'ISRO partnership established; Chandrayaan data added.', tl4: 'Launched 40+ interactive analytical tools.',
    tl5: '5000+ registered students; trilingual interface launched.',
    ds_title: 'Space Datasets', ds_sub: 'Curated from NASA, ISRO, ESA and more',
    tag_all: 'All', tag_solar: 'Solar', tag_planetary: 'Planetary',
    tools_title: 'Analytical Tools', tools_sub: 'Interactive tools for space science computation',
    tool1_t: 'Orbit Calculator', tool1_p: 'Compute orbital parameters: semi-major axis, eccentricity, period, velocity.',
    tool2_t: 'Solar Flux Index', tool2_p: 'Estimate solar flux and UV index based on distance from the Sun.',
    tool3_t: 'Blackbody Radiator', tool3_p: "Wien's law: calculate peak wavelength for a given star temperature.",
    tool4_t: 'Escape Velocity', tool4_p: 'Compute escape velocity for any celestial body given mass and radius.',
    tool5_t: 'Doppler Shift', tool5_p: 'Calculate observed frequency/wavelength due to relative motion.',
    tool6_t: 'Hohmann Transfer', tool6_p: 'Compute Δv for Hohmann orbital transfer between two circular orbits.',
    missions_title: 'Space Missions', missions_sub: 'Past, present and future missions archive',
    gallery_title: 'Space Gallery', gallery_sub: 'Stunning imagery from across the cosmos',
    g_nebula: 'Nebulae', g_galaxy: 'Galaxies', g_planet: 'Planets', g_star: 'Stars',
    research_title: 'Research Hub', research_sub: 'Discover and share space science research',
    r_submit_t: 'Submit Your Research', r_name: 'Full Name', r_email: 'Email', r_title_f: 'Paper Title',
    r_abstract: 'Abstract', r_category: 'Category', r_btn: 'Submit Paper',
    events_title: 'Events & Hackathons', events_sub: 'Stay updated with VITSpace events',
    ev_reg_t: 'Register for an Event', ev_name: 'Full Name', ev_id: 'Student ID',
    ev_dept: 'Department', ev_year: 'Year', ev_event: 'Select Event', ev_btn: 'Register Now',
    forum_title: 'Community Forum', forum_sub: 'Ask, discuss, and collaborate with peers',
    forum_new_t: 'Start a Discussion', f_username: 'Username', f_topic: 'Topic',
    f_category: 'Category', f_message: 'Message', f_btn: 'Post Discussion',
    contact_title: 'Contact Us', contact_sub: 'Get in touch with the VITSpace team',
    c_addr_t: 'Address', c_addr: 'VIT University, Vellore, Tamil Nadu - 632014, India',
    c_email_t: 'Email', c_phone_t: 'Phone', c_hours_t: 'Working Hours',
    c_hours: 'Mon–Fri: 9 AM – 6 PM IST',
    c_form_t: 'Send a Message', c_name: 'Full Name', c_email: 'Email Address',
    c_subject: 'Subject', c_type: 'Query Type', c_msg: 'Message', c_btn: 'Send Message',
    c_opt1: 'Dataset Access', c_opt2: 'Tool Support', c_opt3: 'Research Collaboration',
    c_opt4: 'Event Registration', c_opt5: 'General Inquiry',
    faq_title: 'Frequently Asked Questions',
    login_title: 'Student Login', login_id: 'Student ID / Email', login_pass: 'Password',
    login_remember: 'Remember me', login_forgot: 'Forgot password?', login_btn: 'Login',
    login_switch: "Don't have an account?",
    reg_title: 'Create Account', reg_fname: 'First Name', reg_lname: 'Last Name',
    reg_email: 'Email Address', reg_sid: 'Student ID', reg_dept: 'Department',
    reg_prog: 'Program', reg_pass: 'Password', reg_cpass: 'Confirm Password',
    reg_terms: 'I agree to the Terms of Service and Privacy Policy', reg_btn: 'Create Account',
    reg_switch: 'Already have an account?',
    footer_tagline: "India's premier academic space data portal for students and scholars.",
    footer_portal: 'Portal', footer_community: 'Community', footer_account: 'Account',
    footer_copy: '© 2025 VITSpace — VIT University. All rights reserved.'
  },
  hi: {
    nav_home: 'होम', nav_about: 'परिचय', nav_datasets: 'डेटासेट', nav_tools: 'उपकरण',
    nav_missions: 'मिशन', nav_gallery: 'गैलरी', nav_research: 'अनुसंधान',
    nav_events: 'कार्यक्रम', nav_forum: 'मंच', nav_contact: 'संपर्क',
    hero_badge: '🚀 VIT विश्वविद्यालय स्पेस पोर्टल',
    hero_title1: 'ब्रह्मांड का', hero_title2: 'डेटा अन्वेषण करें',
    hero_sub: 'अंतरिक्ष विज्ञान डेटासेट, विश्लेषण उपकरण और शोध संसाधनों का आपका प्रवेश द्वार — UG/PG छात्रों और शोधार्थियों के लिए।',
    hero_btn1: 'डेटासेट देखें', hero_btn2: 'उपकरण खोलें',
    stat1: 'डेटासेट', stat2: 'उपकरण', stat3: 'छात्र', stat4: 'मिशन',
    feat_title: 'VITSpace क्या प्रदान करता है', feat_sub: 'अंतरिक्ष विज्ञान शिक्षा और अनुसंधान के लिए एक पूर्ण पारिस्थितिकी तंत्र',
    feat1_t: 'खुले डेटासेट', feat1_p: 'NASA, ISRO, ESA डेटासेट आपके शोध के लिए उपलब्ध।',
    feat2_t: 'विश्लेषण उपकरण', feat2_p: 'कक्षा गणना, स्पेक्ट्रल विश्लेषण के लिए वेब उपकरण।',
    feat3_t: 'मिशन संग्रह', feat3_p: 'ऐतिहासिक और वर्तमान अंतरिक्ष मिशनों का विस्तृत विवरण।',
    feat4_t: 'अनुसंधान केंद्र', feat4_p: 'शोध पत्र जमा करें, खोजें और सहयोग करें।',
    feat5_t: 'अंतरिक्ष गैलरी', feat5_p: 'हबल, JWST और अन्य वेधशालाओं की शानदार छवियां।',
    feat6_t: 'कार्यक्रम और हैकाथन', feat6_p: 'VIT द्वारा आयोजित हैकाथन और कार्यशालाओं में भाग लें।',
    feat_explore: 'देखें →',
    quick_title: 'त्वरित पहुँच',
    q1:'डेटासेट', q2:'उपकरण', q3:'मिशन', q4:'गैलरी', q5:'अनुसंधान', q6:'मंच', q7:'कार्यक्रम', q8:'संपर्क',
    about_title: 'VITSpace के बारे में', about_sub: 'अगली पीढ़ी के अंतरिक्ष वैज्ञानिकों को सशक्त बनाना',
    about_mission_t: 'हमारा मिशन', about_mission_p: 'VITSpace एक समर्पित शैक्षणिक पोर्टल है जो अंतरिक्ष डेटा और छात्र शोधकर्ताओं के बीच की खाई को पाटता है।',
    about_vision_t: 'हमारी दृष्टि', about_vision_p: 'भारत का प्रमुख शैक्षणिक अंतरिक्ष डेटा हब बनना जहां हर छात्र को आवश्यक उपकरण और डेटा मिल सके।',
    team_title: 'हमारी टीम',
    team_role1: 'संकाय सलाहकार — एयरोस्पेस विभाग', team_role2: 'डेटा साइंस प्रमुख',
    team_role3: 'पोर्टल डेवलपर — अंतिम वर्ष', team_role4: 'अनुसंधान समन्वयक',
    timeline_title: 'उपलब्धियाँ',
    tl1: 'एयरोस्पेस विभाग द्वारा VITSpace की संकल्पना।', tl2: 'NASA Open Data से 500 डेटासेट एकीकृत।',
    tl3: 'ISRO साझेदारी; चंद्रयान डेटा जोड़ा गया।', tl4: '40+ इंटरैक्टिव उपकरण लॉन्च।',
    tl5: '5000+ पंजीकृत छात्र; त्रिभाषी इंटरफेस लॉन्च।',
    ds_title: 'अंतरिक्ष डेटासेट', ds_sub: 'NASA, ISRO, ESA से संकलित',
    tag_all: 'सभी', tag_solar: 'सौर', tag_planetary: 'ग्रहीय',
    tools_title: 'विश्लेषण उपकरण', tools_sub: 'अंतरिक्ष विज्ञान गणना के लिए इंटरैक्टिव उपकरण',
    tool1_t: 'कक्षा कैलकुलेटर', tool1_p: 'कक्षीय मापदंड गणना: अर्ध-प्रमुख अक्ष, उत्केंद्रता, आवर्त।',
    tool2_t: 'सौर प्रवाह सूचकांक', tool2_p: 'सूर्य से दूरी के आधार पर सौर प्रवाह का अनुमान।',
    tool3_t: 'ब्लैकबॉडी विकिरण', tool3_p: 'वीन का नियम: तापमान के लिए शिखर तरंगदैर्ध्य।',
    tool4_t: 'पलायन वेग', tool4_p: 'किसी खगोलीय पिंड के लिए पलायन वेग की गणना।',
    tool5_t: 'डॉपलर बदलाव', tool5_p: 'सापेक्ष गति के कारण आवृत्ति/तरंगदैर्ध्य की गणना।',
    tool6_t: 'होमन स्थानांतरण', tool6_p: 'दो वृत्ताकार कक्षाओं के बीच Δv की गणना।',
    missions_title: 'अंतरिक्ष मिशन', missions_sub: 'अतीत, वर्तमान और भविष्य के मिशन संग्रह',
    gallery_title: 'अंतरिक्ष गैलरी', gallery_sub: 'ब्रह्मांड की शानदार छवियाँ',
    g_nebula: 'नेबुला', g_galaxy: 'आकाशगंगाएं', g_planet: 'ग्रह', g_star: 'तारे',
    research_title: 'अनुसंधान केंद्र', research_sub: 'अंतरिक्ष विज्ञान शोध खोजें और साझा करें',
    r_submit_t: 'अपना शोध जमा करें', r_name: 'पूरा नाम', r_email: 'ईमेल', r_title_f: 'पेपर शीर्षक',
    r_abstract: 'सारांश', r_category: 'श्रेणी', r_btn: 'पेपर जमा करें',
    events_title: 'कार्यक्रम और हैकाथन', events_sub: 'VITSpace कार्यक्रमों की जानकारी रखें',
    ev_reg_t: 'कार्यक्रम के लिए पंजीकरण', ev_name: 'पूरा नाम', ev_id: 'छात्र ID',
    ev_dept: 'विभाग', ev_year: 'वर्ष', ev_event: 'कार्यक्रम चुनें', ev_btn: 'अभी पंजीकरण करें',
    forum_title: 'समुदाय मंच', forum_sub: 'पूछें, चर्चा करें और सहयोग करें',
    forum_new_t: 'चर्चा शुरू करें', f_username: 'उपयोगकर्ता नाम', f_topic: 'विषय',
    f_category: 'श्रेणी', f_message: 'संदेश', f_btn: 'चर्चा पोस्ट करें',
    contact_title: 'संपर्क करें', contact_sub: 'VITSpace टीम से संपर्क करें',
    c_addr_t: 'पता', c_addr: 'VIT विश्वविद्यालय, वेल्लोर, तमिलनाडु - 632014, भारत',
    c_email_t: 'ईमेल', c_phone_t: 'फोन', c_hours_t: 'कार्य समय',
    c_hours: 'सोम–शुक्र: सुबह 9 बजे – शाम 6 बजे IST',
    c_form_t: 'संदेश भेजें', c_name: 'पूरा नाम', c_email: 'ईमेल पता',
    c_subject: 'विषय', c_type: 'प्रश्न प्रकार', c_msg: 'संदेश', c_btn: 'संदेश भेजें',
    c_opt1: 'डेटासेट पहुँच', c_opt2: 'उपकरण सहायता', c_opt3: 'शोध सहयोग',
    c_opt4: 'कार्यक्रम पंजीकरण', c_opt5: 'सामान्य पूछताछ',
    faq_title: 'अक्सर पूछे जाने वाले प्रश्न',
    login_title: 'छात्र लॉगिन', login_id: 'छात्र ID / ईमेल', login_pass: 'पासवर्ड',
    login_remember: 'मुझे याद रखें', login_forgot: 'पासवर्ड भूल गए?', login_btn: 'लॉगिन',
    login_switch: 'खाता नहीं है?',
    reg_title: 'खाता बनाएँ', reg_fname: 'पहला नाम', reg_lname: 'अंतिम नाम',
    reg_email: 'ईमेल पता', reg_sid: 'छात्र ID', reg_dept: 'विभाग',
    reg_prog: 'कार्यक्रम', reg_pass: 'पासवर्ड', reg_cpass: 'पासवर्ड पुष्टि करें',
    reg_terms: 'मैं सेवा की शर्तों और गोपनीयता नीति से सहमत हूँ', reg_btn: 'खाता बनाएँ',
    reg_switch: 'पहले से खाता है?',
    footer_tagline: 'छात्रों और शोधार्थियों के लिए भारत का प्रमुख शैक्षणिक अंतरिक्ष डेटा पोर्टल।',
    footer_portal: 'पोर्टल', footer_community: 'समुदाय', footer_account: 'खाता',
    footer_copy: '© 2025 VITSpace — VIT विश्वविद्यालय। सर्वाधिकार सुरक्षित।'
  },
  ta: {
    nav_home: 'முகப்பு', nav_about: 'பற்றி', nav_datasets: 'தரவுகள்', nav_tools: 'கருவிகள்',
    nav_missions: 'திட்டங்கள்', nav_gallery: 'காட்சியகம்', nav_research: 'ஆராய்ச்சி',
    nav_events: 'நிகழ்வுகள்', nav_forum: 'மன்றம்', nav_contact: 'தொடர்பு',
    hero_badge: '🚀 VIT பல்கலைக்கழக விண்வெளி தொகுப்பு',
    hero_title1: 'அண்டவெளியை', hero_title2: 'ஆராயுங்கள்',
    hero_sub: 'விண்வெளி அறிவியல் தரவுகள், பகுப்பாய்வு கருவிகள் மற்றும் ஆராய்ச்சி வளங்களுக்கான உங்கள் நுழைவாயில் — இளங்கலை/முதுகலை மாணவர்களுக்காக.',
    hero_btn1: 'தரவுகளை ஆராயுங்கள்', hero_btn2: 'கருவிகளை திறக்க',
    stat1: 'தரவுகள்', stat2: 'கருவிகள்', stat3: 'மாணவர்கள்', stat4: 'திட்டங்கள்',
    feat_title: 'VITSpace என்ன வழங்குகிறது', feat_sub: 'விண்வெளி அறிவியல் கல்வி மற்றும் ஆராய்ச்சிக்கான முழுமையான சூழல்',
    feat1_t: 'திறந்த தரவுகள்', feat1_p: 'NASA, ISRO, ESA தரவுகளை உங்கள் ஆராய்ச்சிக்கு பயன்படுத்துங்கள்.',
    feat2_t: 'பகுப்பாய்வு கருவிகள்', feat2_p: 'சுற்றுப்பாதை கணக்கீடு, நிற நிரை பகுப்பாய்விற்கான வலை கருவிகள்.',
    feat3_t: 'திட்ட காப்பகம்', feat3_p: 'வரலாற்று மற்றும் தற்போதைய விண்வெளி திட்டங்களை ஆழமாக ஆராயுங்கள்.',
    feat4_t: 'ஆராய்ச்சி மையம்', feat4_p: 'ஆராய்ச்சி கட்டுரைகளை சமர்ப்பிக்கவும், கண்டறியவும், ஒத்துழைக்கவும்.',
    feat5_t: 'விண்வெளி காட்சியகம்', feat5_p: 'Hubble, JWST மற்றும் தரைவழி வானோக்கியங்களின் அழகான படங்கள்.',
    feat6_t: 'நிகழ்வுகள் & ஹேக்கத்தான்', feat6_p: 'VIT நடத்தும் ஹேக்கத்தான்கள் மற்றும் பட்டறைகளில் கலந்துகொள்ளுங்கள்.',
    feat_explore: 'ஆராயுங்கள் →',
    quick_title: 'விரைவு அணுகல்',
    q1:'தரவுகள்', q2:'கருவிகள்', q3:'திட்டங்கள்', q4:'காட்சியகம்', q5:'ஆராய்ச்சி', q6:'மன்றம்', q7:'நிகழ்வுகள்', q8:'தொடர்பு',
    about_title: 'VITSpace பற்றி', about_sub: 'அடுத்த தலைமுறை விண்வெளி விஞ்ஞானிகளை வலுப்படுத்துதல்',
    about_mission_t: 'எங்கள் லட்சியம்', about_mission_p: 'VITSpace என்பது விண்வெளி தரவு மற்றும் மாணவர் ஆராய்ச்சியாளர்களுக்கு இடையில் உள்ள இடைவெளியை நிரப்பும் அர்ப்பணிக்கப்பட்ட கல்வி தொகுப்பு.',
    about_vision_t: 'எங்கள் தொலைநோக்கு', about_vision_p: 'இந்தியாவின் முக்கிய கல்வி விண்வெளி தரவு மையமாக மாறுவது — ஒவ்வொரு மாணவரும் விண்வெளி அறிவியலுக்கு பங்களிக்க தேவையான கருவிகளை பெற.',
    team_title: 'எங்கள் குழு',
    team_role1: 'ஆசிரியர் ஆலோசகர் — வான்வெளி துறை', team_role2: 'தரவு அறிவியல் தலைவர்',
    team_role3: 'தொகுப்பு உருவாக்குனர் — இறுதி ஆண்டு', team_role4: 'ஆராய்ச்சி ஒருங்கிணைப்பாளர்',
    timeline_title: 'சாதனைகள்',
    tl1: 'வான்வெளி துறையால் VITSpace திட்டமிடல்.', tl2: 'NASA திறந்த தரவிலிருந்து 500 தரவுகள் ஒருங்கிணைக்கப்பட்டன.',
    tl3: 'ISRO கூட்டாண்மை; சந்திரயான் தரவு சேர்க்கப்பட்டது.', tl4: '40+ இடைவினையாடும் கருவிகள் தொடங்கப்பட்டன.',
    tl5: '5000+ பதிவுசெய்த மாணவர்கள்; மும்மொழி இடைமுகம் தொடங்கப்பட்டது.',
    ds_title: 'விண்வெளி தரவுகள்', ds_sub: 'NASA, ISRO, ESA மற்றும் பலவற்றிலிருந்து தொகுக்கப்பட்டது',
    tag_all: 'அனைத்தும்', tag_solar: 'சூரியன்', tag_planetary: 'கோள்',
    tools_title: 'பகுப்பாய்வு கருவிகள்', tools_sub: 'விண்வெளி அறிவியல் கணக்கீட்டிற்கான இடைவினையாடும் கருவிகள்',
    tool1_t: 'சுற்றுப்பாதை கணக்கி', tool1_p: 'சுற்றுப்பாதை அளவுருக்களை கணக்கிடுங்கள்.',
    tool2_t: 'சூரிய ஓட்டம் குறியீடு', tool2_p: 'சூரியனிலிருந்து தூரத்தின் அடிப்படையில் சூரிய ஓட்டத்தை மதிப்பிடுங்கள்.',
    tool3_t: 'கருப்புடல் கதிர்வீச்சு', tool3_p: 'வீனின் விதி: நட்சத்திர வெப்பநிலைக்கு உச்ச அலைநீளம்.',
    tool4_t: 'விடுபடு வேகம்', tool4_p: 'எந்தவொரு வான்பொருளுக்கும் விடுபடு வேகத்தை கணக்கிடுங்கள்.',
    tool5_t: 'டாப்லர் மாற்றம்', tool5_p: 'ஒப்பியல் இயக்கத்தால் அதிர்வெண்/அலைநீளத்தை கணக்கிடுங்கள்.',
    tool6_t: 'ஹோமன் பரிமாற்றம்', tool6_p: 'இரண்டு வட்ட சுற்றுப்பாதைகளுக்கு Δv கணக்கிடுங்கள்.',
    missions_title: 'விண்வெளி திட்டங்கள்', missions_sub: 'கடந்த, நடப்பு மற்றும் எதிர்கால திட்டங்களின் காப்பகம்',
    gallery_title: 'விண்வெளி காட்சியகம்', gallery_sub: 'பிரபஞ்சம் முழுவதிலும் அழகான படங்கள்',
    g_nebula: 'நெபுலா', g_galaxy: 'விண்மீன் திரள்', g_planet: 'கோள்கள்', g_star: 'நட்சத்திரங்கள்',
    research_title: 'ஆராய்ச்சி மையம்', research_sub: 'விண்வெளி அறிவியல் ஆராய்ச்சியை கண்டறியுங்கள் மற்றும் பகிருங்கள்',
    r_submit_t: 'உங்கள் ஆராய்ச்சியை சமர்ப்பிக்கவும்', r_name: 'முழு பெயர்', r_email: 'மின்னஞ்சல்',
    r_title_f: 'கட்டுரை தலைப்பு', r_abstract: 'சுருக்கம்', r_category: 'வகை', r_btn: 'கட்டுரை சமர்ப்பிக்கவும்',
    events_title: 'நிகழ்வுகள் & ஹேக்கத்தான்', events_sub: 'VITSpace நிகழ்வுகளை புதுப்பித்த நிலையில் வையுங்கள்',
    ev_reg_t: 'நிகழ்வுக்கு பதிவு செய்யுங்கள்', ev_name: 'முழு பெயர்', ev_id: 'மாணவர் ID',
    ev_dept: 'துறை', ev_year: 'ஆண்டு', ev_event: 'நிகழ்வை தேர்ந்தெடுக்கவும்', ev_btn: 'இப்போது பதிவு செய்யுங்கள்',
    forum_title: 'சமுதாய மன்றம்', forum_sub: 'கேளுங்கள், விவாதியுங்கள் மற்றும் ஒத்துழைக்கவும்',
    forum_new_t: 'விவாதத்தை தொடங்குங்கள்', f_username: 'பயனர் பெயர்', f_topic: 'தலைப்பு',
    f_category: 'வகை', f_message: 'செய்தி', f_btn: 'விவாதத்தை பதிவிடவும்',
    contact_title: 'தொடர்பு கொள்ளுங்கள்', contact_sub: 'VITSpace குழுவை தொடர்பு கொள்ளுங்கள்',
    c_addr_t: 'முகவரி', c_addr: 'VIT பல்கலைக்கழகம், வேலூர், தமிழ்நாடு - 632014, இந்தியா',
    c_email_t: 'மின்னஞ்சல்', c_phone_t: 'தொலைபேசி', c_hours_t: 'பணி நேரம்',
    c_hours: 'திங்கள்–வெள்ளி: காலை 9 மணி – மாலை 6 மணி IST',
    c_form_t: 'செய்தி அனுப்புங்கள்', c_name: 'முழு பெயர்', c_email: 'மின்னஞ்சல் முகவரி',
    c_subject: 'பொருள்', c_type: 'வினவல் வகை', c_msg: 'செய்தி', c_btn: 'செய்தி அனுப்புங்கள்',
    c_opt1: 'தரவு அணுகல்', c_opt2: 'கருவி ஆதரவு', c_opt3: 'ஆராய்ச்சி ஒத்துழைப்பு',
    c_opt4: 'நிகழ்வு பதிவு', c_opt5: 'பொதுவான விசாரணை',
    faq_title: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
    login_title: 'மாணவர் உள்நுழைவு', login_id: 'மாணவர் ID / மின்னஞ்சல்', login_pass: 'கடவுச்சொல்',
    login_remember: 'என்னை நினைவில் வை', login_forgot: 'கடவுச்சொல் மறந்துவிட்டதா?', login_btn: 'உள்நுழைக',
    login_switch: 'கணக்கு இல்லையா?',
    reg_title: 'கணக்கு உருவாக்கவும்', reg_fname: 'முதல் பெயர்', reg_lname: 'கடைசி பெயர்',
    reg_email: 'மின்னஞ்சல் முகவரி', reg_sid: 'மாணவர் ID', reg_dept: 'துறை',
    reg_prog: 'நிரல்', reg_pass: 'கடவுச்சொல்', reg_cpass: 'கடவுச்சொல் உறுதிப்படுத்தவும்',
    reg_terms: 'சேவை விதிமுறைகள் மற்றும் தனியுரிமை கொள்கையை ஒப்புக்கொள்கிறேன்', reg_btn: 'கணக்கு உருவாக்கவும்',
    reg_switch: 'ஏற்கனவே கணக்கு உள்ளதா?',
    footer_tagline: 'மாணவர்கள் மற்றும் அறிஞர்களுக்கான இந்தியாவின் முக்கிய கல்வி விண்வெளி தரவு தொகுப்பு.',
    footer_portal: 'தொகுப்பு', footer_community: 'சமுதாயம்', footer_account: 'கணக்கு',
    footer_copy: '© 2025 VITSpace — VIT பல்கலைக்கழகம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
  }
};

/* ===================== APP STATE ===================== */
let currentLang = 'en';
let currentPage = 'home';
let currentMissionTab = 'isro';
let forumPosts = [];
let datasetsAll = [];

/* ===================== INIT ===================== */
document.addEventListener('DOMContentLoaded', () => {
  generateStars();
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
    animateStats();
  }, 2200);
  setupCursor();
  setupScrollHandlers();
  renderDatasets();
  renderMissions('isro');
  renderGallery('all');
  renderResearch();
  renderEvents();
  renderForum();
  renderFAQ();
  setLang('en');
});

/* ===================== STARS ===================== */
function generateStars() {
  const bg = document.getElementById('starsBg');
  for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*100}%;
      --dur:${2 + Math.random()*4}s;
      --del:${Math.random()*4}s;
      width:${Math.random() > 0.8 ? 3 : 2}px;
      height:${Math.random() > 0.8 ? 3 : 2}px;
      opacity:${0.3 + Math.random()*0.7};
    `;
    bg.appendChild(star);
  }
}

/* ===================== CUSTOM CURSOR ===================== */
function setupCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  document.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .feature-card, .quick-card, .dataset-card, .gallery-item, .team-card, .faq-q, .mission-card, .event-card, .forum-post, .research-card').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
}

/* ===================== SCROLL ===================== */
function setupScrollHandlers() {
  const scrollTop = document.getElementById('scrollTop');
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) scrollTop.classList.add('visible');
    else scrollTop.classList.remove('visible');
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  });
}
function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ===================== NAVIGATION ===================== */
function navigate(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) {
    target.classList.add('active');
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  document.querySelectorAll('.nav-link').forEach(a => {
    a.classList.remove('active');
    if (a.dataset.page === page) a.classList.add('active');
  });
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  nav.classList.toggle('open');
  ham.classList.toggle('open');
}

/* ===================== LANGUAGE ===================== */
function setLang(lang) {
  currentLang = lang;
  const data = LANG[lang];
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (data[key] !== undefined) el.textContent = data[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const map = { en: 0, hi: 1, ta: 2 };
  document.querySelectorAll('.lang-btn')[map[lang]].classList.add('active');
  document.documentElement.lang = lang;
  showToast(`Language: ${lang === 'en' ? 'English' : lang === 'hi' ? 'हिंदी' : 'தமிழ்'}`);
}

/* ===================== STATS COUNTER ===================== */
function animateStats() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = +el.dataset.target;
    let count = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      count = Math.min(count + step, target);
      el.textContent = Math.floor(count).toLocaleString() + (target > 999 ? '+' : '');
      if (count >= target) clearInterval(timer);
    }, 25);
  });
}

/* ===================== TOAST ===================== */
function showToast(msg, duration = 2500) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

/* ===================== DATASETS ===================== */
const DATASETS_DATA = [
  { id:1, agency:'nasa', title:'Hubble Space Telescope Archive', desc:'Full archive of HST observations across UV, visible and IR spectra. Includes 1.3M+ exposures.', size:'42 TB', format:'FITS', category:'solar', tags:['Hubble','Imaging','UV'] },
  { id:2, agency:'isro', title:'Chandrayaan-3 Terrain Mapping', desc:'High-resolution lunar surface terrain data from Pragyan rover LIBS and APXS instruments.', size:'18 GB', format:'CSV/HDF5', category:'planetary', tags:['Moon','Terrain','ISRO'] },
  { id:3, agency:'nasa', title:'Mars Climate Database', desc:'Atmospheric data from MRO and MAVEN including temperature, pressure, dust storm events.', size:'5.6 TB', format:'NetCDF', category:'planetary', tags:['Mars','Climate','MAVEN'] },
  { id:4, agency:'esa', title:'Gaia DR3 Stellar Catalog', desc:'Positions, parallaxes, and proper motions for 1.46 billion stars from ESA Gaia mission.', size:'600 GB', format:'CSV/VOTable', category:'solar', tags:['Stars','Parallax','Astrometry'] },
  { id:5, agency:'isro', title:'Astrosat X-Ray Observation Logs', desc:'X-ray binary and AGN observation data from Astrosat SXT and LAXPC instruments.', size:'120 GB', format:'FITS', category:'solar', tags:['X-Ray','Astrosat','Binary'] },
  { id:6, agency:'nasa', title:'JWST Deep Field Images', desc:'Early Release Science and GO programs data from JWST NIRCam and MIRI instruments.', size:'2.1 TB', format:'FITS', category:'solar', tags:['JWST','Infrared','Galaxy'] },
  { id:7, agency:'esa', title:'Rosetta Comet 67P Dataset', desc:'Cometary nucleus shape models, mass spectrometry, and dust measurements around 67P.', size:'890 MB', format:'CSV/Shape Model', category:'planetary', tags:['Comet','Rosetta','ESA'] },
  { id:8, agency:'nasa', title:'Solar Dynamics Observatory', desc:'EUV and UV full-disk solar images at 4096×4096 resolution, every 12 seconds since 2010.', size:'4.7 PB', format:'FITS', category:'solar', tags:['Sun','SDO','EUV'] },
  { id:9, agency:'isro', title:'MOM Mars Color Camera Data', desc:'Color images of Mars surface and atmospheric phenomena from India\'s Mars Orbiter Mission.', size:'340 GB', format:'FITS/PNG', category:'planetary', tags:['Mars','MOM','ISRO'] },
  { id:10, agency:'nasa', title:'Kepler/K2 Exoplanet Lightcurves', desc:'Photometric time-series data for 150,000 stars with confirmed and candidate exoplanets.', size:'16 TB', format:'FITS', category:'planetary', tags:['Exoplanet','Kepler','Photometry'] },
  { id:11, agency:'esa', title:'XMM-Newton X-Ray Survey', desc:'Deep X-ray surveys of galaxy clusters, AGN, and stellar coronae from XMM-Newton.', size:'3.2 TB', format:'FITS', category:'solar', tags:['X-Ray','XMM','Cluster'] },
  { id:12, agency:'nasa', title:'GRACE-FO Gravity Field', desc:'Earth gravity field measurements for ice sheet monitoring and ocean circulation analysis.', size:'45 GB', format:'NetCDF/Binary', category:'planetary', tags:['Earth','Gravity','Climate'] },
];
datasetsAll = [...DATASETS_DATA];
let activeTag = 'all';

function renderDatasets(data = datasetsAll) {
  const grid = document.getElementById('datasetsGrid');
  if (!grid) return;
  grid.innerHTML = data.map(d => `
    <div class="dataset-card" data-agency="${d.agency}">
      <div class="ds-agency ds-${d.agency}">${d.agency.toUpperCase()}</div>
      <h3>${d.title}</h3>
      <p>${d.desc}</p>
      <div class="ds-meta"><span>📦 ${d.size}</span><span>📄 ${d.format}</span></div>
      <div class="ds-tag-list">${d.tags.map(t => `<span class="ds-tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
}

function filterDatasets() {
  const q = document.getElementById('dsSearch').value.toLowerCase();
  let filtered = DATASETS_DATA.filter(d => {
    const matchTag = activeTag === 'all' || d.agency === activeTag || d.category === activeTag;
    const matchQ = !q || d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q) || d.tags.some(t => t.toLowerCase().includes(q));
    return matchTag && matchQ;
  });
  renderDatasets(filtered);
}

function filterByTag(tag, el) {
  activeTag = tag;
  document.querySelectorAll('#dsTags .tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  filterDatasets();
}

/* ===================== TOOLS ===================== */
const G = 6.674e-11, EARTH_MASS = 5.972e24, EARTH_RADIUS = 6371000, MU_EARTH = 3.986e14;

function calcOrbit() {
  const alt = parseFloat(document.getElementById('altInput').value) * 1000;
  const ecc = parseFloat(document.getElementById('eccInput').value);
  const r = EARTH_RADIUS + alt;
  const v = Math.sqrt(MU_EARTH / r);
  const T = 2 * Math.PI * Math.sqrt(Math.pow(r, 3) / MU_EARTH);
  const mins = Math.round(T / 60);
  document.getElementById('orbitResult').innerHTML =
    `🛸 Orbital Velocity: <b>${(v/1000).toFixed(3)} km/s</b><br>
     ⏱ Period: <b>${mins} min (${(mins/60).toFixed(2)} hr)</b><br>
     📏 Semi-major axis: <b>${(r/1000).toFixed(1)} km</b>`;
}

function calcSolar() {
  const au = parseFloat(document.getElementById('auInput').value);
  const L_sun = 3.828e26;
  const flux = L_sun / (4 * Math.PI * Math.pow(au * 1.496e11, 2));
  document.getElementById('solarResult').innerHTML =
    `☀️ Solar Flux: <b>${flux.toFixed(1)} W/m²</b><br>
     🌡 Equilibrium Temp: <b>${(278 * Math.pow(au, -0.5)).toFixed(1)} K</b>`;
}

function calcBlackbody() {
  const T = parseFloat(document.getElementById('tempInput').value);
  const b = 2.898e-3;
  const lambda_peak = b / T;
  let color = T < 3500 ? 'Red/Orange' : T < 5000 ? 'Orange/Yellow' : T < 7000 ? 'Yellow/White' : 'Blue/White';
  document.getElementById('blackbodyResult').innerHTML =
    `🌟 Peak Wavelength: <b>${(lambda_peak * 1e9).toFixed(1)} nm</b><br>
     🎨 Star Color: <b>${color}</b><br>
     🔆 Luminosity factor: <b>${(T/5778).toFixed(2)}× Sun</b>`;
}

function calcEscape() {
  const M = parseFloat(document.getElementById('massInput').value) * 1e24;
  const R = parseFloat(document.getElementById('radiusInput').value) * 1000;
  const ve = Math.sqrt(2 * G * M / R);
  document.getElementById('escapeResult').innerHTML =
    `🚀 Escape Velocity: <b>${(ve/1000).toFixed(3)} km/s</b><br>
     🌍 Ratio to Earth: <b>${(ve/11186).toFixed(2)}×</b>`;
}

function calcDoppler() {
  const f0 = parseFloat(document.getElementById('freqInput').value);
  const v = parseFloat(document.getElementById('velInput').value) * 1000;
  const c = 3e8;
  const f_obs = f0 * Math.sqrt((1 + v/c)/(1 - v/c));
  const shift = ((f_obs - f0)/f0 * 100).toFixed(4);
  document.getElementById('dopplerResult').innerHTML =
    `📡 Observed Freq: <b>${f_obs.toFixed(4)} Hz</b><br>
     ↔️ Shift: <b>${shift > 0 ? '+' : ''}${shift}%</b> (${shift > 0 ? 'Blueshift ←' : 'Redshift →'})`;
}

function calcHohmann() {
  const r1 = parseFloat(document.getElementById('r1Input').value) * 1000;
  const r2 = parseFloat(document.getElementById('r2Input').value) * 1000;
  const v1 = Math.sqrt(MU_EARTH / r1);
  const v2 = Math.sqrt(MU_EARTH / r2);
  const v_transfer1 = Math.sqrt(MU_EARTH * (2/r1 - 2/(r1+r2)));
  const v_transfer2 = Math.sqrt(MU_EARTH * (2/r2 - 2/(r1+r2)));
  const dv1 = Math.abs(v_transfer1 - v1) / 1000;
  const dv2 = Math.abs(v2 - v_transfer2) / 1000;
  const T_transfer = Math.PI * Math.sqrt(Math.pow((r1+r2)/2, 3) / MU_EARTH) / 60;
  document.getElementById('hohmannResult').innerHTML =
    `🔺 Δv₁: <b>${dv1.toFixed(3)} km/s</b><br>
     🔺 Δv₂: <b>${dv2.toFixed(3)} km/s</b><br>
     🔺 Total Δv: <b>${(dv1+dv2).toFixed(3)} km/s</b><br>
     ⏱ Transfer time: <b>${T_transfer.toFixed(1)} min</b>`;
}

/* ===================== MISSIONS ===================== */
const MISSIONS = {
  isro: [
    { name: 'Chandrayaan-3', status: 'completed', year: '2023', desc: 'Soft landing near lunar south pole. Pragyan rover deployed. LIBS and APXS instruments returned surface composition data.', type: 'Lunar' },
    { name: 'Aditya-L1', status: 'active', year: '2023', desc: 'India\'s first solar observatory at Sun-Earth L1 point, studying the solar corona and solar wind.', type: 'Solar' },
    { name: 'NISAR', status: 'planned', year: '2025', desc: 'Joint NASA-ISRO SAR mission for Earth observation, climate science, and disaster management.', type: 'Earth' },
    { name: 'Mangalyaan-2', status: 'planned', year: '2026', desc: 'Second Mars mission with orbiter and lander, building on MOM\'s success with advanced instruments.', type: 'Mars' },
    { name: 'Gaganyaan', status: 'active', year: '2024', desc: 'India\'s first crewed spaceflight program. Uncrewed test flights underway before crewed mission.', type: 'Human Spaceflight' },
    { name: 'Astrosat', status: 'active', year: '2015', desc: 'India\'s first dedicated multi-wavelength space observatory studying X-rays, UV and optical wavelengths.', type: 'Astronomy' },
  ],
  nasa: [
    { name: 'James Webb Space Telescope', status: 'active', year: '2021', desc: 'IR space telescope at L2. Imaging galaxies to 13.5 billion light years. Studying exoplanet atmospheres.', type: 'Astronomy' },
    { name: 'Artemis Program', status: 'active', year: '2022', desc: 'Return humans to the Moon with Artemis I, II, III missions. Gateway lunar station planned.', type: 'Lunar' },
    { name: 'Mars Sample Return', status: 'planned', year: '2030', desc: 'Joint NASA-ESA mission to retrieve samples collected by Perseverance rover from Mars surface.', type: 'Mars' },
    { name: 'Perseverance Rover', status: 'active', year: '2020', desc: 'Jezero Crater exploration. Caching samples, MOXIE oxygen production, Ingenuity helicopter.', type: 'Mars' },
    { name: 'Dragonfly', status: 'planned', year: '2034', desc: 'Rotorcraft lander mission to Titan, studying prebiotic chemistry on Saturn\'s moon.', type: 'Outer Planets' },
    { name: 'Parker Solar Probe', status: 'active', year: '2018', desc: 'Closest approach to Sun ever. Studying solar corona, solar wind origin and acceleration.', type: 'Solar' },
  ],
  esa: [
    { name: 'Euclid', status: 'active', year: '2023', desc: 'Dark matter and dark energy mapping mission. Survey of 2 billion galaxies across 10 billion light years.', type: 'Cosmology' },
    { name: 'Juice', status: 'active', year: '2023', desc: 'Jupiter Icy Moons Explorer. Studying Ganymede, Callisto, Europa and Jupiter\'s magnetosphere.', type: 'Outer Planets' },
    { name: 'LISA', status: 'planned', year: '2034', desc: 'Laser Interferometer Space Antenna — first space-based gravitational wave observatory.', type: 'Astronomy' },
    { name: 'EnVision', status: 'planned', year: '2031', desc: 'Venus orbiter for radar and spectroscopy mapping of Venusian surface and atmosphere.', type: 'Planetary' },
    { name: 'Gaia', status: 'active', year: '2013', desc: '3D map of Milky Way. Positions, velocities for 1.5 billion stars. DR3 released 2022.', type: 'Astrometry' },
    { name: 'Solar Orbiter', status: 'active', year: '2020', desc: 'Closest solar images ever captured. Revealed \'campfires\' — miniature solar flares.', type: 'Solar' },
  ]
};

function renderMissions(agency) {
  const grid = document.getElementById('missionsGrid');
  if (!grid) return;
  const data = MISSIONS[agency] || [];
  grid.innerHTML = data.map(m => `
    <div class="mission-card">
      <span class="mission-status status-${m.status}">${m.status.toUpperCase()}</span>
      <h3>${m.name}</h3>
      <p>${m.desc}</p>
      <div class="mission-meta">
        <span>🗓 ${m.year}</span>
        <span>🔭 ${m.type}</span>
      </div>
    </div>
  `).join('');
}

function switchMTab(agency, el) {
  currentMissionTab = agency;
  document.querySelectorAll('.m-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderMissions(agency);
}

/* ===================== GALLERY ===================== */
const GALLERY_ITEMS = [
  { emoji: '🌌', title: 'Pillars of Creation', desc: 'Eagle Nebula star formation region captured by JWST. Dense clouds of gas and dust where new stars are born. Located 6,500 light years away.', cat: 'nebula', source: 'JWST' },
  { emoji: '🌀', title: 'Whirlpool Galaxy (M51)', desc: 'Grand design spiral galaxy interacting with dwarf companion NGC 5194. Located 23 million light years in Canes Venatici.', cat: 'galaxy', source: 'Hubble' },
  { emoji: '🪐', title: 'Saturn\'s Ring System', desc: 'Cassini spacecraft image showing Saturn\'s iconic ring system and six moons in a single frame.', cat: 'planet', source: 'Cassini' },
  { emoji: '⭐', title: 'Eta Carinae Nebula', desc: 'Massive hypergiant star system with surrounding Homunculus Nebula. One of the most luminous known stars.', cat: 'star', source: 'Hubble' },
  { emoji: '🔴', title: 'Martian Valles Marineris', desc: 'The Grand Canyon of Mars, stretching 4000 km. Captured by ISRO\'s MOM Mars Color Camera in 2015.', cat: 'planet', source: 'ISRO MOM' },
  { emoji: '💫', title: 'Crab Nebula Pulsar', desc: 'Remnant of a supernova explosion observed in 1054 AD. Central pulsar spins 30 times per second.', cat: 'nebula', source: 'Chandra' },
  { emoji: '🌠', title: 'Andromeda Galaxy M31', desc: 'Our nearest large galactic neighbor at 2.5 million light years. Contains 1 trillion stars. Approaching Milky Way.', cat: 'galaxy', source: 'GALEX' },
  { emoji: '🌏', title: 'Earth from ISS', desc: 'The Western Ghats and Indian Peninsular coastline photographed by ISS astronauts at 400km altitude.', cat: 'planet', source: 'ISS' },
  { emoji: '✨', title: 'Globular Cluster Omega Centauri', desc: 'Largest globular cluster in Milky Way with 10 million stars packed into 150 light years.', cat: 'star', source: 'Hubble' },
  { emoji: '🌋', title: 'Io Volcanic Eruption', desc: 'Jupiter\'s moon Io showing an active volcanic eruption plume. Most geologically active body in the Solar System.', cat: 'planet', source: 'New Horizons' },
  { emoji: '🌟', title: 'Orion Nebula', desc: 'Stellar nursery 1,344 light years away in Orion. Thousands of young stars embedded in gas and dust.', cat: 'nebula', source: 'JWST' },
  { emoji: '🔵', title: 'Blue Straggler Stars', desc: 'Anomalous blue, hot stars in old open cluster NGC 188, appearing younger than surrounding stars.', cat: 'star', source: 'HST' },
];

let galleryFilter = 'all';
function renderGallery(cat) {
  galleryFilter = cat;
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  const items = cat === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.cat === cat);
  grid.innerHTML = items.map((g, i) => `
    <div class="gallery-item" onclick="openLightbox(${GALLERY_ITEMS.indexOf(g)})">
      <div class="gallery-img">${g.emoji}</div>
      <div class="gallery-overlay">
        <h4>${g.title}</h4>
        <p>📡 ${g.source}</p>
      </div>
    </div>
  `).join('');
}

function filterGallery(cat, el) {
  document.querySelectorAll('.gallery-filter .tag').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  renderGallery(cat);
}

function openLightbox(idx) {
  const item = GALLERY_ITEMS[idx];
  document.getElementById('lbImg').textContent = item.emoji;
  document.getElementById('lbTitle').textContent = item.title;
  document.getElementById('lbDesc').textContent = item.desc + ' | Source: ' + item.source;
  document.getElementById('lightbox').classList.add('open');
}
function closeLightbox() { document.getElementById('lightbox').classList.remove('open'); }

/* ===================== RESEARCH ===================== */
const RESEARCH_DATA = [
  { cat: 'Astrophysics', title: 'Deep Learning Classification of ISRO Astrosat Transient Events', author: 'Rahul Sharma', dept: 'Physics, VIT', year: 2024, abstract: 'Applied CNN-based classification on Astrosat LAXPC time-series data to identify X-ray transient events with 94% accuracy.' },
  { cat: 'Remote Sensing', title: 'SAR Image Analysis for Flood Mapping Using Sentinel-1 Data', author: 'Ananya Krishnaswamy', dept: 'ECE, VIT', year: 2024, abstract: 'Temporal SAR data analysis for rapid flood extent mapping over Indian river basins using unsupervised clustering.' },
  { cat: 'Planetary Science', title: 'Chandrayaan-3 LIBS Data Analysis of Lunar South Pole Composition', author: 'Vijay Nair', dept: 'Aerospace, VIT', year: 2023, abstract: 'Elemental composition analysis of lunar regolith near Shiv Shakti Point using LIBS spectral data from Pragyan rover.' },
  { cat: 'Solar Physics', title: 'Prediction of Geomagnetic Storms Using SDO EUV Data', author: 'Preethi Sundaram', dept: 'Physics, VIT', year: 2023, abstract: 'Machine learning model trained on SDO AIA images to predict geomagnetic storm onset 6 hours in advance.' },
  { cat: 'Astrobiology', title: 'Atmospheric Biosignature Detection in JWST Exoplanet Spectra', author: 'Arun Kumar', dept: 'Biotechnology, VIT', year: 2024, abstract: 'Statistical framework for detecting O₂, CH₄, and N₂O biosignatures in JWST NIRISS transmission spectra.' },
];

function renderResearch() {
  const list = document.getElementById('researchList');
  if (!list) return;
  list.innerHTML = RESEARCH_DATA.map(r => `
    <div class="research-card">
      <span class="rc-cat">${r.cat}</span>
      <h4>${r.title}</h4>
      <p>${r.abstract}</p>
      <div class="rc-meta">
        <span>👤 ${r.author}</span>
        <span>🏫 ${r.dept}</span>
        <span>📅 ${r.year}</span>
      </div>
    </div>
  `).join('');
}

function submitResearch(e) {
  e.preventDefault();
  const msg = document.getElementById('researchMsg');
  msg.className = 'form-msg success';
  msg.textContent = '✅ Your research has been submitted for review. You will receive confirmation via email.';
  e.target.reset();
  showToast('Research submitted successfully!');
}

/* ===================== EVENTS ===================== */
const EVENTS_DATA = [
  { title: 'SpaceHack 2025', date: 'April 3–7, 2026', desc: '48-hour space science hackathon open to all VIT students. Build tools using NASA or ISRO datasets. Prizes worth ₹2,00,000.', tag: 'Hackathon', emoji: '💻' },
  { title: 'ISRO Data Challenge', date: 'April 5, 2026', desc: 'Analyze Chandrayaan-3 LIBS data and propose novel findings. Best submissions win ISRO internship opportunity.', tag: 'Competition', emoji: '🛸' },
  { title: 'Astro Photography Contest', date: 'April 20, 2026', desc: 'Submit your best astrophotography from VIT Observatory or processed space imagery. Expert jury judging.', tag: 'Contest', emoji: '📷' },
  { title: 'Orbital Mechanics Workshop', date: 'May 3, 2026', desc: 'Hands-on workshop on Keplerian orbit simulation using Python and VITSpace tools. Certification provided.', tag: 'Workshop', emoji: '🪐' },
  { title: 'Satellite Design Bootcamp', date: 'May 15–17, 2026', desc: '3-day intensive on CubeSat design, thermal analysis, and power subsystem engineering with ISRO mentors.', tag: 'Bootcamp', emoji: '🔬' },
  { title: 'Space Science Symposium 2025', date: 'June 10, 2026', desc: 'Annual research symposium featuring student paper presentations, keynotes by ISRO scientists and VIT faculty.', tag: 'Symposium', emoji: '🎓' },
];

function renderEvents() {
  const grid = document.getElementById('eventsGrid');
  if (!grid) return;
  grid.innerHTML = EVENTS_DATA.map(ev => `
    <div class="event-card">
      <div class="ev-date">📅 ${ev.date}</div>
      <h3>${ev.emoji} ${ev.title}</h3>
      <p>${ev.desc}</p>
      <span class="ev-tag">${ev.tag}</span>
    </div>
  `).join('');
}

function registerEvent(e) {
  e.preventDefault();
  const msg = document.getElementById('evMsg');
  msg.className = 'form-msg success';
  msg.textContent = `✅ Registration confirmed for ${document.getElementById('evEvent').value}! Check your email for confirmation.`;
  e.target.reset();
  showToast('Event registration successful!');
}

/* ===================== FORUM ===================== */
const FORUM_SEED = [
  { user: 'ArunKumar91', topic: 'How to download Chandrayaan-3 LIBS data from VITSpace?', cat: 'Datasets Help', msg: 'I\'m trying to access the Chandrayaan-3 LIBS dataset for my semester project. Can someone guide me on how to filter by observation date?', time: '2h ago', replies: 5 },
  { user: 'NehaRajan', topic: 'Orbital Mechanics Tool — bug with eccentricity > 0.5', cat: 'Tools Support', msg: 'When I enter eccentricity values above 0.5 in the Orbit Calculator, the period shows as negative. Is this a known bug?', time: '5h ago', replies: 3 },
  { user: 'SpacePhysics_MSc', topic: 'Looking for collaborators on SDO data analysis project', cat: 'Research', msg: 'I\'m working on predicting solar flares using SDO AIA 171Å images with CNNs. Looking for 2-3 collaborators with ML experience.', time: '1d ago', replies: 12 },
  { user: 'SatelliteDesignClub', topic: 'SpaceHack 2025 team formation thread!', cat: 'Events', msg: 'Use this thread to find teammates for SpaceHack 2025! State your skills and what problem area you want to work on.', time: '2d ago', replies: 28 },
  { user: 'VikramAstro', topic: 'Best Python libraries for FITS file processing?', cat: 'General', msg: 'New to space data analysis. Which Python libraries do you recommend for reading and processing FITS files from HST?', time: '3d ago', replies: 9 },
];
forumPosts = [...FORUM_SEED];

function renderForum() {
  const el = document.getElementById('forumPosts');
  if (!el) return;
  el.innerHTML = forumPosts.map((p, i) => `
    <div class="forum-post">
      <div class="fp-header">
        <div class="fp-avatar">${p.user[0].toUpperCase()}</div>
        <div class="fp-meta">
          <h4>${p.user}</h4>
          <span>${p.time}</span>
        </div>
      </div>
      <span class="fp-cat">${p.cat}</span>
      <h4 style="margin:8px 0 4px;font-family:'Orbitron',monospace;font-size:0.85rem">${p.topic}</h4>
      <p>${p.msg}</p>
      <div class="fp-footer"><span>💬 ${p.replies} replies</span><span>👍 Like</span><span>↩️ Reply</span></div>
    </div>
  `).join('');
}

function postForum(e) {
  e.preventDefault();
  const newPost = {
    user: document.getElementById('fUser').value,
    topic: document.getElementById('fTopic').value,
    cat: document.getElementById('fCat').value,
    msg: document.getElementById('fMsg').value,
    time: 'Just now',
    replies: 0
  };
  forumPosts.unshift(newPost);
  renderForum();
  e.target.reset();
  showToast('Discussion posted successfully!');
  setupCursor();
}

/* ===================== FAQ ===================== */
const FAQ_DATA = [
  { q: 'Who can access VITSpace datasets?', a: 'VITSpace is open to all registered VIT University students (UG, PG, PhD) and affiliated faculty. Create a free account with your VIT email to access all datasets.' },
  { q: 'Are the datasets free to download?', a: 'Yes! All datasets on VITSpace are freely accessible to VIT community members. Some large datasets (>100GB) require a formal data access request form.' },
  { q: 'Can I submit my research paper to VITSpace?', a: 'Absolutely. Use the Research Hub page to submit your paper. All submissions are reviewed by faculty and appear in the public repository within 5–7 working days.' },
  { q: 'How do I register for events and hackathons?', a: 'Visit the Events page and fill out the registration form. You will receive a confirmation email with event details and joining links.' },
  { q: 'Is VITSpace affiliated with ISRO or NASA?', a: 'VITSpace is an academic portal hosted by VIT University. We aggregate and mirror publicly available datasets from ISRO, NASA, ESA and other agencies under their respective open data policies.' },
  { q: 'Can I use VITSpace tools for my final year project?', a: 'Yes! Our tools are designed specifically for student projects. You can cite VITSpace in your reports. Contact us for API access if you need to integrate tools into your application.' },
];

function renderFAQ() {
  const el = document.getElementById('faqList');
  if (!el) return;
  el.innerHTML = FAQ_DATA.map((f, i) => `
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFAQ(this)">
        <span>${f.q}</span>
        <span class="faq-arrow">▼</span>
      </div>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join('');
}

function toggleFAQ(el) {
  const ans = el.nextElementSibling;
  const isOpen = ans.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(q => q.classList.remove('open'));
  if (!isOpen) { ans.classList.add('open'); el.classList.add('open'); }
}

/* ===================== CONTACT FORM ===================== */
function sendContact(e) {
  e.preventDefault();
  const msg = document.getElementById('contactMsg');
  msg.className = 'form-msg success';
  msg.textContent = '✅ Message sent! Our team will respond within 1–2 working days.';
  e.target.reset();
  showToast('Message sent to VITSpace team!');
}

/* ===================== LOGIN / REGISTER ===================== */
function handleLogin(e) {
  e.preventDefault();
  const id = document.getElementById('loginId').value;
  const msg = document.getElementById('loginMsg');
  if (id.includes('@') || id.length >= 8) {
    msg.className = 'form-msg success';
    msg.textContent = `✅ Welcome back! Redirecting to your dashboard...`;
    showToast('Login successful! Welcome to VITSpace.');
    setTimeout(() => navigate('home'), 1500);
  } else {
    msg.className = 'form-msg error';
    msg.textContent = '❌ Invalid credentials. Please check your Student ID or email.';
  }
}

function handleRegister(e) {
  e.preventDefault();
  const pass = document.getElementById('regPass').value;
  const cpass = document.getElementById('regCpass').value;
  const msg = document.getElementById('regMsg');
  if (pass !== cpass) {
    msg.className = 'form-msg error';
    msg.textContent = '❌ Passwords do not match.';
    return;
  }
  if (pass.length < 8) {
    msg.className = 'form-msg error';
    msg.textContent = '❌ Password must be at least 8 characters.';
    return;
  }
  msg.className = 'form-msg success';
  msg.textContent = '✅ Account created! Please check your email to verify your account.';
  showToast('Registration successful! Welcome to VITSpace.');
  setTimeout(() => navigate('login'), 2000);
}

/* ===================== TICKER DUPLICATION ===================== */
(function() {
  const ticker = document.getElementById('ticker');
  if (ticker) {
    const orig = ticker.innerHTML;
    ticker.innerHTML = orig + orig;
  }
})();

/* ===================== KEYBOARD SHORTCUTS ===================== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeLightbox();
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  }
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault();
    navigate('datasets');
    document.getElementById('dsSearch')?.focus();
  }
});

/* ===================== INTERSECTION OBSERVER (fade-in on scroll) ===================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .team-card, .dataset-card, .event-card, .mission-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s, box-shadow 0.3s';
  observer.observe(el);
});

/* ===================== PREVENT RIGHT-CLICK (Optional UX hardening) ===================== */
// Uncomment if needed: document.addEventListener('contextmenu', e => e.preventDefault());

/* ===================== AUTO-REFRESH TICKER DATE ===================== */
function updateDate() {
  const now = new Date();
  const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = now.toLocaleDateString('en-IN', opts);
  // Could display in a date field if present
}
updateDate();
setInterval(updateDate, 60000);

console.log('%c🛸 VITSpace Portal Loaded', 'color:#00d4ff;font-family:monospace;font-size:16px;font-weight:bold;');
console.log('%cVIT University Space Data Portal v1.0', 'color:#8baab8;font-family:monospace;');