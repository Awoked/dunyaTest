

var rotationDelay = 3000
var scaleFactor = 0.6
var degPerSec = 6
var angles = { x: -20, y: 40, z: 0 }
var colorWater = '#ECECEC'
var colorLand = '#8B8B8B'
var colorGraticule = '#ECECEC'
var colorCountry = '#FF0000'


var countriesList = [
    {
        "type": "Feature",
        "id": "792",
        "properties": {},
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [
                            41.55341553415536,
                            41.53596450770293
                        ],
                        [
                            42.619026190261906,
                            41.58335614859622
                        ],
                        [
                            43.5838358383584,
                            41.092514153629935
                        ],
                        [
                            43.75303753037531,
                            40.740461964136884
                        ],
                        [
                            43.65583655836559,
                            40.25300508637726
                        ],
                        [
                            44.4010440104401,
                            40.00419897168746
                        ],
                        [
                            44.79344793447936,
                            39.71307889191435
                        ],
                        [
                            44.109441094410954,
                            39.42872904655458
                        ],
                        [
                            44.42264422644226,
                            38.28117431349547
                        ],
                        [
                            44.22464224642246,
                            37.971436089085714
                        ],
                        [
                            44.771847718477204,
                            37.17085586970967
                        ],
                        [
                            44.29304293042932,
                            37.001600009376475
                        ],
                        [
                            43.943839438394406,
                            37.255483799876274
                        ],
                        [
                            42.777427774277754,
                            37.385810812332835
                        ],
                        [
                            42.34902349023491,
                            37.23009542082629
                        ],
                        [
                            41.211412114121146,
                            37.074380029319755
                        ],
                        [
                            40.675006750067496,
                            37.091305615353065
                        ],
                        [
                            39.5229952299523,
                            36.715557605413366
                        ],
                        [
                            38.698586985869866,
                            36.712172488206704
                        ],
                        [
                            38.169381693816945,
                            36.901739051779884
                        ],
                        [
                            37.06777067770679,
                            36.6224668822301
                        ],
                        [
                            36.74016740167403,
                            36.81711112161328
                        ],
                        [
                            36.686166861668625,
                            36.26025934111705
                        ],
                        [
                            36.41616416164163,
                            36.0402267226839
                        ],
                        [
                            36.149761497614975,
                            35.821886662854055
                        ],
                        [
                            35.782557825578266,
                            36.275492368547035
                        ],
                        [
                            36.16056160561607,
                            36.65124037848675
                        ],
                        [
                            35.55215552155522,
                            36.56491988971682
                        ],
                        [
                            34.71334713347133,
                            36.79510785976997
                        ],
                        [
                            34.02574025740259,
                            36.21963793463708
                        ],
                        [
                            32.51012510125102,
                            36.10792906681718
                        ],
                        [
                            31.700117001170014,
                            36.64447014407342
                        ],
                        [
                            30.620106201062015,
                            36.67832131614006
                        ],
                        [
                            30.38970389703897,
                            36.26364445832371
                        ],
                        [
                            29.698496984969864,
                            36.14516535609047
                        ],
                        [
                            28.733687336873373,
                            36.67662875753673
                        ],
                        [
                            27.642876428764282,
                            36.65801061290007
                        ],
                        [
                            27.048870488704893,
                            37.653235071659296
                        ],
                        [
                            26.31806318063181,
                            38.20839429355219
                        ],
                        [
                            26.80406804068042,
                            38.985278692481586
                        ],
                        [
                            26.170461704617054,
                            39.46427277722455
                        ],
                        [
                            27.279272792727937,
                            40.42056838810713
                        ],
                        [
                            28.820088200882026,
                            40.459497235983775
                        ],
                        [
                            29.24129241292414,
                            41.21945604887985
                        ],
                        [
                            31.145711457114572,
                            41.08743647781995
                        ],
                        [
                            32.34812348123481,
                            41.73568642289611
                        ],
                        [
                            33.51453514535146,
                            42.018343709652555
                        ],
                        [
                            35.16695166951669,
                            42.040346971495865
                        ],
                        [
                            36.912969129691305,
                            41.334550033906424
                        ],
                        [
                            38.34938349383495,
                            40.948646672346726
                        ],
                        [
                            39.51219512195124,
                            41.102669505249935
                        ],
                        [
                            40.372603726037255,
                            41.01296389927333
                        ],
                        [
                            41.55341553415536,
                            41.53596450770293
                        ]
                    ]
                ],
                [
                    [
                        [
                            26.055260552605546,
                            40.82339733570015
                        ],
                        [
                            26.29286292862929,
                            40.9367987621234
                        ],
                        [
                            26.60246602466026,
                            41.561352886752914
                        ],
                        [
                            26.11646116461165,
                            41.82708458747604
                        ],
                        [
                            27.135271352713545,
                            42.14190048769579
                        ],
                        [
                            27.995679956799563,
                            42.008188358032555
                        ],
                        [
                            28.114481144811464,
                            41.62228499647286
                        ],
                        [
                            28.989289892898938,
                            41.30069886183978
                        ],
                        [
                            28.80568805688057,
                            41.05527786435664
                        ],
                        [
                            27.617676176761762,
                            40.99942343044668
                        ],
                        [
                            27.192871928719285,
                            40.69137776464025
                        ],
                        [
                            26.357663576635787,
                            40.15145157017734
                        ],
                        [
                            26.044460444604454,
                            40.618597744696984
                        ],
                        [
                            26.055260552605546,
                            40.82339733570015
                        ]
                    ]
                ]
            ]
        }
    },
    {
        "type": "Feature",
        "id": "392",
        "properties": {},
        "geometry": {
            "type": "MultiPolygon",
            "coordinates": [
                [
                    [
                        [
                            134.63954639546398,
                            34.14963876276204
                        ],
                        [
                            134.76554765547655,
                            33.806049366285635
                        ],
                        [
                            134.20394203942038,
                            33.20180594489611
                        ],
                        [
                            133.7935379353794,
                            33.521699520925864
                        ],
                        [
                            133.2787327873279,
                            33.289818992269375
                        ],
                        [
                            133.0159301593016,
                            32.704193715516496
                        ],
                        [
                            132.36432364323645,
                            32.98854356087628
                        ],
                        [
                            132.37152371523717,
                            33.46415252841257
                        ],
                        [
                            132.92592925929262,
                            34.05993315678543
                        ],
                        [
                            133.49473494734946,
                            33.94483917175886
                        ],
                        [
                            133.9051390513905,
                            34.364593705385204
                        ],
                        [
                            134.63954639546398,
                            34.14963876276204
                        ]
                    ]
                ],
                [
                    [
                        [
                            140.97560975609758,
                            37.142082373453036
                        ],
                        [
                            140.60120601206012,
                            36.343194712680315
                        ],
                        [
                            140.77400774007742,
                            35.84219736609404
                        ],
                        [
                            140.2520025200252,
                            35.138092987107925
                        ],
                        [
                            138.97398973989743,
                            34.667561695381636
                        ],
                        [
                            137.21717217172176,
                            34.60662958566168
                        ],
                        [
                            135.79155791557918,
                            33.46415252841257
                        ],
                        [
                            135.1219512195122,
                            33.848363331368944
                        ],
                        [
                            135.0787507875079,
                            34.59647423404169
                        ],
                        [
                            133.33993339933403,
                            34.37644161560853
                        ],
                        [
                            132.15552155521556,
                            33.9042177652789
                        ],
                        [
                            130.98550985509854,
                            33.88559962064224
                        ],
                        [
                            132.00072000720007,
                            33.14933662819281
                        ],
                        [
                            131.3311133111331,
                            31.450007790447486
                        ],
                        [
                            130.68670686706866,
                            31.03025325682114
                        ],
                        [
                            130.20070200702008,
                            31.417849176984177
                        ],
                        [
                            130.44910449104492,
                            32.319982912560135
                        ],
                        [
                            129.81549815498158,
                            32.611102992333244
                        ],
                        [
                            129.4086940869409,
                            33.2965892266827
                        ],
                        [
                            130.35550355503557,
                            33.60463489248913
                        ],
                        [
                            130.8775087750878,
                            34.232574134325304
                        ],
                        [
                            131.88551885518854,
                            34.7504970669449
                        ],
                        [
                            132.61632616326165,
                            35.432598184087695
                        ],
                        [
                            134.6071460714607,
                            35.732181056877465
                        ],
                        [
                            135.67635676356764,
                            35.527381465874285
                        ],
                        [
                            136.7239672396724,
                            37.30456799937291
                        ],
                        [
                            137.389973899739,
                            36.82726647323328
                        ],
                        [
                            138.8587885878859,
                            37.82756860780249
                        ],
                        [
                            139.4275942759428,
                            38.21516452796553
                        ],
                        [
                            140.0540005400054,
                            39.438884398174565
                        ],
                        [
                            139.88479884798846,
                            40.56274331078703
                        ],
                        [
                            140.3060030600306,
                            41.19576022843319
                        ],
                        [
                            141.3680136801368,
                            41.37855655759306
                        ],
                        [
                            141.91521915219153,
                            39.992351061464134
                        ],
                        [
                            141.8828188281883,
                            39.181615490468104
                        ],
                        [
                            140.96120961209613,
                            38.174543121485556
                        ],
                        [
                            140.97560975609758,
                            37.142082373453036
                        ]
                    ]
                ],
                [
                    [
                        [
                            143.90963909639095,
                            44.17466337029752
                        ],
                        [
                            144.6116461164612,
                            43.961400986277695
                        ],
                        [
                            145.32085320853207,
                            44.3845406371107
                        ],
                        [
                            145.54405544055442,
                            43.26237428310158
                        ],
                        [
                            144.06084060840607,
                            42.98817978936178
                        ],
                        [
                            143.18243182431826,
                            41.99464788920591
                        ],
                        [
                            141.61281612816128,
                            42.678441564952024
                        ],
                        [
                            141.06561065610657,
                            41.58504870719956
                        ],
                        [
                            139.9567995679957,
                            41.56981567976956
                        ],
                        [
                            139.81639816398166,
                            42.56334757992546
                        ],
                        [
                            140.31320313203133,
                            43.33346174444152
                        ],
                        [
                            141.3788137881379,
                            43.38931617835148
                        ],
                        [
                            141.67041670416705,
                            44.772136557273726
                        ],
                        [
                            141.96921969219693,
                            45.550713514806446
                        ],
                        [
                            143.1428314283143,
                            44.509789973757265
                        ],
                        [
                            143.90963909639095,
                            44.17466337029752
                        ]
                    ]
                ]
            ]
        }
    }
]

