import { mount } from '@vue/test-utils'
import issues from '../../src/components/issues/issues.vue'

describe('issues component', () => {
  it('выполняет emit события loadContent', async () => {
    const wrapper = mount(issues)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadContent.length).toBe(1)
  })

  it('отрисует список элементов', async () => {
    const issue = {
      id: '0',
      user: { login: 'joshua_l', id: 1 },
      body: "Enable performance measuring in production, at the user's request"
    }

    const wrapper = mount(issues, {
      propsData: {
        issues: Array.from({ length: 3 }).map(x => issue)
      }
    })

    expect(wrapper.find('.comments-container').exists()).toBe(false)

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.findAll('.comments-item').length).toBe(3)
  })

  it('не вызывает событие contentLoaded если внутри есть список issues', async () => {
    const issue = {
      id: '0',
      user: { login: 'joshua_l', id: 1 },
      body: "Enable performance measuring in production, at the user's request"
    }

    const wrapper = mount(issues, {
      propsData: {
        issues: Array.from({ length: 3 }).map(x => issue)
      }
    })

    await wrapper.find('.toggler button').trigger('click')

    expect(wrapper.emitted().loadContent).toBeUndefined()
  })
})
