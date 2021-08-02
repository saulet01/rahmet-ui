<script>
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { RahmetBtn } from "@/entry.esm";

export default defineComponent({
    name: "ServeDev",
    components: {
        RahmetBtn,
    },
});
</script>

<template>
    <div id="app">
        <rahmet-btn></rahmet-btn>
    </div>
</template>
