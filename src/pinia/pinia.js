import { defineStore } from "pinia";
export const storage = defineStore('countries', {
    // states
    state: () => {
        return {
            search: '',
            countries: null,
            loading: false,
            query: 'all',
        }
    },
    // action
    actions: {
        handleChangeSearch(newValue) {
            this.search = newValue.target.value
        },
        handleSelect(newValue) {
            this.query = newValue
        },
        async fetchApi() {
            try {
                this.loading = true
                const data = await fetch(`https://restcountries.com/v3.1/${this.query}`)
                const json = await data.json()
                this.countries = json
                this.loading = false

            } catch (err) {
                this.loading = false

            }
        }
    },
    getters: {
        filterCountries: (state) => state.countries !== null ? state.countries.filter(country => {
            return country?.name?.common.toLowerCase().includes(state.search.trim().toLowerCase())
        }) : []
    }
    
})