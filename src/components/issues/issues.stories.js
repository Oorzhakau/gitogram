import issues from './issues.vue'

export default {
  title: 'issues',
  components: { issues }
}

export const DefaultView = () => ({
  components: {
    issues
  },
  setup () {
    return {
      issues: [
        {
          id: '0',
          user: { login: 'joshua_l', id: 1 },
          body: "Enable performance measuring in production, at the user's request"
        },
        {
          id: '2',
          user: { login: 'joshua', id: 2 },
          body: 'Lorem ipsum'
        }
      ]
    }
  },
  template: `
    <issues :issues="issues"></issues>
    `
})

DefaultView.story = {
  name: 'Стандартный вид'
}
