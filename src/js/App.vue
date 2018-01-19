<template>
    <div class="app">
        <div class="container is-fluid">
            <div class="columns">
                <div class="column is-12">
                    <div class="columns">
                        <div class="column is-full">
                            <h1 class="title is-1">Inline components</h1>
                            <p>Inline editing a piece of text is a tremendous productivity booster for users of your site.</p>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-full has-text-centered">
                            <a class="github-button" href="https://github.com/etiennemarais/vue-inline-editing/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork etiennemarais/vue-inline-editing on GitHub">Fork</a>
                            <a class="github-button" href="https://github.com/etiennemarais/vue-inline-editing" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star etiennemarais/vue-inline-editing on GitHub">Star</a>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-full">
                            <h4 class="title is-4">Demo</h4>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-full">
                            <div v-if="isBeingEdited" class="has-text-left">
                                <vue-editor :editorToolbar="customToolbar" v-model="content"></vue-editor>
                                <a class="button is-dark is-normal save-me" @click="isBeingEdited = false, hovered = false">Save</a>
                            </div>
                            <div v-else="isBeingEdited"
                                class="paragraph"
                                @click="isBeingEdited = true"
                                @mouseout="hover"
                                @mouseover="hover"
                                v-bind:class="{ 'text-hovered': hovered, 'text-not-hovered': !hovered }">
                                    <p class="inline" v-html="content"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">&nbsp;</div>
            <div class="columns">
                <div class="column is-12">
                    <p class="love has-text-centered">Made with <span class="icon"><i class="fa fa-heart"></i></span> in Cape Town by <a href="https://twitter.com/etbal">Etienne Marais</a></p>
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
            hovered: false,
            customToolbar: [
                ['bold', 'italic', 'underline'],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }]
            ]
        }
    },
    methods: {
        hover: function () {
            this.hovered = !this.hovered
        }
    }
};
</script>
