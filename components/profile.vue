<template>
    <div>
        <button @click="goback()" class="btn">go back</button>
        <div id="profile" class="card">
            <div class="profile-header">
                <h3>{{ people.name }}</h3>
            </div>
            <div class="profile">
                <h4>Gender: {{ people.gender }}</h4>
                <h4>Birth Year: {{ people.birth_year }}</h4>
                <h4>Height: {{ people.height }}</h4>
                <h4>Mass: {{ people.mass }}</h4>
                <h4>Hair Color: {{ people.hair_color }}</h4>
                <h4>Skin Color: {{ people.skin_color }}</h4>
                <h4>eye Color: {{ people.eye_color }}</h4>
            </div>
        </div>
    </div>
</template>

<script>

export default {
	data() {
        return {
            people: []
        }
    },
    created() {
        if(this.$route.params.people) {
            this.people = this.$route.params.people;
        }
    },
    computed: {
        personId() {
        return this.$route.params.personId;
        }
    },
    methods: {
        goback(){
            this.$router.push('/people');
        }
    }
}

</script>

<style>
	.card {
		border: 1px solid #ddd;
		margin: auto;
        width: 300px;
        height:auto;
        background-color:#ddd;
	}

    .profile{
        background-color: #ffffff;
        padding:10px;
        text-align:left;
    }

	button {
        cursor: pointer;
        padding: 20px;
        font-size: 20px;
        line-height: 0px;
        margin: 10px;
        color: #ffffff;
        background-color: #298250;
	}
</style>
