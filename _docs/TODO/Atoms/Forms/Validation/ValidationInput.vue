<script>
// import {ValidationProvider} from 'vee-validate';

import YInputBase from '../Inputs/InputBase.vue';

export default {
    extends: YInputBase,

    props: {
        /**
         * The errortext when not enabled
         */
        errorText: {
            type: String,
            default: '',
        },

        rules: {
            type: String,
            default: '',
        },
    },

    methods: {
        getState(dirty, errors) {
            if (!dirty) {
                return;
            }

            if (errors.length === 0) {
                return 'success';
            }

            return 'error';
        },
    },

    computed: {
        hasRules() {
            return this.rules.length !== 0;
        },
    },

    components: {
        // ValidationProvider,
        // translations,
        // VueI18n
    },
};
</script>
