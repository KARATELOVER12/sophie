player.onChat("shoot at someone", function () {
    blocks.place(OBSIDIAN, pos(5, 2, 1))
    mobs.spawn(ALLAY, pos(5, 2, 1))
    mobs.spawn(SNIFFER, pos(2, 1, 5))
    player.runChatCommand("Kill")
    if (false) {
        blocks.place(FIRE, pos(2, 1, 5))
        player.say("Hello my name is  Bob")
        gameplay.setWeather(THUNDER)
        gameplay.timeSet(gameplay.time(DAWN))
        gameplay.setDifficulty(NORMAL)
        gameplay.setGameMode(
        SURVIVAL,
        mobs.target(LOCAL_PLAYER)
        )
        for (let index = 0; index < 15; index++) {
            mobs.kill(
            mobs.target(ALL_PLAYERS)
            )
        }
        agent.move(UP, 3)
    } else if (false) {
    	
    } else {
        loops.pause(200)
    }
})
