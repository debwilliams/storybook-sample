// index.stories.js

import Container from './index.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Containers/Container',
  component: Container,
};

export const Default = () => ({
  components: { Container },
  template: "<container>This is some content</container>"
});