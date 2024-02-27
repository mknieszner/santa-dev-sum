const INITIAL_CAMERA = {
    x: -8.5, y: 25, z: -40
};

const SCORES_CAMERA = [
    {
        x: 0, y: 0, z: 80
    }, {
        x: 76, y: 0, z: -39
    }, {
        x: -76, y: 0, z: -39
    }
];

const SCORES_STEP = {
    camera: {
        locked: false,
        position: SCORES_CAMERA[0]
    },
    menuContent: 'SCORES',
    lights: {
        ambient: {
            intensity: 0.2
        },
        sun: {
            color: 0xffffff
        }
    },
    texts: {
        clp: {
            scale: 0,
        },
        ttl: {
            scale: 0,
        },
        tty: {
            scale: 0,
        },
        tta: {
            scale: 0,
        },
        domain: {
            scale: 0,
        },
    },
    nucleus: {
        main: {
            scale: 0,
            insideTexture: 'mainNucleus',
        },
        red: {
            scale: 0,
            position: {x: 0, y: 0, z: 0},
            insideTexture: 'redInsideNucleus'
        },
        orange: {
            scale: 0,
            position: {x: 0, y: 0, z: 0},
            insideTexture: 'orangeNucleusInside'
        },
        green: {
            scale: 0,
            position: {x: 0, y: 0, z: 0},
            insideTexture: 'greenNucleusInside'
        },
        purple: {
            scale: 0,
            position: {x: 0, y: 0, z: 0},
            insideTexture: 'purpleNucleusInside'
        },
        pink: {
            scale: 0,
            position: {x: 0, y: 0, z: 0},
            insideTexture: 'pinkNucleusInside'
        },
        yellow: {
            scale: 0,
            position: {x: 0, y: 0, z: 0},
            insideTexture: 'yellowNucleusInside'
        }
    },
    shield: {
        white: {
            scale: 0,
            color: 'silver'
        },
        red: {
            scale: 0,
            color: 'darkred'
        },
        green: {
            scale: 0,
            color: 'darkgreen'
        },
        orange: {
            scale: 0,
            color: '#6B6E77'
        }
    },
    guard: {
        scale: 0
    },
    satellite: {
        update: false,
        selfRotationVelocity: 1,
        draco: {
            scale: 0,
            radius: 6,
            position: {x: 0, y: 0, z: 0}
        },
        gemini: {
            scale: 0,
            radius: 6,
            position: {x: 0, y: 0, z: 0}
        },
        aquarius: {
            scale: 0,
            radius: 6,
            position: {x: 0, y: 0, z: 0}
        },
        taurus: {
            scale: 0,
            radius: 6,
            position: {x: 0, y: 0, z: 0}
        },
        domain: {
            scale: 0,
            radius: 0,
            position: {x: 0, y: 0, z: 0}
        }
    },
    defaultPlanet: {
        scale: 0,
    },
    planets: {
        planet0: {
            scale: 0
        },
        planet1: {
            scale: 0
        },
        planet2: {
            scale: 0
        },
        planet3: {
            scale: 0
        },
        planet4: {
            scale: 0
        },
        planet5: {
            scale: 0
        },
        planet6: {
            scale: 0
        }
    },
    missiles: {
        scale: 0,
        minTarget: 0.5,
    },
    description: {
        scale: 0,
        color: 'red',
        targetOpacity: 0,
        content: [],
        activeActor: null,
        video: {
            on: false
        }
    },
    cockpit: {
        scale: 0,
    },
    tty: {
        content: []
    }
}

