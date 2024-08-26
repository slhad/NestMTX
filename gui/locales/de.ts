export default {
  fields: {
    generic: 'Dieses Feld',
    username: 'Benutzername',
    password: 'Passwort',
    redirectUrl: 'Umleitungs-URL',
    description: 'Beschreibung',
    oauth_client_id: 'OAuth-Client-ID',
    oauth_client_secret: 'OAuth-Client-Geheimnis',
    dac_project_id: 'Projekt-ID der Google Device Access Console',
    name: 'Name',
    crontab: 'Crontab',
    last_run_at: 'Letzter Lauf bei',
    last_end_at: 'Letztes Ende bei',
    protocols: 'Protokolle',
    identified_as: 'Typ',
    resolution: 'Auflösung',
    codecs_video: 'Video-Codecs',
    codecs_audio: 'Audio-Codecs',
    room: 'Zimmer',
    status: 'Status',
    process_id: 'Prozess-ID',
    stream_ready: 'Streaming',
    stream_uptime: 'Betriebszeit',
    stream_track_count: 'Anzahl der Titel',
    stream_consumer_count: 'Anzahl der Verbraucher',
    stream_data_rx: 'Empfangene Daten',
    stream_data_tx: 'Gesendete Daten',
    mtx_path: 'Weg',
    is_enabled: 'Ermöglicht',
    can_login: 'Kann mich anmelden',
  },
  actions: {
    login: 'Einloggen',
    add: 'Hinzufügen',
    delete: 'Löschen',
    authorize: 'Autorisieren',
    manage: 'Verwalten',
    run: 'Laufen',
    listUrls: 'URLs auflisten',
    save: 'Speichern',
    disable: 'Deaktivieren',
    enable: 'Aktivieren',
  },
  validation: {
    bad: 'Der Wert ist kein gültiges {label}',
    notAFile: 'Bitte wählen Sie {label}',
    tooManyFiles: 'Bitte wählen Sie nur 1 Datei aus',
    fileTooLarge: 'Die ausgewählte Datei ist zu groß',
    invalidFileType: 'Die von Ihnen ausgewählte Datei hat keinen zulässigen Dateityp',
    fileTypeNotAccepted: 'Die von Ihnen ausgewählte Datei hat keinen zulässigen Dateityp',
    invalid: 'Bitte geben Sie Ihre {label} ein',
    required: 'Bitte geben Sie Ihre {label} ein',
    requiredSelection: 'Bitte wählen Sie ein {label}',
    requiredUpload: 'Bitte wählen Sie {label}',
    email: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
    min: 'Ihr {label} muss mindestens {min} Zeichen lang sein',
    characters: 'Das von Ihnen eingegebene {label} enthält ungültige Zeichen',
    invalidRsaId: 'Bitte geben Sie eine gültige {label} ein',
    country: 'Bitte wählen Sie Ihr Wohnsitzland',
    valid: 'Bitte geben Sie eine gültige {label} ein',
    alternatives: {
      all: 'Der Wert entsprach nicht allen Kriterien.',
      any: 'Aufgrund der Try-Kriterien wurde keine Alternative zum Testen der Eingabe gefunden.',
      match:
        'Aufgrund spezifischer Übereinstimmungsregeln für mindestens eine der Alternativen stimmte keine Alternative mit der Eingabe überein.',
      one: 'Der Wert stimmte mit mehr als einem alternativen Schema überein.',
      types: 'Die angegebene Eingabe stimmte mit keinem der zulässigen Typen überein.',
    },
    any: {
      custom: 'Bitte geben Sie eine gültige {label} ein',
      default: 'Bitte kontaktiere den Support',
      failover: 'Bitte kontaktiere den Support',
      invalid: 'Der Wert stimmte mit einem in den ungültigen Werten aufgeführten Wert überein.',
      only: 'Es waren nur einige Werte zulässig, die Eingabe stimmte mit keinem davon überein.',
      ref: 'Die Eingabe ist ungültig.',
      required: 'Ein erforderlicher Wert war nicht vorhanden.',
      unknown: 'Ein Wert war vorhanden, obwohl er nicht erwartet wurde.',
    },
    boolean: {
      base: '{label} ist erforderlich',
      accepted: 'Sie müssen die {label} akzeptieren.',
    },
    phone: {
      invalid: 'Bitte geben Sie eine gültige {label} ein',
      mobile: 'Bitte geben Sie eine gültige Handynummer ein',
    },
    string: {
      alphanum: '{label} enthält Zeichen, die nicht alphanumerisch sind.',
      alpha: '{label} enthält nicht-alphabetische Zeichen.',
      base: '{label} ist erforderlich',
      country: 'Bitte wählen Sie ein gültiges {label}',
      email: 'Bitte geben Sie eine gültige E-Mail ein.',
      empty: '{label} darf nicht leer sein.',
      length: '{label} hat nicht die erforderliche Länge.',
      max: '{label} ist länger als die maximal zulässige Länge.',
      min: '{label} ist kürzer als die zulässige Mindestlänge.',
      pattern: {
        base: '{label} enthält ungültige Zeichen.',
        name: '{label} enthält ungültige Zeichen.',
        invert: {
          base: '{label} enthält ungültige Zeichen.',
          name: '{label} enthält ungültige Zeichen.',
        },
      },
    },
  },
  countries: {
    ad: 'Andorra',
    ae: 'Vereinigte Arabische Emirate',
    af: 'Afghanistan',
    ag: 'Antigua und Barbuda',
    ai: 'Anguilla',
    al: 'Albanien',
    am: 'Armenien',
    ao: 'Angola',
    aq: 'Antarktis',
    ar: 'Argentinien',
    as: 'Amerikanisch-Samoa',
    at: 'Österreich',
    au: 'Australien',
    aw: 'Aruba',
    ax: 'Åland-Inseln',
    az: 'Aserbaidschan',
    ba: 'Bosnien und Herzegowina',
    bb: 'Barbados',
    bd: 'Bangladesch',
    be: 'Belgien',
    bf: 'Burkina Faso',
    bg: 'Bulgarien',
    bh: 'Bahrain',
    bi: 'Burundi',
    bj: 'Benin',
    bl: 'St. Barthélemy',
    bm: 'Bermuda',
    bn: 'Brunei Darussalam',
    bo: 'Bolivien, Plurinationaler Staat',
    bq: 'Bonaire, Sint Eustatius und Saba',
    br: 'Brasilien',
    bs: 'Bahamas',
    bt: 'Bhutan',
    bv: 'Bouvetinsel',
    bw: 'Botswana',
    by: 'Weißrussland',
    bz: 'Belize',
    ca: 'Kanada',
    cc: 'Kokosinseln (Keelinginseln)',
    cd: 'Kongo, Demokratische Republik',
    cf: 'Zentralafrikanische Republik',
    cg: 'Kongo',
    ch: 'Schweiz',
    ci: 'Elfenbeinküste',
    ck: 'Cookinseln',
    cl: 'Chile',
    cm: 'Kamerun',
    cn: 'China',
    co: 'Kolumbien',
    cr: 'Costa Rica',
    cu: 'Kuba',
    cv: 'Kap Verde',
    cw: 'Curaçao',
    cx: 'Weihnachtsinsel',
    cy: 'Zypern',
    cz: 'Tschechien',
    de: 'Deutschland',
    dj: 'Dschibuti',
    dk: 'Dänemark',
    dm: 'Dominica',
    do: 'Dominikanische Republik',
    dz: 'Algerien',
    ec: 'Ecuador',
    ee: 'Estland',
    eg: 'Ägypten',
    eh: 'Westsahara',
    er: 'Eritrea',
    es: 'Spanien',
    et: 'Äthiopien',
    fi: 'Finnland',
    fj: 'Fidschi',
    fk: 'Falklandinseln (Malvinas)',
    fm: 'Mikronesien, Föderierte Staaten von',
    fo: 'Färöer Inseln',
    fr: 'Frankreich',
    ga: 'Gabun',
    gb: 'Vereinigtes Königreich',
    gd: 'Grenada',
    ge: 'Georgia',
    gf: 'Französisch-Guayana',
    gg: 'Guernsey',
    gh: 'Ghana',
    gi: 'Gibraltar',
    gl: 'Grönland',
    gm: 'Gambia',
    gn: 'Guinea',
    gp: 'Guadeloupe',
    gq: 'Äquatorialguinea',
    gr: 'Griechenland',
    gs: 'Südgeorgien und die Südlichen Sandwichinseln',
    gt: 'Guatemala',
    gu: 'Guam',
    gw: 'Guinea-Bissau',
    gy: 'Guyana',
    hk: 'Hongkong',
    hm: 'Heard Island und McDonald Islands',
    hn: 'Honduras',
    hr: 'Kroatien',
    ht: 'Haiti',
    hu: 'Ungarn',
    id: 'Indonesien',
    ie: 'Irland',
    il: 'Israel',
    im: 'Isle of Man',
    in: 'Indien',
    io: 'Britisches Territorium im Indischen Ozean',
    iq: 'Irak',
    ir: 'Iran, Islamische Republik',
    is: 'Island',
    it: 'Italien',
    je: 'Jersey',
    jm: 'Jamaika',
    jo: 'Jordanien',
    jp: 'Japan',
    ke: 'Kenia',
    kg: 'Kirgisistan',
    kh: 'Kambodscha',
    ki: 'Kiribati',
    km: 'Komoren',
    kn: 'St. Kitts und Nevis',
    kp: 'Korea, Demokratische Volksrepublik',
    kr: 'Korea, Republik',
    kw: 'Kuwait',
    ky: 'Cayman-Inseln',
    kz: 'Kasachstan',
    la: 'Demokratische Volksrepublik Laos',
    lb: 'Libanon',
    lc: 'St. Lucia',
    li: 'Liechtenstein',
    lk: 'Sri Lanka',
    lr: 'Liberia',
    ls: 'Lesotho',
    lt: 'Litauen',
    lu: 'Luxemburg',
    lv: 'Lettland',
    ly: 'Libyen',
    ma: 'Marokko',
    mc: 'Monaco',
    md: 'Moldawien, Republik',
    me: 'Montenegro',
    mf: 'Saint Martin (französischer Teil)',
    mg: 'Madagaskar',
    mh: 'Marshallinseln',
    mk: 'Nordmazedonien',
    ml: 'Das hatten sie',
    mm: 'Myanmar',
    mn: 'Mongolei',
    mo: 'Macau',
    mp: 'Nördliche Marianen',
    mq: 'Martinique',
    mr: 'Mauretanien',
    ms: 'Montserrat',
    mt: 'Malta',
    mu: 'Mauritius',
    mv: 'Malediven',
    mw: 'Malawi',
    mx: 'Mexiko',
    my: 'Malaysia',
    mz: 'Mosambik',
    na: 'Namibia',
    nc: 'Neukaledonien',
    ne: 'Niger',
    nf: 'Norfolkinsel',
    ng: 'Nigeria',
    ni: 'Nicaragua',
    nl: 'Niederlande',
    no: 'Norwegen',
    np: 'Nepal',
    nr: 'Nauru',
    nu: 'Niue',
    nz: 'Neuseeland',
    om: 'Mein eigenes',
    pa: 'Panama',
    pe: 'Peru',
    pf: 'Französisch-Polynesien',
    pg: 'Papua-Neuguinea',
    ph: 'Philippinen',
    pk: 'Pakistan',
    pl: 'Polen',
    pm: 'Saint-Pierre und Miquelon',
    pn: 'Pitcairn',
    pr: 'Puerto Rico',
    ps: 'Palästina, Staat',
    pt: 'Portugal',
    pw: 'Palast',
    py: 'Paraguay',
    qa: 'Katar',
    re: 'Treffen',
    ro: 'Rumänien',
    rs: 'Serbien',
    ru: 'Russische Föderation',
    rw: 'Ruanda',
    sa: 'Saudi-Arabien',
    sb: 'Salomon-Inseln',
    sc: 'Seychellen',
    sd: 'Sudan',
    se: 'Schweden',
    sg: 'Singapur',
    sh: 'St. Helena, Ascension und Tristan da Cunha',
    si: 'Slowenien',
    sj: 'Spitzbergen und Jan Mayen',
    sk: 'Slowakei',
    sl: 'Sierra Leone',
    sm: 'San Marino',
    sn: 'Senegal',
    so: 'Somalia',
    sr: 'Suriname',
    ss: 'Südsudan',
    st: 'São Tomé und Príncipe',
    sv: 'El Salvador',
    sx: 'Sint Maarten (niederländischer Teil)',
    sy: 'Arabische Republik Syrien',
    sz: 'Im Swat',
    tc: 'Turks- und Caicosinseln',
    td: 'Tschad',
    tf: 'Französische Südgebiete',
    tg: 'Togo',
    th: 'Thailand',
    tj: 'Tadschikistan',
    tk: 'Tokelau',
    tl: 'Timor-Leste',
    tm: 'Turkmenistan',
    tn: 'Tunesien',
    to: 'Angekommen',
    tr: 'Truthahn',
    tt: 'Trinidad und Tobago',
    tv: 'Tuvalu',
    tw: 'Taiwan',
    tz: 'Tansania, Vereinigte Republik',
    ua: 'Ukraine',
    ug: 'Uganda',
    um: 'Kleinere abgelegene Inseln der Vereinigten Staaten',
    us: 'Vereinigte Staaten',
    uy: 'Uruguay',
    uz: 'Usbekistan',
    va: 'Heiliger Stuhl',
    vc: 'St. Vincent und die Grenadinen',
    ve: 'Venezuela, Bolivarische Republik',
    vg: 'Britische Jungferninseln',
    vi: 'Jungferninseln, USA',
    vn: 'Vietnam',
    vu: 'Vanuatu',
    wf: 'Wallis und Futuna',
    ws: 'Samoa',
    xx: 'Unbekannt',
    xk: 'Kosovo',
    ye: 'Jemen',
    yt: 'Mayotte',
    za: 'Südafrika',
    zm: 'Sambia',
    zw: 'Simbabwe',
  },
  models: {
    cameras: {
      single: 'eine Kamera',
      plural: 'Kameras',
    },
    country: {
      single: 'ein Land',
      plural: 'Länder',
    },
    credentials: {
      single: 'Anmeldeinformationen',
      plural: 'Anmeldeinformationen',
    },
    cronjobs: {
      single: 'ein Cronjob',
      plural: 'Cronjobs',
    },
    users: {
      single: 'ein Benutzer',
      plural: 'Benutzer',
    },
  },
  components: {
    modelIndex: {
      placeholder: 'Suche nach {model}',
      loading: 'Wird geladen {model}...',
      noData: 'Keine {model} verfügbar',
      noResults: 'Keine passenden {model} gefunden',
      itemsPerPage: '{model} pro Seite',
      errors: {
        loadItems: '{model} konnte nicht geladen werden',
      },
    },
  },
  errors: {
    login: {
      title: 'Fehler bei der Anmeldung',
    },
    add: {
      title: 'Erstellung fehlgeschlagen',
    },
    auth: {
      create: {
        loggedIn: 'Sie sind bereits angemeldet',
      },
    },
    credentials: {
      authorize: {
        unexpected: {
          title: 'Ein unerwarteter Fehler ist aufgetreten',
          text: 'Weitere Informationen finden Sie in der Konsole.',
        },
        unhandled: {
          title: 'Die Autorisierung kann nicht abgeschlossen werden.',
        },
        malformed: 'Die Autorisierungsdaten sind fehlerhaft',
        invalidState: 'Der Autorisierungsstatus ist ungültig',
      },
    },
    cameras: {
      update: {
        title: 'Aktualisierung der Kamera fehlgeschlagen',
        mtxPathIsRequired:
          'Der Kamerapfad muss festgelegt werden, bevor die Kamera aktiviert werden kann',
        mtxPathAlreadyInUse: 'Der Kamerapfad wird bereits von einer anderen Kamera verwendet',
      },
    },
    users: {
      update: {
        cannotChangeOwnLoginAbility: 'Sie können Ihre eigenen Anmeldeberechtigungen nicht ändern',
      },
      delete: {
        cannotDeleteSystemUser: 'Sie können den Systembenutzer nicht löschen',
        cannotDeleteSelf: 'Du kannst dich nicht selbst löschen',
      },
    },
  },
  dialogs: {
    systemInfo: {
      title: 'Systeminformationen',
      cards: {
        app: 'Informationen zur Anwendung',
        cpu: 'CPU',
        info: 'Informationen zum Gastgeber',
        logs: 'Protokolle',
        memory: 'Erinnerung',
        network: 'Netzwerk',
        uptime: 'Betriebszeit',
      },
    },
    credentials: {
      add: {
        title: 'Anmeldeinformationen hinzufügen',
      },
      authorize: {
        title: 'Autorisierungsberechtigungen',
        text: 'Diese Seite nicht schließen',
        postText: 'Sie werden weitergeleitet, sobald der Vorgang abgeschlossen ist',
        success: 'Anmeldeinformationen erfolgreich autorisiert',
      },
    },
    add: {
      success: {
        title: 'Erfolgreich erstellt',
      },
    },
    update: {
      success: {
        title: 'Erfolgreich aktualisiert',
      },
    },
    cronjobs: {
      run: {
        success: {
          title: 'Job wurde erfolgreich ausgeführt',
        },
        failure: {
          title: 'Der Job konnte nicht ausgeführt werden',
        },
      },
    },
    cameras: {
      update: {
        title: 'Kamera erfolgreich aktualisiert',
      },
      urls: {
        title: 'Kamera-URLs',
        none: 'Es sind keine Streaming-Protokolle aktiviert. Bitte überprüfen Sie Ihre Konfiguration.',
        copy: {
          success: 'URL in die Zwischenablage kopiert',
          failure: 'URL konnte nicht in die Zwischenablage kopiert werden',
        },
      },
    },
    users: {
      add: {
        title: 'Benutzer erstellen',
      },
      update: {
        title: 'Benutzer aktualisieren',
        success: {
          title: 'Benutzer erfolgreich aktualisiert',
        },
        failure: {
          title: 'Benutzer konnte nicht aktualisiert werden',
        },
      },
      delete: {
        success: {
          title: 'Benutzer erfolgreich gelöscht',
        },
        failure: {
          title: 'Benutzer konnte nicht gelöscht werden',
        },
      },
    },
  },
  $vuetify: {
    badge: 'Abzeichen',
    open: 'Offen',
    close: 'Schließen',
    dismiss: 'Zurückweisen',
    confirmEdit: {
      ok: 'OK',
      cancel: 'Stornieren',
    },
    dataIterator: {
      noResultsText: 'Keine übereinstimmenden Datensätze gefunden',
      loadingText: 'Elemente werden geladen …',
    },
    dataTable: {
      itemsPerPageText: 'Zeilen pro Seite:',
      ariaLabel: {
        sortDescending: 'Absteigend sortiert.',
        sortAscending: 'Aufsteigend sortiert.',
        sortNone: 'Nicht sortiert.',
        activateNone: 'Aktivieren, um die Sortierung aufzuheben.',
        activateDescending: 'Aktivieren Sie diese Option, um absteigend zu sortieren.',
        activateAscending: 'Aktivieren Sie diese Option, um aufsteigend zu sortieren.',
      },
      sortBy: 'Sortieren nach',
    },
    dataFooter: {
      itemsPerPageText: 'Elemente pro Seite:',
      itemsPerPageAll: 'Alle',
      nextPage: 'Nächste Seite',
      prevPage: 'Vorherige Seite',
      firstPage: 'Erste Seite',
      lastPage: 'Letzte Seite',
      pageText: '{0}-{1} von {2}',
    },
    dateRangeInput: {
      divider: 'Zu',
    },
    datePicker: {
      itemsSelected: '{0} ausgewählt',
      range: {
        title: 'Datum wählen',
        header: 'Daten eingeben',
      },
      title: 'Datum wählen',
      header: 'Datum eingeben',
      input: {
        placeholder: 'Datum eingeben',
      },
    },
    noDataText: 'Keine Daten verfügbar',
    carousel: {
      prev: 'Vorheriges Bild',
      next: 'Nächstes Bild',
      ariaLabel: {
        delimiter: 'Karussellfolie {0} von {1}',
      },
    },
    calendar: {
      moreEvents: '{0} mehr',
      today: 'Heute',
    },
    input: {
      clear: 'Löschen {0}',
      prependAction: '{0} vorangestellte Aktion',
      appendAction: '{0} angehängte Aktion',
      otp: 'Bitte geben Sie das OTP-Zeichen {0} ein.',
    },
    fileInput: {
      counter: '{0} Dateien',
      counterSize: '{0} Dateien (insgesamt {1})',
    },
    timePicker: {
      am: 'BIN',
      pm: 'PM',
      title: 'Wähle eine Uhrzeit',
    },
    pagination: {
      ariaLabel: {
        root: 'Seitennummerierung Navigation',
        next: 'Nächste Seite',
        previous: 'Vorherige Seite',
        page: 'Gehe zu Seite {0}',
        currentPage: 'Seite {0}, Aktuelle Seite',
        first: 'Erste Seite',
        last: 'Letzte Seite',
      },
    },
    stepper: {
      next: 'Nächste',
      prev: 'Vorherige',
    },
    rating: {
      ariaLabel: {
        item: 'Bewertung {0} von {1}',
      },
    },
    loading: 'Laden...',
    infiniteScroll: {
      loadMore: 'Mehr laden',
      empty: 'Nicht mehr',
    },
  },
  logs: {
    levels: {
      trace: 'Verfolgen',
      debug: 'Debuggen',
      info: 'Info',
      warn: 'Warnen',
      error: 'Fehler',
      fatal: 'Tödlich',
      silent: 'Still',
    },
  },
  pages: {
    'undefined': {
      nav: 'Unbekannte Seite',
      title: 'NestMTX',
      description: 'NestMTX-Systemsteuerung',
      header: 'Unbekannte Seite',
      subtitle: 'Die gesuchte Seite existiert nicht.',
    },
    'index': {
      nav: 'Heim',
      title: 'NestMTX',
      description: 'NestMTX-Systemsteuerung',
      header: 'Bedienfeld',
      subtitle: 'Anzeigen und Verwalten Ihrer NestMTX-Instanz',
    },
    'credentials': {
      nav: 'Qualifikationen',
      title: 'Anmeldeinformationen - NestMTX',
      description: 'NestMTX-Anmeldeinformationen verwalten',
      header: 'Qualifikationen',
      subtitle:
        'Verwalten Sie Ihre Anmeldeinformationen für die Google Cloud Platform und die Google Device Access Console',
    },
    'credentials-authorize': {
      nav: 'Qualifikationen',
      title: 'Autorisierungsberechtigungen - NestMTX',
      description: 'Autorisieren von NestMTX-Anmeldeinformationen',
      header: 'Autorisierungsberechtigungen',
      subtitle:
        'Autorisieren Ihrer Anmeldeinformationen für die Google Cloud Platform und die Google Device Access Console',
    },
    'cronjobs': {
      nav: 'Cronjobs',
      title: 'Cronjobs - NestMTX',
      description: 'System-Cronjobs anzeigen und manuell ausführen',
      header: 'Cronjobs',
      subtitle: 'System-Cronjobs anzeigen und manuell ausführen',
    },
    'cameras': {
      nav: 'Kameras',
      title: 'Kameras - NestMTX',
      description: 'Kamera-Streams anzeigen und verwalten',
      header: 'Kameras',
      subtitle: 'Kamera-Streams anzeigen und verwalten',
    },
    'users': {
      nav: 'Benutzerverwaltung',
      title: 'Benutzerverwaltung – NestMTX',
      description: 'NestMTX-Benutzer anzeigen und verwalten',
      header: 'Benutzerverwaltung',
      subtitle: 'NestMTX-Benutzer anzeigen und verwalten',
    },
  },
  credentials: {
    redirectUrl: {
      title: 'Google OAuth-Umleitungs-URL',
      cta: 'Bitte stellen Sie sicher, dass die folgende URL zu Ihren Google OAuth2.0-Umleitungs-URIs hinzugefügt wird',
      actions: {
        copy: {
          success: 'Umleitungs-URL in die Zwischenablage kopiert',
          failure: 'Umleitungs-URL konnte nicht in die Zwischenablage kopiert werden',
        },
      },
      insecure: {
        title: 'Unsichere Verbindung',
        message:
          'Sie greifen derzeit über eine unsichere Verbindung auf NestMTX zu. Die angegebene Umleitungs-URL verwendet ein sicheres Protokoll. Wenn Sie Ihren Server nicht für die Verwendung von HTTPS konfiguriert haben, müssen Sie die Adresse nach der Umleitung manuell von {https} in {http} ändern.',
      },
    },
  },
  index: {
    htop: {
      cpu: 'CPU-Auslastung',
      memory: 'Speichernutzung',
      processes: {
        title: 'NestMTX-Prozesse',
        pid: 'Prozess-ID',
        name: 'Prozessname',
        cpu: 'CPU-Auslastung',
        memory: 'Speichernutzung',
        uptime: 'Betriebszeit',
        empty: 'NestMTX hat keine laufenden Prozesse',
        actions: {
          start: 'Start',
          stop: 'Stoppen',
          restart: 'Neustart',
          kill: 'Töten',
        },
      },
      paths: {
        title: 'NextMTX-Pfade',
        path: 'Weg',
        ready: 'Streaming',
        uptime: 'Betriebszeit',
        tracks: 'Anzahl der Titel',
        dataRx: 'Empfangene Daten',
        dataTx: 'Gesendete Daten',
        empty: 'NestMTX hat keine aktiven Pfade',
      },
    },
  },
  camera: {
    status: {
      unconfigured: 'Nicht konfiguriert',
      disabled: 'Deaktiviert',
      dead: 'Kein Streaming',
      stopped: 'Gestoppt',
      unavailable: 'Nicht verfügbar',
      starting: 'Starten',
      running: 'Läuft',
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
    yes: 'Ja',
    no: 'NEIN',
  },
}
