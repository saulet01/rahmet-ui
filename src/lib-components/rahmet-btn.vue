<template>
    <button
        :class="{
            btn__primary: variant === 'primary',
            btn__secondary: variant === 'secondary',
        }"
        class="btn__default"
    >
        {{ name }}
    </button>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: "Введите название кнопки",
        },
        variant: {
            type: String,
            default: "primary",
        },
    },
};
</script>

<style scoped>
.btn__default {
    padding: 1em 3em 1em 3em;
    font-weight: 500;
    border-radius: 7px;
    width: 100%;
    font-size: 14px;
}

.btn__primary {
    background-color: #ff3f61;
    color: #ffffff;
    border: none;
}

.btn__secondary {
    border: 3px solid #ff3f61;
    color: #ff3f61;
    background-color: transparent;
}
</style>
