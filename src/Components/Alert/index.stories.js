// index.stories.js

import Alert from './index.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Alert',
  component: Alert,
  argTypes: {
    text: String,
    required: true,
  }
};

const DefaultAlert = (args, { argTypes }) => ({
  components: { Alert },
  props: Object.keys(argTypes),
  template: `<alert v-bind="$props" />`,
});

export const Default = DefaultAlert.bind({});
Default.args = {
  text: "Some text goes here"
}