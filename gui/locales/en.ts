export default {
  fields: {
    generic: 'This field',
    username: 'Username',
    password: 'Password',
    redirectUrl: 'Redirect URL',
    description: 'Description',
    oauth_client_id: 'OAuth Client ID',
    oauth_client_secret: 'OAuth Client Secret',
    dac_project_id: 'Google Device Access Console Project ID',
    name: 'Name',
    crontab: 'Crontab',
    last_run_at: 'Last Run At',
    last_end_at: 'Last End At',
    protocols: 'Protocols',
    identified_as: 'Type',
    resolution: 'Resolution',
    codecs_video: 'Video Codecs',
    codecs_audio: 'Audio Codecs',
    room: 'Room',
    status: 'Status',
    process_id: 'Process ID',
    stream_ready: 'Streaming',
    stream_uptime: 'Up Time',
    stream_track_count: 'Track Count',
    stream_consumer_count: 'Consumer Count',
    stream_data_rx: 'Data Received',
    stream_data_tx: 'Data Sent',
    mtx_path: 'Path',
    is_enabled: 'Enabled',
    can_login: 'Can Login',
  },
  actions: {
    login: 'Log In',
    add: 'Add',
    delete: 'Delete',
    authorize: 'Authorize',
    manage: 'Manage',
    run: 'Run',
    listUrls: 'List URLs',
    save: 'Save',
    disable: 'Disable',
    enable: 'Enable',
  },
  validation: {
    bad: 'The value is not a valid {label}',
    notAFile: 'Please select {label}',
    tooManyFiles: 'Please select only 1 file',
    fileTooLarge: 'The file you have selected is too large',
    invalidFileType: 'The file you have selected is not an acceptable file type',
    fileTypeNotAccepted: 'The file you have selected is not an acceptable file type',
    invalid: 'Please enter your {label}',
    required: 'Please enter your {label}',
    requiredSelection: 'Please choose a {label}',
    requiredUpload: 'Please select {label}',
    email: 'Please enter a valid email address',
    min: 'Your {label} must be at least {min} characters long',
    characters: 'The {label} you have input contains invalid characters',
    invalidRsaId: 'Please enter a valid {label}',
    country: 'Please choose your country of residence',
    valid: 'Please enter a valid {label}',
    alternatives: {
      all: 'The value did not match all of the criteria.',
      any: 'No alternative was found to test against the input due to try criteria.',
      match:
        'No alternative matched the input due to specific matching rules for at least one of the alternatives.',
      one: 'The value matched more than one alternative schema.',
      types: 'The provided input did not match any of the allowed types.',
    },
    any: {
      custom: 'Please enter a valid {label}',
      default: 'Please contact support',
      failover: 'Please contact support',
      invalid: 'The value matched a value listed in the invalid values.',
      only: "Only some values were allowed, the input didn't match any of them.",
      ref: 'The input is not valid.',
      required: "A required value wasn't present.",
      unknown: "A value was present while it wasn't expected.",
    },
    boolean: {
      base: '{label} is required',
      accepted: 'You must accept the {label}',
    },
    phone: {
      invalid: 'Please enter a valid {label}',
      mobile: 'Please enter a valid mobile number',
    },
    string: {
      alphanum: '{label} contains characters that are not alphanumeric.',
      alpha: '{label} contains non-alphabetic characters.',
      base: '{label} is required',
      country: 'Please select a valid {label}',
      email: 'Please enter a valid email.',
      empty: '{label} cannot be empty.',
      length: '{label} is not of the required length.',
      max: '{label} is longer than the maximum allowed length.',
      min: '{label} is shorter than the minimum allowed length.',
      pattern: {
        base: '{label} contains invalid characters.',
        name: '{label} contains invalid characters.',
        invert: {
          base: '{label} contains invalid characters.',
          name: '{label} contains invalid characters.',
        },
      },
    },
  },
  countries: {
    ad: 'Andorra',
    ae: 'United Arab Emirates',
    af: 'Afghanistan',
    ag: 'Antigua and Barbuda',
    ai: 'Anguilla',
    al: 'Albania',
    am: 'Armenia',
    ao: 'Angola',
    aq: 'Antarctica',
    ar: 'Argentina',
    as: 'American Samoa',
    at: 'Austria',
    au: 'Australia',
    aw: 'Aruba',
    ax: 'Åland Islands',
    az: 'Azerbaijan',
    ba: 'Bosnia and Herzegovina',
    bb: 'Barbados',
    bd: 'Bangladesh',
    be: 'Belgium',
    bf: 'Burkina Faso',
    bg: 'Bulgaria',
    bh: 'Bahrain',
    bi: 'Burundi',
    bj: 'Benin',
    bl: 'Saint Barthélemy',
    bm: 'Bermuda',
    bn: 'Brunei Darussalam',
    bo: 'Bolivia, Plurinational State of',
    bq: 'Bonaire, Sint Eustatius and Saba',
    br: 'Brazil',
    bs: 'Bahamas',
    bt: 'Bhutan',
    bv: 'Bouvet Island',
    bw: 'Botswana',
    by: 'Belarus',
    bz: 'Belize',
    ca: 'Canada',
    cc: 'Cocos (Keeling) Islands',
    cd: 'Congo, Democratic Republic of the',
    cf: 'Central African Republic',
    cg: 'Congo',
    ch: 'Switzerland',
    ci: "Côte d'Ivoire",
    ck: 'Cook Islands',
    cl: 'Chile',
    cm: 'Cameroon',
    cn: 'China',
    co: 'Colombia',
    cr: 'Costa Rica',
    cu: 'Cuba',
    cv: 'Cabo Verde',
    cw: 'Curaçao',
    cx: 'Christmas Island',
    cy: 'Cyprus',
    cz: 'Czechia',
    de: 'Germany',
    dj: 'Djibouti',
    dk: 'Denmark',
    dm: 'Dominica',
    do: 'Dominican Republic',
    dz: 'Algeria',
    ec: 'Ecuador',
    ee: 'Estonia',
    eg: 'Egypt',
    eh: 'Western Sahara',
    er: 'Eritrea',
    es: 'Spain',
    et: 'Ethiopia',
    fi: 'Finland',
    fj: 'Fiji',
    fk: 'Falkland Islands (Malvinas)',
    fm: 'Micronesia, Federated States of',
    fo: 'Faroe Islands',
    fr: 'France',
    ga: 'Gabon',
    gb: 'United Kingdom',
    gd: 'Grenada',
    ge: 'Georgia',
    gf: 'French Guiana',
    gg: 'Guernsey',
    gh: 'Ghana',
    gi: 'Gibraltar',
    gl: 'Greenland',
    gm: 'Gambia',
    gn: 'Guinea',
    gp: 'Guadeloupe',
    gq: 'Equatorial Guinea',
    gr: 'Greece',
    gs: 'South Georgia and the South Sandwich Islands',
    gt: 'Guatemala',
    gu: 'Guam',
    gw: 'Guinea-Bissau',
    gy: 'Guyana',
    hk: 'Hong Kong',
    hm: 'Heard Island and McDonald Islands',
    hn: 'Honduras',
    hr: 'Croatia',
    ht: 'Haiti',
    hu: 'Hungary',
    id: 'Indonesia',
    ie: 'Ireland',
    il: 'Israel',
    im: 'Isle of Man',
    in: 'India',
    io: 'British Indian Ocean Territory',
    iq: 'Iraq',
    ir: 'Iran, Islamic Republic of',
    is: 'Iceland',
    it: 'Italy',
    je: 'Jersey',
    jm: 'Jamaica',
    jo: 'Jordan',
    jp: 'Japan',
    ke: 'Kenya',
    kg: 'Kyrgyzstan',
    kh: 'Cambodia',
    ki: 'Kiribati',
    km: 'Comoros',
    kn: 'Saint Kitts and Nevis',
    kp: "Korea, Democratic People's Republic of",
    kr: 'Korea, Republic of',
    kw: 'Kuwait',
    ky: 'Cayman Islands',
    kz: 'Kazakhstan',
    la: "Lao People's Democratic Republic",
    lb: 'Lebanon',
    lc: 'Saint Lucia',
    li: 'Liechtenstein',
    lk: 'Sri Lanka',
    lr: 'Liberia',
    ls: 'Lesotho',
    lt: 'Lithuania',
    lu: 'Luxembourg',
    lv: 'Latvia',
    ly: 'Libya',
    ma: 'Morocco',
    mc: 'Monaco',
    md: 'Moldova, Republic of',
    me: 'Montenegro',
    mf: 'Saint Martin, (French part)',
    mg: 'Madagascar',
    mh: 'Marshall Islands',
    mk: 'North Macedonia',
    ml: 'Mali',
    mm: 'Myanmar',
    mn: 'Mongolia',
    mo: 'Macao',
    mp: 'Northern Mariana Islands',
    mq: 'Martinique',
    mr: 'Mauritania',
    ms: 'Montserrat',
    mt: 'Malta',
    mu: 'Mauritius',
    mv: 'Maldives',
    mw: 'Malawi',
    mx: 'Mexico',
    my: 'Malaysia',
    mz: 'Mozambique',
    na: 'Namibia',
    nc: 'New Caledonia',
    ne: 'Niger',
    nf: 'Norfolk Island',
    ng: 'Nigeria',
    ni: 'Nicaragua',
    nl: 'Netherlands',
    no: 'Norway',
    np: 'Nepal',
    nr: 'Nauru',
    nu: 'Niue',
    nz: 'New Zealand',
    om: 'Oman',
    pa: 'Panama',
    pe: 'Peru',
    pf: 'French Polynesia',
    pg: 'Papua New Guinea',
    ph: 'Philippines',
    pk: 'Pakistan',
    pl: 'Poland',
    pm: 'Saint Pierre and Miquelon',
    pn: 'Pitcairn',
    pr: 'Puerto Rico',
    ps: 'Palestine, State of',
    pt: 'Portugal',
    pw: 'Palau',
    py: 'Paraguay',
    qa: 'Qatar',
    re: 'Réunion',
    ro: 'Romania',
    rs: 'Serbia',
    ru: 'Russian Federation',
    rw: 'Rwanda',
    sa: 'Saudi Arabia',
    sb: 'Solomon Islands',
    sc: 'Seychelles',
    sd: 'Sudan',
    se: 'Sweden',
    sg: 'Singapore',
    sh: 'Saint Helena, Ascension and Tristan da Cunha',
    si: 'Slovenia',
    sj: 'Svalbard and Jan Mayen',
    sk: 'Slovakia',
    sl: 'Sierra Leone',
    sm: 'San Marino',
    sn: 'Senegal',
    so: 'Somalia',
    sr: 'Suriname',
    ss: 'South Sudan',
    st: 'Sao Tome and Principe',
    sv: 'El Salvador',
    sx: 'Sint Maarten, (Dutch part)',
    sy: 'Syrian Arab Republic',
    sz: 'Eswatini',
    tc: 'Turks and Caicos Islands',
    td: 'Chad',
    tf: 'French Southern Territories',
    tg: 'Togo',
    th: 'Thailand',
    tj: 'Tajikistan',
    tk: 'Tokelau',
    tl: 'Timor-Leste',
    tm: 'Turkmenistan',
    tn: 'Tunisia',
    to: 'Tonga',
    tr: 'Turkey',
    tt: 'Trinidad and Tobago',
    tv: 'Tuvalu',
    tw: 'Taiwan',
    tz: 'Tanzania, United Republic of',
    ua: 'Ukraine',
    ug: 'Uganda',
    um: 'United States Minor Outlying Islands',
    us: 'United States',
    uy: 'Uruguay',
    uz: 'Uzbekistan',
    va: 'Holy See',
    vc: 'Saint Vincent and the Grenadines',
    ve: 'Venezuela, Bolivarian Republic of',
    vg: 'Virgin Islands, British',
    vi: 'Virgin Islands, U.S.',
    vn: 'Viet Nam',
    vu: 'Vanuatu',
    wf: 'Wallis and Futuna',
    ws: 'Samoa',
    xx: 'Unknown',
    xk: 'Kosovo',
    ye: 'Yemen',
    yt: 'Mayotte',
    za: 'South Africa',
    zm: 'Zambia',
    zw: 'Zimbabwe',
  },
  models: {
    cameras: {
      single: 'a camera',
      plural: 'cameras',
    },
    country: {
      single: 'a country',
      plural: 'countries',
    },
    credentials: {
      single: 'credentials',
      plural: 'credentials',
    },
    cronjobs: {
      single: 'a cronjob',
      plural: 'cronjobs',
    },
    users: {
      single: 'a user',
      plural: 'users',
    },
  },
  components: {
    modelIndex: {
      placeholder: 'Search for {model}',
      loading: 'Loading {model}...',
      noData: 'No {model} available',
      noResults: 'No matching {model} found',
      itemsPerPage: '{model} per page',
      errors: {
        loadItems: 'Failed to load {model}',
      },
    },
  },
  errors: {
    login: {
      title: 'Login Failed',
    },
    add: {
      title: 'Creation Failed',
    },
    auth: {
      create: {
        loggedIn: 'You are already logged in',
      },
    },
    credentials: {
      authorize: {
        unexpected: {
          title: 'An unexpected error occurred',
          text: 'Check console for more information',
        },
        unhandled: {
          title: 'Unable to complete authorization',
        },
        malformed: 'The authorization data is malformed',
        invalidState: 'The authorization state is invalid',
      },
    },
    cameras: {
      update: {
        title: 'Failed to Update Camera',
        mtxPathIsRequired: 'The Camera Path must be set before the camera can be enabled',
        mtxPathAlreadyInUse: 'The Camera Path is already in use by another camera',
      },
    },
    users: {
      update: {
        cannotChangeOwnLoginAbility: 'You cannot change your own login ability',
      },
      delete: {
        cannotDeleteSystemUser: 'You cannot delete the system user',
        cannotDeleteSelf: 'You cannot delete yourself',
      },
    },
  },
  dialogs: {
    systemInfo: {
      title: 'System Information',
      cards: {
        app: 'Application Information',
        cpu: 'CPU',
        info: 'Host Information',
        logs: 'Logs',
        memory: 'Memory',
        network: 'Network',
        uptime: 'Uptime',
      },
    },
    credentials: {
      add: {
        title: 'Add Credentials',
      },
      authorize: {
        title: 'Authorizing Credentials',
        text: 'Do not close this page',
        postText: 'You will be redirected once the process is complete',
        success: 'Credentials authorized successfully',
      },
    },
    add: {
      success: {
        title: 'Created Successfully',
      },
    },
    update: {
      success: {
        title: 'Updated Successfully',
      },
    },
    cronjobs: {
      run: {
        success: {
          title: 'Job Ran Successfully',
        },
        failure: {
          title: 'Job Failed to Run',
        },
      },
    },
    cameras: {
      update: {
        title: 'Updated Camera Successfully',
      },
      urls: {
        title: 'Camera URLs',
        none: 'There are no streaming protocols enabled. Please check your configuration.',
        copy: {
          success: 'URL copied to clipboard',
          failure: 'Failed to copy URL to clipboard',
        },
      },
    },
    users: {
      add: {
        title: 'Create User',
      },
      update: {
        title: 'Update User',
        success: {
          title: 'User Updated Successfully',
        },
        failure: {
          title: 'Failed to Update User',
        },
      },
      delete: {
        success: {
          title: 'User Deleted Successfully',
        },
        failure: {
          title: 'Failed to Delete User',
        },
      },
    },
  },
  $vuetify: {
    badge: 'Badge',
    open: 'Open',
    close: 'Close',
    dismiss: 'Dismiss',
    confirmEdit: {
      ok: 'OK',
      cancel: 'Cancel',
    },
    dataIterator: {
      noResultsText: 'No matching records found',
      loadingText: 'Loading items...',
    },
    dataTable: {
      itemsPerPageText: 'Rows per page:',
      ariaLabel: {
        sortDescending: 'Sorted descending.',
        sortAscending: 'Sorted ascending.',
        sortNone: 'Not sorted.',
        activateNone: 'Activate to remove sorting.',
        activateDescending: 'Activate to sort descending.',
        activateAscending: 'Activate to sort ascending.',
      },
      sortBy: 'Sort by',
    },
    dataFooter: {
      itemsPerPageText: 'Items per page:',
      itemsPerPageAll: 'All',
      nextPage: 'Next page',
      prevPage: 'Previous page',
      firstPage: 'First page',
      lastPage: 'Last page',
      pageText: '{0}-{1} of {2}',
    },
    dateRangeInput: {
      divider: 'to',
    },
    datePicker: {
      itemsSelected: '{0} selected',
      range: {
        title: 'Select dates',
        header: 'Enter dates',
      },
      title: 'Select date',
      header: 'Enter date',
      input: {
        placeholder: 'Enter date',
      },
    },
    noDataText: 'No data available',
    carousel: {
      prev: 'Previous visual',
      next: 'Next visual',
      ariaLabel: {
        delimiter: 'Carousel slide {0} of {1}',
      },
    },
    calendar: {
      moreEvents: '{0} more',
      today: 'Today',
    },
    input: {
      clear: 'Clear {0}',
      prependAction: '{0} prepended action',
      appendAction: '{0} appended action',
      otp: 'Please enter OTP character {0}',
    },
    fileInput: {
      counter: '{0} files',
      counterSize: '{0} files ({1} in total)',
    },
    timePicker: {
      am: 'AM',
      pm: 'PM',
      title: 'Select Time',
    },
    pagination: {
      ariaLabel: {
        root: 'Pagination Navigation',
        next: 'Next page',
        previous: 'Previous page',
        page: 'Go to page {0}',
        currentPage: 'Page {0}, Current page',
        first: 'First page',
        last: 'Last page',
      },
    },
    stepper: {
      next: 'Next',
      prev: 'Previous',
    },
    rating: {
      ariaLabel: {
        item: 'Rating {0} of {1}',
      },
    },
    loading: 'Loading...',
    infiniteScroll: {
      loadMore: 'Load more',
      empty: 'No more',
    },
  },
  logs: {
    levels: {
      trace: 'Trace',
      debug: 'Debug',
      info: 'Info',
      warn: 'Warn',
      error: 'Error',
      fatal: 'Fatal',
      silent: 'Silent',
    },
  },
  pages: {
    'undefined': {
      nav: 'Unknown Page',
      title: 'NestMTX',
      description: 'NestMTX Control Panel',
      header: 'Unknown Page',
      subtitle: 'The page you are looking for does not exist.',
    },
    'index': {
      nav: 'Home',
      title: 'NestMTX',
      description: 'NestMTX Control Panel',
      header: 'Control Panel',
      subtitle: 'View and manage your NestMTX instance',
    },
    'credentials': {
      nav: 'Credentials',
      title: 'Credentials - NestMTX',
      description: 'Manage NestMTX Credentials',
      header: 'Credentials',
      subtitle: 'Manage your Google Cloud Platform and Google Device Access Console credentials',
    },
    'credentials-authorize': {
      nav: 'Credentials',
      title: 'Authorizing Credentials - NestMTX',
      description: 'Authorizing NestMTX Credentials',
      header: 'Authorizing Credentials',
      subtitle:
        'Authorizing your Google Cloud Platform and Google Device Access Console credentials',
    },
    'cronjobs': {
      nav: 'Cronjobs',
      title: 'Cronjobs - NestMTX',
      description: 'View & Manually Run System Cronjobs',
      header: 'Cronjobs',
      subtitle: 'View & Manually Run System Cronjobs',
    },
    'cameras': {
      nav: 'Cameras',
      title: 'Cameras - NestMTX',
      description: 'View & Manage Camera Streams',
      header: 'Cameras',
      subtitle: 'View & Manage Camera Streams',
    },
    'users': {
      nav: 'User Management',
      title: 'User Management - NestMTX',
      description: 'View & Manage NestMTX Users',
      header: 'User Management',
      subtitle: 'View & Manage NestMTX Users',
    },
  },
  credentials: {
    redirectUrl: {
      title: 'Google OAuth Redirection URL',
      cta: 'Please ensure that the following URL is added to your Google OAuth2.0 Redirect URIs',
      actions: {
        copy: {
          success: 'Redirect URL copied to clipboard',
          failure: 'Failed to copy redirect URL to clipboard',
        },
      },
      insecure: {
        title: 'Insecure Connection',
        message:
          'You are currently accessing NestMTX from an insecure connection. The redirect URL provided uses a secure protocol. If you have not configured your server to use HTTPS, you will need to manually change the address after redirection from {https} to {http}.',
      },
    },
  },
  index: {
    htop: {
      cpu: 'CPU Usage',
      memory: 'Memory Usage',
      processes: {
        title: 'NestMTX Processes',
        pid: 'Process ID',
        name: 'Process Name',
        cpu: 'CPU Usage',
        memory: 'Memory Usage',
        uptime: 'Uptime',
        empty: 'NestMTX has no running processes',
        actions: {
          start: 'Start',
          stop: 'Stop',
          restart: 'Restart',
          kill: 'Kill',
        },
      },
      paths: {
        title: 'NextMTX Paths',
        path: 'Path',
        ready: 'Streaming',
        uptime: 'Uptime',
        tracks: 'Track Count',
        dataRx: 'Data Received',
        dataTx: 'Data Sent',
        empty: 'NestMTX has no active paths',
      },
    },
  },
  camera: {
    status: {
      unconfigured: 'Not Configured',
      disabled: 'Disabled',
      dead: 'Not Streaming',
      stopped: 'Stopped',
      unavailable: 'Unavailable',
      starting: 'Starting',
      running: 'Running',
    },
    url: {
      hls: 'HLS',
      hls_m3u8: 'HLS M3U8',
      rtmp: 'RTMP',
      rtsp_tcp: 'RTSP (TCP)',
      rtsp_udp_rtcp: 'RTSP (UDP/RTCP)',
      rtsp_udp_rtp: 'RTSP (UDP/RTP)',
      srt: 'SRT',
      web_rtc: 'WebRTC',
    },
  },
  general: {
    yes: 'Yes',
    no: 'No',
  },
}
