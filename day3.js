const { landscape, testLandscape } = require("./day3data");

const parseLandscape = (landscape) => {
    return landscape.split(/\r?\n/);
}

const calculatePath = (landscape, rightshift) => {
    const parsedLandscape = parseLandscape(landscape);
    const mod = parsedLandscape[0].length;

    let treesHit = 0;
    for (i = 0; i < parsedLandscape.length; i++) {
        if (parsedLandscape[i].charAt((i*rightshift)%mod) == '#') {
            treesHit++;
        }
    }
    console.log('NUmber of trees hit:', treesHit);
}

calculatePath(landscape, 3);