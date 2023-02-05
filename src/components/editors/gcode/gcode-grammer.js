Prism.languages.gcode = {
    comment: /;.*|\B\(.*?\)\B/,
    block: /\b([N](\d)+)/,
    gkey: /([G](\d)+)/,
    mkey: /([M](\d)+)/,
    tkey: /([T](\d)+)/,
    coordinate: /([XYZIJR](\d)+((\.)?(\d)+))/,
    string: {
        pattern: /"(?:""|[^"])*"/,
        greedy: true
    },
    keyword: /\b[GM]\d+(?:\.\d+)?\b/,
    property: /\b[A-Z]/,
    checksum: {
        pattern: /(\*)\d+/,
        lookbehind: true,
        alias: 'number'
    },
    // T0:0:0
    punctuation: /[:*]/
};