function enter(country) {
    var country = countryList.find(function (c) {
        return c.id === country.id
    })
    current.text(country && country.name || '')
}



function leave(country) {
    current.text('')
}

//
// Variables
//

var current = d3.select('#current')
var canvas = d3.select('#globe')
var context = canvas.node().getContext('2d')
var water = { type: 'Sphere' }
var projection = d3.geoOrthographic().precision(0.1)
var graticule = d3.geoGraticule10()
var path = d3.geoPath(projection).context(context)
var v0 // Mouse position in Cartesian coordinates at start of drag gesture.
var r0 // Projection rotation as Euler angles at start.
var q0 // Projection rotation as versor at start.
var lastTime = d3.now()
var degPerMs = degPerSec / 1000
var width, height
var land, countries
var countryList
var autorotate, now, diff, roation
var currentCountry

//
// Functions
//

function setAngles() {
    var rotation = projection.rotate()
    rotation[0] = angles.y
    rotation[1] = angles.x
    rotation[2] = angles.z
    projection.rotate(rotation)
}

function scale() {
    width = document.documentElement.clientWidth
    height = document.documentElement.clientHeight
    canvas.attr('width', width).attr('height', height)
    projection
        .scale((scaleFactor * Math.min(width, height)) / 2)
        .translate([width / 2, height / 2])
    render()
}

