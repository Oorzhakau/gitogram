import comment from './comment.vue'

export default {
  title: 'comment',
  components: { comment }
}

export const DefaultView = () => ({
  components: {
    comment
  },
  template: `
    <comment
     username="Иванов Иван"
     text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error impedit reprehenderit et nulla libero, culpa vel ipsum laborum sequi molestias corporis qui saepe eveniet iste assumenda deserunt nemo inventore facere?"
     />
  `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
