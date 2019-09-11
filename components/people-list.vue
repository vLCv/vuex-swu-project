<template>
	<div id="people">
        <div class="header">
            <span v-if="peopleList.length === 0">Fetching People List....</span>
            
            <div v-else>
                <h2>All People in the Star War Universe</h2>
                <h4>Click the name and get more detail profile</h4>
            </div>
        </div>

        <div v-for="(people, index) in peopleList.results" :key="index" class="card-list">
            <div class="card-item">
                <people-card :people="people" :id="index+1"/>
            </div>
        </div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import peopleCard from './people-card.vue'

export default {
    components: {
        peopleCard
    },
	mounted() {
        this.fetchPeopleList();
	},
	computed: mapState(['peopleList']),
	methods: {
        ...mapActions(['fetchPeopleList'])   
	}
}
</script>

<style>
    #people {
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        height: auto;
    }

    .header{
        flex-direction: column;
        width:100%;
    }

    .card-list{
        padding:10px;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        height: auto;
        justify-items: self-start;
    }
</style>
