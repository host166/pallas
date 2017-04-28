<template>
<i :class="clazz"><slot></slot></i>
</template>

<script>
export default {
    name: 'icon',
    data(){
        return {

        }
    },
    props: {
        small: Boolean,
        medium: Boolean,
        large: Boolean,
        xlarge: Boolean
    },
    computed: {
        clazz(){
            return {
                'icon-small': this.small,
                'icon-medium':  this.medium,
                'icon-large':  this.large,
                'icon-x-large':  this.xlarge
            }
        }
    }
}
</script>