const SCORES = [
    {
        y: 7,
        title: '',
        descriptionSize: 1.2,
        description: 'C o r p o r a t e   L e n d i n g   P l a t f o r m\n\n'
            + '\n\n'
            + '                 -  POSUMOWOWANIE   2023\n'
            + '                      -  HISTORIA   CHAPTERU\n'
    },
    {
        y: 1,
        title: 'PRZEWIDYWALNOSC WYCEN - 91.40 %',
        description: 'P. Generyczny 3.1...........93.35 %\n' +
            'P. Generyczny 3.2..........80.35 %\n' +
            'P. Generyczny 3.3...........80.31 %\n\n' +
            'Arkusz Oceny....................91.09 %\n' +
            'Sublimity..........................102.84 %\n' +
            'Proces CORE......................92.79 %\n\n' +
            'Nowy KI..................................88.54 %\n' +
            'LPL............................................102.71 %\n' +
            'LNG CORE...............................90.49 %'
    },
    {
        y: 0,
        title: 'REFINEMENT',
        description: '2022 - TOTAL: 336 MD, PER DEV: 16.80 MD\n\n'
            + '2023 - TOTAL: 371 MD, PER DEV: 14.84 MD\n\n'
            + '                           ZMIANA r/r - 12 %'
    },
    {
        y: 0,
        title: 'BUG + BUGFIX',
        description: '2022 - TOTAL: 458 MD, PER DEV: 22.90 MD\n\n'
            + '2023 - TOTAL: 446 MD, PER DEV: 17,84 MD\n\n'
            + '                       ZMIANA r/r - 22,10 %'
    },
    {
        y: 3,
        title: 'CZAS PRACY NAD BUGAMI',
        description: '      2022:\n\n'
            + '< 8h :    87 %\n'
            + '< 4h :    76 %\n\n'
            + '      2023:\n\n'
            + '< 8h :    91 %\n'
            + '< 4h :    76 %\n\n'
    },
    {
        y: 3,
        title: 'WYDAJNOSC APLIKACJI',
        description: 'MAKSYMALNY CZAS WEJSCIA DO KALULATORA:\n\n'
            + '                                2022     -     120 s\n'
            + '                                2024     -     15 s\n\n'
            + 'MAKSYMALNY CZAS WEJSCIA DO PORTFELA:\n\n'
            + '                                2022     -     30 s\n'
            + '                                2024     -     2 s\n\n'
    }
]

export const SCORES_STEPS = [
    {
        ...SCORES_STEP,
        camera: {
            ...SCORES_STEP.camera,
            position: INITIAL_CAMERA
        },
        texts: {
            ...SCORES_STEP.texts,
            scores: {
                scale: 1,
            }
        }
    },
    {
        ...SCORES_STEP,
        texts: {
            ...SCORES_STEP.texts,
            scores: {
                scale: 1,
                data1: {
                    ...SCORES[0],
                    opacity: 1
                },
                data2: {
                    ...SCORES[1],
                    opacity: 0.1
                },
                data3: {
                    ...SCORES[2],
                    opacity: 0.1
                }
            }
        }
    },
    {
        ...SCORES_STEP,
        camera: {
            ...SCORES_STEP.camera,
            position: SCORES_CAMERA[1]
        },
        texts: {
            ...SCORES_STEP.texts,
            scores: {
                scale: 1,
                data1: {
                    ...SCORES[0],
                    opacity: 0.1
                },
                data2: {
                    ...SCORES[1],
                    opacity: 1
                },
                data3: {
                    ...SCORES[2],
                    opacity: 0.1
                }
            }
        }
    },
    {
        ...SCORES_STEP,
        camera: {
            ...SCORES_STEP.camera,
            position: SCORES_CAMERA[2]
        },
        texts: {
            ...SCORES_STEP.texts,
            scores: {
                scale: 1,
                data1: {
                    ...SCORES[0],
                    opacity: 0.1
                },
                data2: {
                    ...SCORES[1],
                    opacity: 0.1
                },
                data3: {
                    ...SCORES[2],
                    opacity: 1
                }
            }
        }
    },
    {
        ...SCORES_STEP,
        camera: {
            ...SCORES_STEP.camera,
            position: SCORES_CAMERA[0]
        },
        texts: {
            ...SCORES_STEP.texts,
            scores: {
                scale: 1,
                data1: {
                    ...SCORES[3],
                    opacity: 1
                },
                data2: {
                    ...SCORES[4],
                    opacity: 0.1
                },
                data3: {
                    ...SCORES[2],
                    opacity: 0.1
                }
            }
        }
    },
    {
        ...SCORES_STEP,
        camera: {
            ...SCORES_STEP.camera,
            position: SCORES_CAMERA[1]
        },
        texts: {
            ...SCORES_STEP.texts,
            scores: {
                scale: 1,
                data1: {
                    ...SCORES[3],
                    opacity: 0.1
                },
                data2: {
                    ...SCORES[4],
                    opacity: 1
                },
                data3: {
                    ...SCORES[5],
                    opacity: 0.1
                }
            }
        }
    },
    {
        ...SCORES_STEP,
        camera: {
            ...SCORES_STEP.camera,
            position: SCORES_CAMERA[2]
        },
        texts: {
            ...SCORES_STEP.texts,
            scores: {
                scale: 1,
                data1: {
                    ...SCORES[3],
                    opacity: 0.1
                },
                data2: {
                    ...SCORES[4],
                    opacity: 1
                },
                data3: {
                    ...SCORES[5],
                    opacity: 1
                }
            }
        }
    }
];
