// ═══════════════════════════════════════════════════════════════
// WINDOW HERO — TEST LOCATION CONFIG
// ═══════════════════════════════════════════════════════════════

// ── FIREBASE CONFIG ────────────────────────────────────────────
// Get these values from Firebase Console → Project Settings
// After creating your Firebase project, fill these in.
window.FIREBASE_CONFIG = {
  projectId:  "wh-tech-tool-kit",   // e.g. 'window-hero-prod'
  locationId: 'test',              // unique ID for this location
  apiKey:     "AIzaSyD317Cb-4NUhvFY3_2RFD0xTT78nvdrdmk"       // from Firebase Console
};

// ── LOCATION CONFIG ────────────────────────────────────────────
window.LOCATION_CONFIG = {
  bizName:     'Window Hero Test',
  location:    'Test Environment',
  officeEmail: 'test@windowhero.com',
  pin:         '1234',
  reviewUrl:   '',
  tiers: [
    { id:'small',  name:'Small',  label:'Under 2,500 sq ft' },
    { id:'medium', name:'Medium', label:'2,501\u20133,500 sq ft' },
    { id:'large',  name:'Large',  label:'Over 3,500 sq ft'  }
  ],
  enabledServices: {
    windows:    true,
    intwindows: false,
    housewash:  true,
    pressure:   false,
    gutters:    true
  },
  enabledReferrals: {
    roofing:      true,
    siding:       true,
    paint:        true,
    gutterreplace:true
  },
  referralPartners: {
    roofing:      { name:'', title:'', phone:'', email:'', note:'' },
    siding:       { name:'', title:'', phone:'', email:'', note:'' },
    paint:        { name:'', title:'', phone:'', email:'', note:'' },
    gutterreplace:{ name:'', title:'', phone:'', email:'', note:'' }
  },
  customReferrals: [],
  pricingMode: 'flat',
  depositPct: 25,
  requireDeposit: true,
  sqftSizes: { small:2000, medium:3000, large:4500 },
  basePrices: {
    windows:    { small:300, medium:400, large:0 },
    intwindows: { small:200, medium:280, large:0 },
    housewash:  { small:250, medium:350, large:0 },
    pressure:   { small:200, medium:280, large:0 },
    gutters:    { small:150, medium:200, large:0 }
  },
  plans: [
    {
      id:'bronze', icon:'🥉', colorClass:'bronze',
      name:'Hero Club Bronze', tagline:'Essential home protection',
      visits:2, schedule:[
        { windows:true, intwindows:false, housewash:true,  pressure:false, gutters:false },
        { windows:true, intwindows:false, housewash:false, pressure:false, gutters:true  }
      ]
    },
    {
      id:'silver', icon:'🥈', colorClass:'silver',
      name:'Hero Club Silver', tagline:'Complete year-round care',
      visits:3, schedule:[
        { windows:true, intwindows:false, housewash:true,  pressure:false, gutters:false },
        { windows:true, intwindows:false, housewash:false, pressure:false, gutters:true  },
        { windows:true, intwindows:false, housewash:false, pressure:false, gutters:false }
      ]
    },
    {
      id:'gold', icon:'🥇', colorClass:'gold-tier',
      name:'Hero Club Gold', tagline:'Maximum home protection',
      visits:4, schedule:[
        { windows:true, intwindows:false, housewash:true,  pressure:false, gutters:false },
        { windows:true, intwindows:false, housewash:false, pressure:false, gutters:true  },
        { windows:true, intwindows:false, housewash:false, pressure:false, gutters:true  },
        { windows:true, intwindows:false, housewash:false, pressure:false, gutters:false }
      ]
    }
  ]
};
