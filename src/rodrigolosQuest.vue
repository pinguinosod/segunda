<template>
    <div id="app-rodrigolos-quest" class="text-xs-center">
        <v-layout row wrap>
            
            <v-flex xs12>
                <h1>Rodrigolo's Quest</h1>
            </v-flex>
            
            <v-flex xs12>
                <v-chip color="green" text-color="white">
                    <v-avatar class="green darken-4">{{ rodrigolo.age }}</v-avatar>
                    Years old
                </v-chip>
            </v-flex>
            <v-flex xs12>
                <v-chip color="red" text-color="white">
                    <v-avatar right class="red darken-4">{{ rodrigolo.fatness }}</v-avatar>
                    Fatness
                </v-chip>
            </v-flex>
            
            <v-flex xs12>
                <p>You are Rodrigolo and this is the year {{ 2005+rodrigolo.age }}, what are you going to do this year?</p>
                <v-btn color="error" v-on:click="rodrigolo.age += 1; rodrigolo.fatness +=1; checkHealth()" :disabled="!rodrigolo.alive">Eat pizza</v-btn>
                <v-btn color="success" v-on:click="rodrigolo.age += 1; rodrigolo.fatness -=1; checkHealth()" :disabled="!rodrigolo.alive">Exercise</v-btn>
            </v-flex>
            
            <v-flex xs12 v-show="!rodrigolo.alive">
                <v-card color="error" class="white--text">
                    You died by {{ rodrigolo.deadCause }}.
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<style>
    
</style>

<script>

export default {
    name: 'app-rodrigolos-quest',
    components: {
    },
    data () {
        return {
            rodrigolo : {
                age:13,
                fatness:10,
                alive:true,
                deadCause:''
            }
        }
    },
    methods: {
        checkHealth: function () {
            if (this.rodrigolo.fatness == 20) {
                this.rodrigolo.alive = false;
                this.rodrigolo.deadCause = 'diabetes';
            }
            if (this.rodrigolo.fatness == 0) {
                this.rodrigolo.alive = false;
                this.rodrigolo.deadCause = 'too much excersie';
            }
            if (this.rodrigolo.age == 110) {
                this.rodrigolo.alive = false;
                this.rodrigolo.deadCause = 'being too old';
            }
        }
    }
}
</script>