function startRotation(delay) {
    autorotate.restart(rotate, delay || 0)
}

function stopRotation() {
    autorotate.stop()
}

function dragstarted() {
    v0 = versor.cartesian(projection.invert(d3.mouse(this)))
    r0 = projection.rotate()
    q0 = versor(r0)
    stopRotation()
}

function dragged() {
    var v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this)))
    var q1 = versor.multiply(q0, versor.delta(v0, v1))
    var r1 = versor.rotation(q1)
    projection.rotate(r1)
    render()
}

function dragended() {
    startRotation(rotationDelay)
}

function render() {
    context.clearRect(0, 0, width, height)
    fill(water, colorWater)
    stroke(graticule, colorGraticule)
    fill(land, colorLand)

    fill(countriesList[0], colorCountry)
    fill(countriesList[1], colorCountry)
}

function fill(obj, color) {
    context.beginPath()
    path(obj)
    context.fillStyle = color
    context.fill()
}

function stroke(obj, color) {
    context.beginPath()
    path(obj)
    context.strokeStyle = color
    context.stroke()
}

function rotate(elapsed) {
    now = d3.now()
    diff = now - lastTime
    if (diff < elapsed) {
        rotation = projection.rotate()
        rotation[0] += diff * degPerMs
        projection.rotate(rotation)
        render()
    }
    lastTime = now
}

function loadData(cb) {
    d3.json('https://unpkg.com/world-atlas@1/world/110m.json', function (error, world) {
        if (error) throw error
        d3.tsv('https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/world-country-names.tsv', function (error, countries) {
            if (error) throw error
            cb(world, countries)
        })
    })
}

// https://github.com/d3/d3-polygon
function polygonContains(polygon, point) {
    var n = polygon.length
    var p = polygon[n - 1]
    var x = point[0], y = point[1]
    var x0 = p[0], y0 = p[1]
    var x1, y1
    var inside = false
    for (var i = 0; i < n; ++i) {
        p = polygon[i], x1 = p[0], y1 = p[1]
        if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside
        x0 = x1, y0 = y1
    }
    return inside
}

function mousemove() {
    var c = getCountry(this)
    // console.log(c);
    if (!c) {
        if (currentCountry) {
            // console.log(currentCountry);
            currentCountry = undefined
            render()
        }
        return
    }
    if (c === currentCountry) {
        return
    }
    currentCountry = c
    render()

}

function getCountry(event) {
    var pos = projection.invert(d3.mouse(event))
    return countries.features.find(function (f) {
        return f.geometry.coordinates.find(function (c1) {
            return polygonContains(c1, pos) || c1.find(function (c2) {
                return polygonContains(c2, pos)
            })
        })
    })
}


//
// Initialization
//

setAngles()


loadData(function (world, cList, airports) {
    land = topojson.feature(world, world.objects.land)
    countries = topojson.feature(world, world.objects.countries)
    countryList = cList


    window.addEventListener('resize', scale)
    scale()
    autorotate = d3.timer(rotate)
})