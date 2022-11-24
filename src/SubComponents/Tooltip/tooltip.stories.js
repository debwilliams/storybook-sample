import Tooltip from './index.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'SubComponents/Tooltip',
  component: Tooltip,
    argTypes: {
      buttonName: {
            type: String,
            required: true
        },
        tooltipContent: {
            type: String,
            required: true
        }
  }
};

const DefaultTooltip = (args, { argTypes }) => ({
  components: { Tooltip },
  props: Object.keys(argTypes),
  template:  `<tooltip v-bind="$props" />`,
});

export const Default = DefaultTooltip.bind({});
Default.args = {
    buttonName: "Some text",
    tooltipContent: "This is the tooltip content"
}