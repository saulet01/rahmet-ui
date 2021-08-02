import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import RahmetBtn from "./rahmet-btn.vue";

export default {
    title: "Button",
    argTypes: {
        name: {
            control: "text",
        },
        variant: {
            options: ["primary", "secondary"],
            control: { type: "radio" },
        },
    },
};

const Template = (args) => ({
    components: { RahmetBtn },
    setup() {
        return { args };
    },
    template: `<rahmet-btn @click="action" v-bind="args">Hello Button</rahmet-btn>`,
    methods: { action: action("clicked") },
});

export const Primary = Template.bind({});
Primary.args = {
    name: "Введите название кнопки",
    variant: "primary",
};
