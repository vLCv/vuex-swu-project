<template>
	<div id="people-card" class="card">
        <div class="profile-header">
            <router-link
                  :to="{ name: 'profile', params: { id, people: people }}"
                  class="nav-link"
                  active-class="active"
                >
                <h3>({{ id }}) {{ people.name }}</h3>
            </router-link>
        </div>
        <div class="profile">
            <h4>Gender: {{ people.gender }}</h4>
            <h4>Birth Year: {{ people.birth_year }}</h4>
        </div>
	</div>
</template>

<script>

export default {
	data() {
		return {
            people: [],
            id: 0
		}
    },
    props: ['people', 'id']
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
</style>
