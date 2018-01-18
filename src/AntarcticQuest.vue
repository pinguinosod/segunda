<template>
    <div id="app-antarctic-quest">
        
        <v-layout row wrap>
            
            <v-flex xs12>
                <h1>Antarctic Quest - Bad Choices</h1>
            </v-flex>
            
            <v-flex xs12>
                <p v-html="prompt"></p>
            </v-flex>
            
            <v-flex xs12>
                <p v-if="player.freezing > 0 && player.alive" class="blue--text body-2">You are freezing</p>
                <p v-if="player.burning > 0 && player.alive" class="red--text body-2">You are burning</p>
            </v-flex>
            
            <v-flex xs12>
                <p v-if="player.alive" class="body-2">What will you do?</p>
                <p v-else class="red--text body-2">You are dead.</p>
            </v-flex>
            
            <v-flex xs12>
                <v-btn v-for="(choice, index) in choices" color="primary"  v-on:click="choose(choice)">{{ choicesText[index] }}</v-btn>
            </v-flex>
            
        </v-layout>
    </div>
</template>

<script>
    
export default {
    name: 'app-antarctic-quest',
    components: {
    },
    data () {
        return {
            player:{},
            choices:{},
            prompt:''
        }
    },
    mounted:function(){
        this.choose(0)
    },
    methods: {
        choose: function(choice) {
            this.choices = []
            this.choicesText = []
            this.prompt = ''
            
            if (this.player.freezing >= 10 && choice != 0) {
                this.player.alive = false;
                this.prompt = 'You froze to death.'
            }
            else if (this.player.burning >= 10 && choice != 0) {
                this.player.alive = false;
                this.prompt = 'You burnt to death.'
            }
            else {
                switch (choice) {
                    case 0: // starting point
                    
                        this.player.hp = 200
                        this.player.maxHp = 200
                        this.player.mana = 100
                        this.player.maxMana = 100
                        this.player.exp = 0
                        this.player.level = 1
                        this.player.freezing = 0
                        this.player.burning = 0
                        this.player.alive = true;
                    
                        this.prompt = ` You are lying down, with your eyes closed, you have been sleeping for a while, this is not your bed, it is too cold.<br>
                                        Your head hurts, actually your entire body hurts, but you feel a very specific kind of pain on your forehead.<br>
                                        As you open your eyes you see a bird's face looking at you, it was picking your forehead, trying to wake you up.<br>
                                        You look around, you are in the middle of the snow, there is snow in every direction, all you see is snow.<br>
                                        You see some mountains at the very far, they are covered with snow.<br>
                                        You hear the wind blowing loud.<br>
                                        You feel a cold breeze, it is really cold here, at least you are wearing a coat.<br>
                                        You smell something, it smells like... bird.<br>
                                        The penguin starts to run...`
                                
                        this.player.freezing++;
                        
                        this.choices = [1,2]
                                
                        this.choicesText = [
                            'Stay where you are',
                            'Follow the penguin'
                        ]
                    break;
                    
                    
                    case 1: // stay where you are
                        this.prompt = ` You stay where you are, the penguing is getting away.<br>
                                        You see some mountains at the very far, they are covered with snow.<br>
                                        You hear the wind blowing loud.<br>
                                        You feel a cold breeze, it is really cold here, at least you are wearing a coat.<br>
                                        You smell something, it smells like... bird.<br>
                                        The penguin starts to run...`
                                
                        this.player.freezing++;
                        
                        this.choices = [1,2]
                                
                        this.choicesText = [
                            'Stay where you are',
                            'Follow the penguin'
                        ]
                    break;
                    
                    
                    case 2: // Follow the penguin
                        this.prompt = ` You follow the penguin until you see him go into a cave under the earth.<br>
                                        The cave is small, but you could get inside crouching.<br>
                                        It is very cold outisde, it might be warmer inside the cave.`
                        
                        this.player.freezing++;
                        
                        this.choices = [3,4]
                                
                        this.choicesText = [
                            'Stay where you are',
                            'Get inside the cave',
                        ]
                    break;
                    
                    case 3: // stay outiside the cave
                        this.prompt = `You are standing outisde the cave...`
                        
                        this.player.freezing++;
                        
                        this.choices = [3,4]
                                
                        this.choicesText = [
                            'Stay where you are',
                            'Get inside the cave',
                        ]
                    break;
                    
                    case 4: // get inside the cave
                        this.prompt = ` You go inside the cave by crouching, it is dark inside.<br>
                                        Suddenly you slip in the ice, you start to fall inside the cave.<br>
                                        After some seconds sliding off down the cave, you fall into a big chamber.`
                        
                        this.player.alive = false;
                    break;
                }
            }
            
            if (!this.player.alive){
                this.choices = [0]
                        
                this.choicesText = [
                    'Restart'
                ]
            }
            
        }
    }
}

</script>

<style>
    
</style>