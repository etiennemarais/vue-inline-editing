<template>
    <div class="app">
        <div class="container is-fluid">
            <div class="columns">
                <div class="column is-12">
                    <div class="columns">
                        <div class="column is-full">
                            <h1 class="title is-1">Inline components</h1>
                            <div v-if="isBeingEdited">
                                <vue-editor :editorToolbar="customToolbar" v-model="content"></vue-editor>
                                <a class="button" v-on:click="isBeingEdited = false">Save</a>
                            </div>
                            <div v-else="isBeingEdited" v-on:click="isBeingEdited = true">
                                <p v-html="content"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">&nbsp;</div>
        </div>
    </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
    name: "App",
    components: {
        VueEditor
    },
    data() {
        return {
            content: "This is the initial paragraph to render and if you click on this you should be able to edit it",
            isBeingEdited: false,
            customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }]
            ]
        }
    },
    methods: {
        init () {

        }
    },
    created () {
        this.init()
    }
};
</script>
