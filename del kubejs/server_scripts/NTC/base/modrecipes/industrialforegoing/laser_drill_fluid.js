onEvent('recipes', (event) => {
    var nether_end_biomes = end_biomes.concat(nether_biomes);

    event.remove({ id: 'industrialforegoing:laser_drill_fluid/oil' });
    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"thermal:crude_oil",Amount:10}',
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: nether_end_biomes
                },
                depth_min: 5,
                depth_max: 20,
                weight: 8
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens15'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });

    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"mekanism:oxygen",Amount:10}',
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: nether_end_biomes
                },
                depth_min: 250,
                depth_max: 255,
                weight: 10
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens0'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });

    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"industrialforegoing:essence",Amount:5}',
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: nether_end_biomes
                },
                depth_min: 5,
                depth_max: 10,
                weight: 4
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens13'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });

    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"tconstruct:blood",Amount:500}',
        rarity: [
            {
                whitelist: {
                    type: 'minecraft:worldgen/biome',
                    values: nether_biomes
                },
                blacklist: {},
                depth_min: 5,
                depth_max: 10,
                weight: 14
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens14'
        },
        entity: 'minecraft:villager',
        type: 'industrialforegoing:laser_drill_fluid'
    });

    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"productivebees:honey",Amount:50}',
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: nether_end_biomes
                },
                depth_min: 5,
                depth_max: 100,
                weight: 10
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens4'
        },
        entity: 'minecraft:empty',
        type: 'industrialforegoing:laser_drill_fluid'
    });
    
    event.recipes.industrialforegoing.laser_drill_fluid({
        type: 'industrialforegoing.laser_drill_fluid',
        output: '{FluidName:"industrialforegoing:pink_slime",Amount:10}',
        rarity: [
            {
                whitelist: {},
                blacklist: {
                    type: 'minecraft:worldgen/biome',
                    values: nether_end_biomes
                },
                depth_min: 5,
                depth_max: 100,
                weight: 10
            }
        ],
        pointer: 0,
        catalyst: {
            item: 'industrialforegoing:laser_lens6'
        },
        entity: 'aquaculture:jellyfish',
        type: 'industrialforegoing:laser_drill_fluid'
    });
});
