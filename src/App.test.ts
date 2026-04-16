import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App', () => {
  it('renders the core portfolio content', () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('Sajib Adhikary')
    expect(wrapper.text()).toContain('Software Engineer')
    expect(wrapper.text()).toContain('Tech Matrix')
  })

  it('links to the local resume file', () => {
    const wrapper = mount(App)
    const cvLink = wrapper.find('a[href="/resume-of-sajib-adhikary.pdf"]')

    expect(cvLink.exists()).toBe(true)
  })

  it('renders the primary actions', () => {
    const wrapper = mount(App)

    expect(wrapper.text()).toContain('Links')
    expect(wrapper.text()).toContain('CV')
    expect(wrapper.text()).toContain('Contact')
  })
})
