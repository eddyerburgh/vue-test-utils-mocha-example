import { shallow } from 'vue-test-utils'
import { expect } from 'chai'
import List from '@/components/List'

describe('List.vue', () => {
  it('renders li for each item in props.items', () => {
    const items = ['', '']
    const wrapper = shallow(List, {
      propsData: { items }
    })
    expect(wrapper.findAll('li').length).to.equal(items.length)
  })
})
